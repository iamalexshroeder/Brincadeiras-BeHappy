const fs = require('fs');

const target = 'lib/data/biblioteca.ts';
let content = fs.readFileSync(target, 'utf-8');

// The file is a mix of imports and a large const object.
// I'll extract the JSON part, format it, and put it back.

const match = content.match(/export const SYSTEM_COLLECTIONS: Collection\[\] = (\[[\s\S]*\]);/);

if (match) {
    try {
        const collections = JSON.parse(match[1]);
        const formattedCollections = JSON.stringify(collections, null, 2);
        
        // Rebuild the file
        const header = content.substring(0, match.index);
        const footer = content.substring(match.index + match[0].length);
        
        const newContent = `${header}export const SYSTEM_COLLECTIONS: Collection[] = ${formattedCollections};${footer}`;
        
        fs.writeFileSync(target, newContent, 'utf-8');
        console.log("Reformatted biblioteca.ts successfully!");
    } catch (e) {
        console.error("Failed to parse JSON for formatting:", e);
        // Fallback: simple regex based line breaks if it's too mangled for JSON.parse
        // But since I just cleaned it, it SHOULD be valid JSON.
    }
} else {
    console.log("Could not find SYSTEM_COLLECTIONS for formatting.");
}
