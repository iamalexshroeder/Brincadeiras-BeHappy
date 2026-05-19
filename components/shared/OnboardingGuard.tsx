"use client"

import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { useEffect } from "react"

export function OnboardingGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const user = session.user as any
      if (!user.role && pathname !== "/onboarding" && pathname !== "/login") {
        router.push("/onboarding")
      }
    }
  }, [session, status, pathname, router])

  return <>{children}</>
}
