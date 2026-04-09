"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import Link from "next/link"

import { UserAvatar } from "@/components/ui/UserAvatar"
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
  const [currentUser, setCurrentUser] = useState<{ id: string, xp: number } | null>(null)

  useEffect(() => {
    // Busca o ranking global
    getRanking(50).then((data) => {
      setRankingData(data as RankingUser[])
      setLoading(false)
    })
    
    // Busca o perfil do usuário atual para a trilha de títulos
    getProfile().then(profile => {
      if (profile) setCurrentUser({ id: profile.id, xp: profile.xp })
    })
  }, [])

  const userXp = currentUser?.xp ?? 0

  const tiersWithStatus = GAMIFICATION_TIERS.map((tier, index) => {
    let status = "locked"
    if (userXp >= tier.minXp) {
      status = "completed"
    } else if (index === 0 || userXp >= (GAMIFICATION_TIERS[index - 1]?.minXp || 0)) {
      status = "current"
    }
    return { ...tier, status }
  })
  const displayedTiers = showAllMissions ? tiersWithStatus : tiersWithStatus.slice(0, 10)

  const topThree = rankingData.slice(0, 3)
  const rest = rankingData.slice(3)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Ranking" showSearch={false} showUserCard={false} />

      <main className="px-5 pb-32 pt-2">

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <RiLoader4Line size={32} className="text-primary animate-spin mb-3" />
            <p className="text-[14px] text-muted-foreground font-medium">Carregando ranking...</p>
          </div>
        ) : rankingData.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
              <RiTrophyLine size={32} className="text-[#C7C7CC]" />
            </div>
            <p className="text-[17px] font-bold text-muted-foreground mb-1">Ranking ainda vazio</p>
          </div>
        ) : (
          <>
            {/* Global Ranking Section */}
            <section className="mb-12">
              <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest pl-1 mb-6">Top Recreadores</h2>
              
              {/* Flexible Podium */}
              <div className="flex items-end justify-center gap-0 relative max-w-sm mx-auto mb-10 px-2 h-44">
                {/* Rank 2 (Left) */}
                {topThree[1] && (
                  <Link href={`/recreador/${topThree[1].id}`} className="flex flex-col items-center gap-3 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:opacity-80 transition-opacity">
                    <div className="relative">
                      <UserAvatar 
                        src={topThree[1].avatar} 
                        name={topThree[1].name} 
                        rankBadge="silver"
                        className="h-16 w-16"
                        fallbackClassName="bg-slate-100 text-slate-400"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-slate-400 text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">2</div>
                    </div>
                    <div className="text-center w-full">
                      <span className="block text-[13px] font-bold text-foreground truncate mx-auto max-w-[80px]">{topThree[1].name}</span>
                      <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-tight leading-none mb-1">{getTitleForLevel(topThree[1].level)}</span>
                      <span className="block text-[10px] font-extrabold text-slate-500">{topThree[1].xp} XP</span>
                    </div>
                  </Link>
                )}

                {/* Rank 1 (Center) */}
                {topThree[0] && (
                  <Link href={`/recreador/${topThree[0].id}`} className="flex flex-col items-center gap-3 flex-1 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 hover:opacity-80 transition-opacity">
                    <div className="relative">
                      <UserAvatar 
                        src={topThree[0].avatar} 
                        name={topThree[0].name} 
                        rankBadge="gold"
                        className="h-24 w-24"
                        fallbackClassName="bg-yellow-50 text-yellow-500 text-xl"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-white text-[12px] font-bold h-8 w-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm">1</div>
                    </div>
                    <div className="text-center w-full">
                      <span className="block text-[15px] font-extrabold text-foreground truncate mx-auto max-w-full">{topThree[0].name}</span>
                      <span className="block text-[11px] font-bold text-yellow-700 uppercase tracking-tight leading-none mb-1">{getTitleForLevel(topThree[0].level)}</span>
                      <span className="block text-[11px] font-black text-yellow-600 uppercase tracking-tight">{topThree[0].xp} XP</span>
                    </div>
                  </Link>
                )}

                {/* Rank 3 (Right) */}
                {topThree[2] && (
                  <Link href={`/recreador/${topThree[2].id}`} className="flex flex-col items-center gap-3 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 hover:opacity-80 transition-opacity">
                    <div className="relative">
                      <UserAvatar 
                        src={topThree[2].avatar} 
                        name={topThree[2].name} 
                        rankBadge="bronze"
                        className="h-16 w-16"
                        fallbackClassName="bg-amber-50 text-amber-600"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-600 text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">3</div>
                    </div>
                    <div className="text-center w-full">
                      <span className="block text-[13px] font-bold text-foreground truncate mx-auto max-w-[80px]">{topThree[2].name}</span>
                      <span className="block text-[10px] font-bold text-amber-800/60 uppercase tracking-tight leading-none mb-1">{getTitleForLevel(topThree[2].level)}</span>
                      <span className="block text-[10px] font-extrabold text-amber-700">{topThree[2].xp} XP</span>
                    </div>
                  </Link>
                )}
              </div>

              {/* Leaderboard List */}
              {rest.length > 0 && (
                <div className="space-y-2 mt-4">
                  {rest.map((user) => (
                    <Link key={user.rank} href={`/recreador/${user.id}`} className="block">
                      <Card className="p-3 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[12px] bg-card transition-all hover:bg-gray-50 active:scale-[0.98]">
                        <div className="flex items-center gap-4">
                          <span className="text-[14px] font-black text-muted-foreground w-5 text-center">{user.rank}</span>
                          <UserAvatar 
                            src={user.avatar}
                            name={user.name}
                            className="h-12 w-12"
                            fallbackClassName="bg-gray-50 text-gray-400"
                          />
                          <div className="flex-1 min-w-0">
                            <span className="block text-[15px] font-bold text-foreground truncate">{user.name}</span>
                            <span className="block text-[11px] font-bold uppercase tracking-tight text-muted-foreground">{user.title || getTitleForLevel(user.level)}</span>
                          </div>

                          <div className="flex flex-col items-end">
                            <span className="text-[14px] font-black text-foreground">
                              {user.xp} <span className="text-[10px] text-muted-foreground uppercase">XP</span>
                            </span>
                            <span className={cn("text-[10px] font-bold uppercase tracking-wide", getLevelColor(user.level))}>
                              Nível {user.level}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {/* Trilha de Títulos */}
        <section className="space-y-4 pt-8 border-t border-border">
          <div className="pl-1 mb-2">
            <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">Trilha de Títulos</h2>
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
                    "p-3 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[12px] transition-all bg-card relative overflow-hidden",
                    isCompleted && "opacity-40",
                    isCurrent && "ring-1 ring-primary/20 shadow-sm"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={cn(
                        "flex items-center justify-center h-12 w-12 rounded-full shrink-0 font-black text-[17px] relative",
                        isLocked && "bg-[#F2F2F7]",
                      )}
                      style={{
                        backgroundColor: (isCompleted || isCurrent) ? tier.color : undefined,
                        // Glow pulsante para títulos level 50+
                        boxShadow: isCurrent && tier.level >= 50
                          ? `0 0 0 3px ${tier.color}33, 0 0 18px ${tier.color}55`
                          : isCurrent
                          ? `0 0 0 3px ${tier.color}22, 0 0 10px ${tier.color}33`
                          : undefined,
                      }}
                    >
                      {isCompleted ? (
                        <RiCheckLine size={22} className="text-white" />
                      ) : isLocked ? (
                        <span className="text-[16px] font-black" style={{ color: `${tier.color}55` }}>{tier.level}</span>
                      ) : (
                        // Current — número branco dentro do círculo colorido
                        <span className="text-white text-[16px] font-black">{tier.level}</span>
                      )}
                      {/* Anel pulsante para títulos premium (level 50+) */}
                      {isCurrent && tier.level >= 50 && (
                        <span
                          className="absolute inset-0 rounded-full animate-pulse-gentle"
                          style={{ boxShadow: `0 0 0 4px ${tier.color}44` }}
                        />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-left">
                      <div className="flex items-center justify-between">
                        <span 
                          className={cn("text-[16px] font-bold", (isCurrent || isCompleted) ? "text-[#1A1A1A]" : "text-[#8E8E93]")}
                        >
                          {tier.title}
                        </span>
                        <span className={cn("text-[14px] font-extrabold", (isCurrent || isCompleted) ? "text-[#FF9500]" : "text-[#8E8E93]")}>
                          {isCompleted ? "Obtido" : `${tier.minXp} XP`}
                        </span>
                      </div>
                      <span className={cn("text-[11px] font-bold uppercase tracking-tight mt-0.5",
                        (isCurrent || isCompleted) ? "text-[#FF9500]" : "text-[#8E8E93]"
                      )}>
                        {isLocked ? `Requer Nível ${tier.level}` : isCompleted ? "Conquista Desbloqueada" : "Título Atual"}
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
              className="w-full h-12 text-muted-foreground font-bold text-[14px] active:bg-gray-100 rounded-[6px] mt-2"
            >
              {showAllMissions ? "Mostrar menos" : "Ver mais conquistas"}
            </Button>
          )}
        </section>
      </main>
    </div>
  )
}
