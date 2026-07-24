"use client"

import { RiSearchLine, RiNotification3Line, RiNotification3Fill, RiArrowLeftSLine, RiUser3Line } from "@remixicon/react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { cn } from "@/lib/utils"
import { getProfile, searchMonitors } from "@/lib/actions"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { useEffect, useState, useRef, Suspense, useCallback } from "react"

type SearchMode = "brincadeira" | "monitor"

interface Monitor {
  id: string
  name: string | null
  nickname: string | null
  avatar_url: string | null
  image: string | null
  role: string | null
}

function SearchInput({ onMonitorResults, searchMode }: { onMonitorResults: (monitors: Monitor[]) => void; searchMode: SearchMode }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [inputValue, setInputValue] = useState(searchMode === "brincadeira" ? (searchParams.get("q") ?? "") : "")

  useEffect(() => {
    setInputValue("")
  }, [searchMode])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setInputValue(val)

    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current)

    if (searchMode === "brincadeira") {
      searchTimeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(searchParams.toString())
        if (val) params.set("q", val)
        else params.delete("q")
        router.push(`/explorar?${params.toString()}`)
      }, 300)
    } else {
      searchTimeoutRef.current = setTimeout(async () => {
        const results = await searchMonitors(val)
        onMonitorResults(results)
      }, 250)
    }
  }, [searchMode, searchParams, router, onMonitorResults])

  return (
    <Input
      type="search"
      value={inputValue}
      onChange={handleSearchChange}
      placeholder={searchMode === "brincadeira" ? "Encontre sua próxima brincadeira..." : "Pesquise um monitor..."}
      className="pl-10 h-10 bg-white border-0 text-[15px] placeholder:text-[#C7C7CC] focus-visible:ring-0 focus-visible:ring-offset-0 font-medium transition-all"
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
    avatar?: string;
    unreadNotificationsCount: number;
  } | null>(null)

  const [searchMode, setSearchMode] = useState<SearchMode>("brincadeira")
  const [monitorResults, setMonitorResults] = useState<Monitor[]>([])
  const [showMonitorDropdown, setShowMonitorDropdown] = useState(false)
  const [monitorsLoaded, setMonitorsLoaded] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (session?.user?.id) {
      getProfile().then(data => {
        if (data) {
          setUserData({
            name: data.name || "Recreador",
            avatar: data.avatar || undefined,
            unreadNotificationsCount: data.unreadNotificationsCount || 0,
          })
        }
      })
    }
  }, [session])

  // Load all monitors when mode changes to "monitor"
  useEffect(() => {
    if (searchMode === "monitor" && !monitorsLoaded) {
      searchMonitors("").then(results => {
        setMonitorResults(results)
        setMonitorsLoaded(true)
        setShowMonitorDropdown(true)
      })
    } else if (searchMode === "monitor") {
      setShowMonitorDropdown(true)
    } else {
      setShowMonitorDropdown(false)
    }
  }, [searchMode, monitorsLoaded])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowMonitorDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const handleMonitorResults = useCallback((monitors: Monitor[]) => {
    setMonitorResults(monitors)
    setShowMonitorDropdown(true)
  }, [])

  const isNotificationsPage = pathname === "/notificacoes"
  const isHomePage = pathname === "/"

  const user = userData || {
    name: session?.user?.name || "Visitante",
    avatar: session?.user?.image || undefined,
    unreadNotificationsCount: 0,
  }

  return (
    <>
      <div className={cn(
        "sticky top-0 z-40 bg-[#F9F9F7]/95 backdrop-blur-md px-4 sm:px-6 no-print transition-all overflow-visible",
        showBackButton ? "pt-12 pb-4" : "pt-10 pb-4"
      )}>
        <div className="flex items-center justify-between gap-2 overflow-visible">
          <div className="flex items-center gap-3 overflow-visible">
            {showBackButton ? (
              <button 
                onClick={() => router.back()} 
                className="h-10 w-10 rounded-full bg-white shadow-sm border border-border flex items-center justify-center text-muted-foreground active:scale-95 transition-all shrink-0 -ml-1 mr-1"
              >
                <RiArrowLeftSLine size={24} />
              </button>
            ) : (
              isHomePage && session?.user && (
                <Link href="/perfil" className="shrink-0 active:scale-95 transition-all block">
                  <UserAvatar
                    src={user.avatar}
                    name={user.name}
                    className="h-10 w-10 rounded-full"
                    fallbackClassName="bg-[#FEF9C3] text-[#EAB308]"
                  />
                </Link>
              )
            )}

            <h1 className="text-[20px] font-bold tracking-tight text-[#1A1A1A] truncate min-w-0">
              {title || (isHomePage ? `Olá, ${user.name.split(" ")[0]}` : "")}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            {rightAction}
            {isHomePage && (
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
            )}
          </div>
        </div>
      </div>

      <div className={cn(
        "w-full bg-[#F9F9F7] flex flex-col px-4 sm:px-6 space-y-4",
        (showSearch || showUserCard) ? "pt-4 pb-2" : "pt-0 pb-0"
      )}>

        {showSearch && (
          <div className="flex flex-col gap-2" ref={dropdownRef}>
            {/* Mode toggle */}
            <div className="flex gap-1.5 bg-[#EFEFEF] p-1 rounded-[10px] self-start">
              <button
                onClick={() => setSearchMode("brincadeira")}
                className={cn(
                  "px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all duration-200",
                  searchMode === "brincadeira"
                    ? "bg-white text-[#1A1A1A] shadow-sm"
                    : "text-[#8E8E93]"
                )}
              >
                🎮 Brincadeira
              </button>
              <button
                onClick={() => setSearchMode("monitor")}
                className={cn(
                  "px-3 py-1.5 rounded-[8px] text-[12px] font-bold transition-all duration-200",
                  searchMode === "monitor"
                    ? "bg-white text-[#1A1A1A] shadow-sm"
                    : "text-[#8E8E93]"
                )}
              >
                👤 Monitor
              </button>
            </div>

            {/* Search bar */}
            <div className="relative">
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
                      className="pl-10 h-10 bg-white border-0 text-[15px] placeholder:text-[#C7C7CC] focus-visible:ring-0 focus-visible:ring-offset-0 font-medium transition-all"
                    />
                  }>
                    <SearchInput onMonitorResults={handleMonitorResults} searchMode={searchMode} />
                  </Suspense>
                </div>
              </div>

              {/* Monitor Dropdown */}
              {searchMode === "monitor" && showMonitorDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-[14px] border border-[#E5E5EA] shadow-[0_8px_30px_rgba(0,0,0,0.10)] z-50 max-h-72 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
                  {monitorResults.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-[#8E8E93]">
                      <RiUser3Line size={28} className="mb-2 opacity-40" />
                      <span className="text-[13px] font-medium">Nenhum monitor encontrado</span>
                    </div>
                  ) : (
                    <div className="py-1.5">
                      {monitorResults.map((monitor, index) => (
                        <button
                          key={monitor.id}
                          onClick={() => {
                            setShowMonitorDropdown(false)
                            router.push(`/recreador/${monitor.id}`)
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F9F9F7] active:bg-[#F2F2F7] transition-colors text-left",
                            index < monitorResults.length - 1 && "border-b border-[#F2F2F7]"
                          )}
                        >
                          <UserAvatar
                            src={monitor.avatar_url || monitor.image || undefined}
                            name={monitor.name || undefined}
                            className="h-10 w-10 shrink-0"
                            fallbackClassName="bg-[#FEF9C3] text-[#EAB308]"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="text-[14px] font-bold text-[#1A1A1A] truncate">
                              {monitor.name || "Monitor"}
                            </span>
                            {monitor.nickname && (
                              <span className="text-[12px] text-[#8E8E93] font-medium truncate">
                                @{monitor.nickname}
                              </span>
                            )}
                            {monitor.role && (
                              <span className="text-[11px] text-primary font-semibold truncate">
                                {monitor.role}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
