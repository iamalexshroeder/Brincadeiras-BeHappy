import 'dotenv/config'
import prisma from '../lib/prisma'

async function main() {
  try {
    const brincadeira = await prisma.brincadeira.findUnique({
      where: { id: 'undefined' },
    })
    console.log("Success! Returned:", brincadeira)
  } catch (err: any) {
    console.log("Crashed with error:", err.message)
  }
}

main().finally(() => prisma.$disconnect())
