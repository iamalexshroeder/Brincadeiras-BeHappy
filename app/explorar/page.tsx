import { Header } from "@/components/layout/Header"
import { CategoryFilters } from "@/components/game/CategoryFilters"
import { CuratedKits } from "@/components/game/CuratedKits"
import { LibraryList } from "@/components/game/LibraryList"
import { getLevelFromXp } from "@/utils/gamification"
import { RiBookOpenLine } from "@remixicon/react"
import prisma from "@/lib/prisma"
import { auth } from "@/auth"

export const dynamic = "force-dynamic"

// Example brincadeiras kept in code for reference (not rendered unless DB has data)
// const EXAMPLE_BRINCADEIRAS = [
//   { title: "Pega-Pega Congelado", description: "...", tags: ["Fisico"], ... },
// ]

async function getLibrary(category?: string, kit?: string) {
  const session = await auth()
  try {
    let whereClause: any = { published_at: { not: null } }

    if (category && category !== "todos") {
      whereClause.tags = { has: category.charAt(0).toUpperCase() + category.slice(1) }
    }

    if (kit) {
      if (kit === "chuva") whereClause.tags = { ...whereClause.tags, hasSome: ["Musical", "Sensorial", "Educativo", "Arte"] }
      if (kit === "piscina") whereClause.tags = { ...whereClause.tags, hasSome: ["Água", "Piscina", "Físico"] }
      if (kit === "ferias") whereClause.tags = { ...whereClause.tags, hasSome: ["Físico", "Cooperativo", "Gincana"] }
      if (kit === "pequenos") whereClause.tags = { ...whereClause.tags, hasSome: ["Musical", "Sensorial", "Roda"] }
      if (kit === "sem_material") whereClause.materials = { isEmpty: true }
    }

    const items = await prisma.brincadeira.findMany({
      where: whereClause,
      orderBy: { likes_count: "desc" },
      include: {
        user: {
          select: { id: true, name: true, avatar_url: true, image: true, xp: true },
        },
        comments: {
          include: {
            user: {
              select: { name: true, avatar_url: true, image: true },
            },
          },
          orderBy: { created_at: "desc" },
        },
        interactions: {
          where: session?.user?.id ? { user_id: session.user.id } : { user_id: "none" },
        },
      },
    })

    return items.map((b) => ({
      id: b.id,
      title: b.title,
      description: b.short_description,
      creator: {
        id: b.user.id,
        name: b.user.name ?? "Recreador",
        level: getLevelFromXp(b.user.xp).level,
        avatar: b.user.avatar_url ?? b.user.image ?? undefined,
      },
      metadata: {
        ageRange: (b.age_groups || []).join(", ") || "Qualquer idade",
        duration: `${b.duration_minutes || 0} min`,
        participants: `${b.min_participants || 1}${b.max_participants ? `–${b.max_participants}` : "+"}`,
      },
      tags: b.tags,
      likesCount: b.likes_count,
      usedCount: b.used_count,
      comments: b.comments,
      initialLiked: b.interactions?.some((i) => i.type === "LIKE") ?? false,
      initialUsed: b.interactions?.some((i) => i.type === "USED") ?? false,
    }))
  } catch {
    return []
  }
}

export default async function Explorar({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; kit?: string }>
}) {
  const { category, kit } = await searchParams
  const library = await getLibrary(category, kit)
  const session = await auth()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header title="Explorar" showUserCard={false} />

      <main className="px-5 pt-2 pb-32 space-y-6">
        <section>
          <div className="flex items-center justify-between mb-2 pl-1">
            <h2 className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest">
              Kits Prontos
            </h2>
          </div>
          <CuratedKits />
        </section>

        {/* Category Filters */}
        <section>
          <h2 className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest mb-4 pl-1 mt-4">
            Categorias
          </h2>
          <CategoryFilters />
        </section>

        {/* Biblioteca */}
        <section>
          <div className="flex items-baseline justify-between mb-6 pl-1">
            <h2 className="text-[18px] font-extrabold text-foreground tracking-[-0.03em]">
              Biblioteca
            </h2>
            {library.length > 0 && (
              <span className="text-[13px] font-bold text-muted-foreground">
                {library.length} brincadeiras
              </span>
            )}
          </div>

          {library.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-[#F2F2F7] rounded-full flex items-center justify-center mb-4">
                <RiBookOpenLine size={32} className="text-[#C7C7CC]" />
              </div>
              <p className="text-[17px] font-bold text-muted-foreground mb-1">
                A biblioteca está vazia
              </p>
            </div>
          ) : (
            <LibraryList items={library} initialDisplay={10} currentUserId={session?.user?.id} />
          )}
        </section>
      </main>
    </div>
  )
}
