"use client"

import { useState, useEffect, useTransition } from "react"
import { Header } from "@/components/layout/Header"
import Link from "next/link"

import { UserAvatar } from "@/components/ui/UserAvatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { RiTrophyLine, RiLoader4Line, RiCheckLine, RiStarFill, RiLockLine } from "@remixicon/react"
import { getTitleForLevel, GAMIFICATION_TIERS } from "@/utils/gamification"
import { getRanking, getProfile, updateActiveTitle } from "@/lib/actions"
import { Sheet, SheetContent } from "@/components/ui/sheet"

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
  const [currentUser, setCurrentUser] = useState<{ id: string, xp: number, activeTitle?: string | null } | null>(null)
  const [selectedTitleInfo, setSelectedTitleInfo] = useState<any>(null)
  const [isPending, startTransition] = useTransition() // Adicionado para a ação de equipar

  useEffect(() => {
    // Busca o ranking global
    getRanking(50).then((data) => {
      setRankingData(data as RankingUser[])
      setLoading(false)
    })
    
    // Busca o perfil do usuário atual para a trilha de títulos
    getProfile().then(profile => {
      if (profile) setCurrentUser({ id: profile.id, xp: profile.xp, activeTitle: profile.active_title })
    })
  }, [])

  const userXp = currentUser?.xp ?? 0
  const activeTitle = currentUser?.activeTitle

  // Encontrar o título que seria o padrão para o nível atual
  let levelTitle = GAMIFICATION_TIERS[0].title
  for (const tier of GAMIFICATION_TIERS) {
    if (userXp >= tier.minXp) levelTitle = tier.title
    else break
  }

  const currentActiveTitle = activeTitle || levelTitle

  const tiersWithStatus = GAMIFICATION_TIERS.map((tier, index) => {
    const isCompleted = userXp >= tier.minXp
    const isEquipped = tier.title === currentActiveTitle
    const isTarget = !isCompleted && (index === 0 || userXp >= (GAMIFICATION_TIERS[index - 1]?.minXp || 0))
    
    let status = "locked"
    if (isEquipped) status = "equipped"
    else if (isCompleted) status = "completed"
    else if (isTarget) status = "target"
    
    return { ...tier, status }
  })
  const displayedTiers = showAllMissions ? tiersWithStatus : tiersWithStatus.slice(0, 10)

  const topThree = rankingData.slice(0, 3)
  const rest = rankingData.slice(3)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Ranking" showSearch={false} showUserCard={false} />

      <main className="page-main">

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
              <h2 className="section-label pl-1 mb-6">Top Recreadores</h2>
              
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
                      <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-tight leading-none mb-1">{topThree[1].title}</span>
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
                      <span className="block text-[11px] font-bold text-yellow-700 uppercase tracking-tight leading-none mb-1">{topThree[0].title}</span>
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
                      <span className="block text-[10px] font-bold text-amber-800/60 uppercase tracking-tight leading-none mb-1">{topThree[2].title}</span>
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
                            <span className="block text-[11px] font-bold uppercase tracking-tight text-muted-foreground">{user.title}</span>
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
            <h2 className="section-label">Trilha de Títulos</h2>
            <span className="text-[12px] font-bold text-primary mt-1 block">Nível Máximo: 100</span>
          </div>

          <div className="space-y-2">
            {displayedTiers.map((tier) => {
              const isEquipped = tier.status === "equipped"
              const isCompleted = tier.status === "completed" || isEquipped
              const isTarget = tier.status === "target"
              const isLocked = tier.status === "locked"

              return (
                <div 
                  key={tier.level}
                  className={cn(
                    "flex flex-col p-4 rounded-[20px] transition-all border-2",
                    isEquipped ? "bg-white border-[#C7C7CC]" : 
                    isCompleted ? "bg-white border-[#34C759]" : "bg-[#F9F9F7] border-transparent opacity-50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {/* Círculo esquerdo */}
                    {isEquipped ? (
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: tier.color || '#FF9500' }}
                      >
                        <span className="text-[17px] font-black text-white">{tier.level}</span>
                      </div>
                    ) : isCompleted ? (
                      <div className="w-12 h-12 rounded-full bg-[#34C759] flex items-center justify-center shrink-0">
                        <RiCheckLine className="text-white" size={24} />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-[#E5E5EA] flex items-center justify-center shrink-0">
                        <RiLockLine size={20} className="text-[#C7C7CC]" />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className={cn("text-[15px] font-black truncate", isEquipped || isCompleted ? "text-foreground" : "text-[#8E8E93]")}>
                          {tier.title}
                        </h4>
                        {isEquipped && (
                          <span className="bg-[#F2F2F7] text-[#8E8E93] text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">ATIVO</span>
                        )}
                      </div>
                      <span className={cn("text-[11px] font-extrabold uppercase tracking-tight mt-0.5 block",
                        isEquipped ? "text-muted-foreground" : isCompleted ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {isEquipped ? "Título em Uso" : isCompleted ? "Conquista Desbloqueada" : isTarget ? "Próximo Objetivo" : `Requer Nível ${tier.level}`}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedTitleInfo({ ...tier, isUnlocked: isCompleted, type: 'RANK' })}
                      className="h-9 px-4 rounded-full bg-white border border-border text-[12px] font-extrabold"
                    >
                      Detalhes
                    </Button>
                  </div>
                </div>
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

      {/* Modal de Detalhes da Conquista */}
      <Sheet open={!!selectedTitleInfo} onOpenChange={(open) => !open && setSelectedTitleInfo(null)}>
        <SheetContent 
          side="bottom"
          showCloseButton={false}
          className="!max-h-[90dvh] !w-full !inset-x-0 !bottom-0 !rounded-t-[24px] !rounded-b-none p-0 flex flex-col border-0 border-t border-border bg-background overflow-hidden outline-none shadow-2xl transition-all duration-300 ease-in-out"
        >
          <div className="flex flex-col p-8 items-center text-center space-y-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
              style={{ backgroundColor: selectedTitleInfo?.color || '#FF9500' }}
            >
              <RiStarFill className="text-white" size={40} />
            </div>

            <div className="space-y-2">
              <h2 className="text-[24px] font-black text-foreground tracking-tight">
                {selectedTitleInfo?.title}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="px-3 py-1 bg-muted rounded-full text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
                  Nível {selectedTitleInfo?.level}
                </span>
                {!selectedTitleInfo?.isUnlocked && (
                  <span className="px-3 py-1 bg-red-50 text-red-500 rounded-full text-[12px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <RiLockLine size={12} /> Bloqueado
                  </span>
                )}
              </div>
            </div>

            <p className="text-[16px] font-medium text-muted-foreground leading-relaxed max-w-xs">
              {selectedTitleInfo?.description}
            </p>

            <div className="w-full pt-4 space-y-3">
              {selectedTitleInfo?.isUnlocked ? (
                <Button 
                  onClick={() => {
                    startTransition(async () => {
                      await updateActiveTitle(selectedTitleInfo.title)
                      setCurrentUser(prev => prev ? { ...prev, activeTitle: selectedTitleInfo.title } : null)
                      setSelectedTitleInfo(null)
                    })
                  }}
                  disabled={isPending || currentUser?.activeTitle === selectedTitleInfo.title}
                  className="w-full h-12 bg-primary text-white font-bold rounded-[12px] active:scale-95 transition-all"
                >
                  {isPending ? "Equipando..." : currentUser?.activeTitle === selectedTitleInfo.title ? "Já em uso" : "Equipar este Título"}
                </Button>
              ) : (
                <Button 
                  disabled 
                  className="w-full h-12 bg-muted text-muted-foreground font-bold rounded-[12px] opacity-50"
                >
                  Alcance o Nível {selectedTitleInfo?.level} para liberar
                </Button>
              )}
              <button 
                onClick={() => setSelectedTitleInfo(null)}
                className="w-full py-2 text-[14px] font-bold text-muted-foreground active:opacity-50"
              >
                Voltar
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
