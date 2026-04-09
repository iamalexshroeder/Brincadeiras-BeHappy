"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { XPReason } from "@prisma/client"
import { getLevelFromXp, GAMIFICATION_TIERS } from "@/utils/gamification"
import { revalidatePath } from "next/cache"

// XP awarded per action
const XP_VALUES = {
  PUBLISHED: 200,
  COMMENT_ADDED: 50,
  LIKE_GIVEN: 50,
  USED_CHECKED: 50,
  PROFILE_UPDATED: 100, // One-time bonus
  STREAK: 100,
  DAILY_LIMIT: 500,
}

/**
 * Gets the IDs of the Top 3 players by XP.
 */
async function getTopThreeIds() {
  const topUsers = await prisma.user.findMany({
    take: 3,
    orderBy: { xp: 'desc' },
    select: { id: true }
  })
  return topUsers.map(u => u.id)
}

/**
 * Awards XP to a user and creates a transaction record.
 * Includes a daily limit check (500 XP/day).
 */
async function awardXP(
  userId: string,
  amount: number,
  reason: XPReason,
  referenceId?: string
) {
  // 1. Check Daily Limit
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const dailyXP = await prisma.xPTransaction.aggregate({
    where: { 
      user_id: userId,
      created_at: { gte: today }
    },
    _sum: { amount: true }
  })

  const currentDailyTotal = dailyXP._sum.amount || 0
  
  // If already at or over limit, don't award more
  if (currentDailyTotal >= XP_VALUES.DAILY_LIMIT) {
    return { limited: true, currentDailyTotal }
  }

  // Calculate actual amount to award (clip at limit)
  let actualAmount = amount
  if (currentDailyTotal + amount > XP_VALUES.DAILY_LIMIT) {
    actualAmount = XP_VALUES.DAILY_LIMIT - currentDailyTotal
  }

  // 2. Get current XP
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { xp: true } })
  if (!user) return

  const previousLevel = getLevelFromXp(user.xp).level
  const newXp = user.xp + actualAmount
  const newLevel = getLevelFromXp(newXp).level

  // 3. Update user XP and log transaction
  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { xp: newXp },
    }),
    prisma.xPTransaction.create({
      data: {
        user_id: userId,
        amount: actualAmount,
        reason,
        reference_id: referenceId ?? null,
      },
    }),
  ])

  // 4. Notifications for level up
  if (newLevel > previousLevel) {
    const newTier = GAMIFICATION_TIERS.find((t) => t.level === newLevel)
    const title = newTier ? newTier.title : `Nível ${newLevel}`
    
    await prisma.notification.create({
      data: {
        user_id: userId,
        type: "GAMIFICATION",
        title: "Você subiu de nível!",
        message: `Parabéns! Você alcançou o ${title}. Continue interagindo para ganhar mais XP!`,
      },
    })
  }

  return { newXp, newLevel, awarded: actualAmount }
}

/**
 * Gets the authenticated user's profile from the DB, including
 * computed level, title and progress from their raw XP.
 */
export async function getProfile() {
  const session = await auth()
  if (!session?.user?.id) return null

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      avatar_url: true,
      bio: true,
      city: true,
      state: true,
      xp: true,
      streak_weeks: true,
      created_at: true,
      _count: {
        select: {
          brincadeiras: true,
        },
      },
    },
  })

  if (!user) return null

  const gamification = getLevelFromXp(user.xp)

  // Get counts for favorites (likes given) and contributions
  const [likesGivenCount, interactions] = await prisma.$transaction([
    prisma.interaction.count({
      where: { user_id: user.id, type: "LIKE" },
    }),
    prisma.interaction.findMany({
      where: { brincadeira: { user_id: user.id } },
      select: { type: true },
    }),
  ])

  // Count total likes and uses received across all user's activities
  const likesReceived = interactions.filter(i => i.type === "LIKE").length
  const usesReceived = interactions.filter(i => i.type === "USED").length

  // Count unread notifications
  const unreadNotificationsCount = await prisma.notification.count({
    where: { user_id: user.id, read: false }
  })

  const topThreeIds = await getTopThreeIds()
  let rankBadge: "gold" | "silver" | "bronze" | null = null
  if (topThreeIds[0] === user.id) rankBadge = "gold"
  else if (topThreeIds[1] === user.id) rankBadge = "silver"
  else if (topThreeIds[2] === user.id) rankBadge = "bronze"

  return {
    ...user,
    ...gamification,
    avatar: user.avatar_url ?? user.image,
    unreadNotificationsCount,
    rankBadge,
    stats: {
      favorites: likesGivenCount,
      contributions: user._count.brincadeiras,
      achievements: Math.floor(user.xp / 500),
      likesReceived,
      usesReceived
    }
  }
}


