import { Header } from "@/components/layout/Header"
import { BibliotecaList } from "@/components/game/BibliotecaList"
import { ExplorarSearch } from "@/components/game/ExplorarSearch"
import { getFeed } from "@/lib/actions"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { RiSearchLine } from "@remixicon/react"
import { auth } from "@/auth"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default async function Explorar({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kit?: string }>
}) {
  const { q, kit } = await searchParams
  const session = await auth()
  
  let searchResults: any[] = []
  let defaultFeed: any[] = []
  
  if (q || kit) {
    const feed = await getFeed(20, undefined, undefined, kit, q)
    searchResults = feed.items
  } else {
    const feed = await getFeed(20)
    defaultFeed = feed.items
  }

  const activeKit = kit ? SYSTEM_COLLECTIONS.find(c => c.id === kit) : null;

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header 
        title={kit ? activeKit?.label : "Explorar"} 
        showUserCard={false} 
        showBackButton={!!kit} 
        showSearch={false}
      />

      {/* Barra de busca com autocomplete — só aparece quando não está num kit */}
      {!kit && (
        <div className="px-4 sm:px-6 py-3 bg-[#F9F9F7] border-b border-[#E5E5EA]">
          <div className="bg-white p-[6px] rounded-[12px] border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <Suspense fallback={<div className="h-10" />}>
              <ExplorarSearch />
            </Suspense>
          </div>
        </div>
      )}

      <main className="page-main pb-32">
        {(!q && !kit) ? (
          <>
            {/* Biblioteca de Coleções */}
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">
                Kits Sugeridos
              </h2>
              <span className="text-[13px] font-bold text-[#8E8E93]">{SYSTEM_COLLECTIONS.length} coleções</span>
            </div>
            <BibliotecaList />

            {/* Galeria Padrão */}
            <div className="mt-8 flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">
                Galeria
              </h2>
            </div>
            <div className="space-y-4 px-1 pb-4">
              {defaultFeed.map((game) => (
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
            </div>
          </>
        ) : (
          <div className="mt-4">
            <div className="flex items-baseline justify-between mb-4 pl-1">
              <h2 className="section-label">
                {kit ? `Coleção: ${activeKit?.label || 'Kit'}` : `Resultados para "${q}"`}
              </h2>
              <span className="text-[13px] font-bold text-[#8E8E93]">{searchResults.length} encontradas</span>
            </div>
            
            {searchResults.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                  <RiSearchLine size={32} className="text-[#C7C7CC]" />
                </div>
                <p className="text-[17px] font-bold text-muted-foreground mb-1">
                  Nenhuma brincadeira encontrada
                </p>
                <p className="text-[14px] text-muted-foreground max-w-[250px]">
                  Tente pesquisar usando outros termos, como "bambolê" ou "musical".
                </p>
              </div>
            ) : (
              <div className="space-y-4 px-1 pb-4">
                {searchResults.map((game) => (
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
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
