const fs = require('fs');

const validChars = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 \t\n\r.,!?;:\"'()[]{}/*-+_ÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇáàâãéèêíìîóòôõúùûç#&%@$|<>=\"\\");

const target = 'lib/data/biblioteca.ts';
const content = fs.readFileSync(target, 'utf-8');
const lines = content.split('\n');

const anomalies = [];
lines.forEach((line, i) => {
    const lineNum = i + 1;
    const foundChars = [];
    for (let char of line) {
        if (!validChars.has(char) && char.charCodeAt(0) > 127) {
            foundChars.push(char);
        }
    }
    if (foundChars.length > 0) {
        anomalies.push({
            line: lineNum,
            chars: foundChars,
            content: line.trim()
        });
    }
});

if (anomalies.length === 0) {
    console.log("No non-standard characters found.");
} else {
    anomalies.forEach(a => {
        console.log(`Line ${a.line}: [${a.chars.join(', ')}] -> ${a.content}`);
    });
}
