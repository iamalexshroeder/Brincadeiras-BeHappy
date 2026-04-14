"use client"

import { Header } from "@/components/layout/Header"
import { LibraryList } from "@/components/game/LibraryList"
import { RiHeartLine, RiArrowLeftSLine } from "@remixicon/react"
import { getFavorites } from "@/lib/actions"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const dynamic = "force-dynamic"

export default function FavoritasPage() {
  const { data: session } = useSession()
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFavorites().then(data => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Favoritas" showSearch={false} showBackButton={true} />

      <main className="px-5 pb-32 pt-8">
        {loading ? (
          <div className="space-y-8 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-gray-200 rounded-[6px]" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4 shadow-sm">
              <RiHeartLine size={32} className="text-[#C7C7CC]" />
            </div>
            <p className="text-[17px] font-bold text-foreground mb-1">
              Nenhuma favoritada ainda
            </p>
            <p className="text-[14px] text-muted-foreground">
              As brincadeiras que você curtir aparecerão aqui.
            </p>
          </div>
        ) : (
          <LibraryList items={items} currentUserId={session?.user?.id} />
        )}
      </main>
    </div>
  )
}
