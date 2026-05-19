"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { getLevelFromXp, GAMIFICATION_TIERS } from "@/utils/gamification"
import { revalidatePath } from "next/cache"
import { XPReason } from "@prisma/client"
import { WEEKLY_MISSIONS } from "@/lib/missions"

async function awardMissionXP(userId: string, amount: number, referenceId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId }, select: { xp: true } })
  if (!user) return

  const previousLevel = getLevelFromXp(user.xp).level
  const newXp = user.xp + amount
  const newLevel = getLevelFromXp(newXp).level

  await prisma.$transaction([
    prisma.user.update({ where: { id: userId }, data: { xp: newXp } }),
    prisma.xPTransaction.create({
      data: { user_id: userId, amount, reason: "STREAK" as XPReason, reference_id: referenceId },
    }),
  ])
}

function getWeekStart() {
  const now = new Date()
  const day = now.getUTCDay()
  const diff = day === 0 ? -6 : 1 - day
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + diff, 0, 0, 0))
}

export async function getMissions() {
  const session = await auth()
  if (!session?.user?.id) return []
  const userId = session.user.id
  const weekStart = getWeekStart()

  const [interactions, brincadeiras, claimedTx] = await prisma.$transaction([
    prisma.interaction.findMany({
      where: { 
        user_id: userId, 
        created_at: { gte: weekStart },
        type: { in: ["LIKE", "SAVED"] }
      },
      select: { type: true },
    }),
    prisma.brincadeira.count({ where: { user_id: userId, published_at: { gte: weekStart } } }),
    prisma.xPTransaction.findMany({
      where: {
        user_id: userId,
        reason: "STREAK",
        reference_id: { startsWith: "mission_" },
        created_at: { gte: weekStart },
      },
      select: { reference_id: true },
    }),
  ])

  const claimedIds = new Set(claimedTx.map(t => t.reference_id?.replace("mission_", "")))
  const likes = interactions.filter(i => i.type === "LIKE").length
  const saved = interactions.filter(i => i.type === "SAVED").length

  return WEEKLY_MISSIONS.map(m => {
    let progress = 0
    if (m.type === "LIKE") progress = Math.min(likes, m.goal)
    else if (m.type === "SAVED") progress = Math.min(saved, m.goal)
    else if (m.type === "PUBLISH") progress = Math.min(brincadeiras, m.goal)

    return { ...m, progress, completed: progress >= m.goal, claimed: claimedIds.has(m.id) }
  })
}

export async function claimMission(missionId: string) {
  const session = await auth()
  if (!session?.user?.id) throw new Error("Não autenticado")
  const userId = session.user.id

  const mission = WEEKLY_MISSIONS.find(m => m.id === missionId)
  if (!mission) throw new Error("Missão inválida")

  const weekStart = getWeekStart()
  const alreadyClaimed = await prisma.xPTransaction.findFirst({
    where: { user_id: userId, reason: "STREAK", reference_id: `mission_${missionId}`, created_at: { gte: weekStart } },
  })
  if (alreadyClaimed) throw new Error("Missão já resgatada esta semana")

  await awardMissionXP(userId, mission.xp, `mission_${missionId}`)

  await prisma.notification.create({
    data: {
      user_id: userId,
      type: "SYSTEM",
      title: `Missão completa: ${mission.title}!`,
      message: `Você concluiu a missão '${mission.title}' com sucesso! 🎉`,
    },
  })

  revalidatePath("/")
  revalidatePath("/ranking")
  return { success: true, xp: mission.xp }
}
