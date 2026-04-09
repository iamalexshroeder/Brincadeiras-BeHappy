import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    console.log("Admin: Iniciando reset global de XP e Transações...")
    
    // Reset all users XP and streak
    const updateResult = await prisma.user.updateMany({
      data: {
        xp: 0,
        streak_weeks: 0,
      }
    })

    // Clear all XP transactions
    await prisma.xPTransaction.deleteMany({})

    // Clear all notifications
    await prisma.notification.deleteMany({})

    return NextResponse.json({
      success: true,
      message: `Reset concluído. ${updateResult.count} usuários resetados para 0 XP.`,
    })
  } catch (error: any) {
    console.error("Erro no reset:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
