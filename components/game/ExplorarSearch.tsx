"use client"

import { useState, useEffect, useRef, useTransition } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { RiSearchLine, RiLoader4Line, RiCloseLine } from "@remixicon/react"
import { getFeed } from "@/lib/actions"
import Link from "next/link"

export function ExplorarSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") ?? "")
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const [isPending, startTransition] = useTransition()
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!query.trim() || query.length < 1) {
      setSuggestions([])
      return
    }

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(async () => {
      startTransition(async () => {
        const { items } = await getFeed(6, undefined, undefined, undefined, query.trim())
        setSuggestions(items)
      })
    }, 200)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsFocused(false)
      router.push(`/explorar?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const handleClear = () => {
    setQuery("")
    setSuggestions([])
    router.push("/explorar")
    inputRef.current?.focus()
  }

  const showDropdown = isFocused && query.length > 0 && (suggestions.length > 0 || isPending)

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          {isPending ? (
            <RiLoader4Line
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary animate-spin"
            />
          ) : (
            <RiSearchLine
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C7C7CC]"
            />
          )}

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Encontre sua próxima brincadeira..."
            className="w-full pl-10 pr-10 h-10 bg-white border border-[#E5E5EA] rounded-[8px] text-[15px] placeholder:text-[#C7C7CC] focus:outline-none focus:ring-1 focus:ring-primary/20 font-medium transition-all"
          />

          {query.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C7C7CC] active:text-foreground transition-colors"
            >
              <RiCloseLine size={18} />
            </button>
          )}
        </div>
      </form>

      {/* Dropdown de sugestões */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E5E5EA] rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden z-50">
          {isPending && suggestions.length === 0 ? (
            <div className="flex items-center justify-center py-6">
              <RiLoader4Line size={20} className="text-primary animate-spin" />
            </div>
          ) : (
            <>
              {suggestions.map((game) => (
                <Link
                  key={game.id}
                  href={`/brincadeira/${game.id}`}
                  onClick={() => setIsFocused(false)}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-[#F9F9F7] active:bg-[#F2F2F7] transition-colors border-b border-[#F2F2F7] last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-bold text-foreground truncate">{game.title}</p>
                    <p className="text-[12px] text-muted-foreground truncate">{game.description}</p>
                  </div>
                  {game.tags?.slice(0, 2).map((tag: string) => (
                    <span
                      key={tag}
                      className="shrink-0 text-[10px] font-bold px-2 py-0.5 bg-[#F2F2F7] text-[#8E8E93] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </Link>
              ))}

              {/* Botão de ver todos os resultados */}
              <button
                onClick={handleSubmit as any}
                className="flex items-center justify-center gap-2 w-full py-3 text-[13px] font-bold text-primary bg-[#FFF7ED] hover:bg-[#FFF0D9] transition-colors"
              >
                <RiSearchLine size={15} />
                Ver todos os resultados para &quot;{query}&quot;
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
