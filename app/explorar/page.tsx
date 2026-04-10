import { Header } from "@/components/layout/Header"
import { BibliotecaList } from "@/components/game/BibliotecaList"

export const dynamic = "force-dynamic"

export default async function Explorar() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F7]">
      <Header title="Explorar" showUserCard={false} />

      <main className="page-main">
        {/* Biblioteca de Coleções */}
        <div className="flex items-baseline justify-between mb-4 pl-1">
          <h2 className="section-label">
            Biblioteca
          </h2>
          <span className="text-[13px] font-bold text-[#8E8E93]">6 coleções</span>
        </div>
        <BibliotecaList />
      </main>
    </div>
  )
}
