"use client"

import { Header } from "@/components/layout/Header"
import { LibraryList } from "@/components/game/LibraryList"
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Minhas Brincadeiras" showSearch={false} showBackButton={true} />

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
              <RiHistoryLine size={32} className="text-[#C7C7CC]" />
            </div>
            <p className="text-[17px] font-bold text-foreground mb-1">
              Você ainda não criou brincadeiras
            </p>
            <p className="text-[14px] text-muted-foreground">
              Suas contribuições aparecerão aqui após publicá-las.
            </p>
            <Link href="/criar" className="mt-6">
              <Button className="bg-[#FF9500] text-white font-bold h-11 px-8 rounded-[6px]">
                Criar Agora
              </Button>
            </Link>
          </div>
        ) : (
          <LibraryList items={items} currentUserId={session?.user?.id} />
        )}
      </main>
    </div>
  )
}