/**
 * Gets a public profile of another user by their ID.
 */
export async function getPublicProfile(userId: string) {
  const session = await auth()
  const currentUserId = session?.user?.id

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      image: true,
      xp: true,
      created_at: true,
      _count: {
        select: {
          brincadeiras: true,
        },
      },
    },
  })

  if (!user) return null

  const gamification = getLevelFromXp(user.xp)

  // Get their brincadeiras
  const brincadeiras = await prisma.brincadeira.findMany({
    where: { user_id: userId, published_at: { not: null } },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true },
      },
      comments: {
        include: {
          user: {
            select: { name: true, avatar_url: true, image: true },
          },
        },
        orderBy: { created_at: "desc" },
      },
      interactions: currentUserId
        ? {
            where: { user_id: currentUserId },
            select: { type: true },
          }
        : false,
    },
    orderBy: { published_at: "desc" }
  })

  const topThreeIds = await getTopThreeIds()
  let rankBadge: "gold" | "silver" | "bronze" | null = null
  if (topThreeIds[0] === user.id) rankBadge = "gold"
  else if (topThreeIds[1] === user.id) rankBadge = "silver"
  else if (topThreeIds[2] === user.id) rankBadge = "bronze"

  return {
    ...user,
    ...gamification,
    avatar: user.avatar_url ?? user.image,
    brincadeiras: brincadeiras.map(b => formatBrincadeira(b, currentUserId, topThreeIds)).filter(Boolean),
    totalContributions: user._count.brincadeiras,
    rankBadge
  }
}

export async function getFeed(limit = 20, cursor?: string, category?: string) {
  const session = await auth()
  const userId = session?.user?.id
  const topThreeIds = await getTopThreeIds()

  const brincadeiras = await prisma.brincadeira.findMany({
    take: limit + 1,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    where: { 
      published_at: { not: null },
      ...(category && category.toLowerCase() !== "todos" ? {
        tags: { has: category }
      } : {})
    },
    orderBy: { published_at: "desc" },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true },
      },
      comments: {
        include: {
          user: {
            select: { name: true, avatar_url: true, image: true },
          },
        },
        orderBy: { created_at: "desc" },
      },
      interactions: userId
        ? {
            where: { user_id: userId },
            select: { type: true },
          }
        : false,
    },
  })

  const hasMore = brincadeiras.length > limit
  if (hasMore) brincadeiras.pop()

  return {
    items: brincadeiras.map((b) => formatBrincadeira(b, userId, topThreeIds)).filter(Boolean),
    nextCursor: hasMore ? brincadeiras[brincadeiras.length - 1].id : null,
  }
}

// ----------------------------------------------------------------------------
// Helper Types & Functions
// ----------------------------------------------------------------------------

export type Brincadeira = {
  id: string
  title: string
  description: string
  creator: {
    id: string
    name: string
    avatar: string | undefined
    level: number
    rankBadge?: "gold" | "silver" | "bronze" | null
  }
  metadata: {
    ageRange: string
    duration: string
    participants: string
  }
  tags: string[]
  likesCount: number
  usedCount: number
  userHasLiked: boolean
  userHasUsed: boolean
  comments: any[]
  steps: string[]
  materials: string[]
  commentsCount: number
}

function formatBrincadeira(b: any, currentUserId?: string, topThreeIds: string[] = []): Brincadeira | null {
  if (!b || !b.user) return null

  let rankBadge: "gold" | "silver" | "bronze" | null = null
  if (topThreeIds[0] === b.user.id) rankBadge = "gold"
  else if (topThreeIds[1] === b.user.id) rankBadge = "silver"
  else if (topThreeIds[2] === b.user.id) rankBadge = "bronze"

  return {
    id: b.id,
    title: b.title,
    description: b.short_description || "",
    creator: {
      id: b.user.id,
      name: b.user.name || "Recreador",
      level: getLevelFromXp(b.user.xp).level,
      avatar: b.user.avatar_url || b.user.image,
      rankBadge
    },
    metadata: {
      ageRange: b.age_range || "Todas as idades",
      duration: b.duration || "Variável",
      participants: b.participants || "Qualquer quantidade",
    },
    tags: Array.isArray(b.tags) ? b.tags : [],
    likesCount: b.likes_count || 0,
    usedCount: b.used_count || 0,
    userHasLiked: b.interactions?.some((i: any) => i.type === "LIKE") || false,
    userHasUsed: b.interactions?.some((i: any) => i.type === "USED") || false,
    comments: b.comments || [],
    steps: Array.isArray(b.steps) ? b.steps : [],
    materials: Array.isArray(b.materials) ? b.materials : [],
    commentsCount: b.comments?.length || 0
  }
}




