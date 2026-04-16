const fs = require('fs');

const target = 'lib/data/biblioteca.ts';
let content = fs.readFileSync(target, 'utf-8');

// 1. Encoding artifacts (Mojibake remnants)
const replacements = [
    [/â”œá«/g, ''],
    [/â”œá¼/g, 'á'],
    [/á”/g, 'O'], // Sometimes 'o'
    [/á“/g, 'Ó'],
    [/â€¦/g, '...'],
    [/â€“/g, '-'],
    [/â€”/g, '-'],
    [/â€œ/g, '"'],
    [/â€/g, '"'],
    [/â€™/g, "'"],
    [/á«/g, ''],
    [/á¼/g, 'á'],

    // 2. Smart quotes and special dashes
    [/“/g, '"'],
    [/”/g, '"'],
    [/‘/g, "'"],
    [/’/g, "'"],
    [/–/g, '-'],
    [/—/g, '-'],

    // 3. Known typos & corrections
    [/silensioso/gi, 'silencioso'],
    [/vistes/g, 'vistos'],
    [/recreador/gi, 'Monitor'],
    [/líder/gi, 'Monitor'],
    [/ê Camaleão/g, 'Ô Camaleão'], // Fix if mangled
    [/á” Camaleão/g, 'Ô Camaleão'],
    [/vistes coloridos/g, 'vistos coloridos'],
    
    // 4. Double space cleanup (result of some removals)
    [/\s\s+/g, ' ']
];

let changed = false;
replacements.forEach(([regex, replacement]) => {
    const newContent = content.replace(regex, replacement);
    if (newContent !== content) {
        content = newContent;
        changed = true;
        console.log(`Applied replacement for: ${regex}`);
    }
});

if (changed) {
    fs.writeFileSync(target, content, 'utf-8');
    console.log("Cleanup complete!");
} else {
    console.log("No changes needed.");
}
