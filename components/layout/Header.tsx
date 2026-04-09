"use client"

import { RiSearchLine, RiNotification3Line, RiNotification3Fill } from "@remixicon/react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { getTitleForLevel } from "@/utils/gamification"
import { getProfile } from "@/lib/actions"
import { UserAvatar } from "@/components/ui/UserAvatar"
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
    rankBadge?: "gold" | "silver" | "bronze" | null;
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
            unreadNotificationsCount: data.unreadNotificationsCount || 0,
            rankBadge: data.rankBadge
          })
        }
      })
    }
  }, [session])

  const isNotificationsPage = pathname === "/notificacoes"

  const user = userData || {
    name: session?.user?.name || "Visitante",
    level: 1,
    xp: 0,
    nextLevelXp: 100,
    avatar: session?.user?.image || undefined,
    unreadNotificationsCount: 0,
    rankBadge: null
  }

  const xpRemaining = user.nextLevelXp - user.xp
  const progressValue = Math.min((user.xp / user.nextLevelXp) * 100, 100)

  return (
    <>
      {/* Sticky top bar — title + notification bell */}
      <div className="sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-5 pt-14 pb-4 border-b border-[#E5E5EA] no-print">
        <div className="flex items-center justify-between">
          <h1 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
            {title || `Olá, ${user.name.split(" ")[0]}`}
          </h1>
          <button
            onClick={() => {
              if (isNotificationsPage) {
                router.back()
              } else {
                router.push("/notificacoes")
              }
            }}
            className={cn(
              "relative flex items-center justify-center h-10 w-10 rounded-full transition-colors",
              isNotificationsPage ? "text-[#FF9500]" : "text-[#8E8E93] active:text-[#FF9500]"
            )}
          >
            {isNotificationsPage ? <RiNotification3Fill size={24} /> : <RiNotification3Line size={24} />}
            {user.unreadNotificationsCount > 0 && (
              <div className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-[#EF4444] border-2 border-[#F9F9F7]" />
            )}
          </button>
        </div>
      </div>

      {/* Scrollable content below the sticky bar */}
      <div className={cn(
        "w-full bg-[#F9F9F7] flex flex-col px-5 space-y-4",
        (showSearch || showUserCard) ? "pt-4 pb-2" : "pt-0 pb-0"
      )}>

        {/* Search */}
        {showSearch && (
          <div className="w-full bg-white p-[6px] rounded-[12px] border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="relative">
              <RiSearchLine
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C7C7CC]"
              />
              <Input
                type="search"
                placeholder="Encontre sua próxima brincadeira..."
                className="pl-10 h-10 bg-[#F2F2F7] border-none rounded-[8px] text-[15px] placeholder:text-[#C7C7CC] focus-visible:ring-0 font-medium"
              />
            </div>
          </div>
        )}

        {/* User XP Card */}
        {showUserCard && (
          <Card className="p-4 border border-[#E5E5EA] shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-[12px] bg-white">
            <Link href="/perfil" className="flex items-center gap-3 mb-3 active:opacity-75 transition-opacity">
              <div className="relative">
                <UserAvatar
                  src={user.avatar}
                  name={user.name}
                  rankBadge={user.rankBadge}
                  className="h-11 w-11"
                  fallbackClassName="bg-[#FFF4E5] text-[#FF9500]"
                />
                {/* Level badge on avatar */}
                <div className="absolute -bottom-1 -right-1 bg-[#FF9500] text-white text-[9px] font-black rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-[3px] leading-none border border-white">
                  {user.level}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-extrabold text-[#1A1A1A] tracking-[-0.01em]">
                  {user.name}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#8E8E93]">
                  {getTitleForLevel(user.level)} · Nível {user.level}
                </span>
              </div>
            </Link>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-medium text-[#8E8E93]">
                  Faltam {xpRemaining} XP para o próximo nível
                </span>
                <span className="text-[11px] font-bold text-[#1A1A1A]">
                  {user.xp} XP
                </span>
              </div>
              <div className="relative h-1.5 w-full bg-[#F2F2F7] rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${progressValue}%`,
                    background: "linear-gradient(90deg, #7C3AED 0%, #A855F7 50%, #D946EF 100%)",
                  }}
                >
                  <div className="absolute inset-0 animate-shimmer-progress opacity-40 rounded-full" />
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  )
}