/**
 * Fetches the user's favorite brincadeiras (liked by them).
 */
export async function getFavorites() {
  const session = await auth()
  if (!session?.user?.id) return []

  const favors = await prisma.interaction.findMany({
    where: { 
      user_id: session.user.id,
      type: "LIKE"
    },
    include: {
      brincadeira: {
        include: {
          user: {
            select: { id: true, name: true, avatar_url: true, image: true, xp: true },
          },
          comments: {
            include: {
              user: {
                select: { name: true, avatar_url: true, image: true },
              },
            },
            orderBy: { created_at: "desc" },
          },
          interactions: {
            where: { user_id: session.user.id },
            select: { type: true },
          },
        }
      }
    },
    orderBy: { created_at: "desc" }
  })

  const userId = session.user.id
  return favors.map(f => formatBrincadeira(f.brincadeira, userId)).filter(Boolean)
}

/**
 * Fetches the user's own published brincadeiras.
 */
export async function getContributions() {
  const session = await auth()
  if (!session?.user?.id) return []

  const brincadeiras = await prisma.brincadeira.findMany({
    where: { user_id: session.user.id },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true },
      },
      comments: {
        include: {
          user: {
            select: { name: true, avatar_url: true, image: true },
          },
        },
        orderBy: { created_at: "desc" },
      },
      interactions: {
        where: { user_id: session.user.id },
        select: { type: true },
      },
    },
    orderBy: { created_at: "desc" }
  })

  const userId = session.user.id
  return brincadeiras.map(b => formatBrincadeira(b, userId)).filter(Boolean)
}


/**
 * Toggles a LIKE interaction on a brincadeira.
 * Awards XP to the creator when liked.
 */
export async function toggleLike(brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  const existing = await prisma.interaction.findUnique({
    where: { user_id_brincadeira_id_type: { user_id: userId, brincadeira_id: brincadeiraId, type: "LIKE" } },
  })

  if (existing) {
    // Remove like
    await prisma.$transaction([
      prisma.interaction.delete({ where: { id: existing.id } }),
      prisma.brincadeira.update({
        where: { id: brincadeiraId },
        data: { likes_count: { decrement: 1 } },
      }),
    ])
  } else {
    // Add like
    const brincadeira = await prisma.brincadeira.update({
      where: { id: brincadeiraId },
      data: {
        likes_count: { increment: 1 },
        interactions: {
          create: { user_id: userId, type: "LIKE" },
        },
      },
      select: { user_id: true },
    })

    // 1. Award XP to the user who liked (the acting user)
    await awardXP(userId, XP_VALUES.LIKE_GIVEN, "LIKE_GIVEN", brincadeiraId)

    // 2. Award XP to the creator (if not self-liking)
    if (brincadeira.user_id !== userId) {
      // Note: We'll use COMMENT_ADDED or a similar small bonus since LIKE_RECEIVED isn't in Enum anymore
      // or we can reuse LIKE_GIVEN for creators too if we want. 
      // Actually, the user said "quem da o gostei ... ganham exp", focusing on the actor.
      // But keeping a small bonus for creator is good. Let's use COMMENT_ADDED value (30) as a proxy for social engagement.
      await awardXP(brincadeira.user_id, 10, "LIKE_GIVEN", brincadeiraId)
      
      // Notify creator
      await prisma.notification.create({
        data: {
          user_id: brincadeira.user_id,
          type: "SOCIAL",
          title: "Curtiram sua brincadeira!",
          message: `Sua brincadeira está ganhando destaque! Você ganhou +10 XP.`,
          reference_id: brincadeiraId,
        },
      })
    }
  }

  revalidatePath("/")
  revalidatePath("/explorar")
}

/**
 * Toggles a USED interaction. Awards XP to creator.
 */
