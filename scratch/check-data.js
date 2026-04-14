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
const connectionString = env.DATABASE_URL;
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    const users = await prisma.user.findMany({
        take: 5,
        select: { id: true, name: true, email: true }
    });
    console.log("Users sample:", users);

    const interactionsRaw = await prisma.interaction.findMany({
        where: { type: 'LIKE' },
        select: { user_id: true, brincadeira_id: true }
    });
    console.log("Interaction (LIKE) count:", interactionsRaw.length);

    const systemInteractionsRaw = await prisma.systemInteraction.findMany({
        where: { type: 'LIKE' },
        select: { user_id: true, game_id: true }
    });
    console.log("SystemInteraction (LIKE) count:", systemInteractionsRaw.length);

    // Check system IDs
    const systemGameIds = new Set();
    SYSTEM_COLLECTIONS.forEach(c => c.games.forEach(g => systemGameIds.add(g.id)));
    
    const missingIds = systemInteractionsRaw.filter(si => !systemGameIds.has(si.game_id));
    console.log("SystemInteractions with MISSING game IDs in library:", missingIds);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
