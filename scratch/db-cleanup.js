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

// Extract valid IDs from biblioteca.ts
function getValidSystemIds() {
  const bibPath = path.resolve("lib/data/biblioteca.ts");
  const content = fs.readFileSync(bibPath, "utf-8");
  const idRegex = /"id":\s*"([^"]+)"/g;
  const ids = new Set();
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    ids.add(match[1]);
  }
  return ids;
}

const env = loadEnv();
const pool = new pg.Pool({ connectionString: env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  try {
    const validIds = getValidSystemIds();
    console.log(`Found ${validIds.size} valid system IDs in library.`);

    // 1. Purge SystemInteractions
    const allSystemInteractions = await prisma.systemInteraction.findMany();
    const toDeleteSys = allSystemInteractions.filter(si => !validIds.has(si.game_id));
    
    if (toDeleteSys.length > 0) {
      console.log(`Deleting ${toDeleteSys.length} orphaned SystemInteraction records...`);
      await prisma.systemInteraction.deleteMany({
        where: { id: { in: toDeleteSys.map(si => si.id) } }
      });
    } else {
      console.log("No orphaned SystemInteraction records found.");
    }

    // 2. Purge Community Interactions
    // Prisma cascading should handle this, but let's be sure if some orphaned records exist
    const allInteractions = await prisma.interaction.findMany({
      include: { brincadeira: { select: { id: true } } }
    });
    const toDeleteComm = allInteractions.filter(i => !i.brincadeira);
    
    if (toDeleteComm.length > 0) {
      console.log(`Deleting ${toDeleteComm.length} orphaned Interaction records...`);
      await prisma.interaction.deleteMany({
        where: { id: { in: toDeleteComm.map(i => i.id) } }
      });
    } else {
      console.log("No orphaned Interaction records found.");
    }

    console.log("Cleanup complete!");

  } catch (error) {
    console.error("Error during cleanup:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
