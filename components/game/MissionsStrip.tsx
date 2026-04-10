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

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import confetti from "canvas-confetti"

function MissionCard({ mission }: { mission: Mission }) {
  const [claimed, setClaimed] = useState(mission.claimed)
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  
  const pct = Math.min((mission.progress / mission.goal) * 100, 100)
  const isComplete = mission.completed

  const handleClaim = (e?: React.MouseEvent) => {
    e?.stopPropagation()
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
    <>
      <div
        onClick={() => setOpen(true)}
        className={cn(
          "relative shrink-0 w-[176px] h-[134px] rounded-[16px] p-3.5 flex flex-col overflow-hidden bg-white border-2 transition-opacity duration-500 cursor-pointer active:scale-[0.98]",
          claimed ? "opacity-50" : "opacity-100"
        )}
        style={{ borderColor: mission.gradient[0], boxShadow: claimed ? 'none' : `0 2px 12px ${mission.gradient[0]}18` }}
      >
        {/* Title + XP + desc */}
        <div className="mb-2">
          <div className="flex items-start justify-between gap-1 mb-1">
            <p className="text-[13px] font-black text-foreground leading-tight line-clamp-2 pr-1">{mission.title}</p>
            <span
              className="shrink-0 self-start text-[9px] font-black px-1.5 py-0.5 rounded-full"
              style={{ backgroundColor: `${mission.gradient[0]}18`, color: mission.gradient[1] }}
            >
              +{mission.xp} XP
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground font-medium leading-tight line-clamp-2">{mission.description}</p>
        </div>

        {/* Progress */}
        <div className="mt-auto">
          <div className="h-[5px] bg-[#F2F2F7] rounded-full overflow-hidden mb-1.5">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${pct}%`,
                background: `linear-gradient(90deg, ${mission.gradient[0]}, ${mission.gradient[1]})`,
              }}
            />
          </div>
          
          {/* State Footer: text info OR claim button OR claimed text */}
          {!isComplete ? (
            <p className="text-[10px] font-bold text-muted-foreground w-full py-1 text-left">
              {mission.progress} / {mission.goal} realizados
            </p>
          ) : !claimed ? (
            <button
              onClick={handleClaim}
              disabled={isPending}
              className="w-full text-[11px] font-black py-1.5 rounded-[8px] transition-all active:scale-95 flex items-center justify-center gap-1 text-white relative z-10"
              style={{ background: `linear-gradient(90deg, ${mission.gradient[0]}, ${mission.gradient[1]})` }}
            >
              {isPending ? <RiLoader4Line size={12} className="animate-spin" /> : <>
                <RiCheckLine size={12} /> Resgatar
              </>}
            </button>
          ) : (
            <div
              className="w-full text-[11px] font-black py-1.5 rounded-[8px] text-center flex items-center justify-center gap-1"
              style={{ backgroundColor: `${mission.gradient[0]}18`, color: mission.gradient[1] }}
            >
              <RiCheckLine size={12} /> Concluída
            </div>
          )}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[340px] rounded-[24px] p-6 text-center shadow-xl">
          <DialogHeader className="items-center space-y-4">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-4xl shadow-sm border-4 border-white"
              style={{ background: `linear-gradient(135deg, ${mission.gradient[0]}40, ${mission.gradient[1]}40)` }}
            >
              {mission.emoji}
            </div>
            <div className="space-y-1 text-center">
              <DialogTitle className="text-xl font-extrabold text-foreground">{mission.title}</DialogTitle>
              <DialogDescription className="text-sm">
                Complete esta missão para ganhar XP e subir no ranking!
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="py-4 space-y-4 text-left">
            <div className="bg-[#F2F2F7] rounded-[16px] p-4">
              <p className="text-sm font-bold text-foreground mb-1">Como Funciona?</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Você precisa <strong>{mission.description.toLowerCase()}</strong> até o fim desta semana.
              </p>
            </div>
            
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-bold text-foreground">Recompensa</span>
              <span className="text-sm font-black px-3 py-1 rounded-full" style={{ backgroundColor: `${mission.gradient[0]}18`, color: mission.gradient[1] }}>
                +{mission.xp} XP
              </span>
            </div>
            
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-bold text-foreground">Progresso</span>
              <span className="text-sm font-bold text-muted-foreground">
                {mission.progress} de {mission.goal}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
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
