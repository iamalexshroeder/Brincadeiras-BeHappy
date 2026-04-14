"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { XPReason } from "@prisma/client"
import { Brincadeira, formatBrincadeira, formatSystemBrincadeira } from "@/lib/formatters"
import { revalidatePath } from "next/cache"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"
import { WEEKLY_MISSIONS } from "@/lib/missions"

// XP awarded per action
const XP_VALUES = {
  PUBLISHED: 200,
  COMMENT_ADDED: 50,
  LIKE_GIVEN: 50,
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
    where: { email: { not: 'equipe@behappy.com' } },
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
 * Creates a notification for a specific user.
 */
async function notifyUser(userId: string, type: "GAMIFICATION" | "SOCIAL" | "SYSTEM", title: string, message: string, referenceId?: string) {
  try {
    await prisma.notification.create({
      data: {
        user_id: userId,
        type,
        title,
        message,
        reference_id: referenceId ?? null
      }
    })
  } catch (e) {
    console.error("Erro ao criar notificação:", e)
  }
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
      active_title: true,
      unlocked_titles: true,
      created_at: true,
      _count: {
        select: {
          brincadeiras: true,
          followers: true,
          following: true,
        },
      },
    },
  })

  if (!user) return null

  const gamification = getLevelFromXp(user.xp, user.active_title)

  // 1. Fetch community interactions
  const allCommLikes = await prisma.interaction.findMany({
    where: { user_id: user.id, type: "LIKE" },
    select: { brincadeira_id: true, brincadeira: { select: { id: true, user_id: true } } }
  })
  const allCommSaved = await prisma.interaction.findMany({
    where: { user_id: user.id, type: "SAVED" },
    select: { brincadeira_id: true, brincadeira: { select: { id: true, user_id: true } } }
  })

  // 2. Fetch system interactions
  const allSysLikes = await prisma.systemInteraction.findMany({
    where: { user_id: user.id, type: "LIKE" },
    select: { game_id: true }
  })
  const allSysSaved = await prisma.systemInteraction.findMany({
    where: { user_id: user.id, type: "SAVED" },
    select: { game_id: true }
  })

  // 3. Filter valid system games (must exist in library)
  const validSystemIds = new Set()
  SYSTEM_COLLECTIONS.forEach(col => col.games.forEach(g => validSystemIds.add(g.id)))

  const validSysLikes = allSysLikes.filter(si => validSystemIds.has(si.game_id))
  const validSysSaved = allSysSaved.filter(si => validSystemIds.has(si.game_id))

  // 4. Filter valid community games (must have brincadeira data)
  const validCommLikes = allCommLikes.filter(i => !!i.brincadeira)
  const validCommSaved = allCommSaved.filter(i => !!i.brincadeira)

  // 5. Total counts received
  const receivedInteractions = await prisma.interaction.findMany({
    where: { brincadeira: { user_id: user.id }, type: { in: ["LIKE", "SAVED"] } },
    select: { type: true }
  })
  const likesReceived = receivedInteractions.filter(i => i.type === "LIKE").length

  // 6. Unread notifications
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
      favorites: validCommLikes.length + validSysLikes.length,
      saved: validCommSaved.length + validSysSaved.length,
      contributions: user._count.brincadeiras,
      followers: user._count.followers,
      following: user._count.following,
      achievements: Math.floor(user.xp / 500),
      likesReceived,
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
      active_title: true,
      created_at: true,
      _count: {
        select: {
          brincadeiras: true,
          followers: true,
          following: true,
        },
      },
    },
  })

  if (!user) return null

  const gamification = getLevelFromXp(user.xp, user.active_title)

  // Get their brincadeiras
  const brincadeiras = await prisma.brincadeira.findMany({
    where: { user_id: userId, published_at: { not: null } },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true },
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

  // Check if current user follows this profile
  let userIsFollowing = false
  if (currentUserId) {
    const follow = await prisma.follow.findUnique({
      where: {
        followerId_followingId: {
          followerId: currentUserId,
          followingId: userId
        }
      }
    })
    userIsFollowing = !!follow
  }

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
    followersCount: user._count.followers,
    followingCount: user._count.following,
    userIsFollowing,
    rankBadge
  }
}

