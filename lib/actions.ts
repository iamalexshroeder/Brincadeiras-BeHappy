"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { Brincadeira, formatBrincadeira, formatSystemBrincadeira } from "@/lib/formatters"
import { revalidatePath, unstable_noStore } from "next/cache"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"


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
      role: true,
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

  const likesReceived = await prisma.interaction.count({
    where: { brincadeira: { user_id: user.id }, type: "LIKE" }
  })

  const [commLikes, sysLikes] = await Promise.all([
    prisma.interaction.count({ where: { user_id: user.id, type: "LIKE" } }),
    prisma.systemInteraction.count({ where: { user_id: user.id, type: "LIKE" } })
  ])
  
  const [commSaved, sysSaved] = await Promise.all([
    prisma.interaction.count({ where: { user_id: user.id, type: "SAVED" } }),
    prisma.systemInteraction.count({ where: { user_id: user.id, type: "SAVED" } })
  ])

  const unreadNotificationsCount = await prisma.notification.count({
    where: { user_id: user.id, read: false }
  })

  const brincadeiras = await prisma.brincadeira.findMany({
    where: { user_id: user.id, published_at: { not: null } },
    select: {
      title: true,
      short_description: true,
      tags: true,
      type: true,
      min_participants: true,
      duration_minutes: true
    }
  })

  return {
    ...user,
    avatar: user.avatar_url ?? user.image,
    unreadNotificationsCount,
    brincadeiras,
    stats: {
      favorites: commLikes + sysLikes,
      saved: commSaved + sysSaved,
      contributions: user._count.brincadeiras,
      followers: user._count.followers,
      following: user._count.following,
      likesReceived,
    }
  }
}

export async function getPublicProfile(userId: string) {
  const session = await auth()
  const currentUserId = session?.user?.id

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      avatar_url: true,
      bio: true,
      city: true,
      state: true,
      role: true,
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

  if (!user || user.email === "equipe@behappy.com") return null

  const brincadeirasData = await prisma.brincadeira.findMany({
    where: { user_id: userId, published_at: { not: null } },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, role: true },
      },
      interactions: currentUserId
        ? {
            where: { user_id: currentUserId },
            select: { type: true },
          }
        : undefined,
    },
    orderBy: { published_at: "desc" }
  })

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

  const likesReceivedCount = await prisma.interaction.count({
    where: { brincadeira: { user_id: userId }, type: "LIKE" }
  })

  return {
    ...user,
    avatar: user.avatar_url ?? user.image,
    brincadeiras: brincadeirasData.map(b => formatBrincadeira(b, currentUserId)).filter(Boolean),
    totalContributions: user._count.brincadeiras,
    followersCount: user._count.followers,
    followingCount: user._count.following,
    userIsFollowing,
    likesReceivedCount,
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
  unstable_noStore()
  const session = await auth()
  const userId = session?.user?.id

  let whereClause: any = {
    published_at: { not: null },
    AND: [
      { user: { email: { not: "equipe@behappy.com" } } }
    ]
  }

  if (followingOnly && userId) {
    const following = await prisma.follow.findMany({
      where: { followerId: userId },
      select: { followingId: true }
    })
    const followingIds = following.map(f => f.followingId)
    whereClause.user_id = { in: followingIds }
  }

  if (category && category.toLowerCase() !== "todos") {
    whereClause.tags = { has: category }
  }

  if (kit) {
    if (kit === "minhas" && userId) {
      whereClause.user_id = userId
    } else if (kit === "sem_material") {
      whereClause.materials = { isEmpty: true }
    } else {
      whereClause.tags = { has: kit }
    }
  }

  if (searchQuery) {
    whereClause.title = { contains: searchQuery, mode: 'insensitive' }
  }

  const brincadeiras = await prisma.brincadeira.findMany({
    take: limit + 1,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    where: whereClause,
    orderBy: { published_at: "desc" },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, role: true },
      },
      interactions: userId
        ? {
            where: { user_id: userId },
            select: { type: true },
          }
        : undefined,
    },
  })
  return {
    items: brincadeiras.slice(0, limit).map((b) => formatBrincadeira(b, userId)),
    nextCursor: brincadeiras.length > limit ? brincadeiras[limit].id : null,
  }
}

