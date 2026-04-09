"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { getLevelFromXp, GAMIFICATION_TIERS } from "@/utils/gamification"
import { revalidatePath } from "next/cache"

// XP awarded per action
const XP_VALUES = {
  PUBLISHED: 250,
  LIKE_RECEIVED: 10,
  USED_RECEIVED: 30,
  STREAK: 100,
  FIRST_USED_BONUS: 50,
}

/**
 * Awards XP to a user and creates a transaction record.
 * Also notifies the user if they reached a new title tier.
 */
async function awardXP(
  userId: string,
  amount: number,
  reason: "PUBLISHED" | "LIKE_RECEIVED" | "USED_RECEIVED" | "STREAK" | "FIRST_USED_BONUS",
  referenceId?: string
) {
  // Get current XP
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { xp: true } })
  if (!user) return

  const previousLevel = getLevelFromXp(user.xp).level
  const newXp = user.xp + amount
  const newLevel = getLevelFromXp(newXp).level

  // Update user XP and log transaction
  await prisma.$transaction([
    prisma.user.update({
      where: { id: userId },
      data: { xp: newXp },
    }),
    prisma.xPTransaction.create({
      data: {
        user_id: userId,
        amount,
        reason,
        reference_id: referenceId ?? null,
      },
    }),
  ])

  // Check if the user crossed a new TITLE tier boundary
  if (newLevel > previousLevel) {
    const newTier = GAMIFICATION_TIERS.find((t) => t.level === newLevel)
    if (newTier) {
      await prisma.notification.create({
        data: {
          user_id: userId,
          type: "GAMIFICATION",
          title: "Novo Título Alcançado!",
          message: `Parabéns! Você chegou ao Nível ${newLevel} e conquistou o título de "${newTier.title}".`,
        },
      })
    } else {
      // Level up without a new title
      await prisma.notification.create({
        data: {
          user_id: userId,
          type: "GAMIFICATION",
          title: `Nível ${newLevel} Alcançado!`,
          message: `Você acumulou ${newXp} XP e subiu para o Nível ${newLevel}. Continue assim!`,
        },
      })
    }
  }

  return { newXp, newLevel }
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

  return {
    ...user,
    ...gamification,
    avatar: user.avatar_url ?? user.image,
    unreadNotificationsCount,
    stats: {
      favorites: likesGivenCount,
      contributions: user._count.brincadeiras,
      achievements: Math.floor(user.xp / 500), // Simple math for now or based on tiers
      likesReceived,
      usesReceived
    }
  }
}

/**
 * Fetches the feed of brincadeiras for the home screen.
 */
export async function getFeed(limit = 20, cursor?: string, category?: string) {
  const session = await auth()
  const userId = session?.user?.id

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
    items: brincadeiras.map((b) => formatBrincadeira(b, userId)),
    nextCursor: hasMore ? brincadeiras[brincadeiras.length - 1].id : null,
  }
}

/**
 * Helper to format DB brincadeira to UI structure
 */
function formatBrincadeira(b: any, userId?: string) {
  if (!b) return null;
  const user = b.user || {};
  
  return {
    id: b.id,
    title: b.title || "Sem título",
    description: b.short_description || "",
    tags: b.tags || [],
    likesCount: b.likes_count || 0,
    usedCount: b.used_count || 0,
    comments: b.comments || [],
    metadata: {
      ageRange: (b.age_groups || []).join(", ") || "Qualquer idade",
      duration: `${b.duration_minutes || 0} min`,
      participants: `${b.min_participants || 1}${b.max_participants ? `–${b.max_participants}` : "+"}`,
    },
    creator: {
      id: user.id || "",
      name: user.name ?? "Recreador",
      level: getLevelFromXp(user.xp || 0).level,
      avatar: user.avatar_url ?? user.image ?? undefined,
    },
    userHasLiked: b.interactions?.some((i: any) => i.type === "LIKE") ?? false,
    userHasUsed: b.interactions?.some((i: any) => i.type === "USED") ?? false,
    userHasSaved: b.interactions?.some((i: any) => i.type === "SAVED") ?? false,
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
  return favors.map(f => formatBrincadeira(f.brincadeira, userId))
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
  return brincadeiras.map(b => formatBrincadeira(b, userId))
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

    // Award XP to the creator (not to self-liker)
    if (brincadeira.user_id !== userId) {
      await awardXP(brincadeira.user_id, XP_VALUES.LIKE_RECEIVED, "LIKE_RECEIVED", brincadeiraId)
      // Notify creator
      await prisma.notification.create({
        data: {
          user_id: brincadeira.user_id,
          type: "SOCIAL",
          title: "Curtiram sua brincadeira!",
          message: `Alguém curtiu uma das suas brincadeiras. Continue criando!`,
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

    if (brincadeira.user_id !== userId) {
      await awardXP(brincadeira.user_id, XP_VALUES.USED_RECEIVED, "USED_RECEIVED", brincadeiraId)
      await prisma.notification.create({
        data: {
          user_id: brincadeira.user_id,
          type: "SOCIAL",
          title: "Sua brincadeira foi usada!",
          message: `Alguém marcou que usou uma das suas brincadeiras. Você ganhou +${XP_VALUES.USED_RECEIVED} XP!`,
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
      // In a more complete app we would update all fields
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

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: data.name,
      avatar_url: data.avatar_url
    }
  })

  revalidatePath("/")
  revalidatePath("/perfil")
}

