import prisma from './lib/prisma'

async function test() {
  try {
    let whereClause: any = {
      published_at: { not: null },
      AND: [
        { user: { email: { not: 'equipe@behappy.com' } } }
      ]
    }
    const brincadeiras = await prisma.brincadeira.findMany({
      take: 1,
      where: whereClause
    })
    console.log('Success:', brincadeiras.length)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}
test()