export async function getFeed(
  limit = 20, 
  cursor?: string, 
  category?: string, 
  kit?: string, 
  searchQuery?: string,
  followingOnly = false
) {
  const session = await auth()
  const userId = session?.user?.id
  const topThreeIds = await getTopThreeIds()

  let whereClause: any = { published_at: { not: null } }

  // Social Filtering (Followers)
  if (followingOnly && userId) {
    const following = await prisma.follow.findMany({
      where: { followerId: userId },
      select: { followingId: true }
    })
    const followingIds = following.map(f => f.followingId)
    
    // If user follows no one, but requested followingOnly, we return an empty list or their own posts
    whereClause.user_id = { in: followingIds }
  }

  if (category && category.toLowerCase() !== "todos") {
    whereClause.tags = { has: category }
  }

  if (kit) {
    if (kit === "sem_material") {
      whereClause.materials = { isEmpty: true }
    } else {
      whereClause.tags = { has: kit }
    }
  } else if (!searchQuery) {
    // Feed genérico sem busca: esconde brincadeiras do sistema
    whereClause.user = { email: { not: "equipe@behappy.com" } }
  }
  // Com searchQuery: inclui todas, incluindo as da BeHappyinha

  if (searchQuery) {
    whereClause.OR = [
      { title: { contains: searchQuery, mode: 'insensitive' } },
      { short_description: { contains: searchQuery, mode: 'insensitive' } },
      { tags: { has: searchQuery } }
    ]
  }

  const brincadeiras = await prisma.brincadeira.findMany({
    take: limit + 1,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    where: whereClause,
    orderBy: { published_at: "desc" },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true },
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
  const finalBrincadeiras = hasMore ? brincadeiras.slice(0, -1) : brincadeiras

  return {
    items: finalBrincadeiras.map((b) => formatBrincadeira(b, userId, topThreeIds)).filter(Boolean),
    nextCursor: hasMore ? finalBrincadeiras[finalBrincadeiras.length - 1].id : null,
  }
}

/**
 * Gets a single brincadeira by ID.
 */
export async function getBrincadeiraById(id: string) {
  // If it's a system game (from PDF)
  if (id.startsWith('pdf-')) {
    for (const col of SYSTEM_COLLECTIONS) {
      const g = col.games.find(game => game.id === id);
      if (g) {
        // Fetch real user interaction state
        const session = await auth()
        let hasLiked = false, hasSaved = false
        if (session?.user?.id) {
          const interactions = await prisma.systemInteraction.findMany({
            where: { user_id: session.user.id, game_id: id },
            select: { type: true }
          })
          hasLiked = interactions.some(i => i.type === "LIKE")
          hasSaved = interactions.some(i => i.type === "SAVED")
        }
        const likesCount = await prisma.systemInteraction.count({
          where: { game_id: id, type: "LIKE" }
        })
        const stats = {
          likesCount: Number(likesCount),
          hasLiked: Boolean(hasLiked),
          hasSaved: Boolean(hasSaved)
        }

        return formatSystemBrincadeira(g, col.label, stats)
      }
    }
  }

  const session = await auth()
  const currentUserId = session?.user?.id
  const topThreeIds = await getTopThreeIds()

  const brincadeira = await prisma.brincadeira.findUnique({
    where: { id },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true },
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
  })

  if (!brincadeira) return null
  return formatBrincadeira(brincadeira, currentUserId, topThreeIds)
}

// ----------------------------------------------------------------------------
// Helper Types & Functions
// ----------------------------------------------------------------------------

// Formatters moved to @/lib/formatters




/**
 * Fetches the user's favorite brincadeiras (liked by them).
 */
