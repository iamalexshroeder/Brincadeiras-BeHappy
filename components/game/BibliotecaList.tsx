"use client"

import { useState } from "react"
import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiRunLine, RiGroupLine, RiHeartLine, RiArrowRightSLine,
  RiCloseLine
} from "@remixicon/react"
import { cn } from "@/lib/utils"

// Brincadeiras "do sistema" — não vinculadas a recreadores
const SYSTEM_COLLECTIONS = [
  {
    id: "chuva",
    label: "Na Chuva",
    icon: RiCloudyLine,
    color: "#007AFF",
    bg: "#E5F1FF",
    count: 12,
    games: [
      { id: "c1", title: "Chuva de Papel", description: "Amasse jornais e jogue bolas de papel num caldeirão. Quem acertar mais vezes, vence!", duration: "15 min", participants: "6–30", age: "5+", likes: 42, used: 38, comments: 5, materials: ["Jornal", "Balde"] },
      { id: "c2", title: "Dança das Cadeiras Molhadas", description: "Versão indoor da dança das cadeiras com desafios extras a cada eliminação.", duration: "20 min", participants: "8–20", age: "6+", likes: 31, used: 22, comments: 3, materials: ["Cadeiras", "Música"] },
      { id: "c3", title: "Teatro das Emoções", description: "Cada participante sorteia uma emoção e deve representar uma cena sem falar.", duration: "25 min", participants: "8+", age: "7+", likes: 55, used: 40, comments: 8, materials: [] },
    ]
  },
  {
    id: "piscina",
    label: "Piscina",
    icon: RiDropFill,
    color: "#34C759",
    bg: "#E5F5EA",
    count: 8,
    games: [
      { id: "p1", title: "Mergulho da Moeda", description: "Jogue moedas no fundo da piscina — quem pegar mais em 60 segundos, ganha!", duration: "10 min", participants: "4–12", age: "6+", likes: 64, used: 51, comments: 9, materials: ["Moedas"] },
      { id: "p2", title: "Boia Corrida", description: "Competição de corrida na piscina usando apenas bóias de braço como propulsão.", duration: "15 min", participants: "4–8", age: "7+", likes: 48, used: 37, comments: 6, materials: ["Bóias"] },
    ]
  },
  {
    id: "ferias",
    label: "Colônia de Férias",
    icon: RiTentLine,
    color: "#FF9500",
    bg: "#FFF4E5",
    count: 20,
    games: [
      { id: "f1", title: "Caça ao Tesouro no Mato", description: "Pistas espalhadas pela área de acampamento levam até um tesouro escondido.", duration: "45 min", participants: "10–40", age: "6+", likes: 89, used: 74, comments: 14, materials: ["Pistas impressas", "Tesouro simbólico"] },
      { id: "f2", title: "Gincana das Tribos", description: "Grupos formam tribos e competem em desafios físicos e criativos ao longo do dia.", duration: "120 min", participants: "20+", age: "8+", likes: 112, used: 95, comments: 21, materials: ["Bandeiras", "Papel", "Canetas"] },
      { id: "f3", title: "Olimpíadas da Colônia", description: "Estafeta, salto, arremesso e mais numa mini-olimpíada de um dia.", duration: "90 min", participants: "15+", age: "7+", likes: 76, used: 60, comments: 10, materials: ["Bola", "Cones", "Barbante"] },
    ]
  },
  {
    id: "pequenos",
    label: "Locais Pequenos",
    icon: RiHome4Line,
    color: "#AF52DE",
    bg: "#F5E9FF",
    count: 15,
    games: [
      { id: "q1", title: "Passa o Anel", description: "Clássico. Um anel passa pelas mãos dadas e o detetive precisa descobrir quem está segurando.", duration: "15 min", participants: "6–20", age: "5+", likes: 33, used: 28, comments: 4, materials: ["Anel ou botão"] },
      { id: "q2", title: "Espelho", description: "Em duplas, um imita exatamente os movimentos do outro como se fosse um espelho.", duration: "10 min", participants: "4+", age: "6+", likes: 27, used: 19, comments: 2, materials: [] },
    ]
  },
  {
    id: "sem_material",
    label: "Zero Material",
    icon: RiUserVoiceLine,
    color: "#FF3B30",
    bg: "#FFEBEA",
    count: 18,
    games: [
      { id: "z1", title: "Estátua", description: "Quando a música para, todos ficam imóveis. Quem mover é eliminado.", duration: "10 min", participants: "6+", age: "4+", likes: 58, used: 50, comments: 7, materials: [] },
      { id: "z2", title: "Mestre Mandou", description: "Seguir os comandos apenas quando precedidos de 'Mestre mandou'.", duration: "15 min", participants: "5+", age: "4+", likes: 71, used: 63, comments: 9, materials: [] },
      { id: "z3", title: "Telefone sem Fio", description: "Uma mensagem sussurrada de orelha em orelha — compare o original com o final!", duration: "10 min", participants: "6–30", age: "5+", likes: 44, used: 39, comments: 5, materials: [] },
    ]
  },
  {
    id: "musical",
    label: "Musical",
    icon: RiMusicLine,
    color: "#FFCC00",
    bg: "#FFF9E5",
    count: 10,
    games: [
      { id: "m1", title: "Stop Musical", description: "Cada um escolhe uma categoria; ao parar a música, todos devem escrever palavras daquela categoria iniciando pela letra sorteada.", duration: "20 min", participants: "4–15", age: "8+", likes: 39, used: 30, comments: 4, materials: ["Papel", "Caneta"] },
    ]
  },
]

