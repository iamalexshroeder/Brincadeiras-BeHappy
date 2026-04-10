"use client"

import { Header } from "@/components/layout/Header"
import { RiArrowLeftSLine, RiCheckLine, RiLockLine, RiStarFill } from "@remixicon/react"
import { getProfile, updateActiveTitle } from "@/lib/actions"
import { useEffect, useState, useTransition } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GAMIFICATION_TIERS, EXCLUSIVE_TITLES } from "@/utils/gamification"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function TitulosPage() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile().then(data => {
      setProfile(data)
      setLoading(false)
    })
  }, [])

  const handleSelectTitle = (title: string | null) => {
    startTransition(async () => {
      await updateActiveTitle(title)
      setProfile({ ...profile, active_title: title })
    })
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <div className="p-8 animate-pulse space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded" />
          <div className="h-24 w-full bg-gray-100 rounded-2xl" />
          <div className="h-64 w-full bg-gray-50 rounded-2xl" />
        </div>
      </div>
    )
  }

  const userLevel = profile?.level || 1
  const activeTitle = profile?.active_title
  const isJadhe = profile?.name?.toLowerCase().includes("jadhe")

  return (
    <div className="flex flex-col flex-1 bg-background">
      <Header title="Meus Títulos" showSearch={false} showBackButton={true} />

      <main className="px-5 py-6 space-y-8 pb-32">
        {/* Banner Atual */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-border/50 text-center space-y-2">
          <p className="text-[12px] font-bold text-muted-foreground uppercase tracking-wider">Título Ativo</p>
          <p className="text-[22px] font-extrabold text-primary">
            {activeTitle || "Padrão do Nível"}
          </p>
          {!activeTitle && (
             <p className="text-[14px] text-muted-foreground font-medium italic">
               "{GAMIFICATION_TIERS.find(t => userLevel >= t.level)?.title || "Observador Curioso"}"
             </p>
          )}
        </div>

        {/* Títulos Especiais (Se elegível) */}
        {isJadhe && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <RiStarFill className="text-amber-500" size={18} />
              <h2 className="text-[16px] font-extrabold text-foreground uppercase tracking-tight">Exclusivos BeHappy</h2>
            </div>
            <div className="space-y-3">
              {EXCLUSIVE_TITLES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleSelectTitle(t.title)}
                  disabled={isPending}
                  className={cn(
                    "w-full p-4 rounded-[20px] border-2 transition-all flex items-center justify-between text-left",
                    activeTitle === t.title 
                      ? "bg-white border-primary shadow-md" 
                      : "bg-white/50 border-transparent hover:border-gray-300"
                  )}
                >
                  <div className="flex-1">
                    <p className="text-[17px] font-bold" style={{ color: t.color }}>{t.title}</p>
                    <p className="text-[13px] text-muted-foreground font-medium line-clamp-1">{t.description}</p>
                  </div>
                  {activeTitle === t.title && (
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <RiCheckLine className="text-white" size={16} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Lista de Títulos por Nível */}
        <div className="space-y-4">
          <h2 className="text-[16px] font-extrabold text-foreground uppercase tracking-tight px-1 text-muted-foreground/80">
            Jornada do Recreador
          </h2>
          <div className="space-y-3">
            {/* Botão para resetar para o padrão */}
            {activeTitle && (
              <button
                onClick={() => handleSelectTitle(null)}
                className="w-full p-4 rounded-[20px] border-2 bg-white/30 border-dashed border-gray-300 transition-all flex items-center justify-center text-muted-foreground hover:bg-white/50"
              >
                <span className="text-[15px] font-bold">Usar Título do Nível (Padrão)</span>
              </button>
            )}

            {[...GAMIFICATION_TIERS].reverse().map((tier) => {
              const isUnlocked = userLevel >= tier.level
              const isSelected = !activeTitle && isUnlocked && GAMIFICATION_TIERS.find(t => userLevel >= t.level)?.title === tier.title
                                 || activeTitle === tier.title

              return (
                <button
                  key={tier.level}
                  disabled={!isUnlocked || isPending}
                  onClick={() => handleSelectTitle(tier.title)}
                  className={cn(
                    "w-full p-4 rounded-[20px] border-2 transition-all flex items-center justify-between text-left",
                    isSelected ? "bg-white border-primary shadow-md" : "bg-white border-transparent",
                    !isUnlocked && "opacity-60 bg-gray-100"
                  )}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                       <p className={cn("text-[17px] font-bold", isUnlocked ? "text-foreground" : "text-gray-400")}>
                         {tier.title}
                       </p>
                       {!isUnlocked && <RiLockLine size={14} className="text-gray-400" />}
                    </div>
                    <p className="text-[12px] text-muted-foreground font-bold uppercase tracking-tight">
                      Liberado no Nível {tier.level}
                    </p>
                  </div>
                  {isSelected && isUnlocked && (
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                      <RiCheckLine className="text-white" size={16} />
                    </div>
                  )}
                  {!isUnlocked && (
                     <div className="px-3 py-1 bg-gray-200 rounded-full">
                       <span className="text-[11px] font-extrabold text-gray-500 uppercase">Bloqueado</span>
                     </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
