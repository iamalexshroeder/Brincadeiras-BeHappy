import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiFireLine, RiGroupLine, RiEarthLine, RiFlashlightLine,
  RiHandHeartLine, RiGlobalLine
} from "@remixicon/react"

export interface SystemGame {
  id: string
  title: string
  description: string
  duration: string
  participants: string
  age: string
  materials: string[]
  steps: string[]
}

export interface Collection {
  id: string
  label: string
  icon: any
  color: string
  bg: string
  description: string
  games: SystemGame[]
}

export const SYSTEM_COLLECTIONS: Collection[] = [
  {
    id: "chuva",
    label: "Na Chuva (Indoor)",
    icon: RiCloudyLine,
    color: "#8E8E93",
    bg: "#F2F2F7",
    description: "Brincadeiras perfeitas para dias chuvosos — dentro de casa ou cobertas.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `chuva-${i}`,
      title: `Brincadeira Indoor ${i + 1}`,
      description: `Atividade perfeita para dias de chuva número ${i + 1}. Mantenha a energia alta em locais cobertos!`,
      duration: "15-30 min",
      participants: "4-20",
      age: "Livre",
      materials: ["Papel", "Música"],
      steps: [
        "Junte o grupo em um espaço fechado.",
        "Siga o ritmo da música.",
        "Quem completar a tarefa vence a rodada."
      ]
    }))
  },
  {
    id: "piscina",
    label: "Piscina e Água",
    icon: RiDropFill,
    color: "#007AFF",
    bg: "#E5F1FF",
    description: "Diversão aquática com segurança — para piscinas, clubes e colônias.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `piscina-${i}`,
      title: `Desafio Aquático ${i + 1}`,
      description: `Atividade super refrescante para o verão e brincadeiras na água ${i + 1}.`,
      duration: "15 min",
      participants: "6+",
      age: "6+",
      materials: ["Dardos de água", "Boias"],
      steps: [
        "Todos entram na água no raso.",
        "Divida em duas equipes competitivas.",
        "Cumpra a missão aquática sem molhar o cabelo."
      ]
    }))
  },
  {
    id: "ferias",
    label: "Colônia de Férias",
    icon: RiTentLine,
    color: "#FF9500",
    bg: "#FFF4E5",
    description: "Programação completa para acampamentos e colônias de férias.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `ferias-${i}`,
      title: `Grande Gincana ${i + 1}`,
      description: `Parte essencial de qualquer crongrama de Colônia de Férias: Prova ${i + 1}.`,
      duration: "45 min",
      participants: "20+",
      age: "7+",
      materials: ["Cones", "Bandeiras", "Apito"],
      steps: [
        "Separe as grandes tribos.",
        "Explique as regras da gincana.",
        "Inicie a competição com o apito mágico."
      ]
    }))
  },
  {
    id: "pequenos",
    label: "Locais Pequenos",
    icon: RiHome4Line,
    color: "#AF52DE",
    bg: "#F5E9FF",
    description: "Brincadeiras para salas, corredores e espaços reduzidos.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `pequenos-${i}`,
      title: `Atividade Compacta ${i + 1}`,
      description: `Ideal para sala de casa ou salão de festas sem risco de quebrar nada: variação ${i + 1}.`,
      duration: "10 min",
      participants: "2-10",
      age: "4+",
      materials: ["Nenhum"],
      steps: [
        "Sentem-se todos em círculo bem próximos.",
        "A atenção deve estar focada no mestre.",
        "Repita a sequência e não rache os dentes de rir."
      ]
    }))
  },
  {
    id: "sem_material",
    label: "Zero Material",
    icon: RiUserVoiceLine,
    color: "#FF3B30",
    bg: "#FFEBEA",
    description: "Sem precisar de nada — só pessoas, voz e criatividade.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `sem-${i}`,
      title: `Dinâmica Corporal ${i + 1}`,
      description: `Não tem bola nem corda? Sem problema! Dinâmica vocal e corporal ${i + 1}.`,
      duration: "15 min",
      participants: "Todos",
      age: "Livre",
      materials: [],
      steps: [
        "Use apenas o corpo como extensão da brincadeira.",
        "Invente desafios verbais ou auditivos.",
        "Divirta-se sem gastar R$ 1."
      ]
    }))
  },
  {
    id: "musical",
    label: "Ritmo Musical",
    icon: RiMusicLine,
    color: "#FFCC00",
    bg: "#FFF9E5",
    description: "O ritmo como ferramenta de aprendizado e diversão.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `musical-${i}`,
      title: `Explosão Rítmica ${i + 1}`,
      description: `Canalizando energia através da dança e sons: versão musical ${i + 1}.`,
      duration: "20 min",
      participants: "Ilimitado",
      age: "Todas",
      materials: ["Caixa Bluetooth"],
      steps: [
        "Ligue o som no máximo.",
        "Defina movimentos para cada batida.",
        "Pare a música repentinamente para o desafio de congelamento."
      ]
    }))
  },
  {
    id: "quebra_gelo",
    label: "Quebra-Gelo",
    icon: RiFireLine,
    color: "#FF2D55",
    bg: "#FFE5EB",
    description: "Dinâmicas para turmas que acabaram de se conhecer.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `ice-${i}`,
      title: `Conhecendo a Turma ${i + 1}`,
      description: `Tímidos e extrovertidos se misturando rapidamente na dinâmica ${i + 1}.`,
      duration: "10 min",
      participants: "10-50",
      age: "Teens/Adultos",
      materials: ["Etiquetas de Nome"],
      steps: [
        "Formem duas rodas concêntricas.",
        "Girem para lados opostos.",
        "Parem e falem seus nomes, e descubram algo em comum."
      ]
    }))
  },
  {
    id: "noturnas",
    label: "Noturnas",
    icon: RiFlashlightLine,
    color: "#34C759",
    bg: "#E8F9EB",
    description: "Caças com lanterna e mistério no escuro.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `nigth-${i}`,
      title: `Caça no Escuro ${i + 1}`,
      description: `Para após o jantar na colônia. Brincadeira noturna cheia de suspense nº ${i + 1}.`,
      duration: "30 min",
      participants: "Grupos de 5",
      age: "8+",
      materials: ["Lanternas", "Pulseiras de led"],
      steps: [
        "Apaguem todas as luzes do local.",
        "Explique o mistério do fantasma perdido.",
        "A equipe com a solução e luz ganha a prova."
      ]
    }))
  },
  {
    id: "cooperativas",
    label: "Cooperativas",
    icon: RiHandHeartLine,
    color: "#00C7BE",
    bg: "#E5F9F8",
    description: "Todos vencem! O objetivo é unir o grupo para superar desafios.",
    games: Array.from({ length: 10 }).map((_, i) => ({
      id: `coop-${i}`,
      title: `Desafio Unidos ${i + 1}`,
      description: `Se um falhar, todos falham. Unidade e cooperação são as chaves da rodada ${i + 1}.`,
      duration: "30 min",
      participants: "Turma Inteira",
      age: "6+",
      materials: ["Material de apoio variado"],
      steps: [
        "Descreva que não haverá prato de ouro para 1 pessoa.",
        "Usem as habilidades em conjunto para passar pelo obstáculo.",
        "Celebrem a vitória como tribo única."
      ]
    }))
  }
]
