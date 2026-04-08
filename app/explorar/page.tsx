import { Header } from "@/components/layout/Header"
import { CategoryFilters } from "@/components/game/CategoryFilters"
import { LibraryList } from "@/components/game/LibraryList"
import { getLevelFromXp } from "@/utils/gamification"
import { RiBookOpenLine } from "@remixicon/react"
import prisma from "@/lib/prisma"

export const dynamic = "force-dynamic"

// Example brincadeiras kept in code for reference (not rendered unless DB has data)
// const EXAMPLE_BRINCADEIRAS = [
//   { title: "Pega-Pega Congelado", description: "...", tags: ["Fisico"], ... },
// ]

async function getLibrary() {
  try {
    const items = await prisma.brincadeira.findMany({
      where: { published_at: { not: null } },
      orderBy: { likes_count: "desc" },
      include: {
        user: {
          select: { id: true, name: true, avatar_url: true, image: true, xp: true },
        },
      },
    })

    return items.map((b) => ({
      id: b.id,
      title: b.title,
      description: b.short_description,
      creator: {
        name: b.user.name ?? "Recreador",
        level: getLevelFromXp(b.user.xp).level,
        avatar: b.user.avatar_url ?? b.user.image ?? undefined,
      },
      metadata: {
        ageRange: b.age_groups.join(", "),
        duration: `${b.duration_minutes} min`,
        participants: `${b.min_participants}${b.max_participants ? `–${b.max_participants}` : "+"}`,
      },
      tags: b.tags,
      likesCount: b.likes_count,
      usedCount: b.used_count,
    }))
  } catch {
    return []
  }
}

export default async function Explorar() {
  const library = await getLibrary()

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Explorar" showUserCard={false} />

      <main className="px-5 pt-4 pb-32 space-y-12">
        {/* Category Filters */}
        <section>
          <h2 className="text-[13px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-4">
            Categorias
          </h2>
          <CategoryFilters />
        </section>

        {/* Biblioteca */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[24px] font-extrabold text-[#1A1A1A] tracking-[-0.03em]">
              Biblioteca
            </h2>
            {library.length > 0 && (
              <span className="text-[13px] font-bold text-[#8E8E93]">
                {library.length} brincadeiras
              </span>
            )}
          </div>

          {library.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                <RiBookOpenLine size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-[17px] font-bold text-[#1A1A1A] mb-1">
                A biblioteca está vazia
              </p>
              <p className="text-[14px] text-[#8E8E93] max-w-[240px] leading-relaxed">
                Seja o primeiro a contribuir e registrar uma brincadeira para a comunidade!
              </p>
            </div>
          ) : (
            <LibraryList items={library} initialDisplay={10} />
          )}
        </section>
      </main>
    </div>
  )
}
