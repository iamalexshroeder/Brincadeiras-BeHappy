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
        "description": "Uma emocionante brincadeira de suspense e perseguição onde os pequenos devem encontrar o lobo escondido e fugir rapidamente para a casa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolha um participante para ser o lobo enquanto os demais fecham os olhos e contam até um número combinado na 'casa'.",
          "Enquanto o grupo conta, o lobo se esconde. Ao terminar a contagem, todos saem à procura do lobo pelo espaço.",
          "O primeiro a encontrar o lobo grita: 'Vejo um cordeiro cheio de lã!'. Todos se aproximam do local com cuidado.",
          "Quando alguém gritar: 'Vejo um lobo cheio de lã!', o lobo pula de seu esconderijo e tenta pegar alguém antes que cheguem na casa. Quem for pego vira o novo lobo."
        ]
      },
      {
        "id": "pdf-3",
        "title": "Para Direita e Para Esquerda",
        "description": "Atividade divertida para trabalhar a lateralidade e o reflexo motor, onde as crianças devem responder rapidamente aos comandos do líder.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Bambolês ou fita crepe para marcação"
        ],
        "steps": [
          "Distribua bambolês ou faça marcações no chão. Cada criança deve ficar posicionada em seu local.",
          "O recreador grita comandos como 'Direita!' ou 'Esquerda!', e as crianças devem pular para o lado correspondente.",
          "Para aumentar o desafio, use sinais sonoros: dois toques de apito para direita e um para esquerda.",
          "Inclua também comandos de 'Frente' e 'Trás' para tornar a atividade mais dinâmica e desafiadora."
        ]
      },
      {
        "id": "pdf-4",
        "title": "Campo Minado",
        "description": "Um teste de confiança e coordenação onde as crianças devem atravessar um circuito de obstáculos guiadas apenas pela voz de seus colegas.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Cones, cordas ou objetos pequenos para cansar obstáculos",
          "Vendas para os olhos"
        ],
        "steps": [
          "Monte um circuito com diversos obstáculos (cones, garrafas, pelúcias) e divida as crianças em duplas.",
          "Um integrante da dupla é vendado e o outro atua como o guia, que não pode tocar no colega, apenas dar comandos de voz.",
          "O objetivo é atravessar o 'campo minado' sem encostar em nenhum obstáculo. Se encostar, deve voltar ao início ou receber uma penalidade leve.",
          "Incentive a construção de um ambiente de silêncio e foco para que o guia seja ouvido claramente."
        ]
      },
      {
        "id": "pdf-8",
        "title": "A Sombra",
        "description": "Jogo de imitação e observação que estimula a criatividade e a coordenação motora através da movimentação em duplas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Divida as crianças em duplas e espalhe-as pelo ambiente. Um será o 'Mestre' e o outro será a 'Sombra'.",
          "O Mestre realiza movimentos diversos pelo espaço (pular, girar, rastejar) e a Sombra deve imitá-lo o mais fielmente possível e instantaneamente.",
          "Ao sinal do recreador, os papéis se invertem e quem era a sombra passa a ditar os movimentos.",
          "Para uma variação, aumente as equipes para trios ou quartetos, onde todos devem imitar o líder da fila."
        ]
      },
      {
        "id": "pdf-9",
        "title": "Medusa",
        "description": "Uma variação emocionante do 'estátua', onde as crianças tentam se aproximar da Medusa sem serem vistas em movimento.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Uma criança é escolhida para ser a Medusa e fica de costas para o grupo, no final do campo.",
          "Os outros participantes começam a se aproximar lentamente. O objetivo é chegar nela e tocar em seu ombro.",
          "A Medusa pode se virar a qualquer momento. Se ela vir alguém se mexendo, aponta para a pessoa e ela deve voltar para a linha de partida.",
          "Aquele que conseguir tocar na Medusa primeiro sem ser pego ganha a rodada e assume o lugar dela."
        ]
      },
      {
        "id": "pdf-13",
        "title": "Toca do Coelho",
        "description": "Um jogo dinâmico de agilidade e troca de lugares que promove a interação e a diversão coletiva entre as crianças.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Forme grupos de três pessoas: dois dão as mãos fazendo uma 'toca' e um fica no meio sendo o 'coelho'. Deixe alguns coelhos sozinhos sem toca.",
          "Ao sinal do recreador, todos os coelhos devem sair de suas tocas e procurar uma nova, enquanto os coelhos sem toca tentam entrar em uma.",
          "Ao grito de 'Ventania!', todos (tocas e coelhos) devem se soltar e correr livremente. Ao grito de 'Toca do Coelho!', todos devem reformar os trios.",
          "Sempre mude os papéis para que as tocas também tenham a chance de ser coelhos."
        ]
      },
      {
        "id": "pdf-14",
        "title": "Mãos de Cores",
        "description": "Uma atividade sensorial lúdica que mistura reconhecimento de cores com alongamento e contato social leve.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Peça para as crianças formarem um círculo (preferencialmente sem sapatos se o ambiente permitir).",
          "O recreador atua como o condutor inicial e dá ordens como: 'Mão direita no vermelho!'.",
          "As crianças devem tocar com a mão direita em qualquer objeto ou detalhe da roupa de um colega que tenha a cor vermelha.",
          "O objetivo é manter o círculo conectado enquanto as posições ficam cada vez mais engraçadas e desafiadoras."
        ]
      },
      {
        "id": "pdf-15",
        "title": "Caça ao Tesouro",
        "description": "O clássico jogo de exploração adaptado para os pequenos, estimulando a curiosidade e o foco na busca por objetos escondidos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Pequenos objetos temáticos ou brindes (bolinhas, pecinhas coloridas)"
        ],
        "steps": [
          "Esconda diversos objetos pelo ambiente sem que as crianças vejam (pode-se usar o lúdico de serem 'pedras preciosas' ou 'moedas piratas').",
          "Ao sinal do recreador, as crianças saem à procura dos tesouros. Cada objeto encontrado deve ser levado até um ponto central.",
          "Para tornar mais interessante, peça que busquem cores específicas ou tipos diferentes de objetos em cada rodada.",
          "Termine a atividade revelando um 'Grande Tesouro' coletivo para que todos ganhem juntos."
        ]
      },
      {
        "id": "pdf-21",
        "title": "Corrida de Saci",
        "description": "Uma gincana de equilíbrio e força que desafia as crianças a completarem um percurso usando apenas uma perna.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Corda ou fita para marcar partida e chegada"
        ],
        "steps": [
          "Demarque uma linha de partida e uma linha de chegada com uma distância segura apropriada para a idade.",
          "Ao sinal, as crianças devem pular com um pé só (estilo Saci Pererê) até cruzar a linha final.",
          "Se alguém colocar os dois pés no chão, deve voltar dois passos para trás ou retornar ao início como incentivo ao desafio.",
          "Faça rodadas de aquecimento e depois uma corrida oficial para aumentar a animação."
        ]
      },
      {
        "id": "pdf-23",
        "title": "Camaleão",
        "description": "Um jogo de perseguição e reconhecimento de cores onde as crianças devem correr para se proteger no objeto da cor certa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma criança é o Camaleão e fica ao centro. O grupo grita: 'Ã” Camaleão, que cor?', e ele responde uma cor à sua escolha.",
          "Após a resposta, todos devem correr para tocar em algum objeto do ambiente que possua essa cor exata para estarem salvos.",
          "O Camaleão tenta pegar alguém antes que toquem na cor. Quem for pego torna-se o novo Camaleão para a próxima rodada.",
          "Dica: Certifique-se de que o ambiente tenha uma boa variedade de cores visíveis nítidas."
        ]
      },
      {
        "id": "pdf-24",
        "title": "A Fila Viva",
        "description": "Exercício de coordenação e espírito de equipe onde todos devem se mover como um único organismo de mãos dadas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Peça para as crianças formarem uma corrente segurando as mãos uma da outra em fila.",
          "Um condutor lidera a fila e dá ordens de movimento como: 'A corrente se encolhe!' (todos se juntam) ou 'A corrente se alarga!' (todos se esticam).",
          "Adicione outros comandos criativos como 'A corrente agacha!', 'A corrente pula!' ou 'A corrente corre em curvas!'.",
          "Incentive que ninguém solte as mãos, trabalhando a noção de grupo e o cuidado com o colega ao lado."
        ]
      },
      {
        "id": "pdf-26",
        "title": "Reizinho Mandou",
        "description": "Uma variação clássica do 'O Mestre Mandou' que exercita a atenção, o respeito as regras e a criatividade motora.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Escolha uma criança para ser o 'Reizinho'. O restante do grupo fica à frente dele.",
          "O Reizinho diz: 'Reizinho mandou!', e o grupo pergunta: 'Fazer o quê?'.",
          "O Reizinho então determina uma tarefa lúdica (ex: pular como sapo, imitar um elefante, tocar no pé).",
          "O recreador deve garantir que o papel de Reizinho seja rotativo para que todos liderem a brincadeira."
        ]
      },
      {
        "id": "pdf-34",
        "title": "Céu e Terra",
        "description": "Jogo de oposição e reflexo que ajuda as crianças a distinguirem comandos e aprimorarem a agilidade no salto.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Uma corda longa"
        ],
        "steps": [
          "Estenda uma corda no chão. Um lado será o 'Céu' e o outro será a 'Terra'.",
          "As crianças começam em um dos lados. Quando o recreador gritar 'Céu!', todos devem pular para o lado correspondente.",
          "O recreador pode tentar confundir o grupo gritando o mesmo nome duas vezes ou aumentando a velocidade dos comandos.",
          "Quem errar o pulo pode fazer um desafio divertido antes de retornar à brincadeira."
        ]
      },
      {
        "id": "pdf-35",
        "title": "Cruzando o Rio",
        "description": "Um desafio lúdico de coordenação e criatividade onde as crianças devem cruzar um 'rio imaginário' usando pedras de papel.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Folhas de papel sulfite ou jornal (3 por criança)"
        ],
        "steps": [
          "Crie o cenário lúdico: o chão é um rio cheio de jacarés e as folhas de papel são as únicas pedras seguras.",
          "Cada criança recebe 3 folhas. Elas devem colocar uma folha e pisar, colocar a próxima à frente e pisar, e assim sucessivamente.",
          "Ao usar a última folha, devem se equilibrar, recolher a folha que ficou para trás e trazê-la para frente para continuar o caminho.",
          "O objetivo é chegar ao 'outro lado da margem' sem tocar no chão com os pés."
        ]
      },
      {
        "id": "pdf-38",
        "title": "O Feiticeiro e as Estátuas",
        "description": "Jogo de perseguição cooperativo onde os 'enfeitiçados' precisam da ajuda dos amigos para voltarem ao jogo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um voluntário começa como o 'Feiticeiro' e perseguirá os demais em um espaço delimitado.",
          "Quem for tocado pelo Feiticeiro fica 'enfeitiçado': deve ficar imóvel como uma estátua, com as pernas afastadas.",
          "Para salvar um amigo, outra criança que ainda está livre deve passar por baixo das pernas da estátua.",
          "O jogo termina quando todos forem transformados em estátua ou após um tempo determinado para trocar o Feiticeiro."
        ]
      },
      {
        "id": "pdf-40",
        "title": "Não Me Faça Rir",
        "description": "Um exercício engraçado de autocontrole e expressão facial, perfeito para momentos de transição e calma.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em duplas, onde um será o 'Comediante' e o outro o 'Sentinela'.",
          "O Comediante tem 30 segundos para fazer caretas e movimentos engraçados (sem tocar no colega) para fazê-lo rir.",
          "O Sentinela deve manter a expressão séria a todo custo. Se rir, os papéis se invertem imediatamente.",
          "Pode ser feito em círculo, onde um integrante vai ao centro tentar fazer a roda inteira rir."
        ]
      },
      {
        "id": "pdf-46",
        "title": "O Monstro Faminto",
        "description": "Uma brincadeira lúdica de equilíbrio e cooperação que usa desenhos no chão para criar uma narrativa de aventura.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Giz colorido"
        ],
        "steps": [
          "Desenhe um grande monstro no chão com a boca bem aberta. Todos as crianças começam em cima do desenho (o corpo do monstro).",
          "Ao sinal, as crianças devem tentar se manter equilibradas sem sair do desenho enquanto o 'monstro' tenta 'engoli-las' (delimite uma área perigosa).",
          "Use a narrativa de que quem cair na boca do monstro deve ajudar o recreador a pegar os outros amigos puxando-os pelo braço com cuidado.",
          "O objetivo é ser o último aventureiro a escapar da barriga do monstro."
        ]
      },
      {
        "id": "pdf-49",
        "title": "A Bruxa Gargalhada",
        "description": "Um clássico pega-pega com elementos dramáticos e regras de 'tempo' que tornam a perseguição mais estratégica.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é escolhido para ser a Bruxa e deve contar até 20 em sua 'caverna' enquanto os outros se espalham.",
          "A Bruxa sai à caça e, ao tocar em alguém, grita: 'Bruxa!'. Essa pessoa assume o lugar dela imediatamente.",
          "Combine um local seguro como 'ferrolho' onde a Bruxa não pode entrar. Se alguém cansar, grita 'Isola!' para uma pausa curta.",
          "Incentive a Bruxa a fazer sons assustadores e lúdicos para aumentar a imersão na brincadeira."
        ]
      },
      {
        "id": "pdf-50",
        "title": "Em Busca das Cores Perdidas",
        "description": "Uma variação do caça ao tesouro que utiliza cores e pontuações para estimular a observação e a rapidez.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Cartolinas ou papéis de cores variadas",
          "Cronômetro"
        ],
        "steps": [
          "Corte papéis em pequenos pedaços de cores diferentes e esconda-os pelo local.",
          "Defina pontos para cada cor (ex: azul vale 10, dourado vale 50). Informe as crianças sobre a tabela de pontos.",
          "Dê um tempo determinado (ex: 3 minutos) para que todos busquem o máximo de papéis que conseguirem.",
          "No final, reúna todos para somar os pontos de cada um e celebrar os pequenos exploradores."
        ]
      },
      {
        "id": "pdf-53",
        "title": "Chefe Comanda",
        "description": "Um jogo de diálogo e imitação que reforça o seguimento de instruções e a coordenação motora básica.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Inicie o diálogo clássico com as crianças em fila: Chefe diz 'Boca de forno!', e elas respondem 'Forno!'.",
          "Chefe: 'Tirar um bolo?', Crianças: 'Bolo!'. Chefe: 'Fareis tudo o que o mestre mandar?', Crianças: 'Faremos todos!'.",
          "O Chefe então dá ordens simples: 'Dê três pulos!', 'Gire como um pião!', 'Toque no nariz!'.",
          "Quem concluir a tarefa ganha um elogio e o jogo continua com a troca do Chefe a cada rodada."
        ]
      },
      {
        "id": "pdf-54",
        "title": "Balão Fujão",
        "description": "Uma atividade de controle motor e paciência onde as crianças devem guiar um balão apenas usando o vento.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "3+ anos",
        "materials": [
          "Bexigas infladas",
          "Pedaços de papelão ou leques"
        ],
        "steps": [
          "Demarque uma linha de largada e uma de chegada. Cada criança recebe um balão e um pedaço de papelão.",
          "O objetivo é levar o balão do início ao fim sem tocá-lo com as mãos ou pés, apenas abanando com o papelão para criar vento.",
          "Se o balão fugir muito longe, a criança deve reposicioná-lo e continuar de onde parou.",
          "Esta atividade ajuda muito na percepção espacial e no controle delicado de movimentos."
        ]
      },
      {
        "id": "pdf-56",
        "title": "Caixa de sensações",
        "description": "A caixa deverá ter um furo no meio para que as crianças coloquem a mão. Dentro da caixa deverá ter algum objeto. A criança deverá estar vendada, coloc...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Caixa de sapato ou qualquer outra",
          "objetos variados."
        ],
        "steps": [
          "A caixa deverá ter um furo no meio para que as crianças coloquem a mão. Dentro da caixa deverá ter algum objeto.",
          "A criança deverá estar vendada, colocara a mão na caixa e tentará descobrir qual é o objeto."
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
        "title": "Circuitos",
        "description": "Circuitos psicomotores para trabalhar velocidade, lateralidade, coordenação das crianças, pode ser montado a escolha do monitor.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "bambolês",
          "cones",
          "cordas",
          "bolas"
        ],
        "steps": [
          "Circuitos psicomotores para trabalhar velocidade, lateralidade, coordenação das crianças, pode ser montado a escolha do monitor."
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
        "description": "A clássica brincadeira de congelar no tempo que treina o controle inibitório e a atenção auditiva de forma muito divertida.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Aparelho de som ou celular com músicas animadas"
        ],
        "steps": [
          "Toque uma música bem animada e deixe as crianças dançarem livremente pelo espaço.",
          "Sem aviso prévio, pause a música. Nesse momento, todos devem congelar imediatamente na posição em que estão.",
          "O recreador pode tentar fazer caretas para que as 'estátuas' riam ou se mexam. Quem se mover volta à dança na próxima rodada.",
          "Variação: determine poses específicas para o congelamento, como 'estátua de super-herói' ou 'estátua de animal'."
        ]
      },
      {
        "id": "pdf-16",
        "title": "Dança das Cadeiras",
        "description": "Um jogo de velocidade e percepção espacial onde o número de lugares diminui a cada rodada, aumentando a emoção.",
        "duration": "15-20 min",
        "participants": "5+",
        "age": "3+ anos",
        "materials": [
          "Cadeiras (uma a menos que o número de participantes)",
          "Música animada"
        ],
        "steps": [
          "Organize as cadeiras em círculo, voltadas para fora. As crianças caminham ao redor delas enquanto a música toca.",
          "Quando a música parar, todos devem tentar sentar em uma das cadeiras disponíveis.",
          "Quem ficar sem cadeira sai da brincadeira e uma cadeira é removida para a próxima rodada.",
          "O vencedor é aquele que conseguir sentar na última cadeira restante."
        ]
      },
      {
        "id": "pdf-32",
        "title": "Telefone sem Fio",
        "description": "Uma brincadeira clássica de escuta e comunicação que sempre termina em gargalhadas com a mensagem transformada.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "As crianças sentam-se em roda. O recreador sussurra uma frase curta e engraçada no ouvido da primeira criança.",
          "Cada participante deve passar a mensagem adiante, sussurrando apenas uma vez para o colega do lado.",
          "O último da roda deve dizer a frase em voz alta para todos ouvirem.",
          "O objetivo é ver o quanto a mensagem original mudou ao longo do caminho, gerando muita diversão."
        ]
      },
      {
        "id": "pdf-67",
        "title": "Jo-ken-pô Coletivo",
        "description": "Uma batalha estratégica entre equipes que transforma o clássico 'Pedra, Papel e Tesoura' em um jogo de grupo vibrante.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em duas grandes equipes, posicionadas frente a frente.",
          "As equipes se reúnem em segredo para decidir qual gesto (Pedra, Papel ou Tesoura) o grupo inteiro fará junto.",
          "Ao sinal do recreador, as equipes viram-se e realizam o gesto simultaneamente.",
          "Marque um ponto para a equipe vencedora em cada rodada. O primeiro time a atingir 10 pontos vence a gincana."
        ]
      },
      {
        "id": "pdf-71",
        "title": "Sardinha",
        "description": "Um 'esconde-esconde invertido' onde quem encontra o esconderijo se junta à sardinha, criando um desafio cada vez mais apertado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Uma criança é escolhida para ser a 'Sardinha' e se esconde silenciosamente enquanto as outras contam.",
          "Os outros participantes saem em busca da Sardinha individualmente.",
          "Quem encontrar a Sardinha não deve contar para os outros; em vez disso, deve se esconder junto com ela no mesmo local.",
          "A brincadeira termina quando todos estiverem 'enlatados' no mesmo esconderijo. O primeiro a encontrar a Sardinha pode ser a próxima."
        ]
      },
      {
        "id": "pdf-102",
        "title": "Nó Maluco",
        "description": "Um quebra-cabeça cooperativo físico que exige comunicação e flexibilidade para desatar o nó humano sem soltar as mãos.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O grupo forma um círculo apertado e todos estendem as mãos para o centro.",
          "Cada pessoa deve segurar a mão de duas pessoas diferentes (que não estejam ao seu lado). Isso criará um grande emaranhado de braços.",
          "O objetivo é desatar esse 'nó' voltando a formar um círculo perfeito de mãos dadas, sem nunca soltar os colegas.",
          "Incentive o grupo a dar instruções verbais e a se mover com cuidado para não machucar ninguém."
        ]
      },
      {
        "id": "pdf-121",
        "title": "A Cidade Dorme",
        "description": "Um jogo de dedução e interpretação cercado de mistério, onde a cidade precisa descobrir quem são os vilões antes que seja tarde demais.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "10+ anos",
        "materials": [
          "Papel e caneta para sortear as funções"
        ],
        "steps": [
          "Sorteie as funções secretas. Todos fecham os olhos quando o narrador diz: 'A cidade dorme'.",
          "O narrador acorda o Assassino para escolher uma vítima, o Anjo para proteger alguém e o Detetive para identificar os culpados.",
          "Ao comando de 'A cidade acorda!', o narrador revela quem 'morreu' e o grupo inicia um debate para votar em um suspeito.",
          "O jogo continua até que todos os assassinos sejam descobertos ou que as vítimas sejam eliminadas."
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
        "description": "Uma variação veloz do pega-pega em círculo que exige atenção constante e reflexos rápidos para não ser pescado.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Forme um grande círculo com todos os participantes sentados. Numere cada um de 1 a 5, repetindo a sequência.",
          "O recreador grita um número (ex: 'Número 3!'). Todos os '3' devem levantar e correr por fora do círculo no sentido horário.",
          "O objetivo de cada corredor é tentar tocar no colega da frente e evitar ser tocado pelo colega que vem atrás.",
          "Quem completar a volta e sentar em seu lugar original primeiro sem ser pego marca um ponto simbólico para seu número."
        ]
      },
      {
        "id": "pdf-25",
        "title": "Travessia da Floresta",
        "description": "Um desafio de invasão e defesa onde um grupo de 'forasteiros' deve cruzar uma área perigosa protegida por guardiões.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [
          "Fita ou giz para delimitar o retângulo ('A Floresta')"
        ],
        "steps": [
          "Delimite um grande retângulo no chão que será a 'Floresta'. Escolha 3 crianças para serem os guardiões que ficam dentro dele.",
          "Os demais participantes ficam de um lado e devem tentar cruzar a floresta até o lado oposto sem serem tocados.",
          "Os guardiões podem se mover apenas dentro do retângulo para tentar interceptar os viajantes.",
          "Quem for pego torna-se um novo guardião, ajudando a proteger a floresta na próxima travessia."
        ]
      },
      {
        "id": "pdf-27",
        "title": "Elefante Colorido",
        "description": "Um divertido jogo de perseguição e reconhecimento de cores onde possuir a cor certa garante passagem livre.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma criança é o 'Elefante' e fica no centro do campo. O grupo grita: 'Elefante colorido!', e ele responde: 'Que cor?'.",
          "O Elefante escolhe uma cor. Aqueles que tiverem essa cor em suas roupas ou acessórios ganham passagem livre.",
          "Quem não tiver a cor escolhida deve tentar atravessar para o outro lado correndo sem ser pego pelo Elefante.",
          "A primeira pessoa a ser pega assume o papel de Elefante colorido na rodada seguinte."
        ]
      },
      {
        "id": "pdf-29",
        "title": "Reino dos Sacis",
        "description": "Uma brincadeira de perseguição temática e desafiadora onde todos devem se mover em apenas um pé.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolha o 'Saci Rei' que fica em seu 'Palácio' (uma área delimitada). Os outros 'Sacis' ficam espalhados pelo campo.",
          "Ao sinal, os Sacis devem pular em um pé só em direção ao palácio. O Rei grita: 'O Rei está zangado!' e sai caçando os invasores.",
          "Todos, inclusive o Rei, devem se mover pulando em um pé só. Quem for pego torna-se ajudante do Rei.",
          "O último a ser capturado ganha a rodada e torna-se o novo Saci Rei."
        ]
      },
      {
        "id": "pdf-30",
        "title": "Congelado",
        "description": "O clássico jogo de 'pega-congelante' que incentiva o altruísmo e a cooperação para salvar os amigos imobilizados.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é o pegador. Quem for tocado por ele deve ficar 'congelado' (imóvel) no local exato.",
          "Para descongelar um amigo, uma criança que ainda está livre deve tocá-la.",
          "O objetivo do pegador é congelar todos os participantes simultaneamente.",
          "Troque o pegador a cada rodada ou quando ele conseguir congelar metade do grupo."
        ]
      },
      {
        "id": "pdf-31",
        "title": "Arranca Rabo",
        "description": "Uma gincana agitada de agilidade e reflexos onde as crianças devem proteger sua 'cauda' enquanto buscam capturar as dos adversários.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Fitas coloridas ou pedaços de TNT"
        ],
        "steps": [
          "Divida as crianças em dois times. Cada integrante coloca uma fita pendurada na parte de trás da cintura (o rabo).",
          "Ao sinal, todos os participantes tentam colher as fitas dos jogadores do time adversário sem perder as suas próprias.",
          "Quem tiver o rabo arrancado não é eliminado; deve apenas focar em ajudar seu time a capturar mais fitas inimigas.",
          "Vence a equipe que conseguir reunir o maior número de fitas adversárias ao final do tempo."
        ]
      },
      {
        "id": "pdf-33",
        "title": "Pega-Pega Espelho",
        "description": "Uma mistura criativa de pega-pega e teatro onde os participantes salvam os amigos através da imitação.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante é o pegador. Quem for tocado por ele deve fazer uma 'pose de estátua' engraçada ou épica.",
          "Para salvar esse amigo, outra criança que está livre deve parar na frente dele e imitar a pose exatamente como ele está fazendo.",
          "Uma vez imitada com sucesso, ambos podem voltar a correr livremente.",
          "Esta brincadeira estimula a percepção corporal e a cooperação entre os pequenos."
        ]
      },
      {
        "id": "pdf-36",
        "title": "Caça Palitos",
        "description": "Um jogo de perseguição que integra o Jo-ken-pô como mecanismo de disputa por recursos, estimulando a agilidade e a sorte.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "Pequenos palitos ou fichas (3 por criança)"
        ],
        "steps": [
          "Cada criança começa com 3 palitos nas mãos. Ao sinal, todos correm em um pega-pega geral (todos podem pegar todos).",
          "Quem for tocado deve parar imediatamente com quem o pegou e disputar uma rodada de Pedra, Papel ou Tesoura.",
          "O vencedor da disputa ganha um palito do oponente e ambos voltam a correr livremente.",
          "Ganha quem conseguir reunir o maior número de palitos ao final da atividade."
        ]
      },
      {
        "id": "pdf-42",
        "title": "A Cauda do Dragão",
        "description": "Um exercício vibrante de cooperação e agilidade onde a cabeça do dragão deve tentar capturar sua própria cauda.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "As crianças formam uma fila, cada uma segurando na cintura de quem está à frente, simulando um corpo de dragão.",
          "O primeiro da fila é a 'Cabeça' e o último é a 'Cauda'.",
          "Ao sinal, a Cabeça deve tentar tocar na Cauda, enquanto a fila inteira se move para proteger a parte de trás sem se soltar.",
          "Se a Cabeça conseguir tocar na Cauda, quem era a cauda passa a ser a nova cabeça do dragão."
        ]
      },
      {
        "id": "pdf-43",
        "title": "O Gafanhoto e a Rã",
        "description": "Um mini-jogo de perseguição dentro de limites que treina o equilíbrio e o salto coordenado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Giz para demarcar o círculo"
        ],
        "steps": [
          "Desenhe um círculo no chão. Um participante é a 'Rã' (fica agachado) e os outros são os 'Gafanhotos'.",
          "Os Gafanhotos devem se mover pulando dentro do círculo, enquanto a Rã tenta pegá-los sem levantar totalmente do chão.",
          "Quem for capturado pela Rã torna-se uma rã também, ajudando a cercar os últimos gafanhotos.",
          "A última pessoa a ser pega ganha a rodada e começa como a rã inicial na próxima partida."
        ]
      },
      {
        "id": "pdf-44",
        "title": "O Rato e o Gato (Tênis)",
        "description": "Uma variação do corre-cutia que utiliza um objeto para marcar o início de uma perseguição em círculo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Um tênis ou objeto similar"
        ],
        "steps": [
          "Todos sentam em círculo voltados para dentro. Um participante é o 'Rato' e corre por fora com um tênis na mão.",
          "O Rato solta o tênis silenciosamente atrás de um colega. Esse colega torna-se o 'Gato' e deve pegar o Rato.",
          "O Rato deve dar a volta completa e sentar no lugar que ficou vazio antes de ser tocado pelo Gato.",
          "Se conseguir sentar, o Gato vira o novo Rato. Se for pego, continua sendo o Rato."
        ]
      },
      {
        "id": "pdf-45",
        "title": "Resgate no Reino Perdido",
        "description": "Um jogo de exploração e captura com funções secretas que trazem um clima de aventura épica.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Escolha um 'Bruxo' e um 'Cavalheiro'. Os demais participantes são 'Princesas' que devem se esconder.",
          "O Cavalheiro deve encontrar as Princesas e levá-las para a segurança do Reino.",
          "O Bruxo também está à caça e tentará capturar as Princesas para levá-las ao seu 'Esconderijo'.",
          "Vence a rodada quem (Cavalheiro ou Bruxo) conseguir reunir o maior número de princesas ao final."
        ]
      },
      {
        "id": "pdf-48",
        "title": "Toque nas Cores",
        "description": "Um pega-pega dinâmico de percepção visual onde o ambiente se torna o seu maior aliado.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolha um pegador que ficará no centro. Ele grita uma cor em voz alta (ex: 'Amarelo!').",
          "Todos os outros participantes devem correr para tocar em qualquer objeto ou detalhe do local que tenha essa cor.",
          "O pegador tenta tocar em alguém que ainda não tenha alcançado a cor solicitada.",
          "Quem for pego torna-se o novo pegador e escolhe a próxima cor para desafiar o grupo."
        ]
      },
      {
        "id": "pdf-51",
        "title": "A Poção Mágica",
        "description": "Uma aventura cooperativa lúdica onde magos devem coletar ingredientes sem serem pegos pelo monstro da floresta.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Bambolês ('As Casas')",
          "Cones coloridos ('As Poções')"
        ],
        "steps": [
          "Espalhe os bambolês e os cones pelo campo. Nomeie um participante para ser o 'Monstro'. Os outros são os 'Magos'.",
          "Os Magos devem sair de suas casas para coletar um cone por vez e levá-lo de volta, sem que o Monstro os toque.",
          "Se um Mago for pego, deve devolver as poções que coletou ao campo e recomeçar.",
          "O objetivo final é reunir todas as poções de cores iguais em casas específicas, trabalhando a organização em equipe."
        ]
      },
      {
        "id": "pdf-58",
        "title": "Letra Pegadora",
        "description": "Um exercício de prontidão e reconhecimento de nomes que transforma a identidade de cada um em um gatilho para o jogo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "As crianças caminham livremente pelo espaço. O recreador grita uma letra (ex: 'Letra M!').",
          "Todos cujo nome começa com essa letra tornam-se pegadores por 30 segundos e tentam tocar nos outros colegas.",
          "Quem for pego deve ficar agachado e só pode ser salvo pelo toque de um outro colega que não seja pegador.",
          "O recreador troca a letra frequentemente para que diferentes crianças tenham a chance de ser pegadores."
        ]
      },
      {
        "id": "pdf-61",
        "title": "O Killer (Piscadinha)",
        "description": "Um jogo de observação e discrição onde um assassino silencioso tenta eliminar as vítimas sem ser descoberto pelo detetive.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "Papéizinhos com as iniciais K (Killer), D (Detetive) e V (Vítima)"
        ],
        "steps": [
          "Distribua secretamente as funções. O Killer deve 'matar' as vítimas piscando discretamente para elas.",
          "Quando uma vítima recebe a piscadinha, deve dizer 'Morri!' e sair da rodada ou sentar-se.",
          "O Detetive deve observar todos atentamente para tentar descobrir quem é o Killer sem ser 'morto' antes.",
          "Se o Detetive descobrir, ele aponta e diz: 'Preso em nome da lei!'. Se o Killer eliminar todas as vítimas, ele vence."
        ]
      },
      {
        "id": "pdf-63",
        "title": "PACMAN Humano",
        "description": "Um emocionante pega-pega de restrição espacial onde todos devem se locomover apenas sobre as linhas demarcadas no chão.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "Quadra poliesportiva com linhas de marcação"
        ],
        "steps": [
          "Escolha um participante para ser o 'Pacman' (pegador). Todos devem correr apenas por cima das linhas da quadra.",
          "Quem sair da linha é considerado 'pego' automaticamente. Quem for tocado pelo Pacman deve sentar no local e vira um obstáculo.",
          "O Pacman pode pular os obstáculos sentados, mas os outros fugitivos devem encontrar outro caminho pelas linhas.",
          "O último sobrevivente nas linhas vence a partida."
        ]
      },
      {
        "id": "pdf-64",
        "title": "Gato e Rato em Repouso",
        "description": "Uma variação estratégica do jogo de perseguição onde os participantes sentados servem como base para a troca de papéis.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Todos ficam espalhados pelo espaço, sentados com as pernas estendidas. Escolha um 'Gato' (pegador) e um 'Rato' (fugitivo).",
          "O Rato deve fugir por entre os colegas sentados. Para se salvar, ele deve tocar na cabeça de alguém que esteja sentado.",
          "A pessoa tocada levanta-se imediatamente e torna-se o novo Gato, enquanto quem era o gato passa a ser o novo Rato.",
          "Esta dinâmica exige reflexos rápidos tanto de quem foge quanto de quem está sentado esperando para entrar no jogo."
        ]
      },
      {
        "id": "pdf-73",
        "title": "Pegador com Aro",
        "description": "Um jogo de perseguição coletiva onde a captura é feita com bambolês, criando uma corrente humana de pegadores cada vez mais longa.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [
          "Bambolês (vários)"
        ],
        "steps": [
          "Um participante começa como pegador solo, segurando um bambolê.",
          "Para capturar um colega, ele deve 'laçá-lo' com o bambolê (fazendo-o passar pelo corpo do colega com cuidado).",
          "O capturado pega outro bambolê e dá a mão ao primeiro pegador, formando uma corrente.",
          "Apenas as extremidades da corrente seguram bambolês para capturar novos fugitivos até que todos sejam pegos."
        ]
      },
      {
        "id": "pdf-76",
        "title": "Mico Preto",
        "description": "Um desafio de travessia e agilidade onde um guardião central tenta capturar os caçadores que atravessam a quadra.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O 'Mico Preto' fica no centro da quadra e os demais (caçadores) ficam na linha de fundo.",
          "O Mico Preto grita: 'Quem tem medo do Mico Preto?'. Os caçadores respondem: 'Eu que não!'.",
          "Nesse momento, todos os caçadores devem correr para a outra linha de fundo enquanto o Mico Preto tenta pegá-los.",
          "Quem for capturado junta-se ao Mico Preto no centro para ajudar a pegar os fugitivos na próxima rodada."
        ]
      },
      {
        "id": "pdf-81",
        "title": "Quanto Mais Melhor",
        "description": "Uma gincana competitiva de coleta de recursos e agilidade que estimula a rapidez e a organização espacial.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "Bambolês",
          "Cones ou objetos pequenos (muitos)"
        ],
        "steps": [
          "Cada criança tem seu próprio bambolê (sua base) com a mesma quantidade de cones dentro.",
          "Ao sinal, o objetivo é correr até os bambolês dos colegas, pegar um cone por vez e trazê-lo para sua própria base.",
          "Não é permitido defender sua base; o foco deve ser apenas em coletar o máximo de cones possível de outros lugares.",
          "Ao final do tempo, vence quem tiver acumulado o maior número de cones dentro de seu bambolê."
        ]
      },
      {
        "id": "pdf-83",
        "title": "Guerra de Cones",
        "description": "Um desafio de agilidade e estratégia onde os participantes competem para reunir objetos em sua base antes dos adversários.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Bambolês",
          "Cones"
        ],
        "steps": [
          "Coloque um bambolê central com 8 cones e posicione 4 bambolês (bases) nos cantos da quadra.",
          "Ao sinal, cada participante deve correr ao centro, pegar um cone por vez e levá-lo para sua base.",
          "Ã‰ permitido 'roubar' cones das bases dos adversários, mas sem contato físico ou bloqueio.",
          "Ganha quem conseguir primeiro reunir 3 cones em sua base."
        ]
      },
      {
        "id": "pdf-84",
        "title": "Pega-Alerta Temático",
        "description": "Um jogo de perseguição que mistura criatividade e agilidade, onde o tema escolhido define quem será o pegador.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "Fitas de TNT ou 'rabinhos'"
        ],
        "steps": [
          "O líder escolhe um tema (ex: Animais) e os jogadores escolhem secretamente itens desse tema.",
          "O líder grita um item (ex: 'Leão!'). Quem escolheu esse item torna-se o pegador imediato.",
          "O objetivo é pegar o 'rabo' (fita de TNT) dos colegas. Quem for capturado ajuda o pegador.",
          "O jogo continua até que reste apenas um jogador com fita, que será o próximo a sugerir o tema."
        ]
      },
      {
        "id": "pdf-86",
        "title": "Pique-Cai-Cai",
        "description": "Uma brincadeira bem-humorada de perseguição onde os 'caídos' precisam da força e união dos amigos para voltar ao jogo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Um participante é o pegador. Quem for tocado por ele deve se deitar no chão imediatamente.",
          "Para salvar um colega caído, duas pessoas devem se unir, segurá-lo pelos braços e pernas e levá-lo até um local designado (o banco).",
          "Enquanto as pessoas estão salvando o colega, o pegador não pode tocá-las.",
          "Uma vez deixado no banco, o jogador pode levantar-se e retornar à brincadeira livremente."
        ]
      },
      {
        "id": "pdf-89",
        "title": "Pega-Pregador",
        "description": "Um jogo de agilidade e 'vidas' que utiliza pregadores de roupa como recurso, exigindo rapidez e honestidade nas disputas.",
        "duration": "20-25 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [
          "Pregadores de roupa (5 a 10 por criança)"
        ],
        "steps": [
          "Cada criança fixa seus pregadores na roupa (as 'vidas'). Ao sinal, começa um pega-pega geral.",
          "Quem pegar alguém desafia o oponente para uma rodada rápida de Jo-ken-pô.",
          "O vencedor da disputa escolhe um pregador do colega para si.",
          "Se alguém ficar sem pregadores, pode ganhar um de um amigo generoso ou aguardar a próxima rodada."
        ]
      },
      {
        "id": "pdf-93",
        "title": "Pique Trave Distante",
        "description": "Um teste de fôlego e velocidade onde os 'piques' seguros estão sempre do outro lado do campo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Um participante é o pegador. A 'trave' ou um gol é o local seguro (o pique).",
          "O detalhe é que quando você sai de uma trave segura, só pode voltar a ficar seguro na trave que está do lado oposto da quadra.",
          "Isso obriga as crianças a atravessarem todo o campo aberto, onde o pegador tem mais chances de agir.",
          "Troque o pegador sempre que ele conseguir capturar alguém no trajeto."
        ]
      },
      {
        "id": "pdf-95",
        "title": "Arrastão ou pega-pega corrente",
        "description": "Uma pessoa será escolhida para ser o pegador, enquanto os outros serão os fugitivos. Quem o pegador pegar, virará pegador junto a ele, terão que ficar...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Uma pessoa será escolhida para ser o pegador, enquanto os outros serão os fugitivos. Quem o pegador pegar, virará pegador junto a ele, terão que ficar de mãos dadas, e assim sucessivamente até restar apenas um fugitivo."
        ]
      },
      {
        "id": "pdf-100",
        "title": "Chinelinho",
        "description": "Traça-se no chão duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crianças são formados. Cada um dos grupos é disp...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Um chinelo",
          "uma bola",
          "ou qualquer coisa que substitua"
        ],
        "steps": [
          "Traça-se no chão duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crianças são formados",
          "Cada um dos grupos é disposto em fileira, um de frente para o outro, atrás de uma linha. Num ponto equidistante das linhas (aproximadamente a 7,5 m de cada uma), risca-se um círculo onde deverá ser colocado um chinelinho ou outro objeto semelhante",
          "As crianças dos dois grupos são numeradas de 1 até o número total de crianças que existir em cada grupo. Quando um dos grupos tiver uma criança a mais, um componente do grupo contrário pode receber dois números",
          "Uma criança ou um adulto deve comandar o jogo, gritando um número que corresponda a uma criança de cada um dos grupos. As duas devem correr, pegar o chinelinho e retornar ao seu grupo, cruzando sua linha sem ser tocada",
          "Cada vez que isso ocorrer, seu grupo conquista um ponto. Se ao fugir com o ocorrer, seu grupo conquista um ponto",
          "Se ao fugir com o chinelo o jogador for tocado pelo adversário, ninguém marca ponto. Após cada disputa dos dois jogadores, o chinelo volta para o círculo",
          "Vencerá quem atingir primeiro o total de pontos estipulados pelos grupos, em comum acordo.."
        ]
      },
      {
        "id": "pdf-107",
        "title": "Polícia e ladrão",
        "description": "Separam-se dois grupos de crianças, um será polícia e outro ladrão. Os policiais iniciam contado até 20, enquanto os ladrões se escondem, ao término d...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Separam-se dois grupos de crianças, um será polícia e outro ladrão. Os policiais iniciam contado até 20, enquanto os ladrões se escondem, ao término da contagem a polícia passa a procurar os ladrões e os encontrando passa a prossegui-los",
          "O ladrão deve ser pego pela polícia e quem for preso vai para um local denominado como prisão. Quem não for pego pode soltar os ladrões (tocando-os) que voltam a fugir da polícia",
          "O jogo terminará com a captura de todos os ladrões. ."
        ]
      },
      {
        "id": "pdf-110",
        "title": "Rua e Avenida",
        "description": "Os participantes serão divididos em várias fileiras uma atrás da outra. Duas pessoas serão escolhidas, uma para ser o pegador e o outro o fugitivo. â”œÃ«...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Os participantes serão divididos em várias fileiras uma atrás da outra. Duas pessoas serão escolhidas, uma para ser o pegador e o outro o fugitivo. â”œÃ« como se fosse um labirinto, os participantes deverão estar de mãos dadas, quando o monitor falar \"rua\" eles deverão soltar as mãos e virar para a direita, dando as mãos aos outros colegas, e quando o monitor falar \"avenida\" deverão voltar a posição inicial."
        ]
      },
      {
        "id": "pdf-112",
        "title": "Mãe da Rua",
        "description": "Será escolhida uma criança para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos o...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Será escolhida uma criança para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos os alunos saíram correndo para o outro lado da quadra, tentando escapar da \"mãe da rua\" que esta ao centro",
          "Quem for pego irá ajudar a \"mãe da rua\" a pegar o restante. A \"mãe da rua\" não poderá sair do meio da quadra, nem os participantes que forem pegos."
        ]
      },
      {
        "id": "pdf-113",
        "title": "Rouba Bandeira",
        "description": "As crianças serão divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, será colocado a \"bandeira\". O objetivo de cada tim...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "dois objetos (usados como a bandeira)"
        ],
        "steps": [
          "As crianças serão divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, será colocado a \"bandeira\"",
          "O objetivo de cada time é tentar pegar a bandeira do seu rival, sem ser pego e ao mesmo tempo não deixar pegar a sua bandeira. Vence quem conseguir pegar a bandeira do inimigo e voltar para o seu campo sem ser pego."
        ]
      },
      {
        "id": "pdf-114",
        "title": "Pegador trocado",
        "description": "Os participantes deverão formar duplas e se sentar afastados das outras duplas, espalhados pelo espaço. Ao sinal do monitor os dois alunos que serão u...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Os participantes deverão formar duplas e se sentar afastados das outras duplas, espalhados pelo espaço. Ao sinal do monitor os dois alunos que serão um \"fugitivo\" e o outro \"pegador\" deverão iniciar a brincadeira, que deverá assim funcionar: quando o fugitivo quiser ficar a salvo do \"pegador\" deverá sentar ao lado de uma das duplas que estão sentadas no chão, assim que ele sentar no lado de um colega da dupla o outro aluno, deverá levantar-se rapidamente e passará a ser o novo \"pegador\" ou seja, sempre que algum aluno que estiver sendo perseguido sentar-se ao lado de uma dupla, o outro colega da dupla deverá levantar e passará a ser o novo \"pegador."
        ]
      },
      {
        "id": "pdf-119",
        "title": "Pegador Inteligente",
        "description": "O monitor deverá dividir duas equipes com o mesmo número de participantes. Em seguida, deverá marcar uma distância e colocar uma equipe de frente para...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "O monitor deverá dividir duas equipes com o mesmo número de participantes. Em seguida, deverá marcar uma distância e colocar uma equipe de frente para a outra e sentados no chão, e às costas de cada equipe e a uma distância com uma linha marada a qual os participantes estarão à salvo de ser \"pegos\" pela outra equipe",
          "O monitor deverá determinar, que uma equipe seja \"par\" e a outra será \"ímpar\". O monitor falará um número, se o número for \"par\", a equipe \"par\" deverá se levantar rapidamente e correr para pegar os da equipe \"ímpar\"",
          "Se disser um número \"ímpar\" serão os ímpares que deverão se levantar e correr para pegar os da equipe \"par\". E assim sucessivamente. (O monitor poderá fazer contas para confundir os participantes)."
        ]
      },
      {
        "id": "pdf-126",
        "title": "Nunca 3",
        "description": "Os alunos estarão espalhados em duplas (um atrás do outro) pelo espaço disponível. Os alunos poderão estar sentados. O monitor escolhe dois alunos, ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Os alunos estarão espalhados em duplas (um atrás do outro) pelo espaço disponível. Os alunos poderão estar sentados",
          "O monitor escolhe dois alunos, um será o aluno pegador e o outro aluno terá que fugir do pegador â€¦ O aluno que está fugindo do pegador deverá escolher uma dupla e se posicionar atrás do segundo elemento. O aluno que está na frente da dupla, por sua vez, será o novo pegador (nunca poderá existir 3elementos juntos, sempre mantendo uma dupla) e deverá sair correndo atrás do aluno que era o pegador anteriormente..",
          "Esse aluno que está fugindo do novo pegador, se posicionará atrás de outra dupla e assim sucessivamente.."
        ]
      },
      {
        "id": "pdf-131",
        "title": "Escape 60",
        "description": "Primeiramente deve-se elaborar uma temática específica para o desafio. O jogo consiste em desenvolver uma série de dicas e pistas que levem os partici...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel",
          "caneta",
          "lápis",
          "entre outros..."
        ],
        "steps": [
          "Primeiramente deve-se elaborar uma temática específica para o desafio. O jogo consiste em desenvolver uma série de dicas e pistas que levem os participantes a resolver enigmas e desafios que nos levem à um caminho",
          "Uma característica da atividade é limitar o espaço à uma sala fechada ou alguma variação semelhante. O objetivo, normalmente, é fugir deste local em um determinado período previamente estipulado."
        ]
      },
      {
        "id": "pdf-133",
        "title": "Trunfo",
        "description": "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descrição e atributos de valores variados (FORâ”œçA, INTELIGâ”œÃ¨NCIA, AGILID...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel cartão",
          "caneta",
          "impressora."
        ],
        "steps": [
          "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descrição e atributos de valores variados (FORâ”œçA, INTELIGâ”œÃ¨NCIA, AGILIDADE, DESTREZA, CARISMA...). Pode-se incluir ainda cartas de personagens conhecidos, super-heróis e vilões",
          "Os participantes iniciam o jogo com a carta correspondente à sua própria pessoa. Para \"duelar\" com os outros membros do jogo basta pegá-los, quem pegar primeiro tem o direito de escolher qual atributo quer usar",
          "Quem ganhar obtém como recompensa a carta do adversário. Variações: Uma \"LOJA\" pode ser montada, onde os integrantes podem comprar outras cartas ou trocá-las",
          "Uma espécie de \"moeda\" pode ser criada e escondida pelo local onde a brincadeira está sendo realizada. Com isso, os participantes devem achar esse dinheiro e trocá-lo na loja por itens e cartas",
          "Escudo, cartas que deixam outras cartas mais fortes, cartas de categorias diferentes podem ser incluídas nas variedades da loja. O local onde o jogo está acontecendo pode ir reduzindo até os participantes não conseguirem mais escapar uns dos outros."
        ]
      },
      {
        "id": "pdf-136",
        "title": "Protegendo o Rei",
        "description": "Um participante será o rei ou a rainha, o mesmo deve ser protegido pelos \"Protetores do Rei\" e será atacado pelos \"Inimigos da Coroa\". Cada participan...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Nenhum."
        ],
        "steps": [
          "Um participante será o rei ou a rainha, o mesmo deve ser protegido pelos \"Protetores do Rei\" e será atacado pelos \"Inimigos da Coroa\". Cada participante começa o jogo com três vidas, esses devem pegar os adversários",
          "Cada vez que um integrante for pego ele perde uma vida, caso perca as três está eliminado do jogo. O objetivo dos inimigos da coroa é derrotar o rei, que tem apenas uma vida, os protetores do rei, por sua vez, devem eliminar todos os inimigos da coroa para alcançarem a vitória",
          "Pode-se montar uma \"torre\" em volta do rei com caixas, cadeiras, bambolês ou qualquer outro material disponível.."
        ]
      },
      {
        "id": "pdf-138",
        "title": "Passaporte",
        "description": "Os recreadores prepararam alguns cartões (quantidade de crianças que estiverem presentes), com nomes de no mínimo 5 países, cada país recebera uma cor...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel",
          "lápis de cor ou giz de ceira"
        ],
        "steps": [
          "Os recreadores prepararam alguns cartões (quantidade de crianças que estiverem presentes), com nomes de no mínimo 5 países, cada país recebera uma cor. Cada criança deve receber 5 cartões, um de cada país",
          "O objetivo do jogo é completar o passaporte, com todas as cores, de todos os países. Um dos recreadores será o \"tira visto\" ele ficará com um giz preto tentando \"pegar\" as crianças e riscando as cores que as mesmas já estiverem marcadas",
          "Antes de começar o jogo esse recreador deverá esconder as 5 cores escolhidas. Ganha o jogo a criança que conseguir um quadradinho pintado de cada país, sem ter o risco preto do \"tira visto\" Exemplo: BRASIL (VERDE) ARGENTINA (AZUL)"
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
        "description": "Uma competição agitada de corrida e agilidade onde as equipes lutam para serem as primeiras a capturar o tesouro central.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [
          "Um cone",
          "Uma bola"
        ],
        "steps": [
          "Forme equipes em colunas dispostas como pontas de uma estrela. Coloque a bola sobre o cone no centro.",
          "Ao sinal, o primeiro de cada coluna corre ao redor de todas as outras equipes até voltar à sua.",
          "Ele entra no túnel formado pelas pernas dos colegas e corre para pegar a bola no centro.",
          "Quem capturar a bola primeiro marca ponto para sua equipe. Repita com os próximos da fila."
        ]
      },
      {
        "id": "pdf-11",
        "title": "Bombardeio de Bolas",
        "description": "Um exercício de precisão e força onde os times tentam empurrar um alvo central para o campo adversário usando arremessos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "1 bola grande (alvo)",
          "4 a 6 bolas menores (munição)"
        ],
        "steps": [
          "Coloque a bola grande exatamente no centro da quadra e divida os participantes em duas equipes nas linhas de fundo.",
          "Distribua as bolas menores igualmente entre as equipes.",
          "Ao sinal, todos devem arremessar suas bolas para acertar o alvo central e empurrá-lo para o campo inimigo.",
          "Vence a equipe que conseguir fazer o alvo cruzar a linha de fundo do adversário primeiro."
        ]
      },
      {
        "id": "pdf-19",
        "title": "Túnel de Bolas",
        "description": "Uma gincana de revezamento que exige coordenação e sincronia para transportar a bola por todo o time.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [
          "2 bolas"
        ],
        "steps": [
          "Divida as crianças em duas colunas. Ao sinal, o primeiro de cada fila passa a bola por cima da cabeça para o colega de trás.",
          "O segundo passa por baixo das pernas, o terceiro por cima, e assim sucessivamente.",
          "Quando a bola chega ao último, ele corre para a frente da fila e reinicia o processo.",
          "A equipe que completar a rotação e trouxer o primeiro jogador de volta à frente vence."
        ]
      },
      {
        "id": "pdf-41",
        "title": "Partes do Corpo",
        "description": "Um jogo de atenção e reflexos rápidos onde o comando vocal dita o movimento das mãos até o desafio final.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "1 bola para cada dupla"
        ],
        "steps": [
          "Coloque as crianças em duas colunas, uma de frente para a outra, com uma bola no chão entre cada dupla.",
          "O monitor grita partes do corpo (Cabeça!, Pé!, Nariz!) e as crianças devem tocar na parte citada.",
          "Quando o monitor gritar 'BOLA!', as crianças devem tentar agarrar a bola antes do parceiro da frente.",
          "Quem pegar a bola primeiro vence o round. Troque as duplas para manter a dinâmica."
        ]
      },
      {
        "id": "pdf-55",
        "title": "Caça ao Tesouro de Papel",
        "description": "Uma atividade de busca e exploração que transforma o espaço em um campo de tesouros escondidos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Bolinhas de papel amassado (mínimo 20)"
        ],
        "steps": [
          "Peça para as crianças fecharem os olhos ou irem para outro local enquanto você esconde as bolinhas pelo ambiente.",
          "Ao sinal, as crianças devem procurar e coletar o maior número possível de bolinhas.",
          "Quem encontrar mais bolinhas é o vencedor da rodada e pode ajudar a esconder na próxima vez.",
          "Dica: Esconda algumas bolinhas em locais fáceis e outras em locais mais desafiadores."
        ]
      },
      {
        "id": "pdf-57",
        "title": "Abraço Protetor",
        "description": "Um pega-pega que utiliza o contato físico amigável como um 'porto seguro', incentivando a percepção corporal e rapidez.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "Uma bola macia"
        ],
        "steps": [
          "Escolha um participante para ser o pegador, que deve carregar a bola.",
          "Para capturar alguém, ele deve encostar a bola suavemente no tronco do fugitivo.",
          "O fugitivo pode se salvar se abraçar outro colega antes de ser tocado, escondendo a área de captura.",
          "O abraço deve durar no máximo 5 segundos para que todos continuem se movimentando.",
          "Troque o pegador a cada 2 ou 3 capturas."
        ]
      },
      {
        "id": "pdf-59",
        "title": "Túnel Dinâmico",
        "description": "Uma gincana de agilidade física e trabalho em equipe onde o objetivo é fazer a bola percorrer o túnel humano o mais rápido possível.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [
          "Duas bolas"
        ],
        "steps": [
          "Divida os participantes em duas equipes em colunas. Todos devem se deitar de barriga para baixo.",
          "O último de cada fila levanta, corre por cima (com as pernas abertas) ou por fora dos colegas até chegar à frente.",
          "Ao chegar na frente, ele rola a bola por baixo dos colegas, que devem levantar o quadril (ponte) para a bola passar.",
          "O novo último pega a bola e repete o processo até que todos tenham passado pela frente."
        ]
      },
      {
        "id": "pdf-66",
        "title": "Alerta",
        "description": "O jogador pega a bola e a joga para cima, grita o nome de uma pessoa. A pessoa que teve seu nome citado deve pegar a bola e gritar \"Alerta!\". Imediata...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "uma bola"
        ],
        "steps": [
          "O jogador pega a bola e a joga para cima, grita o nome de uma pessoa. A pessoa que teve seu nome citado deve pegar a bola e gritar \"Alerta!\"",
          "Imediatamente, todos devem ficar parados. O jogador dá 3 passos e, parado, deverá tentar acertar com a bola na pessoa que tiver mais próxima",
          "Se acertar, a pessoa atingida sai da brincadeira. Se errar, ele é quem sai."
        ]
      },
      {
        "id": "pdf-69",
        "title": "Arremesso de bambolê",
        "description": "Tipo arremesso de argolas, mas com bambolê. Uma pessoa será a vítima e ficará a 5 metros dos jogadores. Faz 1 ponto quem conseguir encaixar o bambolê ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "bambolês"
        ],
        "steps": [
          "Tipo arremesso de argolas, mas com bambolê. Uma pessoa será a vítima e ficará a 5 metros dos jogadores",
          "Faz 1 ponto quem conseguir encaixar o bambolê na pessoa primeiro. Ganha quem tiver mais pontos."
        ]
      },
      {
        "id": "pdf-72",
        "title": "Queimada do Rei",
        "description": "Formam-se dois times com número igual de participantes e uma pessoa de cada time é escolhida para ser o Rei. No jogo pode-se usar mais de uma bola. Se...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Uma bola"
        ],
        "steps": [
          "Formam-se dois times com número igual de participantes e uma pessoa de cada time é escolhida para ser o Rei. No jogo pode-se usar mais de uma bola",
          "Sempre que alguém da equipe é queimado, a pessoa tem que se ajoelhar no chão e esperar até conseguir pegar uma bola. Se alguém do próprio time quiser dar a bola para ela jogar, tem que se ajoelhar em seu lugar",
          "Ganha a equipe que queimar o rei adversário primeiro.."
        ]
      },
      {
        "id": "pdf-91",
        "title": "A caça e o caçador",
        "description": "O monitor irá determinar o jogador que será a caça (o fugitivo) e os outros serão os caçadores. Os caçadores tentaram queimar a caça, trocando passes ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "O monitor irá determinar o jogador que será a caça (o fugitivo) e os outros serão os caçadores. Os caçadores tentaram queimar a caça, trocando passes tentando acuar o fugitivo, e o mesmo terá que se deslocar fugindo do jogador com a bola."
        ]
      },
      {
        "id": "pdf-92",
        "title": "Jogo dos números",
        "description": "Serão divididas duas equipes, cada integrante de cada equipe receberá um número (as duas equipes deverão estar numeras com números iguais), o monitor ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Bolas (basquete",
          "futebol ou handebol)"
        ],
        "steps": [
          "Serão divididas duas equipes, cada integrante de cada equipe receberá um número (as duas equipes deverão estar numeras com números iguais), o monitor chamará um número e jogará uma bola (basquete, futebol ou handebol), as crianças irão disputar entre si e quem acertar a bola na cesta ou no gol marcará um ponto para sua equipe.",
          "O monitor pode usar como variação, chamar mais de um número e com o passar do jogo, jogar mais de uma bola para a disputa."
        ]
      },
      {
        "id": "pdf-97",
        "title": "7 caquinhos",
        "description": "Dois times, cada um no seu campo. Os campos são separados por 7 cacos. Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "7 pedrinhas",
          "ou pedaços de evea ou qualquer outra coisa que",
          "substitua."
        ],
        "steps": [
          "Dois times, cada um no seu campo. Os campos são separados por 7 cacos",
          "Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que derrubar os cacos deve erguê-los novamente, mas se protegendo da outra, que poderá queimar",
          "Quem for queimado não pode ajudar a equipe nos cacos. Se a equipe conseguir recolocar os cacos antes de todos serem queimados, ela ganha",
          "Mas se todos forem queimados e os cacos continuarem no chão, a outra equipe ganha.."
        ]
      },
      {
        "id": "pdf-101",
        "title": "Artilharia",
        "description": "Separa-se dois times. No final de cada campo, é colocada uma garrafa pet. Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do adversá...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Duas garrafas pet",
          "duas bolas"
        ],
        "steps": [
          "Separa-se dois times. No final de cada campo, é colocada uma garrafa pet",
          "Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do adversário. A equipe que derrubar a garrafa deverá erguê-la novamente, mas se protegendo da outra equipe, que poderá queimar",
          "Quem for queimado não pode erguer a garrafa. Se a equipe conseguir reerguer a garrafa antes de todos serem queimados, ganha",
          "Mas se todos forem queimados e a garrafa continuar no chão, a outra equipe ganha.."
        ]
      },
      {
        "id": "pdf-103",
        "title": "Vôlei com Lençol",
        "description": "Uma variação cooperativa do vôlei onde a bola é lançada e capturada usando lençóis, exigindo sincronia absoluta do grupo.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de vôlei ou leve",
          "2 lençóis grandes ou TNT"
        ],
        "steps": [
          "Divida as crianças em dois times. Cada time segura as pontas de um lençol esticado.",
          "O objetivo é lançar a bola para o campo adversário usando apenas o balanço do lençol.",
          "O time adversário deve amortecer e capturar a bola com seu próprio lençol sem deixá-la cair no chão.",
          "Trabalha a coordenação em grupo e o tempo de reação compartilhado."
        ]
      },
      {
        "id": "pdf-104",
        "title": "Rede Humana",
        "description": "Um desafio dinâmico onde uma barreira viva de jogadores tenta interceptar a bola enquanto as equipes disputam o ponto.",
        "duration": "15-20 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": [
          "1 bola"
        ],
        "steps": [
          "Alguns alunos formam a 'Rede Humana' sobre a linha central, de mãos dadas ou parados lado a lado.",
          "Dois times ficam em cada lado e devem trocar passes enviando a bola para o campo adversário por cima da rede.",
          "Se a Rede Humana conseguir tocar a bola, o time que lançou deve trocar de lugar com os integrantes da rede.",
          "Este jogo estimula a precisão do lançamento e a agilidade da barreira defensiva."
        ]
      },
      {
        "id": "pdf-105",
        "title": "Hand-Fut",
        "description": "Um esporte híbrido eletrizante que combina a movimentação do handebol com a técnica de finalização do futebol.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de futebol ou futsal"
        ],
        "steps": [
          "Divida os jogadores em dois times com goleiros. A bola é movida apenas com as mãos, como no handebol.",
          "O grande desafio é que o gol só pode ser marcado usando os pés ou a cabeça após um lançamento manual.",
          "Não é permitido correr com a bola na mão por mais de 3 passos sem quicar ou passar.",
          "Incentiva a criatividade tática e a coordenação entre diferentes habilidades motoras."
        ]
      },
      {
        "id": "pdf-108",
        "title": "Bruxa / Caçador",
        "description": "Traçam-se três linhas no chão, de modo a formar dois campos (A e B). O número de jogadores de um campo deve ser igual ao do outro. No jogo Bruxa, a fo...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "Traçam-se três linhas no chão, de modo a formar dois campos (A e B). O número de jogadores de um campo deve ser igual ao do outro",
          "No jogo Bruxa, a formação é livre: uma criança assume o papel de bruxa ou bruxo que procura tomar a bola. O jogo Bruxa consiste em atirar a bola sobre os participantes, a fim de acertá-los",
          "Os alvos correm de um lado para o outro, procurando não serem atingidos. O que for batido pela bola será o novo bruxo ou bruxa",
          "No jogo Caçador, escolhido o lado que iniciará a caçada, um participante joga a bola sobre um jogador do lado oposto. Aquele que for batido e não aparar a bola estará morto e passará à reserva do campo, sem direito de matar",
          "Vencerá o campo que conseguir eliminar todos os elementos do lado oposto.."
        ]
      },
      {
        "id": "pdf-115",
        "title": "Sete Passes de Ouro",
        "description": "Um jogo de posse de bola e estratégia coletiva onde a finalização só é permitida após uma sequência perfeita de passes.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de handebol ou similar"
        ],
        "steps": [
          "Divida os participantes em dois times. O objetivo é marcar um gol manual.",
          "No entanto, o gol só é validado se a equipe realizar exatamente 7 passes consecutivos entre diferentes jogadores antes do arremesso.",
          "Se a bola for interceptada ou cair no chão, a contagem de passes recomeça do zero para o time que recuperar a posse.",
          "Incentiva a movimentação em quadra e a visão de jogo periférica."
        ]
      },
      {
        "id": "pdf-118",
        "title": "Basquete 21",
        "description": "Um clássico desafio de arremessos râ”œÃ¼pido onde a precisão e o aproveitamento do rebote são as chaves para a vitória.",
        "duration": "20-25 min",
        "participants": "3+",
        "age": "9+ anos",
        "materials": [
          "1 bola de basquete",
          "1 cesta de basquete"
        ],
        "steps": [
          "Os jogadores formam uma fila. O primeiro arremessa da linha de lance livre (vale 2 pontos).",
          "Se ele errar, o próximo jogador deve pegar o rebote e arremessar do local exato onde recuperou a bola (vale 1 ponto).",
          "Se o arremessador do lance livre acertar, ele continua arremessando até errar.",
          "O objetivo é ser o primeiro a acumular exatamente 21 pontos."
        ]
      },
      {
        "id": "pdf-120",
        "title": "Jogo da velha",
        "description": "O monitor deverá dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambolês em três colunas (f...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "9 Bambolês",
          "10 bolas ou objeto que a substitua (5 de cada cor)"
        ],
        "steps": [
          "O monitor deverá dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambolês em três colunas (formato do jogo da velha)",
          "Deixar 5 bolas para cada equipe, colocá-las a frente dos bambolês. Ao sinal do monitor, os primeiros de cada coluna sairão correndo e pegaram uma bola e colocarão dentro do bambolê, voltaram correndo, bateram na mão do seu colega e o mesmo sairá correndo para fazer o mesmo, e assim sucessivamente até \"fechar\" o jogo da velha (completar três colunas ou diagonal com a cor da sua equipe)",
          "Como variação, o monitor poderá colocar obstáculos a frente do jogo para atrapalhar o participante, como cones, cordas entre outros.."
        ]
      },
      {
        "id": "pdf-122",
        "title": "Caranguejo-Gol",
        "description": "Um desafio físico intenso de força e coordenação onde o futebol é jogado em uma postura corporal inusitada.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de futsal ou leve"
        ],
        "steps": [
          "Os jogadores devem se mover na posição de caranguejo (quatro apoios, de costas para o chão, com o abdômem para cima).",
          "O objetivo é marcar gols no campo adversário chutando a bola apenas nessa posição.",
          "O quadril não deve tocar o chão durante o movimento ou o chute.",
          "Fortalece os braços, pernas e exige grande controle de equilíbrio abdominal."
        ]
      },
      {
        "id": "pdf-127",
        "title": "Base Sete",
        "description": "Um jogo de corrida e precisão inspirado no beisebol que integra o uso de bambolês como bases de segurança e pontuação.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "7 bambolês",
          "1 bola"
        ],
        "steps": [
          "Um time ataca e outro defende. O batedor (ataque) chuta a bola para o campo aberto e deve percorrer as 7 bases (bambolês).",
          "O time de defesa deve recuperar a bola e entregá-la ao 'lançador' central antes que o batedor complete o circuito.",
          "Cada base alcançada com segurança vale 1 ponto acumulativo.",
          "Se o lançador receber a bola e o batedor estiver fora de uma base, ele é eliminado da rodada."
        ]
      },
      {
        "id": "pdf-128",
        "title": "Super Dodgeball",
        "description": "Uma versão épica e estratégica do clássico queimada, com múltiplas bolas e regras especiais de resgate.",
        "duration": "20-30 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": [
          "3 a 5 bolas de queimada"
        ],
        "steps": [
          "Divida os times nas linhas de fundo. As bolas começam alinhadas no centro da quadra.",
          "Ao sinal, os jogadores correm para pegar as bolas. O objetivo é 'queimar' os adversários atingindo-os abaixo do pescoço.",
          "Regra de Resgate: Se um jogador agarrar a bola no ar antes dela tocar o chão, ele salva um colega 'queimado' de seu time.",
          "Desafio Extra: Se alguém acertar a cesta de basquete adversária com a bola, todos os colegas eliminados retornam ao jogo imediatamente."
        ]
      },
      {
        "id": "pdf-129",
        "title": "Reação Relâmpago",
        "description": "Um exercício de prontidão e controle motor onde o blefe é a principal ferramenta do líder.",
        "duration": "10-15 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "1 bola leve"
        ],
        "steps": [
          "Todos sentam em círculo com as mãos cruzadas sobre o peito. O monitor fica no centro com a bola.",
          "O monitor faz fintas e ameaças de lançamento. Se o monitor apenas fingir e a criança mover as mãos, ela perde um ponto simbólico ou sai temporariamente.",
          "Se o monitor realmente lançar a bola, a criança deve descruzar as mãos e agarrá-la rapidamente.",
          "Ã“timo para dias de chuva ou espaços internos, estimulando o foco e a inibição de impulsos."
        ]
      },
      {
        "id": "pdf-130",
        "title": "Vôlei-Pega",
        "description": "Uma mistura frenética de voleibol e pega-pega, onde cada erro em quadra gera uma perseguição imediata.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de vôlei",
          "Rede ou linha divisória"
        ],
        "steps": [
          "Inicie um jogo normal de vôlei. Quando a bola toca o chão, a equipe que marcou o ponto torna-se imediatamente a pegadora.",
          "A equipe que perdeu o ponto deve correr para cruzar a linha de fundo de sua quadra para ficar em segurança.",
          "Cada jogador capturado na perseguição vale um ponto extra para o time vencedor.",
          "Reinicie o vôlei após cada ciclo de captura."
        ]
      },
      {
        "id": "pdf-134",
        "title": "Caçador de Cones",
        "description": "Uma gincana de busca e resgate com temas de RPG, onde os jogadores devem organizar itens enquanto fogem de um caçador implacável.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "Livre",
        "materials": [
          "Bambolês",
          "Cones de cores variadas"
        ],
        "steps": [
          "Esconda 5 bambolês pelo ambiente, cada um com cones de cores específicas espalhados longe deles.",
          "Os jogadores devem reunir os cones nos bambolês correspondentes às suas cores, enquanto o Caçador tenta pegá-los.",
          "Quem for pego deve ir para um 'banco de espera' e só pode ser liberado pelo toque de um colega livre.",
          "O jogo termina quando todos os cones forem organizados ou todos os jogadores estiverem capturados."
        ]
      },
      {
        "id": "pdf-135",
        "title": "Defendendo a Torre",
        "description": "Duas equipes, cada uma com uma \"base\" circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time advers...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Cones",
          "bola."
        ],
        "steps": [
          "Duas equipes, cada uma com uma \"base\" circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time adversário e dentro da área da base de seu time",
          "O objetivo é derrubar o cone da outra equipe utilizando uma bola. A equipe que estiver defendendo não pode sair da base e só pode atacar quando recuperar a bola",
          "A equipe que está atacando, por sua vez, deve correr rapidamente para a sua base ao perder a posse da bola.."
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
        "description": "Um jogo de agilidade e exclusão social lúdica onde o objetivo é sempre garantir um lugar seguro antes que os outros o façam.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Bambolês (um a menos que o número de participantes)"
        ],
        "steps": [
          "Espalhe os bambolês pelo chão. Cada criança começa dentro de um 'abrigo', exceto uma que fica sem.",
          "Ao sinal do monitor, todos devem sair de seus abrigos e correr para encontrar um novo.",
          "Quem ficar sem abrigo na rodada assume o papel de desafiante para a próxima vez.",
          "Dica: O monitor pode remover um bambolê a cada rodada para aumentar o desafio, similar à 'Dança das Cadeiras'."
        ]
      },
      {
        "id": "pdf-18",
        "title": "Batalha de Balões",
        "description": "Uma gincana agitada que exige coordenação e cuidado, onde proteger sua 'cauda' é tão importante quanto atacar a dos outros.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "5+ anos",
        "materials": [
          "Bexigas de duas cores",
          "Barbante"
        ],
        "steps": [
          "Divida a turma em dois times (ex: Vermelho e Azul). Cada participante amarra um balão de sua cor no tornozelo com barbante.",
          "Ao sinal, todos devem tentar estourar os balões do time adversário pisando neles, protegendo os seus ao mesmo tempo.",
          "O jogo termina quando um dos times conseguir eliminar todos os balões da equipe inimiga.",
          "Mantenha a supervisão próxima para evitar quedas ou empurrões durante a disputa."
        ]
      },
      {
        "id": "pdf-60",
        "title": "Batalha Naval às Cegas",
        "description": "Um jogo de estratégia e arremesso onde a comunicação e a sorte se misturam em um campo dividido por uma barreira visual.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [
          "Bolinhas de plástico ou papel",
          "Rede ou lençol para dividir o espaço"
        ],
        "steps": [
          "Divida a quadra com um lençol alto para que os times não se vejam. Cada lado posiciona seus jogadores como 'navios' parados.",
          "As equipes lançam boinhas por cima da barreira tentando 'atingir' os navios adversários.",
          "Quem for atingido deve dizer 'Fui ao fundo!' e sentar-se, tornando-se um obstáculo ou saindo da rodada.",
          "Vence a equipe que conseguir afundar toda a frota inimiga primeiro."
        ]
      },
      {
        "id": "pdf-65",
        "title": "O Sapato Perdido",
        "description": "Uma gincana caótica e divertida que testa a organização sob pressão e o reconhecimento de pertences.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Todos os participantes tiram um pé de sapato e o colocam em uma grande pilha central misturada pelo monitor.",
          "Ao sinal, as crianças devem correr até a pilha, encontrar o seu sapato, calçá-lo e voltar para sua linha de largada.",
          "Pode ser jogado em equipes: a primeira equipe a ter todos os membros calçados e sentados vence.",
          "Esta atividade garante muitas risadas e trabalha a paciência e a observação."
        ]
      },
      {
        "id": "pdf-68",
        "title": "Duelo de Caminhos",
        "description": "Uma gincana de agilidade e sorte que utiliza bambolês como um tabuleiro humano para disputas de Jo-ken-pô.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "10 Bambolês organizados em linha ou curva"
        ],
        "steps": [
          "Organize os bambolês em fila no chão. Divida a turma em dois times, cada um em uma extremidade da trilha.",
          "Ao sinal, o primeiro de cada fila pula de bambolê em bambolê. Quando se encontrarem, devem disputar uma rodada de Jo-ken-pô.",
          "O perdedor sai da trilha e o vencedor continua avançando. Um novo colega do time que perdeu entra na trilha para interceptar o vencedor.",
          "Vence a equipe que conseguir atravessar um jogador até a base adversária primeiro."
        ]
      },
      {
        "id": "pdf-70",
        "title": "Cabo de Guerra de Bambolê",
        "description": "Uma disputa de força e resistência que utiliza um bambolê como elo entre as duplas, exigindo equilíbrio e potência muscular.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Bambolê resistente"
        ],
        "steps": [
          "Duas duplas entram no mesmo bambolê, ficando de costas uma para a outra.",
          "Trace duas linhas paralelas a 2 metros de distância de cada lado do ponto central.",
          "Ao sinal, cada dupla deve correr de frente (puxando o bambolê com o corpo) tentando cruzar sua respectiva linha.",
          "Vence a dupla que conseguir arrastar os adversários e ultrapassar a marca primeiro."
        ]
      },
      {
        "id": "pdf-82",
        "title": "Aposta de Palitos em Equipe",
        "description": "Um jogo de sorte e cooperação lúdica onde a generosidade entre colegas mantém o time na disputa.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [
          "Palitos de picolé ou de dente (3 por participante)"
        ],
        "steps": [
          "Divida as crianças em dois grupos. Cada um recebe 3 palitos. As batalhas ocorrem em duplas adversárias via Jo-ken-pô.",
          "O perdedor entrega um palito ao vencedor. Quem ficar com apenas um palito deve se sentar e aguardar.",
          "Os colegas do mesmo time que ainda têm 2 ou mais palitos podem 'doar' um palito para quem está sentado voltar ao jogo.",
          "Vence o time que conseguir coletar todos os palitos dos adversários."
        ]
      },
      {
        "id": "pdf-85",
        "title": "Genius Corporal",
        "description": "Um jogo de memória e ritmo inspirado no clássico eletrônico, mas onde os comandos são saltos e movimentos físicos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": [
          "6 Bambolês organizados em círculo ou grade"
        ],
        "steps": [
          "Monte uma grade com bambolês. Um time é o 'Atacante' (Genius) e o outro é o 'Defensor' (Memorizador).",
          "O primeiro Atacante pula em um bambolê. O primeiro Defensor deve repetir o movimento exato.",
          "Na próxima rodada, o Atacante repete o primeiro bambolê e adiciona um novo. O Defensor deve repetir a sequência completa.",
          "Se o Defensor errar a sequência, o time Atacante marca ponto. Troque os papéis após cada sequência finalizada."
        ]
      },
      {
        "id": "pdf-87",
        "title": "A Rainha da Colmeia",
        "description": "Uma variação estratégica de queimada onde a proteção de um líder secreto é a chave para a sobrevivência do time.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [
          "1 bola de queimada"
        ],
        "steps": [
          "Cada time escolhe secretamente um integrante para ser a 'Abelha Rainha'.",
          "O jogo de queimada segue normalmente, mas o objetivo principal é descobrir e eliminar a Rainha adversária.",
          "Os jogadores devem agir com cautela para não revelar quem estão protegendo demais.",
          "Se a Rainha for queimada, o time perde instantaneamente, independentemente de quantos jogadores ainda restam."
        ]
      },
      {
        "id": "pdf-94",
        "title": "Barra Manteiga Estratégica",
        "description": "Um clássico renovado que testa a explosão física e o tempo de reação em uma disputa de campo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Times frente a frente em linhas de fundo. Um desafiante vai até a linha adversária onde todos estão com as mãos estendidas para        "materials": [
          "Papel e caneta para cada time"
        ],
        "steps": [
          "O time escolhe um 'Escritor' que fica na base com o papel. O restante da equipe forma uma coluna distante.",
          "O monitor grita uma letra. Um de cada vez, o corredor corre até o escritor, diz uma palavra válida com aquela letra e volta para bater na mão do próximo.",
          "Somente após o retorno do corredor o próximo pode sair. O escritor anota as categorias (Nome, Cor, Fruta, Objeto, etc).",
          "A equipe que preencher todas as categorias corretamente primeiro ganha a rodada."
        ]
      },
      {
        "id": "pdf-116",
        "title": "Passos Unidos",
        "description": "Um exercício de sincronia e confiança onde duplas devem se mover como se fossem um único ser.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Fitas ou barbantes para unir os tornozelos"
        ],
        "steps": [
          "Una o tornozelo direito de um participante ao tornozelo esquerdo de seu parceiro usando uma fita confortável.",
          "As duplas devem caminhar ou correr até um ponto determinado em forma de gincana de revezamento.",
          "Trabalha a coordenação rítmica, comunicação verbal e o equilíbrio compartilhado.",
          "Dica: Comece com distâncias curtas para evitar tropeços até que as duplas ganhem confiança."
        ]
      },
      {
        "id": "pdf-117",
        "title": "Caranguejo Cooperativo",
        "description": "Um desafio físico exigente que testa a resistência e a sincronia motora em uma formação de fileira humana.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "A equipe forma uma coluna. Todos entram na posição de caranguejo (abdômen para cima, apoio em mãos e pés).",
          "O jogador da frente coloca as mãos sobre os tornozelos do colega de trás, criando uma corrente humana.",
          "O objetivo é que toda a fila se mova de forma sincronizada até a linha de chegada sem quebrar o elo.",
          "Mantenha o ritmo contando 'um, dois...' para ajudar a sincronia e incentive os colegas a se apoiarem."
        ]
      },
      {
        "id": "pdf-124",
        "title": "O Mistério de Mango",
        "description": "Um jogo de adivinhação e mímica que recompensa o conhecimento geral e adiciona um elemento de sorte punitiva.",
        "duration": "15-20 min",
        "steps": [
          "Divida os participantes em duas equipes. O monitor dá dicas sobre palavras específicas de categorias (Bebida, Animal, Objeto).",
          "As equipes competem para adivinhar a palavra primeiro. Cada acerto vale um ponto.",
          "Palavra Mango: Em momentos aleatórios da lista, aparece a palavra Mango. Quando ela surge, o time com mais pontos escolhe um 'mico' lúdico para o adversário.",
          "Realize rodadas rápidas e peça que o time que pagar o mico faça uma apresentação engraçada para todos."
        ]
      }
    ]
  },
  {m distâncias curtas para evitar tropeços até que as duplas ganhem confiança."
        ]
      },
      {
        "id": "pdf-117",
        "title": "Caranguejo Cooperativo",
        "description": "Um desafio físico exigente que testa a resistência e a sincronia motora em uma formação de fileira humana.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "A equipe forma uma coluna. Todos entram na posição de caranguejo (abdômen para cima, apoio em mãos e pés).",
          "O jogador da frente coloca as mãos sobre os tornozelos do colega de trás, criando uma corrente humana.",
          "O objetivo é que toda a fila se mova de forma sincronizada até a linha de chegada sem quebrar o elo.",
          "Mantenha o ritmo contando 'um, dois...' para ajudar a sincronia e incentive os colegas a se apoiarem."
        ]
      },
      {
        "id": "pdf-124",
        "title": "O Mistério de Mango",
        "description": "Um jogo de adivinhação e mímica que recompensa o conhecimento geral e adiciona um elemento de sorte punitiva.",
        "duration": "15-20 min",
        "steps": [
          "Divida os participantes em duas equipes. O monitor dá dicas sobre palavras específicas de categorias (Bebida, Animal, Objeto).",
          "As equipes competem para adivinhar a palavra primeiro. Cada acerto vale um ponto.",
          "Palavra Mango: Em momentos aleatórios da lista, aparece a palavra Mango. Quando ela surge, o time com mais pontos escolhe um 'mico' lúdico para o adversário.",
          "Realize rodadas rápidas e peça que o time que pagar o mico faça uma apresentação engraçada para todos."
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
        "description": "Uma versão cooperativa da clássica dança das cadeiras, onde ninguém é excluído e o objetivo é o apoio mútuo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Cadeiras (uma a menos que o grupo)"
        ],
        "steps": [
          "Organize as cadeiras em círculo. Quando a música parar, todos devem tentar sentar.",
          "O grupo deve se organizar para que todos sentem, mesmo que no colo ou dividindo espaço, para que ninguém seja excluído.",
          "A cada rodada, o monitor retira uma cadeira, desafiando o grupo a encontrar soluções coletivas de acomodação.",
          "Incentive o contato físico respeitoso e a ajuda mútua para que todos permaneçam seguros no jogo."
        ]
      },
      {
        "id": "pdf-106",
        "title": "Banquinho do Saber",
        "description": "Um jogo de vocabulário e rapidez mental onde os participantes competem para encontrar palavras antes do tempo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Cadeira e Cronômetro"
        ],
        "steps": [
          "Responda ao tema proposto em 5 segundos sem repetir o que já foi dito pelos colegas.",
          "Falhou no tempo? Pegue seu banquinho e torça para os amigos da audiência.",
          "O último mestre das categorias sagra-se campeão do vocabulário expresso.",
          "Incentive os participantes com aplausos e peça que digam palavras cada vez mais complexas a cada rodada."
        ]
      },
      {
        "id": "pdf-111",
        "title": "Salada de Memória",
        "description": "Um exercício de memória cumulativa onde o grupo constrói uma lista cada vez maior de itens sem erros.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Repita toda a sequência de itens ditos anteriormente e adicione o seu próprio de forma criativa.",
          "Qualquer erro na ordem ou no nome interrompe a corrente e inicia um novo tema central.",
          "Quantos itens o grupo consegue memorizar em conjunto antes do primeiro tropeço?",
          "Peça que o grupo tente bater o próprio recorde de itens memorizados a cada nova rodada."
        ]
      },
      {
        "id": "pdf-123",
        "title": "Gato e Rato Cego",
        "description": "Um duelo auditivo emocionante onde dois participantes vendados se encontram usando apenas sinais sonoros.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [
          "Vendas"
        ],
        "steps": [
          "O Cachorro late e o Gato mia no centro do círculo de silêncio absoluto dos colegas.",
          "O Cachorro deve caçar o Gato baseando-se apenas na direção do som dos miados.",
          "O Gato deve ser furtivo e mudar de posição para não ser capturado pela audição do cão.",
          "Mantenha o silêncio absoluto e troque as duplas para que todos experimentem os dois papéis."
        ]
      },
      {
        "id": "pdf-125",
        "title": "Memória Humana",
        "description": "Uma versão gigante do clássico jogo de pares, onde os próprios participantes se tornam as peças escondidas.",
        "duration": "20-25 min",
        "participants": "10+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "As 'peças' humanas combinam gestos em duplas. O jogador deve encontrar os pares espalhados.",
          "Ao ser tocado, o par faz seu movimento. Se forem iguais, o ponto é marcado.",
          "Um teste de observação facial e espacial em larga escala para todo o grupo.",
          "Peça que as duplas criem gestos cada vez mais engraçados e desafie os jogadores a encontrá-los rapidamente."
        ]
      },
      {
        "id": "pdf-132",
        "title": "O Grande Tribunal",
        "description": "Uma simulação dramática e divertida onde a retórica é a arma principal entre defesa e acusação.",
        "duration": "25-40 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [
          "Martelo lúdico"
        ],
        "steps": [
          "Debata casos cômicos propostos pelo monitor, defendendo ou acusando com base na lábia pura.",
          "Convencer o Juiz e o Júri é o objetivo final dessa batalha de argumentos absurdos.",
          "Os vereditos são baseados na criatividade da defesa e na força da acusação teatral.",
          "Promova um ambiente de debate saudável e declare a 'Melhor Tese' da rodada com um prêmio simbólico."
        ]
      },
      {
        "id": "pdf-137",
        "title": "Duelo Pistas Explosivas",
        "description": "Um mistério de alta pressão onde as evidências cruciais estão escondidas dentro de bexigas coloridas.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "Livre",
        "materials": [
          "Bexigas e Papel"
        ],
        "steps": [
          "Estoure as bexigas caçadas no campo para revelar pedaços da investigação do crime proposto.",
          "Reúna as pistas e apresente a solução do caso na Delegacia central do monitor.",
          "Rapidez na caça e lógica na interpretação são os pilares dessa vitória explosiva.",
          "Reúna todos para a grande revelação do mistério e parabenize a equipe que decifrou o caso primeiro."
        ]
      }
    ]
  }
];