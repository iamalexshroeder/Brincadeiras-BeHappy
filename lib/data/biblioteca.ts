import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiFireLine, RiFlashlightLine, RiHandHeartLine
} from "@remixicon/react";

export interface SystemGame {
  id: string; title: string; description: string; duration: string;
  participants: string; age: string; materials: string[]; steps: string[];
}

export interface Collection {
  id: string; label: string; icon: any; color: string; bg: string;
  description: string; games: SystemGame[];
}

export const SYSTEM_COLLECTIONS: Collection[] = [
  {
    id: "pequenos",
    label: "Pequenos Aprendizes",
    icon: RiHome4Line,
    color: "#AF52DE",
    bg: "#F5E9FF",
    description: "Atividades para crianças de 3 a 4 anos.",
    games: [
      {
        "id": "pdf-2",
        "title": "O Lobo",
        "description": "Uma emocionante brincadeira de suspense e perseguição onde os pequenos devem encontrar o lobo escondido e fugir para a casa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Um participante é o lobo e se esconde enquanto os outros fecham os olhos e contam.",
          "Após a contagem, todos procuram o lobo. Quem achar grita: 'Vejo um cordeiro cheio de lã!'.",
          "Quando alguém grita: 'Vejo um lobo cheio de lã!', o lobo tenta pegar alguém até a base.",
          "Quem for capturado assume o papel de lobo na próxima rodada."
        ]
      },
      {
        "id": "pdf-3",
        "title": "Para Direita e Para Esquerda",
        "description": "Atividade para trabalhar lateralidade e reflexo, onde as crianças respondem aos comandos do Monitor.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Bambolês ou fita para marcação"],
        "steps": [
          "Distribua bambolês no chão e peça que cada criança fique dentro de um.",
          "O Monitor grita comandos como 'Direita!' ou 'Esquerda!' e as crianças pulam para o lado.",
          "Para aumentar o desafio, use sinais sonoros como apitos para ditar as direções.",
          "Dica: Inclua comandos de 'Frente' e 'Trás' para diversificar o exercício motor."
        ]
      },
      {
        "id": "pdf-4",
        "title": "Campo Minado",
        "description": "Teste de confiança onde as crianças atravessam um circuito guiadas apenas pela voz dos colegas.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Cones ou obstáculos", "Vendas para os olhos"],
        "steps": [
          "Monte um circuito com obstáculos e divida as crianças em duplas.",
          "Um integrante da dupla é vendado e o outro atua como guia apenas por comandos de voz.",
          "O objetivo é atravessar o campo sem tocar nos obstáculos ou será necessário reiniciar.",
          "Troque as funções para que ambos experimentem guiar e ser guiados."
        ]
      },
      {
        "id": "pdf-8",
        "title": "A Sombra",
        "description": "Jogo de imitação e observação que estimula a criatividade e a coordenação motora em duplas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Divida as crianças em duplas onde um será o 'Mestre' e o outro será a 'Sombra'.",
          "O Mestre realiza movimentos diversos e a Sombra deve imitá-lo o mais fielmente possível.",
          "Ao sinal do Monitor, os papéis se invertem e quem era a sombra passa a ditar os movimentos.",
          "Variação: Use trios ou quartetos onde todos devem imitar o líder da fila."
        ]
      },
      {
        "id": "pdf-9",
        "title": "Medusa",
        "description": "Variação emocionante do jogo de 'estátua', onde as crianças tentam tocar o Monitor sem serem vistas.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O Monitor fica de costas para o grupo, no final do campo, agindo como a Medusa.",
          "Os participantes se aproximam e o objetivo é tocar no seu ombro sem serem vistos em movimento.",
          "A Medusa se vira aleatoriamente. Quem for flagrado se movendo volta para a linha de partida.",
          "Aquele que conseguir tocar na Medusa primeiro sem ser pego ganha a rodada."
        ]
      },
      {
        "id": "pdf-13",
        "title": "Toca do Coelho",
        "description": "Jogo dinâmico de troca de lugares que promove a interação e a diversão coletiva.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Duas crianças dão as mãos fazendo uma 'toca' e uma fica no meio sendo o 'coelho'.",
          "Ao sinal do Monitor, todos os coelhos devem trocar de toca rapidamente.",
          "Ao comando de 'Ventania!', todos se soltam e correm, refazendo as tocas ao sinal seguinte.",
          "Sempre mude os papéis para que todos tenham a chance de ser coelhos e tocas."
        ]
      },
      {
        "id": "pdf-14",
        "title": "Mãos de Cores",
        "description": "Atividade sensorial que mistura reconhecimento de cores com alongamento e contato social leve.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Peça para as crianças formarem um círculo e explique a dinâmica das cores.",
          "O Monitor grita ordens como: 'Mão direita no vermelho!'.",
          "As crianças tocam em qualquer objeto ou detalhe da roupa de um colega que tenha a cor citada.",
          "O objetivo é manter o círculo conectado em posições cada vez mais desafiadoras."
        ]
      },
      {
        "id": "pdf-15",
        "title": "Caça ao Tesouro",
        "description": "Clássico jogo de exploração adaptado para os pequenos, estimulando a curiosidade e o foco.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": ["Pequenos objetos ou brindes"],
        "steps": [
          "Esconda diversos objetos temáticos pelo ambiente sem que as crianças vejam.",
          "Ao sinal do Monitor, as crianças buscam os tesouros e os levam ao ponto central.",
          "Peça que busquem cores ou tipos específicos de objetos para trabalhar a categorização.",
          "Revele um grande tesouro coletivo final para que todos comemorem juntos."
        ]
      },
      {
        "id": "pdf-21",
        "title": "Corrida de Saci",
        "description": "Gincana de equilíbrio e força que desafia as crianças a completarem um percurso em uma perna.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Corda ou fita"],
        "steps": [
          "Demarque uma linha de partida e uma de chegada com distância segura.",
          "Ao sinal, as crianças devem pular com um pé só até cruzarem a linha final.",
          "Se alguém colocar os dois pés no chão, deve voltar alguns passos ou reiniciar.",
          "Faça rodadas de aquecimento antes da corrida oficial para garantir a diversão."
        ]
      },
      {
        "id": "pdf-23",
        "title": "O Camaleão",
        "description": "Jogo de perseguição e cores onde as crianças buscam proteção no objeto da cor certa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é o Camaleão. O grupo grita: 'Ô Camaleão, que cor?', e ele escolhe uma.",
          "Todos correm para tocar em algum objeto do ambiente que possua essa cor exata.",
          "O Camaleão tenta pegar alguém antes que toquem na cor correspondente.",
          "Quem for pego torna-se o novo Camaleão para a próxima rodada da brincadeira."
        ]
      },
      {
        "id": "pdf-24",
        "title": "A Fila Viva",
        "description": "Exercício de coordenação onde todos se movem como um único organismo de mãos dadas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Crie uma corrente humana pedindo que as crianças segurem as mãos umas das outras.",
          "O Monitor lidera e dá ordens de movimento: 'A corrente se encolhe!' ou 'A corrente pula!'.",
          "Adicione comandos como curvar a fila, agachar ou correr em círculos sem soltar.",
          "Trabalha a noção de grupo, o ritmo coletivo e o cuidado mútuo entre os participantes."
        ]
      },
      {
        "id": "pdf-26",
        "title": "Reizinho Mandou",
        "description": "Variação do 'Mestre Mandou' que exercita a atenção e a criatividade motora.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é o 'Reizinho'. Ele diz 'Reizinho mandou!' e o grupo pergunta 'Fazer o quê?'.",
          "O Reizinho determina uma tarefa (ex: pular como sapo, imitar um elefante).",
          "O Monitor deve garantir que o papel de Reizinho seja rotativo entre todos.",
          "Dica: Comece com tarefas simples e aumente a complexidade conforme as crianças se animam."
        ]
      },
      {
        "id": "pdf-34",
        "title": "Céu e Terra",
        "description": "Jogo de oposição e reflexo que ajuda a distinguir comandos e aprimorar o salto.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": ["Uma corda longa"],
        "steps": [
          "Estenda uma corda no chão. Um lado será o 'Céu' e o outro será a 'Terra'.",
          "Quando o Monitor gritar 'Céu!', todos devem pular para o lado correspondente.",
          "O Monitor pode tentar confundir o grupo repetindo o nome ou aumentando a velocidade.",
          "Quem errar o pulo faz um pequeno desafio lúdico antes de voltar à brincadeira."
        ]
      },
      {
        "id": "pdf-35",
        "title": "Cruzando o Rio",
        "description": "Desafio de coordenação onde as crianças cruzam um 'rio' usando apenas pedras de papel.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Folhas de papel (3 por criança)"],
        "steps": [
          "O chão é um 'rio' e as folhas são pedras. Cada criança recebe 3 folhas de papel.",
          "Elas devem colocar uma folha, pisar, colocar a próxima à frente e assim sucessivamente.",
          "Devem se equilibrar para recolher a folha que ficou para trás e trazê-la para frente.",
          "O objetivo é cruzar todo o espaço sem nunca tocar o chão com os pés."
        ]
      },
      {
        "id": "pdf-38",
        "title": "O Feiticeiro e as Estátuas",
        "description": "Pega-pega cooperativo onde os 'enfeitiçados' precisam da ajuda dos amigos para voltarem.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é o 'Feiticeiro' e deve tocar os outros para transformá-los em estátua.",
          "Quem for tocado fica imóvel com as pernas afastadas até ser salvo por um colega.",
          "Para salvar a estátua, um jogador livre deve passar por baixo de suas pernas.",
          "O jogo termina quando todos virarem estátua ou o tempo do feiticeiro acabar."
        ]
      },
      {
        "id": "pdf-40",
        "title": "Não Me Faça Rir",
        "description": "Exercício de autocontrole e expressão facial, ideal para momentos de calma e foco.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em duplas: um será o 'Comediante' e o outro o 'Sentinela'.",
          "O Comediante tem 30 segundos para fazer caretas (sem tocar) e fazer o outro rir.",
          "O Sentinela deve manter a expressão séria. Se rir, as funções se invertem.",
          "Para grupos maiores, coloque um integrante ao centro da roda para tentar fazer todos rirem."
        ]
      },
      {
        "id": "pdf-46",
        "title": "O Monstro Faminto",
        "description": "Brincadeira lúdica de equilíbrio e cooperação usando desenhos narrativos no chão.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Giz colorido"],
        "steps": [
          "Desenhe um grande monstro no chão. As crianças começam em cima do desenho do corpo.",
          "Ao sinal, devem se manter equilibradas dentro do desenho para evitar serem 'engolidas'.",
          "Quem cair na boca do monstro torna-se um ajudante do Monitor para capturar os outros.",
          "Vence o último aventureiro que conseguir se manter seguro fora da barriga do monstro."
        ]
      },
      {
        "id": "pdf-49",
        "title": "A Bruxa Gargalhada",
        "description": "Pega-pega dramático com regras de tempo que tornam a perseguição estratégica.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é a Bruxa e conta até 20 em sua 'caverna' enquanto o grupo se espalha.",
          "A Bruxa inicia a caça. Ao ser tocado, o participante torna-se a nova Bruxa imediatamente.",
          "Defina um local seguro ('ferrolho') onde os participantes podem descansar por alguns segundos.",
          "Incentive interpretações teatrais para aumentar a imersão e a diversão das crianças."
        ]
      },
      {
        "id": "pdf-50",
        "title": "As Cores Perdidas",
        "description": "Variação do caça ao tesouro que utiliza pontuações por cor para estimular a observação.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Papéis coloridos", "Cronômetro"],
        "steps": [
          "Esconda pedaços de papel de cores diferentes no espaço antes do início.",
          "Defina pontos para cada cor (ex: azul vale 10, dourado vale 50) e explique ao grupo.",
          "As crianças têm um tempo limite para buscar o máximo de papéis que conseguirem.",
          "Ao final, some os pontos de cada um e celebre o esforço de todos os exploradores."
        ]
      },
      {
        "id": "pdf-53",
        "title": "Chefe Comanda",
        "description": "Jogo de imitação que reforça o seguimento de instruções e a coordenação motora.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "O Chefe inicia o diálogo clássico: 'Boca de forno!', e o grupo responde 'Forno!'.",
          "Após o ritual ('Fareis tudo?'), o Chefe dita ordens lúdicas como 'Dê três pulos!'.",
          "Quem concluir a tarefa ganha um elogio e o jogo segue para o próximo comando.",
          "Garanta a rotatividade da liderança para que todos possam ser o 'Chefe' nas rodadas."
        ]
      },
      {
        "id": "pdf-54",
        "title": "Balão Fujão",
        "description": "Atividade de controle motor onde as crianças guiam um balão apenas usando o vento.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "3+ anos",
        "materials": ["Bexigas", "Pedaços de papelão"],
        "steps": [
          "Cada criança recebe um balão e um papelão que funcionará como um leque.",
          "O objetivo é levar o balão até a linha de chegada abanando-o sem tocá-lo.",
          "Caso o balão saia da rota, o participante deve reposicioná-lo e continuar o trajeto.",
          "Estimula a percepção espacial e o controle de movimentos delicados e precisos."
        ]
      },
      {
        "id": "pdf-56",
        "title": "Caixa de Sensações",
        "description": "Atividade sensorial onde a criança identifica objetos usando apenas o tato.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Caixa furada", "Objetos variados", "Vendas"],
        "steps": [
          "O Monitor coloca um objeto misterioso dentro de uma caixa com um furo lateral.",
          "A criança participante é vendada e deve colocar a mão no furo da caixa.",
          "Pelo tato, ela deve descrever as características e tentar adivinhar o que é o objeto.",
          "Promova o rodízio para que todos adivinhem e também escolham objetos para os colegas."
        ]
      }
    ]
  },
  {
    id: "psicomotricidade",
    label: "Psicomotricidade & Equilíbrio",
    icon: RiUserVoiceLine,
    color: "#FF9500",
    bg: "#FFF4E5",
    description: "Circuitos, equilíbrio e coordenação.",
    games: [
      {
        "id": "pdf-7",
        "title": "Circuito Radical",
        "description": "Percurso psicomotor para trabalhar velocidade, lateralidade e coordenação de forma dinâmica.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": ["Bambolês", "Cones", "Cordas", "Bolas"],
        "steps": [
          "Monte estações com bambolês para pular, cones para zigzag e cordas para equilíbrio.",
          "Explique cada etapa do circuito antes de iniciar a atividade com o grupo.",
          "As crianças devem percorrer o circuito em sequência, respeitando o tempo de cada um.",
          "O Monitor pode adicionar desafios como carregar uma bola ou fazer o percurso de costas."
        ]
      }
    ]
  },
  {
    id: "roda_musica",
    label: "Jogos de Roda & Música",
    icon: RiMusicLine,
    color: "#007AFF",
    bg: "#E5F1FF",
    description: "Ritmos, cantigas e rodas.",
    games: [
      {
        "id": "pdf-10",
        "title": "Estátua Musical",
        "description": "Brincadeira de congelar no tempo que treina o controle auditivo e a atenção de forma divertida.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": ["Aparelho de som e música animada"],
        "steps": [
          "As crianças dançam livremente enquanto o Monitor toca uma música animada.",
          "Quando a música para, todos devem congelar imediatamente na posição presente.",
          "O Monitor tenta fazer caretas para provocar risos, mas as estátuas devem resistir.",
          "Determine temas para as estátuas, como 'animais ferozes' ou 'super-heróis', para diversificar."
        ]
      },
      {
        "id": "pdf-16",
        "title": "Dança das Cadeiras",
        "description": "Jogo clássico de velocidade e percepção onde os lugares diminuem a cada rodada.",
        "duration": "15-20 min",
        "participants": "5+",
        "age": "3+ anos",
        "materials": ["Cadeiras", "Música animada"],
        "steps": [
          "Organize as cadeiras em círculo, voltadas para fora, com uma a menos que o grupo.",
          "As crianças circulam as cadeiras enquanto a música toca. Quando para, todos devem sentar.",
          "Quem ficar sem lugar sai da rodada e uma cadeira é removida para o próximo ciclo.",
          "A brincadeira continua até que sobre apenas um vencedor ocupando a última cadeira."
        ]
      },
      {
        "id": "pdf-32",
        "title": "Telefone sem Fio",
        "description": "Brincadeira de escuta e comunicação que termina em boas risadas com as mensagens transformadas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "As crianças sentam-se em roda e o primeiro sussurra uma frase curta para o colega.",
          "A mensagem deve ser passada adiante sussurrando apenas uma vez para o próximo.",
          "O último da fila diz a frase que ouviu em voz alta para todo o grupo.",
          "A diversão reside em comparar a frase original com a final e ver a transformação ocorrida."
        ]
      },
      {
        "id": "pdf-67",
        "title": "Jo-ken-pô Coletivo",
        "description": "Batalha estratégica entre equipes que transforma o clássico jogo em uma vibrante disputa de grupo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em duas grandes equipes posicionadas frente a frente.",
          "As equipes decidem em segredo qual gesto (Pedra, Papel ou Tesoura) farão juntas.",
          "Ao sinal do Monitor, todos os membros da equipe realizam o gesto simultaneamente.",
          "Ponto para a equipe vencedora do round. O primeiro time a atingir 10 pontos vence."
        ]
      },
      {
        "id": "pdf-71",
        "title": "Sardinha",
        "description": "Esconde-esconde invertido onde quem encontra a sardinha se junta a ela em silêncio.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Um participante (a Sardinha) se esconde silenciosamente enquanto os outros contam.",
          "Os demais procuram individualmente. Quem achar deve se esconder junto com a Sardinha.",
          "O objetivo é não ser descoberto pelos outros enquanto o esconderijo fica cada vez mais cheio.",
          "O jogo termina quando todos estiverem 'enlatados' e a primeira pessoa a achar será a próxima."
        ]
      },
      {
        "id": "pdf-102",
        "title": "Nó Maluco",
        "description": "Quebra-cabeça físico cooperativo que exige comunicação para desatar o nó humano sem soltar as mãos.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O grupo forma um círculo e todos estendem as mãos para o centro do círculo.",
          "Cada pessoa deve segurar as mãos de dois colegas diferentes (não vizinhos).",
          "O objetivo é desenrolar o emaranhado até formar o círculo original sem soltar as mãos.",
          "Estimula o trabalho em equipe, a resolução de problemas e o movimento coordenado."
        ]
      },
      {
        "id": "pdf-121",
        "title": "A Cidade Dorme",
        "description": "Jogo de dedução e interpretação cercado de mistério, focando em descobrir os vilões do grupo.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "10+ anos",
        "materials": ["Papel e caneta"],
        "steps": [
          "Sorteie funções secretas: Assassino, Anjo, Detetive e Cidadãos comuns.",
          "O Narrador guia os turnos onde cada função acorda e executa sua ação em silêncio.",
          "Ao amanhecer, o grupo debate quem são os suspeitos e vota para eliminar um jogador.",
          "O jogo termina quando os Assassinos são descobertos ou sobrepujam os Cidadãos."
        ]
      }
    ]
  },
  {
    id: "pega_pega",
    label: "Pega-Pega & Agilidade",
    icon: RiFireLine,
    color: "#FF3B30",
    bg: "#FFF2F2",
    description: "Perseguição e velocidade.",
    games: [
      {
        "id": "pdf-12",
        "title": "Pega-Pega dos Números",
        "description": "Variação veloz em círculo que exige atenção constante e reflexos rápidos para os números sorteados.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Forme um grande círculo e numere cada participante de 1 a 5, repetidamente.",
          "O Monitor grita um número (ex: '3!') e todos os '3' correm por fora do círculo.",
          "O objetivo é completar a volta e sentar no lugar vazio sem ser pego pelo colega atrás.",
          "Marca ponto quem conseguir sentar primeiro de volta ao seu local original."
        ]
      },
      {
        "id": "pdf-25",
        "title": "Travessia da Floresta",
        "description": "Desafio de invasão onde forasteiros cruzam uma área protegida por guardiões.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": ["Fita ou giz"],
        "steps": [
          "Delimite a 'Floresta' (um retângulo amplo) e escolha guardiões para ficarem dentro dele.",
          "Os fugitivos devem cruzar a floresta de um lado ao outro sem serem tocados.",
          "Os guardiões podem se mover apenas dentro da área delimitada para interceptar.",
          "Quem for pego torna-se o novo guardião e ajuda a proteger a floresta nas rodadas seguintes."
        ]
      },
      {
        "id": "pdf-27",
        "title": "Elefante Colorido",
        "description": "Jogo de perseguição e reconhecimento de cores onde possuir a cor certa garante segurança.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "O Elefante (pegador) grita uma cor. Quem não tem a cor na roupa deve fugir.",
          "Aqueles que possuem a cor escolhida estão em segurança e podem cruzar o campo livremente.",
          "O Elefante tenta pegar quem não tem a cor até que alcancem o outro lado da quadra.",
          "O primeiro participante capturado assume o papel de Elefante colorido na rodada seguinte."
        ]
      },
      {
        "id": "pdf-29",
        "title": "Reino dos Sacis",
        "description": "Brincadeira temática de perseguição onde todos se movem apenas em um pé.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O 'Saci Rei' fica em seu palácio. Os outros Sacis tentam invadi-lo pulando em um pé.",
          "O Rei grita 'O Rei está zangado!' e sai para caçar os invasores também em um pé só.",
          "Quem for pego torna-se ajudante do Rei e deve auxiliá-lo a capturar os restantes.",
          "O último invasor a ser capturado ganha a rodada e começa como o novo Rei."
        ]
      },
      {
        "id": "pdf-30",
        "title": "Congelado",
        "description": "Clássico pega-pega que incentiva o altruísmo ao salvar amigos imobilizados pelo toque.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é o pegador. Quem ele tocar fica 'congelado' (imóvel) no local do toque.",
          "Participantes livres podem descongelar os colegas tocando-os levemente no ombro.",
          "O objetivo do pegador é manter todos os participantes congelados ao mesmo tempo.",
          "Troque o pegador periodicamente para que todos experimentem os diferentes papéis da dinâmica."
        ]
      },
      {
        "id": "pdf-31",
        "title": "Arranca Rabo",
        "description": "Gincana de agilidade onde crianças protegem sua 'cauda' enquanto buscam capturar as dos adversários.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": ["Fitas coloridas ou TNT"],
        "steps": [
          "Cada integrante coloca uma fita pendurada na parte de trás da cintura (o rabo).",
          "Ao sinal, todos tentam colher as fitas dos adversários sem perder as suas próprias.",
          "Quem perder o rabo continua no jogo para ajudar seu time a capturar mais fitas inimigas.",
          "Ao final do tempo, vence a equipe que tiver reunido o maior número de fitas capturadas."
        ]
      },
      {
        "id": "pdf-33",
        "title": "Pega-Pega Espelho",
        "description": "Mistura criativa de perseguição e teatro onde amigos são salvos através da imitação fiel de poses.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Ao ser tocado pelo pegador, o participante deve fazer uma 'pose de estátua' bem criativa.",
          "Para salvar o amigo, um jogador livre deve parar e imitar exatamente a pose por 2 segundos.",
          "Uma vez imitada com sucesso, ambos podem voltar a correr livremente pelo espaço.",
          "Esta brincadeira estimula a percepção corporal, a criatividade e a cooperação rápida em grupo."
        ]
      },
      {
        "id": "pdf-36",
        "title": "Caça Palitos",
        "description": "Jogo de perseguição que usa Jo-ken-pô para disputar recursos, estimulando agilidade e sorte.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": ["Palitos ou fichas (3 por criança)"],
        "steps": [
          "Cada criança começa com palitos. Ao ser tocada, deve disputar Jo-ken-pô com o pegador.",
          "O vencedor da disputa manual fica com o palito do outro oponente da rodada.",
          "Após a disputa, ambos retornam à corrida para buscar novos alvos e desafios.",
          "O jogo encerra quando o tempo acabar e ganha quem acumulou o maior número de recursos."
        ]
      },
      {
        "id": "pdf-42",
        "title": "A Cauda do Dragão",
        "description": "Exercício vibrante de cooperação onde a cabeça do dragão deve capturar sua própria cauda.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "As crianças formam uma longa fila segurando na cintura de quem está à frente (o dragão).",
          "O primeiro é a Cabeça e o último é a Cauda. Ao sinal, a Cabeça tenta tocar a Cauda.",
          "Toda a fila deve se mover unida para proteger a Cauda sem que a corrente se solte.",
          "Se a Cabeça tocar a Cauda, os participantes rotacionam as funções na estrutura do dragão."
        ]
      },
      {
        "id": "pdf-43",
        "title": "O Gafanhoto e a Rã",
        "description": "Jogo de perseguição em limites restringidos que treina equilíbrio e salto coordenado agachado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Giz"],
        "steps": [
          "Desenhe um círculo. A Rã fica agachada no centro e os Gafanhotos pulam lá dentro.",
          "A Rã tenta capturar os Gafanhotos sem levantar totalmente os pés do chão.",
          "Quem for pego torna-se uma nova Rã ajudando a cercar os saltadores restantes.",
          "Vence o último Gafanhoto que resistir e ele começa como a rã inicial na próxima partida."
        ]
      },
      {
        "id": "pdf-44",
        "title": "O Rato e o Gato",
        "description": "Variação do corre-cutia que utiliza um objeto para marcar o início de uma perseguição circular.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": ["Um tênis ou objeto"],
        "steps": [
          "Todos sentam em círculo. O Rato corre por fora e deposita o objeto atrás de alguém.",
          "Ao perceber o objeto, a pessoa levanta (torna-se o Gato) e deve perseguir o Rato.",
          "O Rato deve dar a volta completa e sentar no lugar vazio antes de ser capturado.",
          "Se o Rato for pego, continua com o objeto. Se escapar, o Gato vira o novo Rato."
        ]
      },
      {
        "id": "pdf-45",
        "title": "Resgate no Reino Perdido",
        "description": "Jogo de exploração com funções secretas que trazem um clima de aventura épica ao grupo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Defina um Bruxo, um Cavalheiro e as Princesas que devem se esconder pelo espaço.",
          "O Cavalheiro deve encontrar e escoltar as Princesas até a segurança do Reino.",
          "O Bruxo tenta capturá-las para seu Esconderijo antes que o Cavalheiro as salve.",
          "Ganha quem conseguir reunir a maioria das princesas em sua respectiva base ao final."
        ]
      },
      {
        "id": "pdf-48",
        "title": "Toque nas Cores",
        "description": "Pega-pega dinâmico de percepção visual onde o ambiente interativo se torna o foco.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O pegador grita uma cor e todos devem correr para tocar em algo com essa cor.",
          "O pegador pode capturar qualquer um que ainda não tenha tocado em um objeto daquela cor.",
          "Se for pego, o participante assume o papel de pegador e escolhe a próxima cor.",
          "Promove o reconhecimento rápido de cores e o movimento constante dentro do espaço."
        ]
      },
      {
        "id": "pdf-51",
        "title": "A Poção Mágica",
        "description": "Aventura cooperativa onde magos coletam ingredientes sem serem pegos pelo monstro guardião.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": ["Bambolês", "Cones coloridos"],
        "steps": [
          "Espalhe os cones ('poções') e bambolês ('casas'). O Monstro protege a floresta central.",
          "Os Magos devem buscar as poções e levá-las para suas casas um por vez.",
          "Se o Monstro tocar o Mago, ele deve devolver o item e recomeçar seu trajeto.",
          "O objetivo final é organizar todas as poções por cores em suas casas específicas."
        ]
      },
      {
        "id": "pdf-58",
        "title": "Letra Pegadora",
        "description": "Exercício de prontidão que transforma a inicial do nome de cada um em um gatilho de ação.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "O Monitor grita uma letra aleatoriamente enquanto todos caminham pelo espaço.",
          "Quem tem o nome iniciado por aquela letra torna-se pegador por 30 segundos imediatos.",
          "Os capturados ficam agachados e podem ser salvos pelo toque de colegas livres.",
          "Mude a letra frequentemente para que todos tenham a oportunidade de liderar a caça."
        ]
      },
      {
        "id": "pdf-61",
        "title": "O Killer (Piscadinha)",
        "description": "Jogo de observação e discrição onde um assassino silensioso tenta eliminar as vítimas sem ser descoberto.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": ["Papéis com funções"],
        "steps": [
          "Distribua secretamente: Killer (podes piscar), Detetive (observa) e Vítimas.",
          "O Killer 'elimina' as vítimas piscando discretamente para elas, que devem dizer 'Morri!'.",
          "O Detetive deve apontar o Killer: 'Preso em nome da lei!' antes de ser eliminado.",
          "Promove o contato visual, a leitura de expressões e o mistério social entre as crianças."
        ]
      },
      {
        "id": "pdf-63",
        "title": "PACMAN Humano",
        "description": "Emocionante pega-pega de restrição espacial focado nas linhas de marcação do chão.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": ["Quadra com linhas demarcadas"],
        "steps": [
          "O pegador (Pacman) e os fugitivos devem correr estritamente em cima das linhas da quadra.",
          "Quem sair das linhas ou for tocado senta-se no local, transformando-se em um obstáculo fixo.",
          "O Pacman pode pular os obstáculos, mas os outros jogadores devem encontrar caminhos alternativos.",
          "A rodada termina quando sobrar apenas um sobrevivente ou todos forem capturados."
        ]
      },
      {
        "id": "pdf-64",
        "title": "Gato e Rato em Repouso",
        "description": "Variação estratégica onde os participantes sentados servem como base para a troca imediata de papéis.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Espalhe os participantes sentados. O Rato foge do Gato entre os colegas imóveis.",
          "Para se salvar, o Rato toca na cabeça de alguém sentado, assumindo sua função.",
          "A pessoa tocada levanta e torna-se o novo Gato, perseguindo o antigo Gato que vira o novo Rato.",
          "Esta dinâmica gera trocas rápidas de energia e exige reflexos potentes de todo o grupo."
        ]
      },
      {
        "id": "pdf-73",
        "title": "Pegador com Aro",
        "description": "Perseguição coletiva onde a captura é feita com bambolês, criando uma corrente crescente de pegadores.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": ["Bambolês"],
        "steps": [
          "Um participante começa sozinho segurando um bambolê para laçar os colegas.",
          "Para capturar, ele deve fazer o bambolê passar suavemente pelo corpo do fugitivo.",
          "Os capturados pegam novos bambolês e dão as mãos ao mestre, formando uma longa fila.",
          "O desafio aumenta conforme a corrente cresce e tenta cercar os últimos escapistas."
        ]
      },
      {
        "id": "pdf-76",
        "title": "Mico Preto",
        "description": "Desafio de travessia e agilidade onde um guardião central tenta capturar os caçadores velozes.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O Mico Preto fica no centro e pergunta: 'Quem tem medo do Mico Preto?'.",
          "Os caçadores respondem 'Eu que não!' e correm para cruzar o campo adversário.",
          "Quem for capturado no caminho junta-se ao guardião central para as próximas rodadas.",
          "A brincadeira continua até que todos os caçadores tenham sido transformados em Micos."
        ]
      },
      {
        "id": "pdf-81",
        "title": "Quanto Mais Melhor",
        "description": "Gincana competitiva de coleta que estimula a rapidez na organização de recursos espaciais.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": ["Bambolês", "Cones ou objetos variados"],
        "steps": [
          "Cada criança tem seu bambolê com cones dentro. O objetivo é 'roubar' dos vizinhos.",
          "Ao sinal, corra até as bases dos colegas, pegue um item e leve para o seu bambolê.",
          "É proibido defender a própria base; o jogo foca apenas no ataque veloz aos outros itens.",
          "Ganha quem conseguir acumular o maior número de objetos ao sinal de encerramento do Monitor."
        ]
      },
      {
        "id": "pdf-83",
        "title": "Guerra de Cones",
        "description": "Desafio de agilidade e estratégia onde participantes buscam reunir itens na base em tempo recorde.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": ["Bambolês", "Cones"],
        "steps": [
          "Coloque um bambolê central com cones e posicione bases individuais nos cantos da quadra.",
          "Os participantes correm ao centro para buscar um item por vez para sua base.",
          "Pode-se 'pescar' itens das bases adversárias enquanto eles buscam novos no centro.",
          "O primeiro a completar sua cota de itens estipulada vence o grande desafio da rodada."
        ]
      },
      {
        "id": "pdf-84",
        "title": "Pega-Alerta Temático",
        "description": "Jogo de perseguição mútua onde o tema escolhido pelo Monitor define os próximos alvos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": ["Fitas coloridas"],
        "steps": [
          "Escolha um tema e peça que todos escolham secretamente um item desse universo.",
          "O Monitor grita um item temático e quem o selecionou torna-se o pegador imediato.",
          "O objetivo é buscar as fitas presas na cintura dos colegas para capturar novas vidas.",
          "O último jogador a manter sua fita original ganha e define o próximo tema inspirador."
        ]
      },
      {
        "id": "pdf-86",
        "title": "Pique-Cai-Cai",
        "description": "Brincadeira bem-humorada onde os 'caídos' dependem do resgate unido dos amigos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "O pegador toca os fugitivos que devem se deitar no chão onde foram capturados.",
          "Para salvar um amigo, dois jogadores livres devem carregá-lo até a base neutra.",
          "Durante a operação de resgate, o pegador não pode tocar na equipe de socorro.",
          "Uma vez na base, o jogador é curado e pode retornar livremente à perseguição ativa."
        ]
      },
      {
        "id": "pdf-89",
        "title": "Pega-Pregador",
        "description": "Jogo de agilidade e 'vidas' móveis que exige rapidez e disputas francas de sorte.",
        "duration": "20-25 min",
        "participants": "6+",
        "age": "Livre",
        "materials": ["Pregadores de roupa"],
        "steps": [
          "Fixe vários pregadores na roupa como vidas. Ao sinal, inicie a perseguição geral.",
          "Quem capturar alguém deve desafiar o colega imediatamente para uma rodada de Jo-ken-pô.",
          "O vencedor da disputa leva um dos pregadores do adversário como troféu de rodada.",
          "Se alguém perder todas as vidas, pode solicitar ajuda ou aguardar o reinício da fase."
        ]
      },
      {
        "id": "pdf-93",
        "title": "Pique Trave Distante",
        "description": "Teste de fôlego e velocidade onde os pontos de segurança estão sempre cruzando o campo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "As traves do gol são os locais de segurança (pique) onde o fugitivo pode se abrigar.",
          "Ao sair de uma trave, o participante só pode se salvar na trave oposta da quadra.",
          "O pegador tem o campo aberto para tentar interceptar os viajantes durante a travessia.",
          "Troque o pegador sempre que houver uma captura bem-sucedida no caminho central."
        ]
      },
      {
        "id": "pdf-95",
        "title": "Pega-Pega Corrente",
        "description": "Clássico jogo onde a captura funde participantes em uma única rede de perseguição crescente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Um participante começa como o pegador inicial da rodada.",
          "Quem ele capturar dá a mão a ele, formando uma pequena corrente de dois.",
          "A corrente deve permanecer unida pelas mãos enquanto tenta cercar os outros fugitivos.",
          "O jogo acaba quando o último sobrevivente for integrado à grande corrente final."
        ]
      },
      {
        "id": "pdf-100",
        "title": "Chinelinho",
        "description": "Competição de equipe baseada em disputas individuais por um objeto central.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": ["Um chinelo ou objeto leve"],
        "steps": [
          "Divida dois grupos numerados atrás de linhas paralelas distantes.",
          "O Monitor grita um número e as duas crianças correspondentes correm para o centro.",
          "O objetivo é pegar o chinelo e voltar para sua base sem ser tocado pelo adversário.",
          "Quem trouxer o chinelo em segurança marca ponto; se for tocado, ninguém pontua."
        ]
      },
      {
        "id": "pdf-107",
        "title": "Polícia e Ladrão",
        "description": "Pega-pega de equipe com regras de prisão e resgate que geram dinâmicas longas e divertidas.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em policiais e ladrões. Os policiais contam enquanto os ladrões se escondem.",
          "Policiais buscam os ladrões e, ao encontrá-los, devem persegui-los até o toque.",
          "O ladrão pego vai para a 'prisão' e só pode ser liberto pelo toque de um comparsa livre.",
          "A rodada termina com a captura de todos os fugitivos ou o esgotamento do tempo limite."
        ]
      },
      {
        "id": "pdf-110",
        "title": "Rua e Avenida",
        "description": "Labirinto dinâmico onde as passagens abrem e fecham conforme os comandos do Monitor.",
        "duration": "15-20 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O grupo forma fileiras de mãos dadas ('Avenidas'). Gato e Rato correm pelos corredores.",
          "Monitor grita 'Rua!' e as crianças mudam de orientação, alterando o trajeto do labirinto.",
          "Os corredores devem se adaptar instantaneamente às novas rotas abertas ou fechadas.",
          "Troque o Gato e o Rato quando houver captura ou após algum tempo de esforço intenso."
        ]
      },
      {
        "id": "pdf-112",
        "title": "Mãe da Rua",
        "description": "Desafio de travessia lateral onde os participantes tentam cruzar uma linha defendida.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Um participante fica sobre a linha central da quadra (a Mãe da Rua) e não pode sair dela.",
          "Os demais devem atravessar de um lado para o outro fugindo do toque do guardião central.",
          "Quem for pego torna-se ajudante sobre a linha, aumentando a barreira contra os outros.",
          "O último a ser capturado vence e começa como o guardião principal na próxima partida."
        ]
      },
      {
        "id": "pdf-113",
        "title": "Rouba Bandeira",
        "description": "Teste clássico de estratégia, invasão e defesa focado na captura de um totem adversário.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": ["Duas bandeiras ou totens"],
        "steps": [
          "Divida dois times em seus campos. Cada um possui uma bandeira ao fundo da quadra.",
          "Infiltre-se no campo inimigo para capturar a bandeira sem ser tocado pelo defensor.",
          "Ao ser tocado no campo adversário, o jogador fica 'colado' e deve esperar resgate dos amigos.",
          "Vence quem trouxer a bandeira rival para sua base ou salvar todos os colegas capturados."
        ]
      },
      {
        "id": "pdf-114",
        "title": "Pegador Trocado",
        "description": "Perseguição circular com troca de papéis baseada no posicionamento tático em duplas.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "As duplas sentam-se espalhadas. Um fugitivo e um pegador iniciam a dinâmica em pé.",
          "Para se salvar, o fugitivo senta ao lado de uma dupla, tornando o colega oposto o novo alvo.",
          "Aquele que foi excluído da dupla deve levantar instantaneamente e fugir do novo pegador.",
          "Trocas de papéis ocorrem em segundos, exigindo prontidão física e foco absoluto de todos."
        ]
      },
      {
        "id": "pdf-119",
        "title": "Pegador Inteligente",
        "description": "Disputa baseada em cálculos e paridade, onde a resposta dita quem caça e quem foge.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "Divida os times em 'Par' e 'Ímpar', posicionados frente a frente em linhas distantes.",
          "O Monitor grita um número ou faz uma conta rápida (ex: '7 + 3!').",
          "Se o resultado for Par, o time par persegue. Se for Ímpar, o time ímpar caça os rivais.",
          "As equipes devem processar os dados rapidamente para saber sua função antes de serem capturadas."
        ]
      },
      {
        "id": "pdf-126",
        "title": "Nunca 3",
        "description": "Pega-pega de fluidez constante onde alinhamentos de trios forçam trocas imediatas de corredores.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Forme duplas em fila espalhadas. Gato e Rato correm pelo espaço livre.",
          "O Rato salva-se posicionando-se atrás de uma das duplas, criando um trio proibido.",
          "O primeiro componente daquela fila é 'expulso' e torna-se o novo alvo a ser caçado.",
          "A dinâmica exige rapidez na troca de posição e leitura de jogo para evitar a captura."
        ]
      },
      {
        "id": "pdf-131",
        "title": "Escape Express",
        "description": "Mini-enigma temático onde a solução de pistas é o único caminho para a liberdade.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": ["Papel e caneta", "Enigmas"],
        "steps": [
          "Elabore uma pequena história de mistério onde o grupo está 'preso' em uma área delimitada.",
          "Esconda pistas e cartões com charadas que as crianças devem resolver em conjunto.",
          "As soluções levam a um código final ou a um objeto que 'abre' a porta da liberdade.",
          "Estimula a lógica, a leitura compartilhada e o trabalho sob pressão do tempo limitado."
        ]
      },
      {
        "id": "pdf-133",
        "title": "Trunfo Real",
        "description": "Batalha de atributos onde cards personalizados definem o poder de cada jogador no campo.",
        "duration": "20-30 min",
        "participants": "6+",
        "age": "Livre",
        "materials": ["Cartas personalizadas"],
        "steps": [
          "Cada integrante recebe seu card com valores em FORÇA, AGILIDADE e INTELIGÊNCIA.",
          "Ao capturar alguém, o pegador escolhe um atributo para duelar com o oponente.",
          "O vencedor leva a carta do perdedor; quem ficar sem cartas pode ser resgatado ou trocado.",
          "Inclua itens especiais e uma 'Loja' de itens mágicos para tornar a experiência mais imersiva."
        ]
      },
      {
        "id": "pdf-136",
        "title": "Protegendo o Rei",
        "description": "Jogo de defesa tática onde um líder deve ser guardado por seu exército fiel.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": ["Marcadores de vida"],
        "steps": [
          "Divida em 'Protetores' e 'Inimigos'. O Rei ou Rainha fica protegido no centro da base.",
          "Cada participante tem 3 vidas que perde ao ser tocado; o Rei tem apenas uma vida vital.",
          "O objetivo dos Inimigos é derrubar a coroa, enquanto Protetores devem eliminar os invasores.",
          "Construa uma 'fortaleza' com cones ou bambolês para delimitar a área real de proteção."
        ]
      },
      {
        "id": "pdf-138",
        "title": "Passaporte",
        "description": "Busca exploratória por selos coloridos enquanto se evita o fiscal 'tira-visto' no percurso.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": ["Cartões de países", "Giz colorido"],
        "steps": [
          "Cada criança recebe um cartão ('Passaporte') com campos para selos de 5 países diferentes.",
          "Elas devem encontrar as estações de pintura escondidas para carimbar as cores de cada país.",
          "O Monitor age como o 'Tira-Visto', que tenta riscar selos já obtidos com um giz preto.",
          "Ganha quem conseguir todos os vistes coloridos sem sofrer a penalidade do fiscal pegador."
        ]
      }
    ]
  },
  {
    id: "bola",
    label: "Jogos com Bola",
    icon: RiFlashlightLine,
    color: "#5856D6",
    bg: "#F2F2F7",
    description: "Tudo que envolve bola e gols.",
    games: [
      {
        "id": "pdf-5",
        "title": "Voo da Estrela",
        "description": "Competição de corrida e agilidade onde equipes lutam para capturar o tesouro central.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": ["Cone", "Bola"],
        "steps": [
          "Forme colunas de equipes em raios de uma estrela com a bola no centro sobre um cone.",
          "Os primeiros correm ao redor de todas as bases e entram no túnel de pernas dos colegas.",
          "O objetivo é ser o primeiro a emergir do túnel e capturar a bola no centro da estrela.",
          "Soma pontos para a equipe e rotaciona para o próximo integrante da fila de espera."
        ]
      },
      {
        "id": "pdf-11",
        "title": "Bombardeio de Bolas",
        "description": "Exercício de precisão onde times tentam empurrar um alvo central usando arremessos precisos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": ["1 Bola grande", "Múltiplas bolas menores"],
        "steps": [
          "Coloque a bola grande ao centro e divida o grupo em duas linhas de fundo adversárias.",
          "Distribua as bolas menores e peça que acertem a bola grande com força e precisão.",
          "A equipe que fizer o alvo cruzar a linha de fundo do adversário primeiro vence o round.",
          "Trabalha a pontaria, a força coordenada e o senso de urgência competitiva do grupo."
        ]
      },
      {
        "id": "pdf-19",
        "title": "Túnel de Bolas",
        "description": "Gincana de revezamento que exige coordenação e sincronia para o transporte da esfera.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": ["2 Bolas"],
        "steps": [
          "Divida em colunas. Passe a bola por cima da cabeça até chegar ao final da fila humana.",
          "O seguinte passa por baixo das pernas, alternando sempre o padrão até o último integrante.",
          "Quem recebe a bola por último corre para a frente e reinicia o ciclo de passagem.",
          "Vence a equipe que completar a rotação de todos os seus membros de volta à posição inicial."
        ]
      },
      {
        "id": "pdf-41",
        "title": "Partes do Corpo",
        "description": "Jogo de reflexos rápidos onde o comando vocal dita a ação até o desafio final pela bola.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": ["Bolas leves"],
        "steps": [
          "Coloque crianças em duplas frente a frente com uma bola no chão centralizada entre elas.",
          "O Monitor grita partes do corpo ('Orelha!', 'Joelho!') e as crianças tocam no local citado.",
          "Ao grito de 'BOLA!', devem tentar agarrar o objeto antes de seu parceiro de dupla.",
          "Excelente para treinar o foco, a prontidão de reflexo e a agilidade motora das crianças."
        ]
      },
      {
        "id": "pdf-55",
        "title": "Caça às Bolas de Papel",
        "description": "Atividade de busca que transforma o espaço em um campo de tesouros escondidos e frágeis.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": ["Bolinhas de papel"],
        "steps": [
          "Esconda diversas bolinhas de papel pelo ambiente sem que os participantes percebam.",
          "As crianças devem explorar o local e coletar o maior número de 'tesouros' encontrado.",
          "Pode-se cronometrar para criar um clima de gincana ou deixar a busca ser exploratória.",
          "No final, as bolinhas podem ser usadas para uma pequena batalha lúdica de arremessos leves."
        ]
      },
      {
        "id": "pdf-57",
        "title": "Abraço Protetor",
        "description": "Pega-pega com bola que utiliza o contato físico amigável como porto seguro temporário.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": ["Uma bola macia"],
        "steps": [
          "O pegador usa a bola para capturar, encostando-a suavemente no tronco dos fugitivos.",
          "Para se salvar, o fugitivo deve abraçar um colega próximo antes de sofrer o toque da bola.",
          "O abraço de segurança dura 5 segundos, forçando o movimento constante de todo o grupo.",
          "Trabalha a percepção espacial, a cooperação rápida e a afetividade positiva no jogo."
        ]
      },
      {
        "id": "pdf-59",
        "title": "Túnel Dinâmico",
        "description": "Gincana de agilidade onde a bola percorre um caminho de pontes humanas em movimento.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": ["Duas bolas"],
        "steps": [
          "Equipes deitadas de bruços em fileira. O último levanta e pula sobre os colegas até a frente.",
          "Ao chegar, ele rola a bola por baixo e todos devem levantar o quadril em posição de ponte.",
          "A bola deve atravessar o túnel sem interrupções até que o novo último a capture.",
          "Ganha a equipe em que todos os membros completarem o ciclo de passagem e retorno."
        ]
      },
      {
        "id": "pdf-66",
        "title": "Alerta",
        "description": "O jogador joga a bola para cima e grita o nome de alguém, forçando paradas estratégicas no campo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": ["Uma bola"],
        "steps": [
          "O mestre joga a bola e grita um nome. A pessoa citada deve pegar a bola e gritar 'Alerta!'.",
          "Todos param onde estão. O jogador com a bola dá 3 passos e tenta queimar o colega mais próximo.",
          "Se acertar, a vítima sai temporariamente; se errar, o próprio arremessador paga o mico.",
          "Estimula o reflexo de captura, a pontaria e a agilidade nas reações imediatas ao chamado."
        ]
      },
      {
        "id": "pdf-69",
        "title": "Arremesso de Bambolê",
        "description": "Variação do jogo de argolas onde o objetivo é cercar o colega com o aro lançado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": ["Bambolês"],
        "steps": [
          "Um participante age como o 'alvo' fixo a uma distância segura dos arremessadores.",
          "Cada jogador tenta lançar seu bambolê de modo que ele encaixe no corpo do colega.",
          "Cada encaixe perfeito rende pontos; ganha quem demonstrar melhor controle de voo e mira.",
          "Incentive trocas frequentes de alvo para que todos treinem a mira de diferentes ângulos."
        ]
      },
      {
        "id": "pdf-72",
        "title": "Queimada do Rei",
        "description": "Jogo de equipe estratégico onde a vitória depende da proteção absoluta do líder escolhido.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": ["Umas ou mais bolas"],
        "steps": [
          "Divida times com um Rei secreto. Quem for queimado ajoelha e aguarda resgate por bola.",
          "O objetivo é identificar e queimar o Rei do time adversário para encerrar a partida.",
          "Reis podem ser protegidos fisicamente pelos súditos que servem como escudos humanos.",
          "Promove o espírito de equipe, sacrifício coletivo e o desenvolvimento tático em grupo."
        ]
      },
      {
        "id": "pdf-91",
        "title": "A Caça e o Caçador",
        "description": "O Monitor determina um fugitivo enquanto o grupo tenta acioná-lo através de passes rápidos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": ["Bola"],
        "steps": [
          "Escolha um fugitivo veloz. Os outros são caçadores que não podem correr com a bola na mão.",
          "Os caçadores trocam passes para cercar a caça e tentar queimá-la em um momento oportuno.",
          "O fugitivo deve ser ágil nos desvios e movimentos para não ser acuado pelo grupo.",
          "Troque a caça a cada captura para manter a energia alta e o desafio constante para todos."
        ]
      },
      {
        "id": "pdf-92",
        "title": "Jogo dos Números",
        "description": "Desafio de prontidão onde números chamados competem pela posse da bola central e finalização.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": ["Bolas (Basquete ou Futebol)"],
        "steps": [
          "Times numerados sentados. O Monitor grita um número e joga a bola ao centro da quadra.",
          "Os dois jogadores com este número duelam pela bola e tentam marcar gol ou cesta.",
          "Soma-se ponto para o time do vencedor da disputa direta em cada rodada concluída.",
          "Variação: O Monitor pode chamar múltiplos números para criar pequenos jogos coletivos súbitos."
        ]
      },
      {
        "id": "pdf-97",
        "title": "7 Caquinhos",
        "description": "Teste de mira e proteção onde reconstruir o alvo é o principal desafio sob fogo inimigo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": ["7 Pedrinhas ou cacos", "Bola"],
        "steps": [
          "Derrube a pilha de 7 cacos com a bola. O time que derrubou deve tentar remontá-la.",
          "Enquanto montam, o outro time tenta queimá-los com a bola; quem for pego para de ajudar.",
          "Vence se a pilha for reconstruída totalmente antes de todos os membros serem eliminados.",
          "Trabalha a persistência, o trabalho de cobertura em equipe e o controle sob pressão constante."
        ]
      },
      {
        "id": "pdf-101",
        "title": "Artilharia",
        "description": "Batalha de precisão onde derrubar a base inimiga é apenas o início do desafio de reconstrução.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": ["Garrafas pet", "Bolas"],
        "steps": [
          "Cada time guarda uma garrafa pet no fundo de seu campo. Acerte a garrafa rival com a bola.",
          "Se a garrafa cair, o time dono da base deve reerguê-la sofrendo ataques de queimada.",
          "Ganha ponto quem reerguer primeiro ou eliminar todos os adversários envolvidos na ação.",
          "Ótima atividade para treinar o arremesso de longa distância e o foco coletivo em objetivos."
        ]
      },
      {
        "id": "pdf-103",
        "title": "Vôlei com Lençol",
        "description": "Variação cooperativa do vôlei onde a bola é lançada e capturada usando tecidos em sincronia.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": ["Bola leve", "Dois lençóis grandes"],
        "steps": [
          "Times seguram as pontas de um lençol e devem lançar a bola apenas com o balanço dele.",
          "O adversário deve amortecer a queda e capturar a bola com seu lençol sem deixá-la cair.",
          "Exige comunicação constante e movimentos perfeitamente sincronizados de todos os integrantes.",
          "Dê bônus para sequências longas de trocas sem quedas, premiando a cooperação impecável."
        ]
      },
      {
        "id": "pdf-104",
        "title": "Rede Humana",
        "description": "Desafio dinâmico onde uma barreira viva de jogadores tenta interceptar passes aéreos entre times.",
        "duration": "15-20 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": ["Uma bola"],
        "steps": [
          "Alunos formam uma 'Rede' na linha central, podendo se mover lateralmente mas sem cruzar.",
          "Dois times em cada lado trocam passes enviando a bola por cima dessa barreira viva.",
          "Se a Rede tocar ou capturar a bola, troca de lugar com o time que realizou o lançamento.",
          "Estimula a precisão do passe alto e a prontidão defensiva da barreira central em quadra."
        ]
      },
      {
        "id": "pdf-105",
        "title": "Hand-Fut",
        "description": "Esporte híbrido que combina a condução manual do handebol com a finalização podálica do futebol.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": ["Uma bola de futebol"],
        "steps": [
          "Mova a bola apenas com as mãos como no handebol tradicional, com limite de 3 passos.",
          "A regra de ouro é que o gol só vale se for feito com chutes ou cabeçadas certeiras.",
          "Goleiros podem defender de qualquer forma, incentivando táticas mistas de ataque.",
          "Desenvolve a criatividade motora ao alternar rapidamente entre controle manual e finalização."
        ]
      },
      {
        "id": "pdf-108",
        "title": "Bruxa / Caçador",
        "description": "Batalha de campos onde a mira define quem permanece vivo na disputa por territórios.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": ["Bola de queimada"],
        "steps": [
          "Divida em dois campos. O mestre joga a bola tentando queimar qualquer um do rival.",
          "O jogador que for atingido e não segurar a bola vai para a reserva do campo inimigo.",
          "Na reserva, o participante pode apenas recuperar bolas mas não tem o direito de queimar.",
          "Vence o time que eliminar todos os oponentes transformando-os em reservas inativos."
        ]
      },
      {
        "id": "pdf-115",
        "title": "Sete Passes de Ouro",
        "description": "Jogo de posse de bola e estratégia onde a finalização exige uma sequência perfeita prévia.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": ["Uma bola de handebol"],
        "steps": [
          "O objetivo é marcar gol, mas antes o time deve realizar exatamente 7 passes válidos.",
          "Se a bola cair ou for interceptada, a contagem de passes zera para o time atual.",
          "Incentiva a movimentação constante, a visão de jogo e o desprendimento individual.",
          "O Monitor deve gritar a contagem em voz alta para manter o ritmo e a pressão da disputa."
        ]
      },
      {
        "id": "pdf-118",
        "title": "Basquete 21",
        "description": "Desafio de arremessos rápido focado na precisão e no aproveitamento tático do rebote.",
        "duration": "20-25 min",
        "participants": "3+",
        "age": "9+ anos",
        "materials": ["Bola de basquete", "Cesta"],
        "steps": [
          "Arremesse da linha de lance livre (2 pts). Se errar, o próximo deve pegar o rebote.",
          "O segundo deve arremessar exatamente de onde pegou a bola, valendo 1 ponto secundário.",
          "Quem marcar ponto continua arremessando até o primeiro erro ou limite estipulado.",
          "Vence quem acumular exatamente 21 pontos primeiro, exigindo controle nas rodadas finais."
        ]
      },
      {
        "id": "pdf-120",
        "title": "Jogo da Velha Humano",
        "description": "Gincana de velocidade onde equipes tentam alinhar 3 bolas em um tabuleiro gigante de bambolês.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": ["9 Bambolês", "10 bolas coloridas"],
        "steps": [
          "Disponha bambolês 3x3. Equipes correm para deixar uma bola por vez em uma estação.",
          "Ao voltar, batem na mão do colega que sai correndo com a próxima bola do respectivo time.",
          "Vence quem completar o alinhamento clássico (linha, coluna ou diagonal) primeiro.",
          "Trabalha o pensamento estratégico sob pressão física e o trabalho em equipe sincronizado."
        ]
      },
      {
        "id": "pdf-122",
        "title": "Caranguejo-Gol",
        "description": "Desafio físico intenso de força onde o futebol é disputado em postura corporal invertida.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": ["Uma bola"],
        "steps": [
          "Jogue futebol mantendo quatro apoios com o peito para cima (posição de caranguejo).",
          "O quadril não pode tocar o chão durante deslocamentos ou chutes poderosos ao gol.",
          "Gols só são válidos se feitos nesta postura desafiadora que exige força abdominal.",
          "Excelente para fortalecimento muscular global, equilíbrio e diversão fora do comum."
        ]
      },
      {
        "id": "pdf-127",
        "title": "Base Sete",
        "description": "Corrida inspirada no beisebol que integra o uso de bambolês como bases de segurança e pontos.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": ["7 bambolês", "Uma bola"],
        "steps": [
          "O batedor chuta a bola e deve percorrer os 7 bambolês espalhados no campo aberto.",
          "A defesa deve recuperar a bola e entregá-la ao centro antes do batedor completar a rota.",
          "Cada base alcançada com segurança vale 1 ponto para o time de ataque daquela rodada.",
          "Se o lançador central receber a bola com o batedor entre bases, este é eliminado da vez."
        ]
      },
      {
        "id": "pdf-128",
        "title": "Super Dodgeball",
        "description": "Versão épica e estratégica de queimada com múltiplas bolas e regras especiais de resgate coletivo.",
        "duration": "20-30 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": ["3 a 5 bolas"],
        "steps": [
          "Múltiplas bolas iniciam no centro. Ao sinal, todos correm para garantir a posse inicial.",
          "Agarre a bola no ar para 'desqueimar' um amigo do seu time, mantendo o grupo unido.",
          "Acertar a cesta de basquete adversária revive instantaneamente todos os colegas eliminados.",
          "Fomenta a visão periférica constante, a proteção mútua e a estratégia de mira diversificada."
        ]
      },
      {
        "id": "pdf-129",
        "title": "Reação Relâmpago",
        "description": "Exercício de prontidão focado no controle motor onde o Monitor utiliza fintas e blefes.",
        "duration": "10-15 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": ["Uma bola leve"],
        "steps": [
          "Todos sentam com as mãos cruzadas no peito. O Monitor simula lançamentos diretos.",
          "Se o Monitor fingir e você descruzar as mãos, perde-se um ponto simbólico de atenção.",
          "Ao lançar realmente, o participante deve capturar a bola com reflexos perfeitos no ar.",
          "Ótimo para foco mental, controle de impulsos e dias de atividades em espaços reduzidos."
        ]
      },
      {
        "id": "pdf-130",
        "title": "Vôlei-Pega",
        "description": "Fusão frenética de voleibol e pega-pega, onde erros em quadra geram perseguições fatais.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": ["Bola de vôlei", "Rede"],
        "steps": [
          "Inicie o vôlei. Quando a bola cair, o time pontuador vira pegador e os outros fogem.",
          "A equipe que errou deve cruzar a linha de segurança ao fundo antes de serem tocados.",
          "Cada captura durante a fuga rende um bônus de pontuação para o time vencedor do round.",
          "Reinicie o vôlei imediatamente após a fase de captura para manter o dinamismo ininterrupto."
        ]
      },
      {
        "id": "pdf-134",
        "title": "Caçador de Cones",
        "description": "Gincana de busca e resgate com temas de aventura, onde fugir do caçador exige foco total.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "Livre",
        "materials": ["Cones coloridos", "Bambolês"],
        "steps": [
          "Bambolês espalhados são as bases que devem ser preenchidas com cones da mesma cor.",
          "O Caçador persegue quem transporta os itens; quem for pego vai para o banco de espera.",
          "Colegas livres podem resgatar os presos pelo toque, mantendo o fluxo de jogo vivo.",
          "Vence se todos os cones forem organizados ou se o Caçador capturar todo o grupo unido."
        ]
      },
      {
        "id": "pdf-135",
        "title": "Defendendo a Torre",
        "description": "Duas equipes defendem seu cone central enquanto tentam derrubar o cone rival usando a bola.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": ["Cones", "Bola"],
        "steps": [
          "Posicione um cone no centro da base de cada time. Defensores protegem e atacantes miram.",
          "O objetivo é derrubar o cone oponente com arremessos precisos da bola de jogo.",
          "Só é permitido atacar enquanto tiver a posse; ao perder, recue para defender sua torre.",
          "Trabalha a pontaria, a organização defensiva e a rapidez nas transições entre ataque e defesa."
        ]
      }
    ]
  },
  {
    id: "equipe",
    label: "Desafios & Cooperação",
    icon: RiHandHeartLine,
    color: "#34C759",
    bg: "#EBF9EE",
    description: "Gincanas e atividades em time.",
    games: [
      {
        "id": "pdf-6",
        "title": "Busca por Abrigo",
        "description": "Jogo de agilidade e exclusão lúdica onde o foco é garantir seu lugar seguro.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": ["Bambolês (um a menos que o grupo)"],
        "steps": [
          "Espalhe bambolês pelo chão. Todos iniciam dentro de um abrigo, exceto um participante.",
          "Ao sinal, todos trocam de abrigo. Quem ficar sem assume o papel de desafiante central.",
          "O Monitor pode remover um bambolê por rodada para aumentar gradualmente a dificuldade.",
          "Semelhante à dança das cadeiras, mas focado na corrida veloz entre pontos de segurança."
        ]
      },
      {
        "id": "pdf-18",
        "title": "Batalha de Balões",
        "description": "Gincana agitada que exige cuidado ao proteger sua cauda e atacar a dos adversários.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "5+ anos",
        "materials": ["Bexigas", "Barbante"],
        "steps": [
          "Amarre um balão inflado ao calcanhar de cada participante usando um barbante curto.",
          "O objetivo é estourar o balão dos rivais pisando neles enquanto protege o seu próprio.",
          "O jogo encerra quando o último balão remanescente for identificado em campo.",
          "Monitor deve mediar para evitar esbarrões pesados ou quedas, mantendo o clima festivo."
        ]
      },
      {
        "id": "pdf-60",
        "title": "Batalha Naval às Cegas",
        "description": "Estratégia e arremesso onde a comunicação e a sorte guiam os ataques sobre a barreira.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": ["Bolinhas leves", "Lençol para barreira"],
        "steps": [
          "Divida a quadra com um lençol alto. Times não se veem e posicionam seus 'navios'.",
          "Lance as bolinhas por cima esperando atingir um colega rival oculto do outro lado.",
          "Quem for atingido deve gritar 'Fui ao fundo!' e sentar-se, tornando-se obstáculo físico.",
          "Ganha a frota que conseguir afundar todos os navios inimigos primeiro com disparos precisos."
        ]
      },
      {
        "id": "pdf-65",
        "title": "O Sapato Perdido",
        "description": "Gincana caótica que testa a organização sob pressão e o rápido reconhecimento de pertences.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Todos deixam um calçado em uma pilha central misturada pelo Monitor na frente do grupo.",
          "Ao sinal, corra até a pilha, encontre seu sapato, calce-o corretamente e volte à base.",
          "Em equipes, a primeira que tiver todos os membros calçados e sentados pontua na gincana.",
          "Atividade que gera muitas risadas e trabalha a paciência e a observação detalhada."
        ]
      },
      {
        "id": "pdf-85",
        "title": "Genius Corporal",
        "description": "Jogo de memória e ritmo inspirado no clássico eletrônico, usando saltos e gestos físicos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O Monitor cria uma sequência de movimentos (ex: pular, agachar, rodar e bater palmas).",
          "Os participantes devem repetir a sequência exatamente na mesma ordem proposta inicialmente.",
          "A cada nova rodada bem-sucedida, um movimento inédito é somado à lista crescente.",
          "Foca na memória sequencial, rítmica e na coordenação motora de forma desafiadora."
        ]
      },
      {
        "id": "pdf-68",
        "title": "Duelo de Caminhos",
        "description": "Agilidade e sorte utilizando bambolês como um tabuleiro humano para disputas de Jo-ken-pô.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": ["10 Bambolês em linha"],
        "steps": [
          "Pule de bambolê em bambolê ao sinal. Ao encontrar um adversário, pare para o duelo.",
          "Dispute o Jo-ken-pô: o perdedor sai e o vencedor avança no caminho conquistado.",
          "O time que perdeu deve enviar um novo membro imediatamente para interceptar o rival.",
          "A vitória é da equipe que conseguir atravessar um de seus membros até a base oposta."
        ]
      },
      {
        "id": "pdf-94",
        "title": "Barra Manteiga Estratégica",
        "description": "Reflexo e velocidade onde o toque na mão inicia uma perseguição explosiva pela quadra.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Times em linhas de fundo. Um desafiante vai até a linha inimiga com mãos estendidas.",
          "Ao bater forte na mão de alguém, o desafiante corre de volta enquanto o outro persegue.",
          "Se capturado antes da linha, o desafiante muda de time; se escapar, o perseguidor muda.",
          "Excelente para explosão física, tempo de reação e integração mútua entre os grupos."
        ]
      },
      {
        "id": "pdf-96",
        "title": "Duelo de Corações",
        "description": "Gincana de batalha baseada na hierarquia onde proteger o líder é o objetivo místico.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": ["Identificador para o Rei"],
        "steps": [
          "Escolha um Rei por time. Duelistas se enfrentam no centro usando Jo-ken-pô rápido.",
          "O Rei tem poderes extras e retira mais vidas dos adversários em cada vitória obtida.",
          "Vence quem derrubar o Rei inimigo ou eliminar todos os seus guerreiros de campo.",
          "Promove a liderança, a estratégia de proteção e o engajamento lúdico competitivo."
        ]
      },
      {
        "id": "pdf-109",
        "title": "Stop Express",
        "description": "Gincana intelectual que combina o jogo de palavras com revezamento físico agitado.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": ["Papel e caneta"],
        "steps": [
          "O Escritor fica na base. Corredores devem ir até ele dizer uma palavra válida por letra.",
          "Apenas um pode correr por vez; o próximo só sai após a batida de mão do colega que voltou.",
          "Preencha todas as categorias (Nome, Cor, Fruta etc.) com a letra ditada pelo Monitor.",
          "Ganha a equipe que finalizar o preenchimento correto primeiro e gritar 'Stop!' alto."
        ]
      },
      {
        "id": "pdf-116",
        "title": "Passos Unidos",
        "description": "Exercício de sincronia onde duplas unidas pelos tornozelos devem se mover juntas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": ["Fitas ou barbantes"],
        "steps": [
          "A dupla tem os tornozelos vizinhos amarrados. Devem caminhar sincronizados até o alvo.",
          "Inicie com passos lentos para criar ritmo antes de tentar correr na gincana de revelação.",
          "Se a união desatar ou a dupla cair, deve parar e se recompor no local exato.",
          "Estimula a comunicação verbal direta, a confiança mútua e a coordenação compartilhada."
        ]
      },
      {
        "id": "pdf-117",
        "title": "Caranguejo Cooperativo",
        "description": "Desafio exigente que testa a resistência e a sincronia motora em fileira humana.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "Forme uma coluna em posição de caranguejo (abdômen para cima, mãos e pés no chão).",
          "O jogador da frente apóia-se no colega atrás, criando uma engrenagem viva e unida.",
          "A fila deve se mover em harmonia até a chegada sem romper os elos da corrente.",
          "Trabalha a força dos membros, o controle rítmico e a paciência com o tempo do grupo."
        ]
      },
      {
        "id": "pdf-124",
        "title": "O Mistério de Mango",
        "description": "Jogo de adivinhação e mímica que recompensa o conhecimento e sorte punitiva lúdica.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Monitor dá dicas sobre categorias ocultas e equipes competem para adivinhar o termo.",
          "Se a palavra 'Mango' surgir no sorteio, o líder atual escolhe um mico para o rival.",
          "A equipe com menos erros acumula pontos que podem ser trocados por bônus de dicas.",
          "Finalize com apresentações artísticas divertidas dos times que pagaram micos nas rodadas."
        ]
      }
    ]
  },
  {
    id: "ludico_sensorial",
    label: "Lúdicos & Sensoriais",
    icon: RiTentLine,
    color: "#FFCC00",
    bg: "#FFF9E5",
    description: "Memória, buscas e mistérios.",
    games: [
      {
        "id": "pdf-17",
        "title": "Cadeiras Solidárias",
        "description": "Versão cooperativa da dança das cadeiras focada no apoio mútuo e inclusão total.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": ["Cadeiras"],
        "steps": [
          "Toque a música e retire cadeiras no silêncio, mas desafie todos a sentarem de alguma forma.",
          "Pode sentar no colo, dividir o assento ou se apoiar para que ninguém fique de pé.",
          "O objetivo é ver até onde o grupo consegue se acomodar em pouquíssimas cadeiras restantes.",
          "Incentiva a criatividade coletiva, a empatia e o contato físico respeitoso no grupo."
        ]
      },
      {
        "id": "pdf-106",
        "title": "Banquinho do Saber",
        "description": "Jogo de vocabulário e rapidez mental onde participantes competem contra o cronômetro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": ["Cadeira", "Cronômetro"],
        "steps": [
          "Diga uma palavra do tema sorteado (ex: Frutas) em menos de 5 segundos de pressão.",
          "Se falhar no tempo ou repetir, deve sair do banquinho e aguardar a próxima rodada básica.",
          "O mestre do vocabulário é aquele que resistir às categorias mais complexas e velozes.",
          "Aplauda as respostas inusitadas e incentive o aprendizado de novas palavras entre todos."
        ]
      },
      {
        "id": "pdf-111",
        "title": "Salada de Memória",
        "description": "Exercício de memória cumulativa onde o grupo constrói uma lista gigante sem erros.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O primeiro diz um item. O segundo repete e adiciona um novo, e assim por diante.",
          "A sequência cresce e qualquer erro reinicia o tema para o próximo participante da fila.",
          "Tente bater o recorde de itens memorizados do grupo em cada tentativa realizada.",
          "Fomenta a concentração plena, a escuta ativa e o desenvolvimento da memória lógica."
        ]
      },
      {
        "id": "pdf-123",
        "title": "Gato e Rato Cego",
        "description": "Duelo auditivo emocionante onde participantes vendados se encontram por sinais sonoros.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": ["Vendas"],
        "steps": [
          "O Cão late e o Gato mia. Ambos vendados tentam se encontrar no centro do círculo calmo.",
          "O Cão deve caçar baseado estritamente na direção e volume dos sons emitidos pelo Gato.",
          "O Gato deve ser silencioso e astuto para enganar a audição aguçada de seu perseguidor.",
          "Garanta silêncio absoluto dos observadores para não interferir na percepção dos jogadores."
        ]
      },
      {
        "id": "pdf-125",
        "title": "Memória Humana",
        "description": "Versão gigante do jogo de pares onde os próprios participantes são as peças ocultas.",
        "duration": "20-25 min",
        "participants": "10+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Duplas combinam gestos idênticos em segredo. Ao serem tocados, devem realizar a ação.",
          "O jogador tenta encontrar os pares espalhados pelo campo através da memória visual.",
          "Acerte o par para marcar ponto e eliminar os membros da rodada de busca atual.",
          "Dê risadas com as imitações e desafie as duplas a criarem movimentos complexos."
        ]
      },
      {
        "id": "pdf-132",
        "title": "O Grande Tribunal",
        "description": "Simulação cômica de tribunal onde a retórica criativa define a absolvição ou condenação.",
        "duration": "25-40 min",
        "participants": "6+",
        "age": "Livre",
        "materials": ["Martelo lúdico"],
        "steps": [
          "O Monitor propõe casos absurdos e sorteia defensores, acusadores e o corpo de jurados.",
          "As equipes utilizam a lábia para convencer o juiz baseando-se em argumentos fantasiosos.",
          "As decisões finais celebram a melhor performance teatral e a criatividade discursiva.",
          "Excelente para desinibição, oratória lúdica e integração social profunda entre os grupos."
        ]
      },
      {
        "id": "pdf-137",
        "title": "Pistas Explosivas",
        "description": "Mistério de alta pressão onde evidências cruciais estão ocultas dentro de bexigas.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "Livre",
        "materials": ["Bexigas", "Papel com pistas"],
        "steps": [
          "As pistas estão dentro de bexigas espalhadas. Estoure-as para coletar os dados do caso.",
          "Monte o quebra-cabeça lógico com sua equipe na base de investigação principal.",
          "Apresente a solução do mistério ao Monitor para validar a vitória da rodada atual.",
          "Une ação física rápida, adrenalina por sons altos e raciocínio lógico compartilhado."
        ]
      }
    ]
  }
];