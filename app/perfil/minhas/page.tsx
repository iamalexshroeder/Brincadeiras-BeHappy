"use client"

import { Header } from "@/components/layout/Header"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { RiHistoryLine, RiArrowLeftSLine } from "@remixicon/react"
import { getContributions } from "@/lib/actions"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MinhasBrincadeirasPage() {
  const { data: session } = useSession()
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContributions().then(data => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <div className="sticky top-0 z-50 bg-[#F9F9F7]/95 backdrop-blur-md px-5 pt-14 pb-4 border-b border-[#F2F2F7]">
        <div className="flex items-center gap-4">
          <Link href="/perfil">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-white shadow-sm text-[#8E8E93]">
              <RiArrowLeftSLine size={24} />
            </Button>
          </Link>
          <h1 className="text-[20px] font-extrabold tracking-[-0.02em] text-[#1A1A1A]">
            Minhas Brincadeiras
          </h1>
        </div>
      </div>

      <main className="px-5 pb-32 pt-8">
        {loading ? (
          <div className="space-y-8 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-gray-200 rounded-[6px]" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <RiHistoryLine size={32} className="text-[#C7C7CC]" />
            </div>
            <p className="text-[17px] font-bold text-[#1A1A1A] mb-1">
              Você ainda não criou brincadeiras
            </p>
            <p className="text-[14px] text-[#8E8E93]">
              Suas contribuições aparecerão aqui após publicá-las.
            </p>
            <Link href="/criar" className="mt-6">
              <Button className="bg-[#FF9500] text-white font-bold h-11 px-8 rounded-[6px]">
                Criar Agora
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {items.map((game) => game && (
              <BrincadeiraCard
                key={game.id}
                id={game.id}
                title={game.title}
                description={game.description}
                creator={game.creator}
                metadata={game.metadata}
                tags={game.tags}
                likesCount={game.likesCount}
                usedCount={game.usedCount}
                comments={game.comments}
                initialLiked={game.userHasLiked}
                initialUsed={game.userHasUsed}
                currentUserId={session?.user?.id}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
