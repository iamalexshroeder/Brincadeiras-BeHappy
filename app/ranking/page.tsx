"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { RiTrophyLine, RiLoader4Line, RiCheckLine } from "@remixicon/react"
import { getTitleForLevel, GAMIFICATION_TIERS } from "@/utils/gamification"
import { getRanking, getProfile } from "@/lib/actions"

type RankingUser = {
  rank: number
  id: string
  name: string
  avatar: string | null
  xp: number
  level: number
  title: string
}

const getLevelColor = (level: number) => {
  if (level >= 10) return "text-[var(--red)]"
  if (level >= 7) return "text-primary"
  if (level >= 4) return "text-[var(--purple)]"
  return "text-[var(--blue)]"
}

export default function Ranking() {
  const [rankingData, setRankingData] = useState<RankingUser[]>([])
  const [loading, setLoading] = useState(true)
  const [showAllMissions, setShowAllMissions] = useState(false)
  const [currentUserXp, setCurrentUserXp] = useState(0)

  useEffect(() => {
    // Busca o ranking global
    getRanking(50).then((data) => {
      setRankingData(data as RankingUser[])
      setLoading(false)
    })
    
    // Busca o perfil do usuário atual para a trilha de títulos
    getProfile().then(profile => {
      if (profile) setCurrentUserXp(profile.xp)
    })
  }, [])

  const userXp = currentUserXp

  const tiersWithStatus = GAMIFICATION_TIERS.map((tier, index) => {
    let status = "locked"
    if (userXp >= tier.minXp) {
      status = "completed"
    } else if (index === 0 || userXp >= GAMIFICATION_TIERS[index - 1].minXp) {
      status = "current"
    }
    return { ...tier, status }
  })
  const displayedTiers = showAllMissions ? tiersWithStatus : tiersWithStatus.slice(0, 10)

  const topThree = rankingData.slice(0, 3)
  const rest = rankingData.slice(3)

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Ranking" showSearch={false} showUserCard={false} />

      <main className="px-5 pb-32 pt-4">

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <RiLoader4Line size={32} className="text-primary animate-spin mb-3" />
            <p className="text-[14px] text-[#8E8E93] font-medium">Carregando ranking...</p>
          </div>
        ) : rankingData.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
              <RiTrophyLine size={32} className="text-[#C7C7CC]" />
            </div>
            <p className="text-[17px] font-bold text-[#1A1A1A] mb-1">Ranking ainda vazio</p>
          </div>
        ) : (
          <>
            {/* Podium */}
            {topThree.length >= 3 && (
              <section className="mb-12 pt-8">
                <div className="flex items-end justify-center gap-4 relative max-w-sm mx-auto">
                  {/* Rank 2 */}
                  <div className="flex flex-col items-center gap-3 flex-1">
                    <div className="relative">
                      <Avatar className="h-16 w-16 border-2 border-white shadow-sm ring-2 ring-slate-100">
                        <AvatarImage src={topThree[1]?.avatar ?? undefined} />
                        <AvatarFallback>{topThree[1]?.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-slate-400 text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">2</div>
                    </div>
                    <div className="text-center">
                      <span className="block text-[13px] font-bold text-[#1A1A1A] truncate max-w-[80px]">{topThree[1]?.name}</span>
                      <span className="block text-[10px] font-bold uppercase tracking-tight text-[#8E8E93] mb-0.5">{getTitleForLevel(topThree[1]?.level)}</span>
                      <span className={cn("text-[11px] font-extrabold uppercase tracking-wider", getLevelColor(topThree[1]?.level))}>Nível {topThree[1]?.level}</span>
                    </div>
                  </div>

                  {/* Rank 1 */}
                  <div className="flex flex-col items-center gap-3 flex-1 -mt-8">
                    <div className="relative">
                      <Avatar className="h-24 w-24 border-3 border-white shadow-xl ring-2 ring-yellow-100">
                        <AvatarImage src={topThree[0]?.avatar ?? undefined} />
                        <AvatarFallback>{topThree[0]?.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white text-[12px] font-bold h-8 w-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm">1</div>
                    </div>
                    <div className="text-center mt-2">
                      <span className="block text-[15px] font-extrabold text-[#1A1A1A]">{topThree[0]?.name}</span>
                      <span className="block text-[11px] font-bold uppercase tracking-tight text-[#8E8E93] mb-0.5">{getTitleForLevel(topThree[0]?.level)}</span>
                      <span className={cn("text-[12px] font-extrabold uppercase tracking-widest", getLevelColor(topThree[0]?.level))}>Nível {topThree[0]?.level}</span>
                    </div>
                  </div>

                  {/* Rank 3 */}
                  <div className="flex flex-col items-center gap-3 flex-1">
                    <div className="relative">
                      <Avatar className="h-16 w-16 border-2 border-white shadow-sm ring-2 ring-amber-100">
                        <AvatarImage src={topThree[2]?.avatar ?? undefined} />
                        <AvatarFallback>{topThree[2]?.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 bg-amber-600 text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">3</div>
                    </div>
                    <div className="text-center">
                      <span className="block text-[13px] font-bold text-[#1A1A1A] truncate max-w-[80px]">{topThree[2]?.name}</span>
                      <span className="block text-[10px] font-bold uppercase tracking-tight text-[#8E8E93] mb-0.5">{getTitleForLevel(topThree[2]?.level)}</span>
                      <span className={cn("text-[11px] font-extrabold uppercase tracking-wider", getLevelColor(topThree[2]?.level))}>Nível {topThree[2]?.level}</span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Leaderboard List */}
            {rest.length > 0 && (
              <section className="space-y-4 mb-12">
                <h2 className="text-[13px] font-extrabold text-[#8E8E93] uppercase tracking-widest pl-1 mb-2">Classificação</h2>
                <div className="space-y-2">
                  {rest.map((user) => (
                    <Card key={user.rank} className="p-3 border-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-[6px] bg-white">
                      <div className="flex items-center gap-4">
                        <span className="text-[14px] font-bold text-[#8E8E93] w-5 text-center">{user.rank}</span>
                        <Avatar className="h-12 w-12 border-2 border-[#F2F2F7]">
                          <AvatarImage src={user.avatar ?? undefined} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex items-center justify-between">
                            <span className="text-[16px] font-bold text-[#1A1A1A]">{user.name}</span>
                            <span className={cn("text-[14px] font-extrabold", getLevelColor(user.level))}>Nível {user.level}</span>
                          </div>
                          <span className="text-[11px] font-bold uppercase tracking-tight text-[#8E8E93]">{getTitleForLevel(user.level)}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Trilha de Títulos */}
        <section className="space-y-4 pt-8 border-t border-[#E5E5EA]">
          <div className="pl-1 mb-2">
            <h2 className="text-[13px] font-extrabold text-[#8E8E93] uppercase tracking-widest">Trilha de Títulos</h2>
            <span className="text-[12px] font-bold text-primary mt-1 block">Nível Máximo: 100</span>
          </div>

          <div className="space-y-2">
            {displayedTiers.map((tier) => {
              const isLocked = tier.status === "locked"
              const isCompleted = tier.status === "completed"
              const isCurrent = tier.status === "current"
              const levelColorClass = getLevelColor(tier.level).replace("text-", "bg-")
              const textColorClass = getLevelColor(tier.level)

              return (
                <Card
                  key={tier.level}
                  className={cn(
                    "p-3 border-none shadow-[0_2px_8px_rgba(0,0,0,0.02)] rounded-[6px] transition-all bg-white relative overflow-hidden",
                    isLocked && "opacity-60 grayscale bg-[#F9F9F7]",
                    isCurrent && "ring-1 ring-primary/20 shadow-sm"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-full border-2 shadow-sm font-black text-[18px] shrink-0",
                      isCompleted && "border-transparent bg-[#34C759] text-white",
                      isLocked && "border-transparent bg-gray-100 text-gray-400",
                      isCurrent && "bg-[#FFCC00] border-transparent text-[#1A1A1A] ring-4 ring-[#FFCC00]/20",
                    )}>
                      {isCompleted ? <RiCheckLine size={24} /> : tier.level}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-between">
                        <span className={cn("text-[16px] font-bold", isCurrent || isCompleted ? "text-[#1A1A1A]" : "text-[#8E8E93]")}>{tier.title}</span>
                        <span className={cn("text-[14px] font-extrabold", isCurrent ? "text-[#1A1A1A]" : isCompleted ? "text-[#34C759]" : "text-[#8E8E93]")}>
                          {isCompleted ? "Obtido" : `${tier.minXp} XP`}
                        </span>
                      </div>
                      <span className={cn("text-[11px] font-bold uppercase tracking-tight mt-0.5",
                        isLocked ? "text-[#8E8E93]" : isCompleted ? "text-[#8E8E93]" : textColorClass
                      )}>
                        {isLocked ? `Requer Nível ${tier.level}` : isCompleted ? "Conquistado" : "Título Atual"}
                      </span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {tiersWithStatus.length > 10 && (
            <Button
              onClick={() => setShowAllMissions(!showAllMissions)}
              variant="ghost"
              className="w-full h-12 text-[#8E8E93] font-bold text-[14px] active:bg-gray-100 rounded-[6px] mt-2"
            >
              {showAllMissions ? "Mostrar menos" : "Ver mais conquistas"}
            </Button>
          )}
        </section>
      </main>
    </div>
  )
}
