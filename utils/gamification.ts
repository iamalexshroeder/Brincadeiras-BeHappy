/**
 * Logic for calculating User Levels and Titles based on XP.
 * Max Level: 100
 */

interface LevelData {
  level: number;
  title: string;
  minXp: number;
}

export const GAMIFICATION_TIERS: (LevelData & { color: string })[] = [
  { level: 1, title: "Observador Curioso", minXp: 0, color: "#8E8E93" }, // Slate
  { level: 5, title: "Aprendiz Brincalhão", minXp: 500, color: "#10B981" }, // Emerald
  { level: 10, title: "Ajudante de Quadra", minXp: 1200, color: "#3B82F6" }, // Blue
  { level: 15, title: "Recreador Iniciante", minXp: 2500, color: "#6366F1" }, // Indigo
  { level: 20, title: "Animador de Roda", minXp: 4500, color: "#A855F7" }, // Purple
  { level: 25, title: "Contador de Histórias", minXp: 7000, color: "#D946EF" }, // Fuchsia
  { level: 30, title: "Guia de Aventuras", minXp: 10000, color: "#F43F5E" }, // Rose
  { level: 35, title: "Mestre do Pega-Pega", minXp: 14000, color: "#EF4444" }, // Red
  { level: 40, title: "Capitão da Gincana", minXp: 18500, color: "#F97316" }, // Orange
  { level: 45, title: "Especialista em Sorrisos", minXp: 24000, color: "#F59E0B" }, // Amber
  { level: 50, title: "Inventor de Brincadeiras", minXp: 30000, color: "#AF52DE" }, // Purple BeHappy
  { level: 55, title: "Líder Recreativo", minXp: 38000, color: "#22D3EE" }, // Cyan
  { level: 60, title: "Maestro da Diversão", minXp: 47000, color: "#8B5CF6" }, // Violet
  { level: 65, title: "Mago do Entretenimento", minXp: 55000, color: "#EC4899" }, // Pink
  { level: 70, title: "Veterano das Colônias", minXp: 65000, color: "#451a03" }, // Brown
  { level: 75, title: "Arquiteto de Momentos", minXp: 76000, color: "#000000" }, // Black
  { level: 80, title: "Embaixador da Alegria", minXp: 90000, color: "#EAB308" }, // BeHappy Orange
  { level: 85, title: "Guardião da Infância", minXp: 105000, color: "#FFD700" }, // Gold
  { level: 90, title: "Ídolo Recreador", minXp: 120000, color: "#C0C0C0" }, // Silver
  { level: 95, title: "Lenda da Recreação", minXp: 140000, color: "#CD7F32" }, // Bronze
  { level: 100, title: "Deus da Recreação", minXp: 165000, color: "#FF0000" }, // Pure Red
];

/**
 * Calculates current level and related data based on exact XP.
 * Assumes a linear scale between the defined tiers.
 */
export const getLevelFromXp = (xp: number) => {
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
    title: currentTier.title, // Title holds steady until next tier boundary
    xpRemaining,
    progressPercentage: Math.min(100, Math.max(0, progressPercentage)),
    nextLevelXp: Math.ceil(nextExactLevelMinXp)
  };
};

/**
 * Convenience method if you just want to lookup a Title for an arbitrary level number
 * (e.g., when viewing another user's profile where only their Level is fetched)
 */
export const getTitleForLevel = (level: number) => {
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
