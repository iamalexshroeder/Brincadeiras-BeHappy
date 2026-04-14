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
const connectionString = env.DATABASE_URL;

if (!connectionString) {
  console.error("ERRO: DATABASE_URL não encontrada no .env.");
  process.exit(1);
}

const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Iniciando purga de dados 'USED'...");
  try {
    const d1 = await prisma.interaction.deleteMany({
      where: { type: 'USED' }
    });
    console.log(`Removidas ${d1.count} interações da tabela Interaction.`);

    const d2 = await prisma.systemInteraction.deleteMany({
      where: { type: 'USED' }
    });
    console.log(`Removidas ${d2.count} interações da tabela SystemInteraction.`);

    console.log("Purga concluída!");
  } catch (error) {
    console.error("Explosão durante a purga:", error);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
