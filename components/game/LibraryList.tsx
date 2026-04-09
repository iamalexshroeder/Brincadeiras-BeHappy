"use client"

import { useState } from "react"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { Button } from "@/components/ui/button"

interface LibraryItem {
  id: string
  title: string
  description: string
  creator: { name: string; level: number; avatar?: string }
  metadata: { ageRange: string; duration: string; participants: string }
  tags: string[]
  likesCount: number
  usedCount: number
  comments?: any[]
}

interface LibraryListProps {
  items: LibraryItem[]
  initialDisplay?: number
}

export function LibraryList({ items, initialDisplay = 10 }: LibraryListProps) {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? items : items.slice(0, initialDisplay)
  const remaining = items.length - initialDisplay

  return (
    <>
      <div className="grid gap-10">
        {displayed.map((item) => (
          <BrincadeiraCard key={item.id} {...item} />
        ))}
      </div>

      {items.length > initialDisplay && (
        <Button
          onClick={() => setShowAll(!showAll)}
          variant="ghost"
          className="w-full h-12 text-[#8E8E93] font-bold text-[14px] active:bg-gray-100 rounded-[6px] mt-6"
        >
          {showAll ? "Mostrar Menos" : `Ver Mais (${remaining} existentes)`}
        </Button>
      )}
    </>
  )
}
