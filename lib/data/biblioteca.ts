import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiFireLine, RiFlashlightLine, RiHandHeartLine
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
    games: [
      { id: "c1", title: "Cinema de Improviso", description: "O grupo deve criar uma cena de filme baseada em três palavras sorteadas pelo recreador.", duration: "20 min", participants: "6+", age: "8+", materials: ["Papel", "Caneta"], steps: ["Sorteie três palavras aleatórias.", "Divida o grupo em equipes.", "Cada equipe tem 5 minutos para ensaiar.", "Apresentação da cena para os demais."] },
      { id: "c2", title: "Stop de Movimentos", description: "Um Stop adaptado onde as categorias são ações físicas que todos devem executar ao final.", duration: "15 min", participants: "4+", age: "6+", materials: ["Papel", "Lápis"], steps: ["Desenhe a tabela de Stop.", "Categorias: Animal, Objeto, Esporte, etc.", "Ao terminar, quem gritou Stop define um movimento que todos devem fazer.", "Soma de pontos tradicional."] },
      { id: "c3", title: "Mestre das Sombras", description: "Usando uma lanterna ou luz forte, os participantes criam formas com as mãos na parede.", duration: "15 min", participants: "2+", age: "5+", materials: ["Lanterna ou luminária"], steps: ["Apague as luzes principais.", "Um participante por vez vai à 'tela'.", "Os outros tentam adivinhar o que a sombra representa.", "Troca de mestre a cada acerto."] },
      { id: "c4", title: "Escultura de Papel", description: "Com folhas de rascunho, cada um deve criar a maior torre possível sem usar cola.", duration: "15 min", participants: "2+", age: "7+", materials: ["Papel de rascunho"], steps: ["Entregue 10 folhas para cada um.", "O desafio é apenas dobrar e encaixar.", "A torre deve ficar em pé por pelo menos 10 segundos.", "Medição final."] },
      { id: "c5", title: "Telefone sem Fio de Desenho", description: "A clássica brincadeira, mas desenhando nas costas do colega.", duration: "20 min", participants: "6+", age: "8+", materials: ["Papel", "Canetinha"], steps: ["Formem uma fila.", "O último desenha algo nas costas do colega da frente com o dedo.", "A mensagem passa até o primeiro.", "O primeiro desenha no papel o que sentiu."] },
      { id: "c6", title: "Museu de Cera", description: "Um vigia deve circular pelo salão enquanto as estátuas tentam mudar de lugar sem serem vistas.", duration: "15 min", participants: "8+", age: "6+", materials: [], steps: ["Um vigia fica de costas.", "As estátuas se movem em direção ao vigia.", "Quando o vigia vira, todos congelam.", "Se o vigia vir alguém se mexendo, essa pessoa volta ao início."] },
      { id: "c7", title: "Maestro Famoso", description: "Um 'detetive' deve descobrir quem é o maestro que está liderando os movimentos de todos.", duration: "10 min", participants: "10+", age: "6+", materials: [], steps: ["Um participante sai da sala.", "O grupo escolhe o maestro.", "O maestro faz movimentos rítmicos e todos imitam.", "O detetive volta e tem 3 chances para achar o maestro."] },
      { id: "c8", title: "Circuito de Copos", description: "Um mini desafio de agilidade empilhando e desempilhando copos plásticos.", duration: "10 min", participants: "2+", age: "6+", materials: ["Copos descartáveis"], steps: ["Crie uma pirâmide de 6 copos.", "Cronometre o tempo para montar e desmontar.", "Desafio: sem derrubar nenhum no chão.", "Quem fizer em menos tempo vence."] },
      { id: "c9", title: "Jogo das Colheres", description: "Transporte pequenos objetos usando apenas uma colher na boca por um percurso curto.", duration: "15 min", participants: "4+", age: "7+", materials: ["Colheres", "Bolinhas de gude ou ping-pong"], steps: ["Marque uma linha de saída e chegada.", "Coloque a colher na boca com o objeto.", "As mãos devem ficar para trás.", "Se cair, volta para o início do percurso."] },
      { id: "c10", title: "Mímica Temática", description: "Adivinhação clássica focada em temas como 'Profissões' ou 'Desenhos Animados'.", duration: "20 min", participants: "6+", age: "5+", materials: ["Papel picado"], steps: ["Sorteie o tema.", "Um participante atua sem emitir sons.", "O grupo que adivinhar primeiro ganha o ponto.", "Rodízio de atores."] }
    ]
  },
  {
    id: "piscina",
    label: "Piscina e Água",
    icon: RiDropFill,
    color: "#007AFF",
    bg: "#E5F1FF",
    description: "Diversão aquática com segurança — para piscinas, clubes e colônias.",
    games: [
      { id: "p1", title: "Caça ao Tubarão", description: "Um tubarão tenta pegar os peixinhos que cruzam a piscina.", duration: "15 min", participants: "8+", age: "6+", materials: [], steps: ["O tubarão fica no centro da piscina.", "Os peixinhos na borda.", "Ao sinal, todos tentam atravessar.", "Quem for pego vira tubarão também."] },
      { id: "p2", title: "Mergulho Colorido", description: "Itens coloridos são jogados e as equipes devem buscar as suas cores.", duration: "15 min", participants: "6+", age: "8+", materials: ["Objetos que afundam (argolas/tampinhas)"], steps: ["Jogue os itens no fundo da piscina.", "Divida o grupo por cores.", "Ao sinal, mergulham para pegar apenas sua cor.", "Vence quem recolher tudo primeiro."] },
      { id: "p3", title: "Vôlei de Lençol Aquático", description: "Usar toalhas para lançar e receber balões de água sobre a rede.", duration: "20 min", participants: "4+", age: "10+", materials: ["Toalhas", "Balões de água"], steps: ["Duplas seguram as pontas da toalha.", "O balão deve ser lançado com a toalha.", "A outra dupla deve aparar sem estourar.", "Pode ser jogado com ou sem rede."] },
      { id: "p4", title: "Marco Polo Tradicional", description: "Jogo de perseguição onde o pegador fica de olhos fechados guiando-se pelo som.", duration: "10 min", participants: "5+", age: "7+", materials: [], steps: ["O pegador fecha os olhos.", "Grita 'Marco', e os outros respondem 'Polo'.", "O pegador tenta tocar em alguém baseando-se nas vozes.", "Quem for tocado vira o Marco Polo."] },
      { id: "p5", title: "Corrida de Esponjas", description: "Encher um balde usando apenas uma esponja molhada em um trajeto de ida e volta.", duration: "15 min", participants: "6+", age: "6+", materials: ["Esponjas", "Baldes"], steps: ["Coloque o balde vazio a uma distância da piscina.", "Molhe a esponja na piscina.", "Corra e esprema no balde.", "Vence a equipe que encher primeiro até a marca."] },
      { id: "p6", title: "Rede de Peixes", description: "O pegador vai ganhando ajudantes que dão as mãos formando uma rede.", duration: "15 min", participants: "10+", age: "6+", materials: [], steps: ["Um pegador inicial.", "Sempre que pegar alguém, dão as mãos.", "A corrente vai crescendo.", "Apenas as pontas da rede podem tocar nos peixes."] },
      { id: "p7", title: "Batalha de Cavalinho", description: "Coordenação e força em duplas (um no ombro do outro) para tentar derrubar o adversário na água.", duration: "20 min", participants: "4+", age: "12+", materials: [], steps: ["Monte as duplas.", "O de cima tenta desequilibrar o outro de cima.", "Não é permitido puxar o cabelo ou o de baixo.", "Derrubou na água, ponto para a dupla."] },
      { id: "p8", title: "Basquete Hidráulico", description: "Arremessos em cestas flutuantes ou em um círculo formado pelos braços de um colega.", duration: "15 min", participants: "6+", age: "8+", materials: ["Bola de vinil"], steps: ["Divida as equipes.", "O objetivo é passar a bola até o alvo.", "Quem está com a bola não pode nadar/andar.", "Jogo de passes rápidos."] },
      { id: "p9", title: "Estátua de Mergulho", description: "Quem consegue fazer a pose mais criativa antes de entrar na água (ou dentro dela).", duration: "10 min", participants: "4+", age: "6+", materials: [], steps: ["O recreador define um tema (ex: super-herói).", "Um por vez salta ou mergulha fazendo a pose.", "O grupo julga a melhor performance.", "Foco em diversão, não em técnica."] },
      { id: "p10", title: "Fuga do Chafariz", description: "Passar por baixo de arcos de água sem se molhar (se estiver fora da piscina) ou sob cordas flutuantes.", duration: "10 min", participants: "5+", age: "5+", materials: ["Mangueira ou corda"], steps: ["Crie um obstáculo com a água ou corda.", "Desafio de agilidade e flexibilidade.", "Pode-se baixar o nível a cada rodada (estilo Limbo).", "Divertido para dias de calor."] }
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
      { id: "f1", title: "Guerra das Tribos", description: "Gincana clássica de disputa de território e pontos com bandeiras coloridas.", duration: "60 min", participants: "20+", age: "8+", materials: ["Bandeiras", "Coletes", "Cones"], steps: ["Divida as tribos por cores.", "Esconda a bandeira da tribo no campo.", "O objetivo é roubar a bandeira adversária e levar à base.", "Se for tocado em campo inimigo, vai para a 'prisão'."] },
      { id: "f2", title: "Caça ao Tesouro com Pistas", description: "Enigmas espalhados por todo o acampamento levam à grande recompensa final.", duration: "45 min", participants: "10+", age: "7+", materials: ["Envelopes com pistas", "Prêmio"], steps: ["Prepare as pistas rimadas ou em código.", "Espalhe pelos pontos estratégicos.", "Divida em equipes.", "A primeira a chegar ao tesouro vence."] },
      { id: "f3", title: "Festival de Talentos", description: "Momento para cada criança mostrar uma habilidade especial: dança, canto, piada ou mágica.", duration: "40 min", participants: "Livre", age: "5+", materials: ["Som ou microfone fake"], steps: ["Inscrição prévia dos atos.", "Crie um palco improvisado.", "Apresentações curtas (2 min).", "Aplausômetro final para todos."] },
      { id: "f4", title: "Desfile de Fantasias de Lixo", description: "Criatividade máxima usando apenas materiais recicláveis para criar um 'look' de gala.", duration: "50 min", participants: "10+", age: "6+", materials: ["Jornal", "Fita crepe", "Sacos plásticos"], steps: ["Distribua o material por grupo.", "Tempo para confecção da roupa no modelo da equipe.", "Desfile com trilha sonora animada.", "Votação por criatividade e resistência da roupa."] },
      { id: "f5", title: "Rastro de Tinta", description: "Seguir trilhas de cores diferentes na grama ou quadra para encontrar o capitão perdido.", duration: "30 min", participants: "15+", age: "5+", materials: ["Farinha colorida ou fitas"], steps: ["O recreador marca caminhos que se cruzam.", "Cada equipe segue apenas sua cor.", "Existem caminhos falsos (becos sem saída).", "Encontre o capitão no final do caminho certo."] },
      { id: "f6", title: "Mestre Cuca Maluco", description: "Montagem de lanches criativos ou esculturas de frutas em grupo.", duration: "30 min", participants: "6+", age: "5+", materials: ["Frutas", "Bolachas", "Pratos"], steps: ["Higienize as mãos de todos.", "Apresente o tema (ex: animal marinho).", "Grupos montam a comida usando os ingredientes.", "Momento da degustação coletiva."] },
      { id: "f7", title: "Gruda-Gruda de Equipes", description: "Corrida onde os membros da equipe devem estar sempre em contato físico (ex: costas com costas).", duration: "15 min", participants: "10+", age: "7+", materials: [], steps: ["Defina o trajeto.", "As duplas ou trios devem se colar.", "Não pode soltar até a linha de chegada.", "Se soltar, volta 3 passos."] },
      { id: "f8", title: "Quiz de Conhecimentos da Colônia", description: "Perguntas sobre os monitores, o local e as atividades realizadas no dia.", duration: "20 min", participants: "10+", age: "8+", materials: ["Apito"], steps: ["Forme os grupos.", "Pergunta lançada pelo monitor.", "Quem apitar primeiro responde.", "Sistema de pontos por acerto."] },
      { id: "f9", title: "Cabo de Guerra Gigante", description: "Força coordenada com toda a tribo unida por uma única corda resistente.", duration: "10 min", participants: "20+", age: "9+", materials: ["Corda grossa", "Fita marcadora"], steps: ["Marque o centro da corda.", "Distribua as tribos nas pontas.", "Ao sinal, puxam com ritmo.", "A equipe que puxar a fita central para seu lado vence."] },
      { id: "f10", title: "Hora do Grito de Guerra", description: "Criação e apresentação da coreografia e hino da tribo ou do grupo.", duration: "20 min", participants: "Livre", age: "6+", materials: [], steps: ["Tempo para criação (10 min).", "O hino deve incluir o nome da equipe.", "Apresentação para os juízes.", "Avaliação de entusiasmo, letra e união."] }
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
      { id: "q1", title: "Detetive do Objeto", description: "Um objeto some da sala e o detetive deve descobrir o que mudou de lugar.", duration: "10 min", participants: "4+", age: "5+", materials: [], steps: ["O detetive observa a sala por 30 segundos.", "Sai da sala.", "O grupo esconde ou muda um objeto.", "O detetive volta e tenta identificar a mudança."] },
      { id: "q2", title: "Mestre Mandou de Cadeira", description: "Comandos feitos todos sentados, exigindo apenas movimentos de braços e expressões.", duration: "10 min", participants: "3+", age: "4+", materials: ["Cadeiras"], steps: ["Todos sentados em círculo.", "Comandos tradicionais ('Mestre mandou mão na orelha').", "Velocidade aumenta progressivamente.", "Quem levantar ou errar sai."] },
      { id: "q3", title: "Palavras Proibidas", description: "Um debate sobre um tema engraçado, mas ninguém pode dizer as palavras 'Sim' ou 'Não'.", duration: "15 min", participants: "4+", age: "9+", materials: [], steps: ["Escolha um tema polêmico e bobo.", "O mediador faz perguntas diretas.", "O participante deve responder sem as 2 palavras.", "Quem gaguejar ou falar os proibidos perde ponto."] },
      { id: "q4", title: "Corrida de Tampinhas", description: "Trecho curto na mesa ou chão onde as tampinhas avançam com 'tecos' dos dedos.", duration: "15 min", participants: "2+", age: "7+", materials: ["Tampinhas de garrafa"], steps: ["Crie uma pista com fita crepe.", "Cada um tem um toque por vez.", "Se sair da pista, volta ao início.", "A primeira tampinha a cruzar vence."] },
      { id: "q5", title: "História Coletiva de 1 Palavra", description: "O grupo cria um conto onde cada pessoa só pode falar uma única palavra por vez.", duration: "10 min", participants: "5+", age: "8+", materials: [], steps: ["Defina um título inicial (ex: O Gigante).", "Cada um fala uma palavra seguindo a ordem.", "O objetivo é fazer a história ter sentido.", "Tente finalizar a história em 2 minutos."] },
      { id: "q6", title: "Escravos de Jó de Mão", description: "Ritmo e coordenação usando apenas as mãos na mesa ou colo.", duration: "10 min", participants: "4+", age: "6+", materials: ["Objetos pequenos ou mãos"], steps: ["Siga a música tradicional.", "O movimento deve ser síncrono.", "Aumente a velocidade da música.", "Quem errar o tempo continua, mas paga um mico."] },
      { id: "q7", title: "Adivinhação de Desenho Minimalista", description: "Desenhar um objeto usando apenas 3 linhas retas ou curvas.", duration: "15 min", participants: "3+", age: "7+", materials: ["Lousa ou papel"], steps: ["O desenhista pensa em algo.", "Faz apenas as 3 linhas.", "O grupo tenta adivinhar.", "Se ninguém acertar, ele desenha mais uma linha."] },
      { id: "q8", title: "Yoga dos Bichos", description: "Poses de equilíbrio inspiradas em animais, perfeitas para acalmar os pequenos.", duration: "10 min", participants: "2+", age: "4+", materials: [], steps: ["Pose do gato (alongar).", "Pose do flamingo (equilíbrio).", "Pose da cobra (chão).", "Foco na respiração e silêncio."] },
      { id: "q9", title: "Mercado da Dona Maria", description: "Jogo de memória cumulativo: 'Fui ao mercado e comprei...'", duration: "10 min", participants: "4+", age: "6+", materials: [], steps: ["O primeiro diz um item.", "O segundo repete o item e adiciona outro.", "A lista vai crescendo.", "Quem esquecer um item anterior sai."] },
      { id: "q10", title: "Bamba de Equilíbrio", description: "Andar sobre uma linha de fita no chão fazendo desafios como fechar os olhos por 3 segundos.", duration: "10 min", participants: "2+", age: "5+", materials: ["Fita crepe"], steps: ["Cole a fita em linha reta.", "O participante deve pisar apenas na fita.", "Desafios: agachar, girar ou andar de ré.", "Ótimo para coordenação motora fina."] }
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
      { id: "z1", title: "O Rei Mandou", description: "Clássico jogo de atenção e comandos rápidos do líder.", duration: "15 min", participants: "5+", age: "4+", materials: [], steps: ["O líder dá ordens.", "Só vale se começar com 'O Rei Mandou'.", "Quem fizer sem o comando é eliminado.", "Último a ficar ganha."] },
      { id: "z2", title: "Corre Cutia Humano", description: "Versão adaptada da roda onde o toque é a ferramenta de troca.", duration: "15 min", participants: "6+", age: "5+", materials: [], steps: ["Todos em círculo sentados.", "Um corre por fora.", "Toca no ombro de alguém.", "O escolhido deve correr para o lado oposto e chegar na vaga primeiro."] },
      { id: "z3", title: "Mestre da Risada", description: "Ficar sério enquanto todos os outros tentam te fazer rir apenas com caretas.", duration: "10 min", participants: "4+", age: "5+", materials: [], steps: ["Um participante fica no centro.", "O grupo faz caretas e gestos (sem tocar).", "O do centro tenta aguentar 1 minuto sem rir.", "Se rir, perde o posto."] },
      { id: "z4", title: "Jo-Ken-Pô Gigante", description: "Pedra, papel ou tesoura usando o corpo inteiro e equipes.", duration: "15 min", participants: "10+", age: "6+", materials: [], steps: ["Defina os gestos para cada um.", "Equipes decidem em segredo seu golpe.", "Ficam frente a frente.", "A equipe que ganhar tenta pegar os perdedores que correm para a base."] },
      { id: "z5", title: "Verdade ou Mentira Vocal", description: "Contar um fato sobre si mesmo e o grupo deve deduzir se é real ou invenção.", duration: "20 min", participants: "5+", age: "9+", materials: [], steps: ["Conte uma história curta.", "O grupo pode fazer perguntas.", "Votação coletiva.", "Revelação final."] },
      { id: "z6", title: "Maestro do Silêncio", description: "Tentar atravessar uma sala cheia de 'minas terrestres' imaginárias sem fazer barulho.", duration: "15 min", participants: "5+", age: "6+", materials: [], steps: ["O maestro fica de olhos vendados.", "Os outros devem passar ao redor dele.", "Se ele ouvir algo e apontar na direção certa, a pessoa volta.", "Chegar ao outro lado em silêncio absoluto."] },
      { id: "z7", title: "Ponte Humana", description: "Trabalho em equipe para passar o último da fila para o início sem tocar o solo.", duration: "15 min", participants: "10+", age: "10+", materials: [], steps: ["Todos sentados em duas filas frente a frente.", "Dão as mãos formando uma rede.", "Um integrante (leve) deita sobre os braços.", "É passado até o fim da fila."] },
      { id: "z8", title: "Adoleta Rítmico", description: "Sequência de palmas e batidas que vai acelerando e mudando de parceiro.", duration: "10 min", participants: "4+", age: "5+", materials: [], steps: ["Use músicas tradicionais.", "Crie batidas de mãos complexas.", "Incentive parcerias cruzadas.", "Quem perder o ritmo sai do círculo."] },
      { id: "z9", title: "Tudo o que o Mestre fizer...", description: "Jogo de imitação direta onde todos devem ser a sombra do líder.", duration: "10 min", participants: "3+", age: "4+", materials: [], steps: ["O mestre caminha e faz gestos.", "Todos devem imitar perfeitamente atrás.", "O mestre tenta ser imprevisível.", "Troca de mestre a cada 2 minutos."] },
      { id: "z10", title: "Batalha de Polegar", description: "O clássico 'Um, dois, três e já!' com os dedos entrelaçados.", duration: "5 min", participants: "2+", age: "6+", materials: [], steps: ["Entrelaçar as mãos deixando o polegar livre.", "Tentar prender o polegar do adversário por 3 segundos.", "Melhor de três rodadas.", "Torneio em chaves se houver muita gente."] }
    ]
  },
  {
    id: "musical",
    label: "Ritmo Musical",
    icon: RiMusicLine,
    color: "#FFCC00",
    bg: "#FFF9E5",
    description: "O ritmo como ferramenta de aprendizado e diversão.",
    games: [
      { id: "m1", title: "Dança das Cadeiras Musical", description: "O clássico, mas com gêneros musicais que definem como você deve caminhar.", duration: "20 min", participants: "8+", age: "5+", materials: ["Cadeiras", "Música"], steps: ["Organize as cadeiras.", "Se tocar Samba: samba; se tocar Rock: pula.", "Música parou, todos buscam lugar.", "Dificuldade aumenta com movimentos."] },
      { id: "m2", title: "Batata Quente Rítmica", description: "Passar o objeto no tempo da música; quem estiver com ele quando a batida parar cumpre um desafio.", duration: "15 min", participants: "6+", age: "5+", materials: ["Bola ou objeto"], steps: ["Roda sentada.", "Objeto circula enquanto a música toca.", "Música para, a pessoa sorteada faz uma mímica musical.", "Reinicia o ritmo."] },
      { id: "m3", title: "Eco Humano", description: "O mestre faz uma sequência de batidas corporais e o grupo deve repetir com o mesmo tempo e intensidade.", duration: "15 min", participants: "5+", age: "6+", materials: [], steps: ["Monitor faz: Palmas, batida no peito, estalo.", "Grupo repete sincronizado.", "Aumente a complexidade (ex: sapateado).", "Variações de volume (forte/fraco)."] },
      { id: "m4", title: "Karaokê do Emoji", description: "Cantar músicas famosas substituindo as palavras por sons estranhos indicados por emojis.", duration: "20 min", participants: "4+", age: "8+", materials: ["Letra da música"], steps: ["Escolha uma música conhecida do grupo.", "Mostre um emoji (ex: sapo).", "Todos devem cantar a música fazendo som de sapo.", "Risada garantida."] },
      { id: "m5", title: "Estátua Musical das Emoções", description: "Dançar livremente e, ao parar, expressar com o corpo uma emoção dita pelo recreador.", duration: "15 min", participants: "5+", age: "5+", materials: ["Música"], steps: ["Música animada.", "Grito: 'Estátua Triste!', 'Estátua Super-herói!'.", "Manter a pose por 5 segundos.", "Rodada de fotos divertidas."] },
      { id: "m6", title: "Qual é a Música?", description: "O recreador batuca o ritmo de uma música famosa apenas com uma caneta na mesa, e o grupo adivinha.", duration: "15 min", participants: "4+", age: "7+", materials: ["Caneta"], steps: ["Monitor escolhe hit atual.", "Faz apenas a batida percussiva.", "Quem souber levanta a mão.", "Ponto para a equipe que cantar o refrão."] },
      { id: "m7", title: "Limbo Tônico", description: "Passar por baixo da corda conforme o ritmo da música fica mais lento ou mais rápido.", duration: "15 min", participants: "6+", age: "6+", materials: ["Corda ou bastão"], steps: ["Corda horizontal.", "A pessoa deve passar inclinando para trás.", "A cada volta a corda desce.", "Não pode encostar as mãos no chão."] },
      { id: "m8", title: "Percussão de Copos (Cup Song)", description: "Aprender a batida rítmica clássica usando copos plásticos na mesa.", duration: "30 min", participants: "4+", age: "10+", materials: ["Copos plásticos rígidos"], steps: ["Ensine o passo a passo lento da batida.", "Treine a virada do copo no tempo certo.", "Tente fazer todos juntos em uníssono.", "Adicione a música de fundo."] },
      { id: "m9", title: "Orquestra Maluca", description: "Cada seção do grupo faz um som diferente (bumbo, prato, violino) criando uma harmonia engraçada.", duration: "15 min", participants: "10+", age: "6+", materials: [], steps: ["Divida o grupo em 3 seções.", "Seção A: 'Tum, Tum'; Seção B: 'Tchi!'; Seção C: 'Ui!'.", "O regente controla o volume de cada.", "Crie um 'refrão' do grupo."] },
      { id: "m10", title: "Duelo de Rimas no Ritmo", description: "No tempo de 4 batidas, cada um deve falar uma palavra que rime com a anterior.", duration: "20 min", participants: "6+", age: "12+", materials: [], steps: ["Marque o tempo (1, 2, 3, 4).", "No 4, a pessoa rima.", "Se errar ou demorar, sai.", "Nível de dificuldade aumenta conforme o tema."] }
    ]
  },
  {
    id: "quebra_gelo",
    label: "Quebra-Gelo",
    icon: RiFireLine,
    color: "#FF2D55",
    bg: "#FFE5EB",
    description: "Dinâmicas para turmas que acabaram de se conhecer.",
    games: [
      { id: "qg1", title: "Teia de Conexões", description: "Um novelo de lã que passa de mão em mão criando uma rede enquanto as pessoas se apresentam.", duration: "20 min", participants: "10+", age: "8+", materials: ["Novelo de lã"], steps: ["O primeiro segura a ponta e diz seu nome e um hobby.", "Joga o novelo para alguém de quem gostou da história.", "A rede vai se formando.", "Ao final, todos seguram a teia simbolizando união."] },
      { id: "qg2", title: "Duas Verdades e uma Mentira", description: "Clássico jogo social para descobrir curiosidades inusitadas sobre o colega.", duration: "25 min", participants: "5+", age: "10+", materials: [], steps: ["Escreva 3 fatos sobre você.", "Dois são reais, um é falso.", "O grupo deve questionar e votar na mentira.", "O narrador revela a verdade no final."] },
      { id: "qg3", title: "Encontre alguém que...", description: "Uma lista de características que os participantes devem sair perguntando aos outros para preencher a ficha.", duration: "15 min", participants: "15+", age: "7+", materials: ["Papel e caneta"], steps: ["Lista: 'Gosta de pizza', 'Fala outra língua', etc.", "Sair pelo salão conversando.", "Só vale um nome por item.", "Quem completar a lista primeiro grita 'Bingo!'."] },
      { id: "qg4", title: "Sinal Verde de Nomes", description: "Apresentação de nomes através de um jogo de reflexo e apontamentos.", duration: "15 min", participants: "10+", age: "8+", materials: [], steps: ["Círculo em pé.", "Um no centro aponta e diz o nome de alguém.", "O apontado deve dizer o nome de quem está à esquerda.", "Se demorar, vai para o centro."] },
      { id: "qg5", title: "Abraço Coletivo de Números", description: "O monitor grita um número e as pessoas devem formar grupos exatamente com essa quantidade.", duration: "15 min", participants: "20+", age: "5+", materials: [], steps: ["Todos circulam no espaço.", "Grito: 'Grupos de 4!'.", "Quem ficar de fora dos grupos paga um mico leve.", "Promove a mistura rápida de pessoas."] },
      { id: "qg6", title: "Entrevista Relâmpago", description: "Duplas se entrevistam por 2 minutos e depois devem apresentar o parceiro para o grupo todo.", duration: "20 min", participants: "10+", age: "10+", materials: [], steps: ["Monte as duplas.", "Cronometre 1 min para cada lado.", "Apresentação: 'Este é o João e ele ama surfar'.", "Foco em ouvir o próximo."] },
      { id: "qg7", title: "Nó Humano", description: "Todos dão as mãos de forma aleatória no centro e o desafio é desfazer o nó sem soltar as mãos.", duration: "20 min", participants: "8+", age: "9+", materials: [], steps: ["Todos no centro com olhos fechados dão as mãos.", "Seguram mãos de pessoas diferentes.", "Abram os olhos.", "Tentem virar e passar por baixo até virar um círculo perfeito."] },
      { id: "qg8", title: "Mestre dos Elogios", description: "Colar um papel nas costas e os outros circulam escrevendo uma qualidade que perceberam na pessoa.", duration: "20 min", participants: "10+", age: "12+", materials: ["Fita", "Papel", "Caneta"], steps: ["Todos com papel nas costas.", "Silêncio e música calma.", "Cada um escreve algo positivo nos colegas.", "Leitura individual das qualidades ao final."] },
      { id: "qg9", title: "Troca de Lugares", description: "Diga uma característica e todos que a possuem devem trocar de lugar no círculo.", duration: "15 min", participants: "15+", age: "7+", materials: ["Cadeiras ou marcação"], steps: ["Círculo menos uma vaga.", "Líder diz: 'Troque quem tem irmão'.", "Todos com irmão correm para novas vagas.", "Quem sobrar de pé vira o novo líder."] },
      { id: "qg10", title: "Escultura Humana de Grupo", description: "Criação de uma única forma/estátua usando o corpo de todos os participantes juntos.", duration: "10 min", participants: "10+", age: "6+", materials: [], steps: ["Tema definido (ex: Nave espacial).", "Um começa no centro em uma pose.", "O próximo se conecta fisicamente.", "Até que todos façam parte da 'máquina' ou 'forma'."] }
    ]
  },
  {
    id: "noturnas",
    label: "Noturnas",
    icon: RiFlashlightLine,
    color: "#34C759",
    bg: "#E8F9EB",
    description: "Caças com lanterna e mistério no escuro.",
    games: [
      { id: "n1", title: "O Fantasma da Lanterna", description: "Um monitor escondido emite pulsos de luz e as crianças devem localizá-lo em silêncio.", duration: "30 min", participants: "10+", age: "8+", materials: ["Lanternas"], steps: ["Região de mata ou pátio escuro.", "O 'fantasma' pisca luz a cada 30 segundos.", "Crianças devem cercar o fantasma sem usar suas luzes.", "Pegou o fantasma, ganha a rodada."] },
      { id: "n2", title: "Caça ao Vaga-lume", description: "Pequenos bastões de luz (glow sticks) são escondidos e as equipes devem recolher sua cor.", duration: "25 min", participants: "15+", age: "6+", materials: ["Bastões de luz (Glow sticks)"], steps: ["O recreador esconde centenas de bastões acesos.", "Equipes com cores específicas.", "Vence quem trouxer mais itens da sua cor para a base.", "Tome cuidado com buracos no terreno."] },
      { id: "n3", title: "Mensagem em Código Morse", description: "Uso de lanternas para sinalizar letras simples e o grupo decifrar do outro lado do campo.", duration: "20 min", participants: "6+", age: "10+", materials: ["Lanternas forte"], steps: ["Defina um alfabeto de luz (curto/longo).", "Envie uma palavra.", "O grupo receptor deve anotar os pulsos.", "Vence quem decifrar primeiro."] },
      { id: "n4", title: "Infiltrados no Acampamento", description: "Um grupo tenta entrar na base sem ser iluminado pelo 'vigia' central que tem uma lanterna.", duration: "30 min", participants: "10+", age: "11+", materials: ["Lanterna potente"], steps: ["O vigia fica no centro em um círculo.", "Os infiltrados começam a 50 metros.", "Devem chegar ao centro sem que a lanterna os foque.", "Se iluminado e nomeado, volta ao início."] },
      { id: "n5", title: "Trilha dos Mistérios", description: "Percurso noturno com paradas onde se escutam pedaços de um conto de suspense.", duration: "40 min", participants: "10+", age: "9+", materials: ["Lanternas", "Velas fake"], steps: ["Crie estações com monitores parados.", "O grupo caminha em fila única.", "Em cada parada, ouve 1 minuto da história.", "Grande revelação na última estação."] },
      { id: "n6", title: "Desenho com Luz (Light Painting)", description: "Usar a câmera do celular em longa exposição para 'desenhar' no ar com lanternas.", duration: "20 min", participants: "4+", age: "8+", materials: ["Lanterna", "Celular com app de câmera"], steps: ["Ambiente breu total.", "Cadeiras fixas para o celular.", "Participante faz movimentos com a luz.", "Resultado visual impressionante na foto final."] },
      { id: "n7", title: "Esconde-Esconde Noturno de Equipes", description: "Clássico jogo mas com as equipes trocando de lugar e usando as sombras.", duration: "30 min", participants: "12+", age: "10+", materials: [], steps: ["Equipe A se esconde.", "Equipe B procura.", "Use apito se demorar muito para achar.", "Foco em estratégia de mimetismo."] },
      { id: "n8", title: "Contação de Histórias na Fogueira", description: "Momento de união e imaginação ao redor do fogo (ou luz que simule fogo).", duration: "30 min", participants: "Livre", age: "Livre", materials: ["Fogueira ou luz laranja"], steps: ["Todos sentados próximos.", "Passe um bastão da fala.", "Histórias podem ser reais ou criadas na hora.", "Finalize com músicas calmas."] },
      { id: "n9", title: "Vultos no Escuro", description: "Tentar identificar objetos apenas pelo contorno (silhueta) contra uma luz ao fundo.", duration: "15 min", participants: "6+", age: "7+", materials: ["Lanterna", "Objetos variados"], steps: ["Coloque a luz contra um lençol.", "Passe objetos por trás.", "A equipe chuta o nome do objeto.", "Itens bizarros tornam a brincadeira mais difícil."] },
      { id: "n10", title: "Desafio do Ponto Cego", description: "Seguir um som constante (apito ou palmas) no escuro total para achar a saída.", duration: "15 min", participants: "6+", age: "8+", materials: ["Apito"], steps: ["Grupo de mãos dadas ou no ombro.", "Caminham guiados pelo som do monitor.", "Monitor silencia se houver bagunça.", "Chegada em um local seguro e iluminado."] }
    ]
  },
  {
    id: "cooperativas",
    label: "Cooperativas",
    icon: RiHandHeartLine,
    color: "#00C7BE",
    bg: "#E5F9F8",
    description: "Todos vencem! O objetivo é unir o grupo para superar desafios.",
    games: [
      { id: "cp1", title: "O Tapete Mágico", description: "O grupo deve virar um cobertor/lona sem que ninguém pise para fora dele.", duration: "20 min", participants: "8+", age: "10+", materials: ["Lona ou cobertor"], steps: ["Todos ficam em cima da lona.", "O objetivo é virar o lado avesso para cima.", "Nenhum pé pode tocar o chão durante o processo.", "Requer muita conversa e equilíbrio coletivo."] },
      { id: "cp2", title: "Transporte de Água Furado", description: "Levar água de um balde a outro usando copos com furos que devem ser tampados pelos dedos dos colegas.", duration: "20 min", participants: "10+", age: "8+", materials: ["Copos furados", "Baldes"], steps: ["Fila entre os baldes.", "O copo passa de mão em mão.", "Todos devem ajudar a manter a água dentro.", "Vence o grupo quando o balde final atingir a marca."] },
      { id: "cp3", title: "Círculo de Equilíbrio (Sentar no Colo)", description: "Todos no círculo giram e, ao sinal, todos sentam no joelho da pessoa de trás simultaneamente.", duration: "10 min", participants: "15+", age: "12+", materials: [], steps: ["Círculo bem fechado.", "Todos viram para a direita.", "Mãos no ombro da frente.", "Sinal: 'Senta!'. Se todos confiarem, ninguém cai."] },
      { id: "cp4", title: "Aranha de Barbante", description: "Criar uma teia de barbante que sustenta um objeto no centro enquanto o grupo se move.", duration: "25 min", participants: "6+", age: "9+", materials: ["Barbante", "Argola ou bola"], steps: ["Cada um segura um fio amarrado a um anel central.", "Uma bola é colocada sobre o anel.", "O grupo deve levar a bola de um ponto a outro sem deixar cair.", "Controle da tensão dos fios é a chave."] },
      { id: "cp5", title: "Ponte de Jornais", description: "Atravessar um espaço 'de lava' usando apenas algumas folhas de jornal que devem ser movidas coletivamente.", duration: "20 min", participants: "6+", age: "7+", materials: ["Jornal"], steps: ["O grupo recebe 3 folhas a menos que o número de pessoas.", "Devem revezar as folhas no chão para avançar.", "Se alguém pisar na 'lava', o grupo volta 2 metros.", "Cooperar para não deixar ninguém para trás."] },
      { id: "cp6", title: "Máquina Humana", description: "Cada um vira uma peça de uma máquina complexa com sons e movimentos coordenados.", duration: "15 min", participants: "8+", age: "5+", materials: [], steps: ["O primeiro faz um movimento e som repetitivo.", "O segundo se acopla a ele.", "Continue até todos estarem engatados.", "O monitor pode acelerar ou desacelerar a máquina."] },
      { id: "cp7", title: "Alfabeto Humano", description: "O grupo deve formar letras e palavras deitados ou em pé usando seus corpos.", duration: "15 min", participants: "10+", age: "7+", materials: [], steps: ["O monitor grita uma palavra curta.", "As equipes têm 1 minuto para formar no chão.", "Vista de cima, a palavra deve ser legível.", "Desafio aumenta com frases curtas."] },
      { id: "cp8", title: "Corrente de Bambolê (Sem Mãos)", description: "Passar o bambolê pelo corpo de todos na roda sem nunca soltar as mãos dadas.", duration: "10 min", participants: "10+", age: "6+", materials: ["Bambolê"], steps: ["Roda de mãos dadas.", "Insira o bambolê no braço de um.", "Deve atravessar o círculo todo.", "Acelere a cada tentativa e tente bater o recorde."] },
      { id: "cp9", title: "Apoio do Amigo", description: "Duplas de costas uma para outra devem tentar levantar do chão sem usar as mãos.", duration: "10 min", participants: "4+", age: "8+", materials: [], steps: ["Senta de costas, braços entrelaçados.", "Pressione as costas uma contra a outra.", "Faça força com as pernas juntas.", "Tente fazer em trios para maior dificuldade."] },
      { id: "cp10", title: "Confiança Cega", description: "Um guia deve conduzir um colega de olhos vendados por um percurso de obstáculos apenas com a voz.", duration: "15 min", participants: "4+", age: "8+", materials: ["Vendas"], steps: ["Crie o percurso.", "O guia não pode tocar no vendado.", "Instruções claras ('Dois passos à esquerda').", "Troque os papéis na metade do caminho."] }
    ]
  }
]
