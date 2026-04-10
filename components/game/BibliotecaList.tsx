"use client"

import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiArrowRightSLine, RiCloseLine, RiDownload2Line,
  RiShareLine, RiTimeLine, RiGroupLine, RiUser3Line, RiArrowLeftSLine
} from "@remixicon/react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SYSTEM_COLLECTIONS, SystemGame, Collection } from "@/lib/data/biblioteca"


import { useRouter } from "next/navigation"
export function BibliotecaList() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = (searchParams.get("q") ?? "").toLowerCase()

  if (query) {
    // A busca agora é tratada na página pai (Explorar), 
    // mas se por algum motivo for renderizado, fica em branco.
    return null;
  }

  return (
    <>
      <div className="space-y-4">
        {SYSTEM_COLLECTIONS.map((col) => {
          const Icon = col.icon
          return (
            <div
              key={col.id}
              onClick={() => router.push(`/explorar?kit=${col.id}`)}
              className="bg-white rounded-[12px] border border-border p-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0 transition-transform group-active:scale-90"
                style={{ backgroundColor: col.bg }}
              >
                <Icon size={22} style={{ color: col.color }} />
              </div>

              <div className="flex-1 min-w-0">
                <span className="block text-[16px] font-extrabold text-foreground leading-tight">{col.label}</span>
                <span className="block text-[12px] text-muted-foreground font-medium mt-0.5">{col.games.length} brincadeiras</span>
              </div>

              <div className="flex items-center gap-0.5 shrink-0 opacity-40 group-active:opacity-100 transition-opacity">
                <RiArrowRightSLine size={22} className="text-muted-foreground" />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
