"use client"

import { useEffect, useRef } from "react"
import { getLatestUnreadNotifications } from "@/lib/actions"
import { toast } from "sonner"
import { useSession } from "next-auth/react"

export function NotificationPoller() {
  const { data: session } = useSession()
  const lastCheckRef = useRef<string>(new Date().toISOString())
  const shownNotifications = useRef<Set<string>>(new Set())

  useEffect(() => {
    if (!session?.user?.id) return

    const checkNotifications = async () => {
      try {
        const notifications = await getLatestUnreadNotifications(lastCheckRef.current)
        lastCheckRef.current = new Date().toISOString()

        notifications.forEach(notif => {
          if (!shownNotifications.current.has(notif.id)) {
            shownNotifications.current.add(notif.id)
            toast(notif.title, {
              description: notif.message,
              duration: 5000,
              icon: notif.type === "GAMIFICATION" ? "🏆" : notif.type === "SOCIAL" ? "❤️" : "🔔",
            })
          }
        })
      } catch (error) {
        console.error("Failed to check notifications", error)
      }
    }

    const interval = setInterval(checkNotifications, 30000)
    return () => clearInterval(interval)
  }, [session?.user?.id])

  return null
}
