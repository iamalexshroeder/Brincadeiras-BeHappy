"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [show, setShow] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true)
    }, 1500)

    const hideTimer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!show) return null

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[10000] bg-[#F9F9F7] flex items-center justify-center transition-opacity duration-500 ease-in-out",
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <img 
        src="https://www.recreacaobehappy.com.br/images/behappyLogo.png" 
        alt="BeHappy Logo" 
        className="w-auto h-[100px] object-contain drop-shadow-xl"
      />
    </div>
  )
}