export async function getFavorites() {
  const session = await auth()
  if (!session?.user?.id) return []
  const userId = session.user.id
  const topThreeIds = await getTopThreeIds()

  // 1. Fetch from DB interactions
  const favors = await prisma.interaction.findMany({
    where: { 
      user_id: userId,
      type: "LIKE"
    },
    include: {
      brincadeira: {
        include: {
          user: { select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true } },
          comments: {
            include: { user: { select: { name: true, avatar_url: true, image: true } } },
            orderBy: { created_at: "desc" },
          },
          interactions: {
            where: { user_id: userId },
            select: { type: true },
          },
        }
      }
    },
    orderBy: { created_at: "desc" }
  })

  // 2. Fetch from System interactions
  const systemFavors = await prisma.systemInteraction.findMany({
    where: { user_id: userId, type: "LIKE" },
    orderBy: { created_at: "desc" }
  })

  // Pre-fetch all stats (Global Likes + User's own Liked/Saved state) for these system games
  const sysGameIds = systemFavors.map(sf => sf.game_id)
  const systemStats = sysGameIds.length > 0 ? await getSystemStats(sysGameIds) : {}

  const dbItems = favors.map(f => formatBrincadeira(f.brincadeira, userId, topThreeIds)).filter(Boolean)
  
      const systemItems = systemFavors.map(sf => {
    let game = null;
    let kitLabel = "Oficial";
    for (const col of SYSTEM_COLLECTIONS) {
      const g = col.games.find(g => g.id === sf.game_id);
      if (g) {
        game = g;
        kitLabel = col.label;
        break;
      }
    }
    if (!game) return null;
    const stats = systemStats[sf.game_id];
    return formatSystemBrincadeira(game, kitLabel, stats);
  }).filter(Boolean) as Brincadeira[];

  return [...dbItems, ...systemItems]
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
        select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true },
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

  const topThreeIds = await getTopThreeIds()
  const userId = session.user.id
  return brincadeiras.map(b => formatBrincadeira(b, userId, topThreeIds)).filter(Boolean)
}


/**
 * Toggles a LIKE interaction on a brincadeira.
 * Awards XP to the creator when liked.
 */
export async function toggleLike(brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  console.log(`[ToggleLike] User ${userId} toggling like for ${brincadeiraId}`);
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
    await prisma.$transaction([
      prisma.interaction.create({
        data: { user_id: userId, brincadeira_id: brincadeiraId, type: "LIKE" }
      }),
      prisma.brincadeira.update({
        where: { id: brincadeiraId },
        data: { likes_count: { increment: 1 } }
      })
    ])

    try {
      const brincadeira = await prisma.brincadeira.findUnique({ where: { id: brincadeiraId }, select: { user_id: true } })
      
      // 1. Award XP to the user who liked (the acting user)
      if (brincadeira) {
        await awardXP(userId, XP_VALUES.LIKE_GIVEN, "LIKE_GIVEN", brincadeiraId)

        // 2. Award XP to the creator (if not self-liking)
        if (brincadeira.user_id !== userId) {
          await awardXP(brincadeira.user_id, 10, "LIKE_GIVEN", brincadeiraId)
          
          await notifyUser(
            brincadeira.user_id,
            "SOCIAL",
            "Curtiram sua brincadeira!",
            "Sua brincadeira está ganhando destaque! Você ganhou +10 XP.",
            brincadeiraId
          )
        }
      }
    } catch (error) {
      console.error("Erro em side-effects de toggleLike:", error)
    }
  }

  revalidatePath("/", "layout")
}


/**
 * Toggles a SAVED interaction.
 * Acts as a generic "Bookmark" (All Saved Posts).
 */
export async function toggleSave(brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  const existing = await prisma.interaction.findUnique({
    where: { user_id_brincadeira_id_type: { user_id: userId, brincadeira_id: brincadeiraId, type: "SAVED" } },
  })

  if (existing) {
    await prisma.interaction.delete({ where: { id: existing.id } })
  } else {
    await prisma.interaction.create({
      data: { user_id: userId, brincadeira_id: brincadeiraId, type: "SAVED" },
    })
  }

  revalidatePath("/", "layout")
}

/**
 * Fetches the user's saved brincadeiras (Interaction type SAVED).
 */
export async function getSavedBrincadeiras() {
  const session = await auth()
  if (!session?.user?.id) return []
  const userId = session.user.id
  const topThreeIds = await getTopThreeIds()

  // 1. Fetch from DB interactions
  const saved = await prisma.interaction.findMany({
    where: { 
      user_id: userId,
      type: "SAVED"
    },
    include: {
      brincadeira: {
        include: {
          user: { select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true } },
          comments: {
            include: { user: { select: { name: true, avatar_url: true, image: true } } },
            orderBy: { created_at: "desc" },
          },
          interactions: {
            where: { user_id: userId },
            select: { type: true },
          },
        }
      }
    },
    orderBy: { created_at: "desc" }
  })

  // 2. Fetch from System interactions
  const systemSaved = await prisma.systemInteraction.findMany({
    where: { user_id: userId, type: "SAVED" },
    orderBy: { created_at: "desc" }
  })

  // Pre-fetch all stats (Global Likes + User's own Liked/Saved state) for these system games
  const sysGameIds = systemSaved.map(sf => sf.game_id)
  const systemStats = sysGameIds.length > 0 ? await getSystemStats(sysGameIds) : {}

  const dbItems = saved.map(s => formatBrincadeira(s.brincadeira, userId, topThreeIds)).filter(Boolean)
  
      const systemItems = systemSaved.map(sf => {
    let game = null;
    let kitLabel = "Oficial";
    for (const col of SYSTEM_COLLECTIONS) {
      const g = col.games.find(g => g.id === sf.game_id);
      if (g) {
        game = g;
        kitLabel = col.label;
        break;
      }
    }
    if (!game) return null;
    const stats = systemStats[sf.game_id];
    return formatSystemBrincadeira(game, kitLabel, stats);
  }).filter(Boolean) as Brincadeira[];

  return [...dbItems, ...systemItems]
}

