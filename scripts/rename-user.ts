import 'dotenv/config'
import prisma from '../lib/prisma'

async function main() {
  await prisma.user.updateMany({
    where: { email: "equipe@behappy.com" },
    data: { name: "BeHappyinha" }
  })
  console.log("Nome atualizado para BeHappyinha!")
}

main().finally(() => prisma.$disconnect())
