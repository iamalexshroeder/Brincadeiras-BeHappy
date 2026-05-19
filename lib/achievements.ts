export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress: { current: number; target: number }
}

export function getAchievements(contributionsCount: number, likesReceivedCount: number): Achievement[] {
  return [
    {
      id: "first_game",
      title: "Primeiro Passo",
      description: "Criou a sua primeira brincadeira",
      icon: "🎉",
      unlocked: contributionsCount >= 1,
      progress: { current: Math.min(contributionsCount, 1), target: 1 }
    },
    {
      id: "creator_5",
      title: "Criador Ativo",
      description: "Compartilhou 5 brincadeiras no app",
      icon: "🔥",
      unlocked: contributionsCount >= 5,
      progress: { current: Math.min(contributionsCount, 5), target: 5 }
    },
    {
      id: "master_15",
      title: "Mestre Recreador",
      description: "Compartilhou 15 brincadeiras no app",
      icon: "👑",
      unlocked: contributionsCount >= 15,
      progress: { current: Math.min(contributionsCount, 15), target: 15 }
    },
    {
      id: "legend_30",
      title: "Lenda da BeHappy",
      description: "Compartilhou 30 brincadeiras no app",
      icon: "🌌",
      unlocked: contributionsCount >= 30,
      progress: { current: Math.min(contributionsCount, 30), target: 30 }
    },
    {
      id: "loved_10",
      title: "Mais Querido",
      description: "Recebeu 10+ curtidas no total de suas brincadeiras",
      icon: "❤️",
      unlocked: likesReceivedCount >= 10,
      progress: { current: Math.min(likesReceivedCount, 10), target: 10 }
    },
    {
      id: "viral_25",
      title: "Viralizou!",
      description: "Recebeu 25+ curtidas no total de suas brincadeiras",
      icon: "⚡",
      unlocked: likesReceivedCount >= 25,
      progress: { current: Math.min(likesReceivedCount, 25), target: 25 }
    }
  ]
}