/**
 * Gets the current user's interaction state (hasLiked, hasSaved)
 * for a list of system/pdf game IDs. Since system games are not in the DB,
 * they are stored in the SystemInteraction table.
 */
export async function getSystemStats(ids: string[]): Promise<Record<string, { hasLiked: boolean; hasSaved: boolean; likesCount: number }>> {
  if (ids.length === 0) return {}

  const session = await auth()
  const userId = session?.user?.id

  // 1. Fetch current user's interactions if logged in
  let userInteractions: any[] = []
  if (userId) {
    userInteractions = await prisma.systemInteraction.findMany({
      where: {
        user_id: userId,
        game_id: { in: ids },
        type: { in: ["LIKE", "SAVED"] }
      },
      select: { game_id: true, type: true }
    })
  }

  // 2. Fetch total LIKE counts for all requested IDs (global)
  const globalLikeCounts = await prisma.systemInteraction.groupBy({
    by: ['game_id'],
    where: { game_id: { in: ids }, type: "LIKE" },
    _count: { _all: true }
  })

  // 3. Build result map
  const countsMap = new Map(globalLikeCounts.map(c => [c.game_id, c._count._all]))
  const result: Record<string, { hasLiked: boolean; hasSaved: boolean; likesCount: number }> = {}

  for (const id of ids) {
    const userLikes = userInteractions.filter(i => i.game_id === id)
    result[id] = { 
      hasLiked: userLikes.some(i => i.type === "LIKE"), 
      hasSaved: userLikes.some(i => i.type === "SAVED"),
      likesCount: Number(countsMap.get(id) || 0)
    }
  }

  return result
}

/**
 * Toggles a LIKE on a system/curated game (pdf-* IDs).
 */
export async function toggleSystemLike(gameId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  console.log(`[ToggleSystemLike] User ${userId} toggling system like for ${gameId}`);
  const existing = await prisma.systemInteraction.findUnique({
    where: { user_id_game_id_type: { user_id: userId, game_id: gameId, type: "LIKE" } }
  })

  if (existing) {
    console.log(`[ToggleSystemLike] Removing like for ${gameId}`);
    await prisma.systemInteraction.delete({ where: { id: existing.id } })
  } else {
    console.log(`[ToggleSystemLike] Creating like for ${gameId}`);
    await prisma.systemInteraction.create({
      data: { user_id: userId, game_id: gameId, type: "LIKE" }
    })
    
    try {
      await awardXP(userId, XP_VALUES.LIKE_GIVEN, "LIKE_GIVEN", gameId)
    } catch (error) {
      console.error("Erro em side-effects de toggleSystemLike:", error)
    }
  }

  revalidatePath("/", "layout")
}



/**
 * Toggles a SAVED on a system/curated game (pdf-* IDs).
 */
export async function toggleSystemSave(gameId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  const existing = await prisma.systemInteraction.findUnique({
    where: { user_id_game_id_type: { user_id: userId, game_id: gameId, type: "SAVED" } }
  })

  if (existing) {
    await prisma.systemInteraction.delete({ where: { id: existing.id } })
  } else {
    await prisma.systemInteraction.create({
      data: { user_id: userId, game_id: gameId, type: "SAVED" }
    })
  }

  revalidatePath("/", "layout")
}

/**
 * User Custom Collections
 */
export async function getCollections() {
  const session = await auth()
  if (!session?.user?.id) return []

  return prisma.collection.findMany({
    where: { user_id: session.user.id },
    orderBy: { created_at: "desc" }
  })
}

