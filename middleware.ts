import { type NextRequest, NextResponse } from "next/server"
import NextAuth from "next-auth"
import authConfig from "./auth.config"

// Initialize auth for the edge runtime WITHOUT the Prisma adapter
// (Prisma uses standard Node.js APIs which will fail the Vercel Edge build)
const { auth } = NextAuth(authConfig)

// Public routes - no authentication required
const PUBLIC_ROUTES = [
  "/login",
  "/api/auth",
]

export default auth((request) => {
  const { pathname } = request.nextUrl
  const isLoggedIn = !!request.auth

  // Allow public routes and static assets
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname.startsWith(route))
  if (isPublicRoute) {
    return NextResponse.next()
  }

  if (!isLoggedIn) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
