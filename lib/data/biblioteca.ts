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
    description: "Atividades para crianÃƒÂ§as de 3 a 4 anos.",
    games: [
      {
        "id": "pdf-2",
        "title": "O Lobo",
        "description": "Uma emocionante brincadeira de suspense e perseguiÃƒÂ§ÃƒÂ£o onde os pequenos devem encontrar o lobo escondido e fugir rapidamente para a casa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolha um participante para ser o lobo enquanto os demais fecham os olhos e contam atÃƒÂ© um nÃƒÂºmero combinado na 'casa'.",
          "Enquanto o grupo conta, o lobo se esconde. Ao terminar a contagem, todos saem ÃƒÂ  procura do lobo pelo espaÃƒÂ§o.",
          "O primeiro a encontrar o lobo grita: 'Vejo um cordeiro cheio de lÃƒÂ£!'. Todos se aproximam do local com cuidado.",
          "Quando alguÃƒÂ©m gritar: 'Vejo um lobo cheio de lÃƒÂ£!', o lobo pula de seu esconderijo e tenta pegar alguÃƒÂ©m antes que cheguem na casa. Quem for pego vira o novo lobo."
        ]
      },
      {
        "id": "pdf-3",
        "title": "Para Direita e Para Esquerda",
        "description": "Atividade divertida para trabalhar a lateralidade e o reflexo motor, onde as crianÃƒÂ§as devem responder rapidamente aos comandos do lÃƒÂ­der.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "BambolÃƒÂªs ou fita crepe para marcaÃƒÂ§ÃƒÂ£o"
        ],
        "steps": [
          "Distribua bambolÃƒÂªs ou faÃƒÂ§a marcaÃƒÂ§ÃƒÂµes no chÃƒÂ£o. Cada crianÃƒÂ§a deve ficar posicionada em seu local.",
          "O recreador grita comandos como 'Direita!' ou 'Esquerda!', e as crianÃƒÂ§as devem pular para o lado correspondente.",
          "Para aumentar o desafio, use sinais sonoros: dois toques de apito para direita e um para esquerda.",
          "Inclua tambÃƒÂ©m comandos de 'Frente' e 'TrÃƒÂ¡s' para tornar a atividade mais dinÃƒÂ¢mica e desafiadora."
        ]
      },
      {
        "id": "pdf-4",
        "title": "Campo Minado",
        "description": "Um teste de confianÃƒÂ§a e coordenaÃƒÂ§ÃƒÂ£o onde as crianÃƒÂ§as devem atravessar um circuito de obstÃƒÂ¡culos guiadas apenas pela voz de seus colegas.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Cones, cordas ou objetos pequenos para cansar obstÃƒÂ¡culos",
          "Vendas para os olhos"
        ],
        "steps": [
          "Monte um circuito com diversos obstÃƒÂ¡culos (cones, garrafas, pelÃƒÂºcias) e divida as crianÃƒÂ§as em duplas.",
          "Um integrante da dupla ÃƒÂ© vendado e o outro atua como o guia, que nÃƒÂ£o pode tocar no colega, apenas dar comandos de voz.",
          "O objetivo ÃƒÂ© atravessar o 'campo minado' sem encostar em nenhum obstÃƒÂ¡culo. Se encostar, deve voltar ao inÃƒÂ­cio ou receber uma penalidade leve.",
          "Incentive a construÃƒÂ§ÃƒÂ£o de um ambiente de silÃƒÂªncio e foco para que o guia seja ouvido claramente."
        ]
      },
      {
        "id": "pdf-8",
        "title": "A Sombra",
        "description": "Jogo de imitaÃƒÂ§ÃƒÂ£o e observaÃƒÂ§ÃƒÂ£o que estimula a criatividade e a coordenaÃƒÂ§ÃƒÂ£o motora atravÃƒÂ©s da movimentaÃƒÂ§ÃƒÂ£o em duplas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Divida as crianÃƒÂ§as em duplas e espalhe-as pelo ambiente. Um serÃƒÂ¡ o 'Mestre' e o outro serÃƒÂ¡ a 'Sombra'.",
          "O Mestre realiza movimentos diversos pelo espaÃƒÂ§o (pular, girar, rastejar) e a Sombra deve imitÃƒÂ¡-lo o mais fielmente possÃƒÂ­vel e instantaneamente.",
          "Ao sinal do recreador, os papÃƒÂ©is se invertem e quem era a sombra passa a ditar os movimentos.",
          "Para uma variaÃƒÂ§ÃƒÂ£o, aumente as equipes para trios ou quartetos, onde todos devem imitar o lÃƒÂ­der da fila."
        ]
      },
      {
        "id": "pdf-9",
        "title": "Medusa",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o emocionante do 'estÃƒÂ¡tua', onde as crianÃƒÂ§as tentam se aproximar da Medusa sem serem vistas em movimento.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Uma crianÃƒÂ§a ÃƒÂ© escolhida para ser a Medusa e fica de costas para o grupo, no final do campo.",
          "Os outros participantes comeÃƒÂ§am a se aproximar lentamente. O objetivo ÃƒÂ© chegar nela e tocar em seu ombro.",
          "A Medusa pode se virar a qualquer momento. Se ela vir alguÃƒÂ©m se mexendo, aponta para a pessoa e ela deve voltar para a linha de partida.",
          "Aquele que conseguir tocar na Medusa primeiro sem ser pego ganha a rodada e assume o lugar dela."
        ]
      },
      {
        "id": "pdf-13",
        "title": "Toca do Coelho",
        "description": "Um jogo dinÃƒÂ¢mico de agilidade e troca de lugares que promove a interaÃƒÂ§ÃƒÂ£o e a diversÃƒÂ£o coletiva entre as crianÃƒÂ§as.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Forme grupos de trÃƒÂªs pessoas: dois dÃƒÂ£o as mÃƒÂ£os fazendo uma 'toca' e um fica no meio sendo o 'coelho'. Deixe alguns coelhos sozinhos sem toca.",
          "Ao sinal do recreador, todos os coelhos devem sair de suas tocas e procurar uma nova, enquanto os coelhos sem toca tentam entrar em uma.",
          "Ao grito de 'Ventania!', todos (tocas e coelhos) devem se soltar e correr livremente. Ao grito de 'Toca do Coelho!', todos devem reformar os trios.",
          "Sempre mude os papÃƒÂ©is para que as tocas tambÃƒÂ©m tenham a chance de ser coelhos."
        ]
      },
      {
        "id": "pdf-14",
        "title": "MÃƒÂ£os de Cores",
        "description": "Uma atividade sensorial lÃƒÂºdica que mistura reconhecimento de cores com alongamento e contato social leve.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "PeÃƒÂ§a para as crianÃƒÂ§as formarem um cÃƒÂ­rculo (preferencialmente sem sapatos se o ambiente permitir).",
          "O recreador atua como o condutor inicial e dÃƒÂ¡ ordens como: 'MÃƒÂ£o direita no vermelho!'.",
          "As crianÃƒÂ§as devem tocar com a mÃƒÂ£o direita em qualquer objeto ou detalhe da roupa de um colega que tenha a cor vermelha.",
          "O objetivo ÃƒÂ© manter o cÃƒÂ­rculo conectado enquanto as posiÃƒÂ§ÃƒÂµes ficam cada vez mais engraÃƒÂ§adas e desafiadoras."
        ]
      },
      {
        "id": "pdf-15",
        "title": "CaÃƒÂ§a ao Tesouro",
        "description": "O clÃƒÂ¡ssico jogo de exploraÃƒÂ§ÃƒÂ£o adaptado para os pequenos, estimulando a curiosidade e o foco na busca por objetos escondidos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Pequenos objetos temÃƒÂ¡ticos ou brindes (bolinhas, pecinhas coloridas)"
        ],
        "steps": [
          "Esconda diversos objetos pelo ambiente sem que as crianÃƒÂ§as vejam (pode-se usar o lÃƒÂºdico de serem 'pedras preciosas' ou 'moedas piratas').",
          "Ao sinal do recreador, as crianÃƒÂ§as saem ÃƒÂ  procura dos tesouros. Cada objeto encontrado deve ser levado atÃƒÂ© um ponto central.",
          "Para tornar mais interessante, peÃƒÂ§a que busquem cores especÃƒÂ­ficas ou tipos diferentes de objetos em cada rodada.",
          "Termine a atividade revelando um 'Grande Tesouro' coletivo para que todos ganhem juntos."
        ]
      },
      {
        "id": "pdf-21",
        "title": "Corrida de Saci",
        "description": "Uma gincana de equilÃƒÂ­brio e forÃƒÂ§a que desafia as crianÃƒÂ§as a completarem um percurso usando apenas uma perna.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Corda ou fita para marcar partida e chegada"
        ],
        "steps": [
          "Demarque uma linha de partida e uma linha de chegada com uma distÃƒÂ¢ncia segura apropriada para a idade.",
          "Ao sinal, as crianÃƒÂ§as devem pular com um pÃƒÂ© sÃƒÂ³ (estilo Saci PererÃƒÂª) atÃƒÂ© cruzar a linha final.",
          "Se alguÃƒÂ©m colocar os dois pÃƒÂ©s no chÃƒÂ£o, deve voltar dois passos para trÃƒÂ¡s ou retornar ao inÃƒÂ­cio como incentivo ao desafio.",
          "FaÃƒÂ§a rodadas de aquecimento e depois uma corrida oficial para aumentar a animaÃƒÂ§ÃƒÂ£o."
        ]
      },
      {
        "id": "pdf-23",
        "title": "CamaleÃƒÂ£o",
        "description": "Um jogo de perseguiÃƒÂ§ÃƒÂ£o e reconhecimento de cores onde as crianÃƒÂ§as devem correr para se proteger no objeto da cor certa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma crianÃƒÂ§a ÃƒÂ© o CamaleÃƒÂ£o e fica ao centro. O grupo grita: 'Ãƒâ€ CamaleÃƒÂ£o, que cor?', e ele responde uma cor ÃƒÂ  sua escolha.",
          "ApÃƒÂ³s a resposta, todos devem correr para tocar em algum objeto do ambiente que possua essa cor exata para estarem salvos.",
          "O CamaleÃƒÂ£o tenta pegar alguÃƒÂ©m antes que toquem na cor. Quem for pego torna-se o novo CamaleÃƒÂ£o para a prÃƒÂ³xima rodada.",
          "Dica: Certifique-se de que o ambiente tenha uma boa variedade de cores visÃƒÂ­veis nÃƒÂ­tidas."
        ]
      },
      {
        "id": "pdf-24",
        "title": "A Fila Viva",
        "description": "ExercÃƒÂ­cio de coordenaÃƒÂ§ÃƒÂ£o e espÃƒÂ­rito de equipe onde todos devem se mover como um ÃƒÂºnico organismo de mÃƒÂ£os dadas.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "PeÃƒÂ§a para as crianÃƒÂ§as formarem uma corrente segurando as mÃƒÂ£os uma da outra em fila.",
          "Um condutor lidera a fila e dÃƒÂ¡ ordens de movimento como: 'A corrente se encolhe!' (todos se juntam) ou 'A corrente se alarga!' (todos se esticam).",
          "Adicione outros comandos criativos como 'A corrente agacha!', 'A corrente pula!' ou 'A corrente corre em curvas!'.",
          "Incentive que ninguÃƒÂ©m solte as mÃƒÂ£os, trabalhando a noÃƒÂ§ÃƒÂ£o de grupo e o cuidado com o colega ao lado."
        ]
      },
      {
        "id": "pdf-26",
        "title": "Reizinho Mandou",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o clÃƒÂ¡ssica do 'O Mestre Mandou' que exercita a atenÃƒÂ§ÃƒÂ£o, o respeito as regras e a criatividade motora.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Escolha uma crianÃƒÂ§a para ser o 'Reizinho'. O restante do grupo fica ÃƒÂ  frente dele.",
          "O Reizinho diz: 'Reizinho mandou!', e o grupo pergunta: 'Fazer o quÃƒÂª?'.",
          "O Reizinho entÃƒÂ£o determina uma tarefa lÃƒÂºdica (ex: pular como sapo, imitar um elefante, tocar no pÃƒÂ©).",
          "O recreador deve garantir que o papel de Reizinho seja rotativo para que todos liderem a brincadeira."
        ]
      },
      {
        "id": "pdf-34",
        "title": "CÃƒÂ©u e Terra",
        "description": "Jogo de oposiÃƒÂ§ÃƒÂ£o e reflexo que ajuda as crianÃƒÂ§as a distinguirem comandos e aprimorarem a agilidade no salto.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Uma corda longa"
        ],
        "steps": [
          "Estenda uma corda no chÃƒÂ£o. Um lado serÃƒÂ¡ o 'CÃƒÂ©u' e o outro serÃƒÂ¡ a 'Terra'.",
          "As crianÃƒÂ§as comeÃƒÂ§am em um dos lados. Quando o recreador gritar 'CÃƒÂ©u!', todos devem pular para o lado correspondente.",
          "O recreador pode tentar confundir o grupo gritando o mesmo nome duas vezes ou aumentando a velocidade dos comandos.",
          "Quem errar o pulo pode fazer um desafio divertido antes de retornar ÃƒÂ  brincadeira."
        ]
      },
      {
        "id": "pdf-35",
        "title": "Cruzando o Rio",
        "description": "Um desafio lÃƒÂºdico de coordenaÃƒÂ§ÃƒÂ£o e criatividade onde as crianÃƒÂ§as devem cruzar um 'rio imaginÃƒÂ¡rio' usando pedras de papel.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Folhas de papel sulfite ou jornal (3 por crianÃƒÂ§a)"
        ],
        "steps": [
          "Crie o cenÃƒÂ¡rio lÃƒÂºdico: o chÃƒÂ£o ÃƒÂ© um rio cheio de jacarÃƒÂ©s e as folhas de papel sÃƒÂ£o as ÃƒÂºnicas pedras seguras.",
          "Cada crianÃƒÂ§a recebe 3 folhas. Elas devem colocar uma folha e pisar, colocar a prÃƒÂ³xima ÃƒÂ  frente e pisar, e assim sucessivamente.",
          "Ao usar a ÃƒÂºltima folha, devem se equilibrar, recolher a folha que ficou para trÃƒÂ¡s e trazÃƒÂª-la para frente para continuar o caminho.",
          "O objetivo ÃƒÂ© chegar ao 'outro lado da margem' sem tocar no chÃƒÂ£o com os pÃƒÂ©s."
        ]
      },
      {
        "id": "pdf-38",
        "title": "O Feiticeiro e as EstÃƒÂ¡tuas",
        "description": "Jogo de perseguiÃƒÂ§ÃƒÂ£o cooperativo onde os 'enfeitiÃƒÂ§ados' precisam da ajuda dos amigos para voltarem ao jogo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um voluntÃƒÂ¡rio comeÃƒÂ§a como o 'Feiticeiro' e perseguirÃƒÂ¡ os demais em um espaÃƒÂ§o delimitado.",
          "Quem for tocado pelo Feiticeiro fica 'enfeitiÃƒÂ§ado': deve ficar imÃƒÂ³vel como uma estÃƒÂ¡tua, com as pernas afastadas.",
          "Para salvar um amigo, outra crianÃƒÂ§a que ainda estÃƒÂ¡ livre deve passar por baixo das pernas da estÃƒÂ¡tua.",
          "O jogo termina quando todos forem transformados em estÃƒÂ¡tua ou apÃƒÂ³s um tempo determinado para trocar o Feiticeiro."
        ]
      },
      {
        "id": "pdf-40",
        "title": "NÃƒÂ£o Me FaÃƒÂ§a Rir",
        "description": "Um exercÃƒÂ­cio engraÃƒÂ§ado de autocontrole e expressÃƒÂ£o facial, perfeito para momentos de transiÃƒÂ§ÃƒÂ£o e calma.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em duplas, onde um serÃƒÂ¡ o 'Comediante' e o outro o 'Sentinela'.",
          "O Comediante tem 30 segundos para fazer caretas e movimentos engraÃƒÂ§ados (sem tocar no colega) para fazÃƒÂª-lo rir.",
          "O Sentinela deve manter a expressÃƒÂ£o sÃƒÂ©ria a todo custo. Se rir, os papÃƒÂ©is se invertem imediatamente.",
          "Pode ser feito em cÃƒÂ­rculo, onde um integrante vai ao centro tentar fazer a roda inteira rir."
        ]
      },
      {
        "id": "pdf-46",
        "title": "O Monstro Faminto",
        "description": "Uma brincadeira lÃƒÂºdica de equilÃƒÂ­brio e cooperaÃƒÂ§ÃƒÂ£o que usa desenhos no chÃƒÂ£o para criar uma narrativa de aventura.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Giz colorido"
        ],
        "steps": [
          "Desenhe um grande monstro no chÃƒÂ£o com a boca bem aberta. Todos as crianÃƒÂ§as comeÃƒÂ§am em cima do desenho (o corpo do monstro).",
          "Ao sinal, as crianÃƒÂ§as devem tentar se manter equilibradas sem sair do desenho enquanto o 'monstro' tenta 'engoli-las' (delimite uma ÃƒÂ¡rea perigosa).",
          "Use a narrativa de que quem cair na boca do monstro deve ajudar o recreador a pegar os outros amigos puxando-os pelo braÃƒÂ§o com cuidado.",
          "O objetivo ÃƒÂ© ser o ÃƒÂºltimo aventureiro a escapar da barriga do monstro."
        ]
      },
      {
        "id": "pdf-49",
        "title": "A Bruxa Gargalhada",
        "description": "Um clÃƒÂ¡ssico pega-pega com elementos dramÃƒÂ¡ticos e regras de 'tempo' que tornam a perseguiÃƒÂ§ÃƒÂ£o mais estratÃƒÂ©gica.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante ÃƒÂ© escolhido para ser a Bruxa e deve contar atÃƒÂ© 20 em sua 'caverna' enquanto os outros se espalham.",
          "A Bruxa sai ÃƒÂ  caÃƒÂ§a e, ao tocar em alguÃƒÂ©m, grita: 'Bruxa!'. Essa pessoa assume o lugar dela imediatamente.",
          "Combine um local seguro como 'ferrolho' onde a Bruxa nÃƒÂ£o pode entrar. Se alguÃƒÂ©m cansar, grita 'Isola!' para uma pausa curta.",
          "Incentive a Bruxa a fazer sons assustadores e lÃƒÂºdicos para aumentar a imersÃƒÂ£o na brincadeira."
        ]
      },
      {
        "id": "pdf-50",
        "title": "Em Busca das Cores Perdidas",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o do caÃƒÂ§a ao tesouro que utiliza cores e pontuaÃƒÂ§ÃƒÂµes para estimular a observaÃƒÂ§ÃƒÂ£o e a rapidez.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Cartolinas ou papÃƒÂ©is de cores variadas",
          "CronÃƒÂ´metro"
        ],
        "steps": [
          "Corte papÃƒÂ©is em pequenos pedaÃƒÂ§os de cores diferentes e esconda-os pelo local.",
          "Defina pontos para cada cor (ex: azul vale 10, dourado vale 50). Informe as crianÃƒÂ§as sobre a tabela de pontos.",
          "DÃƒÂª um tempo determinado (ex: 3 minutos) para que todos busquem o mÃƒÂ¡ximo de papÃƒÂ©is que conseguirem.",
          "No final, reÃƒÂºna todos para somar os pontos de cada um e celebrar os pequenos exploradores."
        ]
      },
      {
        "id": "pdf-53",
        "title": "Chefe Comanda",
        "description": "Um jogo de diÃƒÂ¡logo e imitaÃƒÂ§ÃƒÂ£o que reforÃƒÂ§a o seguimento de instruÃƒÂ§ÃƒÂµes e a coordenaÃƒÂ§ÃƒÂ£o motora bÃƒÂ¡sica.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Inicie o diÃƒÂ¡logo clÃƒÂ¡ssico com as crianÃƒÂ§as em fila: Chefe diz 'Boca de forno!', e elas respondem 'Forno!'.",
          "Chefe: 'Tirar um bolo?', CrianÃƒÂ§as: 'Bolo!'. Chefe: 'Fareis tudo o que o mestre mandar?', CrianÃƒÂ§as: 'Faremos todos!'.",
          "O Chefe entÃƒÂ£o dÃƒÂ¡ ordens simples: 'DÃƒÂª trÃƒÂªs pulos!', 'Gire como um piÃƒÂ£o!', 'Toque no nariz!'.",
          "Quem concluir a tarefa ganha um elogio e o jogo continua com a troca do Chefe a cada rodada."
        ]
      },
      {
        "id": "pdf-54",
        "title": "BalÃƒÂ£o FujÃƒÂ£o",
        "description": "Uma atividade de controle motor e paciÃƒÂªncia onde as crianÃƒÂ§as devem guiar um balÃƒÂ£o apenas usando o vento.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "3+ anos",
        "materials": [
          "Bexigas infladas",
          "PedaÃƒÂ§os de papelÃƒÂ£o ou leques"
        ],
        "steps": [
          "Demarque uma linha de largada e uma de chegada. Cada crianÃƒÂ§a recebe um balÃƒÂ£o e um pedaÃƒÂ§o de papelÃƒÂ£o.",
          "O objetivo ÃƒÂ© levar o balÃƒÂ£o do inÃƒÂ­cio ao fim sem tocÃƒÂ¡-lo com as mÃƒÂ£os ou pÃƒÂ©s, apenas abanando com o papelÃƒÂ£o para criar vento.",
          "Se o balÃƒÂ£o fugir muito longe, a crianÃƒÂ§a deve reposicionÃƒÂ¡-lo e continuar de onde parou.",
          "Esta atividade ajuda muito na percepÃƒÂ§ÃƒÂ£o espacial e no controle delicado de movimentos."
        ]
      },
      {
        "id": "pdf-56",
        "title": "Caixa de sensaÃƒÂ§ÃƒÂµes",
        "description": "A caixa deverÃƒÂ¡ ter um furo no meio para que as crianÃƒÂ§as coloquem a mÃƒÂ£o. Dentro da caixa deverÃƒÂ¡ ter algum objeto. A crianÃƒÂ§a deverÃƒÂ¡ estar vendada, coloc...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Caixa de sapato ou qualquer outra",
          "objetos variados."
        ],
        "steps": [
          "A caixa deverÃƒÂ¡ ter um furo no meio para que as crianÃƒÂ§as coloquem a mÃƒÂ£o. Dentro da caixa deverÃƒÂ¡ ter algum objeto.",
          "A crianÃƒÂ§a deverÃƒÂ¡ estar vendada, colocara a mÃƒÂ£o na caixa e tentarÃƒÂ¡ descobrir qual ÃƒÂ© o objeto."
        ]
      }
    ]
  },
  {
    id: "psicomotricidade",
    label: "Psicomotricidade & EquilÃƒÂ­brio",
    icon: RiUserVoiceLine,
    color: "#FF9500",
    bg: "#FFF4E5",
    description: "Circuitos, equilÃƒÂ­brio e coordenaÃƒÂ§ÃƒÂ£o.",
    games: [
      {
        "id": "pdf-7",
        "title": "Circuitos",
        "description": "Circuitos psicomotores para trabalhar velocidade, lateralidade, coordenaÃƒÂ§ÃƒÂ£o das crianÃƒÂ§as, pode ser montado a escolha do monitor.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "bambolÃƒÂªs",
          "cones",
          "cordas",
          "bolas"
        ],
        "steps": [
          "Circuitos psicomotores para trabalhar velocidade, lateralidade, coordenaÃƒÂ§ÃƒÂ£o das crianÃƒÂ§as, pode ser montado a escolha do monitor."
        ]
      }
    ]
  },
  {
    id: "roda_musica",
    label: "Jogos de Roda & MÃƒÂºsica",
    icon: RiMusicLine,
    color: "#007AFF",
    bg: "#E5F1FF",
    description: "Ritmos, cantigas e rodas.",
    games: [
      {
        "id": "pdf-10",
        "title": "EstÃƒÂ¡tua Musical",
        "description": "A clÃƒÂ¡ssica brincadeira de congelar no tempo que treina o controle inibitÃƒÂ³rio e a atenÃƒÂ§ÃƒÂ£o auditiva de forma muito divertida.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Aparelho de som ou celular com mÃƒÂºsicas animadas"
        ],
        "steps": [
          "Toque uma mÃƒÂºsica bem animada e deixe as crianÃƒÂ§as danÃƒÂ§arem livremente pelo espaÃƒÂ§o.",
          "Sem aviso prÃƒÂ©vio, pause a mÃƒÂºsica. Nesse momento, todos devem congelar imediatamente na posiÃƒÂ§ÃƒÂ£o em que estÃƒÂ£o.",
          "O recreador pode tentar fazer caretas para que as 'estÃƒÂ¡tuas' riam ou se mexam. Quem se mover volta ÃƒÂ  danÃƒÂ§a na prÃƒÂ³xima rodada.",
          "VariaÃƒÂ§ÃƒÂ£o: determine poses especÃƒÂ­ficas para o congelamento, como 'estÃƒÂ¡tua de super-herÃƒÂ³i' ou 'estÃƒÂ¡tua de animal'."
        ]
      },
      {
        "id": "pdf-16",
        "title": "DanÃƒÂ§a das Cadeiras",
        "description": "Um jogo de velocidade e percepÃƒÂ§ÃƒÂ£o espacial onde o nÃƒÂºmero de lugares diminui a cada rodada, aumentando a emoÃƒÂ§ÃƒÂ£o.",
        "duration": "15-20 min",
        "participants": "5+",
        "age": "3+ anos",
        "materials": [
          "Cadeiras (uma a menos que o nÃƒÂºmero de participantes)",
          "MÃƒÂºsica animada"
        ],
        "steps": [
          "Organize as cadeiras em cÃƒÂ­rculo, voltadas para fora. As crianÃƒÂ§as caminham ao redor delas enquanto a mÃƒÂºsica toca.",
          "Quando a mÃƒÂºsica parar, todos devem tentar sentar em uma das cadeiras disponÃƒÂ­veis.",
          "Quem ficar sem cadeira sai da brincadeira e uma cadeira ÃƒÂ© removida para a prÃƒÂ³xima rodada.",
          "O vencedor ÃƒÂ© aquele que conseguir sentar na ÃƒÂºltima cadeira restante."
        ]
      },
      {
        "id": "pdf-32",
        "title": "Telefone sem Fio",
        "description": "Uma brincadeira clÃƒÂ¡ssica de escuta e comunicaÃƒÂ§ÃƒÂ£o que sempre termina em gargalhadas com a mensagem transformada.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "As crianÃƒÂ§as sentam-se em roda. O recreador sussurra uma frase curta e engraÃƒÂ§ada no ouvido da primeira crianÃƒÂ§a.",
          "Cada participante deve passar a mensagem adiante, sussurrando apenas uma vez para o colega do lado.",
          "O ÃƒÂºltimo da roda deve dizer a frase em voz alta para todos ouvirem.",
          "O objetivo ÃƒÂ© ver o quanto a mensagem original mudou ao longo do caminho, gerando muita diversÃƒÂ£o."
        ]
      },
      {
        "id": "pdf-67",
        "title": "Jo-ken-pÃƒÂ´ Coletivo",
        "description": "Uma batalha estratÃƒÂ©gica entre equipes que transforma o clÃƒÂ¡ssico 'Pedra, Papel e Tesoura' em um jogo de grupo vibrante.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Divida o grupo em duas grandes equipes, posicionadas frente a frente.",
          "As equipes se reÃƒÂºnem em segredo para decidir qual gesto (Pedra, Papel ou Tesoura) o grupo inteiro farÃƒÂ¡ junto.",
          "Ao sinal do recreador, as equipes viram-se e realizam o gesto simultaneamente.",
          "Marque um ponto para a equipe vencedora em cada rodada. O primeiro time a atingir 10 pontos vence a gincana."
        ]
      },
      {
        "id": "pdf-71",
        "title": "Sardinha",
        "description": "Um 'esconde-esconde invertido' onde quem encontra o esconderijo se junta ÃƒÂ  sardinha, criando um desafio cada vez mais apertado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Uma crianÃƒÂ§a ÃƒÂ© escolhida para ser a 'Sardinha' e se esconde silenciosamente enquanto as outras contam.",
          "Os outros participantes saem em busca da Sardinha individualmente.",
          "Quem encontrar a Sardinha nÃƒÂ£o deve contar para os outros; em vez disso, deve se esconder junto com ela no mesmo local.",
          "A brincadeira termina quando todos estiverem 'enlatados' no mesmo esconderijo. O primeiro a encontrar a Sardinha pode ser a prÃƒÂ³xima."
        ]
      },
      {
        "id": "pdf-102",
        "title": "NÃƒÂ³ Maluco",
        "description": "Um quebra-cabeÃƒÂ§a cooperativo fÃƒÂ­sico que exige comunicaÃƒÂ§ÃƒÂ£o e flexibilidade para desatar o nÃƒÂ³ humano sem soltar as mÃƒÂ£os.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O grupo forma um cÃƒÂ­rculo apertado e todos estendem as mÃƒÂ£os para o centro.",
          "Cada pessoa deve segurar a mÃƒÂ£o de duas pessoas diferentes (que nÃƒÂ£o estejam ao seu lado). Isso criarÃƒÂ¡ um grande emaranhado de braÃƒÂ§os.",
          "O objetivo ÃƒÂ© desatar esse 'nÃƒÂ³' voltando a formar um cÃƒÂ­rculo perfeito de mÃƒÂ£os dadas, sem nunca soltar os colegas.",
          "Incentive o grupo a dar instruÃƒÂ§ÃƒÂµes verbais e a se mover com cuidado para nÃƒÂ£o machucar ninguÃƒÂ©m."
        ]
      },
      {
        "id": "pdf-121",
        "title": "A Cidade Dorme",
        "description": "Um jogo de deduÃƒÂ§ÃƒÂ£o e interpretaÃƒÂ§ÃƒÂ£o cercado de mistÃƒÂ©rio, onde a cidade precisa descobrir quem sÃƒÂ£o os vilÃƒÂµes antes que seja tarde demais.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "10+ anos",
        "materials": [
          "Papel e caneta para sortear as funÃƒÂ§ÃƒÂµes"
        ],
        "steps": [
          "Sorteie as funÃƒÂ§ÃƒÂµes secretas. Todos fecham os olhos quando o narrador diz: 'A cidade dorme'.",
          "O narrador acorda o Assassino para escolher uma vÃƒÂ­tima, o Anjo para proteger alguÃƒÂ©m e o Detetive para identificar os culpados.",
          "Ao comando de 'A cidade acorda!', o narrador revela quem 'morreu' e o grupo inicia um debate para votar em um suspeito.",
          "O jogo continua atÃƒÂ© que todos os assassinos sejam descobertos ou que as vÃƒÂ­timas sejam eliminadas."
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
    description: "PerseguiÃƒÂ§ÃƒÂ£o e velocidade.",
    games: [
      {
        "id": "pdf-12",
        "title": "Pega-Pega dos NÃƒÂºmeros",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o veloz do pega-pega em cÃƒÂ­rculo que exige atenÃƒÂ§ÃƒÂ£o constante e reflexos rÃƒÂ¡pidos para nÃƒÂ£o ser pescado.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Forme um grande cÃƒÂ­rculo com todos os participantes sentados. Numere cada um de 1 a 5, repetindo a sequÃƒÂªncia.",
          "O recreador grita um nÃƒÂºmero (ex: 'NÃƒÂºmero 3!'). Todos os '3' devem levantar e correr por fora do cÃƒÂ­rculo no sentido horÃƒÂ¡rio.",
          "O objetivo de cada corredor ÃƒÂ© tentar tocar no colega da frente e evitar ser tocado pelo colega que vem atrÃƒÂ¡s.",
          "Quem completar a volta e sentar em seu lugar original primeiro sem ser pego marca um ponto simbÃƒÂ³lico para seu nÃƒÂºmero."
        ]
      },
      {
        "id": "pdf-25",
        "title": "Travessia da Floresta",
        "description": "Um desafio de invasÃƒÂ£o e defesa onde um grupo de 'forasteiros' deve cruzar uma ÃƒÂ¡rea perigosa protegida por guardiÃƒÂµes.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [
          "Fita ou giz para delimitar o retÃƒÂ¢ngulo ('A Floresta')"
        ],
        "steps": [
          "Delimite um grande retÃƒÂ¢ngulo no chÃƒÂ£o que serÃƒÂ¡ a 'Floresta'. Escolha 3 crianÃƒÂ§as para serem os guardiÃƒÂµes que ficam dentro dele.",
          "Os demais participantes ficam de um lado e devem tentar cruzar a floresta atÃƒÂ© o lado oposto sem serem tocados.",
          "Os guardiÃƒÂµes podem se mover apenas dentro do retÃƒÂ¢ngulo para tentar interceptar os viajantes.",
          "Quem for pego torna-se um novo guardiÃƒÂ£o, ajudando a proteger a floresta na prÃƒÂ³xima travessia."
        ]
      },
      {
        "id": "pdf-27",
        "title": "Elefante Colorido",
        "description": "Um divertido jogo de perseguiÃƒÂ§ÃƒÂ£o e reconhecimento de cores onde possuir a cor certa garante passagem livre.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma crianÃƒÂ§a ÃƒÂ© o 'Elefante' e fica no centro do campo. O grupo grita: 'Elefante colorido!', e ele responde: 'Que cor?'.",
          "O Elefante escolhe uma cor. Aqueles que tiverem essa cor em suas roupas ou acessÃƒÂ³rios ganham passagem livre.",
          "Quem nÃƒÂ£o tiver a cor escolhida deve tentar atravessar para o outro lado correndo sem ser pego pelo Elefante.",
          "A primeira pessoa a ser pega assume o papel de Elefante colorido na rodada seguinte."
        ]
      },
      {
        "id": "pdf-29",
        "title": "Reino dos Sacis",
        "description": "Uma brincadeira de perseguiÃƒÂ§ÃƒÂ£o temÃƒÂ¡tica e desafiadora onde todos devem se mover em apenas um pÃƒÂ©.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolha o 'Saci Rei' que fica em seu 'PalÃƒÂ¡cio' (uma ÃƒÂ¡rea delimitada). Os outros 'Sacis' ficam espalhados pelo campo.",
          "Ao sinal, os Sacis devem pular em um pÃƒÂ© sÃƒÂ³ em direÃƒÂ§ÃƒÂ£o ao palÃƒÂ¡cio. O Rei grita: 'O Rei estÃƒÂ¡ zangado!' e sai caÃƒÂ§ando os invasores.",
          "Todos, inclusive o Rei, devem se mover pulando em um pÃƒÂ© sÃƒÂ³. Quem for pego torna-se ajudante do Rei.",
          "O ÃƒÂºltimo a ser capturado ganha a rodada e torna-se o novo Saci Rei."
        ]
      },
      {
        "id": "pdf-30",
        "title": "Congelado",
        "description": "O clÃƒÂ¡ssico jogo de 'pega-congelante' que incentiva o altruÃƒÂ­smo e a cooperaÃƒÂ§ÃƒÂ£o para salvar os amigos imobilizados.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante ÃƒÂ© o pegador. Quem for tocado por ele deve ficar 'congelado' (imÃƒÂ³vel) no local exato.",
          "Para descongelar um amigo, uma crianÃƒÂ§a que ainda estÃƒÂ¡ livre deve tocÃƒÂ¡-la.",
          "O objetivo do pegador ÃƒÂ© congelar todos os participantes simultaneamente.",
          "Troque o pegador a cada rodada ou quando ele conseguir congelar metade do grupo."
        ]
      },
      {
        "id": "pdf-31",
        "title": "Arranca Rabo",
        "description": "Uma gincana agitada de agilidade e reflexos onde as crianÃƒÂ§as devem proteger sua 'cauda' enquanto buscam capturar as dos adversÃƒÂ¡rios.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Fitas coloridas ou pedaÃƒÂ§os de TNT"
        ],
        "steps": [
          "Divida as crianÃƒÂ§as em dois times. Cada integrante coloca uma fita pendurada na parte de trÃƒÂ¡s da cintura (o rabo).",
          "Ao sinal, todos os participantes tentam colher as fitas dos jogadores do time adversÃƒÂ¡rio sem perder as suas prÃƒÂ³prias.",
          "Quem tiver o rabo arrancado nÃƒÂ£o ÃƒÂ© eliminado; deve apenas focar em ajudar seu time a capturar mais fitas inimigas.",
          "Vence a equipe que conseguir reunir o maior nÃƒÂºmero de fitas adversÃƒÂ¡rias ao final do tempo."
        ]
      },
      {
        "id": "pdf-33",
        "title": "Pega-Pega Espelho",
        "description": "Uma mistura criativa de pega-pega e teatro onde os participantes salvam os amigos atravÃƒÂ©s da imitaÃƒÂ§ÃƒÂ£o.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um participante ÃƒÂ© o pegador. Quem for tocado por ele deve fazer uma 'pose de estÃƒÂ¡tua' engraÃƒÂ§ada ou ÃƒÂ©pica.",
          "Para salvar esse amigo, outra crianÃƒÂ§a que estÃƒÂ¡ livre deve parar na frente dele e imitar a pose exatamente como ele estÃƒÂ¡ fazendo.",
          "Uma vez imitada com sucesso, ambos podem voltar a correr livremente.",
          "Esta brincadeira estimula a percepÃƒÂ§ÃƒÂ£o corporal e a cooperaÃƒÂ§ÃƒÂ£o entre os pequenos."
        ]
      },
      {
        "id": "pdf-36",
        "title": "CaÃƒÂ§a Palitos",
        "description": "Um jogo de perseguiÃƒÂ§ÃƒÂ£o que integra o Jo-ken-pÃƒÂ´ como mecanismo de disputa por recursos, estimulando a agilidade e a sorte.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "Pequenos palitos ou fichas (3 por crianÃƒÂ§a)"
        ],
        "steps": [
          "Cada crianÃƒÂ§a comeÃƒÂ§a com 3 palitos nas mÃƒÂ£os. Ao sinal, todos correm em um pega-pega geral (todos podem pegar todos).",
          "Quem for tocado deve parar imediatamente com quem o pegou e disputar uma rodada de Pedra, Papel ou Tesoura.",
          "O vencedor da disputa ganha um palito do oponente e ambos voltam a correr livremente.",
          "Ganha quem conseguir reunir o maior nÃƒÂºmero de palitos ao final da atividade."
        ]
      },
      {
        "id": "pdf-42",
        "title": "A Cauda do DragÃƒÂ£o",
        "description": "Um exercÃƒÂ­cio vibrante de cooperaÃƒÂ§ÃƒÂ£o e agilidade onde a cabeÃƒÂ§a do dragÃƒÂ£o deve tentar capturar sua prÃƒÂ³pria cauda.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "As crianÃƒÂ§as formam uma fila, cada uma segurando na cintura de quem estÃƒÂ¡ ÃƒÂ  frente, simulando um corpo de dragÃƒÂ£o.",
          "O primeiro da fila ÃƒÂ© a 'CabeÃƒÂ§a' e o ÃƒÂºltimo ÃƒÂ© a 'Cauda'.",
          "Ao sinal, a CabeÃƒÂ§a deve tentar tocar na Cauda, enquanto a fila inteira se move para proteger a parte de trÃƒÂ¡s sem se soltar.",
          "Se a CabeÃƒÂ§a conseguir tocar na Cauda, quem era a cauda passa a ser a nova cabeÃƒÂ§a do dragÃƒÂ£o."
        ]
      },
      {
        "id": "pdf-43",
        "title": "O Gafanhoto e a RÃƒÂ£",
        "description": "Um mini-jogo de perseguiÃƒÂ§ÃƒÂ£o dentro de limites que treina o equilÃƒÂ­brio e o salto coordenado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Giz para demarcar o cÃƒÂ­rculo"
        ],
        "steps": [
          "Desenhe um cÃƒÂ­rculo no chÃƒÂ£o. Um participante ÃƒÂ© a 'RÃƒÂ£' (fica agachado) e os outros sÃƒÂ£o os 'Gafanhotos'.",
          "Os Gafanhotos devem se mover pulando dentro do cÃƒÂ­rculo, enquanto a RÃƒÂ£ tenta pegÃƒÂ¡-los sem levantar totalmente do chÃƒÂ£o.",
          "Quem for capturado pela RÃƒÂ£ torna-se uma rÃƒÂ£ tambÃƒÂ©m, ajudando a cercar os ÃƒÂºltimos gafanhotos.",
          "A ÃƒÂºltima pessoa a ser pega ganha a rodada e comeÃƒÂ§a como a rÃƒÂ£ inicial na prÃƒÂ³xima partida."
        ]
      },
      {
        "id": "pdf-44",
        "title": "O Rato e o Gato (TÃƒÂªnis)",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o do corre-cutia que utiliza um objeto para marcar o inÃƒÂ­cio de uma perseguiÃƒÂ§ÃƒÂ£o em cÃƒÂ­rculo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "Um tÃƒÂªnis ou objeto similar"
        ],
        "steps": [
          "Todos sentam em cÃƒÂ­rculo voltados para dentro. Um participante ÃƒÂ© o 'Rato' e corre por fora com um tÃƒÂªnis na mÃƒÂ£o.",
          "O Rato solta o tÃƒÂªnis silenciosamente atrÃƒÂ¡s de um colega. Esse colega torna-se o 'Gato' e deve pegar o Rato.",
          "O Rato deve dar a volta completa e sentar no lugar que ficou vazio antes de ser tocado pelo Gato.",
          "Se conseguir sentar, o Gato vira o novo Rato. Se for pego, continua sendo o Rato."
        ]
      },
      {
        "id": "pdf-45",
        "title": "Resgate no Reino Perdido",
        "description": "Um jogo de exploraÃƒÂ§ÃƒÂ£o e captura com funÃƒÂ§ÃƒÂµes secretas que trazem um clima de aventura ÃƒÂ©pica.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Escolha um 'Bruxo' e um 'Cavalheiro'. Os demais participantes sÃƒÂ£o 'Princesas' que devem se esconder.",
          "O Cavalheiro deve encontrar as Princesas e levÃƒÂ¡-las para a seguranÃƒÂ§a do Reino.",
          "O Bruxo tambÃƒÂ©m estÃƒÂ¡ ÃƒÂ  caÃƒÂ§a e tentarÃƒÂ¡ capturar as Princesas para levÃƒÂ¡-las ao seu 'Esconderijo'.",
          "Vence a rodada quem (Cavalheiro ou Bruxo) conseguir reunir o maior nÃƒÂºmero de princesas ao final."
        ]
      },
      {
        "id": "pdf-48",
        "title": "Toque nas Cores",
        "description": "Um pega-pega dinÃƒÂ¢mico de percepÃƒÂ§ÃƒÂ£o visual onde o ambiente se torna o seu maior aliado.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolha um pegador que ficarÃƒÂ¡ no centro. Ele grita uma cor em voz alta (ex: 'Amarelo!').",
          "Todos os outros participantes devem correr para tocar em qualquer objeto ou detalhe do local que tenha essa cor.",
          "O pegador tenta tocar em alguÃƒÂ©m que ainda nÃƒÂ£o tenha alcanÃƒÂ§ado a cor solicitada.",
          "Quem for pego torna-se o novo pegador e escolhe a prÃƒÂ³xima cor para desafiar o grupo."
        ]
      },
      {
        "id": "pdf-51",
        "title": "A PoÃƒÂ§ÃƒÂ£o MÃƒÂ¡gica",
        "description": "Uma aventura cooperativa lÃƒÂºdica onde magos devem coletar ingredientes sem serem pegos pelo monstro da floresta.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "BambolÃƒÂªs ('As Casas')",
          "Cones coloridos ('As PoÃƒÂ§ÃƒÂµes')"
        ],
        "steps": [
          "Espalhe os bambolÃƒÂªs e os cones pelo campo. Nomeie um participante para ser o 'Monstro'. Os outros sÃƒÂ£o os 'Magos'.",
          "Os Magos devem sair de suas casas para coletar um cone por vez e levÃƒÂ¡-lo de volta, sem que o Monstro os toque.",
          "Se um Mago for pego, deve devolver as poÃƒÂ§ÃƒÂµes que coletou ao campo e recomeÃƒÂ§ar.",
          "O objetivo final ÃƒÂ© reunir todas as poÃƒÂ§ÃƒÂµes de cores iguais em casas especÃƒÂ­ficas, trabalhando a organizaÃƒÂ§ÃƒÂ£o em equipe."
        ]
      },
      {
        "id": "pdf-58",
        "title": "Letra Pegadora",
        "description": "Um exercÃƒÂ­cio de prontidÃƒÂ£o e reconhecimento de nomes que transforma a identidade de cada um em um gatilho para o jogo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "As crianÃƒÂ§as caminham livremente pelo espaÃƒÂ§o. O recreador grita uma letra (ex: 'Letra M!').",
          "Todos cujo nome comeÃƒÂ§a com essa letra tornam-se pegadores por 30 segundos e tentam tocar nos outros colegas.",
          "Quem for pego deve ficar agachado e sÃƒÂ³ pode ser salvo pelo toque de um outro colega que nÃƒÂ£o seja pegador.",
          "O recreador troca a letra frequentemente para que diferentes crianÃƒÂ§as tenham a chance de ser pegadores."
        ]
      },
      {
        "id": "pdf-61",
        "title": "O Killer (Piscadinha)",
        "description": "Um jogo de observaÃƒÂ§ÃƒÂ£o e discriÃƒÂ§ÃƒÂ£o onde um assassino silencioso tenta eliminar as vÃƒÂ­timas sem ser descoberto pelo detetive.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "PapÃƒÂ©izinhos com as iniciais K (Killer), D (Detetive) e V (VÃƒÂ­tima)"
        ],
        "steps": [
          "Distribua secretamente as funÃƒÂ§ÃƒÂµes. O Killer deve 'matar' as vÃƒÂ­timas piscando discretamente para elas.",
          "Quando uma vÃƒÂ­tima recebe a piscadinha, deve dizer 'Morri!' e sair da rodada ou sentar-se.",
          "O Detetive deve observar todos atentamente para tentar descobrir quem ÃƒÂ© o Killer sem ser 'morto' antes.",
          "Se o Detetive descobrir, ele aponta e diz: 'Preso em nome da lei!'. Se o Killer eliminar todas as vÃƒÂ­timas, ele vence."
        ]
      },
      {
        "id": "pdf-63",
        "title": "PACMAN Humano",
        "description": "Um emocionante pega-pega de restriÃƒÂ§ÃƒÂ£o espacial onde todos devem se locomover apenas sobre as linhas demarcadas no chÃƒÂ£o.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "Quadra poliesportiva com linhas de marcaÃƒÂ§ÃƒÂ£o"
        ],
        "steps": [
          "Escolha um participante para ser o 'Pacman' (pegador). Todos devem correr apenas por cima das linhas da quadra.",
          "Quem sair da linha ÃƒÂ© considerado 'pego' automaticamente. Quem for tocado pelo Pacman deve sentar no local e vira um obstÃƒÂ¡culo.",
          "O Pacman pode pular os obstÃƒÂ¡culos sentados, mas os outros fugitivos devem encontrar outro caminho pelas linhas.",
          "O ÃƒÂºltimo sobrevivente nas linhas vence a partida."
        ]
      },
      {
        "id": "pdf-64",
        "title": "Gato e Rato em Repouso",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o estratÃƒÂ©gica do jogo de perseguiÃƒÂ§ÃƒÂ£o onde os participantes sentados servem como base para a troca de papÃƒÂ©is.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Todos ficam espalhados pelo espaÃƒÂ§o, sentados com as pernas estendidas. Escolha um 'Gato' (pegador) e um 'Rato' (fugitivo).",
          "O Rato deve fugir por entre os colegas sentados. Para se salvar, ele deve tocar na cabeÃƒÂ§a de alguÃƒÂ©m que esteja sentado.",
          "A pessoa tocada levanta-se imediatamente e torna-se o novo Gato, enquanto quem era o gato passa a ser o novo Rato.",
          "Esta dinÃƒÂ¢mica exige reflexos rÃƒÂ¡pidos tanto de quem foge quanto de quem estÃƒÂ¡ sentado esperando para entrar no jogo."
        ]
      },
      {
        "id": "pdf-73",
        "title": "Pegador com Aro",
        "description": "Um jogo de perseguiÃƒÂ§ÃƒÂ£o coletiva onde a captura ÃƒÂ© feita com bambolÃƒÂªs, criando uma corrente humana de pegadores cada vez mais longa.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [
          "BambolÃƒÂªs (vÃƒÂ¡rios)"
        ],
        "steps": [
          "Um participante comeÃƒÂ§a como pegador solo, segurando um bambolÃƒÂª.",
          "Para capturar um colega, ele deve 'laÃƒÂ§ÃƒÂ¡-lo' com o bambolÃƒÂª (fazendo-o passar pelo corpo do colega com cuidado).",
          "O capturado pega outro bambolÃƒÂª e dÃƒÂ¡ a mÃƒÂ£o ao primeiro pegador, formando uma corrente.",
          "Apenas as extremidades da corrente seguram bambolÃƒÂªs para capturar novos fugitivos atÃƒÂ© que todos sejam pegos."
        ]
      },
      {
        "id": "pdf-76",
        "title": "Mico Preto",
        "description": "Um desafio de travessia e agilidade onde um guardiÃƒÂ£o central tenta capturar os caÃƒÂ§adores que atravessam a quadra.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O 'Mico Preto' fica no centro da quadra e os demais (caÃƒÂ§adores) ficam na linha de fundo.",
          "O Mico Preto grita: 'Quem tem medo do Mico Preto?'. Os caÃƒÂ§adores respondem: 'Eu que nÃƒÂ£o!'.",
          "Nesse momento, todos os caÃƒÂ§adores devem correr para a outra linha de fundo enquanto o Mico Preto tenta pegÃƒÂ¡-los.",
          "Quem for capturado junta-se ao Mico Preto no centro para ajudar a pegar os fugitivos na prÃƒÂ³xima rodada."
        ]
      },
      {
        "id": "pdf-81",
        "title": "Quanto Mais Melhor",
        "description": "Uma gincana competitiva de coleta de recursos e agilidade que estimula a rapidez e a organizaÃƒÂ§ÃƒÂ£o espacial.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "BambolÃƒÂªs",
          "Cones ou objetos pequenos (muitos)"
        ],
        "steps": [
          "Cada crianÃƒÂ§a tem seu prÃƒÂ³prio bambolÃƒÂª (sua base) com a mesma quantidade de cones dentro.",
          "Ao sinal, o objetivo ÃƒÂ© correr atÃƒÂ© os bambolÃƒÂªs dos colegas, pegar um cone por vez e trazÃƒÂª-lo para sua prÃƒÂ³pria base.",
          "NÃƒÂ£o ÃƒÂ© permitido defender sua base; o foco deve ser apenas em coletar o mÃƒÂ¡ximo de cones possÃƒÂ­vel de outros lugares.",
          "Ao final do tempo, vence quem tiver acumulado o maior nÃƒÂºmero de cones dentro de seu bambolÃƒÂª."
        ]
      },
      {
        "id": "pdf-83",
        "title": "Guerra de Cones",
        "description": "Um desafio de agilidade e estratÃƒÂ©gia onde os participantes competem para reunir objetos em sua base antes dos adversÃƒÂ¡rios.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "BambolÃƒÂªs",
          "Cones"
        ],
        "steps": [
          "Coloque um bambolÃƒÂª central com 8 cones e posicione 4 bambolÃƒÂªs (bases) nos cantos da quadra.",
          "Ao sinal, cada participante deve correr ao centro, pegar um cone por vez e levÃƒÂ¡-lo para sua base.",
          "Ãƒâ€° permitido 'roubar' cones das bases dos adversÃƒÂ¡rios, mas sem contato fÃƒÂ­sico ou bloqueio.",
          "Ganha quem conseguir primeiro reunir 3 cones em sua base."
        ]
      },
      {
        "id": "pdf-84",
        "title": "Pega-Alerta TemÃƒÂ¡tico",
        "description": "Um jogo de perseguiÃƒÂ§ÃƒÂ£o que mistura criatividade e agilidade, onde o tema escolhido define quem serÃƒÂ¡ o pegador.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "Fitas de TNT ou 'rabinhos'"
        ],
        "steps": [
          "O lÃƒÂ­der escolhe um tema (ex: Animais) e os jogadores escolhem secretamente itens desse tema.",
          "O lÃƒÂ­der grita um item (ex: 'LeÃƒÂ£o!'). Quem escolheu esse item torna-se o pegador imediato.",
          "O objetivo ÃƒÂ© pegar o 'rabo' (fita de TNT) dos colegas. Quem for capturado ajuda o pegador.",
          "O jogo continua atÃƒÂ© que reste apenas um jogador com fita, que serÃƒÂ¡ o prÃƒÂ³ximo a sugerir o tema."
        ]
      },
      {
        "id": "pdf-86",
        "title": "Pique-Cai-Cai",
        "description": "Uma brincadeira bem-humorada de perseguiÃƒÂ§ÃƒÂ£o onde os 'caÃƒÂ­dos' precisam da forÃƒÂ§a e uniÃƒÂ£o dos amigos para voltar ao jogo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Um participante ÃƒÂ© o pegador. Quem for tocado por ele deve se deitar no chÃƒÂ£o imediatamente.",
          "Para salvar um colega caÃƒÂ­do, duas pessoas devem se unir, segurÃƒÂ¡-lo pelos braÃƒÂ§os e pernas e levÃƒÂ¡-lo atÃƒÂ© um local designado (o banco).",
          "Enquanto as pessoas estÃƒÂ£o salvando o colega, o pegador nÃƒÂ£o pode tocÃƒÂ¡-las.",
          "Uma vez deixado no banco, o jogador pode levantar-se e retornar ÃƒÂ  brincadeira livremente."
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
          "Pregadores de roupa (5 a 10 por crianÃƒÂ§a)"
        ],
        "steps": [
          "Cada crianÃƒÂ§a fixa seus pregadores na roupa (as 'vidas'). Ao sinal, comeÃƒÂ§a um pega-pega geral.",
          "Quem pegar alguÃƒÂ©m desafia o oponente para uma rodada rÃƒÂ¡pida de Jo-ken-pÃƒÂ´.",
          "O vencedor da disputa escolhe um pregador do colega para si.",
          "Se alguÃƒÂ©m ficar sem pregadores, pode ganhar um de um amigo generoso ou aguardar a prÃƒÂ³xima rodada."
        ]
      },
      {
        "id": "pdf-93",
        "title": "Pique Trave Distante",
        "description": "Um teste de fÃƒÂ´lego e velocidade onde os 'piques' seguros estÃƒÂ£o sempre do outro lado do campo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Um participante ÃƒÂ© o pegador. A 'trave' ou um gol ÃƒÂ© o local seguro (o pique).",
          "O detalhe ÃƒÂ© que quando vocÃƒÂª sai de uma trave segura, sÃƒÂ³ pode voltar a ficar seguro na trave que estÃƒÂ¡ do lado oposto da quadra.",
          "Isso obriga as crianÃƒÂ§as a atravessarem todo o campo aberto, onde o pegador tem mais chances de agir.",
          "Troque o pegador sempre que ele conseguir capturar alguÃƒÂ©m no trajeto."
        ]
      },
      {
        "id": "pdf-95",
        "title": "ArrastÃƒÂ£o ou pega-pega corrente",
        "description": "Uma pessoa serÃƒÂ¡ escolhida para ser o pegador, enquanto os outros serÃƒÂ£o os fugitivos. Quem o pegador pegar, virarÃƒÂ¡ pegador junto a ele, terÃƒÂ£o que ficar...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Uma pessoa serÃƒÂ¡ escolhida para ser o pegador, enquanto os outros serÃƒÂ£o os fugitivos. Quem o pegador pegar, virarÃƒÂ¡ pegador junto a ele, terÃƒÂ£o que ficar de mÃƒÂ£os dadas, e assim sucessivamente atÃƒÂ© restar apenas um fugitivo."
        ]
      },
      {
        "id": "pdf-100",
        "title": "Chinelinho",
        "description": "TraÃƒÂ§a-se no chÃƒÂ£o duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crianÃƒÂ§as sÃƒÂ£o formados. Cada um dos grupos ÃƒÂ© disp...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Um chinelo",
          "uma bola",
          "ou qualquer coisa que substitua"
        ],
        "steps": [
          "TraÃƒÂ§a-se no chÃƒÂ£o duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crianÃƒÂ§as sÃƒÂ£o formados",
          "Cada um dos grupos ÃƒÂ© disposto em fileira, um de frente para o outro, atrÃƒÂ¡s de uma linha. Num ponto equidistante das linhas (aproximadamente a 7,5 m de cada uma), risca-se um cÃƒÂ­rculo onde deverÃƒÂ¡ ser colocado um chinelinho ou outro objeto semelhante",
          "As crianÃƒÂ§as dos dois grupos sÃƒÂ£o numeradas de 1 atÃƒÂ© o nÃƒÂºmero total de crianÃƒÂ§as que existir em cada grupo. Quando um dos grupos tiver uma crianÃƒÂ§a a mais, um componente do grupo contrÃƒÂ¡rio pode receber dois nÃƒÂºmeros",
          "Uma crianÃƒÂ§a ou um adulto deve comandar o jogo, gritando um nÃƒÂºmero que corresponda a uma crianÃƒÂ§a de cada um dos grupos. As duas devem correr, pegar o chinelinho e retornar ao seu grupo, cruzando sua linha sem ser tocada",
          "Cada vez que isso ocorrer, seu grupo conquista um ponto. Se ao fugir com o ocorrer, seu grupo conquista um ponto",
          "Se ao fugir com o chinelo o jogador for tocado pelo adversÃƒÂ¡rio, ninguÃƒÂ©m marca ponto. ApÃƒÂ³s cada disputa dos dois jogadores, o chinelo volta para o cÃƒÂ­rculo",
          "VencerÃƒÂ¡ quem atingir primeiro o total de pontos estipulados pelos grupos, em comum acordo.."
        ]
      },
      {
        "id": "pdf-107",
        "title": "PolÃƒÂ­cia e ladrÃƒÂ£o",
        "description": "Separam-se dois grupos de crianÃƒÂ§as, um serÃƒÂ¡ polÃƒÂ­cia e outro ladrÃƒÂ£o. Os policiais iniciam contado atÃƒÂ© 20, enquanto os ladrÃƒÂµes se escondem, ao tÃƒÂ©rmino d...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Separam-se dois grupos de crianÃƒÂ§as, um serÃƒÂ¡ polÃƒÂ­cia e outro ladrÃƒÂ£o. Os policiais iniciam contado atÃƒÂ© 20, enquanto os ladrÃƒÂµes se escondem, ao tÃƒÂ©rmino da contagem a polÃƒÂ­cia passa a procurar os ladrÃƒÂµes e os encontrando passa a prossegui-los",
          "O ladrÃƒÂ£o deve ser pego pela polÃƒÂ­cia e quem for preso vai para um local denominado como prisÃƒÂ£o. Quem nÃƒÂ£o for pego pode soltar os ladrÃƒÂµes (tocando-os) que voltam a fugir da polÃƒÂ­cia",
          "O jogo terminarÃƒÂ¡ com a captura de todos os ladrÃƒÂµes. ."
        ]
      },
      {
        "id": "pdf-110",
        "title": "Rua e Avenida",
        "description": "Os participantes serÃƒÂ£o divididos em vÃƒÂ¡rias fileiras uma atrÃƒÂ¡s da outra. Duas pessoas serÃƒÂ£o escolhidas, uma para ser o pegador e o outro o fugitivo. Ã¢â€Å“ÃƒÂ«...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Os participantes serÃƒÂ£o divididos em vÃƒÂ¡rias fileiras uma atrÃƒÂ¡s da outra. Duas pessoas serÃƒÂ£o escolhidas, uma para ser o pegador e o outro o fugitivo. Ã¢â€Å“ÃƒÂ« como se fosse um labirinto, os participantes deverÃƒÂ£o estar de mÃƒÂ£os dadas, quando o professor falar \"rua\" eles deverÃƒÂ£o soltar as mÃƒÂ£os e virar para a direita, dando as mÃƒÂ£os aos outros colegas, e quando o professor falar \"avenida\" deverÃƒÂ£o voltar a posiÃƒÂ§ÃƒÂ£o inicial."
        ]
      },
      {
        "id": "pdf-112",
        "title": "MÃƒÂ£e da Rua",
        "description": "SerÃƒÂ¡ escolhida uma crianÃƒÂ§a para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos o...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "SerÃƒÂ¡ escolhida uma crianÃƒÂ§a para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos os alunos saÃƒÂ­ram correndo para o outro lado da quadra, tentando escapar da \"mÃƒÂ£e da rua\" que esta ao centro",
          "Quem for pego irÃƒÂ¡ ajudar a \"mÃƒÂ£e da rua\" a pegar o restante. A \"mÃƒÂ£e da rua\" nÃƒÂ£o poderÃƒÂ¡ sair do meio da quadra, nem os participantes que forem pegos."
        ]
      },
      {
        "id": "pdf-113",
        "title": "Rouba Bandeira",
        "description": "As crianÃƒÂ§as serÃƒÂ£o divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, serÃƒÂ¡ colocado a \"bandeira\". O objetivo de cada tim...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "dois objetos (usados como a bandeira)"
        ],
        "steps": [
          "As crianÃƒÂ§as serÃƒÂ£o divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, serÃƒÂ¡ colocado a \"bandeira\"",
          "O objetivo de cada time ÃƒÂ© tentar pegar a bandeira do seu rival, sem ser pego e ao mesmo tempo nÃƒÂ£o deixar pegar a sua bandeira. Vence quem conseguir pegar a bandeira do inimigo e voltar para o seu campo sem ser pego."
        ]
      },
      {
        "id": "pdf-114",
        "title": "Pegador trocado",
        "description": "Os participantes deverÃƒÂ£o formar duplas e se sentar afastados das outras duplas, espalhados pelo espaÃƒÂ§o. Ao sinal do monitor os dois alunos que serÃƒÂ£o u...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Os participantes deverÃƒÂ£o formar duplas e se sentar afastados das outras duplas, espalhados pelo espaÃƒÂ§o. Ao sinal do monitor os dois alunos que serÃƒÂ£o um \"fugitivo\" e o outro \"pegador\" deverÃƒÂ£o iniciar a brincadeira, que deverÃƒÂ¡ assim funcionar: quando o fugitivo quiser ficar a salvo do \"pegador\" deverÃƒÂ¡ sentar ao lado de uma das duplas que estÃƒÂ£o sentadas no chÃƒÂ£o, assim que ele sentar no lado de um colega da dupla o outro aluno, deverÃƒÂ¡ levantar-se rapidamente e passarÃƒÂ¡ a ser o novo \"pegador\" ou seja, sempre que algum aluno que estiver sendo perseguido sentar-se ao lado de uma dupla, o outro colega da dupla deverÃƒÂ¡ levantar e passarÃƒÂ¡ a ser o novo \"pegador."
        ]
      },
      {
        "id": "pdf-119",
        "title": "Pegador Inteligente",
        "description": "O monitor deverÃƒÂ¡ dividir duas equipes com o mesmo nÃƒÂºmero de participantes. Em seguida, deverÃƒÂ¡ marcar uma distÃƒÂ¢ncia e colocar uma equipe de frente para...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "O monitor deverÃƒÂ¡ dividir duas equipes com o mesmo nÃƒÂºmero de participantes. Em seguida, deverÃƒÂ¡ marcar uma distÃƒÂ¢ncia e colocar uma equipe de frente para a outra e sentados no chÃƒÂ£o, e ÃƒÂ s costas de cada equipe e a uma distÃƒÂ¢ncia com uma linha marada a qual os participantes estarÃƒÂ£o ÃƒÂ  salvo de ser \"pegos\" pela outra equipe",
          "O monitor deverÃƒÂ¡ determinar, que uma equipe seja \"par\" e a outra serÃƒÂ¡ \"ÃƒÂ­mpar\". O monitor falarÃƒÂ¡ um nÃƒÂºmero, se o nÃƒÂºmero for \"par\", a equipe \"par\" deverÃƒÂ¡ se levantar rapidamente e correr para pegar os da equipe \"ÃƒÂ­mpar\"",
          "Se disser um nÃƒÂºmero \"ÃƒÂ­mpar\" serÃƒÂ£o os ÃƒÂ­mpares que deverÃƒÂ£o se levantar e correr para pegar os da equipe \"par\". E assim sucessivamente. (O monitor poderÃƒÂ¡ fazer contas para confundir os participantes)."
        ]
      },
      {
        "id": "pdf-126",
        "title": "Nunca 3",
        "description": "Os alunos estarÃƒÂ£o espalhados em duplas (um atrÃƒÂ¡s do outro) pelo espaÃƒÂ§o disponÃƒÂ­vel. Os alunos poderÃƒÂ£o estar sentados. O professor escolhe dois alunos, ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Os alunos estarÃƒÂ£o espalhados em duplas (um atrÃƒÂ¡s do outro) pelo espaÃƒÂ§o disponÃƒÂ­vel. Os alunos poderÃƒÂ£o estar sentados",
          "O professor escolhe dois alunos, um serÃƒÂ¡ o aluno pegador e o outro aluno terÃƒÂ¡ que fugir do pegador Ã¢â‚¬Â¦ O aluno que estÃƒÂ¡ fugindo do pegador deverÃƒÂ¡ escolher uma dupla e se posicionar atrÃƒÂ¡s do segundo elemento. O aluno que estÃƒÂ¡ na frente da dupla, por sua vez, serÃƒÂ¡ o novo pegador (nunca poderÃƒÂ¡ existir 3elementos juntos, sempre mantendo uma dupla) e deverÃƒÂ¡ sair correndo atrÃƒÂ¡s do aluno que era o pegador anteriormente..",
          "Esse aluno que estÃƒÂ¡ fugindo do novo pegador, se posicionarÃƒÂ¡ atrÃƒÂ¡s de outra dupla e assim sucessivamente.."
        ]
      },
      {
        "id": "pdf-131",
        "title": "Escape 60",
        "description": "Primeiramente deve-se elaborar uma temÃƒÂ¡tica especÃƒÂ­fica para o desafio. O jogo consiste em desenvolver uma sÃƒÂ©rie de dicas e pistas que levem os partici...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel",
          "caneta",
          "lÃƒÂ¡pis",
          "entre outros..."
        ],
        "steps": [
          "Primeiramente deve-se elaborar uma temÃƒÂ¡tica especÃƒÂ­fica para o desafio. O jogo consiste em desenvolver uma sÃƒÂ©rie de dicas e pistas que levem os participantes a resolver enigmas e desafios que nos levem ÃƒÂ  um caminho",
          "Uma caracterÃƒÂ­stica da atividade ÃƒÂ© limitar o espaÃƒÂ§o ÃƒÂ  uma sala fechada ou alguma variaÃƒÂ§ÃƒÂ£o semelhante. O objetivo, normalmente, ÃƒÂ© fugir deste local em um determinado perÃƒÂ­odo previamente estipulado."
        ]
      },
      {
        "id": "pdf-133",
        "title": "Trunfo",
        "description": "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descriÃƒÂ§ÃƒÂ£o e atributos de valores variados (FORÃ¢â€Å“ÃƒÂ§A, INTELIGÃ¢â€Å“ÃƒÂ¨NCIA, AGILID...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel cartÃƒÂ£o",
          "caneta",
          "impressora."
        ],
        "steps": [
          "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descriÃƒÂ§ÃƒÂ£o e atributos de valores variados (FORÃ¢â€Å“ÃƒÂ§A, INTELIGÃ¢â€Å“ÃƒÂ¨NCIA, AGILIDADE, DESTREZA, CARISMA...). Pode-se incluir ainda cartas de personagens conhecidos, super-herÃƒÂ³is e vilÃƒÂµes",
          "Os participantes iniciam o jogo com a carta correspondente ÃƒÂ  sua prÃƒÂ³pria pessoa. Para \"duelar\" com os outros membros do jogo basta pegÃƒÂ¡-los, quem pegar primeiro tem o direito de escolher qual atributo quer usar",
          "Quem ganhar obtÃƒÂ©m como recompensa a carta do adversÃƒÂ¡rio. VariaÃƒÂ§ÃƒÂµes: Uma \"LOJA\" pode ser montada, onde os integrantes podem comprar outras cartas ou trocÃƒÂ¡-las",
          "Uma espÃƒÂ©cie de \"moeda\" pode ser criada e escondida pelo local onde a brincadeira estÃƒÂ¡ sendo realizada. Com isso, os participantes devem achar esse dinheiro e trocÃƒÂ¡-lo na loja por itens e cartas",
          "Escudo, cartas que deixam outras cartas mais fortes, cartas de categorias diferentes podem ser incluÃƒÂ­das nas variedades da loja. O local onde o jogo estÃƒÂ¡ acontecendo pode ir reduzindo atÃƒÂ© os participantes nÃƒÂ£o conseguirem mais escapar uns dos outros."
        ]
      },
      {
        "id": "pdf-136",
        "title": "Protegendo o Rei",
        "description": "Um participante serÃƒÂ¡ o rei ou a rainha, o mesmo deve ser protegido pelos \"Protetores do Rei\" e serÃƒÂ¡ atacado pelos \"Inimigos da Coroa\". Cada participan...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Nenhum."
        ],
        "steps": [
          "Um participante serÃƒÂ¡ o rei ou a rainha, o mesmo deve ser protegido pelos \"Protetores do Rei\" e serÃƒÂ¡ atacado pelos \"Inimigos da Coroa\". Cada participante comeÃƒÂ§a o jogo com trÃƒÂªs vidas, esses devem pegar os adversÃƒÂ¡rios",
          "Cada vez que um integrante for pego ele perde uma vida, caso perca as trÃƒÂªs estÃƒÂ¡ eliminado do jogo. O objetivo dos inimigos da coroa ÃƒÂ© derrotar o rei, que tem apenas uma vida, os protetores do rei, por sua vez, devem eliminar todos os inimigos da coroa para alcanÃƒÂ§arem a vitÃƒÂ³ria",
          "Pode-se montar uma \"torre\" em volta do rei com caixas, cadeiras, bambolÃƒÂªs ou qualquer outro material disponÃƒÂ­vel.."
        ]
      },
      {
        "id": "pdf-138",
        "title": "Passaporte",
        "description": "Os recreadores prepararam alguns cartÃƒÂµes (quantidade de crianÃƒÂ§as que estiverem presentes), com nomes de no mÃƒÂ­nimo 5 paÃƒÂ­ses, cada paÃƒÂ­s recebera uma cor...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel",
          "lÃƒÂ¡pis de cor ou giz de ceira"
        ],
        "steps": [
          "Os recreadores prepararam alguns cartÃƒÂµes (quantidade de crianÃƒÂ§as que estiverem presentes), com nomes de no mÃƒÂ­nimo 5 paÃƒÂ­ses, cada paÃƒÂ­s recebera uma cor. Cada crianÃƒÂ§a deve receber 5 cartÃƒÂµes, um de cada paÃƒÂ­s",
          "O objetivo do jogo ÃƒÂ© completar o passaporte, com todas as cores, de todos os paÃƒÂ­ses. Um dos recreadores serÃƒÂ¡ o \"tira visto\" ele ficarÃƒÂ¡ com um giz preto tentando \"pegar\" as crianÃƒÂ§as e riscando as cores que as mesmas jÃƒÂ¡ estiverem marcadas",
          "Antes de comeÃƒÂ§ar o jogo esse recreador deverÃƒÂ¡ esconder as 5 cores escolhidas. Ganha o jogo a crianÃƒÂ§a que conseguir um quadradinho pintado de cada paÃƒÂ­s, sem ter o risco preto do \"tira visto\" Exemplo: BRASIL (VERDE) ARGENTINA (AZUL)"
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
        "description": "Uma competiÃƒÂ§ÃƒÂ£o agitada de corrida e agilidade onde as equipes lutam para serem as primeiras a capturar o tesouro central.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [
          "Um cone",
          "Uma bola"
        ],
        "steps": [
          "Forme equipes em colunas dispostas como pontas de uma estrela. Coloque a bola sobre o cone no centro.",
          "Ao sinal, o primeiro de cada coluna corre ao redor de todas as outras equipes atÃƒÂ© voltar ÃƒÂ  sua.",
          "Ele entra no tÃƒÂºnel formado pelas pernas dos colegas e corre para pegar a bola no centro.",
          "Quem capturar a bola primeiro marca ponto para sua equipe. Repita com os prÃƒÂ³ximos da fila."
        ]
      },
      {
        "id": "pdf-11",
        "title": "Bombardeio de Bolas",
        "description": "Um exercÃƒÂ­cio de precisÃƒÂ£o e forÃƒÂ§a onde os times tentam empurrar um alvo central para o campo adversÃƒÂ¡rio usando arremessos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "1 bola grande (alvo)",
          "4 a 6 bolas menores (muniÃƒÂ§ÃƒÂ£o)"
        ],
        "steps": [
          "Coloque a bola grande exatamente no centro da quadra e divida os participantes em duas equipes nas linhas de fundo.",
          "Distribua as bolas menores igualmente entre as equipes.",
          "Ao sinal, todos devem arremessar suas bolas para acertar o alvo central e empurrÃƒÂ¡-lo para o campo inimigo.",
          "Vence a equipe que conseguir fazer o alvo cruzar a linha de fundo do adversÃƒÂ¡rio primeiro."
        ]
      },
      {
        "id": "pdf-19",
        "title": "TÃƒÂºnel de Bolas",
        "description": "Uma gincana de revezamento que exige coordenaÃƒÂ§ÃƒÂ£o e sincronia para transportar a bola por todo o time.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "4+ anos",
        "materials": [
          "2 bolas"
        ],
        "steps": [
          "Divida as crianÃƒÂ§as em duas colunas. Ao sinal, o primeiro de cada fila passa a bola por cima da cabeÃƒÂ§a para o colega de trÃƒÂ¡s.",
          "O segundo passa por baixo das pernas, o terceiro por cima, e assim sucessivamente.",
          "Quando a bola chega ao ÃƒÂºltimo, ele corre para a frente da fila e reinicia o processo.",
          "A equipe que completar a rotaÃƒÂ§ÃƒÂ£o e trouxer o primeiro jogador de volta ÃƒÂ  frente vence."
        ]
      },
      {
        "id": "pdf-41",
        "title": "Partes do Corpo",
        "description": "Um jogo de atenÃƒÂ§ÃƒÂ£o e reflexos rÃƒÂ¡pidos onde o comando vocal dita o movimento das mÃƒÂ£os atÃƒÂ© o desafio final.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "1 bola para cada dupla"
        ],
        "steps": [
          "Coloque as crianÃƒÂ§as em duas colunas, uma de frente para a outra, com uma bola no chÃƒÂ£o entre cada dupla.",
          "O monitor grita partes do corpo (CabeÃƒÂ§a!, PÃƒÂ©!, Nariz!) e as crianÃƒÂ§as devem tocar na parte citada.",
          "Quando o monitor gritar 'BOLA!', as crianÃƒÂ§as devem tentar agarrar a bola antes do parceiro da frente.",
          "Quem pegar a bola primeiro vence o round. Troque as duplas para manter a dinÃƒÂ¢mica."
        ]
      },
      {
        "id": "pdf-55",
        "title": "CaÃƒÂ§a ao Tesouro de Papel",
        "description": "Uma atividade de busca e exploraÃƒÂ§ÃƒÂ£o que transforma o espaÃƒÂ§o em um campo de tesouros escondidos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Bolinhas de papel amassado (mÃƒÂ­nimo 20)"
        ],
        "steps": [
          "PeÃƒÂ§a para as crianÃƒÂ§as fecharem os olhos ou irem para outro local enquanto vocÃƒÂª esconde as bolinhas pelo ambiente.",
          "Ao sinal, as crianÃƒÂ§as devem procurar e coletar o maior nÃƒÂºmero possÃƒÂ­vel de bolinhas.",
          "Quem encontrar mais bolinhas ÃƒÂ© o vencedor da rodada e pode ajudar a esconder na prÃƒÂ³xima vez.",
          "Dica: Esconda algumas bolinhas em locais fÃƒÂ¡ceis e outras em locais mais desafiadores."
        ]
      },
      {
        "id": "pdf-57",
        "title": "AbraÃƒÂ§o Protetor",
        "description": "Um pega-pega que utiliza o contato fÃƒÂ­sico amigÃƒÂ¡vel como um 'porto seguro', incentivando a percepÃƒÂ§ÃƒÂ£o corporal e rapidez.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "Uma bola macia"
        ],
        "steps": [
          "Escolha um participante para ser o pegador, que deve carregar a bola.",
          "Para capturar alguÃƒÂ©m, ele deve encostar a bola suavemente no tronco do fugitivo.",
          "O fugitivo pode se salvar se abraÃƒÂ§ar outro colega antes de ser tocado, escondendo a ÃƒÂ¡rea de captura.",
          "O abraÃƒÂ§o deve durar no mÃƒÂ¡ximo 5 segundos para que todos continuem se movimentando.",
          "Troque o pegador a cada 2 ou 3 capturas."
        ]
      },
      {
        "id": "pdf-59",
        "title": "TÃƒÂºnel DinÃƒÂ¢mico",
        "description": "Uma gincana de agilidade fÃƒÂ­sica e trabalho em equipe onde o objetivo ÃƒÂ© fazer a bola percorrer o tÃƒÂºnel humano o mais rÃƒÂ¡pido possÃƒÂ­vel.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [
          "Duas bolas"
        ],
        "steps": [
          "Divida os participantes em duas equipes em colunas. Todos devem se deitar de barriga para baixo.",
          "O ÃƒÂºltimo de cada fila levanta, corre por cima (com as pernas abertas) ou por fora dos colegas atÃƒÂ© chegar ÃƒÂ  frente.",
          "Ao chegar na frente, ele rola a bola por baixo dos colegas, que devem levantar o quadril (ponte) para a bola passar.",
          "O novo ÃƒÂºltimo pega a bola e repete o processo atÃƒÂ© que todos tenham passado pela frente."
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
          "Imediatamente, todos devem ficar parados. O jogador dÃƒÂ¡ 3 passos e, parado, deverÃƒÂ¡ tentar acertar com a bola na pessoa que tiver mais prÃƒÂ³xima",
          "Se acertar, a pessoa atingida sai da brincadeira. Se errar, ele ÃƒÂ© quem sai."
        ]
      },
      {
        "id": "pdf-69",
        "title": "Arremesso de bambolÃƒÂª",
        "description": "Tipo arremesso de argolas, mas com bambolÃƒÂª. Uma pessoa serÃƒÂ¡ a vÃƒÂ­tima e ficarÃƒÂ¡ a 5 metros dos jogadores. Faz 1 ponto quem conseguir encaixar o bambolÃƒÂª ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "bambolÃƒÂªs"
        ],
        "steps": [
          "Tipo arremesso de argolas, mas com bambolÃƒÂª. Uma pessoa serÃƒÂ¡ a vÃƒÂ­tima e ficarÃƒÂ¡ a 5 metros dos jogadores",
          "Faz 1 ponto quem conseguir encaixar o bambolÃƒÂª na pessoa primeiro. Ganha quem tiver mais pontos."
        ]
      },
      {
        "id": "pdf-72",
        "title": "Queimada do Rei",
        "description": "Formam-se dois times com nÃƒÂºmero igual de participantes e uma pessoa de cada time ÃƒÂ© escolhida para ser o Rei. No jogo pode-se usar mais de uma bola. Se...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Uma bola"
        ],
        "steps": [
          "Formam-se dois times com nÃƒÂºmero igual de participantes e uma pessoa de cada time ÃƒÂ© escolhida para ser o Rei. No jogo pode-se usar mais de uma bola",
          "Sempre que alguÃƒÂ©m da equipe ÃƒÂ© queimado, a pessoa tem que se ajoelhar no chÃƒÂ£o e esperar atÃƒÂ© conseguir pegar uma bola. Se alguÃƒÂ©m do prÃƒÂ³prio time quiser dar a bola para ela jogar, tem que se ajoelhar em seu lugar",
          "Ganha a equipe que queimar o rei adversÃƒÂ¡rio primeiro.."
        ]
      },
      {
        "id": "pdf-91",
        "title": "A caÃƒÂ§a e o caÃƒÂ§ador",
        "description": "O monitor irÃƒÂ¡ determinar o jogador que serÃƒÂ¡ a caÃƒÂ§a (o fugitivo) e os outros serÃƒÂ£o os caÃƒÂ§adores. Os caÃƒÂ§adores tentaram queimar a caÃƒÂ§a, trocando passes ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "O monitor irÃƒÂ¡ determinar o jogador que serÃƒÂ¡ a caÃƒÂ§a (o fugitivo) e os outros serÃƒÂ£o os caÃƒÂ§adores. Os caÃƒÂ§adores tentaram queimar a caÃƒÂ§a, trocando passes tentando acuar o fugitivo, e o mesmo terÃƒÂ¡ que se deslocar fugindo do jogador com a bola."
        ]
      },
      {
        "id": "pdf-92",
        "title": "Jogo dos nÃƒÂºmeros",
        "description": "SerÃƒÂ£o divididas duas equipes, cada integrante de cada equipe receberÃƒÂ¡ um nÃƒÂºmero (as duas equipes deverÃƒÂ£o estar numeras com nÃƒÂºmeros iguais), o monitor ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Bolas (basquete",
          "futebol ou handebol)"
        ],
        "steps": [
          "SerÃƒÂ£o divididas duas equipes, cada integrante de cada equipe receberÃƒÂ¡ um nÃƒÂºmero (as duas equipes deverÃƒÂ£o estar numeras com nÃƒÂºmeros iguais), o monitor chamarÃƒÂ¡ um nÃƒÂºmero e jogarÃƒÂ¡ uma bola (basquete, futebol ou handebol), as crianÃƒÂ§as irÃƒÂ£o disputar entre si e quem acertar a bola na cesta ou no gol marcarÃƒÂ¡ um ponto para sua equipe.",
          "O monitor pode usar como variaÃƒÂ§ÃƒÂ£o, chamar mais de um nÃƒÂºmero e com o passar do jogo, jogar mais de uma bola para a disputa."
        ]
      },
      {
        "id": "pdf-97",
        "title": "7 caquinhos",
        "description": "Dois times, cada um no seu campo. Os campos sÃƒÂ£o separados por 7 cacos. Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que ...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "7 pedrinhas",
          "ou pedaÃƒÂ§os de evea ou qualquer outra coisa que",
          "substitua."
        ],
        "steps": [
          "Dois times, cada um no seu campo. Os campos sÃƒÂ£o separados por 7 cacos",
          "Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que derrubar os cacos deve erguÃƒÂª-los novamente, mas se protegendo da outra, que poderÃƒÂ¡ queimar",
          "Quem for queimado nÃƒÂ£o pode ajudar a equipe nos cacos. Se a equipe conseguir recolocar os cacos antes de todos serem queimados, ela ganha",
          "Mas se todos forem queimados e os cacos continuarem no chÃƒÂ£o, a outra equipe ganha.."
        ]
      },
      {
        "id": "pdf-101",
        "title": "Artilharia",
        "description": "Separa-se dois times. No final de cada campo, ÃƒÂ© colocada uma garrafa pet. Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do adversÃƒÂ¡...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Duas garrafas pet",
          "duas bolas"
        ],
        "steps": [
          "Separa-se dois times. No final de cada campo, ÃƒÂ© colocada uma garrafa pet",
          "Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do adversÃƒÂ¡rio. A equipe que derrubar a garrafa deverÃƒÂ¡ erguÃƒÂª-la novamente, mas se protegendo da outra equipe, que poderÃƒÂ¡ queimar",
          "Quem for queimado nÃƒÂ£o pode erguer a garrafa. Se a equipe conseguir reerguer a garrafa antes de todos serem queimados, ganha",
          "Mas se todos forem queimados e a garrafa continuar no chÃƒÂ£o, a outra equipe ganha.."
        ]
      },
      {
        "id": "pdf-103",
        "title": "VÃƒÂ´lei com LenÃƒÂ§ol",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o cooperativa do vÃƒÂ´lei onde a bola ÃƒÂ© lanÃƒÂ§ada e capturada usando lenÃƒÂ§ÃƒÂ³is, exigindo sincronia absoluta do grupo.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de vÃƒÂ´lei ou leve",
          "2 lenÃƒÂ§ÃƒÂ³is grandes ou TNT"
        ],
        "steps": [
          "Divida as crianÃƒÂ§as em dois times. Cada time segura as pontas de um lenÃƒÂ§ol esticado.",
          "O objetivo ÃƒÂ© lanÃƒÂ§ar a bola para o campo adversÃƒÂ¡rio usando apenas o balanÃƒÂ§o do lenÃƒÂ§ol.",
          "O time adversÃƒÂ¡rio deve amortecer e capturar a bola com seu prÃƒÂ³prio lenÃƒÂ§ol sem deixÃƒÂ¡-la cair no chÃƒÂ£o.",
          "Trabalha a coordenaÃƒÂ§ÃƒÂ£o em grupo e o tempo de reaÃƒÂ§ÃƒÂ£o compartilhado."
        ]
      },
      {
        "id": "pdf-104",
        "title": "Rede Humana",
        "description": "Um desafio dinÃƒÂ¢mico onde uma barreira viva de jogadores tenta interceptar a bola enquanto as equipes disputam o ponto.",
        "duration": "15-20 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": [
          "1 bola"
        ],
        "steps": [
          "Alguns alunos formam a 'Rede Humana' sobre a linha central, de mÃƒÂ£os dadas ou parados lado a lado.",
          "Dois times ficam em cada lado e devem trocar passes enviando a bola para o campo adversÃƒÂ¡rio por cima da rede.",
          "Se a Rede Humana conseguir tocar a bola, o time que lanÃƒÂ§ou deve trocar de lugar com os integrantes da rede.",
          "Este jogo estimula a precisÃƒÂ£o do lanÃƒÂ§amento e a agilidade da barreira defensiva."
        ]
      },
      {
        "id": "pdf-105",
        "title": "Hand-Fut",
        "description": "Um esporte hÃƒÂ­brido eletrizante que combina a movimentaÃƒÂ§ÃƒÂ£o do handebol com a tÃƒÂ©cnica de finalizaÃƒÂ§ÃƒÂ£o do futebol.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de futebol ou futsal"
        ],
        "steps": [
          "Divida os jogadores em dois times com goleiros. A bola ÃƒÂ© movida apenas com as mÃƒÂ£os, como no handebol.",
          "O grande desafio ÃƒÂ© que o gol sÃƒÂ³ pode ser marcado usando os pÃƒÂ©s ou a cabeÃƒÂ§a apÃƒÂ³s um lanÃƒÂ§amento manual.",
          "NÃƒÂ£o ÃƒÂ© permitido correr com a bola na mÃƒÂ£o por mais de 3 passos sem quicar ou passar.",
          "Incentiva a criatividade tÃƒÂ¡tica e a coordenaÃƒÂ§ÃƒÂ£o entre diferentes habilidades motoras."
        ]
      },
      {
        "id": "pdf-108",
        "title": "Bruxa / CaÃƒÂ§ador",
        "description": "TraÃƒÂ§am-se trÃƒÂªs linhas no chÃƒÂ£o, de modo a formar dois campos (A e B). O nÃƒÂºmero de jogadores de um campo deve ser igual ao do outro. No jogo Bruxa, a fo...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "TraÃƒÂ§am-se trÃƒÂªs linhas no chÃƒÂ£o, de modo a formar dois campos (A e B). O nÃƒÂºmero de jogadores de um campo deve ser igual ao do outro",
          "No jogo Bruxa, a formaÃƒÂ§ÃƒÂ£o ÃƒÂ© livre: uma crianÃƒÂ§a assume o papel de bruxa ou bruxo que procura tomar a bola. O jogo Bruxa consiste em atirar a bola sobre os participantes, a fim de acertÃƒÂ¡-los",
          "Os alvos correm de um lado para o outro, procurando nÃƒÂ£o serem atingidos. O que for batido pela bola serÃƒÂ¡ o novo bruxo ou bruxa",
          "No jogo CaÃƒÂ§ador, escolhido o lado que iniciarÃƒÂ¡ a caÃƒÂ§ada, um participante joga a bola sobre um jogador do lado oposto. Aquele que for batido e nÃƒÂ£o aparar a bola estarÃƒÂ¡ morto e passarÃƒÂ¡ ÃƒÂ  reserva do campo, sem direito de matar",
          "VencerÃƒÂ¡ o campo que conseguir eliminar todos os elementos do lado oposto.."
        ]
      },
      {
        "id": "pdf-115",
        "title": "Sete Passes de Ouro",
        "description": "Um jogo de posse de bola e estratÃƒÂ©gia coletiva onde a finalizaÃƒÂ§ÃƒÂ£o sÃƒÂ³ ÃƒÂ© permitida apÃƒÂ³s uma sequÃƒÂªncia perfeita de passes.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de handebol ou similar"
        ],
        "steps": [
          "Divida os participantes em dois times. O objetivo ÃƒÂ© marcar um gol manual.",
          "No entanto, o gol sÃƒÂ³ ÃƒÂ© validado se a equipe realizar exatamente 7 passes consecutivos entre diferentes jogadores antes do arremesso.",
          "Se a bola for interceptada ou cair no chÃƒÂ£o, a contagem de passes recomeÃƒÂ§a do zero para o time que recuperar a posse.",
          "Incentiva a movimentaÃƒÂ§ÃƒÂ£o em quadra e a visÃƒÂ£o de jogo perifÃƒÂ©rica."
        ]
      },
      {
        "id": "pdf-118",
        "title": "Basquete 21",
        "description": "Um clÃƒÂ¡ssico desafio de arremessos rÃ¢â€Å“ÃƒÂ¼pido onde a precisÃƒÂ£o e o aproveitamento do rebote sÃƒÂ£o as chaves para a vitÃƒÂ³ria.",
        "duration": "20-25 min",
        "participants": "3+",
        "age": "9+ anos",
        "materials": [
          "1 bola de basquete",
          "1 cesta de basquete"
        ],
        "steps": [
          "Os jogadores formam uma fila. O primeiro arremessa da linha de lance livre (vale 2 pontos).",
          "Se ele errar, o prÃƒÂ³ximo jogador deve pegar o rebote e arremessar do local exato onde recuperou a bola (vale 1 ponto).",
          "Se o arremessador do lance livre acertar, ele continua arremessando atÃƒÂ© errar.",
          "O objetivo ÃƒÂ© ser o primeiro a acumular exatamente 21 pontos."
        ]
      },
      {
        "id": "pdf-120",
        "title": "Jogo da velha",
        "description": "O professor deverÃƒÂ¡ dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambolÃƒÂªs em trÃƒÂªs colunas (f...",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "9 BambolÃƒÂªs",
          "10 bolas ou objeto que a substitua (5 de cada cor)"
        ],
        "steps": [
          "O professor deverÃƒÂ¡ dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambolÃƒÂªs em trÃƒÂªs colunas (formato do jogo da velha)",
          "Deixar 5 bolas para cada equipe, colocÃƒÂ¡-las a frente dos bambolÃƒÂªs. Ao sinal do professor, os primeiros de cada coluna sairÃƒÂ£o correndo e pegaram uma bola e colocarÃƒÂ£o dentro do bambolÃƒÂª, voltaram correndo, bateram na mÃƒÂ£o do seu colega e o mesmo sairÃƒÂ¡ correndo para fazer o mesmo, e assim sucessivamente atÃƒÂ© \"fechar\" o jogo da velha (completar trÃƒÂªs colunas ou diagonal com a cor da sua equipe)",
          "Como variaÃƒÂ§ÃƒÂ£o, o monitor poderÃƒÂ¡ colocar obstÃƒÂ¡culos a frente do jogo para atrapalhar o participante, como cones, cordas entre outros.."
        ]
      },
      {
        "id": "pdf-122",
        "title": "Caranguejo-Gol",
        "description": "Um desafio fÃƒÂ­sico intenso de forÃƒÂ§a e coordenaÃƒÂ§ÃƒÂ£o onde o futebol ÃƒÂ© jogado em uma postura corporal inusitada.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de futsal ou leve"
        ],
        "steps": [
          "Os jogadores devem se mover na posiÃƒÂ§ÃƒÂ£o de caranguejo (quatro apoios, de costas para o chÃƒÂ£o, com o abdÃƒÂ´mem para cima).",
          "O objetivo ÃƒÂ© marcar gols no campo adversÃƒÂ¡rio chutando a bola apenas nessa posiÃƒÂ§ÃƒÂ£o.",
          "O quadril nÃƒÂ£o deve tocar o chÃƒÂ£o durante o movimento ou o chute.",
          "Fortalece os braÃƒÂ§os, pernas e exige grande controle de equilÃƒÂ­brio abdominal."
        ]
      },
      {
        "id": "pdf-127",
        "title": "Base Sete",
        "description": "Um jogo de corrida e precisÃƒÂ£o inspirado no beisebol que integra o uso de bambolÃƒÂªs como bases de seguranÃƒÂ§a e pontuaÃƒÂ§ÃƒÂ£o.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "7 bambolÃƒÂªs",
          "1 bola"
        ],
        "steps": [
          "Um time ataca e outro defende. O batedor (ataque) chuta a bola para o campo aberto e deve percorrer as 7 bases (bambolÃƒÂªs).",
          "O time de defesa deve recuperar a bola e entregÃƒÂ¡-la ao 'lanÃƒÂ§ador' central antes que o batedor complete o circuito.",
          "Cada base alcanÃƒÂ§ada com seguranÃƒÂ§a vale 1 ponto acumulativo.",
          "Se o lanÃƒÂ§ador receber a bola e o batedor estiver fora de uma base, ele ÃƒÂ© eliminado da rodada."
        ]
      },
      {
        "id": "pdf-128",
        "title": "Super Dodgeball",
        "description": "Uma versÃƒÂ£o ÃƒÂ©pica e estratÃƒÂ©gica do clÃƒÂ¡ssico queimada, com mÃƒÂºltiplas bolas e regras especiais de resgate.",
        "duration": "20-30 min",
        "participants": "10+",
        "age": "8+ anos",
        "materials": [
          "3 a 5 bolas de queimada"
        ],
        "steps": [
          "Divida os times nas linhas de fundo. As bolas comeÃƒÂ§am alinhadas no centro da quadra.",
          "Ao sinal, os jogadores correm para pegar as bolas. O objetivo ÃƒÂ© 'queimar' os adversÃƒÂ¡rios atingindo-os abaixo do pescoÃƒÂ§o.",
          "Regra de Resgate: Se um jogador agarrar a bola no ar antes dela tocar o chÃƒÂ£o, ele salva um colega 'queimado' de seu time.",
          "Desafio Extra: Se alguÃƒÂ©m acertar a cesta de basquete adversÃƒÂ¡ria com a bola, todos os colegas eliminados retornam ao jogo imediatamente."
        ]
      },
      {
        "id": "pdf-129",
        "title": "ReaÃƒÂ§ÃƒÂ£o RelÃƒÂ¢mpago",
        "description": "Um exercÃƒÂ­cio de prontidÃƒÂ£o e controle motor onde o blefe ÃƒÂ© a principal ferramenta do lÃƒÂ­der.",
        "duration": "10-15 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "1 bola leve"
        ],
        "steps": [
          "Todos sentam em cÃƒÂ­rculo com as mÃƒÂ£os cruzadas sobre o peito. O monitor fica no centro com a bola.",
          "O monitor faz fintas e ameaÃƒÂ§as de lanÃƒÂ§amento. Se o monitor apenas fingir e a crianÃƒÂ§a mover as mÃƒÂ£os, ela perde um ponto simbÃƒÂ³lico ou sai temporariamente.",
          "Se o monitor realmente lanÃƒÂ§ar a bola, a crianÃƒÂ§a deve descruzar as mÃƒÂ£os e agarrÃƒÂ¡-la rapidamente.",
          "Ãƒâ€œtimo para dias de chuva ou espaÃƒÂ§os internos, estimulando o foco e a inibiÃƒÂ§ÃƒÂ£o de impulsos."
        ]
      },
      {
        "id": "pdf-130",
        "title": "VÃƒÂ´lei-Pega",
        "description": "Uma mistura frenÃƒÂ©tica de voleibol e pega-pega, onde cada erro em quadra gera uma perseguiÃƒÂ§ÃƒÂ£o imediata.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "1 bola de vÃƒÂ´lei",
          "Rede ou linha divisÃƒÂ³ria"
        ],
        "steps": [
          "Inicie um jogo normal de vÃƒÂ´lei. Quando a bola toca o chÃƒÂ£o, a equipe que marcou o ponto torna-se imediatamente a pegadora.",
          "A equipe que perdeu o ponto deve correr para cruzar a linha de fundo de sua quadra para ficar em seguranÃƒÂ§a.",
          "Cada jogador capturado na perseguiÃƒÂ§ÃƒÂ£o vale um ponto extra para o time vencedor.",
          "Reinicie o vÃƒÂ´lei apÃƒÂ³s cada ciclo de captura."
        ]
      },
      {
        "id": "pdf-134",
        "title": "CaÃƒÂ§ador de Cones",
        "description": "Uma gincana de busca e resgate com temas de RPG, onde os jogadores devem organizar itens enquanto fogem de um caÃƒÂ§ador implacÃƒÂ¡vel.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "Livre",
        "materials": [
          "BambolÃƒÂªs",
          "Cones de cores variadas"
        ],
        "steps": [
          "Esconda 5 bambolÃƒÂªs pelo ambiente, cada um com cones de cores especÃƒÂ­ficas espalhados longe deles.",
          "Os jogadores devem reunir os cones nos bambolÃƒÂªs correspondentes ÃƒÂ s suas cores, enquanto o CaÃƒÂ§ador tenta pegÃƒÂ¡-los.",
          "Quem for pego deve ir para um 'banco de espera' e sÃƒÂ³ pode ser liberado pelo toque de um colega livre.",
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
          "Duas equipes, cada uma com uma \"base\" circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time adversÃƒÂ¡rio e dentro da ÃƒÂ¡rea da base de seu time",
          "O objetivo ÃƒÂ© derrubar o cone da outra equipe utilizando uma bola. A equipe que estiver defendendo nÃƒÂ£o pode sair da base e sÃƒÂ³ pode atacar quando recuperar a bola",
          "A equipe que estÃƒÂ¡ atacando, por sua vez, deve correr rapidamente para a sua base ao perder a posse da bola.."
        ]
      }
    ]
  },
  {
    id: "equipe",
    label: "Desafios & CooperaÃƒÂ§ÃƒÂ£o",
    icon: RiHandHeartLine,
    color: "#34C759",
    bg: "#EBF9EE",
    description: "Gincanas e atividades em time.",
    games: [
      {
        "id": "pdf-6",
        "title": "Busca por Abrigo",
        "description": "Um jogo de agilidade e exclusÃƒÂ£o social lÃƒÂºdica onde o objetivo ÃƒÂ© sempre garantir um lugar seguro antes que os outros o faÃƒÂ§am.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "4+ anos",
        "materials": [
          "BambolÃƒÂªs (um a menos que o nÃƒÂºmero de participantes)"
        ],
        "steps": [
          "Espalhe os bambolÃƒÂªs pelo chÃƒÂ£o. Cada crianÃƒÂ§a comeÃƒÂ§a dentro de um 'abrigo', exceto uma que fica sem.",
          "Ao sinal do monitor, todos devem sair de seus abrigos e correr para encontrar um novo.",
          "Quem ficar sem abrigo na rodada assume o papel de desafiante para a prÃƒÂ³xima vez.",
          "Dica: O monitor pode remover um bambolÃƒÂª a cada rodada para aumentar o desafio, similar ÃƒÂ  'DanÃƒÂ§a das Cadeiras'."
        ]
      },
      {
        "id": "pdf-18",
        "title": "Batalha de BalÃƒÂµes",
        "description": "Uma gincana agitada que exige coordenaÃƒÂ§ÃƒÂ£o e cuidado, onde proteger sua 'cauda' ÃƒÂ© tÃƒÂ£o importante quanto atacar a dos outros.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "5+ anos",
        "materials": [
          "Bexigas de duas cores",
          "Barbante"
        ],
        "steps": [
          "Divida a turma em dois times (ex: Vermelho e Azul). Cada participante amarra um balÃƒÂ£o de sua cor no tornozelo com barbante.",
          "Ao sinal, todos devem tentar estourar os balÃƒÂµes do time adversÃƒÂ¡rio pisando neles, protegendo os seus ao mesmo tempo.",
          "O jogo termina quando um dos times conseguir eliminar todos os balÃƒÂµes da equipe inimiga.",
          "Mantenha a supervisÃƒÂ£o prÃƒÂ³xima para evitar quedas ou empurrÃƒÂµes durante a disputa."
        ]
      },
      {
        "id": "pdf-60",
        "title": "Batalha Naval ÃƒÂ s Cegas",
        "description": "Um jogo de estratÃƒÂ©gia e arremesso onde a comunicaÃƒÂ§ÃƒÂ£o e a sorte se misturam em um campo dividido por uma barreira visual.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [
          "Bolinhas de plÃƒÂ¡stico ou papel",
          "Rede ou lenÃƒÂ§ol para dividir o espaÃƒÂ§o"
        ],
        "steps": [
          "Divida a quadra com um lenÃƒÂ§ol alto para que os times nÃƒÂ£o se vejam. Cada lado posiciona seus jogadores como 'navios' parados.",
          "As equipes lanÃƒÂ§am boinhas por cima da barreira tentando 'atingir' os navios adversÃƒÂ¡rios.",
          "Quem for atingido deve dizer 'Fui ao fundo!' e sentar-se, tornando-se um obstÃƒÂ¡culo ou saindo da rodada.",
          "Vence a equipe que conseguir afundar toda a frota inimiga primeiro."
        ]
      },
      {
        "id": "pdf-65",
        "title": "O Sapato Perdido",
        "description": "Uma gincana caÃƒÂ³tica e divertida que testa a organizaÃƒÂ§ÃƒÂ£o sob pressÃƒÂ£o e o reconhecimento de pertences.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Todos os participantes tiram um pÃƒÂ© de sapato e o colocam em uma grande pilha central misturada pelo monitor.",
          "Ao sinal, as crianÃƒÂ§as devem correr atÃƒÂ© a pilha, encontrar o seu sapato, calÃƒÂ§ÃƒÂ¡-lo e voltar para sua linha de largada.",
          "Pode ser jogado em equipes: a primeira equipe a ter todos os membros calÃƒÂ§ados e sentados vence.",
          "Esta atividade garante muitas risadas e trabalha a paciÃƒÂªncia e a observaÃƒÂ§ÃƒÂ£o."
        ]
      },
      {
        "id": "pdf-68",
        "title": "Duelo de Caminhos",
        "description": "Uma gincana de agilidade e sorte que utiliza bambolÃƒÂªs como um tabuleiro humano para disputas de Jo-ken-pÃƒÂ´.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "10 BambolÃƒÂªs organizados em linha ou curva"
        ],
        "steps": [
          "Organize os bambolÃƒÂªs em fila no chÃƒÂ£o. Divida a turma em dois times, cada um em uma extremidade da trilha.",
          "Ao sinal, o primeiro de cada fila pula de bambolÃƒÂª em bambolÃƒÂª. Quando se encontrarem, devem disputar uma rodada de Jo-ken-pÃƒÂ´.",
          "O perdedor sai da trilha e o vencedor continua avanÃƒÂ§ando. Um novo colega do time que perdeu entra na trilha para interceptar o vencedor.",
          "Vence a equipe que conseguir atravessar um jogador atÃƒÂ© a base adversÃƒÂ¡ria primeiro."
        ]
      },
      {
        "id": "pdf-70",
        "title": "Cabo de Guerra de BambolÃƒÂª",
        "description": "Uma disputa de forÃƒÂ§a e resistÃƒÂªncia que utiliza um bambolÃƒÂª como elo entre as duplas, exigindo equilÃƒÂ­brio e potÃƒÂªncia muscular.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "BambolÃƒÂª resistente"
        ],
        "steps": [
          "Duas duplas entram no mesmo bambolÃƒÂª, ficando de costas uma para a outra.",
          "Trace duas linhas paralelas a 2 metros de distÃƒÂ¢ncia de cada lado do ponto central.",
          "Ao sinal, cada dupla deve correr de frente (puxando o bambolÃƒÂª com o corpo) tentando cruzar sua respectiva linha.",
          "Vence a dupla que conseguir arrastar os adversÃƒÂ¡rios e ultrapassar a marca primeiro."
        ]
      },
      {
        "id": "pdf-82",
        "title": "Aposta de Palitos em Equipe",
        "description": "Um jogo de sorte e cooperaÃƒÂ§ÃƒÂ£o lÃƒÂºdica onde a generosidade entre colegas mantÃƒÂ©m o time na disputa.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [
          "Palitos de picolÃƒÂ© ou de dente (3 por participante)"
        ],
        "steps": [
          "Divida as crianÃƒÂ§as em dois grupos. Cada um recebe 3 palitos. As batalhas ocorrem em duplas adversÃƒÂ¡rias via Jo-ken-pÃƒÂ´.",
          "O perdedor entrega um palito ao vencedor. Quem ficar com apenas um palito deve se sentar e aguardar.",
          "Os colegas do mesmo time que ainda tÃƒÂªm 2 ou mais palitos podem 'doar' um palito para quem estÃƒÂ¡ sentado voltar ao jogo.",
          "Vence o time que conseguir coletar todos os palitos dos adversÃƒÂ¡rios."
        ]
      },
      {
        "id": "pdf-85",
        "title": "Genius Corporal",
        "description": "Um jogo de memÃƒÂ³ria e ritmo inspirado no clÃƒÂ¡ssico eletrÃƒÂ´nico, mas onde os comandos sÃƒÂ£o saltos e movimentos fÃƒÂ­sicos.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": [
          "6 BambolÃƒÂªs organizados em cÃƒÂ­rculo ou grade"
        ],
        "steps": [
          "Monte uma grade com bambolÃƒÂªs. Um time ÃƒÂ© o 'Atacante' (Genius) e o outro ÃƒÂ© o 'Defensor' (Memorizador).",
          "O primeiro Atacante pula em um bambolÃƒÂª. O primeiro Defensor deve repetir o movimento exato.",
          "Na prÃƒÂ³xima rodada, o Atacante repete o primeiro bambolÃƒÂª e adiciona um novo. O Defensor deve repetir a sequÃƒÂªncia completa.",
          "Se o Defensor errar a sequÃƒÂªncia, o time Atacante marca ponto. Troque os papÃƒÂ©is apÃƒÂ³s cada sequÃƒÂªncia finalizada."
        ]
      },
      {
        "id": "pdf-87",
        "title": "A Rainha da Colmeia",
        "description": "Uma variaÃƒÂ§ÃƒÂ£o estratÃƒÂ©gica de queimada onde a proteÃƒÂ§ÃƒÂ£o de um lÃƒÂ­der secreto ÃƒÂ© a chave para a sobrevivÃƒÂªncia do time.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [
          "1 bola de queimada"
        ],
        "steps": [
          "Cada time escolhe secretamente um integrante para ser a 'Abelha Rainha'.",
          "O jogo de queimada segue normalmente, mas o objetivo principal ÃƒÂ© descobrir e eliminar a Rainha adversÃƒÂ¡ria.",
          "Os jogadores devem agir com cautela para nÃƒÂ£o revelar quem estÃƒÂ£o protegendo demais.",
          "Se a Rainha for queimada, o time perde instantaneamente, independentemente de quantos jogadores ainda restam."
        ]
      },
      {
        "id": "pdf-94",
        "title": "Barra Manteiga EstratÃƒÂ©gica",
        "description": "Um clÃƒÂ¡ssico renovado que testa a explosÃƒÂ£o fÃƒÂ­sica e o tempo de reaÃƒÂ§ÃƒÂ£o em uma disputa de campo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Times frente a frente em linhas de fundo. Um desafiante vai atÃƒÂ© a linha adversÃƒÂ¡ria onde todos estÃƒÂ£o com as mÃƒÂ£os estendidas para cima.",
          "O desafiante toca levemente nas mÃƒÂ£os cantando 'Barra manteiga, na saia da nega, 1, 2, 3!'. No '3', ele bate forte na mÃƒÂ£o de alguÃƒÂ©m e corre.",
          "O escolhido deve perseguir o desafiante antes que ele cruze sua prÃƒÂ³pria linha de base.",
          "Se for pego, o desafiante passa para o time adversÃƒÂ¡rio. Se escapar, o perseguidor passa para o time do desafiante."
        ]
      },
      {
        "id": "pdf-96",
        "title": "Duelo de CoraÃƒÂ§ÃƒÂµes",
        "description": "Uma gincana de batalha mÃƒÂ­stica baseada na sorte e hierarquia, onde o objetivo ÃƒÂ© proteger o lÃƒÂ­der supremo da equipe.",
        "duration": "20-25 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [
          "1 Colete ou acessÃƒÂ³rio para identificar o Rei"
        ],
        "steps": [
          "Divida os times e escolha um 'Rei' para cada. Cada guerreiro tem 3 'vidas' e o Rei tem 2.",
          "Os participantes travam batalhas de Jo-ken-pÃƒÂ´ em melhor de 3 ao se encontrarem no campo neutro.",
          "O Rei ÃƒÂ© mais poderoso: ao vencer uma batalha, ele retira 2 vidas do adversÃƒÂ¡rio de uma vez.",
          "Vence a equipe que conseguir eliminar o Rei adversÃƒÂ¡rio ou todos os seus guerreiros."
        ]
      },
      {
        "id": "pdf-109",
        "title": "Stop Express",
        "description": "Uma gincana intelectual e fÃƒÂ­sica que combina o clÃƒÂ¡ssico jogo de palavras com um revezamento agitado.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": [
          "Papel e caneta para cada time"
        ],
        "steps": [
          "O time escolhe um 'Escritor' que fica na base com o papel. O restante da equipe forma uma coluna distante.",
          "O monitor grita uma letra. Um de cada vez, o corredor corre atÃƒÂ© o escritor, diz uma palavra vÃƒÂ¡lida com aquela letra e volta para bater na mÃƒÂ£o do prÃƒÂ³ximo.",
          "Somente apÃƒÂ³s o retorno do corredor o prÃƒÂ³ximo pode sair. O escritor anota as categorias (Nome, Cor, Fruta, Objeto, etc).",
          "A equipe que preencher todas as categorias corretamente primeiro ganha a rodada."
        ]
      },
      {
        "id": "pdf-116",
        "title": "Passos Unidos",
        "description": "Um exercÃƒÂ­cio de sincronia e confianÃƒÂ§a onde duplas devem se mover como se fossem um ÃƒÂºnico ser.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Fitas ou barbantes para unir os tornozelos"
        ],
        "steps": [
          "Una o tornozelo direito de um participante ao tornozelo esquerdo de seu parceiro usando uma fita confortÃƒÂ¡vel.",
          "As duplas devem caminhar ou correr atÃƒÂ© um ponto determinado em forma de gincana de revezamento.",
          "Trabalha a coordenaÃƒÂ§ÃƒÂ£o rÃƒÂ­tmica, comunicaÃƒÂ§ÃƒÂ£o verbal e o equilÃƒÂ­brio compartilhado.",
          "Dica: Comece com distÃƒÂ¢ncias curtas para evitar tropeÃƒÂ§os atÃƒÂ© que as duplas ganhem confianÃƒÂ§a."
        ]
      },
      {
        "id": "pdf-117",
        "title": "Caranguejo Cooperativo",
        "description": "Um desafio fÃƒÂ­sico exigente que testa a resistÃƒÂªncia e a sincronia motora em uma formaÃƒÂ§ÃƒÂ£o de fileira humana.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "A equipe forma uma coluna. Todos entram na posiÃƒÂ§ÃƒÂ£o de caranguejo (abdÃƒÂ´men para cima, apoio em mÃƒÂ£os e pÃƒÂ©s).",
          "O jogador da frente coloca as mÃƒÂ£os sobre os tornozelos do colega de trÃƒÂ¡s, criando uma corrente humana.",
          "O objetivo ÃƒÂ© que toda a fila se mova de forma sincronizada atÃƒÂ© a linha de chegada sem quebrar o elo.",
          "Desenvolve forÃƒÂ§a nos braÃƒÂ§os, pernas e exige um ritmo de movimento ÃƒÂºnico para o grupo."
        ]
      },
      {
        "id": "pdf-124",
        "title": "O MistÃ©rio de Mango",
        "description": "Um jogo de adivinhaÃ§Ã£o e mÃ­mica que recompensa o conhecimento geral e adiciona um elemento de sorte punitiva.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "8+ anos",
        "materials": [
          "Lista de palavras temÃ¡ticas preparada pelo monitor"
        ],
        "steps": [
          "Divida os participantes em duas equipes. O monitor dÃ¡ dicas sobre palavras especÃ­ficas de categorias (Bebida, Animal, Objeto).",
          "As equipes competem para adivinhar a palavra primeiro. Cada acerto vale um ponto.",
          "Palavra Mango: Em momentos aleatÃ³rios da lista, aparece a palavra Mango. Quando ela surge, o time com mais pontos escolhe um 'mico' lÃºdico para o adversÃ¡rio.",
          "Promove a interaÃ§Ã£o social rÃ¡pida e o vocabulÃ¡rio das crianÃ§as."
        ]
      }
    ]
  },
  {
    id: "ludico_sensorial",
    label: "LÃƒÂºdicos & Sensoriais",
    icon: RiTentLine,
    color: "#FFCC00",
    bg: "#FFF9E5",
    description: "MemÃƒÂ³ria, buscas e mistÃƒÂ©rios.",
    games: [
      {
        "id": "pdf-17",
        "title": "Cadeiras SolidÃƒÂ¡rias",
        "description": "Uma versÃƒÂ£o cooperativa da clÃƒÂ¡ssica danÃƒÂ§a das cadeiras, onde ninguÃƒÂ©m ÃƒÂ© excluÃƒÂ­do e o objetivo ÃƒÂ© o apoio mÃƒÂºtuo.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [
          "Cadeiras (diminuindo a cada rodada)",
          "MÃƒÂºsica animada"
        ],
        "steps": [
          "Organize as cadeiras em cÃƒÂ­rculo. A mÃƒÂºsica toca e todos circulam.",
          "Quando a mÃƒÂºsica para, todos devem buscar uma cadeira. A cada rodada, uma cadeira ÃƒÂ© retirada.",
          "O desafio cooperativo: quem ficar sem cadeira deve sentar no colo de um colega. NinguÃƒÂ©m pode ficar tocando o chÃƒÂ£o.",
          "O jogo termina com apenas uma cadeira e todo o grupo equilibrado uns sobre os outros de forma divertida."
        ]
      },
      {
        "id": "pdf-20",
        "title": "Mestre Panda",
        "description": "Um jogo de artes marciais lÃƒÂºdicas que exercita a paciÃƒÂªncia, o equilÃƒÂ­brio e o tempo de reaÃƒÂ§ÃƒÂ£o.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "Todos comeÃƒÂ§am em cÃƒÂ­rculo com as mÃƒÂ£os em posiÃƒÂ§ÃƒÂ£o de prece. Ao sinal 'Kung Fu Panda!', todos dÃƒÂ£o um salto para trÃƒÂ¡s e assumem uma pose.",
          "Um jogador por vez pode fazer um ÃƒÂºnico movimento para tentar tocar a mÃƒÂ£o ou pÃƒÂ© de um colega vizinho.",
          "O colega atacado pode usar apenas um movimento para desviar. Se for tocado, aquele membro fica 'congelado' (atrÃƒÂ¡s das costas).",
          "Vence o ÃƒÂºltimo 'mestre' que ainda tiver membros livres para se mover."
        ]
      },
      {
        "id": "pdf-22",
        "title": "Alvo Certo",
        "description": "Um teste de precisÃƒÂ£o e coordenaÃƒÂ§ÃƒÂ£o motora fina em um desafio clÃƒÂ¡ssico de arremesso.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "Livre",
        "materials": [
          "BambolÃƒÂªs pequenos ou aros de plÃƒÂ¡stico",
          "Cones ou garrafas PET com areia"
        ],
        "steps": [
          "Posicione os cones a diferentes distÃƒÂ¢ncias, atribuindo pontuaÃƒÂ§ÃƒÂµes maiores para os mais distantes.",
          "As crianÃƒÂ§as devem arremessar os aros tentando encaixÃƒÂ¡-los nos cones.",
          "Trabalha o foco visual e o controle de forÃƒÂ§a no braÃƒÂ§o.",
          "Pode ser jogado individualmente visando bater recordes ou em equipes."
        ]
      },
      {
        "id": "pdf-28",
        "title": "Salto sobre Costas",
        "description": "Uma atividade tradicional de revezamento que exige confianÃƒÂ§a e coordenaÃƒÂ§ÃƒÂ£o motora ampla.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Algumas crianÃƒÂ§as ficam paradas, curvadas e com as mÃƒÂ£os nos joelhos, formando 'obstÃƒÂ¡culos'.",
          "Os saltadores devem correr e pular sobre as costas dos colegas, apoiando as mÃƒÂ£os suavemente para impulsÃƒÂ£o.",
          "ApÃƒÂ³s saltar sobre todos, o saltador torna-se o novo ÃƒÂºltimo obstÃƒÂ¡culo da fila.",
          "Incentiva a fluidez de movimento e o condicionamento fÃƒÂ­sico de forma lÃƒÂºdica."
        ]
      },
      {
        "id": "pdf-37",
        "title": "Tesouro Desmontado",
        "description": "Um jogo de exploraÃƒÂ§ÃƒÂ£o e lÃƒÂ³gica que combina uma caÃƒÂ§a ao tesouro com a montagem de um quebra-cabeÃƒÂ§a estratÃƒÂ©gico.",
        "duration": "20-30 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Desenhos coloridos cortados em peÃƒÂ§as",
          "Cola ou fita adesiva"
        ],
        "steps": [
          "O monitor esconde as peÃƒÂ§as de vÃƒÂ¡rios desenhos pelo jardim ou sala.",
          "Cada crianÃƒÂ§a ou dupla deve procurar as peÃƒÂ§as que compÃƒÂµem o seu desenho especÃƒÂ­fico.",
          "Ao encontrar todas as partes, devem correr para a base e montar o quebra-cabeÃƒÂ§a corretamente.",
          "Trabalha a percepÃƒÂ§ÃƒÂ£o visual, a paciÃƒÂªncia e a memÃƒÂ³ria espacial."
        ]
      },
      {
        "id": "pdf-39",
        "title": "Sinfonia da Natureza",
        "description": "Um exercÃƒÂ­cio auditivo lÃƒÂºdico que conecta as crianÃƒÂ§as com os sons do mundo ao seu redor.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "Livre",
        "materials": [
          "GravaÃƒÂ§ÃƒÂµes de sons reais ou imitaÃƒÂ§ÃƒÂµes do recreador"
        ],
        "steps": [
          "As crianÃƒÂ§as fecham os olhos e ouvem um som (ex: chuva, vento, pÃƒÂ¡ssaros, trovÃƒÂ£o).",
          "Elas devem adivinhar o que ÃƒÂ© e, em seguida, tentar reproduzir o som usando apenas o corpo ou a voz.",
          "Pode ser usado como uma atividade de relaxamento ou de estÃƒÂ­mulo criativo.",
          "Ajuda no desenvolvimento da percepÃƒÂ§ÃƒÂ£o auditiva e onomatopeia."
        ]
      },
      {
        "id": "pdf-47",
        "title": "Desafio das Palmas",
        "description": "Um teste de controle de pressÃƒÂ£o de ar e reflexos usando apenas uma folha de papel.",
        "duration": "10-15 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "Folhas de papel sulfite (1 por crianÃƒÂ§a)"
        ],
        "steps": [
          "Cada crianÃƒÂ§a segura uma folha de papel entre as palmas das mÃƒÂ£os abertas.",
          "Ao sinal, elas devem bater palmas rapidamente e soltar as mÃƒÂ£os, mantendo a folha 'presa' no ar apenas pelo vÃƒÂ¡cuo ou pressÃƒÂ£o rÃƒÂ¡pida.",
          "Se a folha cair no chÃƒÂ£o, a crianÃƒÂ§a deve pagar uma tarefa lÃƒÂºdica ou sentar-se para a prÃƒÂ³xima rodada.",
          "Incentiva a coordenaÃƒÂ§ÃƒÂ£o motora fina e a compreensÃƒÂ£o intuitiva da fÃƒÂ­sica do ar."
        ]
      },
      {
        "id": "pdf-52",
        "title": "Espelho do Riso",
        "description": "Um duelo de autocontrole e comÃƒÂ©dia onde o objetivo ÃƒÂ© manter a seriedade enquanto o oponente faz de tudo para te arrancar um riso.",
        "duration": "10-15 min",
        "participants": "2+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "As crianÃƒÂ§as formam duplas, uma de frente para a outra. Uma ÃƒÂ© o 'Ator' e a outra o 'Espelho'.",
          "O Ator deve fazer caretas e gestos engraÃƒÂ§ados. O Espelho deve imitar tudo com perfeiÃƒÂ§ÃƒÂ£o, mas sem dar risada.",
          "Quem rir primeiro perde o round. Troque os papÃƒÂ©is e as duplas frequentemente.",
          "Excelente para quebrar o gelo e trabalhar a inibiÃƒÂ§ÃƒÂ£o e o autocontrole emocional."
        ]
      },
      {
        "id": "pdf-62",
        "title": "Campo Minado da MemÃƒÂ³ria",
        "description": "Um desafio tÃƒÂ¡tico de memÃƒÂ³ria e cooperaÃƒÂ§ÃƒÂ£o onde o grupo deve atravessar um caminho perigoso usando as falhas uns dos outros como liÃƒÂ§ÃƒÂ£o.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "6+ anos",
        "materials": [
          "BambolÃƒÂªs ou marcaÃƒÂ§ÃƒÂµes no chÃƒÂ£o formando um grid",
          "Um 'mapa secreto' nas mÃƒÂ£os do monitor"
        ],
        "steps": [
          "Disponha os bambolÃƒÂªs em um grid (ex: 4x4). O monitor possui o mapa com o caminho seguro.",
          "Um jogador por vez tenta atravessar. Se ele pisar em uma 'mina' (local errado), o monitor faz um sinal sonoro e ele volta para o fim da fila.",
          "O prÃƒÂ³ximo jogador deve usar a memÃƒÂ³ria para nÃƒÂ£o repetir o erro do colega e tentar avanÃƒÂ§ar um passo a mais.",
          "O jogo termina quando toda a equipe consegue decorar e atravessar o caminho seguro."
        ]
      },
      {
        "id": "pdf-74",
        "title": "Onde estÃƒÂ¡ o LÃƒÂ­der?",
        "description": "Um exercÃƒÂ­cio de observaÃƒÂ§ÃƒÂ£o e sincronia onde um detetive deve identificar a origem dos movimentos coordenados do grupo.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Um aluno ÃƒÂ© o 'Detetive' e sai da sala. O grupo escolhe um 'LÃƒÂ­der' secreto.",
          "O LÃƒÂ­der inicia movimentos rÃƒÂ­tmicos (bater palmas, estalar dedos, balanÃƒÂ§ar braÃƒÂ§os) e todos devem imitÃƒÂ¡-lo imediatamente.",
          "O Detetive volta ao centro do cÃƒÂ­rculo e tem 3 chances para descobrir quem estÃƒÂ¡ puxando as mudanÃƒÂ§as de movimento.",
          "O grupo deve tentar disfarÃƒÂ§ar, nÃƒÂ£o olhando diretamente para o LÃƒÂ­der."
        ]
      },
      {
        "id": "pdf-75",
        "title": "CÃƒÂ­rculo de ProteÃƒÂ§ÃƒÂ£o",
        "description": "Um jogo rÃƒÂ­tmico e ÃƒÂ¡gil que exige uniÃƒÂ£o e reflexos para proteger o colega de ser capturado.",
        "duration": "15-20 min",
        "participants": "10+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "As crianÃƒÂ§as formam um cÃƒÂ­rculo de mÃƒÂ£os dadas e cada uma tem um nÃƒÂºmero. Um 'Pegador' fica do lado de fora.",
          "O monitor grita um nÃƒÂºmero. A crianÃƒÂ§a correspondente deve ser protegida pelo cÃƒÂ­rculo.",
          "O Pegador tenta tocar na crianÃƒÂ§a citada, enquanto o cÃƒÂ­rculo gira rapidamente para impedir o acesso.",
          "Se o Pegador conseguir o toque, ele troca de lugar com a crianÃƒÂ§a capturada."
        ]
      },
      {
        "id": "pdf-77",
        "title": "Quem sou Eu?",
        "description": "Uma adaptaÃƒÂ§ÃƒÂ£o personalizada do clÃƒÂ¡ssico jogo de adivinhaÃƒÂ§ÃƒÂ£o usando a identidade dos prÃƒÂ³prios participantes.",
        "duration": "20-25 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Fotos dos participantes impressas ou nomes em cartÃƒÂµes"
        ],
        "steps": [
          "O monitor fixa o nome ou foto de um colega nas costas de cada crianÃƒÂ§a (sem que ela veja).",
          "As crianÃƒÂ§as circulam e fazem perguntas uns aos outros que sÃƒÂ³ podem ser respondidas com 'Sim' ou 'NÃƒÂ£o' (ex: 'Eu tenho ÃƒÂ³culos?', 'Eu sou menino?').",
          "O objetivo ÃƒÂ© descobrir qual a identidade que vocÃƒÂª carrega nas costas.",
          "Estimula o reconhecimento de caracterÃƒÂ­sticas e a interaÃƒÂ§ÃƒÂ£o social positiva."
        ]
      },
      {
        "id": "pdf-78",
        "title": "Sentido dos Pontos",
        "description": "Um exercÃƒÂ­cio de escuta ativa e reflexos rÃƒÂ¡pidos onde o corpo deve responder instantaneamente a comandos direcionais.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "Livre",
        "materials": [
          "BambolÃƒÂªs ou marcaÃƒÂ§ÃƒÂµes com giz no chÃƒÂ£o"
        ],
        "steps": [
          "Cada participante se posiciona dentro de um bambolÃƒÂª disposto em cÃƒÂ­rculo.",
          "O monitor grita comandos rÃƒÂ¡pidos: 'Frente!', 'TrÃƒÂ¡s!', 'Esquerda!', 'Direita!'.",
          "Os participantes devem saltar para fora e voltar para o centro conforme a direÃƒÂ§ÃƒÂ£o pedida.",
          "O grau de dificuldade aumenta conforme o monitor acelera o ritmo ou inverte o significado dos comandos."
        ]
      },
      {
        "id": "pdf-79",
        "title": "Trilha das SensaÃƒÂ§ÃƒÂµes",
        "description": "Um desafio sensorial que remove a visÃƒÂ£o para aguÃƒÂ§ar o tato e a noÃƒÂ§ÃƒÂ£o espacial atravÃƒÂ©s de um guia fÃƒÂ­sico.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "Corda longa ou barbante grosso",
          "Vendas para os olhos"
        ],
        "steps": [
          "Estique uma corda pelo ambiente, criando curvas, subidas e descidas (usando mÃƒÂ³veis ou relevos).",
          "Os participantes, vendados, devem percorrer toda a extensÃƒÂ£o da corda sentindo-a apenas com os pÃƒÂ©s ou mÃƒÂ£os.",
          "Incentiva a confianÃƒÂ§a no prÃƒÂ³prio equilÃƒÂ­brio e a percepÃƒÂ§ÃƒÂ£o tÃƒÂ¡til do ambiente.",
          "Pode-se adicionar texturas diferentes ao longo do caminho para enriquecer a experiÃƒÂªncia."
        ]
      },
      {
        "id": "pdf-80",
        "title": "Cromatismo ÃƒÂgil",
        "description": "Uma gincana de associaÃƒÂ§ÃƒÂ£o rÃƒÂ¡pida que testa o reconhecimento de cores sob pressÃƒÂ£o competitiva.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Folhas ou objetos coloridos",
          "LÃƒÂ¡pis ou bastÃƒÂµes de cores correspondentes"
        ],
        "steps": [
          "Espalhe as bases coloridas (folhas) por um espaÃƒÂ§o amplo.",
          "Distribua para cada participante um conjunto de lÃƒÂ¡pis ou objetos de cores variadas.",
          "Ao sinal, os participantes devem correr e depositar cada objeto na base da cor exata.",
          "Vence quem conseguir organizar todos os seus itens corretamente no menor tempo possÃƒÂ­vel."
        ]
      },
      {
        "id": "pdf-88",
        "title": "Enigma das Pistas",
        "description": "Uma caÃƒÂ§a ao tesouro narrativa onde cada descoberta revela uma parte de uma histÃƒÂ³ria maior.",
        "duration": "20-30 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "CartÃƒÂµes com pistas escritas",
          "Canetas"
        ],
        "steps": [
          "O monitor cria uma histÃƒÂ³ria envolvente e a divide em 'capÃƒÂ­tulos' escondidos pelo local.",
          "As crianÃƒÂ§as devem decifrar as dicas de cada cena para encontrar a localizaÃƒÂ§ÃƒÂ£o da prÃƒÂ³xima pista.",
          "Cada pista contÃƒÂ©m uma tarefa ou pergunta que o grupo deve resolver para avanÃƒÂ§ar.",
          "O jogo termina quando o grupo chega ao local final e o monitor revela o desfecho do mistÃƒÂ©rio."
        ]
      },
      {
        "id": "pdf-90",
        "title": "Canibal CromÃƒÂ¡tico",
        "description": "Um jogo de perseguiÃƒÂ§ÃƒÂ£o e camuflagem onde o objetivo ÃƒÂ© coletar todas as cores sem ser 'marcado' pela escuridÃƒÂ£o.",
        "duration": "20-25 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "Canetinhas ou tintas guache de vÃƒÂ¡rias cores",
          "1 Cor preta para o 'Canibal'"
        ],
        "steps": [
          "Esconda potes de tinta ou canetinhas coloridas pelo campo. Um participante ÃƒÂ© o 'Canibal' (com a cor preta).",
          "As crianÃƒÂ§as buscam as cores. Ao encontrar uma, devem fazer uma pequena marca no braÃƒÂ§o.",
          "Se o Canibal capturar alguÃƒÂ©m, ele passa a tinta preta por cima das cores conquistadas, anulando o progresso.",
          "Ganha quem completar o arco-ÃƒÂ­ris de cores no braÃƒÂ§o primeiro sem ser pego."
        ]
      },
      {
        "id": "pdf-98",
        "title": "InvestigaÃƒÂ§ÃƒÂ£o Criminal",
        "description": "Um jogo de interpretaÃƒÂ§ÃƒÂ£o e deduÃƒÂ§ÃƒÂ£o onde a lÃƒÂ¡bia e a observaÃƒÂ§ÃƒÂ£o sÃƒÂ£o as ferramentas para desmascarar o culpado.",
        "duration": "20-30 min",
        "participants": "8+",
        "age": "8+ anos",
        "materials": [
          "CartÃƒÂµes com papÃƒÂ©is (Assassino, Suspeitos, Detetives)"
        ],
        "steps": [
          "Divida a turma em grupos de investigaÃƒÂ§ÃƒÂ£o. TrÃƒÂªs pessoas sÃƒÂ£o escolhidas para serem os suspeitos de um 'crime' lÃƒÂºdico.",
          "Apenas um ÃƒÂ© o culpado, e apenas ele e o monitor sabem da verdade. Os suspeitos se escondem ou assumem posiÃƒÂ§ÃƒÂµes.",
          "Os grupos interrogam cada suspeito perguntando sobre o ÃƒÂ¡libi e detalhes da histÃƒÂ³ria montada pelo monitor.",
          "Vence a equipe de detetives que apresentar a acusaÃƒÂ§ÃƒÂ£o mais bem fundamentada e descobrir o culpado."
        ]
      },
      {
        "id": "pdf-99",
        "title": "Sorriso MilionÃƒÂ¡rio",
        "description": "Um desafio de autocontrole emocional onde a risada ÃƒÂ© a moeda de troca em um duelo de humor.",
        "duration": "10-15 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "Palitos de picolÃƒÂ© para representar os 'pontos'"
        ],
        "steps": [
          "Cada participante recebe 3 palitos. Todos circulam livremente pelo espaÃƒÂ§o.",
          "Ao comando 'Duelo!', os participantes param em duplas face a face. Um deve tentar fazer o outro rir com mÃƒÂ­micas e caretas.",
          "O defensor deve se manter sÃƒÂ©rio. Se rir, entrega um de seus palitos ao adversÃƒÂ¡rio.",
          "Vence quem acumular mais palitos ou for o ÃƒÂºltimo a restar com seu 'tesouro' intacto."
        ]
      },
      {
        "id": "pdf-106",
        "title": "Pegue o Banquinho",
        "description": "Inspirado em clÃƒÂ¡ssicos da TV brasileira, este jogo testa o vocabulÃƒÂ¡rio rÃƒÂ¡pido e o conhecimento geral sob pressÃƒÂ£o de tempo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Forme duplas ou grupos pequenos. O monitor escolhe um tema e uma letra via 'Adedonha'.",
          "As equipes devem dizer um item do tema com a letra sorteada. Cada equipe tem apenas 10 segundos para responder.",
          "Quem travar na resposta ÃƒÂ© 'eliminado' da rodada com a famosa mÃƒÂºsica: 'O Raul perguntou, vocÃƒÂª nÃƒÂ£o acertou...'.",
          "Promove o raciocÃƒÂ­nio rÃƒÂ¡pido e a diversÃƒÂ£o coletiva com nostalgia lÃƒÂºdica."
        ]
      },
      {
        "id": "pdf-111",
        "title": "Salada de Fruta Sequencial",
        "description": "Um exercÃƒÂ­cio de memÃƒÂ³ria auditiva e acumulaÃƒÂ§ÃƒÂ£o que desafia os participantes a memorizar uma lista crescente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O grupo forma um cÃƒÂ­rculo. O monitor comeÃƒÂ§a dizendo o nome de uma fruta.",
          "O prÃƒÂ³ximo participante deve repetir a fruta anterior e adicionar uma nova de sua escolha.",
          "A sequÃƒÂªncia continua crescendo atÃƒÂ© que alguÃƒÂ©m esqueÃƒÂ§a a ordem ou uma das frutas citadas.",
          "Estimula a concentraÃƒÂ§ÃƒÂ£o e a memÃƒÂ³ria de curto prazo de forma divertida e competitiva."
        ]
      },
      {
        "id": "pdf-123",
        "title": "Gato e Rato Cego",
        "description": "Um jogo de localizaÃƒÂ§ÃƒÂ£o sonora que exige silÃƒÂªncio absoluto do grupo e audiÃƒÂ§ÃƒÂ£o aguÃƒÂ§ada dos jogadores centrais.",
        "duration": "15-20 min",
        "participants": "8+",
        "age": "7+ anos",
        "materials": [
          "Duas vendas para os olhos"
        ],
        "steps": [
          "As crianÃƒÂ§as formam um grande cÃƒÂ­rculo sentado. No centro, dois jogadores vendados: um ÃƒÂ© o gato e outro o rato.",
          "Toda vez que o gato latir (ou miar), o rato deve responder com um som curto para dar sua posiÃƒÂ§ÃƒÂ£o.",
          "O gato tenta capturar o rato seguindo apenas o som. O cÃƒÂ­rculo deve ficar em silÃƒÂªncio absoluto para ajudar.",
          "Quando o rato ÃƒÂ© pego ou o tempo acaba, trocam-se os personagens centrais."
        ]
      },
      {
        "id": "pdf-125",
        "title": "MemÃƒÂ³ria Humana Viva",
        "description": "Uma adaptaÃƒÂ§ÃƒÂ£o em tamanho real do jogo de memÃƒÂ³ria onde os pares sÃƒÂ£o os prÃƒÂ³prios colegas realizando movimentos.",
        "duration": "20-25 min",
        "participants": "10+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Dois participantes saem da sala. O restante se divide em pares e cada par combina um gesto ou sinal secreto idÃƒÂªntico.",
          "O grupo se embaralha e fica em silÃƒÂªncio. Os dois investigadores retornam e tentam encontrar os pares.",
          "Eles apontam para duas pessoas: elas executam seus gestos. Se forem iguais, o par ÃƒÂ© 'eliminado' ou marca ponto.",
          "Trabalha a atenÃƒÂ§ÃƒÂ£o visual e a coordenaÃƒÂ§ÃƒÂ£o motora dos pares."
        ]
      },
      {
        "id": "pdf-132",
        "title": "O Grande Julgamento",
        "description": "Um jogo de roleplay e oratÃƒÂ³ria onde o objetivo ÃƒÂ© convencer os juÃƒÂ­zes atravÃƒÂ©s da lÃƒÂ³gica e defesa argumentativa.",
        "duration": "20-30 min",
        "participants": "9+",
        "age": "10+ anos",
        "materials": [
          "Um roteiro simples de conflito inventado pelo monitor"
        ],
        "steps": [
          "Divida a turma em trÃƒÂªs grupos: AcusaÃƒÂ§ÃƒÂ£o, Defesa e JuÃƒÂ­zes.",
          "O monitor apresenta um 'caso' fictÃƒÂ­cio (ex: Quem comeu o ÃƒÂºltimo pedaÃƒÂ§o de bolo?).",
          "Os times de acusaÃƒÂ§ÃƒÂ£o e defesa preparam seus argumentos e interrogam os envolvidos.",
          "Os juÃƒÂ­zes ouvem as partes e decidem o veredito com base na melhor argumentaÃƒÂ§ÃƒÂ£o e provas apresentadas."
        ]
      },
      {
        "id": "pdf-137",
        "title": "MistÃƒÂ©rio Explosivo",
        "description": "Uma caÃƒÂ§a ao tesouro agitada que combina pistas escondidas com um elemento de suspense e aÃƒÂ§ÃƒÂ£o fÃƒÂ­sica.",
        "duration": "15-20 min",
        "participants": "6+",
        "age": "7+ anos",
        "materials": [
          "Bexigas coloridas",
          "CartÃƒÂµes de papel",
          "Caneta"
        ],
        "steps": [
          "O monitor escreve pistas dentro de pequenos papÃƒÂ©is e os coloca dentro de bexigas, que sÃƒÂ£o espalhadas e escondidas.",
          "Os participantes devem encontrar as bexigas e levÃƒÂ¡-las atÃƒÂ© a 'Central de PolÃƒÂ­cia' para estourar e ler a pista.",
          "Combinando as pistas, o grupo deve responder: Quem foi? Onde foi? E o que aconteceu?",
          "Estimula a cooperaÃƒÂ§ÃƒÂ£o em grupo e o raciocÃƒÂ­nio lÃƒÂ³gico sob adrenalina."
        ]
      }
    ]
  }
];
