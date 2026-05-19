import prisma from "../lib/prisma";

async function main() {
  try {
    console.log("Testing connection...");
    const count = await prisma.user.count();
    console.log("User count:", count);
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
