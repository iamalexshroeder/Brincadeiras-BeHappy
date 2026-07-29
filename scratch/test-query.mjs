import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allBrincadeiras = await prisma.brincadeira.findMany({
    select: { id: true, title: true, published_at: true, user: { select: { email: true } } }
  })
  console.log("All games in DB:", allBrincadeiras.length)
  console.log(allBrincadeiras.slice(0, 5))

  const feedResult = await prisma.brincadeira.findMany({
    where: {
      published_at: { not: null },
      AND: [
        { user: { email: { not: "equipe@behappy.com" } } }
      ]
    },
    select: { id: true, title: true }
  })
  console.log("Games in feed logic:", feedResult.length)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
