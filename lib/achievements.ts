export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlocked: boolean
  progress: { current: number; target: number }
  category: "Geral" | "Coleção BeHappy" | "Especial" | "Beta"
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function matchesKeywords(b: any, keywords: string[]): boolean {
  const text = [
    b.title || "",
    b.description || b.short_description || "",
    ...(Array.isArray(b.tags) ? b.tags.map((t: string) => String(t)) : []),
  ]
    .join(" ")
    .toLowerCase()

  return keywords.some((kw) => text.includes(kw.toLowerCase()))
}

function matchesType(b: any, type: string): boolean {
  const rawType = (b.rawType || b.type || "").toUpperCase()
  return rawType === type.toUpperCase()
}

function matchesAge(b: any, ageGroups: string[]): boolean {
  const groups: string[] = Array.isArray(b.rawAgeGroups)
    ? b.rawAgeGroups
    : Array.isArray(b.age_groups)
    ? b.age_groups
    : []
  return ageGroups.some((ag) => groups.includes(ag))
}

// ─── Collection matchers based on the BeHappy biblioteca ────────────────────

/** Pequenos Aprendizes — brincadeiras para crianças de 3-5 anos */
function isPequenos(b: any): boolean {
  return (
    matchesAge(b, ["AGE_3_5"]) ||
    matchesKeywords(b, [
      "3 anos",
      "4 anos",
      "5 anos",
      "bebê",
      "bebê",
      "pequeno",
      "lobo",
      "coelho",
      "saci",
      "medusa",
      "toca",
      "monstro",
      "bruxa",
      "camaleão",
      "balão",
    ])
  )
}

/** Psicomotricidade & Equilíbrio — coordenação, motor, corpo, lateralidade */
function isPsicomotricidade(b: any): boolean {
  return matchesKeywords(b, [
    "psicomotricidade",
    "equilíbrio",
    "equilibrio",
    "lateralidade",
    "coordenação",
    "coordenacao",
    "motor",
    "circuito",
    "corpo",
    "pular",
    "saltar",
    "girar",
    "postura",
    "agilidade",
    "estátua",
    "estatua",
    "congelado",
    "bambolê",
    "bambolê",
  ])
}

/** Jogos de Roda & Música — rodas, cantigas, ritmo, dança */
function isRodaMusica(b: any): boolean {
  return (
    matchesType(b, "MUSICAL") ||
    matchesKeywords(b, [
      "roda",
      "ciranda",
      "cantiga",
      "música",
      "musica",
      "ritmo",
      "dança",
      "danca",
      "cantar",
      "melodia",
      "batida",
      "estátua musical",
      "dança das cadeiras",
      "cidade dorme",
      "telefone sem fio",
    ])
  )
}

/** Pega-Pega & Agilidade — corrida, perseguição, reflexo rápido */
function isPegaPega(b: any): boolean {
  return matchesKeywords(b, [
    "pega-pega",
    "pega pega",
    "pique",
    "pegador",
    "corrida",
    "correr",
    "fugir",
    "perseguição",
    "perseguicao",
    "velocidade",
    "reflexo",
    "rua e avenida",
    "polícia",
    "policia",
    "ladrão",
    "ladrao",
    "sardinha",
    "arranca rabo",
    "congelado",
    "nunca 3",
  ])
}

/** Jogos com Bola — queimada, vôlei, futebol, basquete */
function isJogosBola(b: any): boolean {
  return matchesKeywords(b, [
    "bola",
    "queimada",
    "vôlei",
    "volei",
    "futebol",
    "basquete",
    "arremesso",
    "chute",
    "gol",
    "bombardeio",
    "artilharia",
    "hand-fut",
    "base sete",
    "alerta",
    "passa bola",
    "jogo com bola",
  ])
}

/** Desafios & Cooperação — equipe, estratégia, cooperativo, grupo */
function isEquipe(b: any): boolean {
  return (
    matchesType(b, "COOPERATIVA") ||
    matchesKeywords(b, [
      "cooperação",
      "cooperativa",
      "cooperativo",
      "cooperacao",
      "equipe",
      "grupo",
      "juntos",
      "parceiro",
      "estratégia",
      "estrategia",
      "desafio",
      "rouba bandeira",
      "nó maluco",
      "no maluco",
      "rede humana",
      "passos unidos",
      "resgate",
    ])
  )
}

/** Lúdicos & Sensoriais — sentidos, memória, criatividade, olhos vendados */
function isLudicoSensorial(b: any): boolean {
  return matchesKeywords(b, [
    "sensorial",
    "lúdico",
    "ludico",
    "memória",
    "memoria",
    "sentidos",
    "tato",
    "olfato",
    "olhos vendados",
    "percepção",
    "percepcao",
    "caixa",
    "sensação",
    "sensacao",
    "campo minado",
    "genius",
    "salada",
    "mistério",
    "misterio",
  ])
}

