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

function MissionCard({ mission }: { mission: Mission }) {
  const [claimed, setClaimed] = useState(mission.claimed)
  const [isPending, startTransition] = useTransition()
  const pct = Math.min((mission.progress / mission.goal) * 100, 100)

  const handleClaim = () => {
    startTransition(async () => {
      try {
        await claimMission(mission.id)
        setClaimed(true)
      } catch {}
    })
  }

  return (
    <div
      className="relative shrink-0 w-[200px] rounded-[20px] p-4 flex flex-col gap-3 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      style={{ background: `linear-gradient(135deg, ${mission.gradient[0]}, ${mission.gradient[1]})` }}
    >
      {/* Decorative circle */}
      <div
        className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-20"
        style={{ background: "white" }}
      />

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <span className="text-[28px] leading-none">{mission.emoji}</span>
        <span className="bg-white/25 text-white text-[11px] font-black px-2 py-0.5 rounded-full">
          +{mission.xp} XP
        </span>
      </div>

      {/* Title + desc */}
      <div className="relative z-10">
        <p className="text-white text-[14px] font-black leading-tight">{mission.title}</p>
        <p className="text-white/80 text-[11px] font-medium leading-tight mt-0.5">{mission.description}</p>
      </div>

      {/* Progress bar */}
      <div className="relative z-10">
        <div className="h-[6px] bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-white/80 text-[10px] font-bold mt-1">
          {mission.progress}/{mission.goal} {claimed ? "✓ Resgatado" : ""}
        </p>
      </div>

      {/* Claim button */}
      {mission.completed && !claimed && (
        <button
          onClick={handleClaim}
          disabled={isPending}
          className="relative z-10 bg-white text-[12px] font-black py-2 rounded-[10px] transition-all active:scale-95 flex items-center justify-center gap-1"
          style={{ color: mission.gradient[1] }}
        >
          {isPending ? (
            <RiLoader4Line size={14} className="animate-spin" />
          ) : (
            <>
              <RiCheckLine size={14} />
              Resgatar XP!
            </>
          )}
        </button>
      )}

      {claimed && (
        <div className="relative z-10 bg-white/20 text-white text-[12px] font-black py-2 rounded-[10px] text-center flex items-center justify-center gap-1">
          <RiCheckLine size={14} />
          Concluída!
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
