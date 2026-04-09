import { Header } from "@/components/layout/Header"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { CategoryFilters } from "@/components/game/CategoryFilters"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RiAddLine, RiFileList3Line } from "@remixicon/react"
import { getFeed } from "@/lib/actions"
import { auth } from "@/auth"

// Example entries for code reference (not rendered in production)
// const EXAMPLE_GAMES = [
//   { title: "Pega-Pega Congelado", creator: { name: "Tio Pipoca", level: 8 }, ... },
// ]

export const dynamic = "force-dynamic"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const { items: feed } = await getFeed(20, undefined, category)
  const session = await auth()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header showSearch={false} />

      <main className="px-5 pb-40 pt-2 space-y-6">
        {/* Feed Section */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[18px] font-extrabold text-foreground tracking-[-0.03em]">
              Novidades
            </h2>
            {feed.length > 0 && (
              <span className="text-[13px] font-bold text-muted-foreground">
                {feed.length} publicadas
              </span>
            )}
          </div>
          {feed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                <RiFileList3Line size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-[17px] font-bold text-muted-foreground mb-1">
                {category && category !== "todos" 
                  ? `Nenhuma brincadeira em "${category}"`
                  : "Nenhuma brincadeira ainda"}
              </p>
              <p className="text-[14px] text-muted-foreground">
                {category && category !== "todos" 
                  ? "Tente outra categoria ou seja o primeiro a criar uma!" 
                  : "Seja o primeiro a compartilhar uma brincadeira!"}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
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
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-[64px] left-0 right-0 px-5 pb-4 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7] to-transparent pt-8">
        <Link href="/criar" className="w-full">
          <Button className="w-full h-12 bg-[#FF9500] text-white font-medium text-[14px] rounded-[12px] shadow-sm border-none active:scale-[0.98] active:opacity-90">
            Criar nova brincadeira
          </Button>
        </Link>
      </div>
    </div>
  )
}
