import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Starting Factory Reset...");

  try {
    await prisma.$transaction([
      prisma.interaction.deleteMany(),
      prisma.comment.deleteMany(),
      prisma.notification.deleteMany(),
      prisma.xPTransaction.deleteMany(),
      prisma.brincadeira.deleteMany(),
      prisma.user.updateMany({
        data: {
          xp: 0,
          streak_weeks: 0,
          profile_xp_claimed: false,
          last_published_at: null
        }
      })
    ]);

    console.log("✅ Reset Complete! All data cleared and users reset to Level 1.");
  } catch (error) {
    console.error("❌ Error during reset:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
