"use client"

import { useState, useEffect, useRef, useTransition } from "react"
import { RiSearchLine, RiLoader4Line, RiCloseLine, RiArrowRightSLine } from "@remixicon/react"
import { getFeed } from "@/lib/actions"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { BibliotecaList } from "@/components/game/BibliotecaList"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"
import Link from "next/link"

interface Props {
  initialFeed: any[]
  currentUserId?: string
}

export function ExplorarClient({ initialFeed, currentUserId }: Props) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
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
        const { items } = await getFeed(20, undefined, undefined, undefined, query.trim())
        setResults(items)
      })
    }, 200)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  const isSearching = query.trim().length > 0

  return (
    <>
      {/* Barra de busca - Unificadda com o Header e Sticky */}
      <div className="px-4 sm:px-6 py-3 bg-[#F9F9F7]/95 backdrop-blur-md sticky top-[80px] z-40 border-b border-[#E5E5EA]">
        <div className="bg-white p-[6px] rounded-[12px] border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="relative">
            {isPending ? (
              <RiLoader4Line size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary animate-spin pointer-events-none" />
            ) : (
              <RiSearchLine size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C7C7CC] pointer-events-none" />
            )}

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Encontre sua próxima brincadeira..."
              className="w-full pl-10 pr-10 h-10 bg-transparent border-none outline-none text-[15px] placeholder:text-[#C7C7CC] font-medium"
            />

            {query.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setResults([])
                  inputRef.current?.focus()
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[#C7C7CC] flex items-center justify-center active:opacity-70 transition-opacity"
              >
                <RiCloseLine size={14} className="text-white" />
            </button>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="page-main pb-32">
        {isSearching ? (
          /* Resultados ao vivo */
          <div>
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">
                {isPending ? "Buscando..." : `Resultados para "${query}"`}
              </h2>
              {!isPending && (
                <span className="text-[13px] font-bold text-[#8E8E93]">{results.length} encontradas</span>
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
                {results.map((game) => (
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
          /* Conteúdo padrão: Kits + Galeria */
          <>
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">Kits Sugeridos</h2>
              <span className="text-[13px] font-bold text-[#8E8E93]">{SYSTEM_COLLECTIONS.length} coleções</span>
            </div>
            <BibliotecaList />

            <div className="mt-8 flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">Galeria</h2>
            </div>
            <div className="space-y-4 px-1 pb-4">
              {initialFeed.map((game) => (
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
