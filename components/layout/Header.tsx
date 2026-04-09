"use client"

import { RiSearchLine, RiNotification3Line, RiNotification3Fill } from "@remixicon/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { getTitleForLevel } from "@/utils/gamification"

interface HeaderProps {
  title?: string
  showSearch?: boolean
  showUserCard?: boolean
}


export function Header({
  title,
  showSearch = true,
  showUserCard = true
}: HeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  const isNotificationsPage = pathname === "/notificacoes"

  // Real session data, with mock fallback for development
  const user = {
    name: session?.user?.name ?? "Alex Silva",
    level: (session?.user as any)?.level ?? 4,
    xp: (session?.user as any)?.xp ?? 800,
    nextLevelXp: (session?.user as any)?.nextLevelXp ?? 1000,
    avatar: session?.user?.image ?? "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  }

  const xpRemaining = user.nextLevelXp - user.xp
  const progressValue = (user.xp / user.nextLevelXp) * 100

  return (
    <header className="w-full bg-[#F9F9F7] space-y-8 pb-8">
      {/* Title Section (Sticky & Stable) */}
      <div className="sticky top-0 z-40 bg-[#F9F9F7]/90 backdrop-blur-md px-5 pt-12 pb-4 border-b border-transparent shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
            {title || `Olá, ${user.name}`}
          </h1>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => {
                if (isNotificationsPage) {
                  router.back()
                } else {
                  router.push("/notificacoes")
                }
              }}
              className={cn(
                "relative flex items-center justify-center h-10 w-10 transition-colors bg-transparent",
                isNotificationsPage ? "text-[#FF9500]" : "text-[#8E8E93] active:text-[#FF9500]"
              )}
            >
              {isNotificationsPage ? <RiNotification3Fill size={26} /> : <RiNotification3Line size={26} />}
              <div className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-[#EF4444] border-[2px] border-white" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Search and User Container */}
      <div className="px-5 space-y-8">

      {/* Search Section (Optional) */}
      {showSearch && (
        <div className="relative group">
          <RiSearchLine 
            size={18} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93] group-focus-within:text-primary transition-colors" 
          />
          <Input 
            type="search" 
            placeholder="Títulos, tags ou materiais" 
            className="pl-11 h-12 bg-[#F2F2F7] border-none rounded-[12px] text-[17px] placeholder:text-[#8E8E93] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all font-medium"
          />
        </div>
      )}

      {/* User XP Card */}
      {showUserCard && (
        <Card className="p-4 border-none shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-[6px] bg-[#F9F9F7]">
          <div className="flex items-center gap-4 mb-4">
            <Avatar className="h-12 w-12 border-2 border-white">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-bold">{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-[17px] font-extrabold text-[#1A1A1A] tracking-[-0.02em]">
                {user.name}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-bold uppercase tracking-tight text-[#8E8E93]">
                  {getTitleForLevel(user.level)}
                </span>
                <span className="text-[12px] font-extrabold text-primary uppercase tracking-wider">
                  • Nível {user.level}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[12px] font-medium text-[#8E8E93]">
                Faltam {xpRemaining} XP para o próximo nível
              </span>
              <span className="text-[12px] font-bold text-[#1A1A1A]">
                {user.xp} XP
              </span>
            </div>
            <Progress value={progressValue} className="h-2 bg-[#E5E5EA]" indicatorClassName="bg-[#AF52DE]" />
          </div>
        </Card>
      )}
      </div>
    </header>
  )
}