/** Colônia de Férias 2026 */
function isColoniaFerias2026(b: any): boolean {
  const text = [
    b.title || "",
    b.description || b.short_description || "",
    ...(Array.isArray(b.tags) ? b.tags.map((t: string) => String(t)) : []),
  ]
    .join(" ")
    .toLowerCase()

  const hasFerias = ["férias", "ferias", "colônia", "colonia", "colônia de férias"].some(
    (w) => text.includes(w)
  )
  const has2026 = text.includes("2026")
  return hasFerias && has2026
}

// ─── Main function ────────────────────────────────────────────────────────────

export function getAchievements(
  brincadeiras: any[] = [],
  likesReceivedCount: number = 0,
  createdAt?: Date | string | null
): Achievement[] {
  // Membro Beta: conta criada em abril de 2026
  const isBetaMember = (() => {
    if (!createdAt) return false
    const d = new Date(createdAt)
    return d.getFullYear() === 2026 && d.getMonth() === 3 // month is 0-indexed: 3 = April
  })()
  const count = brincadeiras.length

  const countWhere = (fn: (b: any) => boolean) =>
    brincadeiras.filter(fn).length

  const has = (fn: (b: any) => boolean) => countWhere(fn) >= 1

  // ── Colônia de Férias 2026
  const coloniaCount = countWhere(isColoniaFerias2026)

  return [
    // ══════════════════════════════════════════════════════════
    //  GERAL
    // ══════════════════════════════════════════════════════════
    {
      id: "first_game",
      title: "Primeiro Passo",
      description: "Criou a sua primeira brincadeira",
      icon: "🎉",
      unlocked: count >= 1,
      progress: { current: Math.min(count, 1), target: 1 },
      category: "Geral",
    },
    {
      id: "creator_5",
      title: "Criador Ativo",
      description: "Criou 5 brincadeiras no app",
      icon: "🔥",
      unlocked: count >= 5,
      progress: { current: Math.min(count, 5), target: 5 },
      category: "Geral",
    },
    {
      id: "master_15",
      title: "Mestre Recreador",
      description: "Criou 15 brincadeiras no app",
      icon: "👑",
      unlocked: count >= 15,
      progress: { current: Math.min(count, 15), target: 15 },
      category: "Geral",
    },
    {
      id: "legend_30",
      title: "Lenda da BeHappy",
      description: "Criou 30 brincadeiras no app",
      icon: "🌌",
      unlocked: count >= 30,
      progress: { current: Math.min(count, 30), target: 30 },
      category: "Geral",
    },
    {
      id: "loved_10",
      title: "Mais Querido",
      description: "Recebeu 10 curtidas nas suas brincadeiras",
      icon: "❤️",
      unlocked: likesReceivedCount >= 10,
      progress: { current: Math.min(likesReceivedCount, 10), target: 10 },
      category: "Geral",
    },
    {
      id: "viral_25",
      title: "Viralizou!",
      description: "Recebeu 25 curtidas nas suas brincadeiras",
      icon: "⚡",
      unlocked: likesReceivedCount >= 25,
      progress: { current: Math.min(likesReceivedCount, 25), target: 25 },
      category: "Geral",
    },

    // ══════════════════════════════════════════════════════════
    //  COLEÇÕES BEHAPPY (baseadas na biblioteca oficial)
    // ══════════════════════════════════════════════════════════

    // 1. Pequenos Aprendizes
    {
      id: "col_pequenos",
      title: "Monitor dos Pequenos",
      description:
        "Criou uma brincadeira da coleção Pequenos Aprendizes (3-5 anos)",
      icon: "🐣",
      unlocked: has(isPequenos),
      progress: { current: has(isPequenos) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_pequenos_3",
      title: "Especialista Infantil",
      description: "Criou 3 brincadeiras para crianças pequenas",
      icon: "🧸",
      unlocked: countWhere(isPequenos) >= 3,
      progress: { current: Math.min(countWhere(isPequenos), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // 2. Psicomotricidade & Equilíbrio
    {
      id: "col_psico",
      title: "Mestre do Corpo",
      description:
        "Criou uma brincadeira de psicomotricidade, equilíbrio ou coordenação",
      icon: "🤸",
      unlocked: has(isPsicomotricidade),
      progress: { current: has(isPsicomotricidade) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_psico_3",
      title: "Terapeuta Recreativo",
      description: "Criou 3 brincadeiras de psicomotricidade ou equilíbrio",
      icon: "⚖️",
      unlocked: countWhere(isPsicomotricidade) >= 3,
      progress: { current: Math.min(countWhere(isPsicomotricidade), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // 3. Jogos de Roda & Música
    {
      id: "col_roda",
      title: "Rei da Roda",
      description: "Criou uma brincadeira de roda, cantiga ou com música",
      icon: "🎵",
      unlocked: has(isRodaMusica),
      progress: { current: has(isRodaMusica) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_roda_3",
      title: "DJ BeHappy",
      description: "Criou 3 brincadeiras musicais ou de roda",
      icon: "🎶",
      unlocked: countWhere(isRodaMusica) >= 3,
      progress: { current: Math.min(countWhere(isRodaMusica), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // 4. Pega-Pega & Agilidade
    {
      id: "col_pegapega",
      title: "Mestre do Pique",
      description:
        "Criou uma brincadeira de pega-pega, corrida ou perseguição",
      icon: "🏃",
      unlocked: has(isPegaPega),
      progress: { current: has(isPegaPega) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_pegapega_3",
      title: "Pega-Pega Pro",
      description: "Criou 3 brincadeiras de pega-pega ou agilidade",
      icon: "💨",
      unlocked: countWhere(isPegaPega) >= 3,
      progress: { current: Math.min(countWhere(isPegaPega), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // 5. Jogos com Bola
    {
      id: "col_bola",
      title: "Craque da Bola",
      description:
        "Criou uma brincadeira com bola: queimada, vôlei, futebol...",
      icon: "⚽",
      unlocked: has(isJogosBola),
      progress: { current: has(isJogosBola) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_bola_3",
      title: "Artilheiro Recreativo",
      description: "Criou 3 brincadeiras com bola",
      icon: "🏀",
      unlocked: countWhere(isJogosBola) >= 3,
      progress: { current: Math.min(countWhere(isJogosBola), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // 6. Desafios & Cooperação
    {
      id: "col_equipe",
      title: "Espírito de Equipe",
      description:
        "Criou uma brincadeira de cooperação, estratégia ou desafio em grupo",
      icon: "🤝",
      unlocked: has(isEquipe),
      progress: { current: has(isEquipe) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_equipe_3",
      title: "Arquiteto da Cooperação",
      description: "Criou 3 brincadeiras cooperativas ou de desafio em equipe",
      icon: "🏆",
      unlocked: countWhere(isEquipe) >= 3,
      progress: { current: Math.min(countWhere(isEquipe), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // 7. Lúdicos & Sensoriais
    {
      id: "col_ludico",
      title: "Explorador dos Sentidos",
      description:
        "Criou uma brincadeira lúdica, sensorial ou de memória",
      icon: "🧠",
      unlocked: has(isLudicoSensorial),
      progress: { current: has(isLudicoSensorial) ? 1 : 0, target: 1 },
      category: "Coleção BeHappy",
    },
    {
      id: "col_ludico_3",
      title: "Cientista Recreativo",
      description: "Criou 3 brincadeiras lúdicas ou sensoriais",
      icon: "🔬",
      unlocked: countWhere(isLudicoSensorial) >= 3,
      progress: { current: Math.min(countWhere(isLudicoSensorial), 3), target: 3 },
      category: "Coleção BeHappy",
    },

    // Desbloqueou todas as coleções (1 de cada)
    {
      id: "col_all",
      title: "Biblioteca Completa",
      description:
        "Criou pelo menos 1 brincadeira em cada uma das 7 coleções BeHappy",
      icon: "📚",
      unlocked:
        has(isPequenos) &&
        has(isPsicomotricidade) &&
        has(isRodaMusica) &&
        has(isPegaPega) &&
        has(isJogosBola) &&
        has(isEquipe) &&
        has(isLudicoSensorial),
      progress: {
        current: [
          has(isPequenos),
          has(isPsicomotricidade),
          has(isRodaMusica),
          has(isPegaPega),
          has(isJogosBola),
          has(isEquipe),
          has(isLudicoSensorial),
        ].filter(Boolean).length,
        target: 7,
      },
      category: "Coleção BeHappy",
    },

    // ══════════════════════════════════════════════════════════
    //  ESPECIAL — COLÔNIA DE FÉRIAS 2026
    // ══════════════════════════════════════════════════════════
    {
      id: "colonia_2026_1",
      title: "Calouro das Férias 2026",
      description:
        "Criou 1 brincadeira temática para a Colônia de Férias 2026",
      icon: "☀️",
      unlocked: coloniaCount >= 1,
      progress: { current: Math.min(coloniaCount, 1), target: 1 },
      category: "Especial",
    },
    {
      id: "colonia_2026_3",
      title: "Veterano das Férias 2026",
      description:
        "Criou 3 brincadeiras temáticas para a Colônia de Férias 2026",
      icon: "🏖️",
      unlocked: coloniaCount >= 3,
      progress: { current: Math.min(coloniaCount, 3), target: 3 },
      category: "Especial",
    },
    {
      id: "colonia_2026_5",
      title: "Lenda das Férias 2026",
      description:
        "Criou 5 brincadeiras temáticas para a Colônia de Férias 2026",
      icon: "🌴",
      unlocked: coloniaCount >= 5,
      progress: { current: Math.min(coloniaCount, 5), target: 5 },
      category: "Especial",
    },

    // ══════════════════════════════════════════════════════════
    //  BETA
    // ══════════════════════════════════════════════════════════
    {
      id: "beta_member",
      title: "Membro Beta",
      description: "Fez parte do grupo exclusivo que testou o app em abril de 2026",
      icon: "🧪",
      unlocked: isBetaMember,
      progress: { current: isBetaMember ? 1 : 0, target: 1 },
      category: "Beta",
    },
  ]
}
