import { Header } from "@/components/layout/Header"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { CategoryFilters } from "@/components/game/CategoryFilters"
import { CuratedKits } from "@/components/game/CuratedKits"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RiAddLine, RiFileList3Line } from "@remixicon/react"
import { getFeed } from "@/lib/actions"
import { auth } from "@/auth"
import { cn } from "@/lib/utils"

// Example entries for code reference (not rendered in production)
// const EXAMPLE_GAMES = [
//   { title: "Pega-Pega Congelado", creator: { name: "Tio Pipoca", level: 8 }, ... },
// ]

export const dynamic = "force-dynamic"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; kit?: string; view?: string }>
}) {
  const { category, kit, view = "global" } = await searchParams
  const isFollowingView = view === "seguindo"
  const { items: feed } = await getFeed(20, undefined, category, kit, undefined, isFollowingView)
  const session = await auth()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header showSearch={false} showUserCard={true} />

      <main className="pb-48 pt-2 space-y-8 overflow-visible">
        {/* Feed Tabs Selector */}
        <div className="px-5">
           <div className="flex bg-[#F2F2F7] p-1 rounded-[12px] w-full">
              <Link 
                href="/?view=global"
                className={cn(
                  "flex-1 py-3 rounded-[10px] text-[13px] font-bold transition-all text-center",
                  !isFollowingView ? "bg-white text-foreground shadow-sm" : "text-[#8E8E93]"
                )}
              >
                Explorar
              </Link>
              <Link 
                href="/?view=seguindo"
                className={cn(
                  "flex-1 py-3 rounded-[10px] text-[13px] font-bold transition-all text-center",
                  isFollowingView ? "bg-white text-foreground shadow-sm" : "text-[#8E8E93]"
                )}
              >
                Seguindo
              </Link>
           </div>
        </div>

        {/* Curated Kits Section (Only on Global) */}
        {!isFollowingView && (
          <section className="px-4 sm:px-5 overflow-visible">
            <div className="flex items-center justify-between mb-2 pl-1">
              <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">
                Kits Sugeridos
              </h2>
            </div>
            <CuratedKits />
          </section>
        )}

        {/* Feed Section */}
        <section className="overflow-visible">
          <div className="flex items-baseline justify-between mb-3 px-4 sm:px-5">
            <h2 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest">
              {isFollowingView ? "Seu Feed" : "Para Você"}
            </h2>
            {feed.length > 0 && (
              <span className="text-[13px] font-bold text-muted-foreground">
                {feed.length} {isFollowingView ? "novas" : "publicadas"}
              </span>
            )}
          </div>

          {feed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4 sm:px-5">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                <RiFileList3Line size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-[17px] font-bold text-muted-foreground mb-1">
                {isFollowingView 
                  ? "Seu feed está vazio"
                  : category && category !== "todos" 
                    ? `Nenhuma brincadeira em "${category}"`
                    : "Nenhuma brincadeira ainda"}
              </p>
              <p className="text-[14px] text-muted-foreground max-w-[250px]">
                {isFollowingView 
                  ? "Siga outros recreadores para ver o que eles andam postando aqui!"
                  : category && category !== "todos" 
                    ? "Tente outra categoria ou seja o primeiro a criar uma!" 
                    : "Seja o primeiro a compartilhar uma brincadeira!"}
              </p>

              {isFollowingView && (
                <Link href="/ranking" className="mt-6">
                  <Button variant="outline" className="rounded-full border-[#FF9500] text-[#FF9500] font-bold">
                    Encontrar Recreadores
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-6 px-4 sm:px-5 overflow-visible">
              {feed.map((game) => game && (
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
                  steps={game.steps}
                  materials={game.materials}
                  publishedAt={game.publishedAt}
                />
              ))}
              
              <div className="pt-10 flex flex-col items-center justify-center text-center opacity-40 pb-20">
                 <div className="h-px w-20 bg-muted-foreground/30 mb-6" />
                 <p className="text-[13px] font-bold text-muted-foreground">Você chegou ao fim do feed</p>
                 <p className="text-[11px] font-medium text-muted-foreground">Crie sua própria gincana para inspirar outros!</p>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-[calc(64px+env(safe-area-inset-bottom))] left-0 right-0 px-4 sm:px-5 py-4 bg-white/80 backdrop-blur-md border-t border-border z-40 no-print">
        <Link href="/criar" className="block w-full">
          <button className="btn-primary w-full shadow-[0_8px_20px_rgba(255,149,0,0.2)] active:scale-[0.98] transition-all">
            Criar nova brincadeira
          </button>
        </Link>
      </div>
    </div>
  )
}
