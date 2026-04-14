import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import fs from "fs"
import path from "path"

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
    const si = await prisma.systemInteraction.findMany({ select: { game_id: true, type: true } });
    const counts = {};
    si.forEach(x => {
        counts[x.game_id] = counts[x.game_id] || { LIKE: 0, SAVED: 0 };
        counts[x.game_id][x.type]++;
    });
    console.log("System Games with interactions:", counts);

    const interactions = await prisma.interaction.findMany({ select: { brincadeira_id: true, type: true }, include: { brincadeira: { select: { id: true } } } });
    const orphans = interactions.filter(i => !i.brincadeira);
    console.log("Orphaned interactions count:", orphans.length);
    if (orphans.length > 0) {
        console.log("Orphaned sample:", orphans.slice(0, 5));
    }

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
