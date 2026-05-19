"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Achievement } from "@/lib/achievements"
import { RiLockLine } from "@remixicon/react"
import { cn } from "@/lib/utils"

interface AchievementsSectionProps {
  achievements: Achievement[]
  title?: string
  className?: string
}

type TabType = "Todas" | "Geral" | "Coleção BeHappy" | "Especial" | "Beta"

export function AchievementsSection({ achievements, title = "Conquistas", className }: AchievementsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("Todas")
  const unlockedCount = achievements.filter(a => a.unlocked).length

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
    <section className={cn("space-y-4 px-5", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">
          {title}
        </h2>
        <span className="text-[11px] font-extrabold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
          {unlockedCount} / {achievements.length} desbloqueadas
        </span>
      </div>

      {/* Tabs list with premium pill styling */}
      <div className="flex overflow-x-auto gap-1.5 no-scrollbar pb-2 pt-1">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "px-3 py-1.5 rounded-full text-[12px] font-extrabold transition-all duration-200 whitespace-nowrap active:scale-95",
              activeTab === tab.value
                ? "bg-primary text-white shadow-[0_4px_12px_rgba(255,149,0,0.25)]"
                : "bg-card text-muted-foreground border border-border/80 hover:bg-gray-50"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of badges */}
      <div className="grid grid-cols-2 gap-3 transition-all duration-300">
        {filteredAchievements.map((achievement) => {
          const { id, title, description, icon, unlocked, progress } = achievement
          
          return (
            <Card 
              key={id}
              className={cn(
                "p-4 border transition-all duration-300 rounded-[16px] flex flex-col justify-between h-[125px]",
                unlocked 
                  ? "border-primary/20 bg-gradient-to-br from-card to-primary/[0.03] shadow-[0_4px_12px_rgba(255,149,0,0.04)]" 
                  : "border-border/60 bg-card/60 opacity-65 grayscale-[30%]"
              )}
            >
              <div className="flex items-start justify-between">
                <span className={cn("text-2xl", !unlocked && "grayscale opacity-75")}>
                  {icon}
                </span>
                {!unlocked && (
                  <RiLockLine size={14} className="text-muted-foreground/60" />
                )}
              </div>

              <div className="space-y-1 mt-1">
                <h4 className="text-[13px] font-black text-foreground leading-tight truncate">
                  {title}
                </h4>
                <p className="text-[10px] text-muted-foreground font-semibold leading-tight line-clamp-2 min-h-[20px]">
                  {description}
                </p>
                
                {/* Progress bar */}
                <div className="pt-0.5 space-y-0.5">
                  <div className="w-full h-1 bg-muted/70 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full transition-all duration-500",
                        unlocked ? "bg-primary" : "bg-muted-foreground/30"
                      )}
                      style={{ width: `${(progress.current / progress.target) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-extrabold text-muted-foreground">
                    <span>Progresso</span>
                    <span>{progress.current}/{progress.target}</span>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
