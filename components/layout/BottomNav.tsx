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
  { label: "Início",   href: "/",        icon: RiHome4Line },
  { label: "Explorar", href: "/explorar", icon: RiSearchLine },
  { label: "Ranking",  href: "/ranking",  icon: RiTrophyLine },
  { label: "Perfil",   href: "/perfil",   icon: RiUser3Line },
]

export function BottomNav() {
  const pathname = usePathname()

  if (pathname === "/login" || pathname === "/criar") return null

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around bg-[#F9F9F7] border-t border-[#E5E5EA] md:hidden px-4 h-[calc(64px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)] no-print">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-1 flex-col items-center justify-center gap-1 transition-all active:opacity-70"
          >
            <div className="flex h-6 w-6 items-center justify-center">
              <Icon size={24} color={isActive ? "#FF9500" : "#8E8E93"} />
            </div>
            <span
              className="text-[10px] font-bold tracking-tight uppercase"
              style={{ color: isActive ? "#FF9500" : "#8E8E93" }}
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
