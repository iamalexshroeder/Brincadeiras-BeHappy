import { BrincadeiraType, AgeGroup, AnimatorLevel } from '@prisma/client'
import prisma from '../lib/prisma'

const BRINCADEIRAS = [
  {
    title: "Vôlei de Bexiga d'água",
    short_description: "Uma guerra refrescante usando toalhas para arremessar e pegar bexigas com água.",
    type: BrincadeiraType.FISICA,
    steps: [
      "Divida as crianças em duplas e forneça uma toalha de rosto para cada dupla.",
      "Cada dupla deve segurar as pontas da toalha, formando um espécie de trampolim.",
      "Coloque uma bexiga com água no meio da toalha.",
      "A dupla precisa coordenar um movimento para arremessar a bexiga por cima de uma rede (ou corda).",
      "A equipe adversária precisa conseguir capturar a bexiga intacta com a sua toalha para marcar ponto."
    ],
    materials: ["Bexigas d'água", "Toalhas de rosto pequenas", "Corda ou rede de vôlei"],
    tags: ["Água", "Piscina", "Físico", "Cooperativo", "Refrescante", "Equipe"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.MEDIO,
    duration_minutes: 30,
    min_participants: 4
  },
  {
    title: "Sons Mágicos na Roda",
    short_description: "Estimule a escuta atenta dos pequenos com sons rítmicos divertidos gerados com as palmas e copos.",
    type: BrincadeiraType.MUSICAL,
    steps: [
      "Peça para que todos os pequenos sentem em uma roda no chão.",
      "O recreador começa fazendo um som rítmico (ex: bater duas palmas e estalar a língua).",
      "Passe a vez para a criança ao lado para repetir exatamente o mesmo som.",
      "A cada volta, introduza um novo instrumento ou percussão corporal.",
      "Incentive-os a criarem seus próprios ritmos a cada rodada."
    ],
    materials: ["Copos de plástico resistentes (opcional)", "Pandeiro infantil"],
    tags: ["Musical", "Sensorial", "Roda", "Calmas"],
    age_groups: [AgeGroup.AGE_3_5, AgeGroup.AGE_6_9],
    animator_level: AnimatorLevel.FACIL,
    duration_minutes: 15,
    min_participants: 5
  },
  {
    title: "Caça ao Tesouro Invisível",
    short_description: "Atividade de dedução onde as crianças devem descobrir um objeto escondido apenas fazendo perguntas de 'Sim' ou 'Não'.",
    type: BrincadeiraType.EDUCATIVA,
    steps: [
      "O recreador escolhe um objeto do ambiente (sem pegá-lo, apenas em pensamento) que será o 'tesouro indivisível'.",
      "As crianças não sabem o que é, e devem fazer perguntas fechadas que o recreador só pode responder 'Sim' ou 'Não'.",
      "Exemplo: 'É vermelho?', 'É de comer?', 'Ele faz barulho?'.",
      "Quem acertar qual é o objeto escondido na mente, ganha a rodada e escolhe o próximo objeto!"
    ],
    materials: [],
    tags: ["Educativo", "Sem Material", "Salão", "Mente"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.FACIL,
    duration_minutes: 20,
    min_participants: 2
  },
  {
    title: "O Pescador Assombrado",
    short_description: "Gincana de velocidade e reflexos rápidos na qual quem for pescado vira peixe no aquário fantasma.",
    type: BrincadeiraType.FISICA,
    steps: [
      "O recreador será o 'Pescador Assombrado' e segura uma corda no centro da quadra.",
      "As crianças (os peixes) ficam em uma ponta da quadra e precisam correr para a outra ponta quando ouvirem: 'Sereia!'.",
      "O Pescador tentará encostar nas crianças usando a corda mole (arrastando como uma rede).",
      "Quem for encostado ('pescado') vira ajudante do Pescador e segura na ponta da corda na próxima travessia."
    ],
    materials: ["Corda longa de sisal ou algodão tressê", "Cone para marcar limites"],
    tags: ["Físico", "Gincana", "Quadra", "Velocidade"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.AVANCADO,
    duration_minutes: 25,
    min_participants: 10
  },
  {
    title: "Mestres do Bambolê Cooperativo",
    short_description: "Todos dão a mão em círculo e têm que passar um bambolê sem soltar as mãos da roda.",
    type: BrincadeiraType.COOPERATIVA,
    steps: [
      "Todos formam uma grande roda de mãos dadas.",
      "Dois integrantes soltam a mão apenas para colocar um bambolê no braço e dão a mão novamente.",
      "O objetivo do grupo é fazer o bambolê atravessar a roda inteira sem que ninguém solte as mãos, passando pelo corpo e pernas.",
      "Para um desafio maior durante colônia de férias, introduza 2 bambolês partindo em frentes opostas! Quem for mais rápido ganha."
    ],
    materials: ["1 ou 2 Bambolês"],
    tags: ["Cooperativo", "Roda", "Desafio", "Sem Competição"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.FACIL,
    duration_minutes: 15,
    min_participants: 8
  },
  {
    title: "Estátua Musical das Emoções",
    short_description: "A cada parada da música, você deve virar uma estátua expressando um sentimento sorteado.",
    type: BrincadeiraType.CRIATIVA,
    steps: [
      "O recreador toca uma música bem animada no celular/caixinha bluetooth e incentiva a dança total.",
      "Quando a música pausar (stop), o recreador grita: 'Estátua... ZANGADA!'.",
      "Todas as crianças congelam imediatamente fazendo cara de Zangadas.",
      "Qualquer um que rir, se mexer ou fizer cara normal dá uma voltinha pulando de um pé só como punição divertida.",
      "Tente com várias emoções como Apaixonada, Chorona, Rindo muito, Com Frio."
    ],
    materials: ["Caixa de som Bluetooth", "Celular com playlist animada"],
    tags: ["Musical", "Teatro", "Salão", "Sensorial", "Arte"],
    age_groups: [AgeGroup.AGE_3_5, AgeGroup.AGE_6_9],
    animator_level: AnimatorLevel.FACIL,
    duration_minutes: 15,
    min_participants: 3
  },
  {
    title: "Tubarões da Piscina",
    short_description: "Brincadeira no raso onde o tubarão deve caçar de olhos vendados apenas pelo som da batida na água.",
    type: BrincadeiraType.FISICA,
    steps: [
      "Em uma piscina super rasa onde todas as crianças deem pé com segurança (completamente).",
      "Um dos alunos será o Tubarão Cego (com óculos vendado) e deverá ficar no meio da água.",
      "As outras crianças precisam tentar atravessar para a borda oposta o mais silenciosamente que puderem.",
      "O Tubarão se move de acordo com o barulho de espirrar da água. Se encostar em alguém, troca de tubarão."
    ],
    materials: ["Piscina Rasa (Até cintura)", "Óculos de natação tampado com fita preta isolante (venda d'água)"],
    tags: ["Água", "Piscina", "Físico", "Silêncio", "Sensorial"],
    age_groups: [AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.MEDIO,
    duration_minutes: 20,
    min_participants: 6
  },
  {
    title: "Corrida Centopeia",
    short_description: "Gincana clássica super divertida e caótica para gastar energia nas colônias de férias.",
    type: BrincadeiraType.COMPETITIVA,
    steps: [
      "Divida as crianças em grupos de 5 (que serão as centopeias).",
      "Na marca de saída, devem sentar no chão, as costas de um encostando no peito do que está atrás e passar as pernas por cima do colo.",
      "O objetivo é avançar pela quadra arrastando o bumbum coordenadamente sem desmanchar a corrente de corpos.",
      "A primeira centopeia a pisar ou passar da linha de chegada vence a rodada!"
    ],
    materials: ["Quadra poliesportiva", "Giz/Fita para marcar chão"],
    tags: ["Físico", "Gincana", "Cooperativo", "Turma"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.MEDIO,
    duration_minutes: 10,
    min_participants: 10
  },
  {
    title: "Pedra, Papel e Tesoura Humano",
    short_description: "Evolução do Jó-ken-pô, mas envolvendo os membros inteiro em gestões teatrais com pontos corridos.",
    type: BrincadeiraType.COOPERATIVA,
    steps: [
      "Separar duas grandes equipes e cada um se reúne para combinar qual será o golpe de todos.",
      "Golpes: Dragão (braços para cima rosnando), Cavaleiro (espada pra frente), Princesa (mão no queixinho meigo).",
      "Regras: Dragão come a Princesa. Princesa enfeitiça Cavaleiro. Cavaleiro derrota Dragão.",
      "Após os grupos combinarem em segredo por 10 seg, ficam frente a frente e o Recreador grita '3, 2, 1, JÁ!'.",
      "A equipe inteira faz o gesto e soma o ponto se vencer. Equipe ganhadora no final leva a grande rodada."
    ],
    materials: [],
    tags: ["Sem Material", "Competitivo", "Equipes", "Férias"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.FACIL,
    duration_minutes: 15,
    min_participants: 8
  },
  {
    title: "Telefone de Toque - Desenho em Cadeia",
    short_description: "A clássica brincadeira do telefone sem fio, mas fazendo desenho com os dedos nas costas e transferindo a mensagem.",
    type: BrincadeiraType.CRIATIVA,
    steps: [
      "Peça para que se sentem no chão, formando uma grande fila única (todos virados prestando para as costas do colega da frente).",
      "No final da fila (o último a receber nas costas), coloque um papel e lápis de escrever.",
      "O recreador mostra escondido o desenho de uma casa, árvore ou coração para a PRIMEIRA pessoa da fila.",
      "Esta, usa o dedo indicador para desenhar o que viu, com firmeza nas COSTAS do colega do lado.",
      "O amigo vai entendendo o movimento em suas costas e repetindo na pessoa à frente dele.",
      "No final, o último desenha fielmente no papel. É risada na certa pra verem no que a Árvore se transformou: um Cogumelo?"
    ],
    materials: ["Canetas hidrográficas", "Folhas sulfites Lápis ou papel rascunho"],
    tags: ["Educativo", "Sensorial", "Arte", "Tato", "Calmas"],
    age_groups: [AgeGroup.AGE_6_9, AgeGroup.AGE_10_PLUS],
    animator_level: AnimatorLevel.FACIL,
    duration_minutes: 20,
    min_participants: 6
  }
]

async function main() {
  console.log("🌱 Iniciando o Seed do Banco de Dados...")

  // Find an existing user or create a master dummy user
  let adminUser = await prisma.user.findFirst({
    where: { email: { contains: "@" } }
  })

  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        email: "alex@behappy.com.br",
        name: "Equipe BeHappy",
        active_title: "GRÃO MESTRE",
        xp: 15000,
        avatar_url: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
      }
    })
    console.log("👤 Usuário Administrador criado.")
  } else {
    console.log(`👤 Utilizando usuário existente para publicação: ${adminUser.name}`)
  }

  let count = 0
  for (const brincadeira of BRINCADEIRAS) {
    // Check if the game already exists to avoid duplicates if run multiple times
    const existing = await prisma.brincadeira.findFirst({
      where: { title: brincadeira.title }
    })

    if (!existing) {
      await prisma.brincadeira.create({
        data: {
          user_id: adminUser.id,
          title: brincadeira.title,
          short_description: brincadeira.short_description,
          type: brincadeira.type as any,
          steps: brincadeira.steps,
          materials: brincadeira.materials,
          tags: brincadeira.tags,
          age_groups: brincadeira.age_groups as any,
          animator_level: brincadeira.animator_level as any,
          duration_minutes: brincadeira.duration_minutes,
          min_participants: brincadeira.min_participants,
          published_at: new Date()
        }
      })
      count++
      console.log(`✅ Brincadeira "${brincadeira.title}" criada.`)
    } else {
      console.log(`⚠️ Brincadeira "${brincadeira.title}" já existe e foi ignorada.`)
    }
  }

  console.log(`🎉 Sucesso! ${count} brincadeiras inéditas adicionadas. O app já está cheio de conteúdo.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
