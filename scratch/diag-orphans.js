import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import fs from "fs"
import path from "path"
import { SYSTEM_COLLECTIONS } from "../lib/data/biblioteca.js"

// Read .env manually
function loadEnv() {
  const envPath = path.resolve(".env");
  if (!fs.existsSync(envPath)) return {};
  const content = fs.readFileSync(envPath, "utf-8");
  const env = {};
  content.split("\n").forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) return;
    let value = match[2] || "";
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    env[match[1]] = value;
  });
  return env;
}

const env = loadEnv();
const pool = new pg.Pool({ connectionString: env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    // Collect all valid system game IDs
    const validIds = new Set();
    SYSTEM_COLLECTIONS.forEach(col => col.games.forEach(g => validIds.add(g.id)));
    console.log("Total valid system games:", validIds.size);

    // Check SystemInteractions
    const systemInteractions = await prisma.systemInteraction.findMany();
    const invalidSI = systemInteractions.filter(si => !validIds.has(si.game_id));
    console.log("Total system interactions:", systemInteractions.length);
    console.log("Invalid system interactions (orphans):", invalidSI.length);
    if (invalidSI.length > 0) {
        console.log("Invalid IDs found:", [...new Set(invalidSI.map(i => i.game_id))]);
    }

    // Check Community Interactions
    const interactions = await prisma.interaction.findMany({
        include: { brincadeira: { select: { id: true } } }
    });
    const invalidI = interactions.filter(i => !i.brincadeira);
    console.log("Total community interactions:", interactions.length);
    console.log("Invalid community interactions (orphans):", invalidI.length);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
