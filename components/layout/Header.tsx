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
import { getProfile } from "@/lib/actions"
import { useEffect, useState } from "react"

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
  const [userData, setUserData] = useState<{
    name: string;
    level: number;
    xp: number;
    nextLevelXp: number;
    avatar?: string;
    unreadNotificationsCount: number;
  } | null>(null)

  useEffect(() => {
    if (session?.user?.id) {
      getProfile().then(data => {
        if (data) {
          setUserData({
            name: data.name || "Recreador",
            level: data.level,
            xp: data.xp,
            nextLevelXp: data.nextLevelXp,
            avatar: data.avatar || undefined,
            unreadNotificationsCount: data.unreadNotificationsCount || 0
          })
        }
      })
    }
  }, [session])

  const isNotificationsPage = pathname === "/notificacoes"

  // Fallback while loading or if not logged in
  const user = userData || {
    name: session?.user?.name || "Visitante",
    level: 1,
    xp: 0,
    nextLevelXp: 100,
    avatar: session?.user?.image || "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest",
    unreadNotificationsCount: 0
  }

  const xpRemaining = user.nextLevelXp - user.xp
  const progressValue = (user.xp / user.nextLevelXp) * 100

  return (
    <>
      {/* Title Section (Sticky & Fixed) */}
      <div className="sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-5 pt-14 pb-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
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
              {user.unreadNotificationsCount > 0 && (
                <div className="absolute top-1.5 right-1.5 h-3.5 w-3.5 rounded-full bg-[#EF4444] border-[2px] border-white shadow-sm animate-pulse" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Search and User Container (Scrolls with page) */}
      <div className={cn(
        "w-full bg-[#F9F9F7] flex flex-col px-5 space-y-5 pb-2",
        (showSearch || showUserCard) ? "pt-4" : "pt-0"
      )}>

      {/* Search Section (Optional) */}
      {showSearch && (
        <div className="w-full bg-white p-[6px] py-[10px] rounded-[12px] border border-[#F2F2F7] shadow-[0_4px_16px_rgba(0,0,0,0.03)] mb-4">
          <div className="relative group">
            <RiSearchLine 
              size={18} 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93] group-focus-within:text-primary transition-colors" 
            />
            <Input 
              type="search" 
              placeholder="Encontre sua próxima brincadeira..." 
              className="pl-11 h-11 bg-[#F2F2F7] border-none rounded-[10px] text-[15px] placeholder:text-[#8E8E93] focus-visible:ring-1 focus-visible:ring-primary/10 transition-all font-medium"
            />
          </div>
        </div>
      )}

      {/* User XP Card */}
      {showUserCard && (
        <Card className="p-4 border border-[#F2F2F7] shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-[12px] bg-white">
          <div className="flex items-center gap-4 mb-3">
            <Avatar className="h-11 w-11 border-2 border-white shadow-sm">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary font-bold">{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-[16px] font-extrabold text-[#1A1A1A] tracking-[-0.01em]">
                {user.name}
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[11px] font-bold uppercase tracking-tight text-[#8E8E93]">
                  {getTitleForLevel(user.level)}
                </span>
                <span className="text-[11px] font-extrabold text-[#FF9500] uppercase tracking-widest">
                  • Nível {user.level}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[11px] font-medium text-[#8E8E93]">
                Faltam {xpRemaining} XP para o próximo nível
              </span>
              <span className="text-[12px] font-bold text-[#1A1A1A]">
                {user.xp} XP
              </span>
            </div>
            <Progress value={progressValue} className="h-2 bg-[#F2F2F7]" indicatorClassName="bg-primary" />
          </div>
        </Card>
      )}
      </div>
    </>
  )
}
