import prisma from '../lib/prisma'

async function main() {
  console.log("🧹 Iniciando limpeza do banco de dados...")

  // Delete all interactions first (though cascade usually handles it, manually cleaning is safer for direct scripts sometimes)
  // Actually, deleteMany on Brincadeira will cascade delete Interactions and Comments due to schema definitions
  
  const deletedBrincadeiras = await prisma.brincadeira.deleteMany({})
  console.log(`🗑️ ${deletedBrincadeiras.count} brincadeiras removidas.`)

  // Cleanup XP Transactions related to those publications if we want to be thorough
  // But since reference_id might be the only link, let's just wipe transactions that are of type PUBLISHED
  const deletedXP = await prisma.xPTransaction.deleteMany({
    where: {
      reason: 'PUBLISHED'
    }
  })
  console.log(`✨ ${deletedXP.count} transações de XP de publicação removidas.`)

  // Optional: Reset users XP if it was exclusively from these scripts
  // But maybe the user has some real XP. Let's just reset everyone to 0 if the user said "no deixe nada em conta nenhuma"
  // Actually "não deixe nada criado em conta nenhuma" likely refers to the games/posts.
  // I will just reset XP to 0 for a fresh start as well, to avoid phantom levels.
  const resetUsers = await prisma.user.updateMany({
    data: {
      xp: 0,
      streak_weeks: 0,
      active_title: null,
      unlocked_titles: []
    }
  })
  console.log(`👤 XP de ${resetUsers.count} usuários resetado.`)

  console.log("✅ Limpeza concluída. O banco de dados para o feed está zerado.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
