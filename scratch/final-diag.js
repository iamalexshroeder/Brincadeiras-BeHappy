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
    
    for (const user of users) {
        const likes = await prisma.interaction.count({ where: { user_id: user.id, type: 'LIKE' } });
        const validLikes = await prisma.interaction.count({ 
            where: { user_id: user.id, type: 'LIKE', brincadeira: { isNot: null } } 
        });

        const sysLikes = await prisma.systemInteraction.count({ where: { user_id: user.id, type: 'LIKE' } });
        
        const totalReportedInProfile = likes + sysLikes;
        
        if (totalReportedInProfile > 0) {
            console.log(`User: ${user.name} (${user.id})`);
            console.log(`- Reported Likes: ${totalReportedInProfile} (Comm: ${likes}, Sys: ${sysLikes})`);
            console.log(`- Valid Comm Likes: ${validLikes}`);
            // Check system games manually by ID pattern for now
            const sysItems = await prisma.systemInteraction.findMany({ where: { user_id: user.id, type: 'LIKE' } });
            console.log(`- System Interaction IDs:`, sysItems.map(i => i.game_id));
        }
    }

  } catch (error) {
    console.error("Error:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
