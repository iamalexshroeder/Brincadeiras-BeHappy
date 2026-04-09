import { Header } from "@/components/layout/Header"
import { CuratedKits } from "@/components/game/CuratedKits"
import { BibliotecaList } from "@/components/game/BibliotecaList"

export const dynamic = "force-dynamic"

export default async function Explorar() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Explorar" showUserCard={false} />

      <main className="px-5 pt-4 pb-32 space-y-6">
        {/* Kits Prontos */}
        <section>
          <h2 className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-widest mb-3 pl-1">
            Kits Prontos
          </h2>
          <CuratedKits />
        </section>

        {/* Biblioteca de Coleções */}
        <section>
          <div className="flex items-baseline justify-between mb-4 pl-1">
            <h2 className="text-[18px] font-extrabold text-[#8E8E93] tracking-[-0.02em]">
              Biblioteca
            </h2>
            <span className="text-[13px] font-bold text-[#8E8E93]">6 coleções</span>
          </div>
          <BibliotecaList />
        </section>
      </main>
    </div>
  )
}
