import { getLevelFromXp, getTitleForLevel } from "@/utils/gamification"

export interface Brincadeira {
  id: string
  title: string
  description: string
  creator: {
    id: string
    name: string
    level: number
    title: string
    avatar?: string
    rankBadge?: "gold" | "silver" | "bronze" | null
    activeTitle?: string | null
  }
  metadata: {
    ageRange: string
    duration: string
    participants: string
  }
  tags: string[]
  likesCount: number
  userHasLiked: boolean
  userHasSaved: boolean
  initialLiked: boolean
  initialSaved: boolean
  comments: any[]
  steps: string[]
  materials: string[]
  commentsCount: number
  publishedAt: string
  // Raw data for editing
  rawType: string
  rawAgeGroups: string[]
  rawDuration: number
  rawParticipants: number
}

export function formatBrincadeira(b: any, currentUserId?: string, topThreeIds: string[] = []): Brincadeira | null {
  if (!b || !b.user) return null

  const userId = String(b.user.id)
  const xp = Number(b.user.xp || 0)
  const activeTitle = b.user.active_title ? String(b.user.active_title) : null
  
  const levelData = getLevelFromXp(xp, activeTitle)
  const level = Number(levelData.level)
  const title = getTitleForLevel(level, activeTitle)
  
  let rankBadge: "gold" | "silver" | "bronze" | null = null
  if (topThreeIds[0] === userId) rankBadge = "gold"
  else if (topThreeIds[1] === userId) rankBadge = "silver"
  else if (topThreeIds[2] === userId) rankBadge = "bronze"

  const ageLabels: Record<string, string> = {
    "AGE_3_5": "3-5 anos",
    "AGE_6_9": "6-9 anos",
    "AGE_10_PLUS": "10+ anos",
  }

  return {
    id: String(b.id),
    title: String(b.title),
    description: String(b.short_description || ""),
    creator: {
      id: userId,
      name: String(b.user.name || "Recreador"),
      level: level,
      title: String(title),
      avatar: b.user.avatar_url || b.user.image || undefined,
      rankBadge,
      activeTitle: activeTitle
    },
    metadata: {
      ageRange: b.age_groups?.length > 0 ? ageLabels[b.age_groups[0]] || "Personalizada" : "Todas as idades",
      duration: b.duration_minutes ? `${b.duration_minutes} min` : "Variável",
      participants: b.min_participants ? `${b.min_participants}+ pessoas` : "Qualquer quantidade",
    },
    tags: Array.isArray(b.tags) ? b.tags.map(String) : [],
    likesCount: Number(b.likes_count || 0),
    userHasLiked: Boolean(b.interactions?.some((i: any) => i.type === "LIKE")),
    userHasSaved: Boolean(b.interactions?.some((i: any) => i.type === "SAVED")),
    initialLiked: Boolean(b.interactions?.some((i: any) => i.type === "LIKE")),
    initialSaved: Boolean(b.interactions?.some((i: any) => i.type === "SAVED")),
    comments: [], // Simplified to avoid serialization issues
    steps: Array.isArray(b.steps) ? b.steps.map(String) : [],
    materials: Array.isArray(game?.materials ?? b.materials) ? (game?.materials ?? b.materials).map(String) : [], // Protective check for game vs b
    commentsCount: Number(b.comments?.length || 0),
    publishedAt: b.created_at ? new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(new Date(b.created_at)).replace(".", "") : "Recentemente",
    rawType: String(b.type || "CRIATIVA"),
    rawAgeGroups: Array.isArray(b.age_groups) ? b.age_groups.map(String) : [],
    rawDuration: Number(b.duration_minutes || 0),
    rawParticipants: Number(b.min_participants || 0),
  }
}

/**
 * Shared utility to map a JSON library system game to the Brincadeira interface.
 * Ensures consistent handling of metadata, creator info, and interaction stats.
 */
export function formatSystemBrincadeira(game: any, kitLabel: string, stats?: { likesCount: number; hasLiked: boolean; hasSaved: boolean }): Brincadeira {
  const s = stats || { likesCount: 0, hasLiked: false, hasSaved: false }
  
  return {
    id: String(game.id),
    title: String(game.title),
    description: String(game.description),
    creator: { 
      id: "system", 
      name: "BeHappyinha", 
      avatar: "/behappyinha.png", 
      level: 10, 
      title: "Curadoria Oficial", 
      activeTitle: "Curadoria Oficial" 
    },
    metadata: { 
      ageRange: String(game.age), 
      duration: String(game.duration), 
      participants: String(game.participants) 
    },
    tags: [String(kitLabel)],
    likesCount: Number(s.likesCount),
    userHasLiked: Boolean(s.hasLiked),
    userHasSaved: Boolean(s.hasSaved),
    initialLiked: Boolean(s.hasLiked),
    initialSaved: Boolean(s.hasSaved),
    comments: [],
    steps: Array.isArray(game.steps) ? game.steps.map(String) : [],
    materials: Array.isArray(game.materials) ? game.materials.map(String) : [],
    commentsCount: 0,
    publishedAt: "Oficial",
    rawType: "CRIATIVA",
    rawAgeGroups: [String(game.age)],
    rawDuration: parseInt(game.duration) || 15,
    rawParticipants: parseInt(game.participants) || 2
  }
}
