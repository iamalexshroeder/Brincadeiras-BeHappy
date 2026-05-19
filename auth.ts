import NextAuth, { type DefaultSession } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"
import authConfig from "./auth.config"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role?: string | null
    } & DefaultSession["user"]
  }
}

export const { 
  handlers: { GET, POST }, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = (user as any).role || null
      } else if (!token.role && token.sub) {
        const dbUser = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true }
        })
        token.role = dbUser?.role || null
      }
      if (trigger === "update" && session) {
        if (session.role) {
          token.role = session.role
        } else {
          const dbUser = await prisma.user.findUnique({
            where: { id: token.sub },
            select: { role: true }
          })
          token.role = dbUser?.role || null
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
        session.user.role = token.role as string | null
      }
      return session
    },
  },
  ...authConfig,
})
