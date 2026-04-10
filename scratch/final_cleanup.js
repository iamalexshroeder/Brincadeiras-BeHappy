import fs from 'fs';

const filePath = 'lib/data/biblioteca.ts';
let content = fs.readFileSync(filePath, 'utf8');

const mapping = {
    'ç├Áes': 'ções',
    'marcaç├Áes': 'marcações',
    'orientaç├Áes': 'orientações',
    'aç├úo': 'ação',
    'brincadeiras├¡': 'brincadeiras',
    '├│': 'ó',
    '├í': 'á',
    '├¬': 'ê',
    '├ú': 'ã',
    '├º': 'ç',
    '├®': 'é',
    '├┤': 'ô',
    '├║': 'ú',
    '├¡': 'í',
    '├┬': 'Â',
    '├á': 'à',
    'ÔÇ£': '"',
    'ÔÇØ': '"',
    'ÔÇô': '–',
    'ÔÇª': '…',
    '├ó': 'â'
};

let totalFixes = 0;
for (const [corrupted, fixed] of Object.entries(mapping)) {
    const regex = new RegExp(corrupted, 'g');
    const matches = (content.match(regex) || []).length;
    if (matches > 0) {
        content = content.replace(regex, fixed);
        totalFixes += matches;
        console.log(`Fixed ${matches} occurrences of ${corrupted} -> ${fixed}`);
    }
}

// Global cleanup for any missed single byte artifacts
content = content.replace(/\s+/g, ' ');

fs.writeFileSync(filePath, content);
console.log(`Cleanup complete. Total fixes: ${totalFixes}`);
