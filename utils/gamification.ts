/**
 * Logic for calculating User Levels and Titles based on XP.
 * Max Level: 100
 */

interface LevelData {
  level: number;
  title: string;
  minXp: number;
}

export const GAMIFICATION_TIERS: (LevelData & { color: string; description: string })[] = [
  { level: 1, title: "Observador Curioso", minXp: 0, color: "#8E8E93", description: "O início da jornada! Você está observando e aprendendo como a diversão acontece." },
  { level: 5, title: "Aprendiz Brincalhão", minXp: 500, color: "#10B981", description: "Primeiros passos dados. Você já sabe que o segredo de uma boa brincadeira é o sorriso." },
  { level: 10, title: "Ajudante de Quadra", minXp: 1200, color: "#3B82F6", description: "Sua energia é contagiante! Você já ajuda a organizar a bagunça de forma divertida." },
  { level: 15, title: "Recreador Iniciante", minXp: 2500, color: "#6366F1", description: "A teoria virou prática. Você já domina as dinâmicas básicas de grupo." },
  { level: 20, title: "Animador de Roda", minXp: 4500, color: "#A855F7", description: "Ninguém fica parado quando você entra no círculo. O ritmo da diversão é seu!" },
  { level: 25, title: "Contador de Histórias", minXp: 7000, color: "#D946EF", description: "Sua imaginação não tem limites. Você transforma qualquer jogo em uma grande aventura." },
  { level: 30, title: "Guia de Aventuras", minXp: 10000, color: "#F43F5E", description: "Liderar é sua segunda natureza. Você conduz o grupo por caminhos épicos." },
  { level: 35, title: "Mestre do Pega-Pega", minXp: 14000, color: "#EF4444", description: "Velocidade e estratégia. Suas brincadeiras de perseguição são as favoritas da galera." },
  { level: 40, title: "Capitão da Gincana", minXp: 18500, color: "#F97316", description: "Organização impecável. Você transforma competições em momentos de pura união." },
  { level: 45, title: "Especialista em Sorrisos", minXp: 24000, color: "#F59E0B", description: "Seu objetivo é a felicidade. Você sabe exatamente como animar qualquer criança." },
  { level: 50, title: "Inventor de Brincadeiras", minXp: 30000, color: "#AF52DE", description: "O BeHappy Hub se orgulha de você! Suas criações são autênticas e inovadoras." },
  { level: 55, title: "Líder Recreativo", minXp: 38000, color: "#22D3EE", description: "Você é uma referência. Outros recreadores se inspiram na sua forma de atuar." },
  { level: 60, title: "Maestro da Diversão", minXp: 47000, color: "#8B5CF6", description: "Tudo flui em harmonia quando você está no comando. A diversão é uma orquestra." },
  { level: 65, title: "Mago do Entretenimento", minXp: 55000, color: "#EC4899", description: "Parece mágica, mas é talento. Você tira sorrisos de onde ninguém imagina." },
  { level: 70, title: "Veterano das Colônias", minXp: 65000, color: "#451a03", description: "Anos de experiência acumulados. Você domina todos os cenários da recreação." },
  { level: 75, title: "Arquiteto de Momentos", minXp: 76000, color: "#000000", description: "Você não apenas brinca, você constrói memórias inesquecíveis para as crianças." },
  { level: 80, title: "Embaixador da Alegria", minXp: 90000, color: "#EAB308", description: "A face oficial da felicidade no Hub. Onde você está, a tristeza não tem vez." },
  { level: 85, title: "Guardião da Infância", minXp: 105000, color: "#FFD700", description: "Você protege o direito de brincar com maestria e total dedicação." },
  { level: 90, title: "Ídolo Recreador", minXp: 120000, color: "#C0C0C0", description: "Seu nome será lembrado em todas as quadras e colônias de férias." },
  { level: 95, title: "Lenda da Recreação", minXp: 140000, color: "#CD7F32", description: "Suas histórias serão contadas por gerações de novos recreadores iniciantes." },
  { level: 100, title: "Deus da Recreação", minXp: 165000, color: "#FF0000", description: "O Olimpo da Diversão! Você é a essência pura do espírito BeHappy." },
];

export const EXCLUSIVE_TITLES = [
  { id: "diva_recreacao", title: "Diva da Recreação", color: "#EC4899", description: "Título de prestígio exclusivo para a elite da recreação." },
  { id: "estrela_behappy", title: "Estrela BeHappy", color: "#FBBF24", description: "Destaque total na comunidade BeHappy Hub." },
];

/**
 * Calculates current level and related data based on exact XP.
 * Assumes a linear scale between the defined tiers.
 */
export const getLevelFromXp = (xp: number, activeTitle?: string | null) => {
  // Find the highest tier the user has reached
  let currentTierIndex = 0;
  for (let i = 0; i < GAMIFICATION_TIERS.length; i++) {
    if (xp >= GAMIFICATION_TIERS[i].minXp) {
      currentTierIndex = i;
    } else {
      break;
    }
  }

  const currentTier = GAMIFICATION_TIERS[currentTierIndex];
  const nextTier = GAMIFICATION_TIERS[Math.min(currentTierIndex + 1, GAMIFICATION_TIERS.length - 1)];

  // If max level reached
  if (currentTier.level === 100 || xp >= GAMIFICATION_TIERS[GAMIFICATION_TIERS.length - 1].minXp) {
    return {
      level: 100,
      title: GAMIFICATION_TIERS[GAMIFICATION_TIERS.length - 1].title,
      xpRemaining: 0,
      progressPercentage: 100,
      nextLevelXp: GAMIFICATION_TIERS[GAMIFICATION_TIERS.length - 1].minXp
    };
  }

  // Calculate exact level if between tiers
  const xpDifference = nextTier.minXp - currentTier.minXp;
  const levelDifference = nextTier.level - currentTier.level;
  
  // Calculate how far along the user is between the tiers (0.0 to 1.0)
  const progressToNextTier = (xp - currentTier.minXp) / xpDifference;
  
  // Exact level integer
  const exactLevel = Math.floor(currentTier.level + (progressToNextTier * levelDifference));

  // Determine the XP required for the NEXT exact level
  // XP per single level in this bracket:
  const xpPerLevelInTier = xpDifference / levelDifference;
  
  // How many levels into this tier are we?
  const levelsIntoTier = exactLevel - currentTier.level;
  
  const currentLevelMinXp = currentTier.minXp + (levelsIntoTier * xpPerLevelInTier);
  const nextExactLevelMinXp = currentTier.minXp + ((levelsIntoTier + 1) * xpPerLevelInTier);
  
  const xpRemaining = Math.max(0, Math.ceil(nextExactLevelMinXp - xp));
  const progressPercentage = ((xp - currentLevelMinXp) / xpPerLevelInTier) * 100;

  return {
    level: exactLevel,
    title: activeTitle || currentTier.title, // Use activeTitle if set, otherwise fallback to currentTier boundary
    xpRemaining,
    progressPercentage: Math.min(100, Math.max(0, progressPercentage)),
    nextLevelXp: Math.ceil(nextExactLevelMinXp)
  };
};

/**
 * Convenience method if you just want to lookup a Title for an arbitrary level number
 * (e.g., when viewing another user's profile where only their Level is fetched)
 */
export const getTitleForLevel = (level: number, activeTitle?: string | null) => {
  if (activeTitle) return activeTitle;
  
  let matchedTitle = GAMIFICATION_TIERS[0].title;
  for (const tier of GAMIFICATION_TIERS) {
    if (level >= tier.level) {
      matchedTitle = tier.title;
    } else {
      break;
    }
  }
  return matchedTitle;
};
