"use client"

import { Card } from "@/components/ui/card"
import { Achievement } from "@/lib/achievements"
import { RiLockLine } from "@remixicon/react"

import { cn } from "@/lib/utils"

interface AchievementsSectionProps {
  achievements: Achievement[]
  title?: string
  className?: string
}

export function AchievementsSection({ achievements, title = "Conquistas", className }: AchievementsSectionProps) {
  const unlockedCount = achievements.filter(a => a.unlocked).length

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

      <div className="grid grid-cols-2 gap-3">
        {achievements.map((achievement) => {
          const { id, title, description, icon, unlocked, progress } = achievement
          
          return (
            <Card 
              key={id}
              className={`p-4 border transition-all rounded-[16px] flex flex-col justify-between h-[120px] ${
                unlocked 
                  ? "border-primary/20 bg-gradient-to-br from-card to-primary/[0.02] shadow-[0_4px_12px_rgba(255,149,0,0.04)]" 
                  : "border-border/60 bg-card/60 opacity-65"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className={`text-2xl ${!unlocked && "grayscale"}`}>
                  {icon}
                </span>
                {!unlocked && (
                  <RiLockLine size={14} className="text-muted-foreground/60" />
                )}
              </div>

              <div className="space-y-1 mt-2">
                <h4 className="text-[13px] font-black text-foreground leading-tight truncate">
                  {title}
                </h4>
                <p className="text-[10px] text-muted-foreground font-medium leading-tight line-clamp-2">
                  {description}
                </p>
                
                {/* Progress bar */}
                <div className="pt-1">
                  <div className="w-full h-1 bg-muted/60 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${unlocked ? "bg-primary" : "bg-muted-foreground/30"}`}
                      style={{ width: `${(progress.current / progress.target) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold text-muted-foreground mt-0.5">
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
