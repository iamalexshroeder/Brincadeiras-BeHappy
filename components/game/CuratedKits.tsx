"use client"

import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"

export function CuratedKits() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentKit = searchParams.get("kit")

  const handleKitClick = (id: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (currentKit === id) {
      params.delete("kit")
    } else {
      params.set("kit", id)
    }
    router.push(`/explorar?${params.toString()}`)
  }

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 -my-2 px-0.5 mb-1">
      <div className="flex items-center gap-2.5 w-max">
        {SYSTEM_COLLECTIONS.map((kit) => {
          const isActive = currentKit === kit.id
          const Icon = kit.icon
          return (
            <button
              key={kit.id}
              onClick={() => handleKitClick(kit.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-[16px] font-bold transition-all active:scale-95 border bg-white",
                isActive
                  ? "border-2 shadow-sm"
                  : "border-[#E5E5EA] text-[#1A1A1A] hover:bg-[#F9F9F7]"
              )}
              style={isActive ? {
                borderColor: kit.color,
                backgroundColor: kit.bg,
                color: kit.color,
              } : {}}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: isActive ? 'white' : kit.bg }}
              >
                <Icon size={20} style={{ color: kit.color }} />
              </div>
              <div className="flex flex-col items-start pr-2">
                <span className="text-[14px] leading-tight">{kit.label}</span>
                <span className={cn(
                  "text-[11px] font-medium mt-0.5",
                  isActive ? "opacity-90" : "text-[#8E8E93]"
                )}>
                  {kit.games.length} brincadeiras
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
