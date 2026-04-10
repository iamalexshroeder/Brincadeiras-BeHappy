"use client"

import { useEffect } from "react"
import { toast } from "sonner"

export function PWARegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service Worker registrado com sucesso:", registration.scope)
          })
          .catch((error) => {
            console.error("Falha ao registrar o Service Worker:", error)
          })
      })
    }

    const handleOffline = () => toast.error("Você está offline. Algumas funções podem estar limitadas.", { duration: 5000 })
    const handleOnline = () => toast.success("Você está online novamente!", { duration: 3000 })

    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)

    return () => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  return null
}
