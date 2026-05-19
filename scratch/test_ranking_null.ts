import 'dotenv/config'
import prisma from '../lib/prisma'
import { formatBrincadeira } from '../lib/formatters'

async function main() {
  const brincadeiras = await prisma.brincadeira.findMany({
    include: {
      user: true,
    }
  })

  console.log(`Total brincadeiras: ${brincadeiras.length}`)
  let nullCount = 0
  for (const b of brincadeiras) {
    const formatted = formatBrincadeira(b, undefined)
    if (!formatted) {
      console.log(`❌ Brincadeira ID ${b.id} returned null from formatBrincadeira! User relation present:`, !!b.user)
      nullCount++
    }
  }
  console.log(`Done. Null formatted count: ${nullCount}`)
}

main().finally(() => prisma.$disconnect())
