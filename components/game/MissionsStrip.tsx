"use client"

import { useState, useTransition } from "react"
import { claimMission } from "@/lib/mission-actions"
import { RiCheckLine, RiLoader4Line } from "@remixicon/react"
import { cn } from "@/lib/utils"

type Mission = {
  id: string
  title: string
  description: string
  goal: number
  xp: number
  emoji: string
  gradient: [string, string]
  progress: number
  completed: boolean
  claimed: boolean
}

import confetti from "canvas-confetti"

function MissionCard({ mission }: { mission: Mission }) {
  const [claimed, setClaimed] = useState(mission.claimed)
  const [isPending, startTransition] = useTransition()
  const pct = Math.min((mission.progress / mission.goal) * 100, 100)
  const isComplete = mission.completed

  const handleClaim = () => {
    startTransition(async () => {
      try {
        await claimMission(mission.id)
        setClaimed(true)
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF9500', '#FFCC00', '#FF3B30', mission.gradient[0], mission.gradient[1]]
        })
      } catch {}
    })
  }

  return (
    <div
      className={cn(
        "relative shrink-0 w-[176px] rounded-[16px] p-3.5 flex flex-col gap-2.5 overflow-hidden bg-white border transition-opacity duration-500",
        claimed ? "opacity-50" : "opacity-100"
      )}
      style={{ borderColor: `${mission.gradient[0]}40`, boxShadow: claimed ? 'none' : `0 2px 12px ${mission.gradient[0]}18` }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[16px]"
        style={{ background: `linear-gradient(90deg, ${mission.gradient[0]}, ${mission.gradient[1]})` }}
      />

      {/* XP badge */}
      <span
        className="self-start text-[10px] font-black px-2 py-0.5 rounded-full mt-0.5"
        style={{ backgroundColor: `${mission.gradient[0]}18`, color: mission.gradient[1] }}
      >
        +{mission.xp} XP
      </span>

      {/* Title + desc */}
      <div>
        <p className="text-[13px] font-black text-foreground leading-tight">{mission.title}</p>
        <p className="text-[11px] text-muted-foreground font-medium leading-tight mt-0.5">{mission.description}</p>
      </div>

      {/* Progress */}
      <div className="mt-auto">
        <div className="h-[5px] bg-[#F2F2F7] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${mission.gradient[0]}, ${mission.gradient[1]})`,
            }}
          />
        </div>
        <p className="text-[10px] font-bold text-muted-foreground mt-1">
          {mission.progress}/{mission.goal}{claimed ? " · Resgatado ✓" : ""}
        </p>
      </div>

      {/* Claim button */}
      {isComplete && !claimed && (
        <button
          onClick={handleClaim}
          disabled={isPending}
          className="w-full text-[11px] font-black py-1.5 rounded-[8px] transition-all active:scale-95 flex items-center justify-center gap-1 text-white"
          style={{ background: `linear-gradient(90deg, ${mission.gradient[0]}, ${mission.gradient[1]})` }}
        >
          {isPending ? <RiLoader4Line size={12} className="animate-spin" /> : <>
            <RiCheckLine size={12} /> Resgatar
          </>}
        </button>
      )}

      {claimed && (
        <div
          className="w-full text-[11px] font-black py-1.5 rounded-[8px] text-center flex items-center justify-center gap-1"
          style={{ backgroundColor: `${mission.gradient[0]}18`, color: mission.gradient[1] }}
        >
          <RiCheckLine size={12} /> Concluída
        </div>
      )}
    </div>
  )
}

export function MissionsStrip({ missions }: { missions: Mission[] }) {
  if (!missions.length) return null

  const completed = missions.filter(m => m.completed && !m.claimed).length
  const total = missions.length

  return (
    <section className="px-4 sm:px-6">
      <div className="flex items-baseline justify-between mb-3 pl-1">
        <h2 className="text-caption">Missões da Semana</h2>
        {completed > 0 && (
          <span className="text-[12px] font-black text-primary animate-pulse">
            {completed} para resgatar!
          </span>
        )}
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-none">
        {missions.map(m => (
          <div key={m.id} className="snap-start">
            <MissionCard mission={m} />
          </div>
        ))}
      </div>
    </section>
  )
}
