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
                "flex items-center gap-2 px-3.5 h-9 rounded-[10px] font-bold text-[13px] transition-all active:scale-95 border whitespace-nowrap",
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
              <Icon size={16} style={{ color: kit.color }} />
              {kit.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
