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
        "title": "O lobo",
        "description": "Escolhe-se um participante para ser o lobo, e os outros contam até determinado número em um lugar designado como \"casa\". Enquanto todos contam o lobo se esconde, quando os outros participantes terminarem a contagem, saem a procura do lobo. Quando um participante o descobre, aproxima-se dizendo em voz alta \"vejo um cordeiro cheio de lã\". Os outros participantes aproximam-se. O lobo permanece quieto até que quem o viu grita \"vejo um lobo cheio de lã\", então o lobo saíra atrás dos participantes, quem for pego virará o lobo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolhe-se um participante para ser o lobo, e os outros contam até determinado número em um lugar designado como \"casa\". Enquanto todos contam o lobo se esconde, quando os outros participantes terminarem a contagem, saem a procura do lobo. Quando um participante o descobre, aproxima-se dizendo em voz alta \"vejo um cordeiro cheio de lã\". Os outros participantes aproximam-se. O lobo permanece quieto até que quem o viu grita \"vejo um lobo cheio de lã\", então o lobo saíra atrás dos participantes, quem for pego virará o lobo."
        ]
      },
      {
        "id": "pdf-3",
        "title": "Para direita e para esquerda",
        "description": "atividade para trabalhar a lateralidade com as crianças, usando marcações no chão ou bambolês, o professor falará \"direita\" ou \"esquerda\" e as crianças seguirão os comandos do professor. Como variação, o professor pode usar o som do apito exemplo: dois silvos direita, um silvo esquerda. Poderá também usar frente e trás.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "bambolês"
        ],
        "steps": [
          "atividade para trabalhar a lateralidade com as crianças, usando marcações no chão ou bambolês, o professor falará \"direita\" ou \"esquerda\" e as crianças seguirão os comandos do professor. Como variação, o professor pode usar o som do apito exemplo: dois silvos direita, um silvo esquerda. Poderá também usar frente e trás."
        ]
      },
      {
        "id": "pdf-4",
        "title": "Campo Minado",
        "description": "Deve-se organizar o espaço com obstáculos, a criança deverá estar com os olhos vendados, e seguir as orientações de seu guia para ultrapassar esses obstáculos sem encostar em nada, caso encoste volta para o início.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "cones ou qualquer coisa que sirva como obstáculo."
        ],
        "steps": [
          "Deve-se organizar o espaço com obstáculos, a criança deverá estar com os olhos vendados, e seguir as orientações de seu guia para ultrapassar esses obstáculos sem encostar em nada, caso encoste volta para o início."
        ]
      },
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
      },
      {
        "id": "pdf-8",
        "title": "A sombra",
        "description": "As crianças deverão ser divididas em duplas, e ao sinal do instrutor as duplas irão caminhar pelo local, um da dupla fará movimentos diversos que deverá ser imitado pelo seu companheiro, ao próximo sinal, os participantes deverão trocar os papeis, o que era sombra passará a comandar e o outro será a \"sombra\". Como variação, o professor poderá ir mandando juntar, trios, quartetos etc.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "As crianças deverão ser divididas em duplas, e ao sinal do instrutor as duplas irão caminhar pelo local, um da dupla fará movimentos diversos que deverá ser imitado pelo seu companheiro, ao próximo sinal, os participantes deverão trocar os papeis, o que era sombra passará a comandar e o outro será a \"sombra\". Como variação, o professor poderá ir mandando juntar, trios, quartetos etc."
        ]
      },
      {
        "id": "pdf-9",
        "title": "Medusa",
        "description": "Uma criança será escolhida para ser a \"medusa\", ela fiará posicionada em um determinado lugar virada de costas para os outros participantes que estarão afastados da \"medusa\". Eles deverão se aproximar da \"medusa\" sem que ela veja nenhum movimento, e tentaram encostá-la. A \"medusa\" poderá virar para olhar os participantes quantas vezes quiser e se ela vir algum movimento poderá falar para o colega voltar ao lugar de início. O participante que encostar na medusa, tomara o seu lugar. -- 3 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Uma criança será escolhida para ser a \"medusa\", ela fiará posicionada em um determinado lugar virada de costas para os outros participantes que estarão afastados da \"medusa\". Eles deverão se aproximar da \"medusa\" sem que ela veja nenhum movimento, e tentaram encostá-la. A \"medusa\" poderá virar para olhar os participantes quantas vezes quiser e se ela vir algum movimento poderá falar para o colega voltar ao lugar de início. O participante que encostar na medusa, tomara o seu lugar. -- 3 of 37 --"
        ]
      },
      {
        "id": "pdf-10",
        "title": "Estatua Musical",
        "description": "Colocar uma música, e deixar as crianças dançarem do seu jeito no ritmo da música. Ao pausar a música as crianças deverão parar em uma pose e voltar a se mexer quando a música voltar.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "música"
        ],
        "steps": [
          "Colocar uma música, e deixar as crianças dançarem do seu jeito no ritmo da música. Ao pausar a música as crianças deverão parar em uma pose e voltar a se mexer quando a música voltar."
        ]
      },
      {
        "id": "pdf-12",
        "title": "Pega-pega dos números",
        "description": "Será formado um círculo, o monitor numerará cada participante de 1-5 (dependendo do número de participantes), ao sinal do monitor, o número chamado deverá levantar-se e correr para o lado direito, assim todos tentaram pegar o colega da sua frente e fugir do colega que está atrás, poderá apenas dar uma ou duas voltas, até chegar ao seu lugar de origem.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Será formado um círculo, o monitor numerará cada participante de 1-5 (dependendo do número de participantes), ao sinal do monitor, o número chamado deverá levantar-se e correr para o lado direito, assim todos tentaram pegar o colega da sua frente e fugir do colega que está atrás, poderá apenas dar uma ou duas voltas, até chegar ao seu lugar de origem."
        ]
      },
      {
        "id": "pdf-13",
        "title": "Toca do coelho",
        "description": "Formar vários grupos de três pessoas, sendo que dois participantes vão dar as mãos simulando uma toca e o outro participante é o coelho que ficará dentro da toca, ao sinal do monitor, todos os coelhos devem trocar de toca, ao segundo sinal as tocas troaram de lugar. Quando o monitor falar em voz alta \"ventania\" todos saíram do seu lugar e caminharam livres como se estivesse ventando. Quando o monitor falar \"toca do coelho\", formam novamente grupos de três. -- 4 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Formar vários grupos de três pessoas, sendo que dois participantes vão dar as mãos simulando uma toca e o outro participante é o coelho que ficará dentro da toca, ao sinal do monitor, todos os coelhos devem trocar de toca, ao segundo sinal as tocas troaram de lugar. Quando o monitor falar em voz alta \"ventania\" todos saíram do seu lugar e caminharam livres como se estivesse ventando. Quando o monitor falar \"toca do coelho\", formam novamente grupos de três. -- 4 of 37 --"
        ]
      },
      {
        "id": "pdf-14",
        "title": "Mãos de cores",
        "description": "Escolhe-se um para ser o condutor da brincadeira. Forma-se um círculo com todos os participantes (pedir para tirar os tênis). O condutor dará uma ordem como \"mão direita no vermelho\", e os participantes tocarão com a mão direita na cor vermelha de um companheiro sem sair do círculo. Ao passar do jogo e monitor troca o condutor da brincadeira.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Escolhe-se um para ser o condutor da brincadeira. Forma-se um círculo com todos os participantes (pedir para tirar os tênis). O condutor dará uma ordem como \"mão direita no vermelho\", e os participantes tocarão com a mão direita na cor vermelha de um companheiro sem sair do círculo. Ao passar do jogo e monitor troca o condutor da brincadeira."
        ]
      },
      {
        "id": "pdf-15",
        "title": "Caça ao tesouro",
        "description": "O monitor irá esconder os objetos sem que as crianças o vejam, ao seu sinal todos os participantes deverão sair a procura dos objetos, os que forem encontrados deverão ser entregues ao monitor. Ir mudando quem irá esconder.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "objetos pequenos para serem o tesouro"
        ],
        "steps": [
          "O monitor irá esconder os objetos sem que as crianças o vejam, ao seu sinal todos os participantes deverão sair a procura dos objetos, os que forem encontrados deverão ser entregues ao monitor. Ir mudando quem irá esconder."
        ]
      },
      {
        "id": "pdf-16",
        "title": "Dança das cadeiras",
        "description": "Organizar as cadeiras uma ao lado da outra, ao tocar a música as crianças deverão andar em volta das cadeiras, no ritmo da música, quando a música parar deverão sentar-se na cadeira. Com o passar da brincadeira ir tirando as cadeiras de uma em uma, a criança que ficar em pé sairá da brincadeira.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "cadeiras ou bancos",
          "música"
        ],
        "steps": [
          "Organizar as cadeiras uma ao lado da outra, ao tocar a música as crianças deverão andar em volta das cadeiras, no ritmo da música, quando a música parar deverão sentar-se na cadeira. Com o passar da brincadeira ir tirando as cadeiras de uma em uma, a criança que ficar em pé sairá da brincadeira."
        ]
      },
      {
        "id": "pdf-21",
        "title": "Corrida de saci",
        "description": "Será demarcado uma linha de partida e uma outra de chegada, ao sinal do monitor todas as crianças deverão sair pulando em um pé só. A criança que colocar o pé no chão será eliminada e ganhará quem chegar primeiro com um pé só.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Será demarcado uma linha de partida e uma outra de chegada, ao sinal do monitor todas as crianças deverão sair pulando em um pé só. A criança que colocar o pé no chão será eliminada e ganhará quem chegar primeiro com um pé só."
        ]
      },
      {
        "id": "pdf-23",
        "title": "Camaleão",
        "description": "Uma criança será escolhida para ser o camaleão, ao sinal do monitor, os restantes das crianças perguntaram para o \"camaleão\" qual é a cor, assim que a cor for dita as crianças correram e encostaram em algo com a cor dita, quem for pego vira o camaleão. -- 6 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma criança será escolhida para ser o camaleão, ao sinal do monitor, os restantes das crianças perguntaram para o \"camaleão\" qual é a cor, assim que a cor for dita as crianças correram e encostaram em algo com a cor dita, quem for pego vira o camaleão. -- 6 of 37 --"
        ]
      },
      {
        "id": "pdf-24",
        "title": "A fila",
        "description": "Formarão uma corrente dando as mãos, um participante será escolhido para ser o condutor. O condutor dirá algumas ordens como \"a corrente se encolhe\" e todos irão se apertar para frente\" ou \"a corrente se alarga\" e todos se separam sem soltar as mãos. Poderá dar várias outras ordens como por exemplo \"a corrente se agacha, salta\" etc. Sempre mudar o condutor da brincadeira.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Formarão uma corrente dando as mãos, um participante será escolhido para ser o condutor. O condutor dirá algumas ordens como \"a corrente se encolhe\" e todos irão se apertar para frente\" ou \"a corrente se alarga\" e todos se separam sem soltar as mãos. Poderá dar várias outras ordens como por exemplo \"a corrente se agacha, salta\" etc. Sempre mudar o condutor da brincadeira."
        ]
      },
      {
        "id": "pdf-25",
        "title": "Travessia da Floresta",
        "description": "Traçar no chão um retângulo bem grande (sendo a floresta). Dentro ficam três participantes que são os pegadores, fora ficam os demais, à vontade. Dado o sinal de início, os jogadores que estão fora tentam cruzar o retângulo, isto é, a \"floresta\", sem serem pegos. Os três jogadores de dentro tentam pegar os outros \"forasteiros\" que cruzam a floresta de um lado para o outro. Quem for preso, passa a ajudar os pegadores.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Traçar no chão um retângulo bem grande (sendo a floresta). Dentro ficam três participantes que são os pegadores, fora ficam os demais, à vontade. Dado o sinal de início, os jogadores que estão fora tentam cruzar o retângulo, isto é, a \"floresta\", sem serem pegos. Os três jogadores de dentro tentam pegar os outros \"forasteiros\" que cruzam a floresta de um lado para o outro. Quem for preso, passa a ajudar os pegadores."
        ]
      },
      {
        "id": "pdf-26",
        "title": "Reizinho mandou",
        "description": "Uma criança será escolhida para ser o \"reizinho\" que comandará a brincadeira. A criança determinada como reizinho dirá \"reizinho mandou\" e o restante dirá \"fazer o que\", e o reizinho determinará a tarefa, como pular de um pé só, imitar um animal entre outras. O monitor deverá sempre trocar o comandante da brincadeira.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma criança será escolhida para ser o \"reizinho\" que comandará a brincadeira. A criança determinada como reizinho dirá \"reizinho mandou\" e o restante dirá \"fazer o que\", e o reizinho determinará a tarefa, como pular de um pé só, imitar um animal entre outras. O monitor deverá sempre trocar o comandante da brincadeira."
        ]
      },
      {
        "id": "pdf-27",
        "title": "Elefante Colorido",
        "description": "Uma criança ficara ao centro, sendo o \"elefante\", essa criança falará \"elefante colorido\" e o restante dirá \"que cor\", e o elefante escolherá uma cor. Se a criança possuir a cor dita poderá passar pelo \"elefante\" sem ser pego, caso não tenha terá que passar correndo, se a criança for pega ela vira o \"elefante\".",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma criança ficara ao centro, sendo o \"elefante\", essa criança falará \"elefante colorido\" e o restante dirá \"que cor\", e o elefante escolherá uma cor. Se a criança possuir a cor dita poderá passar pelo \"elefante\" sem ser pego, caso não tenha terá que passar correndo, se a criança for pega ela vira o \"elefante\"."
        ]
      },
      {
        "id": "pdf-29",
        "title": "Reino dos sacis",
        "description": "Em um canto do espaço determinado para fazer a atividade, marcasse o \"palácio\", onde fica um jogador, o \"saci-rei\". Os demais \"sacis\" dispersam-se à vontade pelo campo. Ao sinal de início, os sacis dirigem-se, pulando num pé só, ao palácio real, para provocar o rei. De repente, este anuncia: \"O rei está zangado!\", saindo a persegui-los, também aos pulos. Ele mesmo conduz ao palácio o primeiro que pega e o nomeia seu \"ajudante\". A brincadeira recomeça, tal como antes, saindo agora os dois, após novo aviso, em perseguição aos demais e assim por diante. O último apanhado será o novo rei, na repetição do jogo. Ninguém pode apoiar os dois pés no chão, sob pena de ser aprisionado, exceto nos seguintes casos: a) quando o jogador estiver dentro do palácio; b) quando o jogador estiver cansado, devendo, porém, ficar parado num mesmo lugar, ocasião em que poderá ser apanhado. O jogador aprisionado ficará dentro do palácio, até outro ser preso, só então podendo voltar ao lugar onde estava antes.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Em um canto do espaço determinado para fazer a atividade, marcasse o \"palácio\", onde fica um jogador, o \"saci-rei\". Os demais \"sacis\" dispersam-se à vontade pelo campo. Ao sinal de início, os sacis dirigem-se, pulando num pé só, ao palácio real, para provocar o rei. De repente, este anuncia: \"O rei está zangado!\", saindo a persegui-los, também aos pulos. Ele mesmo conduz ao palácio o primeiro que pega e o nomeia seu \"ajudante\". A brincadeira recomeça, tal como antes, saindo agora os dois, após novo aviso, em perseguição aos demais e assim por diante. O último apanhado será o novo rei, na repetição do jogo. Ninguém pode apoiar os dois pés no chão, sob pena de ser aprisionado, exceto nos seguintes casos: a) quando o jogador estiver dentro do palácio; b) quando o jogador estiver cansado, devendo, porém, ficar parado num mesmo lugar, ocasião em que poderá ser apanhado. O jogador aprisionado ficará dentro do palácio, até outro ser preso, só então podendo voltar ao lugar onde estava antes."
        ]
      },
      {
        "id": "pdf-30",
        "title": "Congelado",
        "description": "Um tipo de pega-pega. Quem for pego, deve ficar parado no lugar onde foi tocado, até que alguém que ainda não foi pego toque nele, o libertando.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um tipo de pega-pega. Quem for pego, deve ficar parado no lugar onde foi tocado, até que alguém que ainda não foi pego toque nele, o libertando."
        ]
      },
      {
        "id": "pdf-33",
        "title": "Pega-pega espelho",
        "description": "Pega-pega comum, quando a criança for pega deverá fazer uma pose, e para ser salva outra criança tem que parar na frente ela e fazer a pose igual.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Pega-pega comum, quando a criança for pega deverá fazer uma pose, e para ser salva outra criança tem que parar na frente ela e fazer a pose igual."
        ]
      },
      {
        "id": "pdf-34",
        "title": "Céu Terra",
        "description": "Coloca-se uma corda no chão, um lado é o céu e o outro é a terra. Quando o monitor falar céu as crianças pulam para o céu, quando o monitor falar terra as crianças pulam para terra. O monitor poderá falar mais rápido ou repetir a mesma palavra.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "uma corda"
        ],
        "steps": [
          "Coloca-se uma corda no chão, um lado é o céu e o outro é a terra. Quando o monitor falar céu as crianças pulam para o céu, quando o monitor falar terra as crianças pulam para terra. O monitor poderá falar mais rápido ou repetir a mesma palavra."
        ]
      },
      {
        "id": "pdf-35",
        "title": "Cruzando o Rio",
        "description": "cada criança receberá 3 folhas de sulfite. Eles deverão colocar o primeiro papel no chão, pisam nele e colocam o segundo na sua frente, quando colocam o terceiro, deverão recolher o primeiro para repetir o processo. Para que os pequenos entrem na brincadeira, fale que o chão é uma correnteza de água e para que eles consigam passar deverão que passar por cima dos papeis.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "três folhas de sulfite por criança"
        ],
        "steps": [
          "cada criança receberá 3 folhas de sulfite. Eles deverão colocar o primeiro papel no chão, pisam nele e colocam o segundo na sua frente, quando colocam o terceiro, deverão recolher o primeiro para repetir o processo. Para que os pequenos entrem na brincadeira, fale que o chão é uma correnteza de água e para que eles consigam passar deverão que passar por cima dos papeis."
        ]
      },
      {
        "id": "pdf-38",
        "title": "O Feiticeiro e suas estátuas",
        "description": "Os participantes ficam de pé, dispersos em uma área delimitada para a brincadeira. Um voluntário será o \"feiticeiro\" que perseguirá os demais. Ao sinal do monitor, inicia-se a perseguição, e aquele que for tocado ficará \"enfeitiçado\": imóvel com as pernas afastadas, representando uma \"estátua\". Os outros companheiros poderão passar por baixo das pernas das \"estátuas\", salvando-as do \"feitiço\". Depois de algum tempo, o \"feiticeiro\" deverá ser substituído.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Os participantes ficam de pé, dispersos em uma área delimitada para a brincadeira. Um voluntário será o \"feiticeiro\" que perseguirá os demais. Ao sinal do monitor, inicia-se a perseguição, e aquele que for tocado ficará \"enfeitiçado\": imóvel com as pernas afastadas, representando uma \"estátua\". Os outros companheiros poderão passar por baixo das pernas das \"estátuas\", salvando-as do \"feitiço\". Depois de algum tempo, o \"feiticeiro\" deverá ser substituído."
        ]
      },
      {
        "id": "pdf-40",
        "title": "Não me faça rir",
        "description": "Uma criança deve tentar fazer a outra rir (fazendo careta, cosquinha entre outros), enquanto a outra deve tentar segurar a risada.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Uma criança deve tentar fazer a outra rir (fazendo careta, cosquinha entre outros), enquanto a outra deve tentar segurar a risada."
        ]
      },
      {
        "id": "pdf-42",
        "title": "Cauda do dragão",
        "description": "Todas as crianças ficam em pé, em coluna com as mãos na cintura um do outro, formando um dragão. O primeiro integrante da fila, representando a cabeça do dragão, terá como objetivo pegar o último da fila, a cauda. Ao sinal do monitor, o \"dragão\" passará a se movimentar, correndo, sob o comando da cabeça que tentará pegar a cauda. Esta, por sua vez, fará movimentos no sentido de evitar que isso aconteça. Caso consiga pegar a cauda, a criança que a representava passa para frente da fila, se tornado a cabeça do dragão.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Todas as crianças ficam em pé, em coluna com as mãos na cintura um do outro, formando um dragão. O primeiro integrante da fila, representando a cabeça do dragão, terá como objetivo pegar o último da fila, a cauda. Ao sinal do monitor, o \"dragão\" passará a se movimentar, correndo, sob o comando da cabeça que tentará pegar a cauda. Esta, por sua vez, fará movimentos no sentido de evitar que isso aconteça. Caso consiga pegar a cauda, a criança que a representava passa para frente da fila, se tornado a cabeça do dragão."
        ]
      },
      {
        "id": "pdf-43",
        "title": "O gafanhoto e a rã",
        "description": "Faça um círculo no chão para que caiba todos os participantes e sobre espaço. Um será a \"rã\" e os outros serão os \"gafanhotos\" que terão que fugir da \"rã\". A \"rã\" deverá ficar agachada e os gafanhotos deverão fugir pulando de um pé só, quem for pego deverá virar \"rã\" ajudando a pegar os outros.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "1 giz"
        ],
        "steps": [
          "Faça um círculo no chão para que caiba todos os participantes e sobre espaço. Um será a \"rã\" e os outros serão os \"gafanhotos\" que terão que fugir da \"rã\". A \"rã\" deverá ficar agachada e os gafanhotos deverão fugir pulando de um pé só, quem for pego deverá virar \"rã\" ajudando a pegar os outros."
        ]
      },
      {
        "id": "pdf-44",
        "title": "Cuidado que o gato pega",
        "description": "Um será o \"rato\", que segurará o tênis na mão, o os outros participantes deverão sentar-se no chão em um círculo. O rato deverá correr e deixar o tênis atrás de alguém, este será o gato, que correrá atrás do rato, o rato deverá sentar-se no lugar do gato, que virará automaticamente o rato e assim sucessivamente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "um tênis ou um objeto do mesmo tamanho"
        ],
        "steps": [
          "Um será o \"rato\", que segurará o tênis na mão, o os outros participantes deverão sentar-se no chão em um círculo. O rato deverá correr e deixar o tênis atrás de alguém, este será o gato, que correrá atrás do rato, o rato deverá sentar-se no lugar do gato, que virará automaticamente o rato e assim sucessivamente."
        ]
      },
      {
        "id": "pdf-45",
        "title": "Reino Perdido",
        "description": "No reino há várias princesas perdidas (escondidas), um bruxo(a) e uma dama ou cavalheiro. A dama ou cavalheiro tem que encontrar as princesas e levar para o reino antes do bruxo, que levará para o seu esconderijo. Vence quem tiver mais princesas capturadas. Resumindo são 2 pegadores e o restante se esconde. -- 11 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "No reino há várias princesas perdidas (escondidas), um bruxo(a) e uma dama ou cavalheiro. A dama ou cavalheiro tem que encontrar as princesas e levar para o reino antes do bruxo, que levará para o seu esconderijo. Vence quem tiver mais princesas capturadas. Resumindo são 2 pegadores e o restante se esconde. -- 11 of 37 --"
        ]
      },
      {
        "id": "pdf-46",
        "title": "O monstro faminto",
        "description": "Desenha-se no chão um monstro com a oca aberta, os participantes deverão ficar no corpo do monstro, ao sinal do monitor os participantes deverão se empurrar para que alguém pare na boca do monstro, quem entrar na boca do monstro deverá tentar puxar os outros amigos até que todos caiam nela.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "1 giz"
        ],
        "steps": [
          "Desenha-se no chão um monstro com a oca aberta, os participantes deverão ficar no corpo do monstro, ao sinal do monitor os participantes deverão se empurrar para que alguém pare na boca do monstro, quem entrar na boca do monstro deverá tentar puxar os outros amigos até que todos caiam nela."
        ]
      },
      {
        "id": "pdf-48",
        "title": "As cores",
        "description": "Um será o Pegador, que dirá em voz alta alguma cor, o restante devera correr e encostar na cor dita, quem conseguir estará salvo, se o pegador pegar alguém, o mesmo vira o pegador.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "Um será o Pegador, que dirá em voz alta alguma cor, o restante devera correr e encostar na cor dita, quem conseguir estará salvo, se o pegador pegar alguém, o mesmo vira o pegador."
        ]
      },
      {
        "id": "pdf-49",
        "title": "Bruxa",
        "description": "Um dos participantes é escolhido para ser a bruxa. Este só inicia a perseguição após haver contado até vinte ou trinta (conforme o estipulado antes da brincadeira). Quando a Bruxa tocar com a mão em alguém, deverá dizer: Bruxa. Este será seu substituto. O grupo pode combinar um local par ser o ferrolho. Variante: Quando os que estão sendo perseguidos se cansam ou se machucam, gritam: Isola (ou Tempo ou Ara). Querendo, eles podem retornar à brincadeira. O pedido de isola não pode ser feito quando o jogador estiver sendo apanhado pela Bruxa.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "Um dos participantes é escolhido para ser a bruxa. Este só inicia a perseguição após haver contado até vinte ou trinta (conforme o estipulado antes da brincadeira). Quando a Bruxa tocar com a mão em alguém, deverá dizer: Bruxa. Este será seu substituto. O grupo pode combinar um local par ser o ferrolho. Variante: Quando os que estão sendo perseguidos se cansam ou se machucam, gritam: Isola (ou Tempo ou Ara). Querendo, eles podem retornar à brincadeira. O pedido de isola não pode ser feito quando o jogador estiver sendo apanhado pela Bruxa."
        ]
      },
      {
        "id": "pdf-50",
        "title": "Em busca do tesouro",
        "description": "Cortar a cartolina em vários pedaços e em cores diferentes, estipular pontos para cada cor e esconder em um ambiente. Depois falar para as crianças procurarem em certo tempo, ganha quem fizer mais pontos. Espelho (a partir dos 3 anos) -- 12 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Cartolina colorida",
          "quadro negro",
          "giz"
        ],
        "steps": [
          "Cortar a cartolina em vários pedaços e em cores diferentes, estipular pontos para cada cor e esconder em um ambiente. Depois falar para as crianças procurarem em certo tempo, ganha quem fizer mais pontos. Espelho (a partir dos 3 anos) -- 12 of 37 --"
        ]
      },
      {
        "id": "pdf-51",
        "title": "Combinação de poção",
        "description": "Espalhar os bambolês e cones pelo chão, trazer o lúdico em dizer que os bambolês são as \"casas/tocas\" dos magos e os cones as poções. A brincadeira consiste em os magos saírem de suas casas e resgatarem as poções sem ser pego pelo monstro (dento da casa não é pego), caso seja pego deverá devolver todas as poções que tiver para serem resgatadas novamente. Após resgatar todas as poções deve fazer a combinação entre elas, promovendo a cooperação entre todos, as poções precisam estar todas juntas com apenas um mago e serem da mesma cor, se caso forem pegas com todas as poções o monstro ganha.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "bambolês",
          "cones coloridos"
        ],
        "steps": [
          "Espalhar os bambolês e cones pelo chão, trazer o lúdico em dizer que os bambolês são as \"casas/tocas\" dos magos e os cones as poções. A brincadeira consiste em os magos saírem de suas casas e resgatarem as poções sem ser pego pelo monstro (dento da casa não é pego), caso seja pego deverá devolver todas as poções que tiver para serem resgatadas novamente. Após resgatar todas as poções deve fazer a combinação entre elas, promovendo a cooperação entre todos, as poções precisam estar todas juntas com apenas um mago e serem da mesma cor, se caso forem pegas com todas as poções o monstro ganha."
        ]
      },
      {
        "id": "pdf-53",
        "title": "Chefe Comanda",
        "description": "As crianças colocam-se em fileira; em posição oposta, fica o chefe ou mestre. Inicia-se o diálogo entre o chefe e as crianças: Chefe: Boca de forno. Crianças: Forno. Chefe: Tirar um bolo. Crianças: Bolo. Chefe: Fareis tudo o que o mestre mandar? Crianças: Faremos todos. Seguem-se as ordens do mestre. Geralmente, elas consistem em coisas simples como: andar x passos, bater palmas, dar pulos, etc. A escolha do mestre ou chefe é feita através de sorteio. -- 13 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [],
        "steps": [
          "As crianças colocam-se em fileira; em posição oposta, fica o chefe ou mestre. Inicia-se o diálogo entre o chefe e as crianças: Chefe: Boca de forno. Crianças: Forno. Chefe: Tirar um bolo. Crianças: Bolo. Chefe: Fareis tudo o que o mestre mandar? Crianças: Faremos todos. Seguem-se as ordens do mestre. Geralmente, elas consistem em coisas simples como: andar x passos, bater palmas, dar pulos, etc. A escolha do mestre ou chefe é feita através de sorteio. -- 13 of 37 --"
        ]
      },
      {
        "id": "pdf-54",
        "title": "Balão Fujão",
        "description": "Definir um lugar de largada e outro de chegada. Cada criança terá uma bexiga e um pedaço de papelão. As crianças colocarão o balão no chão e irão abaná-lo até a linha de chegada.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "uma bexiga",
          "um papelão"
        ],
        "steps": [
          "Definir um lugar de largada e outro de chegada. Cada criança terá uma bexiga e um pedaço de papelão. As crianças colocarão o balão no chão e irão abaná-lo até a linha de chegada."
        ]
      },
      {
        "id": "pdf-56",
        "title": "Caixa de sensações",
        "description": "A caixa deverá ter um furo no meio para que as crianças coloquem a mão. Dentro da caixa deverá ter algum objeto. A criança deverá estar vendada, colocara a mão na caixa e tentará descobrir qual é o objeto.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Caixa de sapato ou qualquer outra",
          "objetos variados."
        ],
        "steps": [
          "A caixa deverá ter um furo no meio para que as crianças coloquem a mão. Dentro da caixa deverá ter algum objeto. A criança deverá estar vendada, colocara a mão na caixa e tentará descobrir qual é o objeto."
        ]
      },
      {
        "id": "pdf-76",
        "title": "Quem tem medo do mico preto?",
        "description": "O mico preto fica no meio da quadra, e os outros alunos ficam na linha de fundo da quadra. O mico preto chama duas vezes os caçadores: \"Quem tem medo do mico preto\" Caçadores respondem: Eu que não... E neste momento o mico preto tem de pegar os caçadores de mico preto. Quem for pego vira mico e ajuda na captura dos caçadores.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O mico preto fica no meio da quadra, e os outros alunos ficam na linha de fundo da quadra. O mico preto chama duas vezes os caçadores: \"Quem tem medo do mico preto\" Caçadores respondem: Eu que não... E neste momento o mico preto tem de pegar os caçadores de mico preto. Quem for pego vira mico e ajuda na captura dos caçadores."
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
        "id": "pdf-78",
        "title": "Jogo dos Comandos",
        "description": "Vários bambolês devem ser colocados em círculo com um participante dentro de cada um. Os integrantes devem obedecer aos comandos (para frente, para trás, para a esquerda e para a direita). Vence quem conseguir ficar no círculo por último. -- 19 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Bambolês ou Giz."
        ],
        "steps": [
          "Vários bambolês devem ser colocados em círculo com um participante dentro de cada um. Os integrantes devem obedecer aos comandos (para frente, para trás, para a esquerda e para a direita). Vence quem conseguir ficar no círculo por último. -- 19 of 37 --"
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
        "id": "pdf-32",
        "title": "Telefone sem fio",
        "description": "As crianças sentam-se em roda, o monitor falará no ouvido de uma criança, a mesma deverá passar a frase escutada para o colega do lado e assim por diante, até chegar no primeiro participante, o objetivo é que a frase chegue igual até o primeiro, mas pode acontecer da frase ser escutada diferente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "As crianças sentam-se em roda, o monitor falará no ouvido de uma criança, a mesma deverá passar a frase escutada para o colega do lado e assim por diante, até chegar no primeiro participante, o objetivo é que a frase chegue igual até o primeiro, mas pode acontecer da frase ser escutada diferente."
        ]
      },
      {
        "id": "pdf-67",
        "title": "Jóquei pó coletivo",
        "description": "Forma-se duas equipes, coloca-se uma equipe de frente para a outra, ao primeiro sinal do monitor, as equipes se reúnem e decidem se vão jogar pedra, papel ou tesoura, ao segundo sinal do monitor as equipes viram-se uma de frente para a outra e jogam o que escolheram. A cada rodada marcasse um ponto para a equipe que ganha a partida. Ganha a equipe que fizer 10 pontos primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Forma-se duas equipes, coloca-se uma equipe de frente para a outra, ao primeiro sinal do monitor, as equipes se reúnem e decidem se vão jogar pedra, papel ou tesoura, ao segundo sinal do monitor as equipes viram-se uma de frente para a outra e jogam o que escolheram. A cada rodada marcasse um ponto para a equipe que ganha a partida. Ganha a equipe que fizer 10 pontos primeiro."
        ]
      },
      {
        "id": "pdf-71",
        "title": "Sardinha",
        "description": "Uma pessoa se esconde, e todas as outras a procuram. Sempre que alguém achar a criança que está escondida, deverá se esconder junto dela. A brincadeira acaba quando todos encontram o escondido. Quem encontrou primeiro pode se esconder na próxima rodada.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Uma pessoa se esconde, e todas as outras a procuram. Sempre que alguém achar a criança que está escondida, deverá se esconder junto dela. A brincadeira acaba quando todos encontram o escondido. Quem encontrou primeiro pode se esconder na próxima rodada."
        ]
      },
      {
        "id": "pdf-102",
        "title": "Nó Maluco",
        "description": "Faz-se a roda e todos estendem os braços para frente e ao sinal do monitor, a roda se fecha e cada pessoa deve segurar duas outras mãos (seja de quem for). Cada mão segura (uma) outra, ou seja, uma mão não pode estar segurando outras duas por exemplo. O Objetivo é desatar o nó que se forma, sem soltar em momento algum as mãos. -- 26 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Faz-se a roda e todos estendem os braços para frente e ao sinal do monitor, a roda se fecha e cada pessoa deve segurar duas outras mãos (seja de quem for). Cada mão segura (uma) outra, ou seja, uma mão não pode estar segurando outras duas por exemplo. O Objetivo é desatar o nó que se forma, sem soltar em momento algum as mãos. -- 26 of 37 --"
        ]
      },
      {
        "id": "pdf-121",
        "title": "Cidade dorme",
        "description": "O monitor escreverá nos papeis \"assassino, psicopata, anjo, detetive e vítima\" (dependendo de quantas pessoas tiver mais de uma vítima). Sentados em círculo, o monitor distribuirá os papeis dobrados sem que os participantes vejam, cada um tirará o seu e verá qual personagem é e devolverá o papel para o professor. O monitor falará \"cidade dorme\" e todos fecharam o olho. Em seguida o monitor chamara o personagem assassino, que abrirá o olho, e o restante continuará de olho fechado, e perguntará \"quem você quer matar\" e o participante apontara para quem, ou fará um movimento sem que os outros percebam. Após o assassino chamara o psicopata e fará a mesma pergunta, após o assassino, chamará o anjo e perguntará \"quem você quer proteger\" e o anjo mostrará quem sem fazer barulho ou movimentos bruscos. Após o anjo, chamará o detetive e perguntará quem ele acha que são o assassino e o psicopata. Após todos serem chamados o monitor falará \"cidade pode acordar\" e falará as pessoas que \"morreram\", ou seja, estão fora do jogo. Em seguida será feito uma votação entre todos para eliminar mais um participante. O jogo acabará quando a maioria do lado do bem morrer (anjo, detetive e vítima) ou o lado do mal (assassino e psicopata) Obs.: O psicopata não morre quando a cidade estiver dormindo, só na votação, e só pode falar o seu personagem ao fim do jogo. E quem morrer com a cidade dormindo, poderá votar ao final da rodada em que morreu. -- 31 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "10+ anos",
        "materials": [
          "papel",
          "caneta"
        ],
        "steps": [
          "O monitor escreverá nos papeis \"assassino, psicopata, anjo, detetive e vítima\" (dependendo de quantas pessoas tiver mais de uma vítima). Sentados em círculo, o monitor distribuirá os papeis dobrados sem que os participantes vejam, cada um tirará o seu e verá qual personagem é e devolverá o papel para o professor. O monitor falará \"cidade dorme\" e todos fecharam o olho. Em seguida o monitor chamara o personagem assassino, que abrirá o olho, e o restante continuará de olho fechado, e perguntará \"quem você quer matar\" e o participante apontara para quem, ou fará um movimento sem que os outros percebam. Após o assassino chamara o psicopata e fará a mesma pergunta, após o assassino, chamará o anjo e perguntará \"quem você quer proteger\" e o anjo mostrará quem sem fazer barulho ou movimentos bruscos. Após o anjo, chamará o detetive e perguntará quem ele acha que são o assassino e o psicopata. Após todos serem chamados o monitor falará \"cidade pode acordar\" e falará as pessoas que \"morreram\", ou seja, estão fora do jogo. Em seguida será feito uma votação entre todos para eliminar mais um participante. O jogo acabará quando a maioria do lado do bem morrer (anjo, detetive e vítima) ou o lado do mal (assassino e psicopata) Obs.: O psicopata não morre quando a cidade estiver dormindo, só na votação, e só pode falar o seu personagem ao fim do jogo. E quem morrer com a cidade dormindo, poderá votar ao final da rodada em que morreu. -- 31 of 37 --"
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
        "id": "pdf-31",
        "title": "Arranca Rabo",
        "description": "O grupo é dividido em dois, os integrantes de um dos times penduram um pedaço de fita na parte de trás da calça ou bermuda, eles serão fugitivos. Ao sinal do mestre, os fugitivos correm tentando impedir que as crianças do time adversário peguem suas fitas, quando todos os rabos forem arrancados, as equipes trocam os papéis, quem era pegador vira fugitivo. -- 8 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "O grupo é dividido em dois, os integrantes de um dos times penduram um pedaço de fita na parte de trás da calça ou bermuda, eles serão fugitivos. Ao sinal do mestre, os fugitivos correm tentando impedir que as crianças do time adversário peguem suas fitas, quando todos os rabos forem arrancados, as equipes trocam os papéis, quem era pegador vira fugitivo. -- 8 of 37 --"
        ]
      },
      {
        "id": "pdf-36",
        "title": "Caça Palitos",
        "description": "Cada criança receberá três palitos, ao sinal do monitor as crianças começam um pega-pega entre elas, todas são o pegador, quem for pego deverá disputar pedra papel ou tesoura, quem ganhar pega um palito de quem perdeu e assim por diante. Ganha quem ficar com mais palito no final. -- 9 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "Palitos"
        ],
        "steps": [
          "Cada criança receberá três palitos, ao sinal do monitor as crianças começam um pega-pega entre elas, todas são o pegador, quem for pego deverá disputar pedra papel ou tesoura, quem ganhar pega um palito de quem perdeu e assim por diante. Ganha quem ficar com mais palito no final. -- 9 of 37 --"
        ]
      },
      {
        "id": "pdf-58",
        "title": "Letra Pegadora",
        "description": "Os participantes estarão espalhados pela quadra caminhado, quando o monitor falar uma letra, os participantes que tiver o nome que comece com a letra falada serão o pegador, quem for pego deverá ficar abaixado, podendo ser salvo se algum colega o encostar. O monitor sempre falará letras diferentes para que troque o pegador. -- 14 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Os participantes estarão espalhados pela quadra caminhado, quando o monitor falar uma letra, os participantes que tiver o nome que comece com a letra falada serão o pegador, quem for pego deverá ficar abaixado, podendo ser salvo se algum colega o encostar. O monitor sempre falará letras diferentes para que troque o pegador. -- 14 of 37 --"
        ]
      },
      {
        "id": "pdf-61",
        "title": "Killer",
        "description": "escrever num papel a inicial K (de killer), em outro D (de detetive) e os outros com o V (de vítima) – some todos os participantes e subtraia dois para saber quantas vítimas o jogo terá. Misture e deixe cada criança pegar um papel sem saber o que é. O \"killer\" precisa \"matar\" o maior número de vítimas e, para isso, ele deve piscar discretamente para as pessoas. Quando as vítimas forem atingidas, elas devem dizer \"morri\" e abaixar a cabeça. Caso o detetive perceba as piscadas, ele deve dizer ao killer: \"Preso em nome da lei\".",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Papel",
          "caneta. (Ter no máximo 5 crianças)"
        ],
        "steps": [
          "escrever num papel a inicial K (de killer), em outro D (de detetive) e os outros com o V (de vítima) – some todos os participantes e subtraia dois para saber quantas vítimas o jogo terá. Misture e deixe cada criança pegar um papel sem saber o que é. O \"killer\" precisa \"matar\" o maior número de vítimas e, para isso, ele deve piscar discretamente para as pessoas. Quando as vítimas forem atingidas, elas devem dizer \"morri\" e abaixar a cabeça. Caso o detetive perceba as piscadas, ele deve dizer ao killer: \"Preso em nome da lei\"."
        ]
      },
      {
        "id": "pdf-63",
        "title": "PACMAN humano",
        "description": "Pega-pega na quadra, porém só é permitido andar por cima das linhas da quadra. O \"pacman\" (pegador) também deverá andar apenas pelas linhas. Quem for pego, deverá sentar no local exato onde foi pego e servirá de obstáculo para quem está fugindo, mas N├âO para o \"pacman\", ou seja, o pegador pode pular as pessoas que foram pegas por ele e estão sentadas no chão, mas os fugitivos não podem pular esses obstáculos. Quem for o último a ser pego será o vencedor.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Pega-pega na quadra, porém só é permitido andar por cima das linhas da quadra. O \"pacman\" (pegador) também deverá andar apenas pelas linhas. Quem for pego, deverá sentar no local exato onde foi pego e servirá de obstáculo para quem está fugindo, mas N├âO para o \"pacman\", ou seja, o pegador pode pular as pessoas que foram pegas por ele e estão sentadas no chão, mas os fugitivos não podem pular esses obstáculos. Quem for o último a ser pego será o vencedor."
        ]
      },
      {
        "id": "pdf-64",
        "title": "Gato e Rato",
        "description": "Todos estarão espalhados pelo espaço sentados com as pernas estendidas. O pegador será o \"Gato\" e o fugitivo é o \"Rato\". Ao sinal do monitor começa a brincadeira, o \"Rato\" deve fugir e o \"Gato\" deve pegá-lo. Quando o Rato estiver fugindo e encostar na cabeça de alguém que estiver sentado, essa pessoa vai levantar e virar o \"Gato\" ou seja o pegador.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Todos estarão espalhados pelo espaço sentados com as pernas estendidas. O pegador será o \"Gato\" e o fugitivo é o \"Rato\". Ao sinal do monitor começa a brincadeira, o \"Rato\" deve fugir e o \"Gato\" deve pegá-lo. Quando o Rato estiver fugindo e encostar na cabeça de alguém que estiver sentado, essa pessoa vai levantar e virar o \"Gato\" ou seja o pegador."
        ]
      },
      {
        "id": "pdf-73",
        "title": "Pegador com Aro",
        "description": "As crianças deverão se movimentar livremente pelo local e ao sinal do professor, um aluno determinado deverá começar a correr, estando de posse de um bambolê. Assim que conseguir se aproximar de um colega, deverá \"pegá-lo\" para isso deverá lançar o bambolê, a seguir, este deverá pegar outro bambolê, e juntos, deverão sair em buscar de outro colega, que deverá ser \"pego\" da mesma forma, a cada aluno \"pego\", a coluna de pegadores deverá ir aumentando, e deverão correr tendo em cada extremidade, um aluno de posse de um bambolê, com o qual deverá tentar \"pegar\" um outro colega.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Bambolês"
        ],
        "steps": [
          "As crianças deverão se movimentar livremente pelo local e ao sinal do professor, um aluno determinado deverá começar a correr, estando de posse de um bambolê. Assim que conseguir se aproximar de um colega, deverá \"pegá-lo\" para isso deverá lançar o bambolê, a seguir, este deverá pegar outro bambolê, e juntos, deverão sair em buscar de outro colega, que deverá ser \"pego\" da mesma forma, a cada aluno \"pego\", a coluna de pegadores deverá ir aumentando, e deverão correr tendo em cada extremidade, um aluno de posse de um bambolê, com o qual deverá tentar \"pegar\" um outro colega."
        ]
      },
      {
        "id": "pdf-81",
        "title": "Quanto mais melhor",
        "description": "Cada crianças terá seu bambolê a e mesma quantidade de cones que as outras, posicionadas em seu bambolê, elas terão um tempo determinado para pegar os cones dos outros bambolês e colocar nos próprios, quem tiver mais cones no seu bambolê ganha. Obs: os bambolês devem estar espalhados, e não podem ser defendidos. Variação: pode ser totalmente ao contrário, \"quanto menos melhor\" então quem tiver menos ganha (colocando nos bambolês dos outros) Lúdico: Pode falar que os bambolês são a casa deles e os cones são comidas (quanto mais melhor) ou que são bombas (quanto menos melhor) -- 20 of 37 -- ATIVIDADES (DE 7 A 10 ANOS)",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "Bambolês (ou círculo de giz)",
          "cone (ou bolinha de papel)"
        ],
        "steps": [
          "Cada crianças terá seu bambolê a e mesma quantidade de cones que as outras, posicionadas em seu bambolê, elas terão um tempo determinado para pegar os cones dos outros bambolês e colocar nos próprios, quem tiver mais cones no seu bambolê ganha. Obs: os bambolês devem estar espalhados, e não podem ser defendidos. Variação: pode ser totalmente ao contrário, \"quanto menos melhor\" então quem tiver menos ganha (colocando nos bambolês dos outros) Lúdico: Pode falar que os bambolês são a casa deles e os cones são comidas (quanto mais melhor) ou que são bombas (quanto menos melhor) -- 20 of 37 -- ATIVIDADES (DE 7 A 10 ANOS)"
        ]
      },
      {
        "id": "pdf-82",
        "title": "Caça Palitos de time",
        "description": "As crianças são divididas em dois grupos, cada participante recebe 3 palitos e a batalha será na pedra, papel ou tesoura. Os jogadores só poderão participar se tiver dois ou mais palitos, caso tenha um só a pessoa se senta e torce para que alguém do seu time te dê um palito para que você possa voltar a batalhar. Ganha o time q conseguir conquistar a maioria dos palitos e deixar o time adversário todo no chão.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Palitos"
        ],
        "steps": [
          "As crianças são divididas em dois grupos, cada participante recebe 3 palitos e a batalha será na pedra, papel ou tesoura. Os jogadores só poderão participar se tiver dois ou mais palitos, caso tenha um só a pessoa se senta e torce para que alguém do seu time te dê um palito para que você possa voltar a batalhar. Ganha o time q conseguir conquistar a maioria dos palitos e deixar o time adversário todo no chão."
        ]
      },
      {
        "id": "pdf-83",
        "title": "Três cones em um dos cantos",
        "description": "Nesta atividade é disponibilizado ao centro da quadra um círculo (bambolê) onde dentro estão 8 (oito) cones, com quatro participantes ao seu redor, a uma distância aproximada de 10 metros do centro e no canto em diagonal da quadra, se encontra outro círculo os quais cada um pertence a um participante. O objetivo é levar três cones para o seu bambolê, aquele que primeiro o fizer será o primeiro a concluir a atividade. Você pode pegar os cones dos demais participantes, mas em hipótese alguma pode atrapalhar se outro participante vem pegar seu cone.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Bambolês",
          "cones."
        ],
        "steps": [
          "Nesta atividade é disponibilizado ao centro da quadra um círculo (bambolê) onde dentro estão 8 (oito) cones, com quatro participantes ao seu redor, a uma distância aproximada de 10 metros do centro e no canto em diagonal da quadra, se encontra outro círculo os quais cada um pertence a um participante. O objetivo é levar três cones para o seu bambolê, aquele que primeiro o fizer será o primeiro a concluir a atividade. Você pode pegar os cones dos demais participantes, mas em hipótese alguma pode atrapalhar se outro participante vem pegar seu cone."
        ]
      },
      {
        "id": "pdf-84",
        "title": "Pega-Pega Alerta",
        "description": "├ë definido um jogador e este deverá escolher um tema (ex.:comida), os outros jogadores deverão se reunir e escolher algo relacionado a este tema (ex: macarrão, hambúrguer, batata frita etc.). Após todos escolherem as opções são passadas para o jogador que decidiu tema aos outros, sem saber quem escolheu o que ele grita bem alto uma das opções. O que tiver sua opção escolhida se tornará o pegador, mas diferente do pega-pega comum, ele deverá puxar o tnt pendurado na roupa do amigo, aquele que tiver seu tnt puxado se tornará pegador também, e assim por diante, até sobrar apenas um jogar com tnt, este deverá escolher o próximo tema e a brincadeira reiniciará -- 21 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "TNT ou Barbante (puxa rabo)"
        ],
        "steps": [
          "├ë definido um jogador e este deverá escolher um tema (ex.:comida), os outros jogadores deverão se reunir e escolher algo relacionado a este tema (ex: macarrão, hambúrguer, batata frita etc.). Após todos escolherem as opções são passadas para o jogador que decidiu tema aos outros, sem saber quem escolheu o que ele grita bem alto uma das opções. O que tiver sua opção escolhida se tornará o pegador, mas diferente do pega-pega comum, ele deverá puxar o tnt pendurado na roupa do amigo, aquele que tiver seu tnt puxado se tornará pegador também, e assim por diante, até sobrar apenas um jogar com tnt, este deverá escolher o próximo tema e a brincadeira reiniciará -- 21 of 37 --"
        ]
      },
      {
        "id": "pdf-86",
        "title": "Pega-Pega Ney",
        "description": "Um pegador. Quem for pego tem que se jogar no chão (Neymar só cai). Para salvar, duas pessoas devem encostar em você ou te levar para o banco (caso não tenha um banco, delimitar um lugar) pelos braços e pernas, em seguida deve voltar ao jogo. Enquanto estiver salvando alguém não pode ser pego.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Um pegador. Quem for pego tem que se jogar no chão (Neymar só cai). Para salvar, duas pessoas devem encostar em você ou te levar para o banco (caso não tenha um banco, delimitar um lugar) pelos braços e pernas, em seguida deve voltar ao jogo. Enquanto estiver salvando alguém não pode ser pego."
        ]
      },
      {
        "id": "pdf-89",
        "title": "Pega-pega pregador",
        "description": "Cada criança vai ter entre 5 a 10 pregadores para a brincadeira ser demorada, os pregadores são as vidas, as crianças vão prender os pregadores em qualquer região da roupa onde seja visível. Elas vão se espalhar, ao sinal do monitor vai começar uma pega – pega, a criança que pegar a outra vai jogar pedra papel e tesoura, Melhor de 3. Quem ganhar pega um pregador de quem perdeu, os dois continuam a brincadeira. Ganha aquele tiver mais pregadores no final ou conseguir pegar todos os pregadores, se a pessoa perder todos os seus pregadores ela fica sentada, e quem tem muitos tem a opção de doar quantos pregadores quiser para o amiguinho voltar a brincadeira.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Pregadores"
        ],
        "steps": [
          "Cada criança vai ter entre 5 a 10 pregadores para a brincadeira ser demorada, os pregadores são as vidas, as crianças vão prender os pregadores em qualquer região da roupa onde seja visível. Elas vão se espalhar, ao sinal do monitor vai começar uma pega – pega, a criança que pegar a outra vai jogar pedra papel e tesoura, Melhor de 3. Quem ganhar pega um pregador de quem perdeu, os dois continuam a brincadeira. Ganha aquele tiver mais pregadores no final ou conseguir pegar todos os pregadores, se a pessoa perder todos os seus pregadores ela fica sentada, e quem tem muitos tem a opção de doar quantos pregadores quiser para o amiguinho voltar a brincadeira."
        ]
      },
      {
        "id": "pdf-93",
        "title": "Pique trave",
        "description": "Uma pessoa será o pegador, quem ele pegar virará o pegador. A trave é o pique, mas com um detalhe, a criança que tirar a mão dela, só poderá segurar na trave que está do outro lado da quadra. Ou seja, ele vai ter que correr até o outro lado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Uma pessoa será o pegador, quem ele pegar virará o pegador. A trave é o pique, mas com um detalhe, a criança que tirar a mão dela, só poderá segurar na trave que está do outro lado da quadra. Ou seja, ele vai ter que correr até o outro lado."
        ]
      },
      {
        "id": "pdf-95",
        "title": "Arrastão ou pega-pega corrente",
        "description": "Uma pessoa será escolhida para ser o pegador, enquanto os outros serão os fugitivos. Quem o pegador pegar, virará pegador junto a ele, terão que ficar de mãos dadas, e assim sucessivamente até restar apenas um fugitivo.",
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
        "description": "Traça-se no chão duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crianças são formados. Cada um dos grupos é disposto em fileira, um de frente para o outro, atrás de uma linha. Num ponto equidistante das linhas (aproximadamente a 7,5 m de cada uma), risca-se um círculo onde deverá ser colocado um chinelinho ou outro objeto semelhante. As crianças dos dois grupos são numeradas de 1 até o número total de crianças que existir em cada grupo. Quando um dos grupos tiver uma criança a mais, um componente do grupo contrário pode receber dois números. Uma criança ou um adulto deve comandar o jogo, gritando um número que corresponda a uma criança de cada um dos grupos. As duas devem correr, pegar o chinelinho e retornar ao seu grupo, cruzando sua linha sem ser tocada. Cada vez que isso ocorrer, seu grupo conquista um ponto. Se ao fugir com o ocorrer, seu grupo conquista um ponto. Se ao fugir com o chinelo o jogador for tocado pelo adversário, ninguém marca ponto. Após cada disputa dos dois jogadores, o chinelo volta para o círculo. Vencerá quem atingir primeiro o total de pontos estipulados pelos grupos, em comum acordo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Um chinelo",
          "uma bola",
          "ou qualquer coisa que substitua"
        ],
        "steps": [
          "Traça-se no chão duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crianças são formados. Cada um dos grupos é disposto em fileira, um de frente para o outro, atrás de uma linha. Num ponto equidistante das linhas (aproximadamente a 7,5 m de cada uma), risca-se um círculo onde deverá ser colocado um chinelinho ou outro objeto semelhante. As crianças dos dois grupos são numeradas de 1 até o número total de crianças que existir em cada grupo. Quando um dos grupos tiver uma criança a mais, um componente do grupo contrário pode receber dois números. Uma criança ou um adulto deve comandar o jogo, gritando um número que corresponda a uma criança de cada um dos grupos. As duas devem correr, pegar o chinelinho e retornar ao seu grupo, cruzando sua linha sem ser tocada. Cada vez que isso ocorrer, seu grupo conquista um ponto. Se ao fugir com o ocorrer, seu grupo conquista um ponto. Se ao fugir com o chinelo o jogador for tocado pelo adversário, ninguém marca ponto. Após cada disputa dos dois jogadores, o chinelo volta para o círculo. Vencerá quem atingir primeiro o total de pontos estipulados pelos grupos, em comum acordo."
        ]
      },
      {
        "id": "pdf-107",
        "title": "Polícia e ladrão",
        "description": "Separam-se dois grupos de crianças, um será polícia e outro ladrão. Os policiais iniciam contado até 20, enquanto os ladrões se escondem, ao término da contagem a polícia passa a procurar os ladrões e os encontrando passa a prossegui-los. O ladrão deve ser pego pela polícia e quem for preso vai para um local denominado como prisão. Quem não for pego pode soltar os ladrões (tocando-os) que voltam a fugir da polícia. O jogo terminará com a captura de todos os ladrões. -- 27 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Separam-se dois grupos de crianças, um será polícia e outro ladrão. Os policiais iniciam contado até 20, enquanto os ladrões se escondem, ao término da contagem a polícia passa a procurar os ladrões e os encontrando passa a prossegui-los. O ladrão deve ser pego pela polícia e quem for preso vai para um local denominado como prisão. Quem não for pego pode soltar os ladrões (tocando-os) que voltam a fugir da polícia. O jogo terminará com a captura de todos os ladrões. -- 27 of 37 --"
        ]
      },
      {
        "id": "pdf-110",
        "title": "Rua e Avenida",
        "description": "Os participantes serão divididos em várias fileiras uma atrás da outra. Duas pessoas serão escolhidas, uma para ser o pegador e o outro o fugitivo. ├ë como se fosse um labirinto, os participantes deverão estar de mãos dadas, quando o professor falar \"rua\" eles deverão soltar as mãos e virar para a direita, dando as mãos aos outros colegas, e quando o professor falar \"avenida\" deverão voltar a posição inicial.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Os participantes serão divididos em várias fileiras uma atrás da outra. Duas pessoas serão escolhidas, uma para ser o pegador e o outro o fugitivo. ├ë como se fosse um labirinto, os participantes deverão estar de mãos dadas, quando o professor falar \"rua\" eles deverão soltar as mãos e virar para a direita, dando as mãos aos outros colegas, e quando o professor falar \"avenida\" deverão voltar a posição inicial."
        ]
      },
      {
        "id": "pdf-112",
        "title": "Mãe da Rua",
        "description": "Será escolhida uma criança para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos os alunos saíram correndo para o outro lado da quadra, tentando escapar da \"mãe da rua\" que esta ao centro. Quem for pego irá ajudar a \"mãe da rua\" a pegar o restante. A \"mãe da rua\" não poderá sair do meio da quadra, nem os participantes que forem pegos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Será escolhida uma criança para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos os alunos saíram correndo para o outro lado da quadra, tentando escapar da \"mãe da rua\" que esta ao centro. Quem for pego irá ajudar a \"mãe da rua\" a pegar o restante. A \"mãe da rua\" não poderá sair do meio da quadra, nem os participantes que forem pegos."
        ]
      },
      {
        "id": "pdf-113",
        "title": "Rouba Bandeira",
        "description": "As crianças serão divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, será colocado a \"bandeira\". O objetivo de cada time é tentar pegar a bandeira do seu rival, sem ser pego e ao mesmo tempo não deixar pegar a sua bandeira. Vence quem conseguir pegar a bandeira do inimigo e voltar para o seu campo sem ser pego.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "dois objetos (usados como a bandeira)"
        ],
        "steps": [
          "As crianças serão divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, será colocado a \"bandeira\". O objetivo de cada time é tentar pegar a bandeira do seu rival, sem ser pego e ao mesmo tempo não deixar pegar a sua bandeira. Vence quem conseguir pegar a bandeira do inimigo e voltar para o seu campo sem ser pego."
        ]
      },
      {
        "id": "pdf-114",
        "title": "Pegador trocado",
        "description": "Os participantes deverão formar duplas e se sentar afastados das outras duplas, espalhados pelo espaço. Ao sinal do monitor os dois alunos que serão um \"fugitivo\" e o outro \"pegador\" deverão iniciar a brincadeira, que deverá assim funcionar: quando o fugitivo quiser ficar a salvo do \"pegador\" deverá sentar ao lado de uma das duplas que estão sentadas no chão, assim que ele sentar no lado de um colega da dupla o outro aluno, deverá levantar-se rapidamente e passará a ser o novo \"pegador\" ou seja, sempre que algum aluno que estiver sendo perseguido sentar-se ao lado de uma dupla, o outro colega da dupla deverá levantar e passará a ser o novo \"pegador.",
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
        "description": "O monitor deverá dividir duas equipes com o mesmo número de participantes. Em seguida, deverá marcar uma distância e colocar uma equipe de frente para a outra e sentados no chão, e às costas de cada equipe e a uma distância com uma linha marada a qual os participantes estarão à salvo de ser \"pegos\" pela outra equipe. O monitor deverá determinar, que uma equipe seja \"par\" e a outra será \"ímpar\". O monitor falará um número, se o número for \"par\", a equipe \"par\" deverá se levantar rapidamente e correr para pegar os da equipe \"ímpar\". Se disser um número \"ímpar\" serão os ímpares que deverão se levantar e correr para pegar os da equipe \"par\". E assim sucessivamente. (O monitor poderá fazer contas para confundir os participantes). -- 30 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "O monitor deverá dividir duas equipes com o mesmo número de participantes. Em seguida, deverá marcar uma distância e colocar uma equipe de frente para a outra e sentados no chão, e às costas de cada equipe e a uma distância com uma linha marada a qual os participantes estarão à salvo de ser \"pegos\" pela outra equipe. O monitor deverá determinar, que uma equipe seja \"par\" e a outra será \"ímpar\". O monitor falará um número, se o número for \"par\", a equipe \"par\" deverá se levantar rapidamente e correr para pegar os da equipe \"ímpar\". Se disser um número \"ímpar\" serão os ímpares que deverão se levantar e correr para pegar os da equipe \"par\". E assim sucessivamente. (O monitor poderá fazer contas para confundir os participantes). -- 30 of 37 --"
        ]
      },
      {
        "id": "pdf-126",
        "title": "Nunca 3",
        "description": "Os alunos estarão espalhados em duplas (um atrás do outro) pelo espaço disponível. Os alunos poderão estar sentados. O professor escolhe dois alunos, um será o aluno pegador e o outro aluno terá que fugir do pegador … O aluno que está fugindo do pegador deverá escolher uma dupla e se posicionar atrás do segundo elemento. O aluno que está na frente da dupla, por sua vez, será o novo pegador (nunca poderá existir 3elementos juntos, sempre mantendo uma dupla) e deverá sair correndo atrás do aluno que era o pegador anteriormente... Esse aluno que está fugindo do novo pegador, se posicionará atrás de outra dupla e assim sucessivamente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Os alunos estarão espalhados em duplas (um atrás do outro) pelo espaço disponível. Os alunos poderão estar sentados. O professor escolhe dois alunos, um será o aluno pegador e o outro aluno terá que fugir do pegador … O aluno que está fugindo do pegador deverá escolher uma dupla e se posicionar atrás do segundo elemento. O aluno que está na frente da dupla, por sua vez, será o novo pegador (nunca poderá existir 3elementos juntos, sempre mantendo uma dupla) e deverá sair correndo atrás do aluno que era o pegador anteriormente... Esse aluno que está fugindo do novo pegador, se posicionará atrás de outra dupla e assim sucessivamente."
        ]
      },
      {
        "id": "pdf-131",
        "title": "Escape 60",
        "description": "Primeiramente deve-se elaborar uma temática específica para o desafio. O jogo consiste em desenvolver uma série de dicas e pistas que levem os participantes a resolver enigmas e desafios que nos levem à um caminho. Uma característica da atividade é limitar o espaço à uma sala fechada ou alguma variação semelhante. O objetivo, normalmente, é fugir deste local em um determinado período previamente estipulado.",
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
          "Primeiramente deve-se elaborar uma temática específica para o desafio. O jogo consiste em desenvolver uma série de dicas e pistas que levem os participantes a resolver enigmas e desafios que nos levem à um caminho. Uma característica da atividade é limitar o espaço à uma sala fechada ou alguma variação semelhante. O objetivo, normalmente, é fugir deste local em um determinado período previamente estipulado."
        ]
      },
      {
        "id": "pdf-133",
        "title": "Trunfo",
        "description": "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descrição e atributos de valores variados (FOR├çA, INTELIG├èNCIA, AGILIDADE, DESTREZA, CARISMA...). Pode-se incluir ainda cartas de personagens conhecidos, super-heróis e vilões. Os participantes iniciam o jogo com a carta correspondente à sua própria pessoa. Para \"duelar\" com os outros membros do jogo basta pegá-los, quem pegar primeiro tem o direito de escolher qual atributo quer usar. Quem ganhar obtém como recompensa a carta do adversário. Variações: Uma \"LOJA\" pode ser montada, onde os integrantes podem comprar outras cartas ou trocá-las. Uma espécie de \"moeda\" pode ser criada e escondida pelo local onde a brincadeira está sendo realizada. Com isso, os participantes devem achar esse dinheiro e trocá-lo na loja por itens e cartas. Escudo, cartas que deixam outras cartas mais fortes, cartas de categorias diferentes podem ser incluídas nas variedades da loja. O local onde o jogo está acontecendo pode ir reduzindo até os participantes não conseguirem mais escapar uns dos outros.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel cartão",
          "caneta",
          "impressora."
        ],
        "steps": [
          "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descrição e atributos de valores variados (FOR├çA, INTELIG├èNCIA, AGILIDADE, DESTREZA, CARISMA...). Pode-se incluir ainda cartas de personagens conhecidos, super-heróis e vilões. Os participantes iniciam o jogo com a carta correspondente à sua própria pessoa. Para \"duelar\" com os outros membros do jogo basta pegá-los, quem pegar primeiro tem o direito de escolher qual atributo quer usar. Quem ganhar obtém como recompensa a carta do adversário. Variações: Uma \"LOJA\" pode ser montada, onde os integrantes podem comprar outras cartas ou trocá-las. Uma espécie de \"moeda\" pode ser criada e escondida pelo local onde a brincadeira está sendo realizada. Com isso, os participantes devem achar esse dinheiro e trocá-lo na loja por itens e cartas. Escudo, cartas que deixam outras cartas mais fortes, cartas de categorias diferentes podem ser incluídas nas variedades da loja. O local onde o jogo está acontecendo pode ir reduzindo até os participantes não conseguirem mais escapar uns dos outros."
        ]
      },
      {
        "id": "pdf-136",
        "title": "Protegendo o Rei",
        "description": "Um participante será o rei ou a rainha, o mesmo deve ser protegido pelos \"Protetores do Rei\" e será atacado pelos \"Inimigos da Coroa\". Cada participante começa o jogo com três vidas, esses devem pegar os adversários. Cada vez que um integrante for pego ele perde uma vida, caso perca as três está eliminado do jogo. O objetivo dos inimigos da coroa é derrotar o rei, que tem apenas uma vida, os protetores do rei, por sua vez, devem eliminar todos os inimigos da coroa para alcançarem a vitória. Pode-se montar uma \"torre\" em volta do rei com caixas, cadeiras, bambolês ou qualquer outro material disponível.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Nenhum."
        ],
        "steps": [
          "Um participante será o rei ou a rainha, o mesmo deve ser protegido pelos \"Protetores do Rei\" e será atacado pelos \"Inimigos da Coroa\". Cada participante começa o jogo com três vidas, esses devem pegar os adversários. Cada vez que um integrante for pego ele perde uma vida, caso perca as três está eliminado do jogo. O objetivo dos inimigos da coroa é derrotar o rei, que tem apenas uma vida, os protetores do rei, por sua vez, devem eliminar todos os inimigos da coroa para alcançarem a vitória. Pode-se montar uma \"torre\" em volta do rei com caixas, cadeiras, bambolês ou qualquer outro material disponível."
        ]
      },
      {
        "id": "pdf-138",
        "title": "Passaporte",
        "description": "Os recreadores prepararam alguns cartões (quantidade de crianças que estiverem presentes), com nomes de no mínimo 5 países, cada país recebera uma cor. Cada criança deve receber 5 cartões, um de cada país. O objetivo do jogo é completar o passaporte, com todas as cores, de todos os países. Um dos recreadores será o \"tira visto\" ele ficará com um giz preto tentando \"pegar\" as crianças e riscando as cores que as mesmas já estiverem marcadas. Antes de começar o jogo esse recreador deverá esconder as 5 cores escolhidas. Ganha o jogo a criança que conseguir um quadradinho pintado de cada país, sem ter o risco preto do \"tira visto\" Exemplo: BRASIL (VERDE) ARGENTINA (AZUL) -- 37 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Papel",
          "lápis de cor ou giz de ceira"
        ],
        "steps": [
          "Os recreadores prepararam alguns cartões (quantidade de crianças que estiverem presentes), com nomes de no mínimo 5 países, cada país recebera uma cor. Cada criança deve receber 5 cartões, um de cada país. O objetivo do jogo é completar o passaporte, com todas as cores, de todos os países. Um dos recreadores será o \"tira visto\" ele ficará com um giz preto tentando \"pegar\" as crianças e riscando as cores que as mesmas já estiverem marcadas. Antes de começar o jogo esse recreador deverá esconder as 5 cores escolhidas. Ganha o jogo a criança que conseguir um quadradinho pintado de cada país, sem ter o risco preto do \"tira visto\" Exemplo: BRASIL (VERDE) ARGENTINA (AZUL) -- 37 of 37 --"
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
        "title": "Estrela",
        "description": "Serão formadas equipes que se sentarão em colunas, ao sinal do professor o primeiro aluno de cada coluna sairá correndo em volta das outras equipes até chegar novamente a sua equipe, passara por cima de todos os seus colegas e pegará a bola que estará ao centro. Quem executar a tarefa primeiro marcará um ponto e assim seguirá até chegar a primeira criança novamente. ATIVIDADES (DE 3 A 6 ANOS) -- 2 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "um cone",
          "uma bola"
        ],
        "steps": [
          "Serão formadas equipes que se sentarão em colunas, ao sinal do professor o primeiro aluno de cada coluna sairá correndo em volta das outras equipes até chegar novamente a sua equipe, passara por cima de todos os seus colegas e pegará a bola que estará ao centro. Quem executar a tarefa primeiro marcará um ponto e assim seguirá até chegar a primeira criança novamente. ATIVIDADES (DE 3 A 6 ANOS) -- 2 of 37 --"
        ]
      },
      {
        "id": "pdf-11",
        "title": "Bola ao centro",
        "description": "Serão divididos em duas equipes, uma bola será colocada ao centro, e cada equipe estará em um lugar demarcado. O objetivo de cada equipe, é ultrapassar a bola que está no centro para o campo da equipe adversária, acertando a bola que está no centro com as bolas que as equipes terão. Ganha quem acertar a bola no campo inimigo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "4/6 bolas"
        ],
        "steps": [
          "Serão divididos em duas equipes, uma bola será colocada ao centro, e cada equipe estará em um lugar demarcado. O objetivo de cada equipe, é ultrapassar a bola que está no centro para o campo da equipe adversária, acertando a bola que está no centro com as bolas que as equipes terão. Ganha quem acertar a bola no campo inimigo."
        ]
      },
      {
        "id": "pdf-19",
        "title": "Bola por cima, Bola por baixo",
        "description": "Dividi-los em dois grupos, e deixá-los em coluna, um atrás do outro. Ao sinal do monitor, o primeiro de ada coluna irá passar a bola por cima até chegar ao último participante, esse último deverá correr até a frente e repetir a mesma coisa, e assim sucessivamente até chegar o primeiro de novo. Usar como variação, passar a bola por baixo da perna.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "Dividi-los em dois grupos, e deixá-los em coluna, um atrás do outro. Ao sinal do monitor, o primeiro de ada coluna irá passar a bola por cima até chegar ao último participante, esse último deverá correr até a frente e repetir a mesma coisa, e assim sucessivamente até chegar o primeiro de novo. Usar como variação, passar a bola por baixo da perna."
        ]
      },
      {
        "id": "pdf-41",
        "title": "Corpo ou bola?",
        "description": "As crianças serão dispostas em duas colunas uma de frente para a outra, o monitor irá falando as partes do corpo e a criança irá colocar a mão, quando o monitor falar \"bola\" as crianças tentaram pegar as bolas, que estarão separadas por dupla, uma bola para cada dupla. -- 10 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [],
        "steps": [
          "As crianças serão dispostas em duas colunas uma de frente para a outra, o monitor irá falando as partes do corpo e a criança irá colocar a mão, quando o monitor falar \"bola\" as crianças tentaram pegar as bolas, que estarão separadas por dupla, uma bola para cada dupla. -- 10 of 37 --"
        ]
      },
      {
        "id": "pdf-55",
        "title": "Pega o tesouro",
        "description": "Enquanto o grupo se afasta, o monitor esconde bolinhas de papel por todo o lugar. Ao sinal de início, as crianças voltam no campo onde procuram encontrar as bolas de papel. Vence quem achar mais bolinhas de papel, e o vencedor passa a escondê-las na próxima rodada.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "3+ anos",
        "materials": [
          "Bolinhas de papel ou qualquer coisa que substitua"
        ],
        "steps": [
          "Enquanto o grupo se afasta, o monitor esconde bolinhas de papel por todo o lugar. Ao sinal de início, as crianças voltam no campo onde procuram encontrar as bolas de papel. Vence quem achar mais bolinhas de papel, e o vencedor passa a escondê-las na próxima rodada."
        ]
      },
      {
        "id": "pdf-57",
        "title": "Abraço Salvador",
        "description": "Um aluno deverá ser escolhido como \"pegador\", para que ele pegue os outros participantes, deverá encostar a bola em sua barriga. Para que os \"fugitivos\" se salvem, deverão abraçar o outro colega, assim escondendo a sua barriga. Com o passar da brincadeira o professor deverá ir trocando o pegador.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "uma bola"
        ],
        "steps": [
          "Um aluno deverá ser escolhido como \"pegador\", para que ele pegue os outros participantes, deverá encostar a bola em sua barriga. Para que os \"fugitivos\" se salvem, deverão abraçar o outro colega, assim escondendo a sua barriga. Com o passar da brincadeira o professor deverá ir trocando o pegador."
        ]
      },
      {
        "id": "pdf-59",
        "title": "Bola ao túnel",
        "description": "Divididos em duas equipes, os participantes formarão uma coluna. Deitados no chão de barriga para baixo, o último participante da fila deverá passar por cima de seus amigos, chegando na frente ele deverá rolar a bola por baixo de sua equipe, todos deverão levantar o quadril (como se estivessem fazendo flexão de braços) o último da coluna pegará a bola e fará o mesmo, até chegar o primeiro novamente. Ganha a equipe que realizar a atividade mais rápido.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Duas bolas (a partir de 4 anos)"
        ],
        "steps": [
          "Divididos em duas equipes, os participantes formarão uma coluna. Deitados no chão de barriga para baixo, o último participante da fila deverá passar por cima de seus amigos, chegando na frente ele deverá rolar a bola por baixo de sua equipe, todos deverão levantar o quadril (como se estivessem fazendo flexão de braços) o último da coluna pegará a bola e fará o mesmo, até chegar o primeiro novamente. Ganha a equipe que realizar a atividade mais rápido."
        ]
      },
      {
        "id": "pdf-66",
        "title": "Alerta",
        "description": "O jogador pega a bola e a joga para cima, grita o nome de uma pessoa. A pessoa que teve seu nome citado deve pegar a bola e gritar \"Alerta!\". Imediatamente, todos devem ficar parados. O jogador dá 3 passos e, parado, deverá tentar acertar com a bola na pessoa que tiver mais próxima. Se acertar, a pessoa atingida sai da brincadeira. Se errar, ele é quem sai. -- 16 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "uma bola"
        ],
        "steps": [
          "O jogador pega a bola e a joga para cima, grita o nome de uma pessoa. A pessoa que teve seu nome citado deve pegar a bola e gritar \"Alerta!\". Imediatamente, todos devem ficar parados. O jogador dá 3 passos e, parado, deverá tentar acertar com a bola na pessoa que tiver mais próxima. Se acertar, a pessoa atingida sai da brincadeira. Se errar, ele é quem sai. -- 16 of 37 --"
        ]
      },
      {
        "id": "pdf-69",
        "title": "Arremesso de bambolê",
        "description": "Tipo arremesso de argolas, mas com bambolê. Uma pessoa será a vítima e ficará a 5 metros dos jogadores. Faz 1 ponto quem conseguir encaixar o bambolê na pessoa primeiro. Ganha quem tiver mais pontos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "bambolês"
        ],
        "steps": [
          "Tipo arremesso de argolas, mas com bambolê. Uma pessoa será a vítima e ficará a 5 metros dos jogadores. Faz 1 ponto quem conseguir encaixar o bambolê na pessoa primeiro. Ganha quem tiver mais pontos."
        ]
      },
      {
        "id": "pdf-72",
        "title": "Queimada do Rei",
        "description": "Formam-se dois times com número igual de participantes e uma pessoa de cada time é escolhida para ser o Rei. No jogo pode-se usar mais de uma bola. Sempre que alguém da equipe é queimado, a pessoa tem que se ajoelhar no chão e esperar até conseguir pegar uma bola. Se alguém do próprio time quiser dar a bola para ela jogar, tem que se ajoelhar em seu lugar. Ganha a equipe que queimar o rei adversário primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Uma bola"
        ],
        "steps": [
          "Formam-se dois times com número igual de participantes e uma pessoa de cada time é escolhida para ser o Rei. No jogo pode-se usar mais de uma bola. Sempre que alguém da equipe é queimado, a pessoa tem que se ajoelhar no chão e esperar até conseguir pegar uma bola. Se alguém do próprio time quiser dar a bola para ela jogar, tem que se ajoelhar em seu lugar. Ganha a equipe que queimar o rei adversário primeiro."
        ]
      },
      {
        "id": "pdf-91",
        "title": "A caça e o caçador",
        "description": "O monitor irá determinar o jogador que será a caça (o fugitivo) e os outros serão os caçadores. Os caçadores tentaram queimar a caça, trocando passes tentando acuar o fugitivo, e o mesmo terá que se deslocar fugindo do jogador com a bola.",
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
        "description": "Serão divididas duas equipes, cada integrante de cada equipe receberá um número (as duas equipes deverão estar numeras com números iguais), o monitor chamará um número e jogará uma bola (basquete, futebol ou handebol), as crianças irão disputar entre si e quem acertar a bola na cesta ou no gol marcará um ponto para sua equipe. O monitor pode usar como variação, chamar mais de um número e com o passar do jogo, jogar mais de uma bola para a disputa. -- 23 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Bolas (basquete",
          "futebol ou handebol)"
        ],
        "steps": [
          "Serão divididas duas equipes, cada integrante de cada equipe receberá um número (as duas equipes deverão estar numeras com números iguais), o monitor chamará um número e jogará uma bola (basquete, futebol ou handebol), as crianças irão disputar entre si e quem acertar a bola na cesta ou no gol marcará um ponto para sua equipe. O monitor pode usar como variação, chamar mais de um número e com o passar do jogo, jogar mais de uma bola para a disputa. -- 23 of 37 --"
        ]
      },
      {
        "id": "pdf-97",
        "title": "7 caquinhos",
        "description": "Dois times, cada um no seu campo. Os campos são separados por 7 cacos. Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que derrubar os cacos deve erguê-los novamente, mas se protegendo da outra, que poderá queimar. Quem for queimado não pode ajudar a equipe nos cacos. Se a equipe conseguir recolocar os cacos antes de todos serem queimados, ela ganha. Mas se todos forem queimados e os cacos continuarem no chão, a outra equipe ganha.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "7 pedrinhas",
          "ou pedaços de evea ou qualquer outra coisa que",
          "substitua."
        ],
        "steps": [
          "Dois times, cada um no seu campo. Os campos são separados por 7 cacos. Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que derrubar os cacos deve erguê-los novamente, mas se protegendo da outra, que poderá queimar. Quem for queimado não pode ajudar a equipe nos cacos. Se a equipe conseguir recolocar os cacos antes de todos serem queimados, ela ganha. Mas se todos forem queimados e os cacos continuarem no chão, a outra equipe ganha."
        ]
      },
      {
        "id": "pdf-101",
        "title": "Artilharia",
        "description": "Separa-se dois times. No final de cada campo, é colocada uma garrafa pet. Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do adversário. A equipe que derrubar a garrafa deverá erguê-la novamente, mas se protegendo da outra equipe, que poderá queimar. Quem for queimado não pode erguer a garrafa. Se a equipe conseguir reerguer a garrafa antes de todos serem queimados, ganha. Mas se todos forem queimados e a garrafa continuar no chão, a outra equipe ganha.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Duas garrafas pet",
          "duas bolas"
        ],
        "steps": [
          "Separa-se dois times. No final de cada campo, é colocada uma garrafa pet. Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do adversário. A equipe que derrubar a garrafa deverá erguê-la novamente, mas se protegendo da outra equipe, que poderá queimar. Quem for queimado não pode erguer a garrafa. Se a equipe conseguir reerguer a garrafa antes de todos serem queimados, ganha. Mas se todos forem queimados e a garrafa continuar no chão, a outra equipe ganha."
        ]
      },
      {
        "id": "pdf-103",
        "title": "Voleiçol",
        "description": "Como um jogo de vôlei, as crianças deverão passar a bola para o outro lado da rede, e a outra equipe deverá apanhar a bola com o lençol, marca ponto a equipe que conseguir fazer a bola cair no chão da outra turma.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "uma bola",
          "dois lençóis"
        ],
        "steps": [
          "Como um jogo de vôlei, as crianças deverão passar a bola para o outro lado da rede, e a outra equipe deverá apanhar a bola com o lençol, marca ponto a equipe que conseguir fazer a bola cair no chão da outra turma."
        ]
      },
      {
        "id": "pdf-104",
        "title": "Rede Humana",
        "description": "é a rede humana (um aluno ao lado do outro sobre a linha central da quadra) Grupos 2 e 3: equipes que estão jogando. As equipes que estão na quadra devem passar a bola para o outro lado sem que a \"rede humana\" encoste na bola. Acontecendo o toque pela rede humana, é feito o rodízio das equipes: a equipe que deixou a rede humana encostar entra como no lugar; quem está na rede entra no lugar da equipe que errou e assim sucessivamente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "bola"
        ],
        "steps": [
          "é a rede humana (um aluno ao lado do outro sobre a linha central da quadra) Grupos 2 e 3: equipes que estão jogando. As equipes que estão na quadra devem passar a bola para o outro lado sem que a \"rede humana\" encoste na bola. Acontecendo o toque pela rede humana, é feito o rodízio das equipes: a equipe que deixou a rede humana encostar entra como no lugar; quem está na rede entra no lugar da equipe que errou e assim sucessivamente."
        ]
      },
      {
        "id": "pdf-105",
        "title": "Handfut",
        "description": "Divide-se duas equipes, um goleiro para cada time. Os participantes passam a bola com as mãos entre si, mas o gol só poderá ser realizado com o pé ou com a cabeça.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "Divide-se duas equipes, um goleiro para cada time. Os participantes passam a bola com as mãos entre si, mas o gol só poderá ser realizado com o pé ou com a cabeça."
        ]
      },
      {
        "id": "pdf-108",
        "title": "Bruxa / Caçador",
        "description": "Traçam-se três linhas no chão, de modo a formar dois campos (A e B). O número de jogadores de um campo deve ser igual ao do outro. No jogo Bruxa, a formação é livre: uma criança assume o papel de bruxa ou bruxo que procura tomar a bola. O jogo Bruxa consiste em atirar a bola sobre os participantes, a fim de acertá-los. Os alvos correm de um lado para o outro, procurando não serem atingidos. O que for batido pela bola será o novo bruxo ou bruxa. No jogo Caçador, escolhido o lado que iniciará a caçada, um participante joga a bola sobre um jogador do lado oposto. Aquele que for batido e não aparar a bola estará morto e passará à reserva do campo, sem direito de matar. Vencerá o campo que conseguir eliminar todos os elementos do lado oposto.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "Traçam-se três linhas no chão, de modo a formar dois campos (A e B). O número de jogadores de um campo deve ser igual ao do outro. No jogo Bruxa, a formação é livre: uma criança assume o papel de bruxa ou bruxo que procura tomar a bola. O jogo Bruxa consiste em atirar a bola sobre os participantes, a fim de acertá-los. Os alvos correm de um lado para o outro, procurando não serem atingidos. O que for batido pela bola será o novo bruxo ou bruxa. No jogo Caçador, escolhido o lado que iniciará a caçada, um participante joga a bola sobre um jogador do lado oposto. Aquele que for batido e não aparar a bola estará morto e passará à reserva do campo, sem direito de matar. Vencerá o campo que conseguir eliminar todos os elementos do lado oposto."
        ]
      },
      {
        "id": "pdf-115",
        "title": "Jogo dos 7 passes",
        "description": "Dividir em duas equipes, cada equipe deverá fazer 7 passes antes de acertar o gol (com a mão), a outra equipe deverá tentar interferir os passes, o gol só valerá se os 7 passes forem realizados. -- 29 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "bola"
        ],
        "steps": [
          "Dividir em duas equipes, cada equipe deverá fazer 7 passes antes de acertar o gol (com a mão), a outra equipe deverá tentar interferir os passes, o gol só valerá se os 7 passes forem realizados. -- 29 of 37 --"
        ]
      },
      {
        "id": "pdf-118",
        "title": "Vinte e um",
        "description": "Os participantes ficaram próximos a cesta do basquete, determinados em uma sequência, o primeiro fará um arremesso da linha do lance livre, se acertar será marado um ponto, e voltará a fazer o arremesso, se errar, o próximo participante tentara o arremesso de onde a bola caiu, se acertar, volta ao lance livre e arremessa novamente. Ganha quem fizer 21 pontos primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "9+ anos",
        "materials": [
          "Bola"
        ],
        "steps": [
          "Os participantes ficaram próximos a cesta do basquete, determinados em uma sequência, o primeiro fará um arremesso da linha do lance livre, se acertar será marado um ponto, e voltará a fazer o arremesso, se errar, o próximo participante tentara o arremesso de onde a bola caiu, se acertar, volta ao lance livre e arremessa novamente. Ganha quem fizer 21 pontos primeiro."
        ]
      },
      {
        "id": "pdf-120",
        "title": "Jogo da velha",
        "description": "O professor deverá dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambolês em três colunas (formato do jogo da velha). Deixar 5 bolas para cada equipe, colocá-las a frente dos bambolês. Ao sinal do professor, os primeiros de cada coluna sairão correndo e pegaram uma bola e colocarão dentro do bambolê, voltaram correndo, bateram na mão do seu colega e o mesmo sairá correndo para fazer o mesmo, e assim sucessivamente até \"fechar\" o jogo da velha (completar três colunas ou diagonal com a cor da sua equipe). Como variação, o monitor poderá colocar obstáculos a frente do jogo para atrapalhar o participante, como cones, cordas entre outros.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "9 Bambolês",
          "10 bolas ou objeto que a substitua (5 de cada cor)"
        ],
        "steps": [
          "O professor deverá dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambolês em três colunas (formato do jogo da velha). Deixar 5 bolas para cada equipe, colocá-las a frente dos bambolês. Ao sinal do professor, os primeiros de cada coluna sairão correndo e pegaram uma bola e colocarão dentro do bambolê, voltaram correndo, bateram na mão do seu colega e o mesmo sairá correndo para fazer o mesmo, e assim sucessivamente até \"fechar\" o jogo da velha (completar três colunas ou diagonal com a cor da sua equipe). Como variação, o monitor poderá colocar obstáculos a frente do jogo para atrapalhar o participante, como cones, cordas entre outros."
        ]
      },
      {
        "id": "pdf-122",
        "title": "Caranguejobol",
        "description": "divididos em dois times, os participantes ficarão na posição de \"caranguejo\" (sentados no chão com o quadril levantado, apoio apenas das mãos e dos pés.), como um jogo de futebol, disputaram a bola e a cada gol marcado é um ponto para cada time. Os gols só poderão ser feitos na posição, não valerá se tiver sentado no chão.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "bola"
        ],
        "steps": [
          "divididos em dois times, os participantes ficarão na posição de \"caranguejo\" (sentados no chão com o quadril levantado, apoio apenas das mãos e dos pés.), como um jogo de futebol, disputaram a bola e a cada gol marcado é um ponto para cada time. Os gols só poderão ser feitos na posição, não valerá se tiver sentado no chão."
        ]
      },
      {
        "id": "pdf-127",
        "title": "Base 7",
        "description": "Será dividido dois times, um time que atacará e um time que irá defender. Ficara uma pessoa do time que irá defender no meio, e o restante espalhado pela quadra. O time de ataque deverá ficar posicionado em uma coluna, atrás da linha de fundo, a pessoa do meio jogará a bola para o primeiro da coluna, do time de ataque, essa pessoa deverá arremessar a bola o mais longe possível e correr passando por todos os bambolês que ficaram espalhados. O time de defesa deverá pegar a bola e devolver para a pessoa do meio antes que a pessoa do ataque consiga correr nos 7 bambolês. Todos os do time de ataque faram o mesmo. Cada bambolê terá pontos, o primeiro bambolê 1 ponto o segundo será 2 pontos e assim sucessivamente. Deverá ser trocado, quem era ataque vira defesa e quem era defesa vira ataque, ganha o time que conseguir mais pontos, todas as crianças deverão correr pelos bambolês. Se a pessoa da defesa, que está no meio receber a bola, e a pessoa do ataque não estiver dentro de um bambolê, volta para o final da fila.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "7 bambolês",
          "uma bola"
        ],
        "steps": [
          "Será dividido dois times, um time que atacará e um time que irá defender. Ficara uma pessoa do time que irá defender no meio, e o restante espalhado pela quadra. O time de ataque deverá ficar posicionado em uma coluna, atrás da linha de fundo, a pessoa do meio jogará a bola para o primeiro da coluna, do time de ataque, essa pessoa deverá arremessar a bola o mais longe possível e correr passando por todos os bambolês que ficaram espalhados. O time de defesa deverá pegar a bola e devolver para a pessoa do meio antes que a pessoa do ataque consiga correr nos 7 bambolês. Todos os do time de ataque faram o mesmo. Cada bambolê terá pontos, o primeiro bambolê 1 ponto o segundo será 2 pontos e assim sucessivamente. Deverá ser trocado, quem era ataque vira defesa e quem era defesa vira ataque, ganha o time que conseguir mais pontos, todas as crianças deverão correr pelos bambolês. Se a pessoa da defesa, que está no meio receber a bola, e a pessoa do ataque não estiver dentro de um bambolê, volta para o final da fila."
        ]
      },
      {
        "id": "pdf-128",
        "title": "Dodgeball",
        "description": "Serão divididos dois times. Cada time ficara em um lado da quadra posicionados atrás da linha de fundo. No meio da quadra, estrão as bolas, ao sinal do monitor as crianças saíram correndo para pegar a bola. Começara uma queimada com várias bolas, cada pessoa queimada sairá do jogo, quando alguém do time da pessoa queima agarrar a bola, poderá voltar uma pessoa que foi queima, se alguém do time acertar o aro da tabela de basquete voltam duas pessoas, se acertar a cesta voltam todos que foram queimos do seu time. Ganha o time que conseguir queimar todos os adversários. -- 33 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "de 2 a 5 bolas"
        ],
        "steps": [
          "Serão divididos dois times. Cada time ficara em um lado da quadra posicionados atrás da linha de fundo. No meio da quadra, estrão as bolas, ao sinal do monitor as crianças saíram correndo para pegar a bola. Começara uma queimada com várias bolas, cada pessoa queimada sairá do jogo, quando alguém do time da pessoa queima agarrar a bola, poderá voltar uma pessoa que foi queima, se alguém do time acertar o aro da tabela de basquete voltam duas pessoas, se acertar a cesta voltam todos que foram queimos do seu time. Ganha o time que conseguir queimar todos os adversários. -- 33 of 37 --"
        ]
      },
      {
        "id": "pdf-129",
        "title": "Vamos Acordar?",
        "description": "Os alunos dispostos em círculo sentados ao chão, ou em cadeiras ou até mesmo em pé, as mãos cruzadas dispostas sobre o peito. Um aluno ficará no meio do círculo com uma bola que deverá ameaçar lançá-la a qualquer aluno que estiver no círculo, este não poderá mover as mãos a não ser que realmente ele lance, portanto, o aluno deverá pegá-la. O aluno que mover as mãos ou se laçada a bola e deixá-la cair, sairá fora da brincadeira e assim por diante, até que restar somente um aluno dentre todos os do círculo. (Para dia de Chuva).",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Uma Bola"
        ],
        "steps": [
          "Os alunos dispostos em círculo sentados ao chão, ou em cadeiras ou até mesmo em pé, as mãos cruzadas dispostas sobre o peito. Um aluno ficará no meio do círculo com uma bola que deverá ameaçar lançá-la a qualquer aluno que estiver no círculo, este não poderá mover as mãos a não ser que realmente ele lance, portanto, o aluno deverá pegá-la. O aluno que mover as mãos ou se laçada a bola e deixá-la cair, sairá fora da brincadeira e assim por diante, até que restar somente um aluno dentre todos os do círculo. (Para dia de Chuva)."
        ]
      },
      {
        "id": "pdf-130",
        "title": "Pega-Pega Vôlei",
        "description": "Duas equipes começam a jogar um jogo de Voleibol. Quando a boa cair no chão, a equipe que fez o ponto corre atrás da equipe que tomou o ponto. Essa equipe tem que passar da linha da área de saque (linha de fundo da quadra) para não ser pego. Além do ponto por ter caído a bola no chão, se dois alunos forem pegos, a equipe marca dois pontos e assim sucessivamente.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Uma bola",
          "algo que dívida a quadra",
          "uma rede ou uma corda."
        ],
        "steps": [
          "Duas equipes começam a jogar um jogo de Voleibol. Quando a boa cair no chão, a equipe que fez o ponto corre atrás da equipe que tomou o ponto. Essa equipe tem que passar da linha da área de saque (linha de fundo da quadra) para não ser pego. Além do ponto por ter caído a bola no chão, se dois alunos forem pegos, a equipe marca dois pontos e assim sucessivamente."
        ]
      },
      {
        "id": "pdf-134",
        "title": "Caçador",
        "description": "Um participante será o caçador. Ele deve esconder 5 bambolês em um determinado local. Cada bambolê terá 4 cones da mesma cor. Os demais participantes devem encontrar todos os cones e colocá-los dentro dos bambolês nas cores correspondentes. O caçador, por sua vez, deve pegar os integrantes e levá-los para cadeiras ou bancos pré-determinados. O jogador capturado deve retirar o tênis e ficar sentado até que alguém venha salvá-lo. Variações: Cada jogador possuir apenas 2 vidas e perder uma delas à cada vez que for pego pelo caçador. O caçador e os participantes podem ter uma habilidade específica pré- determinada: Participantes: Ganhar mais uma vida, começar com um cone, ter o direito de fugir do banco uma vez, conhecer a localização de um bambolê etc. Caçador: Queimar com uma bola, \"grudar\" dois participantes, mudar os cones de lugar ao longo do jogo etc. -- 35 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Bambolês",
          "cones",
          "caneta."
        ],
        "steps": [
          "Um participante será o caçador. Ele deve esconder 5 bambolês em um determinado local. Cada bambolê terá 4 cones da mesma cor. Os demais participantes devem encontrar todos os cones e colocá-los dentro dos bambolês nas cores correspondentes. O caçador, por sua vez, deve pegar os integrantes e levá-los para cadeiras ou bancos pré-determinados. O jogador capturado deve retirar o tênis e ficar sentado até que alguém venha salvá-lo. Variações: Cada jogador possuir apenas 2 vidas e perder uma delas à cada vez que for pego pelo caçador. O caçador e os participantes podem ter uma habilidade específica pré- determinada: Participantes: Ganhar mais uma vida, começar com um cone, ter o direito de fugir do banco uma vez, conhecer a localização de um bambolê etc. Caçador: Queimar com uma bola, \"grudar\" dois participantes, mudar os cones de lugar ao longo do jogo etc. -- 35 of 37 --"
        ]
      },
      {
        "id": "pdf-135",
        "title": "Defendendo a Torre",
        "description": "Duas equipes, cada uma com uma \"base\" circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time adversário e dentro da área da base de seu time. O objetivo é derrubar o cone da outra equipe utilizando uma bola. A equipe que estiver defendendo não pode sair da base e só pode atacar quando recuperar a bola. A equipe que está atacando, por sua vez, deve correr rapidamente para a sua base ao perder a posse da bola.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Cones",
          "bola."
        ],
        "steps": [
          "Duas equipes, cada uma com uma \"base\" circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time adversário e dentro da área da base de seu time. O objetivo é derrubar o cone da outra equipe utilizando uma bola. A equipe que estiver defendendo não pode sair da base e só pode atacar quando recuperar a bola. A equipe que está atacando, por sua vez, deve correr rapidamente para a sua base ao perder a posse da bola."
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
        "title": "Quero minha casa",
        "description": "Todos os alunos ficarão dentro de um bambolê, exceto um que ficará fora do bambolê. Ao sinal do professor, todos troaram de \"casa\" e sempre um sobrará fora do bambolê. Usar como variação: Eliminar os bambolês para que as crianças trabalhem em equipe sem ninguém ficar fora da \"casa\".",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "4+ anos",
        "materials": [
          "bambolê"
        ],
        "steps": [
          "Todos os alunos ficarão dentro de um bambolê, exceto um que ficará fora do bambolê. Ao sinal do professor, todos troaram de \"casa\" e sempre um sobrará fora do bambolê. Usar como variação: Eliminar os bambolês para que as crianças trabalhem em equipe sem ninguém ficar fora da \"casa\"."
        ]
      },
      {
        "id": "pdf-18",
        "title": "Mata barata",
        "description": "A turma será dividida em duas equipes, sendo que cada uma delas terá uma cor representativa. Cada integrante receberá um balão (cor da equipe) que, depois de estar cheio de ar, será amarrado com barbante em um dos seus tornozelos. O objetivo da brincadeira é que cada integrante proteja o seu balão e, ao mesmo tempo, tente estourar os balões da equipe adversária. Nesse sentido, a equipe vencedora será aquela que conseguir estourar todos os balões adversários e permanecer com apenas um balão cheio. -- 5 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "barbantes",
          "bexigas"
        ],
        "steps": [
          "A turma será dividida em duas equipes, sendo que cada uma delas terá uma cor representativa. Cada integrante receberá um balão (cor da equipe) que, depois de estar cheio de ar, será amarrado com barbante em um dos seus tornozelos. O objetivo da brincadeira é que cada integrante proteja o seu balão e, ao mesmo tempo, tente estourar os balões da equipe adversária. Nesse sentido, a equipe vencedora será aquela que conseguir estourar todos os balões adversários e permanecer com apenas um balão cheio. -- 5 of 37 --"
        ]
      },
      {
        "id": "pdf-60",
        "title": "Batalha Naval",
        "description": "Divida o local do jogo em duas partes de forma que um lado não possa enxergar o outro (amarre uma corda e coloque um lençol por cima). A seguir, as pessoas de cada time escolhem um local para si e não podem se mover daí. Quando o jogo começa, cada time ganha algumas bolinhas de papel e devem tentar atingir o outro time com essas \"bombas\", o time que estiver com menos \"bombas\" em campo vence.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Bolinhas de papel"
        ],
        "steps": [
          "Divida o local do jogo em duas partes de forma que um lado não possa enxergar o outro (amarre uma corda e coloque um lençol por cima). A seguir, as pessoas de cada time escolhem um local para si e não podem se mover daí. Quando o jogo começa, cada time ganha algumas bolinhas de papel e devem tentar atingir o outro time com essas \"bombas\", o time que estiver com menos \"bombas\" em campo vence."
        ]
      },
      {
        "id": "pdf-62",
        "title": "Campo Minado com mapa",
        "description": "O monitor irá organizar os bambolês dispostos ao chão, em 3 ou mais fileiras e em 5 ou mais colunas (de acordo com o monitor) o monitor deverá formular o mapa onde se localizam todas as \"minas terrestres\", apenas o monitor poderá ver, através do mapa o monitor dirá se as crianças estão indo pelo lugar certo, caso pise em um lugar que tenha a \"bomba\" deverá voltar a fila. Ganha quem chegar sem pisar nenhuma vez nas \"bombas\", objetivo é trabalhar a memória das crianças. -- 15 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "10 ou mais bambolês",
          "caso não tenha",
          "usar marcação no chão"
        ],
        "steps": [
          "O monitor irá organizar os bambolês dispostos ao chão, em 3 ou mais fileiras e em 5 ou mais colunas (de acordo com o monitor) o monitor deverá formular o mapa onde se localizam todas as \"minas terrestres\", apenas o monitor poderá ver, através do mapa o monitor dirá se as crianças estão indo pelo lugar certo, caso pise em um lugar que tenha a \"bomba\" deverá voltar a fila. Ganha quem chegar sem pisar nenhuma vez nas \"bombas\", objetivo é trabalhar a memória das crianças. -- 15 of 37 --"
        ]
      },
      {
        "id": "pdf-65",
        "title": "Corrida dos sapatos",
        "description": "Será dividida duas equipes, todos os participantes deverão tirar o sapato e colocar num local determinado pelo monitor (que misturará todos os sapatos), ao sinal do monitor deverão correr e procurar seus sapatos, quando achados deverão voltar ao seu lugar de origem. A equipe que estiver calçada primeiro ganha.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Será dividida duas equipes, todos os participantes deverão tirar o sapato e colocar num local determinado pelo monitor (que misturará todos os sapatos), ao sinal do monitor deverão correr e procurar seus sapatos, quando achados deverão voltar ao seu lugar de origem. A equipe que estiver calçada primeiro ganha."
        ]
      },
      {
        "id": "pdf-68",
        "title": "Corrida Pô",
        "description": "Divide-se duas equipes, cada equipe fica em uma ponta dos bambolês. Ao sinal do monitor as primeiras crianças de cada fila pulam os bambolês até se encontrarem, tiram pedra, papel ou tesoura, a vencedora continua pulando as casas até que venha outra criança e assim sucessivamente, quando uma criança chegar ao lado oposto marca-se um ponto. Ganha a equipe que passar todas as crianças par o outro lado.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "bambolês ou círculos desenhados no chão"
        ],
        "steps": [
          "Divide-se duas equipes, cada equipe fica em uma ponta dos bambolês. Ao sinal do monitor as primeiras crianças de cada fila pulam os bambolês até se encontrarem, tiram pedra, papel ou tesoura, a vencedora continua pulando as casas até que venha outra criança e assim sucessivamente, quando uma criança chegar ao lado oposto marca-se um ponto. Ganha a equipe que passar todas as crianças par o outro lado."
        ]
      },
      {
        "id": "pdf-70",
        "title": "Bambolê de guerra",
        "description": "Jogam uma dupla de cada equipe. As duplas entrarão em um bambolê e ficarão de costas para a outra, pois correrão de frente. Serão feitos dois riscos, cada um a exatos 2 metros de cada lado do bambolê. O Objetivo é correr e fazer força para ultrapassar a linha, mas será difícil, pois a outra dupla irá fazer o mesmo. A dupla que conseguir ultrapassar o risco, vence. -- 17 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [
          "Bambolê"
        ],
        "steps": [
          "Jogam uma dupla de cada equipe. As duplas entrarão em um bambolê e ficarão de costas para a outra, pois correrão de frente. Serão feitos dois riscos, cada um a exatos 2 metros de cada lado do bambolê. O Objetivo é correr e fazer força para ultrapassar a linha, mas será difícil, pois a outra dupla irá fazer o mesmo. A dupla que conseguir ultrapassar o risco, vence. -- 17 of 37 --"
        ]
      },
      {
        "id": "pdf-85",
        "title": "Genius Humano",
        "description": "- Montar um quadrado 3x3 com 6 bambolês no chão. - Separar em 2 times, defensor e atacante, sempre em filas - Em cada round, um time pula dentro de um bambolê, enquanto o outro time decora a ordem que o time Genius (atacante) montou, e assim que escolherem a ordem o time defensor (memorizadores/defensor) tem que pular nos mesmos bambolês - A cada etapa, acrescenta-se 1 pulo, exemplo: primeira etapa - 1 bambolê; segunda etapa - 2 bambolês, sendo o primeiro o mesmo que o colega anterior pulou e assim por diante, um por vez na fila, alternando entre ataque e defesa",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "bambolês",
          "ou círculos desenhados no chão"
        ],
        "steps": [
          "- Montar um quadrado 3x3 com 6 bambolês no chão. - Separar em 2 times, defensor e atacante, sempre em filas - Em cada round, um time pula dentro de um bambolê, enquanto o outro time decora a ordem que o time Genius (atacante) montou, e assim que escolherem a ordem o time defensor (memorizadores/defensor) tem que pular nos mesmos bambolês - A cada etapa, acrescenta-se 1 pulo, exemplo: primeira etapa - 1 bambolê; segunda etapa - 2 bambolês, sendo o primeiro o mesmo que o colega anterior pulou e assim por diante, um por vez na fila, alternando entre ataque e defesa"
        ]
      },
      {
        "id": "pdf-87",
        "title": "Queimada abelha rainha",
        "description": "Serão divididos dois times, cada time irá escolher a sua \"abelha rainha\" sem que a outra equipe saiba. O objetivo é proteger a abelha rainha para que ela não seja queimada, mas ao mesmo tempo disfarçando para que não descubram quem é a abelha. Ganha o time que fiar com a abelha rainha até o fim, ou o que queimar a abelha do time adversário.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "bola"
        ],
        "steps": [
          "Serão divididos dois times, cada time irá escolher a sua \"abelha rainha\" sem que a outra equipe saiba. O objetivo é proteger a abelha rainha para que ela não seja queimada, mas ao mesmo tempo disfarçando para que não descubram quem é a abelha. Ganha o time que fiar com a abelha rainha até o fim, ou o que queimar a abelha do time adversário."
        ]
      },
      {
        "id": "pdf-94",
        "title": "Barra Manteiga",
        "description": "Divididos em dois times, cada time de um lado da quadra, colocados em fileira um ao lado do outro, será escolhido um integrante de um time para ir até o outo time, que estarão com as mãos estendidas, esse integrante irá bater nas mãos de seus rivais cantando \"barra manteiga, na saia da nega, 1,2,3\", no \"3\" deverá bater com mais força na mão de alguém e sair correndo de volta a sua equipe, se for pego pela pessoa antes de cruzar a linha de seu time, passara a ser integrante de outro time.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Divididos em dois times, cada time de um lado da quadra, colocados em fileira um ao lado do outro, será escolhido um integrante de um time para ir até o outo time, que estarão com as mãos estendidas, esse integrante irá bater nas mãos de seus rivais cantando \"barra manteiga, na saia da nega, 1,2,3\", no \"3\" deverá bater com mais força na mão de alguém e sair correndo de volta a sua equipe, se for pego pela pessoa antes de cruzar a linha de seu time, passara a ser integrante de outro time."
        ]
      },
      {
        "id": "pdf-96",
        "title": "Coração Valente",
        "description": "Brincadeira lúdica baseada em pedra, papel ou tesoura. O monitor dividirá duas equipes iguais, e escolherá um \"rei\" para cada equipe. Cada time com uma base em diferentes lados do espaço. As crianças irão guerrear com batalhas, \"melhor de 3\" de pedra, papel ou tesoura. Cada guerra tira uma vida do perdedor, cada guerreiro tem 3 vidas e o rei 2, porém o rei a cada batalha ganha tirará duas vidas do perdedor. -- 24 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Espaço amplo",
          "um colete para demarcar o \"rei\""
        ],
        "steps": [
          "Brincadeira lúdica baseada em pedra, papel ou tesoura. O monitor dividirá duas equipes iguais, e escolherá um \"rei\" para cada equipe. Cada time com uma base em diferentes lados do espaço. As crianças irão guerrear com batalhas, \"melhor de 3\" de pedra, papel ou tesoura. Cada guerra tira uma vida do perdedor, cada guerreiro tem 3 vidas e o rei 2, porém o rei a cada batalha ganha tirará duas vidas do perdedor. -- 24 of 37 --"
        ]
      },
      {
        "id": "pdf-109",
        "title": "Stop em estafeta",
        "description": "Divididos em equipes, cada equipe escolhera uma pessoa para escrever, é como um jogo de stop normal (Nome, cor, fruta, animal, objeto etc.) O restante da equipe estará em colunas, o monitor escolherá uma letra e ao seu sinal, um de cada vez, saíra correndo e dirá para quem estiver escrevendo um nome com a inicial da letra escolhida. Marca-se um ponto para a equipe que acabar tudo e gritar stop primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Papel",
          "caneta para cada equipe"
        ],
        "steps": [
          "Divididos em equipes, cada equipe escolhera uma pessoa para escrever, é como um jogo de stop normal (Nome, cor, fruta, animal, objeto etc.) O restante da equipe estará em colunas, o monitor escolherá uma letra e ao seu sinal, um de cada vez, saíra correndo e dirá para quem estiver escrevendo um nome com a inicial da letra escolhida. Marca-se um ponto para a equipe que acabar tudo e gritar stop primeiro."
        ]
      },
      {
        "id": "pdf-116",
        "title": "Corrida do pé colado",
        "description": "Divididos em equipes, dois jogadores de cada equipe correão com os pés amarrados até o lugar determinado pelo monitor, ganha a equipe que chegar primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "algo para amarrar os pés dos jogadores"
        ],
        "steps": [
          "Divididos em equipes, dois jogadores de cada equipe correão com os pés amarrados até o lugar determinado pelo monitor, ganha a equipe que chegar primeiro."
        ]
      },
      {
        "id": "pdf-117",
        "title": "Dinâmica da mão colada no pé",
        "description": "Divididos em equipes, os participantes se colocaram em uma coluna, deverão ficar na posição de \"caranguejo\" (sentados com a mão apoiada no chão e o quadril levantado, fora do chão), nessa posição, os participantes deverão colocar suas mãos nos pés do colega de trás, e assim sucessivamente, ao sinal do professor tentaram caminhar até o lugar determinado, ganha a equipe que chegar primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "10+ anos",
        "materials": [],
        "steps": [
          "Divididos em equipes, os participantes se colocaram em uma coluna, deverão ficar na posição de \"caranguejo\" (sentados com a mão apoiada no chão e o quadril levantado, fora do chão), nessa posição, os participantes deverão colocar suas mãos nos pés do colega de trás, e assim sucessivamente, ao sinal do professor tentaram caminhar até o lugar determinado, ganha a equipe que chegar primeiro."
        ]
      },
      {
        "id": "pdf-124",
        "title": "Mango",
        "description": "O monitor dividirá duas equipes. Em sua mão terá uma folha com várias palavras, os times tentarão adivinhar as palavras, exemplo: o monitor dará uma dica \"bebida\" e cada time irá chutar um tipo de bebida, até acertar, ganha um ponto o time que acertar. No meio de todas essas palavras terá a palavra MANGO, quando chegar nessa palavra o time que estiver com mais pontos irá escolher um mico para o outro time pagar. Ganha o jogo quem estiver mais pontos, quando a lista de palavras acabar. Obs.: a palavra MANGO poderá se repetir durante o jogo.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [
          "Papel",
          "Caneta"
        ],
        "steps": [
          "O monitor dividirá duas equipes. Em sua mão terá uma folha com várias palavras, os times tentarão adivinhar as palavras, exemplo: o monitor dará uma dica \"bebida\" e cada time irá chutar um tipo de bebida, até acertar, ganha um ponto o time que acertar. No meio de todas essas palavras terá a palavra MANGO, quando chegar nessa palavra o time que estiver com mais pontos irá escolher um mico para o outro time pagar. Ganha o jogo quem estiver mais pontos, quando a lista de palavras acabar. Obs.: a palavra MANGO poderá se repetir durante o jogo."
        ]
      },
      {
        "id": "pdf-125",
        "title": "Jogo da Memória Humano",
        "description": "Do grupo, dois são escolhidos para adivinhar quem serão os pares. Para isso, são levados para fora/outro ambiente, enquanto os colegas restantes se dividem em duplas e combinam um gesto/movimento/sinal comum para ambos. Organizam-se em colunas e embaralham-se para dificultar a localização dos pares. A dupla retorna e deverá adivinhar os pares, escolhendo dois por vez, os quais executarão seu gesto/movimento/sinal (como quando as peças do jogo tradicional são viradas). A dupla pode jogar de modo cooperativo ou competitivo. Após um certo número de acertos/jogadas, pode-se trocar os papéis, os pares e os movimentos combinados, enriquecendo a atividade. (Para dias de chuva) -- 32 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Do grupo, dois são escolhidos para adivinhar quem serão os pares. Para isso, são levados para fora/outro ambiente, enquanto os colegas restantes se dividem em duplas e combinam um gesto/movimento/sinal comum para ambos. Organizam-se em colunas e embaralham-se para dificultar a localização dos pares. A dupla retorna e deverá adivinhar os pares, escolhendo dois por vez, os quais executarão seu gesto/movimento/sinal (como quando as peças do jogo tradicional são viradas). A dupla pode jogar de modo cooperativo ou competitivo. Após um certo número de acertos/jogadas, pode-se trocar os papéis, os pares e os movimentos combinados, enriquecendo a atividade. (Para dias de chuva) -- 32 of 37 --"
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
        "title": "Dança da cadeira cooperativa",
        "description": "Igual a dança das cadeiras, mas conforme for tirando as cadeiras, as crianças que ficarem sem cadeiras deverão sentar-se no colo do colega, até restar uma cadeira, um devera se sentar no colo do outro sem que ninguém fique em pé",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "cadeiras ou bancos",
          "música"
        ],
        "steps": [
          "Igual a dança das cadeiras, mas conforme for tirando as cadeiras, as crianças que ficarem sem cadeiras deverão sentar-se no colo do colega, até restar uma cadeira, um devera se sentar no colo do outro sem que ninguém fique em pé"
        ]
      },
      {
        "id": "pdf-20",
        "title": "Kung fu panda",
        "description": "Todas as crianças se juntarão ao meio, com um dos pés à frente, quando o monitor falar \"kung fu panda\" todas as crianças se afastaram para trás com um salto. O objetivo é eliminar os colegas, tocando nos braços ou pernas, mas só poderá utilizar um movimento por vez para atingir um colega próximo. O colega que estiver prestes a ser atingido poderá desviar, mas usando apenas um movimento também. Ao acertar algum membro de algum companheiro, este \"perderá\" o membro atingido, não podendo usar para \"atacar\". Ganha quem ao final estiver com mais membros não atingidos.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [],
        "steps": [
          "Todas as crianças se juntarão ao meio, com um dos pés à frente, quando o monitor falar \"kung fu panda\" todas as crianças se afastaram para trás com um salto. O objetivo é eliminar os colegas, tocando nos braços ou pernas, mas só poderá utilizar um movimento por vez para atingir um colega próximo. O colega que estiver prestes a ser atingido poderá desviar, mas usando apenas um movimento também. Ao acertar algum membro de algum companheiro, este \"perderá\" o membro atingido, não podendo usar para \"atacar\". Ganha quem ao final estiver com mais membros não atingidos."
        ]
      },
      {
        "id": "pdf-22",
        "title": "Aro nos cones",
        "description": "Arremessar os bambolês nos cones e tentar acertá-lo dentro do cone. Pode ser utilizado garrafas pets.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "bambolês",
          "cones"
        ],
        "steps": [
          "Arremessar os bambolês nos cones e tentar acertá-lo dentro do cone. Pode ser utilizado garrafas pets."
        ]
      },
      {
        "id": "pdf-28",
        "title": "Carniça",
        "description": "Consiste num alinhamento de crianças, em rápido deslocamento, uma a uma, pulando sobre as costas dos companheiros parados, curvados, apoiando as mãos nas coxas. Pulada a última carniça, o jogador corre e para adiante, esperando que os demais saltem sobre ele. ├ë sempre revezado. -- 7 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Consiste num alinhamento de crianças, em rápido deslocamento, uma a uma, pulando sobre as costas dos companheiros parados, curvados, apoiando as mãos nas coxas. Pulada a última carniça, o jogador corre e para adiante, esperando que os demais saltem sobre ele. ├ë sempre revezado. -- 7 of 37 --"
        ]
      },
      {
        "id": "pdf-37",
        "title": "Quebra-Cabeça Gigante",
        "description": "Os participantes devem, inicialmente, colorir um desenho em uma folha de papel. Após isso o desenho será recortado em algumas partes. As \"peças\" dos desenhos serão escondidas em um determinado local. Vence o participante que conseguir achar suas peças e montar o seu desenho primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Desenhos para colorir",
          "Tesoura",
          "cola ou fita adesiva."
        ],
        "steps": [
          "Os participantes devem, inicialmente, colorir um desenho em uma folha de papel. Após isso o desenho será recortado em algumas partes. As \"peças\" dos desenhos serão escondidas em um determinado local. Vence o participante que conseguir achar suas peças e montar o seu desenho primeiro."
        ]
      },
      {
        "id": "pdf-39",
        "title": "A natureza fala",
        "description": "O monitor mostrará um som para a criança, exemplo o barulho da chuva e a criança dirá qual é aquele som. Pode também mostrar uma foto e pedir para a criança imitar o som.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "O monitor mostrará um som para a criança, exemplo o barulho da chuva e a criança dirá qual é aquele som. Pode também mostrar uma foto e pedir para a criança imitar o som."
        ]
      },
      {
        "id": "pdf-47",
        "title": "Palmas de papel",
        "description": "Todos ficam em pé com uma folha entre as mãos, ao sinal do professor bateram palmas sem deixar a folha cair no chão, quem deixar cair se senta no chão.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "1 folha para cada criança"
        ],
        "steps": [
          "Todos ficam em pé com uma folha entre as mãos, ao sinal do professor bateram palmas sem deixar a folha cair no chão, quem deixar cair se senta no chão."
        ]
      },
      {
        "id": "pdf-52",
        "title": "Não Pode Rir",
        "description": "Crianças em duplas, frente a frente. Uma delas é espelho da outra. Imitar os movimentos do competidor sem rir. O que está à frente do espelho pode fazer careta. Paga multa (como no jogo de prendas) o que perder a competição. Na repetição da brincadeira, os papéis se invertem.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Crianças em duplas, frente a frente. Uma delas é espelho da outra. Imitar os movimentos do competidor sem rir. O que está à frente do espelho pode fazer careta. Paga multa (como no jogo de prendas) o que perder a competição. Na repetição da brincadeira, os papéis se invertem."
        ]
      },
      {
        "id": "pdf-74",
        "title": "Quem é o Líder",
        "description": "Forma-se um círculo, uma criança irá sair do círculo e ficara de costas, o restante das crianças escolherá um líder, sem que a criança que está fora do círculo saiba quem é. Depois de escolhido, essa criança começará a fazer movimentos, ou barulhos, todos deverão imita-lo, e a criança que está fora tentará descobrir quem está fazendo os movimentos. -- 18 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "6+ anos",
        "materials": [],
        "steps": [
          "Forma-se um círculo, uma criança irá sair do círculo e ficara de costas, o restante das crianças escolherá um líder, sem que a criança que está fora do círculo saiba quem é. Depois de escolhido, essa criança começará a fazer movimentos, ou barulhos, todos deverão imita-lo, e a criança que está fora tentará descobrir quem está fazendo os movimentos. -- 18 of 37 --"
        ]
      },
      {
        "id": "pdf-75",
        "title": "Máquina de Lavar roupa",
        "description": "Divide-se a turma em círculos com o mesmo número de participantes, todos numerados. Um aluno é escolhido para ficar fora do círculo. O jogo inicia quando o professor gritar um número e o aluno que está do lado de fora deverá pegá-lo. seus colegas para impedir q o número citado seja pego deverão girar de um lado para outro protegendo-o sem soltaras mãos. (Para Chuva).",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "5+ anos",
        "materials": [
          "Nenhum."
        ],
        "steps": [
          "Divide-se a turma em círculos com o mesmo número de participantes, todos numerados. Um aluno é escolhido para ficar fora do círculo. O jogo inicia quando o professor gritar um número e o aluno que está do lado de fora deverá pegá-lo. seus colegas para impedir q o número citado seja pego deverão girar de um lado para outro protegendo-o sem soltaras mãos. (Para Chuva)."
        ]
      },
      {
        "id": "pdf-77",
        "title": "Cara-a-Cara temático",
        "description": "Uma foto de cada participante deve ser tirada e impressa duas vezes, em duas folhas distintas. As folhas devem ser coladas em um suporte, metade delas voltada para um lado e a outra metade, de maneira espelhada, voltada para o sentido contrário. Dois integrantes devem jogar o jogo, ambos devem escolher apenas uma das fotos de pessoa e manter a escolha em segredo. Vence o jogo quem conseguir adivinhar primeiro a figura escolhida. Apenas perguntas sobre as características físicas podem ser feitas e as respostas só podem ser SIM ou N├âO.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Impressora",
          "folha de papel ou cartolina."
        ],
        "steps": [
          "Uma foto de cada participante deve ser tirada e impressa duas vezes, em duas folhas distintas. As folhas devem ser coladas em um suporte, metade delas voltada para um lado e a outra metade, de maneira espelhada, voltada para o sentido contrário. Dois integrantes devem jogar o jogo, ambos devem escolher apenas uma das fotos de pessoa e manter a escolha em segredo. Vence o jogo quem conseguir adivinhar primeiro a figura escolhida. Apenas perguntas sobre as características físicas podem ser feitas e as respostas só podem ser SIM ou N├âO."
        ]
      },
      {
        "id": "pdf-79",
        "title": "Caminho Sensorial",
        "description": "Vendados, os participantes devem fazer todo o caminho da corda, sem olhar e sentindo-a apenas com os pés.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Corda."
        ],
        "steps": [
          "Vendados, os participantes devem fazer todo o caminho da corda, sem olhar e sentindo-a apenas com os pés."
        ]
      },
      {
        "id": "pdf-80",
        "title": "Acerte a cor",
        "description": "Várias folhas coloridas devem ser espalhadas em um local. Os participantes recebem vários lápis com as mesmas cores das folhas que estão espalhadas. Vence o participante que conseguir colocar todos os lápis nas folhas de cores correspondentes primeiros.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Folhas coloridas",
          "lápis colorido",
          "giz ou outro material colorido",
          "qualquer."
        ],
        "steps": [
          "Várias folhas coloridas devem ser espalhadas em um local. Os participantes recebem vários lápis com as mesmas cores das folhas que estão espalhadas. Vence o participante que conseguir colocar todos os lápis nas folhas de cores correspondentes primeiros."
        ]
      },
      {
        "id": "pdf-88",
        "title": "Mistério",
        "description": "Os monitores criaram uma história, e nas cenas desse mistério iram colocar dicas, para que as crianças leiam essas dicas e descubram os lugares onde estão as outras dicas, até chegar ao último local, onde estará a última dica, levará para o monitor e ele contará o final do mistério. -- 22 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "caneta",
          "pedaços de papeis"
        ],
        "steps": [
          "Os monitores criaram uma história, e nas cenas desse mistério iram colocar dicas, para que as crianças leiam essas dicas e descubram os lugares onde estão as outras dicas, até chegar ao último local, onde estará a última dica, levará para o monitor e ele contará o final do mistério. -- 22 of 37 --"
        ]
      },
      {
        "id": "pdf-90",
        "title": "Canibal",
        "description": "Uma pessoa será o canibal que ficará com a cor preta, os restantes das cores serão escondidos pelo monitor em lugares diferentes. Ao sinal as crianças sairão a procura das cores, quando encontrar uma cor deverá passá-la no braço, caso o \"canibal\" a pegue, deverá passar a tinta preta por cima de todas as cores que a pessoa já encontrou. Ganha a brincadeira quem achar todas as cores primeiro.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "de 5 a 10 cores diferentes",
          "de canetinhas ou de tinta guache."
        ],
        "steps": [
          "Uma pessoa será o canibal que ficará com a cor preta, os restantes das cores serão escondidos pelo monitor em lugares diferentes. Ao sinal as crianças sairão a procura das cores, quando encontrar uma cor deverá passá-la no braço, caso o \"canibal\" a pegue, deverá passar a tinta preta por cima de todas as cores que a pessoa já encontrou. Ganha a brincadeira quem achar todas as cores primeiro."
        ]
      },
      {
        "id": "pdf-98",
        "title": "Crime",
        "description": "Jogam-se 3 grupos, mas antes 3 pessoas são escolhidas para serem os personagens do crime. O Monitor montará uma história juntamente com os personagens. Cada um dos três serão os suspeitos do crime, mas apenas um será o assassino, apenas os três e o monitor iram saber. Montada a história os personagens se esconderam, para que os grupos possam começar a jogar. O objetivo dos grupos é descobrir quem é o assassino, fazendo perguntas aos personagens, exemplo: \"o que você estava fazendo na hora do crime\". Ganha o grupo que descobrir o assassino. (Obs.: As crianças escolhidas como personagens deverão ter uma mine história para contar sobre o que estava fazendo quando o crime aconteceu e deverão contar sua versão para os grupos, quando forem perguntar.)",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [],
        "steps": [
          "Jogam-se 3 grupos, mas antes 3 pessoas são escolhidas para serem os personagens do crime. O Monitor montará uma história juntamente com os personagens. Cada um dos três serão os suspeitos do crime, mas apenas um será o assassino, apenas os três e o monitor iram saber. Montada a história os personagens se esconderam, para que os grupos possam começar a jogar. O objetivo dos grupos é descobrir quem é o assassino, fazendo perguntas aos personagens, exemplo: \"o que você estava fazendo na hora do crime\". Ganha o grupo que descobrir o assassino. (Obs.: As crianças escolhidas como personagens deverão ter uma mine história para contar sobre o que estava fazendo quando o crime aconteceu e deverão contar sua versão para os grupos, quando forem perguntar.)"
        ]
      },
      {
        "id": "pdf-99",
        "title": "Sorriso milionário",
        "description": "Cada um fica com três palitos, todos devem que ficar andando, se misturando. Quando o monitor gritar \"para\", cada participante deve correr para frente de outro e fazer palhaçadas. O outro tem que ficar parado, sem rir. Quem rir perde um palito. O desafio vai se repetindo e quem ficar sem palitos sai da brincadeira. Quem tiver mais ganha. Não vale fazer cócegas para o outro rir. -- 25 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "palitos ou algo que substitua"
        ],
        "steps": [
          "Cada um fica com três palitos, todos devem que ficar andando, se misturando. Quando o monitor gritar \"para\", cada participante deve correr para frente de outro e fazer palhaçadas. O outro tem que ficar parado, sem rir. Quem rir perde um palito. O desafio vai se repetindo e quem ficar sem palitos sai da brincadeira. Quem tiver mais ganha. Não vale fazer cócegas para o outro rir. -- 25 of 37 --"
        ]
      },
      {
        "id": "pdf-106",
        "title": "Raul Gil",
        "description": "Forma-se duplas. Joga-se um adedanha para saber \"O que é que tem em tal lugar com a letra tal?\". Cada dupla tem 30 segundos para dar a sua resposta. Quem não responder em 30 segundos, é eliminado, cantando \"O Raul perguntou, você não acertou, pegue seu banquinho e saia de mansinho\". Ganha a dupla que ficar por último",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "Forma-se duplas. Joga-se um adedanha para saber \"O que é que tem em tal lugar com a letra tal?\". Cada dupla tem 30 segundos para dar a sua resposta. Quem não responder em 30 segundos, é eliminado, cantando \"O Raul perguntou, você não acertou, pegue seu banquinho e saia de mansinho\". Ganha a dupla que ficar por último"
        ]
      },
      {
        "id": "pdf-111",
        "title": "Salada de Fruta",
        "description": "O monitor falará uma fruta, em seguida ele escolherá alguém para que fale a fruta que o monitor falou e uma de sua escolha (exemplo: monitor: maça, criança: maça banana) e assim sucessivamente, objetivo falar todas as frutas que já foram ditas mais a sua. Trabalhar a memória das crianças -- 28 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "8+ anos",
        "materials": [],
        "steps": [
          "O monitor falará uma fruta, em seguida ele escolherá alguém para que fale a fruta que o monitor falou e uma de sua escolha (exemplo: monitor: maça, criança: maça banana) e assim sucessivamente, objetivo falar todas as frutas que já foram ditas mais a sua. Trabalhar a memória das crianças -- 28 of 37 --"
        ]
      },
      {
        "id": "pdf-123",
        "title": "Cachorro e gato cego",
        "description": "Alunos em círculos, dois irão para o centro; um será o cachorro e outro o gato. Veda-se os olhos de ambos, toda vez que o cachorro latir, o gato miará, o cachorro deverá tentar pegá-lo, se conseguir, troca-se as crianças.",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "7+ anos",
        "materials": [
          "Lenços ou vendas"
        ],
        "steps": [
          "Alunos em círculos, dois irão para o centro; um será o cachorro e outro o gato. Veda-se os olhos de ambos, toda vez que o cachorro latir, o gato miará, o cachorro deverá tentar pegá-lo, se conseguir, troca-se as crianças."
        ]
      },
      {
        "id": "pdf-132",
        "title": "Tribunal.",
        "description": "Os participantes devem ser divididos em três grupos (Ataque, defesa e juízes). Um caso aleatório deve ser inventado pelo narrador da história. Cada grupo terá uma função específica. Ataque: Acusar a defesa e provar que estão certos. Defesa: Defender-se das acusações e tentar inocentar-se Juízes: Escolher qual dos lados tem razão e atribui-lo a vitória. -- 34 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [],
        "steps": [
          "Os participantes devem ser divididos em três grupos (Ataque, defesa e juízes). Um caso aleatório deve ser inventado pelo narrador da história. Cada grupo terá uma função específica. Ataque: Acusar a defesa e provar que estão certos. Defesa: Defender-se das acusações e tentar inocentar-se Juízes: Escolher qual dos lados tem razão e atribui-lo a vitória. -- 34 of 37 --"
        ]
      },
      {
        "id": "pdf-137",
        "title": "Mistério Explosivo",
        "description": "O narrador deve escrever uma história de suspense e mistério tendo obrigatoriamente uma vítima e diversos suspeitos. Após isso várias pistas que levam à resolução do mistério devem ser colocadas dentro de bexigas e escondidas em um local pré-determinado. Os participantes devem encontrar essas bexigas e levá-las para a \"Delegacia\", montada pelo narrador, e entregar as pistas para o \"Xerife\". Os integrantes devem descobrir: Quem cometeu o crime? Como ele cometeu o crime? Por que ele cometeu o crime? -- 36 of 37 --",
        "duration": "15-20 min",
        "participants": "4+",
        "age": "Livre",
        "materials": [
          "Bexiga",
          "papel",
          "lápis",
          "caneta."
        ],
        "steps": [
          "O narrador deve escrever uma história de suspense e mistério tendo obrigatoriamente uma vítima e diversos suspeitos. Após isso várias pistas que levam à resolução do mistério devem ser colocadas dentro de bexigas e escondidas em um local pré-determinado. Os participantes devem encontrar essas bexigas e levá-las para a \"Delegacia\", montada pelo narrador, e entregar as pistas para o \"Xerife\". Os integrantes devem descobrir: Quem cometeu o crime? Como ele cometeu o crime? Por que ele cometeu o crime? -- 36 of 37 --"
        ]
      }
    ]
  }
];
