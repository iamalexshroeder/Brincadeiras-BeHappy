"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import Link from "next/link"

import { RiTrophyLine, RiLoader4Line, RiHeartFill, RiChat3Line, RiGroupLine } from "@remixicon/react"
import { getBrincadeirasRanking } from "@/lib/actions"
import { Card } from "@/components/ui/card"

export default function Ranking() {
  const [rankingData, setRankingData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Busca o ranking de brincadeiras mais curtidas
    getBrincadeirasRanking(50).then((data) => {
      setRankingData(data)
      setLoading(false)
    })
  }, [])

  const topThree = rankingData.slice(0, 3)
  const rest = rankingData.slice(3)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header title="Top Brincadeiras" showSearch={false} showUserCard={false} />

      <main className="page-main pb-32">

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
            {/* Activities Ranking Section */}
            <section className="mb-12">
              <h2 className="section-label pl-1 mb-6 text-center">As Mais Curtidas da Comunidade</h2>
              
              {/* Flexible Podium */}
              <div className="flex items-end justify-center gap-2 relative max-w-sm mx-auto mb-10 px-2 h-64">
                {/* Rank 2 (Left) */}
                {topThree[1] && (
                  <Link href={`/brincadeira/${topThree[1].id}`} className="flex flex-col items-center gap-3 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 hover:opacity-80 transition-opacity">
                    <div className="relative">
                       <div className="w-20 h-20 bg-slate-100 rounded-[12px] flex items-center justify-center border-2 border-slate-200">
                          <RiTrophyLine size={32} className="text-slate-400" />
                       </div>
                      <div className="absolute -top-2 -left-2 bg-slate-400 text-white text-[12px] font-bold h-7 w-7 rounded-full flex items-center justify-center border-2 border-white shadow-sm">2</div>
                    </div>
                    <div className="text-center w-full">
                      <span className="block text-[13px] font-bold text-foreground line-clamp-2 leading-tight mb-1">{topThree[1].title}</span>
                      <div className="flex items-center justify-center gap-1 text-[11px] font-extrabold text-slate-500">
                        <RiHeartFill size={12} className="text-[#EF4444]" />
                        {topThree[1].likesCount}
                      </div>
                    </div>
                  </Link>
                )}

                {/* Rank 1 (Center) */}
                {topThree[0] && (
                  <Link href={`/brincadeira/${topThree[0].id}`} className="flex flex-col items-center gap-3 flex-1 z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 hover:opacity-80 transition-opacity">
                    <div className="relative">
                       <div className="w-28 h-28 bg-yellow-50 rounded-[16px] flex items-center justify-center border-2 border-yellow-200 shadow-lg">
                          <RiTrophyLine size={48} className="text-yellow-500" />
                       </div>
                      <div className="absolute -top-3 -left-3 bg-yellow-400 text-white text-[14px] font-bold h-9 w-9 rounded-full flex items-center justify-center border-2 border-white shadow-sm">1</div>
                    </div>
                    <div className="text-center w-full">
                      <span className="block text-[15px] font-extrabold text-foreground line-clamp-2 leading-tight mb-1">{topThree[0].title}</span>
                      <div className="flex items-center justify-center gap-1 text-[12px] font-black text-yellow-600">
                        <RiHeartFill size={14} className="text-[#EF4444]" />
                        {topThree[0].likesCount} curtidas
                      </div>
                    </div>
                  </Link>
                )}

                {/* Rank 3 (Right) */}
                {topThree[2] && (
                  <Link href={`/brincadeira/${topThree[2].id}`} className="flex flex-col items-center gap-3 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 hover:opacity-80 transition-opacity">
                    <div className="relative">
                       <div className="w-20 h-20 bg-amber-50 rounded-[12px] flex items-center justify-center border-2 border-amber-200">
                          <RiTrophyLine size={32} className="text-amber-600" />
                       </div>
                      <div className="absolute -top-2 -left-2 bg-amber-600 text-white text-[12px] font-bold h-7 w-7 rounded-full flex items-center justify-center border-2 border-white shadow-sm">3</div>
                    </div>
                    <div className="text-center w-full">
                      <span className="block text-[13px] font-bold text-foreground line-clamp-2 leading-tight mb-1">{topThree[2].title}</span>
                      <div className="flex items-center justify-center gap-1 text-[11px] font-extrabold text-amber-700">
                        <RiHeartFill size={12} className="text-[#EF4444]" />
                        {topThree[2].likesCount}
                      </div>
                    </div>
                  </Link>
                )}
              </div>

              {/* Leaderboard List */}
              {rest.length > 0 && (
                <div className="space-y-3 mt-8">
                  {rest.map((game) => (
                    <Link key={game.id} href={`/brincadeira/${game.id}`} className="block">
                      <Card className="p-4 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.03)] rounded-[16px] bg-card transition-all hover:bg-gray-50 active:scale-[0.98]">
                        <div className="flex items-center gap-4">
                          <span className="text-[16px] font-black text-muted-foreground w-6 text-center">{game.rank}</span>
                          
                          <div className="flex-1 min-w-0">
                            <span className="block text-[15px] font-bold text-foreground truncate">{game.title}</span>
                            <div className="flex items-center gap-3 mt-1">
                               <div className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground uppercase tracking-tight">
                                  <RiGroupLine size={12} />
                                  {game.metadata?.participants || "Qualquer quant."}
                               </div>
                               <div className="flex items-center gap-1 text-[11px] font-bold text-muted-foreground uppercase tracking-tight">
                                  <RiChat3Line size={12} />
                                  {game.commentsCount || 0}
                               </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end shrink-0">
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full">
                                <RiHeartFill size={14} className="text-[#EF4444]" />
                                <span className="text-[14px] font-black text-[#EF4444]">
                                  {game.likesCount}
                                </span>
                            </div>
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
      </main>
    </div>
  )
}
