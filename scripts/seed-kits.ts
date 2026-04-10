import 'dotenv/config'
import { AgeGroup, BrincadeiraType, AnimatorLevel } from '@prisma/client'
import prisma from '../lib/prisma'
import { SYSTEM_COLLECTIONS } from '../lib/data/biblioteca'

function parseDuration(durStr: string) {
  const num = parseInt(durStr.replace(/\D/g, ''))
  return isNaN(num) ? 15 : num
}

function parseParticipants(partStr: string) {
  const num = parseInt(partStr.replace(/\D/g, ''))
  return isNaN(num) ? 2 : num
}

function parseAgeGroup(ageStr: string): AgeGroup {
  const numMatch = ageStr.match(/\d+/)
  if (!numMatch) return AgeGroup.AGE_6_9
  const age = parseInt(numMatch[0])
  if (age <= 5) return AgeGroup.AGE_3_5
  if (age <= 9) return AgeGroup.AGE_6_9
  return AgeGroup.AGE_10_PLUS
}

async function main() {
  console.log("Iniciando seed de kits...")

  // Create or find system user
  let systemUser = await prisma.user.findFirst({
    where: { email: "equipe@behappy.com" }
  })

  if (!systemUser) {
    systemUser = await prisma.user.create({
      data: {
        email: "equipe@behappy.com",
        name: "Equipe BeHappy",
        active_title: "Criador Oficial",
        avatar_url: "https://api.dicebear.com/7.x/shapes/svg?seed=behappy&backgroundColor=FF9500",
        xp: 9999
      }
    })
    console.log("Usuário Equipe BeHappy criado com sucesso.")
  } else {
    console.log("Usuário sistema já existe.")
  }

  let totalIgnored = 0
  let totalInserted = 0

  for (const collection of SYSTEM_COLLECTIONS) {
    console.log(`Processando coleção: ${collection.label}...`)
    
    // We create a global collection for this using the Collection model?
    // The instructions say "salvar no banco de dados com a tag específica do kit".
    // So we add collection.id to the tags.

    for (const game of collection.games) {
      // Check if it already exists by title and user_id to prevent duplicates
      const existing = await prisma.brincadeira.findFirst({
        where: { 
          title: game.title,
          user_id: systemUser.id
        }
      })

      if (existing) {
        totalIgnored++
        continue
      }

      await prisma.brincadeira.create({
        data: {
          user_id: systemUser.id,
          title: game.title,
          short_description: game.description.slice(0, 120),
          steps: game.steps,
          tips: null,
          type: BrincadeiraType.CRIATIVA, // Default
          age_groups: [parseAgeGroup(game.age)],
          min_participants: parseParticipants(game.participants),
          max_participants: null,
          duration_minutes: parseDuration(game.duration),
          animator_level: AnimatorLevel.FACIL,
          materials: game.materials,
          tags: [collection.id], // Using the kit ID as a tag
          published_at: new Date()
        }
      })
      totalInserted++
    }
  }

  console.log(`\nSeed completo! Inseridas: ${totalInserted}. Já existiam: ${totalIgnored}.`)
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
