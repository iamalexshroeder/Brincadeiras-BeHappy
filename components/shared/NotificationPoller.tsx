"use client"

import { useEffect, useState, useRef } from "react"
import { getLatestUnreadNotifications } from "@/lib/actions"
import { toast } from "sonner"
import { useSession } from "next-auth/react"

export function NotificationPoller() {
  const { data: session } = useSession()
  const [lastCheck, setLastCheck] = useState<string>(() => new Date().toISOString())
  // Keep track of shown notifications to prevent duplicates locally
  const shownNotifications = useRef<Set<string>>(new Set())

  useEffect(() => {
    // Only poll if user is logged in
    if (!session?.user?.id) return

    const checkNotifications = async () => {
      try {
        const notifications = await getLatestUnreadNotifications(lastCheck)
        
        // Update last check to now
        const newCheckTime = new Date().toISOString()
        
        notifications.forEach(notif => {
          if (!shownNotifications.current.has(notif.id)) {
            shownNotifications.current.add(notif.id)
            
            // Fire toast
            toast(notif.title, {
              description: notif.message,
              duration: 5000,
              icon: notif.type === "GAMIFICATION" ? "🏆" : notif.type === "SOCIAL" ? "❤️" : "🔔",
            })
          }
        })

        setLastCheck(newCheckTime)
      } catch (error) {
        console.error("Failed to check notifications", error)
      }
    }

    // Polling interval (30 seconds)
    const interval = setInterval(checkNotifications, 30000)

    return () => clearInterval(interval)
  }, [session, lastCheck])

  return null
}
