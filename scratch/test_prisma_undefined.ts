import 'dotenv/config'
import prisma from '../lib/prisma'

async function main() {
  const currentUserId = undefined
  try {
    const brincadeira = await prisma.brincadeira.findUnique({
      where: { id: '78ddb81c-9fd4-4435-b492-f468cad567a5' },
      include: {
        user: {
          select: { id: true, name: true, avatar_url: true, image: true, xp: true, active_title: true },
        },
        comments: {
          include: {
            user: {
              select: { name: true, avatar_url: true, image: true },
            },
          },
          orderBy: { created_at: "desc" },
        },
        interactions: currentUserId
          ? {
              where: { user_id: currentUserId },
              select: { type: true },
            }
          : undefined,
      },
    })
    console.log("Success! Returned:", brincadeira)
  } catch (err: any) {
    console.log("Crashed with error:", err.message)
  }
}

main().finally(() => prisma.$disconnect())
