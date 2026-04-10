import fs from 'fs';

async function main() {
  console.log('Starting full library generation from UTF-16LE text...');
  
  // Try reading as UTF-16LE since pdf-parse output sometimes uses it on Windows
  let rawText = '';
  try {
      rawText = fs.readFileSync('scratch/pdf_text.txt', 'utf16le');
      if (!rawText.includes('Nome:')) {
          console.log('Not UTF-16LE, trying default...');
          rawText = fs.readFileSync('scratch/pdf_text.txt', 'utf8');
      }
  } catch (e) {
      rawText = fs.readFileSync('scratch/pdf_text.txt', 'utf8');
  }

  // Normalize text
  const cleanStr = (s) => {
    if (!s) return '';
    return s
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Splitting by 'Nome:' but being flexible with whitespace/newlines
  const blocks = rawText.split(/Nome:/g).filter(b => b.trim().length > 10);
  
  console.log(`Found ${blocks.length} potential blocks.`);

  const games = [];
  blocks.forEach((block, i) => {
    const lines = block.split(/\n|\r/).map(l => l.trim()).filter(l => l.length > 0);
    
    // First line is usually the title/age since we split at "Nome:"
    let firstLine = lines[0] || '';
    let title = firstLine.split('(')[0].trim();
    let age = 'Livre';
    const ageMatch = firstLine.match(/\(a partir dos (\d+) anos\)/i);
    if (ageMatch) age = `${ageMatch[1]}+ anos`;

    let materials = [], descriptionLines = [], state = 'none';

    lines.slice(1).forEach(line => {
      if (line.match(/^Material:/i)) {
        const matPart = line.replace(/^Material:/i, '').trim();
        if (matPart && matPart.toLowerCase() !== 'nenhum') {
          materials = matPart.split(/, | e |;/).map(m => m.trim());
        }
        state = 'material';
      } else if (line.match(/^Descri.*:/i)) {
        descriptionLines.push(line.replace(/^Descri.*:/i, '').trim());
        state = 'description';
      } else if (state === 'description') {
        descriptionLines.push(line);
      } else if (state === 'material' && !line.match(/^Descri.*:/i)) {
        materials.push(line);
      }
    });

    const fullDescription = descriptionLines.join(' ').replace(/\s+/g, ' ').trim();
    if (title && fullDescription.length > 10) {
      games.push({
        id: `pdf-${i + 1}`,
        title: cleanStr(title),
        description: cleanStr(fullDescription),
        duration: "15-20 min",
        participants: "4+",
        age,
        materials: materials.map(cleanStr).filter(m => m.length > 3), // filter small garbage
        steps: [cleanStr(fullDescription)]
      });
    }
  });

  console.log(`Parsed ${games.length} games. Now categorizing...`);

  const collections = [
    { id: "pequenos", label: "Pequenos Aprendizes", icon: "RiHome4Line", color: "#AF52DE", bg: "#F5E9FF", description: "Atividades para crianças de 3 a 4 anos.", games: [] },
    { id: "psicomotricidade", label: "Psicomotricidade & Equilíbrio", icon: "RiUserVoiceLine", color: "#FF9500", bg: "#FFF4E5", description: "Circuitos, equilíbrio e coordenação.", games: [] },
    { id: "roda_musica", label: "Jogos de Roda & Música", icon: "RiMusicLine", color: "#007AFF", bg: "#E5F1FF", description: "Ritmos, cantigas e rodas.", games: [] },
    { id: "pega_pega", label: "Pega-Pega & Agilidade", icon: "RiFireLine", color: "#FF3B30", bg: "#FFF2F2", description: "Perseguição e velocidade.", games: [] },
    { id: "bola", label: "Jogos com Bola", icon: "RiFlashlightLine", color: "#5856D6", bg: "#F2F2F7", description: "Tudo que envolve bola e gols.", games: [] },
    { id: "equipe", label: "Desafios & Cooperação", icon: "RiHandHeartLine", color: "#34C759", bg: "#EBF9EE", description: "Gincanas e atividades em time.", games: [] },
    { id: "ludico_sensorial", label: "Lúdicos & Sensoriais", icon: "RiTentLine", color: "#FFCC00", bg: "#FFF9E5", description: "Memória, buscas e mistérios.", games: [] }
  ];

  games.forEach(game => {
    const text = (game.title + ' ' + game.description).toLowerCase();
    const ageNum = parseInt(game.age);

    if (ageNum <= 4 && !text.includes('bola') && !text.includes('equipe')) {
      collections[0].games.push(game);
    } else if (text.includes('bola') || text.includes('gol') || text.includes('vôlei')) {
      collections[4].games.push(game);
    } else if (text.includes('roda') || text.includes('música') || text.includes('ritmo') || text.includes('ciranda') || text.includes('cantiga') || text.includes('estátua')) {
      collections[2].games.push(game);
    } else if (text.includes('pega') || text.includes('fugir') || text.includes('pegador') || text.includes('perseguição') || text.includes('caça')) {
      collections[3].games.push(game);
    } else if (text.includes('circuito') || text.includes('equilíbrio') || text.includes('lateralidade') || text.includes('direita') || text.includes('esquerda') || text.includes('obstáculo')) {
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
  id: string; title: string; description: string; duration: string;
  participants: string; age: string; materials: string[]; steps: string[];
}

export interface Collection {
  id: string; label: string; icon: any; color: string; bg: string;
  description: string; games: SystemGame[];
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
  console.log(`Process complete. Found ${games.length} games. lib/data/biblioteca.ts updated.`);
}

main().catch(console.error);