export async function toggleUsed(brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  const existing = await prisma.interaction.findUnique({
    where: { user_id_brincadeira_id_type: { user_id: userId, brincadeira_id: brincadeiraId, type: "USED" } },
  })

  if (existing) {
    await prisma.$transaction([
      prisma.interaction.delete({ where: { id: existing.id } }),
      prisma.brincadeira.update({
        where: { id: brincadeiraId },
        data: { used_count: { decrement: 1 } },
      }),
    ])
  } else {
    const brincadeira = await prisma.brincadeira.update({
      where: { id: brincadeiraId },
      data: {
        used_count: { increment: 1 },
        interactions: {
          create: { user_id: userId, type: "USED" },
        },
      },
      select: { user_id: true },
    })

    // 1. Award XP to the user who checked (the acting user)
    await awardXP(userId, XP_VALUES.USED_CHECKED, "USED_CHECKED", brincadeiraId)

    // 2. Award XP to creator (if not self)
    if (brincadeira.user_id !== userId) {
      await awardXP(brincadeira.user_id, 20, "USED_CHECKED", brincadeiraId)
      await prisma.notification.create({
        data: {
          user_id: brincadeira.user_id,
          type: "SOCIAL",
          title: "Sua brincadeira foi usada!",
          message: `Incrível! Alguém acabou de realizar uma das suas brincadeiras. Você ganhou +20 XP!`,
          reference_id: brincadeiraId,
        },
      })
    }
  }

  revalidatePath("/")
  revalidatePath("/explorar")
}

/**
 * Publishes a new Brincadeira and awards XP.
 */
export async function createBrincadeira(data: {
  title: string
  short_description: string
  type: string
  steps: string[]
  materials: string[]
  age_groups: string[]
  min_participants: number
  max_participants?: number
  duration_minutes: number
  animator_level: string
  tags: string[]
}) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  const brincadeira = await prisma.brincadeira.create({
    data: {
      user_id: userId,
      title: data.title,
      short_description: data.short_description,
      type: data.type as any,
      steps: data.steps,
      materials: data.materials,
      age_groups: data.age_groups as any[],
      min_participants: data.min_participants,
      max_participants: data.max_participants,
      duration_minutes: data.duration_minutes,
      animator_level: data.animator_level as any,
      tags: data.tags,
      published_at: new Date(),
    },
  })

  // Award XP for publishing
  await awardXP(userId, XP_VALUES.PUBLISHED, "PUBLISHED", brincadeira.id)

  // Check weekly streak
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { last_published_at: true, streak_weeks: true },
  })
  if (user) {
    const now = new Date()
    const lastPub = user.last_published_at
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    if (lastPub && lastPub > oneWeekAgo) {
      const newStreak = user.streak_weeks + 1
      await prisma.user.update({
        where: { id: userId },
        data: { streak_weeks: newStreak, last_published_at: now },
      })
      if (newStreak % 4 === 0) {
        // Streak bonus every 4 weeks (monthly)
        await awardXP(userId, XP_VALUES.STREAK, "STREAK")
      }
    } else {
      await prisma.user.update({
        where: { id: userId },
        data: { streak_weeks: 1, last_published_at: now },
      })
    }
  }

  revalidatePath("/")
  revalidatePath("/perfil")
  return brincadeira
}

/**
 * Fetches the ranking leaderboard (top N users by XP).
 */
export async function getRanking(limit = 50) {
  const users = await prisma.user.findMany({
    take: limit,
    orderBy: { xp: "desc" },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      image: true,
      xp: true,
      _count: { select: { brincadeiras: true } },
    },
  })

  return users.map((u, index) => ({
    rank: index + 1,
    id: u.id,
    name: u.name ?? "Anônimo",
    avatar: u.avatar_url ?? u.image,
    xp: u.xp,
    brincadeirasCount: u._count.brincadeiras,
    ...getLevelFromXp(u.xp),
    rankBadge: index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : null
  }))
}

/**
 * Fetches notifications for the current user.
 */
export async function getNotifications() {
  const session = await auth()
  if (!session?.user?.id) return []

  return prisma.notification.findMany({
    where: { user_id: session.user.id },
    orderBy: { created_at: "desc" },
    take: 50,
  })
}

/**
 * Marks all user notifications as read.
 */
export async function markNotificationsRead() {
  const session = await auth()
  if (!session?.user?.id) return

  await prisma.notification.updateMany({
    where: { user_id: session.user.id, read: false },
    data: { read: true },
  })

  revalidatePath("/notificacoes")
}

/**
 * Deletes a single notification.
 */
