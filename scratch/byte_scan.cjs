const fs = require('fs');

const target = 'lib/data/biblioteca.ts';

// Read raw bytes - NOT as string, to check actual byte sequences
const buffer = fs.readFileSync(target);

console.log('File size in bytes:', buffer.length);

// Double-encoded UTF-8 patterns for Portuguese characters:
// When ã (C3 A3) is double-encoded it becomes Ã£ which in UTF-8 is: C3 83 C2 A3
// When ç (C3 A7) is double-encoded it becomes Ã§ which in UTF-8 is: C3 83 C2 A7
// When é (C3 A9) is double-encoded it becomes Ã© which in UTF-8 is: C3 83 C2 A9
// When ó (C3 B3) is double-encoded it becomes Ã³ which in UTF-8 is: C3 83 C2 B3
// When í (C3 AD) is double-encoded it becomes Ã­ which in UTF-8 is: C3 83 C2 AD
// When ô (C3 B4) is double-encoded it becomes Ã´ which in UTF-8 is: C3 83 C2 B4
// When ú (C3 BA) is double-encoded it becomes Ãº which in UTF-8 is: C3 83 C2 BA
// When â (C3 A2) is double-encoded it becomes Â which in UTF-8 is: C3 83 C2 A2
// When õ (C3 B5) is double-encoded it becomes Ãµ which in UTF-8 is: C3 83 C2 B5
// Also watch for: 0xC3 0x83 anywhere = 'Ã' which is almost always corruption in PT

const suspicious = [];
for (let i = 0; i < buffer.length - 1; i++) {
    // 0xC3 0x83 = 'Ã' which is 'Ã' (U+00C3) - suspicious in PT text
    if (buffer[i] === 0xC3 && buffer[i + 1] === 0x83) {
        // Get context
        let contextStart = Math.max(0, i - 20);
        let ctx = buffer.slice(contextStart, i + 30).toString('latin1');
        suspicious.push({ pos: i, ctx });
    }
    // Also C2 A2 to C2 BF without C3 83 prefix - still could be latin1 chars
}

if (suspicious.length === 0) {
    console.log('✅ No double-encoded bytes found! File is clean at byte level.');
} else {
    console.log(`❌ Found ${suspicious.length} corrupted byte sequences!`);
    suspicious.slice(0, 30).forEach(s => {
        console.log(`Pos ${s.pos}: ...${s.ctx}...`);
    });
}