interface SystemGame {
  id: string
  title: string
  description: string
  duration: string
  participants: string
  age: string
  likes: number
  used: number
  comments: number
  materials: string[]
}

function GameCard({ game }: { game: SystemGame }) {
  const [liked, setLiked] = useState(false)
  const [used, setUsed] = useState(false)

  return (
    <div className="bg-white rounded-[12px] border border-[#E5E5EA] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <h3 className="text-[16px] font-extrabold text-[#1A1A1A] mb-1">{game.title}</h3>
      <p className="text-[13px] text-[#8E8E93] leading-snug mb-3">{game.description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-[11px] font-bold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-0.5">{game.duration}</span>
        <span className="text-[11px] font-bold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-0.5">{game.participants} pessoas</span>
        <span className="text-[11px] font-bold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-0.5">{game.age}</span>
        {game.materials.length === 0 && (
          <span className="text-[11px] font-bold bg-[#FFEBEA] text-[#FF3B30] rounded-full px-2.5 py-0.5">Sem material</span>
        )}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-[#F2F2F7]">
        <button
          onClick={() => setLiked(!liked)}
          className={cn("flex items-center gap-1.5 text-[13px] font-bold transition-colors active:scale-90", liked ? "text-[#EF4444]" : "text-[#8E8E93]")}
        >
          <RiHeartLine size={18} />
          {game.likes + (liked ? 1 : 0)}
        </button>
        <button
          onClick={() => setUsed(!used)}
          className={cn("flex items-center gap-1.5 text-[13px] font-bold transition-colors active:scale-90", used ? "text-[#16A34A]" : "text-[#8E8E93]")}
        >
          <RiGroupLine size={18} />
          {game.used + (used ? 1 : 0)}
        </button>
        <button
          onClick={() => window.print()}
          className="ml-auto flex items-center gap-1.5 text-[12px] font-bold text-[#8E8E93] bg-[#F2F2F7] px-3 py-1.5 rounded-full active:scale-95 transition-all no-print"
        >
          Baixar
        </button>
      </div>
    </div>
  )
}

export function BibliotecaList() {
  const [openCollection, setOpenCollection] = useState<string | null>(null)

  const activeCollection = SYSTEM_COLLECTIONS.find(c => c.id === openCollection)

  return (
    <div className="space-y-2">
      {SYSTEM_COLLECTIONS.map((col) => {
        const Icon = col.icon
        return (
          <div
            key={col.id}
            onClick={() => setOpenCollection(col.id)}
            className="bg-white rounded-[12px] border border-[#E5E5EA] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer"
          >
            {/* Colored icon */}
            <div
              className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
              style={{ backgroundColor: col.bg }}
            >
              <Icon size={22} style={{ color: col.color }} />
            </div>

            <div className="flex-1 min-w-0">
              <span className="block text-[15px] font-extrabold text-[#1A1A1A]">{col.label}</span>
              <span className="block text-[12px] text-[#8E8E93] font-medium">{col.count} brincadeiras</span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <span className="text-[13px] font-bold text-[#FF9500]">Ver coleção</span>
              <RiArrowRightSLine size={18} className="text-[#FF9500]" />
            </div>
          </div>
        )
      })}

      {/* Collection Modal / Sheet */}
      {activeCollection && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-end" onClick={() => setOpenCollection(null)}>
          <div
            className="w-full bg-[#F9F9F7] rounded-t-[20px] max-h-[85vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5EA] bg-white rounded-t-[20px]">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: activeCollection.bg }}
                >
                  <activeCollection.icon size={18} style={{ color: activeCollection.color }} />
                </div>
                <div>
                  <span className="text-[16px] font-extrabold text-[#1A1A1A]">{activeCollection.label}</span>
                  <span className="block text-[11px] text-[#8E8E93] font-medium">{activeCollection.games.length} brincadeiras disponíveis</span>
                </div>
              </div>
              <button
                onClick={() => setOpenCollection(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7] text-[#8E8E93] active:scale-90 transition-all"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            {/* Games list */}
            <div className="overflow-y-auto px-5 py-4 space-y-4 pb-8">
              {activeCollection.games.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
              <p className="text-center text-[12px] text-[#C7C7CC] font-medium pt-2">
                Mais brincadeiras serão adicionadas em breve
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
