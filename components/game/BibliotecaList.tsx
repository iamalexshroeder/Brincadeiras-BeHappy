"use client"

import { useState } from "react"
import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiArrowRightSLine, RiCloseLine, RiPrinterLine,
  RiShareLine, RiTimeLine, RiGroupLine, RiUser3Line
} from "@remixicon/react"

const SYSTEM_COLLECTIONS = [
  {
    id: "chuva",
    label: "Na Chuva",
    icon: RiCloudyLine,
    color: "#8E8E93",
    bg: "#F2F2F7",
    description: "Brincadeiras perfeitas para dias chuvosos — dentro de casa ou cobertas.",
    games: [
      { id: "c1", title: "Chuva de Papel", description: "Amasse jornais e jogue bolas de papel num caldeirão. Quem acertar mais vezes e vencer passa a ser o mestre das bolas! Pode dividir em times para tornar mais competitivo.", duration: "15 min", participants: "6–30", age: "5+", materials: ["Jornal", "Balde ou caixa"], steps: ["Distribua folhas de jornal para cada participante", "Cada um amassa as folhas em formato de bola", "Posicione o balde a 3 metros de distância", "Cada participante tem 3 tentativas", "Quem acertar mais vezes vence"] },
      { id: "c2", title: "Dança das Cadeiras Molhadas", description: "Versão indoor da dança das cadeiras com desafios extras a cada eliminação — mímica, charada ou forfait temático.", duration: "20 min", participants: "8–20", age: "6+", materials: ["Cadeiras", "Aparelho de música"], steps: ["Posicione as cadeiras em círculo (n-1 cadeiras)", "Ao parar a música, todos buscam uma cadeira", "Quem ficar sem cadeira cumpre um desafio antes de sair", "Repita retirando uma cadeira por rodada"] },
      { id: "c3", title: "Teatro das Emoções", description: "Cada participante sorteia uma emoção e deve representar uma cena do cotidiano sem falar. Os demais tentam adivinhar.", duration: "25 min", participants: "8+", age: "7+", materials: [], steps: ["Escreva emoções em papéis dobrados (alegria, medo, tristeza...)", "Cada participante sorteia uma emoção", "Tem 1 minuto para criar sua cena", "Apresenta em silêncio por 30 segundos", "O grupo adivinha a emoção representada"] },
      { id: "c4", title: "Stop da Chuva", description: "Versão temática do Stop com categorias relacionadas ao mundo das brincadeiras e recreação.", duration: "20 min", participants: "4–15", age: "8+", materials: ["Papel", "Caneta"], steps: ["Defina as categorias (animal, brincadeira, música...)", "Alguém recita o alfabeto mentalmente", "Ao sinal, para e diz a letra sorteada", "Todos têm 60 segundos para completar as colunas", "Pontuação: palavra única = 10pts, repetida = 5pts"] },
    ]
  },
  {
    id: "piscina",
    label: "Piscina",
    icon: RiDropFill,
    color: "#007AFF",
    bg: "#E5F1FF",
    description: "Diversão aquática com segurança — para piscinas, clubes e colônias.",
    games: [
      { id: "p1", title: "Mergulho da Moeda", description: "Jogue moedas (ou tampinhas coloridas) no fundo da piscina. Quem pegar mais em 60 segundos vence! Pode usar equipes.", duration: "10 min", participants: "4–12", age: "6+", materials: ["Moedas ou tampinhas coloridas"], steps: ["Divida os participantes em 2 ou mais equipes", "Jogue as moedas/tampinhas no fundo da piscina", "Ao sinal, todos mergulham para pegar o máximo possível", "Após 60 segundos, conte as peças de cada equipe", "A equipe com mais peças vence"] },
      { id: "p2", title: "Boia Corrida", description: "Corrida de revezamento usando apenas boias de braço como 'propulsores' sem usar as pernas — desafio de equilíbrio e coordenação.", duration: "15 min", participants: "4–8", age: "7+", materials: ["Bóias de braço (1 por participante)"], steps: ["Organize duas equipes de 2 a 4 pessoas", "Cada participante usa apenas as bóias para se mover", "Nada de usar as pernas!", "Percurso: ida e volta na piscina", "Equipe mais rápida no revezamento vence"] },
      { id: "p3", title: "Estátua Aquática", description: "Musical das estátuas, mas dentro da piscina. Ao parar a música, todos devem parar de se mover completamente.", duration: "12 min", participants: "6–20", age: "6+", materials: ["Aparelho de música à prova d'água ou fora da piscina"], steps: ["Todos se movem livremente pela piscina enquanto a música toca", "Ao parar a música, todos ficam completamente imóveis", "Qualquer movimento detectado elimina o participante", "Último na piscina vence"] },
    ]
  },
  {
    id: "ferias",
    label: "Colônia de Férias",
    icon: RiTentLine,
    color: "#FF9500",
    bg: "#FFF4E5",
    description: "Programação completa para acampamentos e colônias de férias.",
    games: [
      { id: "f1", title: "Caça ao Tesouro", description: "Pistas espalhadas pela área de acampamento levam até um tesouro escondido. Cada clue tem um desafio de grupo a cumprir.", duration: "45 min", participants: "10–40", age: "6+", materials: ["Pistas impressas ou escritas", "Tesouro simbólico (medalhas, itens temáticos)"], steps: ["Prepare 8 a 12 pistas com locais espalhados pelo espaço", "Esconda o tesouro no local da última pista", "Divida em equipes de 4 a 6 pessoas", "Cada equipe parte de uma pista diferente (pistas circulares)", "A equipe que encontrar o tesouro primeiro vence"] },
      { id: "f2", title: "Olimpíadas da Colônia", description: "Mini-olimpíadas com provas físicas, criativas e de raciocínio. Ideal para encerramento de temporada.", duration: "90 min", participants: "15+", age: "7+", materials: ["Bola", "Cones", "Barbante", "Materiais para provas criativas"], steps: ["Divida em equipes equilibradas (tribos)", "Defina 6 a 8 modalidades diferentes", "Cada prova vale pontos para a equipe", "Inclua provas: corrida, arte, quiz, arremesso...", "Totalização final e premiação simbólica"] },
      { id: "f3", title: "Gincana das Tribos", description: "As equipes (tribos) competem ao longo do dia em desafios temáticos. Sistema de pontuação acumulativa.", duration: "120 min", participants: "20+", age: "8+", materials: ["Bandeiras por equipe", "Papel e canetas", "Materiais variados por prova"], steps: ["Forme as tribos (4-6 pessoas cada)", "Cada tribo escolhe nome, grito e bandeira (30min)", "Realize 5-8 provas ao longo do dia", "Acumule pontos por prova", "Cerimônia de encerramento com premiação"] },
    ]
  },
  {
    id: "pequenos",
    label: "Locais Pequenos",
    icon: RiHome4Line,
    color: "#AF52DE",
    bg: "#F5E9FF",
    description: "Brincadeiras para salas, corredores e espaços reduzidos.",
    games: [
      { id: "q1", title: "Passa o Anel", description: "Clássico. Um anel passa pelas mãos dadas e o detetive precisa descobrir quem está segurando.", duration: "15 min", participants: "6–20", age: "5+", materials: ["Anel ou botão pequeno"], steps: ["Todos sentam em círculo de mãos dadas", "Um \"detetive\" fica no centro de olhos fechados", "O anel passa secretamente de mão em mão", "O detetive abre os olhos e tem 3 tentativas para descobrir", "Quem for descoberto vira o detetive"] },
      { id: "q2", title: "Espelho", description: "Em duplas, um imita exatamente os movimentos do outro como se fosse um espelho. Sem tocar, sem rir.", duration: "10 min", participants: "4+", age: "6+", materials: [], steps: ["Formem duplas frente a frente", "Um é o \"real\" e o outro é o reflexo no espelho", "O \"real\" faz movimentos lentos", "O \"reflexo\" imita simultaneamente e com precisão", "Após 2 minutos, troquem os papéis"] },
      { id: "q3", title: "Assassino",description: "Um \"assassino\" secreto pisca para eliminar os jogadores. O detetive precisa descobrir quem é antes que todos sejam \"eliminados\".", duration: "15 min", participants: "6–15", age: "8+", materials: ["Cartas (um rei = detetive, um coringa = assassino)"], steps: ["Distribua as cartas — todos olham as suas em segredo", "Quem receber o coringa é o assassino, o rei é o detetive", "O assassino pisca discretamente para os jogadores", "Quem receber a piscadela \"morre\" e sai do jogo", "O detetive tem 3 tentativas para identificar o assassino"] },
    ]
  },
  {
    id: "sem_material",
    label: "Zero Material",
    icon: RiUserVoiceLine,
    color: "#FF3B30",
    bg: "#FFEBEA",
    description: "Sem precisar de nada — só pessoas, voz e criatividade.",
    games: [
      { id: "z1", title: "Estátua", description: "Quando a música para, todos ficam completamente imóveis como estátuas. Qualquer movimento visível elimina o participante.", duration: "10 min", participants: "6+", age: "4+", materials: [], steps: ["Um animador controla a música (pode cantar)", "Todos se movem livremente enquanto a música toca", "Ao parar: imóveis imediatamente", "Qualquer movimento elimina", "Último de pé vence"] },
      { id: "z2", title: "Mestre Mandou", description: "Seguir os comandos apenas quando precedidos de 'Mestre mandou'. Quem obedecer sem o comando, sai.", duration: "15 min", participants: "5+", age: "4+", materials: [], steps: ["Um líder dá ordens ao grupo", "As ordens valem APENAS com 'Mestre mandou' antes", "Ex: 'Mestre mandou pular' = todos pulam", "Ex: 'Sentem!' = ninguém deve sentar", "Quem errar sai; vence o último"] },
      { id: "z3", title: "Telefone sem Fio", description: "Uma mensagem sussurrada de orelha em orelha — compare o original com o final!", duration: "10 min", participants: "6–30", age: "5+", materials: [], steps: ["Todos sentam em fila ou círculo", "O primeiro sussurra uma frase para o próximo", "Cada um repassa o que ouviu, apenas uma vez", "O último diz em voz alta o que recebeu", "Compare com a frase original — o resultado é a piada!"] },
      { id: "z4", title: "Zip Zap", description: "Jogo de reflexo e concentração. O líder aponta para alguém e diz Zip ou Zap — o jogador deve reagir diferente para cada.", duration: "12 min", participants: "8+", age: "7+", materials: [], steps: ["Todos em círculo", "Líder aponta e diz 'Zip' → o apontado deve apontar para a mesma pessoa", "Líder diz 'Zap' → o apontado deve apontar para outra pessoa qualquer", "Demora ou erro elimina", "Acelere o ritmo progressivamente"] },
    ]
  },
  {
    id: "musical",
    label: "Musical",
    icon: RiMusicLine,
    color: "#FFCC00",
    bg: "#FFF9E5",
    description: "O ritmo como ferramenta de aprendizado e diversão.",
    games: [
      { id: "m1", title: "Stop Musical", description: "A cada rodada, uma letra é sorteada e uma categoria diferente é desafiada. Com música e tempo limitado.", duration: "20 min", participants: "4–15", age: "8+", materials: ["Papel", "Caneta por participante"], steps: ["Defina 5-6 categorias na folha (animal, cidade, brincadeira...)", "Alguém recita o alfabeto mentalmente até ser interrompido", "A letra sorteada inicia a rodada", "Todos têm 45 segundos para completar as categorias", "Pontuação: único = 10 pts; repetido = 5 pts; em branco = 0"] },
      { id: "m2", title: "Dança da Corda", description: "Dois giram a corda enquanto um ou mais participantes dançam dentro — o ritmo da corda coordena com música.", duration: "20 min", participants: "6+", age: "6+", materials: ["Corda grande (5+ metros)"], steps: ["Dois participantes giram a corda em ritmo constante", "Um participante entra durante a rotação", "Deve dançar ou executar movimentos combinados", "Quem tocar na corda sai", "Pode-se entrar em duplas ou trios para desafios em grupo"] },
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
  materials: string[]
  steps: string[]
}

interface Collection {
  id: string
  label: string
  icon: any
  color: string
  bg: string
  description: string
  games: SystemGame[]
}

function GameModal({ game, onClose }: { game: SystemGame; onClose: () => void }) {
  const handlePrint = () => {
    window.print()
  }

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: game.title,
        text: game.description,
      })
    }
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-end" onClick={onClose}>
      <div
        className="w-full bg-[#F9F9F7] rounded-t-[20px] max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-[#E5E5EA] bg-white rounded-t-[20px]">
          <div className="flex-1 pr-4">
            <h2 className="text-[18px] font-extrabold text-[#1A1A1A] leading-tight">{game.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="flex items-center gap-1 text-[11px] font-bold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-0.5">
                <RiTimeLine size={11} /> {game.duration}
              </span>
              <span className="flex items-center gap-1 text-[11px] font-bold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-0.5">
                <RiGroupLine size={11} /> {game.participants} pessoas
              </span>
              <span className="flex items-center gap-1 text-[11px] font-bold bg-[#F2F2F7] text-[#8E8E93] rounded-full px-2.5 py-0.5">
                <RiUser3Line size={11} /> {game.age}
              </span>
              {game.materials.length === 0 && (
                <span className="text-[11px] font-bold bg-[#FFEBEA] text-[#FF3B30] rounded-full px-2.5 py-0.5">
                  Sem material
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7] text-[#8E8E93] active:scale-90 transition-all shrink-0"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-5 py-4 space-y-5 pb-6">
          {/* Description */}
          <p className="text-[15px] text-[#1A1A1A] leading-relaxed">{game.description}</p>

          {/* Materials */}
          {game.materials.length > 0 && (
            <div>
              <h3 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-2">Materiais Necessários</h3>
              <div className="flex flex-wrap gap-2">
                {game.materials.map((m, i) => (
                  <span key={i} className="text-[13px] font-bold bg-[#F2F2F7] text-[#1A1A1A] rounded-[8px] px-3 py-1.5">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Steps */}
          <div>
            <h3 className="text-[12px] font-extrabold text-[#8E8E93] uppercase tracking-widest mb-3">Como Jogar</h3>
            <div className="space-y-2.5">
              {game.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF9500] text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-[14px] text-[#1A1A1A] leading-snug flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-5 py-4 border-t border-[#E5E5EA] bg-white flex gap-3">
          <button
            onClick={handlePrint}
            className="flex-1 h-12 rounded-[12px] border border-[#E5E5EA] bg-[#F9F9F7] text-[14px] font-bold text-[#1A1A1A] flex items-center justify-center gap-2 active:scale-[0.98] transition-all no-print"
          >
            <RiPrinterLine size={18} />
            Baixar / Imprimir
          </button>
          <button
            onClick={handleShare}
            className="flex-1 h-12 rounded-[12px] bg-[#FF9500] text-white text-[14px] font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
          >
            <RiShareLine size={18} />
            Compartilhar
          </button>
        </div>
      </div>
    </div>
  )
}

function CollectionModal({ collection, onClose }: { collection: Collection; onClose: () => void }) {
  const [selectedGame, setSelectedGame] = useState<SystemGame | null>(null)
  const Icon = collection.icon

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 flex items-end" onClick={onClose}>
        <div
          className="w-full bg-[#F9F9F7] rounded-t-[20px] max-h-[85vh] flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          {/* Collection Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5EA] bg-white rounded-t-[20px]">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: collection.bg }}
              >
                <Icon size={20} style={{ color: collection.color }} />
              </div>
              <div>
                <span className="text-[17px] font-extrabold text-[#1A1A1A]">{collection.label}</span>
                <span className="block text-[12px] text-[#8E8E93] font-medium">{collection.games.length} brincadeiras</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F2F2F7] text-[#8E8E93] active:scale-90 transition-all"
            >
              <RiCloseLine size={18} />
            </button>
          </div>

          {/* Description */}
          <div className="px-5 pt-3 pb-1">
            <p className="text-[13px] text-[#8E8E93]">{collection.description}</p>
          </div>

          {/* Games list */}
          <div className="overflow-y-auto px-5 py-3 space-y-2.5 pb-8">
            {collection.games.map(game => (
              <div
                key={game.id}
                className="bg-white rounded-[12px] border border-[#E5E5EA] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="block text-[15px] font-extrabold text-[#1A1A1A] truncate">{game.title}</span>
                    <span className="block text-[12px] text-[#8E8E93] mt-0.5 line-clamp-2">{game.description}</span>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="text-[10px] font-bold text-[#8E8E93] bg-[#F2F2F7] rounded-full px-2 py-0.5">{game.duration}</span>
                      <span className="text-[10px] font-bold text-[#8E8E93] bg-[#F2F2F7] rounded-full px-2 py-0.5">{game.participants}</span>
                      {game.materials.length === 0 && (
                        <span className="text-[10px] font-bold text-[#FF3B30] bg-[#FFEBEA] rounded-full px-2 py-0.5">Sem material</span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGame(game)}
                  className="mt-3 w-full h-10 rounded-[10px] border border-[#E5E5EA] bg-[#F9F9F7] text-[13px] font-bold text-[#1A1A1A] flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                >
                  <RiArrowRightSLine size={16} className="text-[#FF9500]" />
                  Abrir brincadeira
                </button>
              </div>
            ))}
            <p className="text-center text-[12px] text-[#C7C7CC] font-medium pt-2">
              Mais brincadeiras serão adicionadas em breve
            </p>
          </div>
        </div>
      </div>

      {/* Game Detail Modal */}
      {selectedGame && (
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}
    </>
  )
}

export function BibliotecaList() {
  const [openCollection, setOpenCollection] = useState<string | null>(null)

  const activeCollection = SYSTEM_COLLECTIONS.find(c => c.id === openCollection)

  return (
    <>
      <div className="space-y-2">
        {SYSTEM_COLLECTIONS.map((col) => {
          const Icon = col.icon
          return (
            <div
              key={col.id}
              onClick={() => setOpenCollection(col.id)}
              className="bg-white rounded-[12px] border border-[#E5E5EA] p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer"
            >
              <div
                className="w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: col.bg }}
              >
                <Icon size={22} style={{ color: col.color }} />
              </div>

              <div className="flex-1 min-w-0">
                <span className="block text-[15px] font-extrabold text-[#1A1A1A]">{col.label}</span>
                <span className="block text-[12px] text-[#8E8E93] font-medium">{col.games.length} brincadeiras disponíveis</span>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[13px] font-bold" style={{ color: col.color }}>Ver coleção</span>
                <RiArrowRightSLine size={18} style={{ color: col.color }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Collection Modal */}
      {activeCollection && (
        <CollectionModal
          collection={activeCollection}
          onClose={() => setOpenCollection(null)}
        />
      )}
    </>
  )
}
