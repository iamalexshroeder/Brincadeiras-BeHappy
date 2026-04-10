"use client"

import { Header } from "@/components/layout/Header"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { RiBookmarkLine } from "@remixicon/react"
import { getSavedBrincadeiras } from "@/lib/actions"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

export default function SalvasPage() {
  const { data: session } = useSession()
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSavedBrincadeiras().then(data => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Salvas" showSearch={false} showBackButton={true} />

      <main className="px-5 pb-32 pt-8">
        {loading ? (
          <div className="space-y-8 animate-pulse">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-gray-200 rounded-[6px]" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-4 shadow-sm border border-border">
              <RiBookmarkLine size={32} className="text-[#C7C7CC]" />
            </div>
            <p className="text-[17px] font-bold text-foreground mb-1">
              Nenhuma brincadeira salva
            </p>
            <p className="text-[14px] text-muted-foreground">
              Toque no ícone do marcador nas brincadeiras para guardá-las aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
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
                initialSaved={game.userHasSaved}
                currentUserId={session?.user?.id}
                publishedAt={game.publishedAt}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
