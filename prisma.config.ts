// Prisma 7 config
import "dotenv/config";
// NOTE: No dotenv/config import — Vercel injects env vars natively during build and runtime
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
