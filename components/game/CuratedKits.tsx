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
  { id: "chuva",       label: "Na Chuva",       icon: RiCloudyLine,   color: "#8E8E93", bg: "#F2F2F7" },
  { id: "piscina",     label: "Piscina",         icon: RiDropFill,     color: "#007AFF", bg: "#E5F1FF" },
  { id: "ferias",      label: "Colônia Acamp",   icon: RiTentLine,     color: "#FF9500", bg: "#FFF4E5" },
  { id: "pequenos",    label: "Locais Pequenos", icon: RiHome4Line,    color: "#AF52DE", bg: "#F5E9FF" },
  { id: "sem_material",label: "Zero Material",   icon: RiUserVoiceLine,color: "#FF3B30", bg: "#FFEBEA" },
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
    <div className="w-full overflow-x-auto no-scrollbar py-1 px-0.5 mb-1">
      <div className="flex items-center gap-2.5 w-max">
        {KITS.map((kit) => {
          const isActive = currentKit === kit.id
          return (
            <button
              key={kit.id}
              onClick={() => handleKitClick(kit.id)}
              className={cn(
                "flex items-center gap-2 px-3.5 h-9 rounded-[10px] font-bold text-[13px] transition-all active:scale-95 border",
                isActive
                  ? "border-2 shadow-sm"
                  : "bg-white border-[#E5E5EA] text-[#1A1A1A] hover:bg-[#F9F9F7]"
              )}
              style={isActive ? {
                backgroundColor: kit.bg,
                borderColor: kit.color,
                color: kit.color,
              } : {}}
            >
              <kit.icon size={16} style={{ color: kit.color }} />
              {kit.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
