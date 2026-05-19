import 'dotenv/config'
import prisma from '../lib/prisma'
import { getBrincadeiraById } from '../lib/actions'

async function main() {
  // Let's fetch all brincadeiras that would appear in the ranking
  const brincadeiras = await prisma.brincadeira.findMany({
    orderBy: { likes_count: "desc" },
    where: { published_at: { not: null } },
    select: { id: true, title: true }
  })

  console.log(`Testing ${brincadeiras.length} ranking items...`)
  for (const b of brincadeiras) {
    try {
      const detail = await getBrincadeiraById(b.id)
      if (!detail) {
        console.log(`⚠️ ID ${b.id} ("${b.title}") returned null!`)
      } else {
        console.log(`✅ ID ${b.id} ("${b.title}") loaded successfully. Creator ID: ${detail.creator.id}`)
      }
    } catch (err: any) {
      console.log(`❌ ID ${b.id} ("${b.title}") crashed! Error: ${err.message}`)
    }
  }
}

main().finally(() => prisma.$disconnect())
