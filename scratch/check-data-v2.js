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
    const users = await prisma.user.findMany({ select: { id: true, name: true } });
    const gabriel = users.find(u => u.name && u.name.includes("Gabriel"));
    if (!gabriel) {
      console.log("User Gabriel not found. Found:", users.map(u => u.name));
      return;
    }

    console.log(`Checking interactions for ${gabriel.name} (${gabriel.id}):`);

    const likes = await prisma.interaction.findMany({
      where: { user_id: gabriel.id, type: 'LIKE' },
      include: { brincadeira: true }
    });
    
    const validLikes = likes.filter(l => l.brincadeira !== null);
    const orphanedLikes = likes.filter(l => l.brincadeira === null);

    console.log(`- Total Interaction Likes GIVEN: ${likes.length}`);
    console.log(`- VALID Interaction Likes GIVEN: ${validLikes.length}`);
    console.log(`- ORPHANED Interaction Likes GIVEN: ${orphanedLikes.length}`);

    const systemLikes = await prisma.systemInteraction.findMany({
      where: { user_id: gabriel.id, type: 'LIKE' }
    });
    console.log(`- Total System Likes GIVEN: ${systemLikes.length}`);

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
