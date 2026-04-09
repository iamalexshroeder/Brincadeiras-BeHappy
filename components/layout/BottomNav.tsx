"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  RiHome4Line, 
  RiSearchLine, 
  RiTrophyLine,
  RiUser3Line 
} from "@remixicon/react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "Início",
    href: "/",
    icon: RiHome4Line,
  },
  {
    label: "Explorar",
    href: "/explorar",
    icon: RiSearchLine,
  },
  {
    label: "Ranking",
    href: "/ranking",
    icon: RiTrophyLine,
  },
  {
    label: "Perfil",
    href: "/perfil",
    icon: RiUser3Line,
  },
]

export function BottomNav() {
  const pathname = usePathname()

  if (pathname === "/login" || pathname === "/criar") return null

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around bg-[#F9F9F7] shadow-[0_-1px_0_rgba(0,0,0,0.05)] md:hidden px-4 h-[calc(64px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1.5 transition-all active:opacity-70",
              isActive ? "text-[#FF9500]" : "text-[#8E8E93]"
            )}
          >
            <div className="flex h-6 w-6 items-center justify-center">
              <Icon size={26} strokeWidth={1.5} />
            </div>
            <span className={cn(
              "text-[10px] font-bold tracking-tight uppercase transition-opacity",
              isActive ? "opacity-100 text-[#FF9500]" : "opacity-60"
            )}>
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
