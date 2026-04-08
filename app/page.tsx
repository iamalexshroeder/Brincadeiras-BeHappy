import { Header } from "@/components/layout/Header"
import { BrincadeiraCard } from "@/components/game/BrincadeiraCard"
import { CategoryFilters } from "@/components/game/CategoryFilters"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RiAddLine, RiFileList3Line } from "@remixicon/react"
import { getFeed } from "@/lib/actions"

// Example entries for code reference (not rendered in production)
// const EXAMPLE_GAMES = [
//   { title: "Pega-Pega Congelado", creator: { name: "Tio Pipoca", level: 8 }, ... },
// ]

export const dynamic = "force-dynamic"

export default async function Home() {
  const { items: feed } = await getFeed(20)

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header />

      <main className="px-5 pb-40 pt-4 space-y-8">
        {/* Category Filters */}
        <CategoryFilters />

        {/* Feed Section */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[22px] font-extrabold text-[#1A1A1A] tracking-[-0.03em]">
              Novidades
            </h2>
            {feed.length > 0 && (
              <span className="text-[13px] font-bold text-[#8E8E93]">
                {feed.length} publicadas
              </span>
            )}
          </div>

          {feed.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                <RiFileList3Line size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-[17px] font-bold text-[#1A1A1A] mb-1">
                Nenhuma brincadeira ainda
              </p>
              <p className="text-[14px] text-[#8E8E93] max-w-[240px] leading-relaxed mb-6">
                Que tal ser o primeiro a registrar uma brincadeira e começar a ganhar XP?
              </p>
              <Link href="/criar">
                <Button className="h-12 px-8 bg-primary text-white font-bold rounded-[6px]">
                  <RiAddLine size={20} className="mr-2" />
                  Registrar Brincadeira
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {feed.map((game) => (
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
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-[64px] left-0 right-0 px-5 pb-4 bg-gradient-to-t from-[#F9F9F7] via-[#F9F9F7] to-transparent pt-8">
        <Link href="/criar" className="w-full">
          <Button className="w-full h-12 bg-primary text-white font-extrabold text-[15px] rounded-[6px] shadow-none border-none active:scale-[0.98] active:opacity-90">
            Registrar Brincadeira
          </Button>
        </Link>
      </div>
    </div>
  )
}
