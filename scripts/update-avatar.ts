import 'dotenv/config'
import prisma from '../lib/prisma'

async function main() {
  await prisma.user.updateMany({
    where: { email: "equipe@behappy.com" },
    data: { avatar_url: "/icon-512.png" }
  })
  console.log("Avatar atualizado!")
}

main().finally(() => prisma.$disconnect())
