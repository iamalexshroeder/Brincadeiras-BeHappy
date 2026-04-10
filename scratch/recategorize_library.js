import fs from 'fs';

// Read existing file
const filePath = 'lib/data/biblioteca.ts';
const content = fs.readFileSync(filePath, 'utf8');

// Extract current games
// This is a bit tricky due to format, but since I generated it, I know the structure.
// I'll extract using a regex to find everything between games: [ and ]
const gamesMatch = content.match(/games: (\[[\s\S]*?\])/g);
const allGamesMap = new Map();

if (gamesMatch) {
  gamesMatch.forEach(m => {
    try {
      const jsonStr = m.replace('games: ', '');
      const games = JSON.parse(jsonStr);
      games.forEach(g => allGamesMap.set(g.id, g));
    } catch (e) {
      console.error('Error parsing games:', e);
    }
  });
}

const allGames = Array.from(allGamesMap.values());
console.log(`Found ${allGames.length} unique games.`);

const cleanStr = (s) => {
  if (!s) return '';
  return s
    .replace(/ç├Áes/g, 'ções')
    .replace(/├│/g, 'ó')
    .replace(/├í/g, 'á')
    .replace(/├¬/g, 'ê')
    .replace(/├ú/g, 'ã')
    .replace(/├º/g, 'ç')
    .replace(/├®/g, 'é')
    .replace(/├┤/g, 'ô')
    .replace(/├║/g, 'ú')
    .replace(/├¡/g, 'í')
    .replace(/├┬/g, 'Â')
    .replace(/├á/g, 'à')
    .replace(/ÔÇ£/g, '"')
    .replace(/ÔÇØ/g, '"')
    .replace(/ÔÇô/g, '–')
    .replace(/\s+/g, ' ')
    .trim();
};

// Precise categorization
const collections = [
  {
    id: "pequenos",
    label: "Pequenos Aprendizes",
    icon: "RiHome4Line",
    color: "#AF52DE",
    bg: "#F5E9FF",
    description: "Brincadeiras lúdicas e simples para crianças de 3 a 4 anos.",
    games: []
  },
  {
    id: "psicomotricidade",
    label: "Psicomotricidade & Lateralidade",
    icon: "RiUserVoiceLine",
    color: "#FF9500",
    bg: "#FFF4E5",
    description: "Circuitos, equilíbrio e coordenação motora.",
    games: []
  },
  {
    id: "roda_musica",
    label: "Jogos de Roda & Música",
    icon: "RiMusicLine",
    color: "#007AFF",
    bg: "#E5F1FF",
    description: "Ritmos, cantigas e atividades em círculo.",
    games: []
  },
  {
    id: "pega_pega",
    label: "Pega-Pega & Velocidade",
    icon: "RiFireLine",
    color: "#FF3B30",
    bg: "#FFF2F2",
    description: "Brincadeiras de perseguição e agilidade.",
    games: []
  },
  {
    id: "bola",
    label: "Jogos com Bola",
    icon: "RiFlashlightLine", // Using related icons
    color: "#5856D6",
    bg: "#F2F2F7",
    description: "Atividades dinâmicas utilizando bolas de diversos tamanhos.",
    games: []
  },
  {
    id: "equipe",
    label: "Desafios em Equipe",
    icon: "RiHandHeartLine",
    color: "#34C759",
    bg: "#EBF9EE",
    description: "Gincanas, cooperação e competições saudáveis.",
    games: []
  },
  {
    id: "ludico_sensorial",
    label: "Sensoriais & Mistério",
    icon: "RiTentLine",
    color: "#FFCC00",
    bg: "#FFF9E5",
    description: "Memória, buscas, mímica e desafios mentais.",
    games: []
  }
];

allGames.forEach(game => {
  // Clean game data
  game.title = cleanStr(game.title);
  game.description = cleanStr(game.description);
  game.materials = game.materials.map(cleanStr);
  game.steps = game.steps.map(cleanStr);

  const text = (game.title + ' ' + game.description).toLowerCase();
  
  // Categorization logic (exclusive for better distribution, but can overlap)
  if (parseInt(game.age) <= 4 && !text.includes('bola') && !text.includes('equipe')) {
    collections[0].games.push(game);
  } else if (text.includes('bola') || text.includes('gol') || text.includes('vôlei')) {
    collections[4].games.push(game);
  } else if (text.includes('roda') || text.includes('música') || text.includes('ritmo') || text.includes('cantiga') || text.includes('estátua')) {
    collections[2].games.push(game);
  } else if (text.includes('pega') || text.includes('fugir') || text.includes('pegador') || text.includes('perseguição')) {
    collections[3].games.push(game);
  } else if (text.includes('circuito') || text.includes('equilíbrio') || text.includes('lateralidade') || text.includes('direita') || text.includes('esquerda')) {
    collections[1].games.push(game);
  } else if (text.includes('equipe') || text.includes('time') || text.includes('coluna') || text.includes('gincana')) {
    collections[5].games.push(game);
  } else {
    collections[6].games.push(game);
  }
});

let tsContent = `import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiFireLine, RiFlashlightLine, RiHandHeartLine
} from "@remixicon/react"

export interface SystemGame {
  id: string
  title: string
  description: string
  duration: string
  participants: string
  age: string
  materials: string[]
  steps: string[]
}

export interface Collection {
  id: string
  label: string
  icon: any
  color: string
  bg: string
  description: string
  games: SystemGame[]
}

export const SYSTEM_COLLECTIONS: Collection[] = [
`;

collections.forEach(col => {
  tsContent += `  {
    id: "${col.id}",
    label: "${col.label}",
    icon: ${col.icon},
    color: "${col.color}",
    bg: "${col.bg}",
    description: "${col.description}",
    games: ${JSON.stringify(col.games, null, 6)}
  },
`;
});

tsContent += `]
`;

tsContent = tsContent.replace(/"icon": "(Ri\w+)"/g, '"icon": $1');

fs.writeFileSync('lib/data/biblioteca.ts', tsContent);
console.log('Successfully updated library with diverse categories.');
