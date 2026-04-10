import prisma from '../lib/prisma'

async function main() {
  const user = await prisma.user.findFirst({
    where: {
      name: {
        contains: 'irk',
        mode: 'insensitive'
      }
    }
  })

  if (!user) {
    console.log("❌ Usuário 'irk bailoni' não encontrado.")
    return
  }

  console.log(`🗑️ Removendo usuário: ${user.name} (${user.email})...`)
  
  await prisma.user.delete({
    where: { id: user.id }
  })

  console.log("✅ Usuário removido com sucesso!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
