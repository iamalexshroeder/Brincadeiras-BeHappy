"use client"

import * as React from "react"
import { RiMoonLine, RiSunLine } from "@remixicon/react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-card border border-border shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:bg-muted transition-colors active:scale-95 text-foreground flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <RiSunLine size={20} className="hidden dark:block text-yellow-400" />
      <RiMoonLine size={20} className="block dark:hidden text-slate-700" />
    </button>
  )
}
