import { Header } from "@/components/layout/Header"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { CuratedKits } from "@/components/game/CuratedKits"
import Link from "next/link"
import { RiFileList3Line, RiCompass3Line } from "@remixicon/react"
import { getFeed, getMyContributions } from "@/lib/actions"
import { auth } from "@/auth"

export const dynamic = "force-dynamic"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; kit?: string }>
}) {
  const { category, kit } = await searchParams
  
  let feed: any[] = []
  let myGames: any[] = []
  let session: any = null
  
  try {
    const sessionResult = await auth()
    session = sessionResult

    const [feedResult, myGamesResult] = await Promise.all([
      getFeed(20, undefined, category, kit),
      session?.user?.id ? getMyContributions() : Promise.resolve([])
    ])
    
    feed = feedResult?.items || []
    myGames = myGamesResult || []
  } catch (error) {
    console.error("Error loading home feed:", error)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header showSearch={false} showUserCard={false} />

      <main className="pb-48 pt-10 space-y-12 overflow-visible animate-in fade-in slide-in-from-bottom-4 duration-500">
        

        {/* Curated Kits Section */}
        <section className="px-4 sm:px-6 overflow-visible">
          <div className="flex items-center justify-between mb-4 pl-1">
            <h2 className="text-[13px] font-black uppercase tracking-wider text-[#8E8E93]">
              Kits Sugeridos
            </h2>
          </div>
          <CuratedKits myGamesCount={myGames.length} />
        </section>


        {/* Feed Section */}
        <section className="overflow-visible">
          <div className="flex items-baseline justify-between mb-6 px-4 sm:px-6">
            <h2 className="text-[13px] font-black uppercase tracking-wider text-[#8E8E93]">
              {kit === "minhas" ? "Minhas Brincadeiras" : "Destaques"}
            </h2>
            {feed.length > 0 && (
              <span className="text-[13px] font-bold text-muted-foreground">
                {feed.length} publicadas
              </span>
            )}
          </div>

          {feed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4 sm:px-6">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-6">
                <RiFileList3Line size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-h3 mb-2">
                {category && category !== "todos" 
                  ? `Nenhuma brincadeira em "${category}"`
                  : "Nenhuma brincadeira ainda"}
              </p>
              <p className="text-body text-muted-foreground max-w-[280px]">
                {category && category !== "todos" 
                  ? "Tente outra categoria ou seja o primeiro a criar uma!" 
                  : "Seja o primeiro a compartilhar uma brincadeira!"}
              </p>
            </div>
          ) : (
            <div className="space-y-8 px-4 sm:px-6 overflow-visible">
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
                  comments={game.comments}
                  initialLiked={game.userHasLiked}
                  initialSaved={game.userHasSaved}
                  currentUserId={session?.user?.id}
                  isSystemGame={game.id?.toString().startsWith('pdf-')}
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
