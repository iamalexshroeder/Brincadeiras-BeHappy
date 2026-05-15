const fs = require('fs');

const content = fs.readFileSync('lib/data/biblioteca.ts', 'utf-8');

// Look for descriptions specifically from the screenshot
const lines = content.split('\n');
const hits = [];

lines.forEach((line, i) => {
    if (
        line.includes('persegui') ||
        line.includes('crian') ||
        line.includes('der') ||
        line.includes('O Lobo') ||
        line.includes('Direita') ||
        line.includes('description')
    ) {
        if (line.length < 300) {
            hits.push({ line: i+1, text: line.trim().substring(0, 200) });
        }
    }
});

hits.slice(0, 20).forEach(h => console.log(`L${h.line}: ${h.text}`));

// Also check for bad multi-byte sequences
console.log('\n--- Checking for double-encoded chars ---');
const suspicious = [];
for (let i = 0; i < content.length - 2; i++) {
    const cc = content.charCodeAt(i);
    const nc = content.charCodeAt(i+1);
    // Ã followed by £ (0xC3 0xA3) encodes ã, but if encoded again gives gibberish
    // Check if we have something like "Ã\x83" which is double-encoded 'Ã' => was ã
    if (cc === 0xC3 && nc === 0x83) {
        suspicious.push(i + ': Ã\\x83 at [' + content.substring(Math.max(0,i-5), i+15) + ']');
    }
    if (cc === 0xC3 && nc === 0x85) {
        suspicious.push(i + ': Ã\\x85 at [' + content.substring(Math.max(0,i-5), i+15) + ']');
    }
}

if (suspicious.length === 0) {
    console.log('No double-encoded chars found in file bytes.');
} else {
    suspicious.slice(0, 20).forEach(s => console.log(s));
}
