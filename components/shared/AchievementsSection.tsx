"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Achievement } from "@/lib/achievements"
import { RiCloseLine, RiLockLine } from "@remixicon/react"
import { cn } from "@/lib/utils"

interface AchievementsSectionProps {
  achievements: Achievement[]
  title?: string
  className?: string
}

type TabType = "Todas" | "Geral" | "Coleção BeHappy" | "Especial" | "Beta"

function AchievementModal({
  achievement,
  onClose,
}: {
  achievement: Achievement
  onClose: () => void
}) {
  const { title, description, icon, unlocked, progress, category } = achievement

  const categoryLabel: Record<string, string> = {
    "Geral": "Geral",
    "Coleção BeHappy": "Coleção BeHappy",
    "Especial": "Colônia de Férias 2026",
    "Beta": "Membro Beta",
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-sm bg-card border-t sm:border border-border/80 rounded-t-[28px] sm:rounded-[24px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:bg-muted active:scale-90 transition-all"
        >
          <RiCloseLine size={20} />
        </button>

<div
          className={cn(
            "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4",
            unlocked
              ? "bg-primary/10"
              : "bg-muted/60 grayscale opacity-60"
          )}
        >
          {icon}
        </div>

<span className="text-[11px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full">
          {categoryLabel[category] ?? category}
        </span>

<h3 className="text-[20px] font-black text-foreground mt-2 leading-tight">
          {title}
        </h3>

<p className="text-[14px] text-muted-foreground font-semibold leading-relaxed mt-1.5">
          {description}
        </p>

<div className="mt-4 flex items-center gap-2">
          {unlocked ? (
            <span className="flex items-center gap-1.5 text-[13px] font-extrabold text-green-600 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
              ✅ Desbloqueada
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[13px] font-extrabold text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full">
              <RiLockLine size={14} />
              {progress.current} / {progress.target}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function AchievementsSection({
  achievements,
  title = "Conquistas",
  className,
}: AchievementsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("Todas")
  const [selected, setSelected] = useState<Achievement | null>(null)
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  const filteredAchievements = achievements.filter((a) => {
    if (activeTab === "Todas") return true
    return a.category === activeTab
  })

  const tabs: { label: string; value: TabType }[] = [
    { label: "Todas", value: "Todas" },
    { label: "Gerais", value: "Geral" },
    { label: "BeHappy", value: "Coleção BeHappy" },
    { label: "Férias 2026", value: "Especial" },
    { label: "Beta 🧪", value: "Beta" },
  ]

  return (
    <>
      <section className={cn("space-y-4 px-5", className)}>
        
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">
            {title}
          </h2>
          <span className="text-[11px] font-extrabold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
            {unlockedCount} / {achievements.length} desbloqueadas
          </span>
        </div>

<div className="flex overflow-x-auto gap-1.5 no-scrollbar pb-1 pt-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                "px-3 py-1.5 rounded-full text-[12px] font-extrabold transition-all duration-200 whitespace-nowrap active:scale-95 shrink-0",
                activeTab === tab.value
                  ? "bg-primary text-white shadow-[0_4px_12px_rgba(255,149,0,0.25)]"
                  : "bg-card text-muted-foreground border border-border/80 hover:bg-gray-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

<div className="grid grid-cols-2 gap-3">
          {filteredAchievements.map((achievement) => {
            const { id, title, icon, unlocked } = achievement

            return (
              <button
                key={id}
                onClick={() => setSelected(achievement)}
                className="text-left active:scale-[0.97] transition-transform duration-150"
              >
                <Card
                  className={cn(
                    "p-4 border rounded-[16px] flex flex-col gap-3 transition-all duration-200",
                    unlocked
                      ? "border-primary/20 bg-gradient-to-br from-card to-primary/[0.03] shadow-[0_4px_12px_rgba(255,149,0,0.04)]"
                      : "border-border/60 bg-card/60 opacity-60 grayscale-[20%]"
                  )}
                >
                  
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-[26px] leading-none",
                        !unlocked && "grayscale opacity-60"
                      )}
                    >
                      {icon}
                    </span>
                    {!unlocked && (
                      <RiLockLine size={14} className="text-muted-foreground/50 shrink-0" />
                    )}
                  </div>

<h4 className="text-[13px] font-black text-foreground leading-snug">
                    {title}
                  </h4>
                </Card>
              </button>
            )
          })}
        </div>
      </section>

{selected && (
        <AchievementModal
          achievement={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