export async function getBrincadeiraById(id: string) {
  if (id.startsWith('pdf-')) {
    for (const col of SYSTEM_COLLECTIONS) {
      const g = col.games.find(game => game.id === id);
      if (g) {
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
  const brincadeira = await prisma.brincadeira.findUnique({
    where: { id },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true, role: true },
      },
      interactions: currentUserId
        ? {
            where: { user_id: currentUserId },
            select: { type: true },
          }
        : undefined,
    },
  })

  if (!brincadeira) return null
  return formatBrincadeira(brincadeira, currentUserId)
}

export async function getFavorites() {
  const session = await auth()
  if (!session?.user?.id) return []
  const userId = session.user.id

  const favors = await prisma.interaction.findMany({
    where: { 
      user_id: userId,
      type: "LIKE"
    },
    include: {
      brincadeira: {
        include: {
          user: { select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true, role: true } },
          interactions: {
            where: { user_id: userId },
            select: { type: true },
          },
        }
      }
    },
    orderBy: { created_at: "desc" }
  })

  const systemFavors = await prisma.systemInteraction.findMany({
    where: { user_id: userId, type: "LIKE" },
    orderBy: { created_at: "desc" }
  })

  const sysGameIds = systemFavors.map(sf => sf.game_id)
  const systemStats = sysGameIds.length > 0 ? await getSystemStats(sysGameIds) : {}

  const dbItems = favors.map(f => formatBrincadeira(f.brincadeira, userId)).filter(Boolean)
  
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

export async function getMyContributions() {
  const session = await auth()
  if (!session?.user?.id) return []
  const userId = session.user.id

  const brincadeiras = await prisma.brincadeira.findMany({
    where: { user_id: userId, published_at: { not: null } },
    include: {
      user: { select: { id: true, name: true, avatar_url: true, image: true, role: true } },
      interactions: {
        where: { user_id: userId },
        select: { type: true }
      }
    },
    orderBy: { created_at: "desc" }
  })

  return brincadeiras.map(b => formatBrincadeira(b, userId)).filter(Boolean)
}

export async function toggleLike(brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  if (brincadeiraId.startsWith('pdf-')) {
    const existing = await prisma.systemInteraction.findUnique({
      where: { user_id_game_id_type: { user_id: userId, game_id: brincadeiraId, type: "LIKE" } },
    })

    if (existing) {
      await prisma.systemInteraction.delete({ where: { id: existing.id } })
    } else {
      await prisma.systemInteraction.create({
        data: { user_id: userId, game_id: brincadeiraId, type: "LIKE" }
      })
    }
    revalidatePath("/", "layout")
    return
  }

  const existing = await prisma.interaction.findUnique({
    where: { user_id_brincadeira_id_type: { user_id: userId, brincadeira_id: brincadeiraId, type: "LIKE" } },
  })

  if (existing) {
    await prisma.$transaction([
      prisma.interaction.delete({ where: { id: existing.id } }),
      prisma.brincadeira.update({
        where: { id: brincadeiraId },
        data: { likes_count: { decrement: 1 } },
      }),
    ])
  } else {
    await prisma.$transaction([
      prisma.interaction.create({
        data: { user_id: userId, brincadeira_id: brincadeiraId, type: "LIKE" }
      }),
      prisma.brincadeira.update({
        where: { id: brincadeiraId },
        data: { likes_count: { increment: 1 } }
      })
    ])
  }

  revalidatePath("/", "layout")
}

