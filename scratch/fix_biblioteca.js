import fs from 'fs';

async function main() {
  console.log('Refining library standardization (v2)...');
  
  let rawText = '';
  try {
      rawText = fs.readFileSync('scratch/pdf_text.txt', 'utf16le');
      if (!rawText.includes('Nome:')) {
          rawText = fs.readFileSync('scratch/pdf_text.txt', 'utf8');
      }
  } catch (e) {
      rawText = fs.readFileSync('scratch/pdf_text.txt', 'utf8');
  }

  const cleanMapping = {
    '├│': 'ó', '├í': 'á', '├¬': 'ê', '├ú': 'ã', '├º': 'ç', '├®': 'é', '├┤': 'ô', '├║': 'ú',
    '├¡': 'í', '├à': 'à', '├┬': 'Â', '├á': 'à', '├Á': 'õ', '├ó': 'â',
    'ÔÇ£': '"', 'ÔÇØ': '"', 'ÔÇô': '–', 'ÔÇª': '…', '┬á': ' ', 'ÔÇÖ': "'"
  };

  const deepClean = (str, extra = true) => {
    if (!str) return '';
    let result = str;
    for (const [corrupted, fixed] of Object.entries(cleanMapping)) {
      result = result.split(corrupted).join(fixed);
    }
    result = result
      .replace(/Ã¡/g, 'á').replace(/Ã©/g, 'é').replace(/Ã/g, 'í').replace(/Ã³/g, 'ó')
      .replace(/Ãº/g, 'ú').replace(/Ã£/g, 'ã').replace(/Ãµ/g, 'õ').replace(/Ã§/g, 'ç')
      .replace(/Ãª/g, 'ê').replace(/Ã´/g, 'ô').replace(/Ã¢/g, 'â').replace(/Ã/g, 'à')
      .replace(/-- \d+ of \d+ --/g, '')
      .replace(/\[IMAGEM\]/gi, '').replace(/\[FOTO\]/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
    return result;
  };

  const splitSteps = (text) => {
    // Split by sentences ending in a period followed by space and capital letter
    // This is much safer than numbers which might be inside sentences
    let parts = text.split(/\. (?=[A-Z])/);
    
    if (parts.length > 3) {
      // Group sentences to avoid them being too small
      const grouped = [];
      for (let i = 0; i < parts.length; i += 2) {
        let p = parts[i] + (parts[i+1] ? '. ' + parts[i+1] : '.');
        grouped.push(p);
      }
      return grouped.map(p => deepClean(p)).filter(p => p.length > 5);
    }
    
    // Fallback: just divide in two if it's one big block
    if (text.length > 200) {
      const mid = Math.floor(text.length / 2);
      const splitPoint = text.indexOf('. ', mid);
      if (splitPoint !== -1) {
        return [deepClean(text.substring(0, splitPoint + 1)), deepClean(text.substring(splitPoint + 1))];
      }
    }

    return [deepClean(text)];
  };

  const blocks = rawText.split(/Nome:/g).filter(b => b.trim().length > 10);
  const games = [];
  
  blocks.forEach((block, i) => {
    const lines = block.split(/\n|\r/).map(l => l.trim()).filter(l => l.length > 0);
    
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

    const fullDesc = descriptionLines.join(' ');
    const cleanedTitle = deepClean(title);
    
    if (cleanedTitle && fullDesc.length > 10) {
      games.push({
        id: `pdf-${i + 1}`,
        title: cleanedTitle,
        description: deepClean(fullDesc).substring(0, 150) + (fullDesc.length > 150 ? '...' : ''),
        duration: "15-20 min",
        participants: "4+",
        age: deepClean(age),
        materials: materials.map(m => deepClean(m)).filter(m => m.length > 2),
        steps: splitSteps(fullDesc)
      });
    }
  });

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
    const text = (game.title + ' ' + game.steps.join(' ')).toLowerCase();
    if (text.includes('bola') || text.includes('gol')) collections[4].games.push(game);
    else if (text.includes('roda') || text.includes('música') || text.includes('ritmo')) collections[2].games.push(game);
    else if (text.includes('pega') || text.includes('fugir')) collections[3].games.push(game);
    else if (text.includes('circuito') || text.includes('equilíbrio')) collections[1].games.push(game);
    else if (text.includes('equipe') || text.includes('time')) collections[5].games.push(game);
    else if (game.age.includes('3') || game.age.includes('4')) collections[0].games.push(game);
    else collections[6].games.push(game);
  });

  let tsContent = `import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiFireLine, RiFlashlightLine, RiHandHeartLine
} from "@remixicon/react";

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

  collections.forEach((col, idx) => {
    const isLast = idx === collections.length - 1;
    tsContent += `  {
    id: ${JSON.stringify(col.id)},
    label: ${JSON.stringify(col.label)},
    icon: ${col.icon},
    color: ${JSON.stringify(col.color)},
    bg: ${JSON.stringify(col.bg)},
    description: ${JSON.stringify(col.description)},
    games: ${JSON.stringify(col.games, null, 2).split('\n').map((l, i) => i === 0 ? l : '    ' + l).join('\n')}
  }${isLast ? '' : ','}\n`;
  });

  tsContent += `];\n`;

  fs.writeFileSync('lib/data/biblioteca.ts', tsContent);
  console.log('Final standardization (v2) complete.');
}

main().catch(console.error);