export async function createCollection(title: string, description?: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const col = await prisma.collection.create({
    data: {
      user_id: session.user.id,
      title,
      description: description || "",
      brincadeiras: []
    }
  })
  
  revalidatePath("/perfil")
  return col
}

export async function toggleBrincadeiraInCollection(collectionId: string, brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const collection = await prisma.collection.findUnique({
    where: { id: collectionId, user_id: session.user.id }
  })

  if (!collection) throw new Error("Coleção não encontrada")

  let newBrincadeiras = [...collection.brincadeiras]
  const exists = newBrincadeiras.includes(brincadeiraId)

  if (exists) {
    newBrincadeiras = newBrincadeiras.filter(id => id !== brincadeiraId)
  } else {
    newBrincadeiras.push(brincadeiraId)
  }

  await prisma.collection.update({
    where: { id: collectionId },
    data: { brincadeiras: newBrincadeiras }
  })

  revalidatePath("/perfil")
  return !exists
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

  try {
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
  } catch (error) {
    console.error("Erro em side-effects de createBrincadeira:", error)
  }

  revalidatePath("/")
  revalidatePath("/perfil")
  return brincadeira
}

/**
 * Toggles a follow relationship between the current user and target user.
 */
export async function toggleFollow(followingId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const followerId = session.user.id

  if (followerId === followingId) throw new Error("Você não pode seguir a si mesmo")

  const existing = await prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId
      }
    }
  })

  if (existing) {
    await prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId,
          followingId
        }
      }
    })
  } else {
    await prisma.follow.create({
      data: {
        followerId,
        followingId
      }
    })

    // Notify the user they have a new follower
    try {
      await notifyUser(followingId, "SOCIAL", "Novo Seguidor!", "Alguém começou a seguir você.")
    } catch (e) {
       console.error("Erro ao notificar seguidor:", e)
    }
  }

  revalidatePath("/")
  revalidatePath("/perfil")
  revalidatePath(`/recreador/${followingId}`)
}

/**
 * Fetches the ranking leaderboard (top N users by XP).
 */
export async function getRanking(limit = 50) {
  const users = await prisma.user.findMany({
    take: limit,
    orderBy: { xp: "desc" },
    where: { email: { not: "equipe@behappy.com" } },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      image: true,
      xp: true,
      active_title: true,
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
    ...getLevelFromXp(u.xp, u.active_title),
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

  try {
    // Award XP to the user who commented
    await awardXP(userId, XP_VALUES.COMMENT_ADDED, "COMMENT_ADDED", brincadeiraId)
  } catch (error) {
    console.error("Erro em side-effects de addComment:", error)
  }

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

  revalidatePath("/", "layout")
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
      type: data.type as any,
      age_groups: data.age_groups as any[],
      duration_minutes: data.duration_minutes,
      min_participants: data.min_participants,
      tags: data.tags,
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

  try {
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
  } catch (error) {
    console.error("Erro em side-effects de updateProfile:", error)
  }

  revalidatePath("/")
  revalidatePath("/perfil")
  return { success: true }
}

/**
 * Updates the user's active title with server-side validation.
 * Ensures only earned titles can be equipped.
 */
export async function updateActiveTitle(title: string | null) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { xp: true, name: true }
  })

  if (!user) throw new Error("Usuário não encontrado")

  // Allow resetting to default
  if (title === null) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { active_title: null }
    })
    revalidatePath("/")
    revalidatePath("/perfil")
    return
  }

  // Check if it's a standard rank title
  const rankTier = GAMIFICATION_TIERS.find(t => t.title === title)
  if (rankTier) {
    if (user.xp < rankTier.minXp) {
      throw new Error(`Título bloqueado: Requer nível ${rankTier.level} (${rankTier.minXp} XP)`)
    }
  } else {
    // Check if it's an exclusive title
    const exclusiveTitle = EXCLUSIVE_TITLES.find(t => t.title === title)
    if (exclusiveTitle) {
      const isJadhe = user.name?.toLowerCase().includes("jadhe")
      if (!isJadhe) {
        throw new Error("Este título é exclusivo para membros de elite.")
      }
    } else {
      throw new Error("Título inválido")
    }
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { active_title: title }
  })

  revalidatePath("/")
  revalidatePath("/perfil")
  revalidatePath("/ranking")
}


// ---------------------------------------------------------------------------
// EOF
// ---------------------------------------------------------------------------
