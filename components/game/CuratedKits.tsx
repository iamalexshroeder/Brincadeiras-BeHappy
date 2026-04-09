"use client"

import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { 
  RiCloudyLine, 
  RiDropFill, 
  RiTentLine, 
  RiHome4Line, 
  RiUserVoiceLine 
} from "@remixicon/react"

const KITS = [
  { id: "chuva", label: "Na Chuva", icon: RiCloudyLine, color: "text-[#007AFF]", bg: "bg-[#E5F1FF]", activeBg: "data-[state=on]:bg-[#007AFF]" },
  { id: "piscina", label: "Piscina", icon: RiDropFill, color: "text-[#34C759]", bg: "bg-[#E5F5EA]", activeBg: "data-[state=on]:bg-[#34C759]" },
  { id: "ferias", label: "Colônia Acamp", icon: RiTentLine, color: "text-[#FF9500]", bg: "bg-[#FFF4E5]", activeBg: "data-[state=on]:bg-[#FF9500]" },
  { id: "pequenos", label: "Locais Pequenos", icon: RiHome4Line, color: "text-[#AF52DE]", bg: "bg-[#F5E9FF]", activeBg: "data-[state=on]:bg-[#AF52DE]" },
  { id: "sem_material", label: "Zero Material", icon: RiUserVoiceLine, color: "text-[#FF3B30]", bg: "bg-[#FFEBEA]", activeBg: "data-[state=on]:bg-[#FF3B30]" },
]

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
    <div className="w-full overflow-x-auto no-scrollbar py-2 px-1 mb-2">
      <div className="flex items-center gap-3 w-max">
        {KITS.map((kit) => {
          const isActive = currentKit === kit.id
          
          return (
            <button
              key={kit.id}
              onClick={() => handleKitClick(kit.id)}
              className={cn(
                "flex items-center gap-2 px-4 h-10 rounded-[12px] font-bold text-[14px] transition-all active:scale-95 shadow-sm",
                isActive 
                  ? "bg-foreground text-background" 
                  : `bg-card text-foreground border border-border hover:bg-muted`
              )}
            >
              <div className={cn(
                "flex items-center justify-center rounded-full p-1",
                isActive ? "text-background" : kit.color
              )}>
                <kit.icon size={18} />
              </div>
              {kit.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
