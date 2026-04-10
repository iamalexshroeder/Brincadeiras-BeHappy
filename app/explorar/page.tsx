import { Header } from "@/components/layout/Header"
import { ExplorarClient } from "@/components/game/ExplorarClient"
import { getFeed } from "@/lib/actions"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { RiSearchLine } from "@remixicon/react"
import { auth } from "@/auth"
import { SYSTEM_COLLECTIONS } from "@/lib/data/biblioteca"

export const dynamic = "force-dynamic"

export default async function Explorar({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; kit?: string }>
}) {
  const { q, kit } = await searchParams
  const session = await auth()

  const activeKit = kit ? SYSTEM_COLLECTIONS.find(c => c.id === kit) : null

  // Modo Kit
  if (kit) {
    let kitItems: any[] = []
    
    if (activeKit) {
      // Se for uma coleção do sistema, usamos os dados estáticos da biblioteca
      kitItems = activeKit.games.map(g => ({
        ...g,
        creator: {
          id: "system",
          name: "BeHappyinha",
          avatar: "/behappyinha.png",
          level: 10,
          title: "Curadoria Oficial"
        },
        metadata: {
          ageRange: g.age,
          duration: g.duration,
          participants: g.participants
        },
        tags: [activeKit.label],
        likesCount: 0,
        usedCount: 0,
        userHasLiked: false,
        userHasUsed: false,
        userHasSaved: false,
        comments: [],
        publishedAt: "Oficial"
      }))
    } else {
      // Se não for do sistema, busca no banco (coleções de usuários)
      const { items } = await getFeed(40, undefined, undefined, kit)
      kitItems = items
    }
    return (
      <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
        <Header
          title={activeKit?.label ?? "Coleção"}
          showUserCard={false}
          showBackButton={true}
          showSearch={false}
        />
        <main className="page-main pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-baseline justify-between mb-4 pl-1">
            <h2 className="section-label">{activeKit?.label}</h2>
            <span className="text-[13px] font-bold text-[#8E8E93]">{kitItems.length} brincadeiras</span>
          </div>

          {kitItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                <RiSearchLine size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-[17px] font-bold text-muted-foreground mb-1">Coleção vazia</p>
            </div>
          ) : (
            <div className="space-y-4 px-1 pb-4">
              {kitItems.filter(Boolean).map((game) => (
                <BrincadeiraCard
                  key={game!.id}
                  id={game!.id}
                  title={game!.title}
                  description={game!.description}
                  creator={game!.creator}
                  metadata={game!.metadata}
                  tags={game!.tags}
                  likesCount={game!.likesCount}
                  usedCount={game!.usedCount}
                  comments={game!.comments}
                  initialLiked={game!.userHasLiked}
                  initialUsed={game!.userHasUsed}
                  currentUserId={session?.user?.id}
                  steps={game!.steps}
                  materials={game!.materials}
                  publishedAt={game!.publishedAt}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    )
  }

  // Modo padrão: busca galeria inicial e entrega ao client component
  const { items: initialFeed } = await getFeed(20)

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header
        title="Explorar"
        showUserCard={false}
        showBackButton={false}
        showSearch={false}
      />
      <ExplorarClient
        initialFeed={initialFeed}
        currentUserId={session?.user?.id}
      />
    </div>
  )
}