export async function toggleSave(brincadeiraId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  if (brincadeiraId.startsWith('pdf-')) {
    const existing = await prisma.systemInteraction.findUnique({
      where: { user_id_game_id_type: { user_id: userId, game_id: brincadeiraId, type: "SAVED" } },
    })

    if (existing) {
      await prisma.systemInteraction.delete({ where: { id: existing.id } })
    } else {
      await prisma.systemInteraction.create({
        data: { user_id: userId, game_id: brincadeiraId, type: "SAVED" }
      })
    }
    revalidatePath("/", "layout")
    return
  }

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

export async function getSavedBrincadeiras() {
  const session = await auth()
  if (!session?.user?.id) return []
  const userId = session.user.id
  const saved = await prisma.interaction.findMany({
    where: { 
      user_id: userId,
      type: "SAVED"
    },
    include: {
      brincadeira: {
        include: {
          user: { select: { id: true, name: true, avatar_url: true, image: true, role: true } },
          interactions: {
            where: { user_id: userId },
            select: { type: true },
          },
        }
      }
    },
    orderBy: { created_at: "desc" }
  })

  const systemSaved = await prisma.systemInteraction.findMany({
    where: { user_id: userId, type: "SAVED" },
    orderBy: { created_at: "desc" }
  })

  const sysGameIds = systemSaved.map(sf => sf.game_id)
  const systemStats = sysGameIds.length > 0 ? await getSystemStats(sysGameIds) : {}

  const dbItems = saved.map(s => formatBrincadeira(s.brincadeira, userId)).filter(Boolean)
  
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

export async function getSystemStats(ids: string[]): Promise<Record<string, { hasLiked: boolean; hasSaved: boolean; likesCount: number }>> {
  if (ids.length === 0) return {}

  const session = await auth()
  const userId = session?.user?.id

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

  const globalLikeCounts = await prisma.systemInteraction.groupBy({
    by: ['game_id'],
    where: { game_id: { in: ids }, type: "LIKE" },
    _count: { _all: true }
  })

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

export async function toggleSystemLike(gameId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

const existing = await prisma.systemInteraction.findUnique({
    where: { user_id_game_id_type: { user_id: userId, game_id: gameId, type: "LIKE" } }
  })

  if (existing) {
await prisma.systemInteraction.delete({ where: { id: existing.id } })
  } else {
await prisma.systemInteraction.create({
      data: { user_id: userId, game_id: gameId, type: "LIKE" }
    })
  }

  revalidatePath("/", "layout")
}

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
      short_description: data.short_description.substring(0, 120),
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

  revalidatePath("/")
  revalidatePath("/perfil")
  return brincadeira
}

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

export async function getBrincadeirasRanking(limit = 50) {
  const session = await auth()
  const userId = session?.user?.id

  const brincadeiras = await prisma.brincadeira.findMany({
    take: limit,
    orderBy: { likes_count: "desc" },
    where: { published_at: { not: null } },
    include: {
      user: {
        select: { id: true, name: true, avatar_url: true, image: true, role: true },
      },
      interactions: userId
        ? {
            where: { user_id: userId },
            select: { type: true },
          }
        : undefined,
    },
  })

  return brincadeiras.map((b, index) => ({
    rank: index + 1,
    ...formatBrincadeira(b, userId),
  }))
}

export async function getNotifications() {
  const session = await auth()
  if (!session?.user?.id) return []

  return prisma.notification.findMany({
    where: { user_id: session.user.id },
    orderBy: { created_at: "desc" },
    take: 50,
  })
}

export async function markNotificationsRead() {
  const session = await auth()
  if (!session?.user?.id) return

  await prisma.notification.updateMany({
    where: { user_id: session.user.id, read: false },
    data: { read: true },
  })

  revalidatePath("/notificacoes")
}

export async function deleteNotification(id: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  await prisma.notification.delete({
    where: { id, user_id: session.user.id },
  })

  revalidatePath("/notificacoes")
}

export async function clearAllNotifications() {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  await prisma.notification.deleteMany({
    where: { user_id: session.user.id },
  })

  revalidatePath("/notificacoes")
}

export async function getLatestUnreadNotifications(sinceTime?: string) {
  const session = await auth()
  if (!session?.user?.id) return []

  const dateFilter = sinceTime ? new Date(sinceTime) : new Date(Date.now() - 60000)

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

export async function revalidateAll() {
  revalidatePath("/", "layout")
}

export async function deleteBrincadeira(id: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const brincadeira = await prisma.brincadeira.findFirst({
    where: { id, user_id: session.user.id },
    select: { id: true }
  })

  if (!brincadeira) throw new Error("Brincadeira não encontrada")

  await prisma.$transaction([
    prisma.interaction.deleteMany({ where: { brincadeira_id: id } }),
        prisma.brincadeira.delete({ where: { id } })
  ])
}

export async function updateBrincadeira(id: string, data: any) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  const existing = await prisma.brincadeira.findFirst({
    where: { id, user_id: session.user.id },
    select: { id: true }
  })
  if (!existing) throw new Error("Brincadeira não encontrada ou sem permissão")

  await prisma.brincadeira.update({
    where: { id },
    data: {
      title: data.title,
      short_description: data.short_description.substring(0, 120),
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

export async function updateProfile(data: { name?: string, avatar_url?: string, role?: string }) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")

  await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name: data.name,
      avatar_url: data.avatar_url,
      role: data.role,
    }
  })

  revalidatePath("/")
  revalidatePath("/perfil")
  return { success: true }
}

export async function searchRecreadores(query: string) {
  unstable_noStore()
  const session = await auth()
  const currentUserId = session?.user?.id

  if (!query || !query.trim()) return []

  const users = await prisma.user.findMany({
    where: {
      name: { contains: query, mode: 'insensitive' },
      email: { not: "equipe@behappy.com" }
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      avatar_url: true,
      role: true,
      created_at: true,
      followers: currentUserId
        ? {
            where: { followerId: currentUserId },
            select: { followerId: true }
          }
        : undefined
    },
    take: 20
  })

  return users.map(u => ({
    id: u.id,
    name: u.name || "Recreador",
    avatar: u.avatar_url || u.image || undefined,
    role: u.role || "Trainee",
    created_at: u.created_at,
    userIsFollowing: u.followers ? u.followers.length > 0 : false
  }))
}

export async function getUserFollowers(userId: string) {
  const session = await auth()
  const currentUserId = session?.user?.id

  const followers = await prisma.follow.findMany({
    where: { 
      followingId: userId,
      follower: { email: { not: "equipe@behappy.com" } }
    },
    include: {
      follower: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar_url: true,
          image: true,
          role: true,
          created_at: true,
        }
      }
    }
  })

  // Single batch query instead of N individual queries
  let followingIds = new Set<string>()
  if (currentUserId && followers.length > 0) {
    const followerIds = followers.map(f => f.followerId)
    const existingFollows = await prisma.follow.findMany({
      where: {
        followerId: currentUserId,
        followingId: { in: followerIds }
      },
      select: { followingId: true }
    })
    followingIds = new Set(existingFollows.map(f => f.followingId))
  }

  return followers.map(f => ({
    id: f.follower.id,
    name: f.follower.name || "Recreador",
    avatar: f.follower.avatar_url || f.follower.image || undefined,
    role: f.follower.role || "Trainee",
    created_at: f.follower.created_at,
    isFollowing: followingIds.has(f.followerId)
  }))
}

export async function getUserFollowing(userId: string) {
  const session = await auth()
  const currentUserId = session?.user?.id

  const following = await prisma.follow.findMany({
    where: { 
      followerId: userId,
      following: { email: { not: "equipe@behappy.com" } }
    },
    include: {
      following: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar_url: true,
          image: true,
          role: true,
          created_at: true,
        }
      }
    }
  })

  // Single batch query instead of N individual queries
  let followingIds = new Set<string>()
  if (currentUserId && following.length > 0) {
    const followingUserIds = following.map(f => f.followingId)
    const existingFollows = await prisma.follow.findMany({
      where: {
        followerId: currentUserId,
        followingId: { in: followingUserIds }
      },
      select: { followingId: true }
    })
    followingIds = new Set(existingFollows.map(f => f.followingId))
  }

  return following.map(f => ({
    id: f.following.id,
    name: f.following.name || "Recreador",
    avatar: f.following.avatar_url || f.following.image || undefined,
    role: f.following.role || "Trainee",
    created_at: f.following.created_at,
    isFollowing: followingIds.has(f.followingId)
  }))
}

