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

function RecreadorSearchCard({ r, currentUserId }: { r: any; currentUserId?: string }) {
  const [following, setFollowing] = useState(r.userIsFollowing)
  const [isPending, startTransition] = useTransition()

  const handleFollowToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    startTransition(async () => {
      try {
        await toggleFollow(r.id)
        setFollowing(!following)
        toast.success(following ? `Deixou de seguir ${r.name}` : `Seguindo ${r.name}`)
      } catch (err: any) {
        toast.error(err.message || "Erro ao atualizar seguidor")
      }
    })
  }

  return (
      <div className="flex items-center justify-between gap-3 p-3 rounded-[12px] bg-card border border-border shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:bg-gray-50 active:scale-[0.99] transition-all overflow-hidden">
        <Link href={`/recreador/${r.id}`} className="flex items-center gap-3 min-w-0 flex-1">
          <UserAvatar
            src={r.avatar}
            name={r.name}
            className="h-11 w-11 border border-border/50 shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[15px] font-extrabold text-foreground leading-tight truncate">
                {r.name}
              </span>
              <RoleBadge role={r.role} className="shrink-0" />
            </div>
            <span className="text-[12px] font-medium text-muted-foreground truncate">
              {r.created_at ? `Entrou ${new Date(r.created_at).toLocaleDateString('pt-BR')}` : ""}
            </span>
          </div>
        </Link>
        
        {currentUserId && currentUserId !== r.id && (
          <button 
            onClick={handleFollowToggle}
            disabled={isPending}
            className={`px-4 py-1.5 rounded-full text-[12px] font-extrabold transition-all shrink-0 active:scale-95 min-w-[80px] text-center ${
              following
                ? "border border-border text-muted-foreground bg-card hover:bg-gray-50"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            {isPending ? (
              <RiLoader4Line size={14} className="animate-spin mx-auto" />
            ) : following ? (
              "Seguindo"
            ) : (
              "Seguir"
            )}
          </button>
        )}
      </div>
  )
}

export function ExplorarClient({ initialFeed, currentUserId, searchQuery = "" }: Props) {
  const [query, setQuery] = useState(searchQuery)
  const [activeTab, setActiveTab] = useState<"brincadeiras" | "monitores">("brincadeiras")
  const [results, setResults] = useState<any[]>([])
  const [recreadores, setRecreadores] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isPending, startTransition] = useTransition()
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      if (activeTab === "brincadeiras") {
        setRecreadores([])
      } else {
        // If on monitores tab and query is cleared, reload all monitors
        startTransition(async () => {
          setPage(0)
          const foundRecreadores = await searchRecreadores("", 0, 20)
          setRecreadores(foundRecreadores)
          setHasMore(foundRecreadores.length === 20)
        })
      }
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

        setPage(0)
        const foundRecreadores = await searchRecreadores(queryText, 0, 20)
        setRecreadores(foundRecreadores)
        setHasMore(foundRecreadores.length === 20)
      })
    }, 200)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  const isSearching = query.trim().length > 0

  // Load all monitors when tab switches to "monitores" with no query
  useEffect(() => {
    if (activeTab === "monitores" && !isSearching) {
      startTransition(async () => {
        setPage(0)
        const foundRecreadores = await searchRecreadores("", 0, 20)
        setRecreadores(foundRecreadores)
        setHasMore(foundRecreadores.length === 20)
      })
    }
    if (activeTab === "brincadeiras") {
      setRecreadores([])
    }
  }, [activeTab])

  const handleLoadMore = async () => {
    if (isLoadingMore || !hasMore) return
    setIsLoadingMore(true)
    try {
      const nextPage = page + 1
      const queryText = query.trim()
      const moreRecreadores = await searchRecreadores(queryText, nextPage * 20, 20)
      if (moreRecreadores.length > 0) {
        setRecreadores(prev => [...prev, ...moreRecreadores])
        setPage(nextPage)
      }
      if (moreRecreadores.length < 20) {
        setHasMore(false)
      }
    } finally {
      setIsLoadingMore(false)
    }
  }

  return (
    <>
      
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
              placeholder="Pesquise brincadeiras ou recreadores..."
              className="w-full pl-10 pr-10 h-10 bg-transparent border-none outline-none text-[15px] placeholder:text-[#C7C7CC] font-medium"
            />

            {query.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setResults([])
                  setRecreadores([])
                  inputRef.current?.focus()
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[#C7C7CC] flex items-center justify-center active:opacity-70 transition-opacity"
              >
                <RiCloseLine size={14} className="text-white" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-3 flex bg-[#F2F2F7] p-1 rounded-[10px] w-full relative">
            <button
              onClick={() => setActiveTab("brincadeiras")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-[8px] text-[13px] font-extrabold transition-all ${
                activeTab === "brincadeiras"
                  ? "bg-white text-foreground shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <RiGameLine size={16} />
              Brincadeiras
            </button>
            <button
              onClick={() => setActiveTab("monitores")}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-[8px] text-[13px] font-extrabold transition-all ${
                activeTab === "monitores"
                  ? "bg-white text-foreground shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <RiUserLine size={16} />
              Monitores
            </button>
          </div>
      </div>

<main className="page-main pb-32">
        {activeTab === "monitores" ? (
          // MONITORES TAB
          <div>
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">
                {isPending ? "Carregando..." : isSearching ? `Resultados para "${query}"` : "Todos os Monitores"}
              </h2>
              {!isPending && (
                <span className="text-[13px] font-bold text-[#8E8E93]">
                  {recreadores.length} {recreadores.length === 1 ? "monitor" : "monitores"}
                </span>
              )}
            </div>

            {isPending ? (
              <div className="flex items-center justify-center py-20">
                <RiLoader4Line size={32} className="animate-spin text-primary" />
              </div>
            ) : recreadores.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                  <RiUserLine size={32} className="text-[#C7C7CC]" />
                </div>
                <p className="text-[17px] font-bold text-muted-foreground mb-1">
                  {isSearching ? "Nenhum monitor encontrado" : "Nenhum monitor ainda"}
                </p>
                <p className="text-[14px] text-muted-foreground max-w-[250px]">
                  {isSearching ? "Tente outros termos de busca." : "Os monitores do app aparecerão aqui."}
                </p>
              </div>
            ) : (
              <div className="grid gap-3 pb-4">
                {recreadores.map((r) => (
                  <RecreadorSearchCard
                    key={r.id}
                    r={r}
                    currentUserId={currentUserId}
                  />
                ))}
                
                {hasMore && (
                  <div className="pt-4 pb-8 flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="px-6 py-2.5 rounded-full bg-white border border-border text-[14px] font-bold text-foreground shadow-sm active:scale-95 transition-all flex items-center justify-center min-w-[140px] hover:bg-gray-50 disabled:opacity-70 disabled:active:scale-100"
                    >
                      {isLoadingMore ? (
                        <RiLoader4Line size={20} className="animate-spin text-primary" />
                      ) : (
                        "Mostrar mais"
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : isSearching ? (
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
