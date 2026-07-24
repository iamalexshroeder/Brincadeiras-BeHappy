"use client"

import { useState, useEffect, useRef, useTransition } from "react"
import { RiSearchLine, RiLoader4Line, RiCloseLine, RiUserLine, RiGameLine } from "@remixicon/react"
import { getFeed, getSystemStats, searchRecreadores, toggleFollow } from "@/lib/actions"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { BibliotecaList } from "@/components/game/BibliotecaList"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"
import Link from "next/link"
import { RefreshButton } from "@/components/shared/RefreshButton"
import { formatSystemBrincadeira } from "@/lib/formatters"
import { RoleBadge } from "@/components/shared/RoleBadge"
import { UserAvatar } from "@/components/ui/UserAvatar"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

interface Props {
  initialFeed: any[]
  currentUserId?: string
  searchQuery?: string
}


export function ExplorarClient({ initialFeed, currentUserId, searchQuery = "" }: Props) {
  const [query, setQuery] = useState(searchQuery)
  const [activeTab, setActiveTab] = useState<"brincadeiras" | "monitores">("brincadeiras")
  const [results, setResults] = useState<any[]>([])
  const [recreadores, setRecreadores] = useState<any[]>([])
  const [isPending, startTransition] = useTransition()
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      startTransition(async () => {
        const queryText = query.trim()
        
        const { items: dbItems } = await getFeed(30, undefined, undefined, undefined, queryText)
        
        const normQuery = queryText.toLowerCase()
        const matchingSystemGames: any[] = []
        
        SYSTEM_COLLECTIONS.forEach((col) => {
          col.games.forEach((game) => {
            const matchesTitle = game.title.toLowerCase().includes(normQuery)
            
            if (matchesTitle) {
              if (!matchingSystemGames.some(g => g.id === game.id)) {
                matchingSystemGames.push({ game, kitLabel: col.label })
              }
            }
          })
        })
        
        let formattedSystemItems: any[] = []
        if (matchingSystemGames.length > 0) {
          const systemIds = matchingSystemGames.map(item => item.game.id)
          const stats = await getSystemStats(systemIds)
          formattedSystemItems = matchingSystemGames.map(item => 
            formatSystemBrincadeira(item.game, item.kitLabel, stats[item.game.id])
          )
        }
        
        setResults([...formattedSystemItems, ...dbItems])
      })
    }, 200)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  const isSearching = query.trim().length > 0


  return (
    <>
      <main className="page-main pb-32 pt-4">
        {isSearching ? (
          // BRINCADEIRAS TAB — SEARCHING
          <div>
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">
                {isPending ? "Buscando..." : `Resultados para "${query}"`}
              </h2>
              {!isPending && (
                <span className="text-[13px] font-bold text-[#8E8E93]">
                  {results.length} brincadeiras
                </span>
              )}
            </div>

            {!isPending && results.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                  <RiSearchLine size={32} className="text-[#C7C7CC]" />
                </div>
                <p className="text-[17px] font-bold text-muted-foreground mb-1">
                  Nenhuma brincadeira encontrada
                </p>
                <p className="text-[14px] text-muted-foreground max-w-[250px]">
                  Tente pesquisar usando outros termos, como &quot;bambolê&quot; ou &quot;musical&quot;.
                </p>
              </div>
            ) : (
              <div className="space-y-4 px-1 pb-4">
                {results.map((game) => game && (
                  <BrincadeiraCard
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    description={game.description}
                    creator={game.creator}
                    metadata={game.metadata}
                    tags={game.tags}
                    likesCount={game.likesCount}
                    initialLiked={game.userHasLiked}
                    initialSaved={game.userHasSaved}
                    currentUserId={currentUserId}
                    isSystemGame={game.id?.toString().startsWith('pdf-')}
                    steps={game.steps}
                    materials={game.materials}
                    publishedAt={game.publishedAt}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // BRINCADEIRAS TAB — DEFAULT (Kits + Feed)
          <>
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">Kits Sugeridos</h2>
              <span className="text-[13px] font-bold text-[#8E8E93]">{SYSTEM_COLLECTIONS.length} coleções</span>
            </div>
            <BibliotecaList />
            <RefreshButton />

            <div className="mt-8 flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">Galeria</h2>
            </div>
            <div className="space-y-4 px-1 pb-4">
              {initialFeed.map((game) => game && (
                <BrincadeiraCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  description={game.description}
                  creator={game.creator}
                  metadata={game.metadata}
                  tags={game.tags}
                  likesCount={game.likesCount}
                  initialLiked={game.userHasLiked}
                  initialSaved={game.userHasSaved}
                  currentUserId={currentUserId}
                  isSystemGame={game.id?.toString().startsWith('pdf-')}
                  steps={game.steps}
                  materials={game.materials}
                  publishedAt={game.publishedAt}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  )
}