export async function deleteNotification(id: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  await prisma.notification.delete({
    where: { id, user_id: session.user.id },
  })

  revalidatePath("/notificacoes")
}

/**
 * Clears all notifications for the current user.
 */
export async function clearAllNotifications() {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  await prisma.notification.deleteMany({
    where: { user_id: session.user.id },
  })

  revalidatePath("/notificacoes")
}

/**
 * Fetches unread notifications since a specific time for the floating toaster.
 */
export async function getLatestUnreadNotifications(sinceTime?: string) {
  const session = await auth()
  if (!session?.user?.id) return []

  const dateFilter = sinceTime ? new Date(sinceTime) : new Date(Date.now() - 60000) // Last 60s by default

  const notifications = await prisma.notification.findMany({
    where: {
      user_id: session.user.id,
      read: false,
      created_at: {
        gt: dateFilter
      }
    },
    orderBy: { created_at: "asc" },
  })

  return notifications
}
/**
 * Adds a comment to a brincadeira.
 */
export async function addComment(brincadeiraId: string, text: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  if (!text.trim()) return

  const comment = await prisma.comment.create({
    data: {
      brincadeira_id: brincadeiraId,
      user_id: userId,
      text: text,
    },
    include: {
      user: {
        select: { name: true, avatar_url: true, image: true },
      },
    },
  })

  revalidatePath("/")
  revalidatePath("/explorar")

  // Award XP to the user who commented
  await awardXP(userId, XP_VALUES.COMMENT_ADDED, "COMMENT_ADDED", brincadeiraId)

  return comment
}

/**
 * Updates an existing comment.
 */
export async function updateComment(commentId: string, text: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  if (!text.trim()) return

  const comment = await prisma.comment.update({
    where: { id: commentId, user_id: userId },
    data: { text },
  })

  revalidatePath("/")
  revalidatePath("/explorar")
  return comment
}

/**
 * Deletes a comment.
 */
export async function deleteComment(commentId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  await prisma.comment.delete({
    where: { id: commentId, user_id: userId },
  })

  revalidatePath("/")
  revalidatePath("/explorar")
}
/**
 * Deletes a brincadeira permanently.
 */
export async function deleteBrincadeira(id: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const brincadeira = await prisma.brincadeira.findUnique({
    where: { id, user_id: session.user.id },
    select: { id: true }
  })

  if (!brincadeira) throw new Error("Brincadeira não encontrada")

  // Safe deletion: Remove all related records first to avoid foreign key constraints
  // since Cascade might not be active in the DB yet
  await prisma.$transaction([
    prisma.interaction.deleteMany({ where: { brincadeira_id: id } }),
    prisma.comment.deleteMany({ where: { brincadeira_id: id } }),
    prisma.brincadeira.delete({ where: { id } }),
    // Subtract XP from user
    prisma.user.update({
      where: { id: session.user.id },
      data: { xp: { decrement: 50 } }
    })
  ])

  revalidatePath("/")
  revalidatePath("/perfil")
  revalidatePath("/explorar")
  revalidatePath("/ranking")
  revalidatePath("/notificacoes")
}

/**
 * Updates a brincadeira's basic info.
 */
export async function updateBrincadeira(id: string, data: any) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  await prisma.brincadeira.update({
    where: { id, user_id: session.user.id },
    data: {
      title: data.title,
      short_description: data.short_description,
      steps: data.steps,
      materials: data.materials,
    },
  })

  revalidatePath("/")
  revalidatePath("/perfil")
  revalidatePath("/explorar")
}

/**
 * Updates the user's basic profile info.
 */
export async function updateProfile(data: { name?: string, avatar_url?: string }) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { profile_xp_claimed: true, avatar_url: true }
  })

  const isNewAvatar = data.avatar_url && data.avatar_url !== user?.avatar_url
  const awardBonus = isNewAvatar && !user?.profile_xp_claimed

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: data.name,
      avatar_url: data.avatar_url,
      profile_xp_claimed: awardBonus ? true : user?.profile_xp_claimed
    }
  })

  if (awardBonus) {
    await awardXP(session.user.id, XP_VALUES.PROFILE_UPDATED, "PROFILE_UPDATED")
    await prisma.notification.create({
      data: {
        user_id: session.user.id,
        type: "GAMIFICATION",
        title: "Bônus de Perfil!",
        message: "Você ganhou +100 XP por atualizar sua foto de perfil! Complete seu perfil para ganhar mais destaque.",
      }
    })
  }

  revalidatePath("/")
  revalidatePath("/perfil")
}

