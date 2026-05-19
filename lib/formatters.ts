export interface Brincadeira {
  id: string
  title: string
  description: string
  creator: {
    id: string
    name: string
    avatar?: string
    role?: string
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
  steps: string[]
  materials: string[]
  publishedAt: string
  rawType: string
  rawAgeGroups: string[]
  rawDuration: number
  rawParticipants: number
}

export function formatBrincadeira(b: any, currentUserId?: string): Brincadeira | null {
  if (!b || !b.user) return null

  const userId = String(b.user.id)
  
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
      avatar: b.user.avatar_url || b.user.image || undefined,
      role: b.user.role || undefined,
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
    steps: Array.isArray(b.steps) ? b.steps.map(String) : [],
    materials: Array.isArray(b.materials) ? b.materials.map(String) : [],
    publishedAt: b.created_at ? new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short" }).format(new Date(b.created_at)).replace(".", "") : "Recentemente",
    rawType: String(b.type || "CRIATIVA"),
    rawAgeGroups: Array.isArray(b.age_groups) ? b.age_groups.map(String) : [],
    rawDuration: Number(b.duration_minutes || 0),
    rawParticipants: Number(b.min_participants || 0),
  }
}

export function formatSystemBrincadeira(game: any, kitLabel: string, stats?: { likesCount: number; hasLiked: boolean; hasSaved: boolean }): Brincadeira {
  const s = stats || { likesCount: 0, hasLiked: false, hasSaved: false }
  
  return {
    id: String(game.id),
    title: String(game.title),
    description: String(game.description),
    creator: { 
      id: "system", 
      name: "BeHappyinha", 
      avatar: "/icon-512.png", 
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
    steps: Array.isArray(game.steps) ? game.steps.map(String) : [],
    materials: Array.isArray(game.materials) ? game.materials.map(String) : [],
    publishedAt: "Oficial",
    rawType: "CRIATIVA",
    rawAgeGroups: [String(game.age)],
    rawDuration: parseInt(game.duration) || 15,
    rawParticipants: parseInt(game.participants) || 2
  }
}
