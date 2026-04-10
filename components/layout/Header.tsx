"use client"

import { RiSearchLine, RiNotification3Line, RiNotification3Fill, RiArrowLeftSLine } from "@remixicon/react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { getTitleForLevel } from "@/utils/gamification"
import { getProfile } from "@/lib/actions"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { useEffect, useState, useRef, Suspense } from "react"

function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)
    searchTimeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (val) params.set("q", val)
      else params.delete("q")
      router.push(`/explorar?${params.toString()}`)
    }, 300)
  }

  return (
    <Input
      type="search"
      defaultValue={searchParams.get("q") ?? ""}
      onChange={handleSearchChange}
      placeholder="Encontre sua próxima brincadeira..."
      className="pl-10 h-10 bg-white border border-[#E5E5EA] rounded-[8px] text-[15px] placeholder:text-[#C7C7CC] focus-visible:ring-1 focus-visible:ring-primary/20 font-medium transition-all"
    />
  )
}

interface HeaderProps {
  title?: string
  showSearch?: boolean
  showUserCard?: boolean
  showBackButton?: boolean
  rightAction?: React.ReactNode
  hideBorder?: boolean
}

export function Header({
  title,
  showSearch = true,
  showUserCard = false,
  showBackButton = false,
  rightAction,
  hideBorder = false
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
    title: string;
    followersCount: number;
    followingCount: number;
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
            rankBadge: data.rankBadge,
            title: data.title,
            followersCount: data.stats?.followers || 0,
            followingCount: data.stats?.following || 0,
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
    rankBadge: null,
    title: "Observador Curioso",
    followersCount: 0,
    followingCount: 0
  }

  const xpRemaining = user.nextLevelXp - user.xp
  const progressValue = Math.min((user.xp / user.nextLevelXp) * 100, 100)

  return (
    <>
      {/* Sticky top bar — title + notification bell */}
      <div className={cn(
        "sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-4 sm:px-6 no-print transition-all",
        !hideBorder && "border-b border-[#E5E5EA]",
        showBackButton ? "pt-12 pb-4" : "pt-10 pb-4"
      )}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 overflow-hidden">
            {showBackButton && (
              <button 
                onClick={() => router.back()} 
                className="h-10 w-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground active:scale-95 transition-all shrink-0 -ml-1 mr-1"
              >
                <RiArrowLeftSLine size={24} />
              </button>
            )}
            <h1 className="text-h2 truncate min-w-0">
              {title || `Olá, ${user.name.split(" ")[0]}`}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            {rightAction}
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
                isNotificationsPage ? "text-[#EAB308]" : "text-[#8E8E93] active:text-[#EAB308]"
              )}
            >
              {isNotificationsPage ? <RiNotification3Fill size={24} /> : <RiNotification3Line size={24} />}
              {user.unreadNotificationsCount > 0 && (
                <div className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-[#EF4444] border-2 border-[#F9F9F7]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable content below the sticky bar */}
      <div className={cn(
        "w-full bg-[#F9F9F7] flex flex-col px-4 sm:px-6 space-y-4",
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
              <Suspense fallback={
                <Input
                  type="search"
                  placeholder="Encontre sua próxima brincadeira..."
                  className="pl-10 h-10 bg-white border border-[#E5E5EA] rounded-[8px] text-[15px] placeholder:text-[#C7C7CC] focus-visible:ring-1 focus-visible:ring-primary/20 font-medium transition-all"
                />
              }>
                <SearchInput />
              </Suspense>
            </div>
          </div>
        )}

        {/* User XP Card */}
        {showUserCard && (
          <Card className="p-3.5 border border-[#E5E5EA] shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-[12px] bg-white">
            <Link href="/perfil" className="flex items-center gap-3 mb-3 active:opacity-75 transition-opacity">
              <div className="relative">
                <UserAvatar
                  src={user.avatar}
                  name={user.name}
                  rankBadge={user.rankBadge}
                  className="h-11 w-11"
                  fallbackClassName="bg-[#FEF9C3] text-[#EAB308]"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[16px] font-bold text-[#1A1A1A] tracking-[-0.01em] leading-tight">
                  {user.name}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wide text-[#8E8E93] leading-tight">
                  {user.title}
                </span>
                <span className="text-[10px] font-semibold text-[#A855F7] leading-tight">
                  Nível {user.level}
                </span>
              </div>
            </Link>

            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="text-[12px] font-bold text-foreground">
                  {user.followersCount} <span className="text-muted-foreground font-medium">seguidores</span>
                </span>
                <span className="text-[12px] font-bold text-foreground">
                  {user.followingCount} <span className="text-muted-foreground font-medium">seguindo</span>
                </span>
              </div>

              <div className="space-y-1.5 border-t border-[#F2F2F7] pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-medium text-[#8E8E93]">
                    Faltam {xpRemaining} XP para o próximo nível
                  </span>
                  <span className="text-[11px] font-bold text-[#1A1A1A]">
                    {user.xp} XP
                  </span>
                </div>
                <div className="relative h-[10px] w-full bg-[#F2F2F7] rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out overflow-hidden"
                    style={{
                      width: `${progressValue}%`,
                      backgroundColor: "#A855F7",
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </>
  )
}
