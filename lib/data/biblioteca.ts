import { 
  RiCloudyLine, RiDropFill, RiTentLine, RiHome4Line, RiUserVoiceLine,
  RiMusicLine, RiFireLine, RiFlashlightLine, RiHandHeartLine
} from "@remixicon/react"

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
            "description": "Escolhe-se um participante para ser o lobo, e os outros contam at├® determinado n├║mero em um lugar designado como ÔÇ£casaÔÇØ. Enquanto todos contam o lobo se esconde, quando os outros participantes terminarem a contagem, saem a procura do lobo. Quando um participante o descobre, aproxima-se dizendo em voz alta ÔÇ£vejo um cordeiro cheio de l├úÔÇØ. Os outros participantes aproximam-se. O lobo permanece quieto at├® que quem o viu grita ÔÇ£vejo um lobo cheio de l├úÔÇØ, ent├úo o lobo sa├¡ra atr├ís dos participantes, quem for pego virar├í o lobo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Escolhe-se um participante para ser o lobo, e os outros contam at├® determinado n├║mero em um lugar designado como ÔÇ£casaÔÇØ. Enquanto todos contam o lobo se esconde, quando os outros participantes terminarem a contagem, saem a procura do lobo. Quando um participante o descobre, aproxima-se dizendo em voz alta ÔÇ£vejo um cordeiro cheio de l├úÔÇØ. Os outros participantes aproximam-se. O lobo permanece quieto at├® que quem o viu grita ÔÇ£vejo um lobo cheio de l├úÔÇØ, ent├úo o lobo sa├¡ra atr├ís dos participantes, quem for pego virar├í o lobo."
            ]
      },
      {
            "id": "pdf-3",
            "title": "Para direita e para esquerda",
            "description": "atividade para trabalhar a lateralidade com as crian├ºas, usando marca├º├Áes no ch├úo ou bambol├¬s, o professor falar├í ÔÇ£direitaÔÇØ ou ÔÇ£esquerdaÔÇØ e as crian├ºas seguir├úo os comandos do professor. Como varia├º├úo, o professor pode usar o som do apito exemplo: dois silvos direita, um silvo esquerda. Poder├í tamb├®m usar frente e tr├ís.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "bambol├¬s"
            ],
            "steps": [
                  "atividade para trabalhar a lateralidade com as crian├ºas, usando marca├º├Áes no ch├úo ou bambol├¬s, o professor falar├í ÔÇ£direitaÔÇØ ou ÔÇ£esquerdaÔÇØ e as crian├ºas seguir├úo os comandos do professor. Como varia├º├úo, o professor pode usar o som do apito exemplo: dois silvos direita, um silvo esquerda. Poder├í tamb├®m usar frente e tr├ís."
            ]
      },
      {
            "id": "pdf-4",
            "title": "Campo Minado",
            "description": "Deve-se organizar o espa├ºo com obst├ículos, a crian├ºa dever├í estar com os olhos vendados, e seguir as orienta├º├Áes de seu guia para ultrapassar esses obst├ículos sem encostar em nada, caso encoste volta para o in├¡cio.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "cones ou qualquer coisa que sirva como obst├ículo."
            ],
            "steps": [
                  "Deve-se organizar o espa├ºo com obst├ículos, a crian├ºa dever├í estar com os olhos vendados, e seguir as orienta├º├Áes de seu guia para ultrapassar esses obst├ículos sem encostar em nada, caso encoste volta para o in├¡cio."
            ]
      },
      {
            "id": "pdf-7",
            "title": "Circuitos",
            "description": "Circuitos psicomotores para trabalhar velocidade, lateralidade, coordena├º├úo das crian├ºas, pode ser montado a escolha do monitor.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "bambol├¬s",
                  "cones",
                  "cordas",
                  "bolas"
            ],
            "steps": [
                  "Circuitos psicomotores para trabalhar velocidade, lateralidade, coordena├º├úo das crian├ºas, pode ser montado a escolha do monitor."
            ]
      },
      {
            "id": "pdf-8",
            "title": "A sombra",
            "description": "As crian├ºas dever├úo ser divididas em duplas, e ao sinal do instrutor as duplas ir├úo caminhar pelo local, um da dupla far├í movimentos diversos que dever├í ser imitado pelo seu companheiro, ao pr├│ximo sinal, os participantes dever├úo trocar os papeis, o que era sombra passar├í a comandar e o outro ser├í a ÔÇ£sombraÔÇØ. Como varia├º├úo, o professor poder├í ir mandando juntar, trios, quartetos etc.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "As crian├ºas dever├úo ser divididas em duplas, e ao sinal do instrutor as duplas ir├úo caminhar pelo local, um da dupla far├í movimentos diversos que dever├í ser imitado pelo seu companheiro, ao pr├│ximo sinal, os participantes dever├úo trocar os papeis, o que era sombra passar├í a comandar e o outro ser├í a ÔÇ£sombraÔÇØ. Como varia├º├úo, o professor poder├í ir mandando juntar, trios, quartetos etc."
            ]
      },
      {
            "id": "pdf-9",
            "title": "Medusa",
            "description": "Uma crian├ºa ser├í escolhida para ser a ÔÇ£medusaÔÇØ, ela fiar├í posicionada em um determinado lugar virada de costas para os outros participantes que estar├úo afastados da ÔÇ£medusaÔÇØ. Eles dever├úo se aproximar da ÔÇ£medusaÔÇØ sem que ela veja nenhum movimento, e tentaram encost├í-la. A ÔÇ£medusaÔÇØ poder├í virar para olhar os participantes quantas vezes quiser e se ela vir algum movimento poder├í falar para o colega voltar ao lugar de in├¡cio. O participante que encostar na medusa, tomara o seu lugar. -- 3 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Uma crian├ºa ser├í escolhida para ser a ÔÇ£medusaÔÇØ, ela fiar├í posicionada em um determinado lugar virada de costas para os outros participantes que estar├úo afastados da ÔÇ£medusaÔÇØ. Eles dever├úo se aproximar da ÔÇ£medusaÔÇØ sem que ela veja nenhum movimento, e tentaram encost├í-la. A ÔÇ£medusaÔÇØ poder├í virar para olhar os participantes quantas vezes quiser e se ela vir algum movimento poder├í falar para o colega voltar ao lugar de in├¡cio. O participante que encostar na medusa, tomara o seu lugar. -- 3 of 37 --"
            ]
      },
      {
            "id": "pdf-10",
            "title": "Estatua Musical",
            "description": "Colocar uma m├║sica, e deixar as crian├ºas dan├ºarem do seu jeito no ritmo da m├║sica. Ao pausar a m├║sica as crian├ºas dever├úo parar em uma pose e voltar a se mexer quando a m├║sica voltar.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "m├║sica"
            ],
            "steps": [
                  "Colocar uma m├║sica, e deixar as crian├ºas dan├ºarem do seu jeito no ritmo da m├║sica. Ao pausar a m├║sica as crian├ºas dever├úo parar em uma pose e voltar a se mexer quando a m├║sica voltar."
            ]
      },
      {
            "id": "pdf-12",
            "title": "Pega-pega dos n├║meros",
            "description": "Ser├í formado um c├¡rculo, o monitor numerar├í cada participante de 1-5 (dependendo do n├║mero de participantes), ao sinal do monitor, o n├║mero chamado dever├í levantar-se e correr para o lado direito, assim todos tentaram pegar o colega da sua frente e fugir do colega que est├í atr├ís, poder├í apenas dar uma ou duas voltas, at├® chegar ao seu lugar de origem.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Ser├í formado um c├¡rculo, o monitor numerar├í cada participante de 1-5 (dependendo do n├║mero de participantes), ao sinal do monitor, o n├║mero chamado dever├í levantar-se e correr para o lado direito, assim todos tentaram pegar o colega da sua frente e fugir do colega que est├í atr├ís, poder├í apenas dar uma ou duas voltas, at├® chegar ao seu lugar de origem."
            ]
      },
      {
            "id": "pdf-13",
            "title": "Toca do coelho",
            "description": "Formar v├írios grupos de tr├¬s pessoas, sendo que dois participantes v├úo dar as m├úos simulando uma toca e o outro participante ├® o coelho que ficar├í dentro da toca, ao sinal do monitor, todos os coelhos devem trocar de toca, ao segundo sinal as tocas troaram de lugar. Quando o monitor falar em voz alta ÔÇ£ventaniaÔÇØ todos sa├¡ram do seu lugar e caminharam livres como se estivesse ventando. Quando o monitor falar ÔÇ£toca do coelhoÔÇØ, formam novamente grupos de tr├¬s. -- 4 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Formar v├írios grupos de tr├¬s pessoas, sendo que dois participantes v├úo dar as m├úos simulando uma toca e o outro participante ├® o coelho que ficar├í dentro da toca, ao sinal do monitor, todos os coelhos devem trocar de toca, ao segundo sinal as tocas troaram de lugar. Quando o monitor falar em voz alta ÔÇ£ventaniaÔÇØ todos sa├¡ram do seu lugar e caminharam livres como se estivesse ventando. Quando o monitor falar ÔÇ£toca do coelhoÔÇØ, formam novamente grupos de tr├¬s. -- 4 of 37 --"
            ]
      },
      {
            "id": "pdf-14",
            "title": "M├úos de cores",
            "description": "Escolhe-se um para ser o condutor da brincadeira. Forma-se um c├¡rculo com todos os participantes (pedir para tirar os t├¬nis). O condutor dar├í uma ordem como ÔÇ£m├úo direita no vermelhoÔÇØ, e os participantes tocar├úo com a m├úo direita na cor vermelha de um companheiro sem sair do c├¡rculo. Ao passar do jogo e monitor troca o condutor da brincadeira.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Escolhe-se um para ser o condutor da brincadeira. Forma-se um c├¡rculo com todos os participantes (pedir para tirar os t├¬nis). O condutor dar├í uma ordem como ÔÇ£m├úo direita no vermelhoÔÇØ, e os participantes tocar├úo com a m├úo direita na cor vermelha de um companheiro sem sair do c├¡rculo. Ao passar do jogo e monitor troca o condutor da brincadeira."
            ]
      },
      {
            "id": "pdf-15",
            "title": "Ca├ºa ao tesouro",
            "description": "O monitor ir├í esconder os objetos sem que as crian├ºas o vejam, ao seu sinal todos os participantes dever├úo sair a procura dos objetos, os que forem encontrados dever├úo ser entregues ao monitor. Ir mudando quem ir├í esconder.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "objetos pequenos para serem o tesouro"
            ],
            "steps": [
                  "O monitor ir├í esconder os objetos sem que as crian├ºas o vejam, ao seu sinal todos os participantes dever├úo sair a procura dos objetos, os que forem encontrados dever├úo ser entregues ao monitor. Ir mudando quem ir├í esconder."
            ]
      },
      {
            "id": "pdf-16",
            "title": "Dan├ºa das cadeiras",
            "description": "Organizar as cadeiras uma ao lado da outra, ao tocar a m├║sica as crian├ºas dever├úo andar em volta das cadeiras, no ritmo da m├║sica, quando a m├║sica parar dever├úo sentar-se na cadeira. Com o passar da brincadeira ir tirando as cadeiras de uma em uma, a crian├ºa que ficar em p├® sair├í da brincadeira.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "cadeiras ou bancos",
                  "m├║sica"
            ],
            "steps": [
                  "Organizar as cadeiras uma ao lado da outra, ao tocar a m├║sica as crian├ºas dever├úo andar em volta das cadeiras, no ritmo da m├║sica, quando a m├║sica parar dever├úo sentar-se na cadeira. Com o passar da brincadeira ir tirando as cadeiras de uma em uma, a crian├ºa que ficar em p├® sair├í da brincadeira."
            ]
      },
      {
            "id": "pdf-21",
            "title": "Corrida de saci",
            "description": "Ser├í demarcado uma linha de partida e uma outra de chegada, ao sinal do monitor todas as crian├ºas dever├úo sair pulando em um p├® s├│. A crian├ºa que colocar o p├® no ch├úo ser├í eliminada e ganhar├í quem chegar primeiro com um p├® s├│.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Ser├í demarcado uma linha de partida e uma outra de chegada, ao sinal do monitor todas as crian├ºas dever├úo sair pulando em um p├® s├│. A crian├ºa que colocar o p├® no ch├úo ser├í eliminada e ganhar├í quem chegar primeiro com um p├® s├│."
            ]
      },
      {
            "id": "pdf-23",
            "title": "Camale├úo",
            "description": "Uma crian├ºa ser├í escolhida para ser o camale├úo, ao sinal do monitor, os restantes das crian├ºas perguntaram para o ÔÇ£camale├úoÔÇØ qual ├® a cor, assim que a cor for dita as crian├ºas correram e encostaram em algo com a cor dita, quem for pego vira o camale├úo. -- 6 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Uma crian├ºa ser├í escolhida para ser o camale├úo, ao sinal do monitor, os restantes das crian├ºas perguntaram para o ÔÇ£camale├úoÔÇØ qual ├® a cor, assim que a cor for dita as crian├ºas correram e encostaram em algo com a cor dita, quem for pego vira o camale├úo. -- 6 of 37 --"
            ]
      },
      {
            "id": "pdf-24",
            "title": "A fila",
            "description": "Formar├úo uma corrente dando as m├úos, um participante ser├í escolhido para ser o condutor. O condutor dir├í algumas ordens como ÔÇ£a corrente se encolheÔÇØ e todos ir├úo se apertar para frenteÔÇØ ou ÔÇ£a corrente se alargaÔÇØ e todos se separam sem soltar as m├úos. Poder├í dar v├írias outras ordens como por exemplo ÔÇ£a corrente se agacha, saltaÔÇØ etc. Sempre mudar o condutor da brincadeira.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Formar├úo uma corrente dando as m├úos, um participante ser├í escolhido para ser o condutor. O condutor dir├í algumas ordens como ÔÇ£a corrente se encolheÔÇØ e todos ir├úo se apertar para frenteÔÇØ ou ÔÇ£a corrente se alargaÔÇØ e todos se separam sem soltar as m├úos. Poder├í dar v├írias outras ordens como por exemplo ÔÇ£a corrente se agacha, saltaÔÇØ etc. Sempre mudar o condutor da brincadeira."
            ]
      },
      {
            "id": "pdf-25",
            "title": "Travessia da Floresta",
            "description": "Tra├ºar no ch├úo um ret├óngulo bem grande (sendo a floresta). Dentro ficam tr├¬s participantes que s├úo os pegadores, fora ficam os demais, ├á vontade. Dado o sinal de in├¡cio, os jogadores que est├úo fora tentam cruzar o ret├óngulo, isto ├®, a \"floresta\", sem serem pegos. Os tr├¬s jogadores de dentro tentam pegar os outros \"forasteiros\" que cruzam a floresta de um lado para o outro. Quem for preso, passa a ajudar os pegadores.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Tra├ºar no ch├úo um ret├óngulo bem grande (sendo a floresta). Dentro ficam tr├¬s participantes que s├úo os pegadores, fora ficam os demais, ├á vontade. Dado o sinal de in├¡cio, os jogadores que est├úo fora tentam cruzar o ret├óngulo, isto ├®, a \"floresta\", sem serem pegos. Os tr├¬s jogadores de dentro tentam pegar os outros \"forasteiros\" que cruzam a floresta de um lado para o outro. Quem for preso, passa a ajudar os pegadores."
            ]
      },
      {
            "id": "pdf-26",
            "title": "Reizinho mandou",
            "description": "Uma crian├ºa ser├í escolhida para ser o ÔÇ£reizinhoÔÇØ que comandar├í a brincadeira. A crian├ºa determinada como reizinho dir├í ÔÇ£reizinho mandouÔÇØ e o restante dir├í ÔÇ£fazer o queÔÇØ, e o reizinho determinar├í a tarefa, como pular de um p├® s├│, imitar um animal entre outras. O monitor dever├í sempre trocar o comandante da brincadeira.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Uma crian├ºa ser├í escolhida para ser o ÔÇ£reizinhoÔÇØ que comandar├í a brincadeira. A crian├ºa determinada como reizinho dir├í ÔÇ£reizinho mandouÔÇØ e o restante dir├í ÔÇ£fazer o queÔÇØ, e o reizinho determinar├í a tarefa, como pular de um p├® s├│, imitar um animal entre outras. O monitor dever├í sempre trocar o comandante da brincadeira."
            ]
      },
      {
            "id": "pdf-27",
            "title": "Elefante Colorido",
            "description": "Uma crian├ºa ficara ao centro, sendo o ÔÇ£elefanteÔÇØ, essa crian├ºa falar├í ÔÇ£elefante coloridoÔÇØ e o restante dir├í ÔÇ£que corÔÇØ, e o elefante escolher├í uma cor. Se a crian├ºa possuir a cor dita poder├í passar pelo ÔÇ£elefanteÔÇØ sem ser pego, caso n├úo tenha ter├í que passar correndo, se a crian├ºa for pega ela vira o ÔÇ£elefanteÔÇØ.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Uma crian├ºa ficara ao centro, sendo o ÔÇ£elefanteÔÇØ, essa crian├ºa falar├í ÔÇ£elefante coloridoÔÇØ e o restante dir├í ÔÇ£que corÔÇØ, e o elefante escolher├í uma cor. Se a crian├ºa possuir a cor dita poder├í passar pelo ÔÇ£elefanteÔÇØ sem ser pego, caso n├úo tenha ter├í que passar correndo, se a crian├ºa for pega ela vira o ÔÇ£elefanteÔÇØ."
            ]
      },
      {
            "id": "pdf-29",
            "title": "Reino dos sacis",
            "description": "Em um canto do espa├ºo determinado para fazer a atividade, marcasse o \"pal├ício\", onde fica um jogador, o \"saci-rei\". Os demais \"sacis\" dispersam-se ├á vontade pelo campo. Ao sinal de in├¡cio, os sacis dirigem-se, pulando num p├® s├│, ao pal├ício real, para provocar o rei. De repente, este anuncia: \"O rei est├í zangado!\", saindo a persegui-los, tamb├®m aos pulos. Ele mesmo conduz ao pal├ício o primeiro que pega e o nomeia seu \"ajudante\". A brincadeira recome├ºa, tal como antes, saindo agora os dois, ap├│s novo aviso, em persegui├º├úo aos demais e assim por diante. O ├║ltimo apanhado ser├í o novo rei, na repeti├º├úo do jogo. Ningu├®m pode apoiar os dois p├®s no ch├úo, sob pena de ser aprisionado, exceto nos seguintes casos: a) quando o jogador estiver dentro do pal├ício; b) quando o jogador estiver cansado, devendo, por├®m, ficar parado num mesmo lugar, ocasi├úo em que poder├í ser apanhado. O jogador aprisionado ficar├í dentro do pal├ício, at├® outro ser preso, s├│ ent├úo podendo voltar ao lugar onde estava antes.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Em um canto do espa├ºo determinado para fazer a atividade, marcasse o \"pal├ício\", onde fica um jogador, o \"saci-rei\". Os demais \"sacis\" dispersam-se ├á vontade pelo campo. Ao sinal de in├¡cio, os sacis dirigem-se, pulando num p├® s├│, ao pal├ício real, para provocar o rei. De repente, este anuncia: \"O rei est├í zangado!\", saindo a persegui-los, tamb├®m aos pulos. Ele mesmo conduz ao pal├ício o primeiro que pega e o nomeia seu \"ajudante\". A brincadeira recome├ºa, tal como antes, saindo agora os dois, ap├│s novo aviso, em persegui├º├úo aos demais e assim por diante. O ├║ltimo apanhado ser├í o novo rei, na repeti├º├úo do jogo. Ningu├®m pode apoiar os dois p├®s no ch├úo, sob pena de ser aprisionado, exceto nos seguintes casos: a) quando o jogador estiver dentro do pal├ício; b) quando o jogador estiver cansado, devendo, por├®m, ficar parado num mesmo lugar, ocasi├úo em que poder├í ser apanhado. O jogador aprisionado ficar├í dentro do pal├ício, at├® outro ser preso, s├│ ent├úo podendo voltar ao lugar onde estava antes."
            ]
      },
      {
            "id": "pdf-30",
            "title": "Congelado",
            "description": "Um tipo de pega-pega. Quem for pego, deve ficar parado no lugar onde foi tocado, at├® que algu├®m que ainda n├úo foi pego toque nele, o libertando.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Um tipo de pega-pega. Quem for pego, deve ficar parado no lugar onde foi tocado, at├® que algu├®m que ainda n├úo foi pego toque nele, o libertando."
            ]
      },
      {
            "id": "pdf-33",
            "title": "Pega-pega espelho",
            "description": "Pega-pega comum, quando a crian├ºa for pega dever├í fazer uma pose, e para ser salva outra crian├ºa tem que parar na frente ela e fazer a pose igual.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Pega-pega comum, quando a crian├ºa for pega dever├í fazer uma pose, e para ser salva outra crian├ºa tem que parar na frente ela e fazer a pose igual."
            ]
      },
      {
            "id": "pdf-34",
            "title": "C├®u Terra",
            "description": "Coloca-se uma corda no ch├úo, um lado ├® o c├®u e o outro ├® a terra. Quando o monitor falar c├®u as crian├ºas pulam para o c├®u, quando o monitor falar terra as crian├ºas pulam para terra. O monitor poder├í falar mais r├ípido ou repetir a mesma palavra.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "uma corda"
            ],
            "steps": [
                  "Coloca-se uma corda no ch├úo, um lado ├® o c├®u e o outro ├® a terra. Quando o monitor falar c├®u as crian├ºas pulam para o c├®u, quando o monitor falar terra as crian├ºas pulam para terra. O monitor poder├í falar mais r├ípido ou repetir a mesma palavra."
            ]
      },
      {
            "id": "pdf-35",
            "title": "Cruzando o Rio",
            "description": "cada crian├ºa receber├í 3 folhas de sulfite. Eles dever├úo colocar o primeiro papel no ch├úo, pisam nele e colocam o segundo na sua frente, quando colocam o terceiro, dever├úo recolher o primeiro para repetir o processo. Para que os pequenos entrem na brincadeira, fale que o ch├úo ├® uma correnteza de ├ígua e para que eles consigam passar dever├úo que passar por cima dos papeis.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "tr├¬s folhas de sulfite por crian├ºa"
            ],
            "steps": [
                  "cada crian├ºa receber├í 3 folhas de sulfite. Eles dever├úo colocar o primeiro papel no ch├úo, pisam nele e colocam o segundo na sua frente, quando colocam o terceiro, dever├úo recolher o primeiro para repetir o processo. Para que os pequenos entrem na brincadeira, fale que o ch├úo ├® uma correnteza de ├ígua e para que eles consigam passar dever├úo que passar por cima dos papeis."
            ]
      },
      {
            "id": "pdf-38",
            "title": "O Feiticeiro e suas est├ítuas",
            "description": "Os participantes ficam de p├®, dispersos em uma ├írea delimitada para a brincadeira. Um volunt├írio ser├í o \"feiticeiro\" que perseguir├í os demais. Ao sinal do monitor, inicia-se a persegui├º├úo, e aquele que for tocado ficar├í \"enfeiti├ºado\": im├│vel com as pernas afastadas, representando uma \"est├ítua\". Os outros companheiros poder├úo passar por baixo das pernas das \"est├ítuas\", salvando-as do \"feiti├ºo\". Depois de algum tempo, o \"feiticeiro\" dever├í ser substitu├¡do.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Os participantes ficam de p├®, dispersos em uma ├írea delimitada para a brincadeira. Um volunt├írio ser├í o \"feiticeiro\" que perseguir├í os demais. Ao sinal do monitor, inicia-se a persegui├º├úo, e aquele que for tocado ficar├í \"enfeiti├ºado\": im├│vel com as pernas afastadas, representando uma \"est├ítua\". Os outros companheiros poder├úo passar por baixo das pernas das \"est├ítuas\", salvando-as do \"feiti├ºo\". Depois de algum tempo, o \"feiticeiro\" dever├í ser substitu├¡do."
            ]
      },
      {
            "id": "pdf-40",
            "title": "N├úo me fa├ºa rir",
            "description": "Uma crian├ºa deve tentar fazer a outra rir (fazendo careta, cosquinha entre outros), enquanto a outra deve tentar segurar a risada.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Uma crian├ºa deve tentar fazer a outra rir (fazendo careta, cosquinha entre outros), enquanto a outra deve tentar segurar a risada."
            ]
      },
      {
            "id": "pdf-42",
            "title": "Cauda do drag├úo",
            "description": "Todas as crian├ºas ficam em p├®, em coluna com as m├úos na cintura um do outro, formando um drag├úo. O primeiro integrante da fila, representando a cabe├ºa do drag├úo, ter├í como objetivo pegar o ├║ltimo da fila, a cauda. Ao sinal do monitor, o \"drag├úo\" passar├í a se movimentar, correndo, sob o comando da cabe├ºa que tentar├í pegar a cauda. Esta, por sua vez, far├í movimentos no sentido de evitar que isso aconte├ºa. Caso consiga pegar a cauda, a crian├ºa que a representava passa para frente da fila, se tornado a cabe├ºa do drag├úo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Todas as crian├ºas ficam em p├®, em coluna com as m├úos na cintura um do outro, formando um drag├úo. O primeiro integrante da fila, representando a cabe├ºa do drag├úo, ter├í como objetivo pegar o ├║ltimo da fila, a cauda. Ao sinal do monitor, o \"drag├úo\" passar├í a se movimentar, correndo, sob o comando da cabe├ºa que tentar├í pegar a cauda. Esta, por sua vez, far├í movimentos no sentido de evitar que isso aconte├ºa. Caso consiga pegar a cauda, a crian├ºa que a representava passa para frente da fila, se tornado a cabe├ºa do drag├úo."
            ]
      },
      {
            "id": "pdf-43",
            "title": "O gafanhoto e a r├ú",
            "description": "Fa├ºa um c├¡rculo no ch├úo para que caiba todos os participantes e sobre espa├ºo. Um ser├í a ÔÇ£r├úÔÇØ e os outros ser├úo os ÔÇ£gafanhotosÔÇØ que ter├úo que fugir da ÔÇ£r├úÔÇØ. A ÔÇ£r├úÔÇØ dever├í ficar agachada e os gafanhotos dever├úo fugir pulando de um p├® s├│, quem for pego dever├í virar ÔÇ£r├úÔÇØ ajudando a pegar os outros.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "1 giz"
            ],
            "steps": [
                  "Fa├ºa um c├¡rculo no ch├úo para que caiba todos os participantes e sobre espa├ºo. Um ser├í a ÔÇ£r├úÔÇØ e os outros ser├úo os ÔÇ£gafanhotosÔÇØ que ter├úo que fugir da ÔÇ£r├úÔÇØ. A ÔÇ£r├úÔÇØ dever├í ficar agachada e os gafanhotos dever├úo fugir pulando de um p├® s├│, quem for pego dever├í virar ÔÇ£r├úÔÇØ ajudando a pegar os outros."
            ]
      },
      {
            "id": "pdf-44",
            "title": "Cuidado que o gato pega",
            "description": "Um ser├í o ÔÇ£ratoÔÇØ, que segurar├í o t├¬nis na m├úo, o os outros participantes dever├úo sentar-se no ch├úo em um c├¡rculo. O rato dever├í correr e deixar o t├¬nis atr├ís de algu├®m, este ser├í o gato, que correr├í atr├ís do rato, o rato dever├í sentar-se no lugar do gato, que virar├í automaticamente o rato e assim sucessivamente.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "um t├¬nis ou um objeto do mesmo tamanho"
            ],
            "steps": [
                  "Um ser├í o ÔÇ£ratoÔÇØ, que segurar├í o t├¬nis na m├úo, o os outros participantes dever├úo sentar-se no ch├úo em um c├¡rculo. O rato dever├í correr e deixar o t├¬nis atr├ís de algu├®m, este ser├í o gato, que correr├í atr├ís do rato, o rato dever├í sentar-se no lugar do gato, que virar├í automaticamente o rato e assim sucessivamente."
            ]
      },
      {
            "id": "pdf-45",
            "title": "Reino Perdido",
            "description": "No reino h├í v├írias princesas perdidas (escondidas), um bruxo(a) e uma dama ou cavalheiro. A dama ou cavalheiro tem que encontrar as princesas e levar para o reino antes do bruxo, que levar├í para o seu esconderijo. Vence quem tiver mais princesas capturadas. Resumindo s├úo 2 pegadores e o restante se esconde. -- 11 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "No reino h├í v├írias princesas perdidas (escondidas), um bruxo(a) e uma dama ou cavalheiro. A dama ou cavalheiro tem que encontrar as princesas e levar para o reino antes do bruxo, que levar├í para o seu esconderijo. Vence quem tiver mais princesas capturadas. Resumindo s├úo 2 pegadores e o restante se esconde. -- 11 of 37 --"
            ]
      },
      {
            "id": "pdf-46",
            "title": "O monstro faminto",
            "description": "Desenha-se no ch├úo um monstro com a oca aberta, os participantes dever├úo ficar no corpo do monstro, ao sinal do monitor os participantes dever├úo se empurrar para que algu├®m pare na boca do monstro, quem entrar na boca do monstro dever├í tentar puxar os outros amigos at├® que todos caiam nela.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "1 giz"
            ],
            "steps": [
                  "Desenha-se no ch├úo um monstro com a oca aberta, os participantes dever├úo ficar no corpo do monstro, ao sinal do monitor os participantes dever├úo se empurrar para que algu├®m pare na boca do monstro, quem entrar na boca do monstro dever├í tentar puxar os outros amigos at├® que todos caiam nela."
            ]
      },
      {
            "id": "pdf-48",
            "title": "As cores",
            "description": "Um ser├í o Pegador, que dir├í em voz alta alguma cor, o restante devera correr e encostar na cor dita, quem conseguir estar├í salvo, se o pegador pegar algu├®m, o mesmo vira o pegador.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "Um ser├í o Pegador, que dir├í em voz alta alguma cor, o restante devera correr e encostar na cor dita, quem conseguir estar├í salvo, se o pegador pegar algu├®m, o mesmo vira o pegador."
            ]
      },
      {
            "id": "pdf-49",
            "title": "Bruxa",
            "description": "Um dos participantes ├® escolhido para ser a bruxa. Este s├│ inicia a persegui├º├úo ap├│s haver contado at├® vinte ou trinta (conforme o estipulado antes da brincadeira). Quando a Bruxa tocar com a m├úo em algu├®m, dever├í dizer: Bruxa. Este ser├í seu substituto. O grupo pode combinar um local par ser o ferrolho. Variante: Quando os que est├úo sendo perseguidos se cansam ou se machucam, gritam: Isola (ou Tempo ou Ara). Querendo, eles podem retornar ├á brincadeira. O pedido de isola n├úo pode ser feito quando o jogador estiver sendo apanhado pela Bruxa.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "Um dos participantes ├® escolhido para ser a bruxa. Este s├│ inicia a persegui├º├úo ap├│s haver contado at├® vinte ou trinta (conforme o estipulado antes da brincadeira). Quando a Bruxa tocar com a m├úo em algu├®m, dever├í dizer: Bruxa. Este ser├í seu substituto. O grupo pode combinar um local par ser o ferrolho. Variante: Quando os que est├úo sendo perseguidos se cansam ou se machucam, gritam: Isola (ou Tempo ou Ara). Querendo, eles podem retornar ├á brincadeira. O pedido de isola n├úo pode ser feito quando o jogador estiver sendo apanhado pela Bruxa."
            ]
      },
      {
            "id": "pdf-50",
            "title": "Em busca do tesouro",
            "description": "Cortar a cartolina em v├írios peda├ºos e em cores diferentes, estipular pontos para cada cor e esconder em um ambiente. Depois falar para as crian├ºas procurarem em certo tempo, ganha quem fizer mais pontos. Espelho (a partir dos 3 anos) -- 12 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "Cartolina colorida",
                  "quadro negro"
            ],
            "steps": [
                  "Cortar a cartolina em v├írios peda├ºos e em cores diferentes, estipular pontos para cada cor e esconder em um ambiente. Depois falar para as crian├ºas procurarem em certo tempo, ganha quem fizer mais pontos. Espelho (a partir dos 3 anos) -- 12 of 37 --"
            ]
      },
      {
            "id": "pdf-51",
            "title": "Combina├º├úo de po├º├úo",
            "description": "Espalhar os bambol├¬s e cones pelo ch├úo, trazer o l├║dico em dizer que os bambol├¬s s├úo as \"casas/tocas\" dos magos e os cones as po├º├Áes. A brincadeira consiste em os magos sa├¡rem de suas casas e resgatarem as po├º├Áes sem ser pego pelo monstro (dento da casa n├úo ├® pego), caso seja pego dever├í devolver todas as po├º├Áes que tiver para serem resgatadas novamente. Ap├│s resgatar todas as po├º├Áes deve fazer a combina├º├úo entre elas, promovendo a coopera├º├úo entre todos, as po├º├Áes precisam estar todas juntas com apenas um mago e serem da mesma cor, se caso forem pegas com todas as po├º├Áes o monstro ganha.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "bambol├¬s",
                  "cones coloridos"
            ],
            "steps": [
                  "Espalhar os bambol├¬s e cones pelo ch├úo, trazer o l├║dico em dizer que os bambol├¬s s├úo as \"casas/tocas\" dos magos e os cones as po├º├Áes. A brincadeira consiste em os magos sa├¡rem de suas casas e resgatarem as po├º├Áes sem ser pego pelo monstro (dento da casa n├úo ├® pego), caso seja pego dever├í devolver todas as po├º├Áes que tiver para serem resgatadas novamente. Ap├│s resgatar todas as po├º├Áes deve fazer a combina├º├úo entre elas, promovendo a coopera├º├úo entre todos, as po├º├Áes precisam estar todas juntas com apenas um mago e serem da mesma cor, se caso forem pegas com todas as po├º├Áes o monstro ganha."
            ]
      },
      {
            "id": "pdf-53",
            "title": "Chefe Comanda",
            "description": "As crian├ºas colocam-se em fileira; em posi├º├úo oposta, fica o chefe ou mestre. Inicia-se o di├ílogo entre o chefe e as crian├ºas: Chefe: Boca de forno. Crian├ºas: Forno. Chefe: Tirar um bolo. Crian├ºas: Bolo. Chefe: Fareis tudo o que o mestre mandar? Crian├ºas: Faremos todos. Seguem-se as ordens do mestre. Geralmente, elas consistem em coisas simples como: andar x passos, bater palmas, dar pulos, etc. A escolha do mestre ou chefe ├® feita atrav├®s de sorteio. -- 13 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [],
            "steps": [
                  "As crian├ºas colocam-se em fileira; em posi├º├úo oposta, fica o chefe ou mestre. Inicia-se o di├ílogo entre o chefe e as crian├ºas: Chefe: Boca de forno. Crian├ºas: Forno. Chefe: Tirar um bolo. Crian├ºas: Bolo. Chefe: Fareis tudo o que o mestre mandar? Crian├ºas: Faremos todos. Seguem-se as ordens do mestre. Geralmente, elas consistem em coisas simples como: andar x passos, bater palmas, dar pulos, etc. A escolha do mestre ou chefe ├® feita atrav├®s de sorteio. -- 13 of 37 --"
            ]
      },
      {
            "id": "pdf-54",
            "title": "Bal├úo Fuj├úo",
            "description": "Definir um lugar de largada e outro de chegada. Cada crian├ºa ter├í uma bexiga e um peda├ºo de papel├úo. As crian├ºas colocar├úo o bal├úo no ch├úo e ir├úo aban├í-lo at├® a linha de chegada.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "uma bexiga",
                  "um papel├úo"
            ],
            "steps": [
                  "Definir um lugar de largada e outro de chegada. Cada crian├ºa ter├í uma bexiga e um peda├ºo de papel├úo. As crian├ºas colocar├úo o bal├úo no ch├úo e ir├úo aban├í-lo at├® a linha de chegada."
            ]
      },
      {
            "id": "pdf-56",
            "title": "Caixa de sensa├º├Áes",
            "description": "A caixa dever├í ter um furo no meio para que as crian├ºas coloquem a m├úo. Dentro da caixa dever├í ter algum objeto. A crian├ºa dever├í estar vendada, colocara a m├úo na caixa e tentar├í descobrir qual ├® o objeto.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "Caixa de sapato ou qualquer outra",
                  "objetos variados."
            ],
            "steps": [
                  "A caixa dever├í ter um furo no meio para que as crian├ºas coloquem a m├úo. Dentro da caixa dever├í ter algum objeto. A crian├ºa dever├í estar vendada, colocara a m├úo na caixa e tentar├í descobrir qual ├® o objeto."
            ]
      },
      {
            "id": "pdf-76",
            "title": "Quem tem medo do mico preto?",
            "description": "O mico preto fica no meio da quadra, e os outros alunos ficam na linha de fundo da quadra. O mico preto chama duas vezes os ca├ºadores: ÔÇ£Quem tem medo do mico pretoÔÇØ Ca├ºadores respondem: Eu que n├úo... E neste momento o mico preto tem de pegar os ca├ºadores de mico preto. Quem for pego vira mico e ajuda na captura dos ca├ºadores.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "O mico preto fica no meio da quadra, e os outros alunos ficam na linha de fundo da quadra. O mico preto chama duas vezes os ca├ºadores: ÔÇ£Quem tem medo do mico pretoÔÇØ Ca├ºadores respondem: Eu que n├úo... E neste momento o mico preto tem de pegar os ca├ºadores de mico preto. Quem for pego vira mico e ajuda na captura dos ca├ºadores."
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
            "description": "V├írios bambol├¬s devem ser colocados em c├¡rculo com um participante dentro de cada um. Os integrantes devem obedecer aos comandos (para frente, para tr├ís, para a esquerda e para a direita). Vence quem conseguir ficar no c├¡rculo por ├║ltimo. -- 19 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Bambol├¬s ou Giz."
            ],
            "steps": [
                  "V├írios bambol├¬s devem ser colocados em c├¡rculo com um participante dentro de cada um. Os integrantes devem obedecer aos comandos (para frente, para tr├ís, para a esquerda e para a direita). Vence quem conseguir ficar no c├¡rculo por ├║ltimo. -- 19 of 37 --"
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
            "description": "As crian├ºas sentam-se em roda, o monitor falar├í no ouvido de uma crian├ºa, a mesma dever├í passar a frase escutada para o colega do lado e assim por diante, at├® chegar no primeiro participante, o objetivo ├® que a frase chegue igual at├® o primeiro, mas pode acontecer da frase ser escutada diferente.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [],
            "steps": [
                  "As crian├ºas sentam-se em roda, o monitor falar├í no ouvido de uma crian├ºa, a mesma dever├í passar a frase escutada para o colega do lado e assim por diante, at├® chegar no primeiro participante, o objetivo ├® que a frase chegue igual at├® o primeiro, mas pode acontecer da frase ser escutada diferente."
            ]
      },
      {
            "id": "pdf-67",
            "title": "J├│quei p├│ coletivo",
            "description": "Forma-se duas equipes, coloca-se uma equipe de frente para a outra, ao primeiro sinal do monitor, as equipes se re├║nem e decidem se v├úo jogar pedra, papel ou tesoura, ao segundo sinal do monitor as equipes viram-se uma de frente para a outra e jogam o que escolheram. A cada rodada marcasse um ponto para a equipe que ganha a partida. Ganha a equipe que fizer 10 pontos primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Forma-se duas equipes, coloca-se uma equipe de frente para a outra, ao primeiro sinal do monitor, as equipes se re├║nem e decidem se v├úo jogar pedra, papel ou tesoura, ao segundo sinal do monitor as equipes viram-se uma de frente para a outra e jogam o que escolheram. A cada rodada marcasse um ponto para a equipe que ganha a partida. Ganha a equipe que fizer 10 pontos primeiro."
            ]
      },
      {
            "id": "pdf-71",
            "title": "Sardinha",
            "description": "Uma pessoa se esconde, e todas as outras a procuram. Sempre que algu├®m achar a crian├ºa que est├í escondida, dever├í se esconder junto dela. A brincadeira acaba quando todos encontram o escondido. Quem encontrou primeiro pode se esconder na pr├│xima rodada.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Uma pessoa se esconde, e todas as outras a procuram. Sempre que algu├®m achar a crian├ºa que est├í escondida, dever├í se esconder junto dela. A brincadeira acaba quando todos encontram o escondido. Quem encontrou primeiro pode se esconder na pr├│xima rodada."
            ]
      },
      {
            "id": "pdf-102",
            "title": "N├│ Maluco",
            "description": "Faz-se a roda e todos estendem os bra├ºos para frente e ao sinal do monitor, a roda se fecha e cada pessoa deve segurar duas outras m├úos (seja de quem for). Cada m├úo segura (uma) outra, ou seja, uma m├úo n├úo pode estar segurando outras duas por exemplo. O Objetivo ├® desatar o n├│ que se forma, sem soltar em momento algum as m├úos. -- 26 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "Faz-se a roda e todos estendem os bra├ºos para frente e ao sinal do monitor, a roda se fecha e cada pessoa deve segurar duas outras m├úos (seja de quem for). Cada m├úo segura (uma) outra, ou seja, uma m├úo n├úo pode estar segurando outras duas por exemplo. O Objetivo ├® desatar o n├│ que se forma, sem soltar em momento algum as m├úos. -- 26 of 37 --"
            ]
      },
      {
            "id": "pdf-121",
            "title": "Cidade dorme",
            "description": "O monitor escrever├í nos papeis ÔÇ£assassino, psicopata, anjo, detetive e v├¡timaÔÇØ (dependendo de quantas pessoas tiver mais de uma v├¡tima). Sentados em c├¡rculo, o monitor distribuir├í os papeis dobrados sem que os participantes vejam, cada um tirar├í o seu e ver├í qual personagem ├® e devolver├í o papel para o professor. O monitor falar├í ÔÇ£cidade dormeÔÇØ e todos fecharam o olho. Em seguida o monitor chamara o personagem assassino, que abrir├í o olho, e o restante continuar├í de olho fechado, e perguntar├í ÔÇ£quem voc├¬ quer matarÔÇØ e o participante apontara para quem, ou far├í um movimento sem que os outros percebam. Ap├│s o assassino chamara o psicopata e far├í a mesma pergunta, ap├│s o assassino, chamar├í o anjo e perguntar├í ÔÇ£quem voc├¬ quer protegerÔÇØ e o anjo mostrar├í quem sem fazer barulho ou movimentos bruscos. Ap├│s o anjo, chamar├í o detetive e perguntar├í quem ele acha que s├úo o assassino e o psicopata. Ap├│s todos serem chamados o monitor falar├í ÔÇ£cidade pode acordarÔÇØ e falar├í as pessoas que ÔÇ£morreramÔÇØ, ou seja, est├úo fora do jogo. Em seguida ser├í feito uma vota├º├úo entre todos para eliminar mais um participante. O jogo acabar├í quando a maioria do lado do bem morrer (anjo, detetive e v├¡tima) ou o lado do mal (assassino e psicopata) Obs.: O psicopata n├úo morre quando a cidade estiver dormindo, s├│ na vota├º├úo, e s├│ pode falar o seu personagem ao fim do jogo. E quem morrer com a cidade dormindo, poder├í votar ao final da rodada em que morreu. -- 31 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "10+ anos",
            "materials": [
                  "papel",
                  "caneta"
            ],
            "steps": [
                  "O monitor escrever├í nos papeis ÔÇ£assassino, psicopata, anjo, detetive e v├¡timaÔÇØ (dependendo de quantas pessoas tiver mais de uma v├¡tima). Sentados em c├¡rculo, o monitor distribuir├í os papeis dobrados sem que os participantes vejam, cada um tirar├í o seu e ver├í qual personagem ├® e devolver├í o papel para o professor. O monitor falar├í ÔÇ£cidade dormeÔÇØ e todos fecharam o olho. Em seguida o monitor chamara o personagem assassino, que abrir├í o olho, e o restante continuar├í de olho fechado, e perguntar├í ÔÇ£quem voc├¬ quer matarÔÇØ e o participante apontara para quem, ou far├í um movimento sem que os outros percebam. Ap├│s o assassino chamara o psicopata e far├í a mesma pergunta, ap├│s o assassino, chamar├í o anjo e perguntar├í ÔÇ£quem voc├¬ quer protegerÔÇØ e o anjo mostrar├í quem sem fazer barulho ou movimentos bruscos. Ap├│s o anjo, chamar├í o detetive e perguntar├í quem ele acha que s├úo o assassino e o psicopata. Ap├│s todos serem chamados o monitor falar├í ÔÇ£cidade pode acordarÔÇØ e falar├í as pessoas que ÔÇ£morreramÔÇØ, ou seja, est├úo fora do jogo. Em seguida ser├í feito uma vota├º├úo entre todos para eliminar mais um participante. O jogo acabar├í quando a maioria do lado do bem morrer (anjo, detetive e v├¡tima) ou o lado do mal (assassino e psicopata) Obs.: O psicopata n├úo morre quando a cidade estiver dormindo, s├│ na vota├º├úo, e s├│ pode falar o seu personagem ao fim do jogo. E quem morrer com a cidade dormindo, poder├í votar ao final da rodada em que morreu. -- 31 of 37 --"
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
            "description": "O grupo ├® dividido em dois, os integrantes de um dos times penduram um peda├ºo de fita na parte de tr├ís da cal├ºa ou bermuda, eles ser├úo fugitivos. Ao sinal do mestre, os fugitivos correm tentando impedir que as crian├ºas do time advers├írio peguem suas fitas, quando todos os rabos forem arrancados, as equipes trocam os pap├®is, quem era pegador vira fugitivo. -- 8 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "O grupo ├® dividido em dois, os integrantes de um dos times penduram um peda├ºo de fita na parte de tr├ís da cal├ºa ou bermuda, eles ser├úo fugitivos. Ao sinal do mestre, os fugitivos correm tentando impedir que as crian├ºas do time advers├írio peguem suas fitas, quando todos os rabos forem arrancados, as equipes trocam os pap├®is, quem era pegador vira fugitivo. -- 8 of 37 --"
            ]
      },
      {
            "id": "pdf-36",
            "title": "Ca├ºa Palitos",
            "description": "Cada crian├ºa receber├í tr├¬s palitos, ao sinal do monitor as crian├ºas come├ºam um pega-pega entre elas, todas s├úo o pegador, quem for pego dever├í disputar pedra papel ou tesoura, quem ganhar pega um palito de quem perdeu e assim por diante. Ganha quem ficar com mais palito no final. -- 9 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "Palitos"
            ],
            "steps": [
                  "Cada crian├ºa receber├í tr├¬s palitos, ao sinal do monitor as crian├ºas come├ºam um pega-pega entre elas, todas s├úo o pegador, quem for pego dever├í disputar pedra papel ou tesoura, quem ganhar pega um palito de quem perdeu e assim por diante. Ganha quem ficar com mais palito no final. -- 9 of 37 --"
            ]
      },
      {
            "id": "pdf-58",
            "title": "Letra Pegadora",
            "description": "Os participantes estar├úo espalhados pela quadra caminhado, quando o monitor falar uma letra, os participantes que tiver o nome que comece com a letra falada ser├úo o pegador, quem for pego dever├í ficar abaixado, podendo ser salvo se algum colega o encostar. O monitor sempre falar├í letras diferentes para que troque o pegador. -- 14 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Os participantes estar├úo espalhados pela quadra caminhado, quando o monitor falar uma letra, os participantes que tiver o nome que comece com a letra falada ser├úo o pegador, quem for pego dever├í ficar abaixado, podendo ser salvo se algum colega o encostar. O monitor sempre falar├í letras diferentes para que troque o pegador. -- 14 of 37 --"
            ]
      },
      {
            "id": "pdf-61",
            "title": "Killer",
            "description": "escrever num papel a inicial K (de killer), em outro D (de detetive) e os outros com o V (de v├¡tima) ÔÇô some todos os participantes e subtraia dois para saber quantas v├¡timas o jogo ter├í. Misture e deixe cada crian├ºa pegar um papel sem saber o que ├®. O ÔÇ£killerÔÇØ precisa ÔÇ£matarÔÇØ o maior n├║mero de v├¡timas e, para isso, ele deve piscar discretamente para as pessoas. Quando as v├¡timas forem atingidas, elas devem dizer ÔÇ£morriÔÇØ e abaixar a cabe├ºa. Caso o detetive perceba as piscadas, ele deve dizer ao killer: ÔÇ£Preso em nome da leiÔÇØ.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "Papel",
                  "caneta. (Ter no m├íximo 5 crian├ºas)"
            ],
            "steps": [
                  "escrever num papel a inicial K (de killer), em outro D (de detetive) e os outros com o V (de v├¡tima) ÔÇô some todos os participantes e subtraia dois para saber quantas v├¡timas o jogo ter├í. Misture e deixe cada crian├ºa pegar um papel sem saber o que ├®. O ÔÇ£killerÔÇØ precisa ÔÇ£matarÔÇØ o maior n├║mero de v├¡timas e, para isso, ele deve piscar discretamente para as pessoas. Quando as v├¡timas forem atingidas, elas devem dizer ÔÇ£morriÔÇØ e abaixar a cabe├ºa. Caso o detetive perceba as piscadas, ele deve dizer ao killer: ÔÇ£Preso em nome da leiÔÇØ."
            ]
      },
      {
            "id": "pdf-63",
            "title": "PACMAN humano",
            "description": "Pega-pega na quadra, por├®m s├│ ├® permitido andar por cima das linhas da quadra. O \"pacman\" (pegador) tamb├®m dever├í andar apenas pelas linhas. Quem for pego, dever├í sentar no local exato onde foi pego e servir├í de obst├ículo para quem est├í fugindo, mas N├âO para o \"pacman\", ou seja, o pegador pode pular as pessoas que foram pegas por ele e est├úo sentadas no ch├úo, mas os fugitivos n├úo podem pular esses obst├ículos. Quem for o ├║ltimo a ser pego ser├í o vencedor.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Pega-pega na quadra, por├®m s├│ ├® permitido andar por cima das linhas da quadra. O \"pacman\" (pegador) tamb├®m dever├í andar apenas pelas linhas. Quem for pego, dever├í sentar no local exato onde foi pego e servir├í de obst├ículo para quem est├í fugindo, mas N├âO para o \"pacman\", ou seja, o pegador pode pular as pessoas que foram pegas por ele e est├úo sentadas no ch├úo, mas os fugitivos n├úo podem pular esses obst├ículos. Quem for o ├║ltimo a ser pego ser├í o vencedor."
            ]
      },
      {
            "id": "pdf-64",
            "title": "Gato e Rato",
            "description": "Todos estar├úo espalhados pelo espa├ºo sentados com as pernas estendidas. O pegador ser├í o ÔÇ£GatoÔÇØ e o fugitivo ├® o ÔÇ£RatoÔÇØ. Ao sinal do monitor come├ºa a brincadeira, o ÔÇ£RatoÔÇØ deve fugir e o ÔÇ£GatoÔÇØ deve peg├í-lo. Quando o Rato estiver fugindo e encostar na cabe├ºa de algu├®m que estiver sentado, essa pessoa vai levantar e virar o ÔÇ£GatoÔÇØ ou seja o pegador.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Todos estar├úo espalhados pelo espa├ºo sentados com as pernas estendidas. O pegador ser├í o ÔÇ£GatoÔÇØ e o fugitivo ├® o ÔÇ£RatoÔÇØ. Ao sinal do monitor come├ºa a brincadeira, o ÔÇ£RatoÔÇØ deve fugir e o ÔÇ£GatoÔÇØ deve peg├í-lo. Quando o Rato estiver fugindo e encostar na cabe├ºa de algu├®m que estiver sentado, essa pessoa vai levantar e virar o ÔÇ£GatoÔÇØ ou seja o pegador."
            ]
      },
      {
            "id": "pdf-73",
            "title": "Pegador com Aro",
            "description": "As crian├ºas dever├úo se movimentar livremente pelo local e ao sinal do professor, um aluno determinado dever├í come├ºar a correr, estando de posse de um bambol├¬. Assim que conseguir se aproximar de um colega, dever├í ÔÇ£peg├í-loÔÇØ para isso dever├í lan├ºar o bambol├¬, a seguir, este dever├í pegar outro bambol├¬, e juntos, dever├úo sair em buscar de outro colega, que dever├í ser ÔÇ£pegoÔÇØ da mesma forma, a cada aluno ÔÇ£pegoÔÇØ, a coluna de pegadores dever├í ir aumentando, e dever├úo correr tendo em cada extremidade, um aluno de posse de um bambol├¬, com o qual dever├í tentar ÔÇ£pegarÔÇØ um outro colega.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "Bambol├¬s"
            ],
            "steps": [
                  "As crian├ºas dever├úo se movimentar livremente pelo local e ao sinal do professor, um aluno determinado dever├í come├ºar a correr, estando de posse de um bambol├¬. Assim que conseguir se aproximar de um colega, dever├í ÔÇ£peg├í-loÔÇØ para isso dever├í lan├ºar o bambol├¬, a seguir, este dever├í pegar outro bambol├¬, e juntos, dever├úo sair em buscar de outro colega, que dever├í ser ÔÇ£pegoÔÇØ da mesma forma, a cada aluno ÔÇ£pegoÔÇØ, a coluna de pegadores dever├í ir aumentando, e dever├úo correr tendo em cada extremidade, um aluno de posse de um bambol├¬, com o qual dever├í tentar ÔÇ£pegarÔÇØ um outro colega."
            ]
      },
      {
            "id": "pdf-81",
            "title": "Quanto mais melhor",
            "description": "Cada crian├ºas ter├í seu bambol├¬ a e mesma quantidade de cones que as outras, posicionadas em seu bambol├¬, elas ter├úo um tempo determinado para pegar os cones dos outros bambol├¬s e colocar nos pr├│prios, quem tiver mais cones no seu bambol├¬ ganha. Obs: os bambol├¬s devem estar espalhados, e n├úo podem ser defendidos. Varia├º├úo: pode ser totalmente ao contr├írio, \"quanto menos melhor\" ent├úo quem tiver menos ganha (colocando nos bambol├¬s dos outros) L├║dico: Pode falar que os bambol├¬s s├úo a casa deles e os cones s├úo comidas (quanto mais melhor) ou que s├úo bombas (quanto menos melhor) -- 20 of 37 -- ATIVIDADES (DE 7 A 10 ANOS)",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "Bambol├¬s (ou c├¡rculo de giz)",
                  "cone (ou bolinha de papel)"
            ],
            "steps": [
                  "Cada crian├ºas ter├í seu bambol├¬ a e mesma quantidade de cones que as outras, posicionadas em seu bambol├¬, elas ter├úo um tempo determinado para pegar os cones dos outros bambol├¬s e colocar nos pr├│prios, quem tiver mais cones no seu bambol├¬ ganha. Obs: os bambol├¬s devem estar espalhados, e n├úo podem ser defendidos. Varia├º├úo: pode ser totalmente ao contr├írio, \"quanto menos melhor\" ent├úo quem tiver menos ganha (colocando nos bambol├¬s dos outros) L├║dico: Pode falar que os bambol├¬s s├úo a casa deles e os cones s├úo comidas (quanto mais melhor) ou que s├úo bombas (quanto menos melhor) -- 20 of 37 -- ATIVIDADES (DE 7 A 10 ANOS)"
            ]
      },
      {
            "id": "pdf-83",
            "title": "Tr├¬s cones em um dos cantos",
            "description": "Nesta atividade ├® disponibilizado ao centro da quadra um c├¡rculo (bambol├¬) onde dentro est├úo 8 (oito) cones, com quatro participantes ao seu redor, a uma dist├óncia aproximada de 10 metros do centro e no canto em diagonal da quadra, se encontra outro c├¡rculo os quais cada um pertence a um participante. O objetivo ├® levar tr├¬s cones para o seu bambol├¬, aquele que primeiro o fizer ser├í o primeiro a concluir a atividade. Voc├¬ pode pegar os cones dos demais participantes, mas em hip├│tese alguma pode atrapalhar se outro participante vem pegar seu cone.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Bambol├¬s",
                  "cones."
            ],
            "steps": [
                  "Nesta atividade ├® disponibilizado ao centro da quadra um c├¡rculo (bambol├¬) onde dentro est├úo 8 (oito) cones, com quatro participantes ao seu redor, a uma dist├óncia aproximada de 10 metros do centro e no canto em diagonal da quadra, se encontra outro c├¡rculo os quais cada um pertence a um participante. O objetivo ├® levar tr├¬s cones para o seu bambol├¬, aquele que primeiro o fizer ser├í o primeiro a concluir a atividade. Voc├¬ pode pegar os cones dos demais participantes, mas em hip├│tese alguma pode atrapalhar se outro participante vem pegar seu cone."
            ]
      },
      {
            "id": "pdf-84",
            "title": "Pega-Pega Alerta",
            "description": "├ë definido um jogador e este dever├í escolher um tema (ex.:comida), os outros jogadores dever├úo se reunir e escolher algo relacionado a este tema (ex: macarr├úo, hamb├║rguer, batata frita etc.). Ap├│s todos escolherem as op├º├Áes s├úo passadas para o jogador que decidiu tema aos outros, sem saber quem escolheu o que ele grita bem alto uma das op├º├Áes. O que tiver sua op├º├úo escolhida se tornar├í o pegador, mas diferente do pega-pega comum, ele dever├í puxar o tnt pendurado na roupa do amigo, aquele que tiver seu tnt puxado se tornar├í pegador tamb├®m, e assim por diante, at├® sobrar apenas um jogar com tnt, este dever├í escolher o pr├│ximo tema e a brincadeira reiniciar├í -- 21 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "TNT ou Barbante (puxa rabo)"
            ],
            "steps": [
                  "├ë definido um jogador e este dever├í escolher um tema (ex.:comida), os outros jogadores dever├úo se reunir e escolher algo relacionado a este tema (ex: macarr├úo, hamb├║rguer, batata frita etc.). Ap├│s todos escolherem as op├º├Áes s├úo passadas para o jogador que decidiu tema aos outros, sem saber quem escolheu o que ele grita bem alto uma das op├º├Áes. O que tiver sua op├º├úo escolhida se tornar├í o pegador, mas diferente do pega-pega comum, ele dever├í puxar o tnt pendurado na roupa do amigo, aquele que tiver seu tnt puxado se tornar├í pegador tamb├®m, e assim por diante, at├® sobrar apenas um jogar com tnt, este dever├í escolher o pr├│ximo tema e a brincadeira reiniciar├í -- 21 of 37 --"
            ]
      },
      {
            "id": "pdf-86",
            "title": "Pega-Pega Ney",
            "description": "Um pegador. Quem for pego tem que se jogar no ch├úo (Neymar s├│ cai). Para salvar, duas pessoas devem encostar em voc├¬ ou te levar para o banco (caso n├úo tenha um banco, delimitar um lugar) pelos bra├ºos e pernas, em seguida deve voltar ao jogo. Enquanto estiver salvando algu├®m n├úo pode ser pego.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [],
            "steps": [
                  "Um pegador. Quem for pego tem que se jogar no ch├úo (Neymar s├│ cai). Para salvar, duas pessoas devem encostar em voc├¬ ou te levar para o banco (caso n├úo tenha um banco, delimitar um lugar) pelos bra├ºos e pernas, em seguida deve voltar ao jogo. Enquanto estiver salvando algu├®m n├úo pode ser pego."
            ]
      },
      {
            "id": "pdf-89",
            "title": "Pega-pega pregador",
            "description": "Cada crian├ºa vai ter entre 5 a 10 pregadores para a brincadeira ser demorada, os pregadores s├úo as vidas, as crian├ºas v├úo prender os pregadores em qualquer regi├úo da roupa onde seja vis├¡vel. Elas v├úo se espalhar, ao sinal do monitor vai come├ºar uma pega ÔÇô pega, a crian├ºa que pegar a outra vai jogar pedra papel e tesoura, Melhor de 3. Quem ganhar pega um pregador de quem perdeu, os dois continuam a brincadeira. Ganha aquele tiver mais pregadores no final ou conseguir pegar todos os pregadores, se a pessoa perder todos os seus pregadores ela fica sentada, e quem tem muitos tem a op├º├úo de doar quantos pregadores quiser para o amiguinho voltar a brincadeira.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Pregadores"
            ],
            "steps": [
                  "Cada crian├ºa vai ter entre 5 a 10 pregadores para a brincadeira ser demorada, os pregadores s├úo as vidas, as crian├ºas v├úo prender os pregadores em qualquer regi├úo da roupa onde seja vis├¡vel. Elas v├úo se espalhar, ao sinal do monitor vai come├ºar uma pega ÔÇô pega, a crian├ºa que pegar a outra vai jogar pedra papel e tesoura, Melhor de 3. Quem ganhar pega um pregador de quem perdeu, os dois continuam a brincadeira. Ganha aquele tiver mais pregadores no final ou conseguir pegar todos os pregadores, se a pessoa perder todos os seus pregadores ela fica sentada, e quem tem muitos tem a op├º├úo de doar quantos pregadores quiser para o amiguinho voltar a brincadeira."
            ]
      },
      {
            "id": "pdf-93",
            "title": "Pique trave",
            "description": "Uma pessoa ser├í o pegador, quem ele pegar virar├í o pegador. A trave ├® o pique, mas com um detalhe, a crian├ºa que tirar a m├úo dela, s├│ poder├í segurar na trave que est├í do outro lado da quadra. Ou seja, ele vai ter que correr at├® o outro lado.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [],
            "steps": [
                  "Uma pessoa ser├í o pegador, quem ele pegar virar├í o pegador. A trave ├® o pique, mas com um detalhe, a crian├ºa que tirar a m├úo dela, s├│ poder├í segurar na trave que est├í do outro lado da quadra. Ou seja, ele vai ter que correr at├® o outro lado."
            ]
      },
      {
            "id": "pdf-95",
            "title": "Arrast├úo ou pega-pega corrente",
            "description": "Uma pessoa ser├í escolhida para ser o pegador, enquanto os outros ser├úo os fugitivos. Quem o pegador pegar, virar├í pegador junto a ele, ter├úo que ficar de m├úos dadas, e assim sucessivamente at├® restar apenas um fugitivo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [],
            "steps": [
                  "Uma pessoa ser├í escolhida para ser o pegador, enquanto os outros ser├úo os fugitivos. Quem o pegador pegar, virar├í pegador junto a ele, ter├úo que ficar de m├úos dadas, e assim sucessivamente at├® restar apenas um fugitivo."
            ]
      },
      {
            "id": "pdf-100",
            "title": "Chinelinho",
            "description": "Tra├ºa-se no ch├úo duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crian├ºas s├úo formados. Cada um dos grupos ├® disposto em fileira, um de frente para o outro, atr├ís de uma linha. Num ponto equidistante das linhas (aproximadamente a 7,5 m de cada uma), risca-se um c├¡rculo onde dever├í ser colocado um chinelinho ou outro objeto semelhante. As crian├ºas dos dois grupos s├úo numeradas de 1 at├® o n├║mero total de crian├ºas que existir em cada grupo. Quando um dos grupos tiver uma crian├ºa a mais, um componente do grupo contr├írio pode receber dois n├║meros. Uma crian├ºa ou um adulto deve comandar o jogo, gritando um n├║mero que corresponda a uma crian├ºa de cada um dos grupos. As duas devem correr, pegar o chinelinho e retornar ao seu grupo, cruzando sua linha sem ser tocada. Cada vez que isso ocorrer, seu grupo conquista um ponto. Se ao fugir com o ocorrer, seu grupo conquista um ponto. Se ao fugir com o chinelo o jogador for tocado pelo advers├írio, ningu├®m marca ponto. Ap├│s cada disputa dos dois jogadores, o chinelo volta para o c├¡rculo. Vencer├í quem atingir primeiro o total de pontos estipulados pelos grupos, em comum acordo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Um chinelo",
                  "uma bola",
                  "ou qualquer coisa que substitua"
            ],
            "steps": [
                  "Tra├ºa-se no ch├úo duas linhas paralelas e distantes entre si aproximadamente 15 metros. Dois grupos de crian├ºas s├úo formados. Cada um dos grupos ├® disposto em fileira, um de frente para o outro, atr├ís de uma linha. Num ponto equidistante das linhas (aproximadamente a 7,5 m de cada uma), risca-se um c├¡rculo onde dever├í ser colocado um chinelinho ou outro objeto semelhante. As crian├ºas dos dois grupos s├úo numeradas de 1 at├® o n├║mero total de crian├ºas que existir em cada grupo. Quando um dos grupos tiver uma crian├ºa a mais, um componente do grupo contr├írio pode receber dois n├║meros. Uma crian├ºa ou um adulto deve comandar o jogo, gritando um n├║mero que corresponda a uma crian├ºa de cada um dos grupos. As duas devem correr, pegar o chinelinho e retornar ao seu grupo, cruzando sua linha sem ser tocada. Cada vez que isso ocorrer, seu grupo conquista um ponto. Se ao fugir com o ocorrer, seu grupo conquista um ponto. Se ao fugir com o chinelo o jogador for tocado pelo advers├írio, ningu├®m marca ponto. Ap├│s cada disputa dos dois jogadores, o chinelo volta para o c├¡rculo. Vencer├í quem atingir primeiro o total de pontos estipulados pelos grupos, em comum acordo."
            ]
      },
      {
            "id": "pdf-107",
            "title": "Pol├¡cia e ladr├úo",
            "description": "Separam-se dois grupos de crian├ºas, um ser├í pol├¡cia e outro ladr├úo. Os policiais iniciam contado at├® 20, enquanto os ladr├Áes se escondem, ao t├®rmino da contagem a pol├¡cia passa a procurar os ladr├Áes e os encontrando passa a prossegui-los. O ladr├úo deve ser pego pela pol├¡cia e quem for preso vai para um local denominado como pris├úo. Quem n├úo for pego pode soltar os ladr├Áes (tocando-os) que voltam a fugir da pol├¡cia. O jogo terminar├í com a captura de todos os ladr├Áes. -- 27 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "Separam-se dois grupos de crian├ºas, um ser├í pol├¡cia e outro ladr├úo. Os policiais iniciam contado at├® 20, enquanto os ladr├Áes se escondem, ao t├®rmino da contagem a pol├¡cia passa a procurar os ladr├Áes e os encontrando passa a prossegui-los. O ladr├úo deve ser pego pela pol├¡cia e quem for preso vai para um local denominado como pris├úo. Quem n├úo for pego pode soltar os ladr├Áes (tocando-os) que voltam a fugir da pol├¡cia. O jogo terminar├í com a captura de todos os ladr├Áes. -- 27 of 37 --"
            ]
      },
      {
            "id": "pdf-110",
            "title": "Rua e Avenida",
            "description": "Os participantes ser├úo divididos em v├írias fileiras uma atr├ís da outra. Duas pessoas ser├úo escolhidas, uma para ser o pegador e o outro o fugitivo. ├ë como se fosse um labirinto, os participantes dever├úo estar de m├úos dadas, quando o professor falar ÔÇ£ruaÔÇØ eles dever├úo soltar as m├úos e virar para a direita, dando as m├úos aos outros colegas, e quando o professor falar ÔÇ£avenidaÔÇØ dever├úo voltar a posi├º├úo inicial.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "Os participantes ser├úo divididos em v├írias fileiras uma atr├ís da outra. Duas pessoas ser├úo escolhidas, uma para ser o pegador e o outro o fugitivo. ├ë como se fosse um labirinto, os participantes dever├úo estar de m├úos dadas, quando o professor falar ÔÇ£ruaÔÇØ eles dever├úo soltar as m├úos e virar para a direita, dando as m├úos aos outros colegas, e quando o professor falar ÔÇ£avenidaÔÇØ dever├úo voltar a posi├º├úo inicial."
            ]
      },
      {
            "id": "pdf-112",
            "title": "M├úe da Rua",
            "description": "Ser├í escolhida uma crian├ºa para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos os alunos sa├¡ram correndo para o outro lado da quadra, tentando escapar da ÔÇ£m├úe da ruaÔÇØ que esta ao centro. Quem for pego ir├í ajudar a ÔÇ£m├úe da ruaÔÇØ a pegar o restante. A ÔÇ£m├úe da ruaÔÇØ n├úo poder├í sair do meio da quadra, nem os participantes que forem pegos.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "Ser├í escolhida uma crian├ºa para ficar ao centro da quadra, enquanto os outros participantes ficaram em um lado da quadra. Ao sinal do monitor, todos os alunos sa├¡ram correndo para o outro lado da quadra, tentando escapar da ÔÇ£m├úe da ruaÔÇØ que esta ao centro. Quem for pego ir├í ajudar a ÔÇ£m├úe da ruaÔÇØ a pegar o restante. A ÔÇ£m├úe da ruaÔÇØ n├úo poder├í sair do meio da quadra, nem os participantes que forem pegos."
            ]
      },
      {
            "id": "pdf-113",
            "title": "Rouba Bandeira",
            "description": "As crian├ºas ser├úo divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, ser├í colocado a ÔÇ£bandeiraÔÇØ. O objetivo de cada time ├® tentar pegar a bandeira do seu rival, sem ser pego e ao mesmo tempo n├úo deixar pegar a sua bandeira. Vence quem conseguir pegar a bandeira do inimigo e voltar para o seu campo sem ser pego.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "dois objetos (usados como a bandeira)"
            ],
            "steps": [
                  "As crian├ºas ser├úo divididas em dois times, cada time em um lado da quadra. Ao fundo de cada quadra, ser├í colocado a ÔÇ£bandeiraÔÇØ. O objetivo de cada time ├® tentar pegar a bandeira do seu rival, sem ser pego e ao mesmo tempo n├úo deixar pegar a sua bandeira. Vence quem conseguir pegar a bandeira do inimigo e voltar para o seu campo sem ser pego."
            ]
      },
      {
            "id": "pdf-114",
            "title": "Pegador trocado",
            "description": "Os participantes dever├úo formar duplas e se sentar afastados das outras duplas, espalhados pelo espa├ºo. Ao sinal do monitor os dois alunos que ser├úo um ÔÇ£fugitivoÔÇØ e o outro ÔÇ£pegadorÔÇØ dever├úo iniciar a brincadeira, que dever├í assim funcionar: quando o fugitivo quiser ficar a salvo do ÔÇ£pegadorÔÇØ dever├í sentar ao lado de uma das duplas que est├úo sentadas no ch├úo, assim que ele sentar no lado de um colega da dupla o outro aluno, dever├í levantar-se rapidamente e passar├í a ser o novo ÔÇ£pegadorÔÇØ ou seja, sempre que algum aluno que estiver sendo perseguido sentar-se ao lado de uma dupla, o outro colega da dupla dever├í levantar e passar├í a ser o novo ÔÇ£pegador.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "Os participantes dever├úo formar duplas e se sentar afastados das outras duplas, espalhados pelo espa├ºo. Ao sinal do monitor os dois alunos que ser├úo um ÔÇ£fugitivoÔÇØ e o outro ÔÇ£pegadorÔÇØ dever├úo iniciar a brincadeira, que dever├í assim funcionar: quando o fugitivo quiser ficar a salvo do ÔÇ£pegadorÔÇØ dever├í sentar ao lado de uma das duplas que est├úo sentadas no ch├úo, assim que ele sentar no lado de um colega da dupla o outro aluno, dever├í levantar-se rapidamente e passar├í a ser o novo ÔÇ£pegadorÔÇØ ou seja, sempre que algum aluno que estiver sendo perseguido sentar-se ao lado de uma dupla, o outro colega da dupla dever├í levantar e passar├í a ser o novo ÔÇ£pegador."
            ]
      },
      {
            "id": "pdf-119",
            "title": "Pegador Inteligente",
            "description": "O monitor dever├í dividir duas equipes com o mesmo n├║mero de participantes. Em seguida, dever├í marcar uma dist├óncia e colocar uma equipe de frente para a outra e sentados no ch├úo, e ├ás costas de cada equipe e a uma dist├óncia com uma linha marada a qual os participantes estar├úo ├á salvo de ser ÔÇ£pegosÔÇØ pela outra equipe. O monitor dever├í determinar, que uma equipe seja ÔÇ£parÔÇØ e a outra ser├í ÔÇ£├¡mparÔÇØ. O monitor falar├í um n├║mero, se o n├║mero for ÔÇ£parÔÇØ, a equipe ÔÇ£parÔÇØ dever├í se levantar rapidamente e correr para pegar os da equipe ÔÇ£├¡mparÔÇØ. Se disser um n├║mero ÔÇ£├¡mparÔÇØ ser├úo os ├¡mpares que dever├úo se levantar e correr para pegar os da equipe ÔÇ£parÔÇØ. E assim sucessivamente. (O monitor poder├í fazer contas para confundir os participantes). -- 30 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "10+ anos",
            "materials": [],
            "steps": [
                  "O monitor dever├í dividir duas equipes com o mesmo n├║mero de participantes. Em seguida, dever├í marcar uma dist├óncia e colocar uma equipe de frente para a outra e sentados no ch├úo, e ├ás costas de cada equipe e a uma dist├óncia com uma linha marada a qual os participantes estar├úo ├á salvo de ser ÔÇ£pegosÔÇØ pela outra equipe. O monitor dever├í determinar, que uma equipe seja ÔÇ£parÔÇØ e a outra ser├í ÔÇ£├¡mparÔÇØ. O monitor falar├í um n├║mero, se o n├║mero for ÔÇ£parÔÇØ, a equipe ÔÇ£parÔÇØ dever├í se levantar rapidamente e correr para pegar os da equipe ÔÇ£├¡mparÔÇØ. Se disser um n├║mero ÔÇ£├¡mparÔÇØ ser├úo os ├¡mpares que dever├úo se levantar e correr para pegar os da equipe ÔÇ£parÔÇØ. E assim sucessivamente. (O monitor poder├í fazer contas para confundir os participantes). -- 30 of 37 --"
            ]
      },
      {
            "id": "pdf-126",
            "title": "Nunca 3",
            "description": "Os alunos estar├úo espalhados em duplas (um atr├ís do outro) pelo espa├ºo dispon├¡vel. Os alunos poder├úo estar sentados. O professor escolhe dois alunos, um ser├í o aluno pegador e o outro aluno ter├í que fugir do pegador ÔÇª O aluno que est├í fugindo do pegador dever├í escolher uma dupla e se posicionar atr├ís do segundo elemento. O aluno que est├í na frente da dupla, por sua vez, ser├í o novo pegador (nunca poder├í existir 3elementos juntos, sempre mantendo uma dupla) e dever├í sair correndo atr├ís do aluno que era o pegador anteriormente... Esse aluno que est├í fugindo do novo pegador, se posicionar├í atr├ís de outra dupla e assim sucessivamente.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [],
            "steps": [
                  "Os alunos estar├úo espalhados em duplas (um atr├ís do outro) pelo espa├ºo dispon├¡vel. Os alunos poder├úo estar sentados. O professor escolhe dois alunos, um ser├í o aluno pegador e o outro aluno ter├í que fugir do pegador ÔÇª O aluno que est├í fugindo do pegador dever├í escolher uma dupla e se posicionar atr├ís do segundo elemento. O aluno que est├í na frente da dupla, por sua vez, ser├í o novo pegador (nunca poder├í existir 3elementos juntos, sempre mantendo uma dupla) e dever├í sair correndo atr├ís do aluno que era o pegador anteriormente... Esse aluno que est├í fugindo do novo pegador, se posicionar├í atr├ís de outra dupla e assim sucessivamente."
            ]
      },
      {
            "id": "pdf-131",
            "title": "Escape 60",
            "description": "Primeiramente deve-se elaborar uma tem├ítica espec├¡fica para o desafio. O jogo consiste em desenvolver uma s├®rie de dicas e pistas que levem os participantes a resolver enigmas e desafios que nos levem ├á um caminho. Uma caracter├¡stica da atividade ├® limitar o espa├ºo ├á uma sala fechada ou alguma varia├º├úo semelhante. O objetivo, normalmente, ├® fugir deste local em um determinado per├¡odo previamente estipulado.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Papel",
                  "caneta",
                  "l├ípis",
                  "entre outros..."
            ],
            "steps": [
                  "Primeiramente deve-se elaborar uma tem├ítica espec├¡fica para o desafio. O jogo consiste em desenvolver uma s├®rie de dicas e pistas que levem os participantes a resolver enigmas e desafios que nos levem ├á um caminho. Uma caracter├¡stica da atividade ├® limitar o espa├ºo ├á uma sala fechada ou alguma varia├º├úo semelhante. O objetivo, normalmente, ├® fugir deste local em um determinado per├¡odo previamente estipulado."
            ]
      },
      {
            "id": "pdf-133",
            "title": "Trunfo",
            "description": "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descri├º├úo e atributos de valores variados (FOR├çA, INTELIG├èNCIA, AGILIDADE, DESTREZA, CARISMA...). Pode-se incluir ainda cartas de personagens conhecidos, super-her├│is e vil├Áes. Os participantes iniciam o jogo com a carta correspondente ├á sua pr├│pria pessoa. Para ÔÇ£duelarÔÇØ com os outros membros do jogo basta peg├í-los, quem pegar primeiro tem o direito de escolher qual atributo quer usar. Quem ganhar obt├®m como recompensa a carta do advers├írio. Varia├º├Áes: Uma ÔÇ£LOJAÔÇØ pode ser montada, onde os integrantes podem comprar outras cartas ou troc├í-las. Uma esp├®cie de ÔÇ£moedaÔÇØ pode ser criada e escondida pelo local onde a brincadeira est├í sendo realizada. Com isso, os participantes devem achar esse dinheiro e troc├í-lo na loja por itens e cartas. Escudo, cartas que deixam outras cartas mais fortes, cartas de categorias diferentes podem ser inclu├¡das nas variedades da loja. O local onde o jogo est├í acontecendo pode ir reduzindo at├® os participantes n├úo conseguirem mais escapar uns dos outros.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Papel cart├úo",
                  "caneta",
                  "impressora."
            ],
            "steps": [
                  "Uma foto de cada participante deve ser tirada e impressa em uma folha com uma descri├º├úo e atributos de valores variados (FOR├çA, INTELIG├èNCIA, AGILIDADE, DESTREZA, CARISMA...). Pode-se incluir ainda cartas de personagens conhecidos, super-her├│is e vil├Áes. Os participantes iniciam o jogo com a carta correspondente ├á sua pr├│pria pessoa. Para ÔÇ£duelarÔÇØ com os outros membros do jogo basta peg├í-los, quem pegar primeiro tem o direito de escolher qual atributo quer usar. Quem ganhar obt├®m como recompensa a carta do advers├írio. Varia├º├Áes: Uma ÔÇ£LOJAÔÇØ pode ser montada, onde os integrantes podem comprar outras cartas ou troc├í-las. Uma esp├®cie de ÔÇ£moedaÔÇØ pode ser criada e escondida pelo local onde a brincadeira est├í sendo realizada. Com isso, os participantes devem achar esse dinheiro e troc├í-lo na loja por itens e cartas. Escudo, cartas que deixam outras cartas mais fortes, cartas de categorias diferentes podem ser inclu├¡das nas variedades da loja. O local onde o jogo est├í acontecendo pode ir reduzindo at├® os participantes n├úo conseguirem mais escapar uns dos outros."
            ]
      },
      {
            "id": "pdf-136",
            "title": "Protegendo o Rei",
            "description": "Um participante ser├í o rei ou a rainha, o mesmo deve ser protegido pelos ÔÇ£Protetores do ReiÔÇØ e ser├í atacado pelos ÔÇ£Inimigos da CoroaÔÇØ. Cada participante come├ºa o jogo com tr├¬s vidas, esses devem pegar os advers├írios. Cada vez que um integrante for pego ele perde uma vida, caso perca as tr├¬s est├í eliminado do jogo. O objetivo dos inimigos da coroa ├® derrotar o rei, que tem apenas uma vida, os protetores do rei, por sua vez, devem eliminar todos os inimigos da coroa para alcan├ºarem a vit├│ria. Pode-se montar uma ÔÇ£torreÔÇØ em volta do rei com caixas, cadeiras, bambol├¬s ou qualquer outro material dispon├¡vel.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Nenhum."
            ],
            "steps": [
                  "Um participante ser├í o rei ou a rainha, o mesmo deve ser protegido pelos ÔÇ£Protetores do ReiÔÇØ e ser├í atacado pelos ÔÇ£Inimigos da CoroaÔÇØ. Cada participante come├ºa o jogo com tr├¬s vidas, esses devem pegar os advers├írios. Cada vez que um integrante for pego ele perde uma vida, caso perca as tr├¬s est├í eliminado do jogo. O objetivo dos inimigos da coroa ├® derrotar o rei, que tem apenas uma vida, os protetores do rei, por sua vez, devem eliminar todos os inimigos da coroa para alcan├ºarem a vit├│ria. Pode-se montar uma ÔÇ£torreÔÇØ em volta do rei com caixas, cadeiras, bambol├¬s ou qualquer outro material dispon├¡vel."
            ]
      },
      {
            "id": "pdf-138",
            "title": "Passaporte",
            "description": "Os recreadores prepararam alguns cart├Áes (quantidade de crian├ºas que estiverem presentes), com nomes de no m├¡nimo 5 pa├¡ses, cada pa├¡s recebera uma cor. Cada crian├ºa deve receber 5 cart├Áes, um de cada pa├¡s. O objetivo do jogo ├® completar o passaporte, com todas as cores, de todos os pa├¡ses. Um dos recreadores ser├í o ÔÇ£tira vistoÔÇØ ele ficar├í com um giz preto tentando ÔÇ£pegarÔÇØ as crian├ºas e riscando as cores que as mesmas j├í estiverem marcadas. Antes de come├ºar o jogo esse recreador dever├í esconder as 5 cores escolhidas. Ganha o jogo a crian├ºa que conseguir um quadradinho pintado de cada pa├¡s, sem ter o risco preto do ÔÇ£tira vistoÔÇØ Exemplo: BRASIL (VERDE) ARGENTINA (AZUL) -- 37 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Papel",
                  "l├ípis de cor ou giz de ceira"
            ],
            "steps": [
                  "Os recreadores prepararam alguns cart├Áes (quantidade de crian├ºas que estiverem presentes), com nomes de no m├¡nimo 5 pa├¡ses, cada pa├¡s recebera uma cor. Cada crian├ºa deve receber 5 cart├Áes, um de cada pa├¡s. O objetivo do jogo ├® completar o passaporte, com todas as cores, de todos os pa├¡ses. Um dos recreadores ser├í o ÔÇ£tira vistoÔÇØ ele ficar├í com um giz preto tentando ÔÇ£pegarÔÇØ as crian├ºas e riscando as cores que as mesmas j├í estiverem marcadas. Antes de come├ºar o jogo esse recreador dever├í esconder as 5 cores escolhidas. Ganha o jogo a crian├ºa que conseguir um quadradinho pintado de cada pa├¡s, sem ter o risco preto do ÔÇ£tira vistoÔÇØ Exemplo: BRASIL (VERDE) ARGENTINA (AZUL) -- 37 of 37 --"
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
            "description": "Ser├úo formadas equipes que se sentar├úo em colunas, ao sinal do professor o primeiro aluno de cada coluna sair├í correndo em volta das outras equipes at├® chegar novamente a sua equipe, passara por cima de todos os seus colegas e pegar├í a bola que estar├í ao centro. Quem executar a tarefa primeiro marcar├í um ponto e assim seguir├í at├® chegar a primeira crian├ºa novamente. ATIVIDADES (DE 3 A 6 ANOS) -- 2 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "um cone",
                  "uma bola"
            ],
            "steps": [
                  "Ser├úo formadas equipes que se sentar├úo em colunas, ao sinal do professor o primeiro aluno de cada coluna sair├í correndo em volta das outras equipes at├® chegar novamente a sua equipe, passara por cima de todos os seus colegas e pegar├í a bola que estar├í ao centro. Quem executar a tarefa primeiro marcar├í um ponto e assim seguir├í at├® chegar a primeira crian├ºa novamente. ATIVIDADES (DE 3 A 6 ANOS) -- 2 of 37 --"
            ]
      },
      {
            "id": "pdf-11",
            "title": "Bola ao centro",
            "description": "Ser├úo divididos em duas equipes, uma bola ser├í colocada ao centro, e cada equipe estar├í em um lugar demarcado. O objetivo de cada equipe, ├® ultrapassar a bola que est├í no centro para o campo da equipe advers├íria, acertando a bola que est├í no centro com as bolas que as equipes ter├úo. Ganha quem acertar a bola no campo inimigo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "4/6 bolas"
            ],
            "steps": [
                  "Ser├úo divididos em duas equipes, uma bola ser├í colocada ao centro, e cada equipe estar├í em um lugar demarcado. O objetivo de cada equipe, ├® ultrapassar a bola que est├í no centro para o campo da equipe advers├íria, acertando a bola que est├í no centro com as bolas que as equipes ter├úo. Ganha quem acertar a bola no campo inimigo."
            ]
      },
      {
            "id": "pdf-19",
            "title": "Bola por cima, Bola por baixo",
            "description": "Dividi-los em dois grupos, e deix├í-los em coluna, um atr├ís do outro. Ao sinal do monitor, o primeiro de ada coluna ir├í passar a bola por cima at├® chegar ao ├║ltimo participante, esse ├║ltimo dever├í correr at├® a frente e repetir a mesma coisa, e assim sucessivamente at├® chegar o primeiro de novo. Usar como varia├º├úo, passar a bola por baixo da perna.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "Bola"
            ],
            "steps": [
                  "Dividi-los em dois grupos, e deix├í-los em coluna, um atr├ís do outro. Ao sinal do monitor, o primeiro de ada coluna ir├í passar a bola por cima at├® chegar ao ├║ltimo participante, esse ├║ltimo dever├í correr at├® a frente e repetir a mesma coisa, e assim sucessivamente at├® chegar o primeiro de novo. Usar como varia├º├úo, passar a bola por baixo da perna."
            ]
      },
      {
            "id": "pdf-41",
            "title": "Corpo ou bola?",
            "description": "As crian├ºas ser├úo dispostas em duas colunas uma de frente para a outra, o monitor ir├í falando as partes do corpo e a crian├ºa ir├í colocar a m├úo, quando o monitor falar ÔÇ£bolaÔÇØ as crian├ºas tentaram pegar as bolas, que estar├úo separadas por dupla, uma bola para cada dupla. -- 10 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [],
            "steps": [
                  "As crian├ºas ser├úo dispostas em duas colunas uma de frente para a outra, o monitor ir├í falando as partes do corpo e a crian├ºa ir├í colocar a m├úo, quando o monitor falar ÔÇ£bolaÔÇØ as crian├ºas tentaram pegar as bolas, que estar├úo separadas por dupla, uma bola para cada dupla. -- 10 of 37 --"
            ]
      },
      {
            "id": "pdf-55",
            "title": "Pega o tesouro",
            "description": "Enquanto o grupo se afasta, o monitor esconde bolinhas de papel por todo o lugar. Ao sinal de in├¡cio, as crian├ºas voltam no campo onde procuram encontrar as bolas de papel. Vence quem achar mais bolinhas de papel, e o vencedor passa a escond├¬-las na pr├│xima rodada.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "3+ anos",
            "materials": [
                  "Bolinhas de papel ou qualquer coisa que substitua"
            ],
            "steps": [
                  "Enquanto o grupo se afasta, o monitor esconde bolinhas de papel por todo o lugar. Ao sinal de in├¡cio, as crian├ºas voltam no campo onde procuram encontrar as bolas de papel. Vence quem achar mais bolinhas de papel, e o vencedor passa a escond├¬-las na pr├│xima rodada."
            ]
      },
      {
            "id": "pdf-57",
            "title": "Abra├ºo Salvador",
            "description": "Um aluno dever├í ser escolhido como ÔÇ£pegadorÔÇØ, para que ele pegue os outros participantes, dever├í encostar a bola em sua barriga. Para que os ÔÇ£fugitivosÔÇØ se salvem, dever├úo abra├ºar o outro colega, assim escondendo a sua barriga. Com o passar da brincadeira o professor dever├í ir trocando o pegador.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "uma bola"
            ],
            "steps": [
                  "Um aluno dever├í ser escolhido como ÔÇ£pegadorÔÇØ, para que ele pegue os outros participantes, dever├í encostar a bola em sua barriga. Para que os ÔÇ£fugitivosÔÇØ se salvem, dever├úo abra├ºar o outro colega, assim escondendo a sua barriga. Com o passar da brincadeira o professor dever├í ir trocando o pegador."
            ]
      },
      {
            "id": "pdf-59",
            "title": "Bola ao t├║nel",
            "description": "Divididos em duas equipes, os participantes formar├úo uma coluna. Deitados no ch├úo de barriga para baixo, o ├║ltimo participante da fila dever├í passar por cima de seus amigos, chegando na frente ele dever├í rolar a bola por baixo de sua equipe, todos dever├úo levantar o quadril (como se estivessem fazendo flex├úo de bra├ºos) o ├║ltimo da coluna pegar├í a bola e far├í o mesmo, at├® chegar o primeiro novamente. Ganha a equipe que realizar a atividade mais r├ípido.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "Duas bolas (a partir de 4 anos)"
            ],
            "steps": [
                  "Divididos em duas equipes, os participantes formar├úo uma coluna. Deitados no ch├úo de barriga para baixo, o ├║ltimo participante da fila dever├í passar por cima de seus amigos, chegando na frente ele dever├í rolar a bola por baixo de sua equipe, todos dever├úo levantar o quadril (como se estivessem fazendo flex├úo de bra├ºos) o ├║ltimo da coluna pegar├í a bola e far├í o mesmo, at├® chegar o primeiro novamente. Ganha a equipe que realizar a atividade mais r├ípido."
            ]
      },
      {
            "id": "pdf-66",
            "title": "Alerta",
            "description": "O jogador pega a bola e a joga para cima, grita o nome de uma pessoa. A pessoa que teve seu nome citado deve pegar a bola e gritar ÔÇ£Alerta!ÔÇØ. Imediatamente, todos devem ficar parados. O jogador d├í 3 passos e, parado, dever├í tentar acertar com a bola na pessoa que tiver mais pr├│xima. Se acertar, a pessoa atingida sai da brincadeira. Se errar, ele ├® quem sai. -- 16 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "uma bola"
            ],
            "steps": [
                  "O jogador pega a bola e a joga para cima, grita o nome de uma pessoa. A pessoa que teve seu nome citado deve pegar a bola e gritar ÔÇ£Alerta!ÔÇØ. Imediatamente, todos devem ficar parados. O jogador d├í 3 passos e, parado, dever├í tentar acertar com a bola na pessoa que tiver mais pr├│xima. Se acertar, a pessoa atingida sai da brincadeira. Se errar, ele ├® quem sai. -- 16 of 37 --"
            ]
      },
      {
            "id": "pdf-69",
            "title": "Arremesso de bambol├¬",
            "description": "Tipo arremesso de argolas, mas com bambol├¬. Uma pessoa ser├í a v├¡tima e ficar├í a 5 metros dos jogadores. Faz 1 ponto quem conseguir encaixar o bambol├¬ na pessoa primeiro. Ganha quem tiver mais pontos.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "bambol├¬s"
            ],
            "steps": [
                  "Tipo arremesso de argolas, mas com bambol├¬. Uma pessoa ser├í a v├¡tima e ficar├í a 5 metros dos jogadores. Faz 1 ponto quem conseguir encaixar o bambol├¬ na pessoa primeiro. Ganha quem tiver mais pontos."
            ]
      },
      {
            "id": "pdf-72",
            "title": "Queimada do Rei",
            "description": "Formam-se dois times com n├║mero igual de participantes e uma pessoa de cada time ├® escolhida para ser o Rei. No jogo pode-se usar mais de uma bola. Sempre que algu├®m da equipe ├® queimado, a pessoa tem que se ajoelhar no ch├úo e esperar at├® conseguir pegar uma bola. Se algu├®m do pr├│prio time quiser dar a bola para ela jogar, tem que se ajoelhar em seu lugar. Ganha a equipe que queimar o rei advers├írio primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "Uma bola"
            ],
            "steps": [
                  "Formam-se dois times com n├║mero igual de participantes e uma pessoa de cada time ├® escolhida para ser o Rei. No jogo pode-se usar mais de uma bola. Sempre que algu├®m da equipe ├® queimado, a pessoa tem que se ajoelhar no ch├úo e esperar at├® conseguir pegar uma bola. Se algu├®m do pr├│prio time quiser dar a bola para ela jogar, tem que se ajoelhar em seu lugar. Ganha a equipe que queimar o rei advers├írio primeiro."
            ]
      },
      {
            "id": "pdf-91",
            "title": "A ca├ºa e o ca├ºador",
            "description": "O monitor ir├í determinar o jogador que ser├í a ca├ºa (o fugitivo) e os outros ser├úo os ca├ºadores. Os ca├ºadores tentaram queimar a ca├ºa, trocando passes tentando acuar o fugitivo, e o mesmo ter├í que se deslocar fugindo do jogador com a bola.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Bola"
            ],
            "steps": [
                  "O monitor ir├í determinar o jogador que ser├í a ca├ºa (o fugitivo) e os outros ser├úo os ca├ºadores. Os ca├ºadores tentaram queimar a ca├ºa, trocando passes tentando acuar o fugitivo, e o mesmo ter├í que se deslocar fugindo do jogador com a bola."
            ]
      },
      {
            "id": "pdf-92",
            "title": "Jogo dos n├║meros",
            "description": "Ser├úo divididas duas equipes, cada integrante de cada equipe receber├í um n├║mero (as duas equipes dever├úo estar numeras com n├║meros iguais), o monitor chamar├í um n├║mero e jogar├í uma bola (basquete, futebol ou handebol), as crian├ºas ir├úo disputar entre si e quem acertar a bola na cesta ou no gol marcar├í um ponto para sua equipe. O monitor pode usar como varia├º├úo, chamar mais de um n├║mero e com o passar do jogo, jogar mais de uma bola para a disputa. -- 23 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Bolas (basquete",
                  "futebol ou handebol)"
            ],
            "steps": [
                  "Ser├úo divididas duas equipes, cada integrante de cada equipe receber├í um n├║mero (as duas equipes dever├úo estar numeras com n├║meros iguais), o monitor chamar├í um n├║mero e jogar├í uma bola (basquete, futebol ou handebol), as crian├ºas ir├úo disputar entre si e quem acertar a bola na cesta ou no gol marcar├í um ponto para sua equipe. O monitor pode usar como varia├º├úo, chamar mais de um n├║mero e com o passar do jogo, jogar mais de uma bola para a disputa. -- 23 of 37 --"
            ]
      },
      {
            "id": "pdf-97",
            "title": "7 caquinhos",
            "description": "Dois times, cada um no seu campo. Os campos s├úo separados por 7 cacos. Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que derrubar os cacos deve ergu├¬-los novamente, mas se protegendo da outra, que poder├í queimar. Quem for queimado n├úo pode ajudar a equipe nos cacos. Se a equipe conseguir recolocar os cacos antes de todos serem queimados, ela ganha. Mas se todos forem queimados e os cacos continuarem no ch├úo, a outra equipe ganha.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "7 pedrinhas",
                  "ou peda├ºos de evea ou qualquer outra coisa que",
                  "substitua."
            ],
            "steps": [
                  "Dois times, cada um no seu campo. Os campos s├úo separados por 7 cacos. Uma pessoa de cada equipe tenta jogar a bola e derrubar os cacos. A equipe que derrubar os cacos deve ergu├¬-los novamente, mas se protegendo da outra, que poder├í queimar. Quem for queimado n├úo pode ajudar a equipe nos cacos. Se a equipe conseguir recolocar os cacos antes de todos serem queimados, ela ganha. Mas se todos forem queimados e os cacos continuarem no ch├úo, a outra equipe ganha."
            ]
      },
      {
            "id": "pdf-101",
            "title": "Artilharia",
            "description": "Separa-se dois times. No final de cada campo, ├® colocada uma garrafa pet. Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do advers├írio. A equipe que derrubar a garrafa dever├í ergu├¬-la novamente, mas se protegendo da outra equipe, que poder├í queimar. Quem for queimado n├úo pode erguer a garrafa. Se a equipe conseguir reerguer a garrafa antes de todos serem queimados, ganha. Mas se todos forem queimados e a garrafa continuar no ch├úo, a outra equipe ganha.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Duas garrafas pet",
                  "duas bolas"
            ],
            "steps": [
                  "Separa-se dois times. No final de cada campo, ├® colocada uma garrafa pet. Uma pessoa de cada equipe tenta jogar a bola e derrubar a garrafa do advers├írio. A equipe que derrubar a garrafa dever├í ergu├¬-la novamente, mas se protegendo da outra equipe, que poder├í queimar. Quem for queimado n├úo pode erguer a garrafa. Se a equipe conseguir reerguer a garrafa antes de todos serem queimados, ganha. Mas se todos forem queimados e a garrafa continuar no ch├úo, a outra equipe ganha."
            ]
      },
      {
            "id": "pdf-103",
            "title": "Volei├ºol",
            "description": "Como um jogo de v├┤lei, as crian├ºas dever├úo passar a bola para o outro lado da rede, e a outra equipe dever├í apanhar a bola com o len├ºol, marca ponto a equipe que conseguir fazer a bola cair no ch├úo da outra turma.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "uma bola",
                  "dois len├º├│is"
            ],
            "steps": [
                  "Como um jogo de v├┤lei, as crian├ºas dever├úo passar a bola para o outro lado da rede, e a outra equipe dever├í apanhar a bola com o len├ºol, marca ponto a equipe que conseguir fazer a bola cair no ch├úo da outra turma."
            ]
      },
      {
            "id": "pdf-104",
            "title": "Rede Humana",
            "description": "├® a rede humana (um aluno ao lado do outro sobre a linha central da quadra) Grupos 2 e 3: equipes que est├úo jogando. As equipes que est├úo na quadra devem passar a bola para o outro lado sem que a \"rede humana\" encoste na bola. Acontecendo o toque pela rede humana, ├® feito o rod├¡zio das equipes: a equipe que deixou a rede humana encostar entra como no lugar; quem est├í na rede entra no lugar da equipe que errou e assim sucessivamente.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "bola"
            ],
            "steps": [
                  "├® a rede humana (um aluno ao lado do outro sobre a linha central da quadra) Grupos 2 e 3: equipes que est├úo jogando. As equipes que est├úo na quadra devem passar a bola para o outro lado sem que a \"rede humana\" encoste na bola. Acontecendo o toque pela rede humana, ├® feito o rod├¡zio das equipes: a equipe que deixou a rede humana encostar entra como no lugar; quem est├í na rede entra no lugar da equipe que errou e assim sucessivamente."
            ]
      },
      {
            "id": "pdf-105",
            "title": "Handfut",
            "description": "Divide-se duas equipes, um goleiro para cada time. Os participantes passam a bola com as m├úos entre si, mas o gol s├│ poder├í ser realizado com o p├® ou com a cabe├ºa.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "Bola"
            ],
            "steps": [
                  "Divide-se duas equipes, um goleiro para cada time. Os participantes passam a bola com as m├úos entre si, mas o gol s├│ poder├í ser realizado com o p├® ou com a cabe├ºa."
            ]
      },
      {
            "id": "pdf-108",
            "title": "Bruxa / Ca├ºador",
            "description": "Tra├ºam-se tr├¬s linhas no ch├úo, de modo a formar dois campos (A e B). O n├║mero de jogadores de um campo deve ser igual ao do outro. No jogo Bruxa, a forma├º├úo ├® livre: uma crian├ºa assume o papel de bruxa ou bruxo que procura tomar a bola. O jogo Bruxa consiste em atirar a bola sobre os participantes, a fim de acert├í-los. Os alvos correm de um lado para o outro, procurando n├úo serem atingidos. O que for batido pela bola ser├í o novo bruxo ou bruxa. No jogo Ca├ºador, escolhido o lado que iniciar├í a ca├ºada, um participante joga a bola sobre um jogador do lado oposto. Aquele que for batido e n├úo aparar a bola estar├í morto e passar├í ├á reserva do campo, sem direito de matar. Vencer├í o campo que conseguir eliminar todos os elementos do lado oposto.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "Bola"
            ],
            "steps": [
                  "Tra├ºam-se tr├¬s linhas no ch├úo, de modo a formar dois campos (A e B). O n├║mero de jogadores de um campo deve ser igual ao do outro. No jogo Bruxa, a forma├º├úo ├® livre: uma crian├ºa assume o papel de bruxa ou bruxo que procura tomar a bola. O jogo Bruxa consiste em atirar a bola sobre os participantes, a fim de acert├í-los. Os alvos correm de um lado para o outro, procurando n├úo serem atingidos. O que for batido pela bola ser├í o novo bruxo ou bruxa. No jogo Ca├ºador, escolhido o lado que iniciar├í a ca├ºada, um participante joga a bola sobre um jogador do lado oposto. Aquele que for batido e n├úo aparar a bola estar├í morto e passar├í ├á reserva do campo, sem direito de matar. Vencer├í o campo que conseguir eliminar todos os elementos do lado oposto."
            ]
      },
      {
            "id": "pdf-115",
            "title": "Jogo dos 7 passes",
            "description": "Dividir em duas equipes, cada equipe dever├í fazer 7 passes antes de acertar o gol (com a m├úo), a outra equipe dever├í tentar interferir os passes, o gol s├│ valer├í se os 7 passes forem realizados. -- 29 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "bola"
            ],
            "steps": [
                  "Dividir em duas equipes, cada equipe dever├í fazer 7 passes antes de acertar o gol (com a m├úo), a outra equipe dever├í tentar interferir os passes, o gol s├│ valer├í se os 7 passes forem realizados. -- 29 of 37 --"
            ]
      },
      {
            "id": "pdf-118",
            "title": "Vinte e um",
            "description": "Os participantes ficaram pr├│ximos a cesta do basquete, determinados em uma sequ├¬ncia, o primeiro far├í um arremesso da linha do lance livre, se acertar ser├í marado um ponto, e voltar├í a fazer o arremesso, se errar, o pr├│ximo participante tentara o arremesso de onde a bola caiu, se acertar, volta ao lance livre e arremessa novamente. Ganha quem fizer 21 pontos primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "9+ anos",
            "materials": [
                  "Bola"
            ],
            "steps": [
                  "Os participantes ficaram pr├│ximos a cesta do basquete, determinados em uma sequ├¬ncia, o primeiro far├í um arremesso da linha do lance livre, se acertar ser├í marado um ponto, e voltar├í a fazer o arremesso, se errar, o pr├│ximo participante tentara o arremesso de onde a bola caiu, se acertar, volta ao lance livre e arremessa novamente. Ganha quem fizer 21 pontos primeiro."
            ]
      },
      {
            "id": "pdf-120",
            "title": "Jogo da velha",
            "description": "O professor dever├í dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambol├¬s em tr├¬s colunas (formato do jogo da velha). Deixar 5 bolas para cada equipe, coloc├í-las a frente dos bambol├¬s. Ao sinal do professor, os primeiros de cada coluna sair├úo correndo e pegaram uma bola e colocar├úo dentro do bambol├¬, voltaram correndo, bateram na m├úo do seu colega e o mesmo sair├í correndo para fazer o mesmo, e assim sucessivamente at├® ÔÇ£fecharÔÇØ o jogo da velha (completar tr├¬s colunas ou diagonal com a cor da sua equipe). Como varia├º├úo, o monitor poder├í colocar obst├ículos a frente do jogo para atrapalhar o participante, como cones, cordas entre outros.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "9 Bambol├¬s",
                  "10 bolas ou objeto que a substitua (5 de cada cor)"
            ],
            "steps": [
                  "O professor dever├í dividir duas equipes e colocar os participantes em colunas, uma equipe ao lado da outra. Organizar os 9 bambol├¬s em tr├¬s colunas (formato do jogo da velha). Deixar 5 bolas para cada equipe, coloc├í-las a frente dos bambol├¬s. Ao sinal do professor, os primeiros de cada coluna sair├úo correndo e pegaram uma bola e colocar├úo dentro do bambol├¬, voltaram correndo, bateram na m├úo do seu colega e o mesmo sair├í correndo para fazer o mesmo, e assim sucessivamente at├® ÔÇ£fecharÔÇØ o jogo da velha (completar tr├¬s colunas ou diagonal com a cor da sua equipe). Como varia├º├úo, o monitor poder├í colocar obst├ículos a frente do jogo para atrapalhar o participante, como cones, cordas entre outros."
            ]
      },
      {
            "id": "pdf-122",
            "title": "Caranguejobol",
            "description": "divididos em dois times, os participantes ficar├úo na posi├º├úo de ÔÇ£caranguejoÔÇØ (sentados no ch├úo com o quadril levantado, apoio apenas das m├úos e dos p├®s.), como um jogo de futebol, disputaram a bola e a cada gol marcado ├® um ponto para cada time. Os gols s├│ poder├úo ser feitos na posi├º├úo, n├úo valer├í se tiver sentado no ch├úo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "bola"
            ],
            "steps": [
                  "divididos em dois times, os participantes ficar├úo na posi├º├úo de ÔÇ£caranguejoÔÇØ (sentados no ch├úo com o quadril levantado, apoio apenas das m├úos e dos p├®s.), como um jogo de futebol, disputaram a bola e a cada gol marcado ├® um ponto para cada time. Os gols s├│ poder├úo ser feitos na posi├º├úo, n├úo valer├í se tiver sentado no ch├úo."
            ]
      },
      {
            "id": "pdf-127",
            "title": "Base 7",
            "description": "Ser├í dividido dois times, um time que atacar├í e um time que ir├í defender. Ficara uma pessoa do time que ir├í defender no meio, e o restante espalhado pela quadra. O time de ataque dever├í ficar posicionado em uma coluna, atr├ís da linha de fundo, a pessoa do meio jogar├í a bola para o primeiro da coluna, do time de ataque, essa pessoa dever├í arremessar a bola o mais longe poss├¡vel e correr passando por todos os bambol├¬s que ficaram espalhados. O time de defesa dever├í pegar a bola e devolver para a pessoa do meio antes que a pessoa do ataque consiga correr nos 7 bambol├¬s. Todos os do time de ataque faram o mesmo. Cada bambol├¬ ter├í pontos, o primeiro bambol├¬ 1 ponto o segundo ser├í 2 pontos e assim sucessivamente. Dever├í ser trocado, quem era ataque vira defesa e quem era defesa vira ataque, ganha o time que conseguir mais pontos, todas as crian├ºas dever├úo correr pelos bambol├¬s. Se a pessoa da defesa, que est├í no meio receber a bola, e a pessoa do ataque n├úo estiver dentro de um bambol├¬, volta para o final da fila.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "7 bambol├¬s",
                  "uma bola"
            ],
            "steps": [
                  "Ser├í dividido dois times, um time que atacar├í e um time que ir├í defender. Ficara uma pessoa do time que ir├í defender no meio, e o restante espalhado pela quadra. O time de ataque dever├í ficar posicionado em uma coluna, atr├ís da linha de fundo, a pessoa do meio jogar├í a bola para o primeiro da coluna, do time de ataque, essa pessoa dever├í arremessar a bola o mais longe poss├¡vel e correr passando por todos os bambol├¬s que ficaram espalhados. O time de defesa dever├í pegar a bola e devolver para a pessoa do meio antes que a pessoa do ataque consiga correr nos 7 bambol├¬s. Todos os do time de ataque faram o mesmo. Cada bambol├¬ ter├í pontos, o primeiro bambol├¬ 1 ponto o segundo ser├í 2 pontos e assim sucessivamente. Dever├í ser trocado, quem era ataque vira defesa e quem era defesa vira ataque, ganha o time que conseguir mais pontos, todas as crian├ºas dever├úo correr pelos bambol├¬s. Se a pessoa da defesa, que est├í no meio receber a bola, e a pessoa do ataque n├úo estiver dentro de um bambol├¬, volta para o final da fila."
            ]
      },
      {
            "id": "pdf-128",
            "title": "Dodgeball",
            "description": "Ser├úo divididos dois times. Cada time ficara em um lado da quadra posicionados atr├ís da linha de fundo. No meio da quadra, estr├úo as bolas, ao sinal do monitor as crian├ºas sa├¡ram correndo para pegar a bola. Come├ºara uma queimada com v├írias bolas, cada pessoa queimada sair├í do jogo, quando algu├®m do time da pessoa queima agarrar a bola, poder├í voltar uma pessoa que foi queima, se algu├®m do time acertar o aro da tabela de basquete voltam duas pessoas, se acertar a cesta voltam todos que foram queimos do seu time. Ganha o time que conseguir queimar todos os advers├írios. -- 33 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "de 2 a 5 bolas"
            ],
            "steps": [
                  "Ser├úo divididos dois times. Cada time ficara em um lado da quadra posicionados atr├ís da linha de fundo. No meio da quadra, estr├úo as bolas, ao sinal do monitor as crian├ºas sa├¡ram correndo para pegar a bola. Come├ºara uma queimada com v├írias bolas, cada pessoa queimada sair├í do jogo, quando algu├®m do time da pessoa queima agarrar a bola, poder├í voltar uma pessoa que foi queima, se algu├®m do time acertar o aro da tabela de basquete voltam duas pessoas, se acertar a cesta voltam todos que foram queimos do seu time. Ganha o time que conseguir queimar todos os advers├írios. -- 33 of 37 --"
            ]
      },
      {
            "id": "pdf-129",
            "title": "Vamos Acordar?",
            "description": "Os alunos dispostos em c├¡rculo sentados ao ch├úo, ou em cadeiras ou at├® mesmo em p├®, as m├úos cruzadas dispostas sobre o peito. Um aluno ficar├í no meio do c├¡rculo com uma bola que dever├í amea├ºar lan├º├í-la a qualquer aluno que estiver no c├¡rculo, este n├úo poder├í mover as m├úos a n├úo ser que realmente ele lance, portanto, o aluno dever├í peg├í-la. O aluno que mover as m├úos ou se la├ºada a bola e deix├í-la cair, sair├í fora da brincadeira e assim por diante, at├® que restar somente um aluno dentre todos os do c├¡rculo. (Para dia de Chuva).",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Uma Bola"
            ],
            "steps": [
                  "Os alunos dispostos em c├¡rculo sentados ao ch├úo, ou em cadeiras ou at├® mesmo em p├®, as m├úos cruzadas dispostas sobre o peito. Um aluno ficar├í no meio do c├¡rculo com uma bola que dever├í amea├ºar lan├º├í-la a qualquer aluno que estiver no c├¡rculo, este n├úo poder├í mover as m├úos a n├úo ser que realmente ele lance, portanto, o aluno dever├í peg├í-la. O aluno que mover as m├úos ou se la├ºada a bola e deix├í-la cair, sair├í fora da brincadeira e assim por diante, at├® que restar somente um aluno dentre todos os do c├¡rculo. (Para dia de Chuva)."
            ]
      },
      {
            "id": "pdf-130",
            "title": "Pega-Pega V├┤lei",
            "description": "Duas equipes come├ºam a jogar um jogo de Voleibol. Quando a boa cair no ch├úo, a equipe que fez o ponto corre atr├ís da equipe que tomou o ponto. Essa equipe tem que passar da linha da ├írea de saque (linha de fundo da quadra) para n├úo ser pego. Al├®m do ponto por ter ca├¡do a bola no ch├úo, se dois alunos forem pegos, a equipe marca dois pontos e assim sucessivamente.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "Uma bola",
                  "algo que d├¡vida a quadra",
                  "uma rede ou uma corda."
            ],
            "steps": [
                  "Duas equipes come├ºam a jogar um jogo de Voleibol. Quando a boa cair no ch├úo, a equipe que fez o ponto corre atr├ís da equipe que tomou o ponto. Essa equipe tem que passar da linha da ├írea de saque (linha de fundo da quadra) para n├úo ser pego. Al├®m do ponto por ter ca├¡do a bola no ch├úo, se dois alunos forem pegos, a equipe marca dois pontos e assim sucessivamente."
            ]
      },
      {
            "id": "pdf-134",
            "title": "Ca├ºador",
            "description": "Um participante ser├í o ca├ºador. Ele deve esconder 5 bambol├¬s em um determinado local. Cada bambol├¬ ter├í 4 cones da mesma cor. Os demais participantes devem encontrar todos os cones e coloc├í-los dentro dos bambol├¬s nas cores correspondentes. O ca├ºador, por sua vez, deve pegar os integrantes e lev├í-los para cadeiras ou bancos pr├®-determinados. O jogador capturado deve retirar o t├¬nis e ficar sentado at├® que algu├®m venha salv├í-lo. Varia├º├Áes: Cada jogador possuir apenas 2 vidas e perder uma delas ├á cada vez que for pego pelo ca├ºador. O ca├ºador e os participantes podem ter uma habilidade espec├¡fica pr├®- determinada: Participantes: Ganhar mais uma vida, come├ºar com um cone, ter o direito de fugir do banco uma vez, conhecer a localiza├º├úo de um bambol├¬ etc. Ca├ºador: Queimar com uma bola, ÔÇ£grudarÔÇØ dois participantes, mudar os cones de lugar ao longo do jogo etc. -- 35 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Bambol├¬s",
                  "cones",
                  "caneta."
            ],
            "steps": [
                  "Um participante ser├í o ca├ºador. Ele deve esconder 5 bambol├¬s em um determinado local. Cada bambol├¬ ter├í 4 cones da mesma cor. Os demais participantes devem encontrar todos os cones e coloc├í-los dentro dos bambol├¬s nas cores correspondentes. O ca├ºador, por sua vez, deve pegar os integrantes e lev├í-los para cadeiras ou bancos pr├®-determinados. O jogador capturado deve retirar o t├¬nis e ficar sentado at├® que algu├®m venha salv├í-lo. Varia├º├Áes: Cada jogador possuir apenas 2 vidas e perder uma delas ├á cada vez que for pego pelo ca├ºador. O ca├ºador e os participantes podem ter uma habilidade espec├¡fica pr├®- determinada: Participantes: Ganhar mais uma vida, come├ºar com um cone, ter o direito de fugir do banco uma vez, conhecer a localiza├º├úo de um bambol├¬ etc. Ca├ºador: Queimar com uma bola, ÔÇ£grudarÔÇØ dois participantes, mudar os cones de lugar ao longo do jogo etc. -- 35 of 37 --"
            ]
      },
      {
            "id": "pdf-135",
            "title": "Defendendo a Torre",
            "description": "Duas equipes, cada uma com uma ÔÇ£baseÔÇØ circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time advers├írio e dentro da ├írea da base de seu time. O objetivo ├® derrubar o cone da outra equipe utilizando uma bola. A equipe que estiver defendendo n├úo pode sair da base e s├│ pode atacar quando recuperar a bola. A equipe que est├í atacando, por sua vez, deve correr rapidamente para a sua base ao perder a posse da bola.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Cones",
                  "bola."
            ],
            "steps": [
                  "Duas equipes, cada uma com uma ÔÇ£baseÔÇØ circular onde um cone deve estar posicionado no centro. Os jogadores devem ficar ao redor da base do time advers├írio e dentro da ├írea da base de seu time. O objetivo ├® derrubar o cone da outra equipe utilizando uma bola. A equipe que estiver defendendo n├úo pode sair da base e s├│ pode atacar quando recuperar a bola. A equipe que est├í atacando, por sua vez, deve correr rapidamente para a sua base ao perder a posse da bola."
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
            "description": "Todos os alunos ficar├úo dentro de um bambol├¬, exceto um que ficar├í fora do bambol├¬. Ao sinal do professor, todos troaram de ÔÇ£casaÔÇØ e sempre um sobrar├í fora do bambol├¬. Usar como varia├º├úo: Eliminar os bambol├¬s para que as crian├ºas trabalhem em equipe sem ningu├®m ficar fora da ÔÇ£casaÔÇØ.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "4+ anos",
            "materials": [
                  "bambol├¬"
            ],
            "steps": [
                  "Todos os alunos ficar├úo dentro de um bambol├¬, exceto um que ficar├í fora do bambol├¬. Ao sinal do professor, todos troaram de ÔÇ£casaÔÇØ e sempre um sobrar├í fora do bambol├¬. Usar como varia├º├úo: Eliminar os bambol├¬s para que as crian├ºas trabalhem em equipe sem ningu├®m ficar fora da ÔÇ£casaÔÇØ."
            ]
      },
      {
            "id": "pdf-18",
            "title": "Mata barata",
            "description": "A turma ser├í dividida em duas equipes, sendo que cada uma delas ter├í uma cor representativa. Cada integrante receber├í um bal├úo (cor da equipe) que, depois de estar cheio de ar, ser├í amarrado com barbante em um dos seus tornozelos. O objetivo da brincadeira ├® que cada integrante proteja o seu bal├úo e, ao mesmo tempo, tente estourar os bal├Áes da equipe advers├íria. Nesse sentido, a equipe vencedora ser├í aquela que conseguir estourar todos os bal├Áes advers├írios e permanecer com apenas um bal├úo cheio. -- 5 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "barbantes",
                  "bexigas"
            ],
            "steps": [
                  "A turma ser├í dividida em duas equipes, sendo que cada uma delas ter├í uma cor representativa. Cada integrante receber├í um bal├úo (cor da equipe) que, depois de estar cheio de ar, ser├í amarrado com barbante em um dos seus tornozelos. O objetivo da brincadeira ├® que cada integrante proteja o seu bal├úo e, ao mesmo tempo, tente estourar os bal├Áes da equipe advers├íria. Nesse sentido, a equipe vencedora ser├í aquela que conseguir estourar todos os bal├Áes advers├írios e permanecer com apenas um bal├úo cheio. -- 5 of 37 --"
            ]
      },
      {
            "id": "pdf-60",
            "title": "Batalha Naval",
            "description": "Divida o local do jogo em duas partes de forma que um lado n├úo possa enxergar o outro (amarre uma corda e coloque um len├ºol por cima). A seguir, as pessoas de cada time escolhem um local para si e n├úo podem se mover da├¡. Quando o jogo come├ºa, cada time ganha algumas bolinhas de papel e devem tentar atingir o outro time com essas ÔÇ£bombasÔÇØ, o time que estiver com menos ÔÇ£bombasÔÇØ em campo vence.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "Bolinhas de papel"
            ],
            "steps": [
                  "Divida o local do jogo em duas partes de forma que um lado n├úo possa enxergar o outro (amarre uma corda e coloque um len├ºol por cima). A seguir, as pessoas de cada time escolhem um local para si e n├úo podem se mover da├¡. Quando o jogo come├ºa, cada time ganha algumas bolinhas de papel e devem tentar atingir o outro time com essas ÔÇ£bombasÔÇØ, o time que estiver com menos ÔÇ£bombasÔÇØ em campo vence."
            ]
      },
      {
            "id": "pdf-62",
            "title": "Campo Minado com mapa",
            "description": "O monitor ir├í organizar os bambol├¬s dispostos ao ch├úo, em 3 ou mais fileiras e em 5 ou mais colunas (de acordo com o monitor) o monitor dever├í formular o mapa onde se localizam todas as \"minas terrestres\", apenas o monitor poder├í ver, atrav├®s do mapa o monitor dir├í se as crian├ºas est├úo indo pelo lugar certo, caso pise em um lugar que tenha a ÔÇ£bombaÔÇØ dever├í voltar a fila. Ganha quem chegar sem pisar nenhuma vez nas ÔÇ£bombasÔÇØ, objetivo ├® trabalhar a mem├│ria das crian├ºas. -- 15 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "10 ou mais bambol├¬s",
                  "caso n├úo tenha",
                  "usar marca├º├úo no ch├úo"
            ],
            "steps": [
                  "O monitor ir├í organizar os bambol├¬s dispostos ao ch├úo, em 3 ou mais fileiras e em 5 ou mais colunas (de acordo com o monitor) o monitor dever├í formular o mapa onde se localizam todas as \"minas terrestres\", apenas o monitor poder├í ver, atrav├®s do mapa o monitor dir├í se as crian├ºas est├úo indo pelo lugar certo, caso pise em um lugar que tenha a ÔÇ£bombaÔÇØ dever├í voltar a fila. Ganha quem chegar sem pisar nenhuma vez nas ÔÇ£bombasÔÇØ, objetivo ├® trabalhar a mem├│ria das crian├ºas. -- 15 of 37 --"
            ]
      },
      {
            "id": "pdf-65",
            "title": "Corrida dos sapatos",
            "description": "Ser├í dividida duas equipes, todos os participantes dever├úo tirar o sapato e colocar num local determinado pelo monitor (que misturar├í todos os sapatos), ao sinal do monitor dever├úo correr e procurar seus sapatos, quando achados dever├úo voltar ao seu lugar de origem. A equipe que estiver cal├ºada primeiro ganha.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Ser├í dividida duas equipes, todos os participantes dever├úo tirar o sapato e colocar num local determinado pelo monitor (que misturar├í todos os sapatos), ao sinal do monitor dever├úo correr e procurar seus sapatos, quando achados dever├úo voltar ao seu lugar de origem. A equipe que estiver cal├ºada primeiro ganha."
            ]
      },
      {
            "id": "pdf-68",
            "title": "Corrida P├┤",
            "description": "Divide-se duas equipes, cada equipe fica em uma ponta dos bambol├¬s. Ao sinal do monitor as primeiras crian├ºas de cada fila pulam os bambol├¬s at├® se encontrarem, tiram pedra, papel ou tesoura, a vencedora continua pulando as casas at├® que venha outra crian├ºa e assim sucessivamente, quando uma crian├ºa chegar ao lado oposto marca-se um ponto. Ganha a equipe que passar todas as crian├ºas par o outro lado.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "bambol├¬s ou c├¡rculos desenhados no ch├úo"
            ],
            "steps": [
                  "Divide-se duas equipes, cada equipe fica em uma ponta dos bambol├¬s. Ao sinal do monitor as primeiras crian├ºas de cada fila pulam os bambol├¬s at├® se encontrarem, tiram pedra, papel ou tesoura, a vencedora continua pulando as casas at├® que venha outra crian├ºa e assim sucessivamente, quando uma crian├ºa chegar ao lado oposto marca-se um ponto. Ganha a equipe que passar todas as crian├ºas par o outro lado."
            ]
      },
      {
            "id": "pdf-70",
            "title": "Bambol├¬ de guerra",
            "description": "Jogam uma dupla de cada equipe. As duplas entrar├úo em um bambol├¬ e ficar├úo de costas para a outra, pois correr├úo de frente. Ser├úo feitos dois riscos, cada um a exatos 2 metros de cada lado do bambol├¬. O Objetivo ├® correr e fazer for├ºa para ultrapassar a linha, mas ser├í dif├¡cil, pois a outra dupla ir├í fazer o mesmo. A dupla que conseguir ultrapassar o risco, vence. -- 17 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [
                  "Bambol├¬"
            ],
            "steps": [
                  "Jogam uma dupla de cada equipe. As duplas entrar├úo em um bambol├¬ e ficar├úo de costas para a outra, pois correr├úo de frente. Ser├úo feitos dois riscos, cada um a exatos 2 metros de cada lado do bambol├¬. O Objetivo ├® correr e fazer for├ºa para ultrapassar a linha, mas ser├í dif├¡cil, pois a outra dupla ir├í fazer o mesmo. A dupla que conseguir ultrapassar o risco, vence. -- 17 of 37 --"
            ]
      },
      {
            "id": "pdf-82",
            "title": "Ca├ºa Palitos de time",
            "description": "As crian├ºas s├úo divididas em dois grupos, cada participante recebe 3 palitos e a batalha ser├í na pedra, papel ou tesoura. Os jogadores s├│ poder├úo participar se tiver dois ou mais palitos, caso tenha um s├│ a pessoa se senta e torce para que algu├®m do seu time te d├¬ um palito para que voc├¬ possa voltar a batalhar. Ganha o time q conseguir conquistar a maioria dos palitos e deixar o time advers├írio todo no ch├úo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Palitos"
            ],
            "steps": [
                  "As crian├ºas s├úo divididas em dois grupos, cada participante recebe 3 palitos e a batalha ser├í na pedra, papel ou tesoura. Os jogadores s├│ poder├úo participar se tiver dois ou mais palitos, caso tenha um s├│ a pessoa se senta e torce para que algu├®m do seu time te d├¬ um palito para que voc├¬ possa voltar a batalhar. Ganha o time q conseguir conquistar a maioria dos palitos e deixar o time advers├írio todo no ch├úo."
            ]
      },
      {
            "id": "pdf-85",
            "title": "Genius Humano",
            "description": "- Montar um quadrado 3x3 com 6 bambol├¬s no ch├úo. - Separar em 2 times, defensor e atacante, sempre em filas - Em cada round, um time pula dentro de um bambol├¬, enquanto o outro time decora a ordem que o time Genius (atacante) montou, e assim que escolherem a ordem o time defensor (memorizadores/defensor) tem que pular nos mesmos bambol├¬s - A cada etapa, acrescenta-se 1 pulo, exemplo: primeira etapa - 1 bambol├¬; segunda etapa - 2 bambol├¬s, sendo o primeiro o mesmo que o colega anterior pulou e assim por diante, um por vez na fila, alternando entre ataque e defesa",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "bambol├¬s",
                  "ou c├¡rculos desenhados no ch├úo"
            ],
            "steps": [
                  "- Montar um quadrado 3x3 com 6 bambol├¬s no ch├úo. - Separar em 2 times, defensor e atacante, sempre em filas - Em cada round, um time pula dentro de um bambol├¬, enquanto o outro time decora a ordem que o time Genius (atacante) montou, e assim que escolherem a ordem o time defensor (memorizadores/defensor) tem que pular nos mesmos bambol├¬s - A cada etapa, acrescenta-se 1 pulo, exemplo: primeira etapa - 1 bambol├¬; segunda etapa - 2 bambol├¬s, sendo o primeiro o mesmo que o colega anterior pulou e assim por diante, um por vez na fila, alternando entre ataque e defesa"
            ]
      },
      {
            "id": "pdf-87",
            "title": "Queimada abelha rainha",
            "description": "Ser├úo divididos dois times, cada time ir├í escolher a sua ÔÇ£abelha rainhaÔÇØ sem que a outra equipe saiba. O objetivo ├® proteger a abelha rainha para que ela n├úo seja queimada, mas ao mesmo tempo disfar├ºando para que n├úo descubram quem ├® a abelha. Ganha o time que fiar com a abelha rainha at├® o fim, ou o que queimar a abelha do time advers├írio.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "bola"
            ],
            "steps": [
                  "Ser├úo divididos dois times, cada time ir├í escolher a sua ÔÇ£abelha rainhaÔÇØ sem que a outra equipe saiba. O objetivo ├® proteger a abelha rainha para que ela n├úo seja queimada, mas ao mesmo tempo disfar├ºando para que n├úo descubram quem ├® a abelha. Ganha o time que fiar com a abelha rainha at├® o fim, ou o que queimar a abelha do time advers├írio."
            ]
      },
      {
            "id": "pdf-94",
            "title": "Barra Manteiga",
            "description": "Divididos em dois times, cada time de um lado da quadra, colocados em fileira um ao lado do outro, ser├í escolhido um integrante de um time para ir at├® o outo time, que estar├úo com as m├úos estendidas, esse integrante ir├í bater nas m├úos de seus rivais cantando ÔÇ£barra manteiga, na saia da nega, 1,2,3ÔÇØ, no ÔÇ£3ÔÇØ dever├í bater com mais for├ºa na m├úo de algu├®m e sair correndo de volta a sua equipe, se for pego pela pessoa antes de cruzar a linha de seu time, passara a ser integrante de outro time.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [],
            "steps": [
                  "Divididos em dois times, cada time de um lado da quadra, colocados em fileira um ao lado do outro, ser├í escolhido um integrante de um time para ir at├® o outo time, que estar├úo com as m├úos estendidas, esse integrante ir├í bater nas m├úos de seus rivais cantando ÔÇ£barra manteiga, na saia da nega, 1,2,3ÔÇØ, no ÔÇ£3ÔÇØ dever├í bater com mais for├ºa na m├úo de algu├®m e sair correndo de volta a sua equipe, se for pego pela pessoa antes de cruzar a linha de seu time, passara a ser integrante de outro time."
            ]
      },
      {
            "id": "pdf-96",
            "title": "Cora├º├úo Valente",
            "description": "Brincadeira l├║dica baseada em pedra, papel ou tesoura. O monitor dividir├í duas equipes iguais, e escolher├í um ÔÇ£reiÔÇØ para cada equipe. Cada time com uma base em diferentes lados do espa├ºo. As crian├ºas ir├úo guerrear com batalhas, ÔÇ£melhor de 3ÔÇØ de pedra, papel ou tesoura. Cada guerra tira uma vida do perdedor, cada guerreiro tem 3 vidas e o rei 2, por├®m o rei a cada batalha ganha tirar├í duas vidas do perdedor. -- 24 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Espa├ºo amplo",
                  "um colete para demarcar o ÔÇ£reiÔÇØ"
            ],
            "steps": [
                  "Brincadeira l├║dica baseada em pedra, papel ou tesoura. O monitor dividir├í duas equipes iguais, e escolher├í um ÔÇ£reiÔÇØ para cada equipe. Cada time com uma base em diferentes lados do espa├ºo. As crian├ºas ir├úo guerrear com batalhas, ÔÇ£melhor de 3ÔÇØ de pedra, papel ou tesoura. Cada guerra tira uma vida do perdedor, cada guerreiro tem 3 vidas e o rei 2, por├®m o rei a cada batalha ganha tirar├í duas vidas do perdedor. -- 24 of 37 --"
            ]
      },
      {
            "id": "pdf-109",
            "title": "Stop em estafeta",
            "description": "Divididos em equipes, cada equipe escolhera uma pessoa para escrever, ├® como um jogo de stop normal (Nome, cor, fruta, animal, objeto etc.) O restante da equipe estar├í em colunas, o monitor escolher├í uma letra e ao seu sinal, um de cada vez, sa├¡ra correndo e dir├í para quem estiver escrevendo um nome com a inicial da letra escolhida. Marca-se um ponto para a equipe que acabar tudo e gritar stop primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "Papel",
                  "caneta para cada equipe"
            ],
            "steps": [
                  "Divididos em equipes, cada equipe escolhera uma pessoa para escrever, ├® como um jogo de stop normal (Nome, cor, fruta, animal, objeto etc.) O restante da equipe estar├í em colunas, o monitor escolher├í uma letra e ao seu sinal, um de cada vez, sa├¡ra correndo e dir├í para quem estiver escrevendo um nome com a inicial da letra escolhida. Marca-se um ponto para a equipe que acabar tudo e gritar stop primeiro."
            ]
      },
      {
            "id": "pdf-116",
            "title": "Corrida do p├® colado",
            "description": "Divididos em equipes, dois jogadores de cada equipe corre├úo com os p├®s amarrados at├® o lugar determinado pelo monitor, ganha a equipe que chegar primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "algo para amarrar os p├®s dos jogadores"
            ],
            "steps": [
                  "Divididos em equipes, dois jogadores de cada equipe corre├úo com os p├®s amarrados at├® o lugar determinado pelo monitor, ganha a equipe que chegar primeiro."
            ]
      },
      {
            "id": "pdf-117",
            "title": "Din├ómica da m├úo colada no p├®",
            "description": "Divididos em equipes, os participantes se colocaram em uma coluna, dever├úo ficar na posi├º├úo de ÔÇ£caranguejoÔÇØ (sentados com a m├úo apoiada no ch├úo e o quadril levantado, fora do ch├úo), nessa posi├º├úo, os participantes dever├úo colocar suas m├úos nos p├®s do colega de tr├ís, e assim sucessivamente, ao sinal do professor tentaram caminhar at├® o lugar determinado, ganha a equipe que chegar primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "10+ anos",
            "materials": [],
            "steps": [
                  "Divididos em equipes, os participantes se colocaram em uma coluna, dever├úo ficar na posi├º├úo de ÔÇ£caranguejoÔÇØ (sentados com a m├úo apoiada no ch├úo e o quadril levantado, fora do ch├úo), nessa posi├º├úo, os participantes dever├úo colocar suas m├úos nos p├®s do colega de tr├ís, e assim sucessivamente, ao sinal do professor tentaram caminhar at├® o lugar determinado, ganha a equipe que chegar primeiro."
            ]
      },
      {
            "id": "pdf-124",
            "title": "Mango",
            "description": "O monitor dividir├í duas equipes. Em sua m├úo ter├í uma folha com v├írias palavras, os times tentar├úo adivinhar as palavras, exemplo: o monitor dar├í uma dica ÔÇ£bebidaÔÇØ e cada time ir├í chutar um tipo de bebida, at├® acertar, ganha um ponto o time que acertar. No meio de todas essas palavras ter├í a palavra MANGO, quando chegar nessa palavra o time que estiver com mais pontos ir├í escolher um mico para o outro time pagar. Ganha o jogo quem estiver mais pontos, quando a lista de palavras acabar. Obs.: a palavra MANGO poder├í se repetir durante o jogo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [
                  "Papel",
                  "Caneta"
            ],
            "steps": [
                  "O monitor dividir├í duas equipes. Em sua m├úo ter├í uma folha com v├írias palavras, os times tentar├úo adivinhar as palavras, exemplo: o monitor dar├í uma dica ÔÇ£bebidaÔÇØ e cada time ir├í chutar um tipo de bebida, at├® acertar, ganha um ponto o time que acertar. No meio de todas essas palavras ter├í a palavra MANGO, quando chegar nessa palavra o time que estiver com mais pontos ir├í escolher um mico para o outro time pagar. Ganha o jogo quem estiver mais pontos, quando a lista de palavras acabar. Obs.: a palavra MANGO poder├í se repetir durante o jogo."
            ]
      },
      {
            "id": "pdf-125",
            "title": "Jogo da Mem├│ria Humano",
            "description": "Do grupo, dois s├úo escolhidos para adivinhar quem ser├úo os pares. Para isso, s├úo levados para fora/outro ambiente, enquanto os colegas restantes se dividem em duplas e combinam um gesto/movimento/sinal comum para ambos. Organizam-se em colunas e embaralham-se para dificultar a localiza├º├úo dos pares. A dupla retorna e dever├í adivinhar os pares, escolhendo dois por vez, os quais executar├úo seu gesto/movimento/sinal (como quando as pe├ºas do jogo tradicional s├úo viradas). A dupla pode jogar de modo cooperativo ou competitivo. Ap├│s um certo n├║mero de acertos/jogadas, pode-se trocar os pap├®is, os pares e os movimentos combinados, enriquecendo a atividade. (Para dias de chuva) -- 32 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [],
            "steps": [
                  "Do grupo, dois s├úo escolhidos para adivinhar quem ser├úo os pares. Para isso, s├úo levados para fora/outro ambiente, enquanto os colegas restantes se dividem em duplas e combinam um gesto/movimento/sinal comum para ambos. Organizam-se em colunas e embaralham-se para dificultar a localiza├º├úo dos pares. A dupla retorna e dever├í adivinhar os pares, escolhendo dois por vez, os quais executar├úo seu gesto/movimento/sinal (como quando as pe├ºas do jogo tradicional s├úo viradas). A dupla pode jogar de modo cooperativo ou competitivo. Ap├│s um certo n├║mero de acertos/jogadas, pode-se trocar os pap├®is, os pares e os movimentos combinados, enriquecendo a atividade. (Para dias de chuva) -- 32 of 37 --"
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
            "title": "Dan├ºa da cadeira cooperativa",
            "description": "Igual a dan├ºa das cadeiras, mas conforme for tirando as cadeiras, as crian├ºas que ficarem sem cadeiras dever├úo sentar-se no colo do colega, at├® restar uma cadeira, um devera se sentar no colo do outro sem que ningu├®m fique em p├®",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "cadeiras ou bancos",
                  "m├║sica"
            ],
            "steps": [
                  "Igual a dan├ºa das cadeiras, mas conforme for tirando as cadeiras, as crian├ºas que ficarem sem cadeiras dever├úo sentar-se no colo do colega, at├® restar uma cadeira, um devera se sentar no colo do outro sem que ningu├®m fique em p├®"
            ]
      },
      {
            "id": "pdf-20",
            "title": "Kung fu panda",
            "description": "Todas as crian├ºas se juntar├úo ao meio, com um dos p├®s ├á frente, quando o monitor falar ÔÇ£kung fu pandaÔÇØ todas as crian├ºas se afastaram para tr├ís com um salto. O objetivo ├® eliminar os colegas, tocando nos bra├ºos ou pernas, mas s├│ poder├í utilizar um movimento por vez para atingir um colega pr├│ximo. O colega que estiver prestes a ser atingido poder├í desviar, mas usando apenas um movimento tamb├®m. Ao acertar algum membro de algum companheiro, este ÔÇ£perder├íÔÇØ o membro atingido, n├úo podendo usar para ÔÇ£atacarÔÇØ. Ganha quem ao final estiver com mais membros n├úo atingidos.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [],
            "steps": [
                  "Todas as crian├ºas se juntar├úo ao meio, com um dos p├®s ├á frente, quando o monitor falar ÔÇ£kung fu pandaÔÇØ todas as crian├ºas se afastaram para tr├ís com um salto. O objetivo ├® eliminar os colegas, tocando nos bra├ºos ou pernas, mas s├│ poder├í utilizar um movimento por vez para atingir um colega pr├│ximo. O colega que estiver prestes a ser atingido poder├í desviar, mas usando apenas um movimento tamb├®m. Ao acertar algum membro de algum companheiro, este ÔÇ£perder├íÔÇØ o membro atingido, n├úo podendo usar para ÔÇ£atacarÔÇØ. Ganha quem ao final estiver com mais membros n├úo atingidos."
            ]
      },
      {
            "id": "pdf-22",
            "title": "Aro nos cones",
            "description": "Arremessar os bambol├¬s nos cones e tentar acert├í-lo dentro do cone. Pode ser utilizado garrafas pets.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "bambol├¬s",
                  "cones"
            ],
            "steps": [
                  "Arremessar os bambol├¬s nos cones e tentar acert├í-lo dentro do cone. Pode ser utilizado garrafas pets."
            ]
      },
      {
            "id": "pdf-28",
            "title": "Carni├ºa",
            "description": "Consiste num alinhamento de crian├ºas, em r├ípido deslocamento, uma a uma, pulando sobre as costas dos companheiros parados, curvados, apoiando as m├úos nas coxas. Pulada a ├║ltima carni├ºa, o jogador corre e para adiante, esperando que os demais saltem sobre ele. ├ë sempre revezado. -- 7 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [],
            "steps": [
                  "Consiste num alinhamento de crian├ºas, em r├ípido deslocamento, uma a uma, pulando sobre as costas dos companheiros parados, curvados, apoiando as m├úos nas coxas. Pulada a ├║ltima carni├ºa, o jogador corre e para adiante, esperando que os demais saltem sobre ele. ├ë sempre revezado. -- 7 of 37 --"
            ]
      },
      {
            "id": "pdf-37",
            "title": "Quebra-Cabe├ºa Gigante",
            "description": "Os participantes devem, inicialmente, colorir um desenho em uma folha de papel. Ap├│s isso o desenho ser├í recortado em algumas partes. As ÔÇ£pe├ºasÔÇØ dos desenhos ser├úo escondidas em um determinado local. Vence o participante que conseguir achar suas pe├ºas e montar o seu desenho primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Desenhos para colorir",
                  "Tesoura",
                  "cola ou fita adesiva."
            ],
            "steps": [
                  "Os participantes devem, inicialmente, colorir um desenho em uma folha de papel. Ap├│s isso o desenho ser├í recortado em algumas partes. As ÔÇ£pe├ºasÔÇØ dos desenhos ser├úo escondidas em um determinado local. Vence o participante que conseguir achar suas pe├ºas e montar o seu desenho primeiro."
            ]
      },
      {
            "id": "pdf-39",
            "title": "A natureza fala",
            "description": "O monitor mostrar├í um som para a crian├ºa, exemplo o barulho da chuva e a crian├ºa dir├í qual ├® aquele som. Pode tamb├®m mostrar uma foto e pedir para a crian├ºa imitar o som.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [],
            "steps": [
                  "O monitor mostrar├í um som para a crian├ºa, exemplo o barulho da chuva e a crian├ºa dir├í qual ├® aquele som. Pode tamb├®m mostrar uma foto e pedir para a crian├ºa imitar o som."
            ]
      },
      {
            "id": "pdf-47",
            "title": "Palmas de papel",
            "description": "Todos ficam em p├® com uma folha entre as m├úos, ao sinal do professor bateram palmas sem deixar a folha cair no ch├úo, quem deixar cair se senta no ch├úo.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "1 folha para cada crian├ºa"
            ],
            "steps": [
                  "Todos ficam em p├® com uma folha entre as m├úos, ao sinal do professor bateram palmas sem deixar a folha cair no ch├úo, quem deixar cair se senta no ch├úo."
            ]
      },
      {
            "id": "pdf-52",
            "title": "N├úo Pode Rir",
            "description": "Crian├ºas em duplas, frente a frente. Uma delas ├® espelho da outra. Imitar os movimentos do competidor sem rir. O que est├í ├á frente do espelho pode fazer careta. Paga multa (como no jogo de prendas) o que perder a competi├º├úo. Na repeti├º├úo da brincadeira, os pap├®is se invertem.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [],
            "steps": [
                  "Crian├ºas em duplas, frente a frente. Uma delas ├® espelho da outra. Imitar os movimentos do competidor sem rir. O que est├í ├á frente do espelho pode fazer careta. Paga multa (como no jogo de prendas) o que perder a competi├º├úo. Na repeti├º├úo da brincadeira, os pap├®is se invertem."
            ]
      },
      {
            "id": "pdf-74",
            "title": "Quem ├® o L├¡der",
            "description": "Forma-se um c├¡rculo, uma crian├ºa ir├í sair do c├¡rculo e ficara de costas, o restante das crian├ºas escolher├í um l├¡der, sem que a crian├ºa que est├í fora do c├¡rculo saiba quem ├®. Depois de escolhido, essa crian├ºa come├ºar├í a fazer movimentos, ou barulhos, todos dever├úo imita-lo, e a crian├ºa que est├í fora tentar├í descobrir quem est├í fazendo os movimentos. -- 18 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "6+ anos",
            "materials": [],
            "steps": [
                  "Forma-se um c├¡rculo, uma crian├ºa ir├í sair do c├¡rculo e ficara de costas, o restante das crian├ºas escolher├í um l├¡der, sem que a crian├ºa que est├í fora do c├¡rculo saiba quem ├®. Depois de escolhido, essa crian├ºa come├ºar├í a fazer movimentos, ou barulhos, todos dever├úo imita-lo, e a crian├ºa que est├í fora tentar├í descobrir quem est├í fazendo os movimentos. -- 18 of 37 --"
            ]
      },
      {
            "id": "pdf-75",
            "title": "M├íquina de Lavar roupa",
            "description": "Divide-se a turma em c├¡rculos com o mesmo n├║mero de participantes, todos numerados. Um aluno ├® escolhido para ficar fora do c├¡rculo. O jogo inicia quando o professor gritar um n├║mero e o aluno que est├í do lado de fora dever├í peg├í-lo. seus colegas para impedir q o n├║mero citado seja pego dever├úo girar de um lado para outro protegendo-o sem soltaras m├úos. (Para Chuva).",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "5+ anos",
            "materials": [
                  "Nenhum."
            ],
            "steps": [
                  "Divide-se a turma em c├¡rculos com o mesmo n├║mero de participantes, todos numerados. Um aluno ├® escolhido para ficar fora do c├¡rculo. O jogo inicia quando o professor gritar um n├║mero e o aluno que est├í do lado de fora dever├í peg├í-lo. seus colegas para impedir q o n├║mero citado seja pego dever├úo girar de um lado para outro protegendo-o sem soltaras m├úos. (Para Chuva)."
            ]
      },
      {
            "id": "pdf-77",
            "title": "Cara-a-Cara tem├ítico",
            "description": "Uma foto de cada participante deve ser tirada e impressa duas vezes, em duas folhas distintas. As folhas devem ser coladas em um suporte, metade delas voltada para um lado e a outra metade, de maneira espelhada, voltada para o sentido contr├írio. Dois integrantes devem jogar o jogo, ambos devem escolher apenas uma das fotos de pessoa e manter a escolha em segredo. Vence o jogo quem conseguir adivinhar primeiro a figura escolhida. Apenas perguntas sobre as caracter├¡sticas f├¡sicas podem ser feitas e as respostas s├│ podem ser SIM ou N├âO.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Impressora",
                  "folha de papel ou cartolina."
            ],
            "steps": [
                  "Uma foto de cada participante deve ser tirada e impressa duas vezes, em duas folhas distintas. As folhas devem ser coladas em um suporte, metade delas voltada para um lado e a outra metade, de maneira espelhada, voltada para o sentido contr├írio. Dois integrantes devem jogar o jogo, ambos devem escolher apenas uma das fotos de pessoa e manter a escolha em segredo. Vence o jogo quem conseguir adivinhar primeiro a figura escolhida. Apenas perguntas sobre as caracter├¡sticas f├¡sicas podem ser feitas e as respostas s├│ podem ser SIM ou N├âO."
            ]
      },
      {
            "id": "pdf-79",
            "title": "Caminho Sensorial",
            "description": "Vendados, os participantes devem fazer todo o caminho da corda, sem olhar e sentindo-a apenas com os p├®s.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Corda."
            ],
            "steps": [
                  "Vendados, os participantes devem fazer todo o caminho da corda, sem olhar e sentindo-a apenas com os p├®s."
            ]
      },
      {
            "id": "pdf-80",
            "title": "Acerte a cor",
            "description": "V├írias folhas coloridas devem ser espalhadas em um local. Os participantes recebem v├írios l├ípis com as mesmas cores das folhas que est├úo espalhadas. Vence o participante que conseguir colocar todos os l├ípis nas folhas de cores correspondentes primeiros.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Folhas coloridas",
                  "l├ípis colorido",
                  "giz ou outro material colorido",
                  "qualquer."
            ],
            "steps": [
                  "V├írias folhas coloridas devem ser espalhadas em um local. Os participantes recebem v├írios l├ípis com as mesmas cores das folhas que est├úo espalhadas. Vence o participante que conseguir colocar todos os l├ípis nas folhas de cores correspondentes primeiros."
            ]
      },
      {
            "id": "pdf-88",
            "title": "Mist├®rio",
            "description": "Os monitores criaram uma hist├│ria, e nas cenas desse mist├®rio iram colocar dicas, para que as crian├ºas leiam essas dicas e descubram os lugares onde est├úo as outras dicas, at├® chegar ao ├║ltimo local, onde estar├í a ├║ltima dica, levar├í para o monitor e ele contar├í o final do mist├®rio. -- 22 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "caneta",
                  "peda├ºos de papeis"
            ],
            "steps": [
                  "Os monitores criaram uma hist├│ria, e nas cenas desse mist├®rio iram colocar dicas, para que as crian├ºas leiam essas dicas e descubram os lugares onde est├úo as outras dicas, at├® chegar ao ├║ltimo local, onde estar├í a ├║ltima dica, levar├í para o monitor e ele contar├í o final do mist├®rio. -- 22 of 37 --"
            ]
      },
      {
            "id": "pdf-90",
            "title": "Canibal",
            "description": "Uma pessoa ser├í o canibal que ficar├í com a cor preta, os restantes das cores ser├úo escondidos pelo monitor em lugares diferentes. Ao sinal as crian├ºas sair├úo a procura das cores, quando encontrar uma cor dever├í pass├í-la no bra├ºo, caso o ÔÇ£canibalÔÇØ a pegue, dever├í passar a tinta preta por cima de todas as cores que a pessoa j├í encontrou. Ganha a brincadeira quem achar todas as cores primeiro.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "de 5 a 10 cores diferentes",
                  "de canetinhas ou de tinta guache."
            ],
            "steps": [
                  "Uma pessoa ser├í o canibal que ficar├í com a cor preta, os restantes das cores ser├úo escondidos pelo monitor em lugares diferentes. Ao sinal as crian├ºas sair├úo a procura das cores, quando encontrar uma cor dever├í pass├í-la no bra├ºo, caso o ÔÇ£canibalÔÇØ a pegue, dever├í passar a tinta preta por cima de todas as cores que a pessoa j├í encontrou. Ganha a brincadeira quem achar todas as cores primeiro."
            ]
      },
      {
            "id": "pdf-98",
            "title": "Crime",
            "description": "Jogam-se 3 grupos, mas antes 3 pessoas s├úo escolhidas para serem os personagens do crime. O Monitor montar├í uma hist├│ria juntamente com os personagens. Cada um dos tr├¬s ser├úo os suspeitos do crime, mas apenas um ser├í o assassino, apenas os tr├¬s e o monitor iram saber. Montada a hist├│ria os personagens se esconderam, para que os grupos possam come├ºar a jogar. O objetivo dos grupos ├® descobrir quem ├® o assassino, fazendo perguntas aos personagens, exemplo: ÔÇ£o que voc├¬ estava fazendo na hora do crimeÔÇØ. Ganha o grupo que descobrir o assassino. (Obs.: As crian├ºas escolhidas como personagens dever├úo ter uma mine hist├│ria para contar sobre o que estava fazendo quando o crime aconteceu e dever├úo contar sua vers├úo para os grupos, quando forem perguntar.)",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [],
            "steps": [
                  "Jogam-se 3 grupos, mas antes 3 pessoas s├úo escolhidas para serem os personagens do crime. O Monitor montar├í uma hist├│ria juntamente com os personagens. Cada um dos tr├¬s ser├úo os suspeitos do crime, mas apenas um ser├í o assassino, apenas os tr├¬s e o monitor iram saber. Montada a hist├│ria os personagens se esconderam, para que os grupos possam come├ºar a jogar. O objetivo dos grupos ├® descobrir quem ├® o assassino, fazendo perguntas aos personagens, exemplo: ÔÇ£o que voc├¬ estava fazendo na hora do crimeÔÇØ. Ganha o grupo que descobrir o assassino. (Obs.: As crian├ºas escolhidas como personagens dever├úo ter uma mine hist├│ria para contar sobre o que estava fazendo quando o crime aconteceu e dever├úo contar sua vers├úo para os grupos, quando forem perguntar.)"
            ]
      },
      {
            "id": "pdf-99",
            "title": "Sorriso milion├írio",
            "description": "Cada um fica com tr├¬s palitos, todos devem que ficar andando, se misturando. Quando o monitor gritar ÔÇ£paraÔÇØ, cada participante deve correr para frente de outro e fazer palha├ºadas. O outro tem que ficar parado, sem rir. Quem rir perde um palito. O desafio vai se repetindo e quem ficar sem palitos sai da brincadeira. Quem tiver mais ganha. N├úo vale fazer c├│cegas para o outro rir. -- 25 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "palitos ou algo que substitua"
            ],
            "steps": [
                  "Cada um fica com tr├¬s palitos, todos devem que ficar andando, se misturando. Quando o monitor gritar ÔÇ£paraÔÇØ, cada participante deve correr para frente de outro e fazer palha├ºadas. O outro tem que ficar parado, sem rir. Quem rir perde um palito. O desafio vai se repetindo e quem ficar sem palitos sai da brincadeira. Quem tiver mais ganha. N├úo vale fazer c├│cegas para o outro rir. -- 25 of 37 --"
            ]
      },
      {
            "id": "pdf-106",
            "title": "Raul Gil",
            "description": "Forma-se duplas. Joga-se um adedanha para saber \"O que ├® que tem em tal lugar com a letra tal?\". Cada dupla tem 30 segundos para dar a sua resposta. Quem n├úo responder em 30 segundos, ├® eliminado, cantando \"O Raul perguntou, voc├¬ n├úo acertou, pegue seu banquinho e saia de mansinho\". Ganha a dupla que ficar por ├║ltimo",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "Forma-se duplas. Joga-se um adedanha para saber \"O que ├® que tem em tal lugar com a letra tal?\". Cada dupla tem 30 segundos para dar a sua resposta. Quem n├úo responder em 30 segundos, ├® eliminado, cantando \"O Raul perguntou, voc├¬ n├úo acertou, pegue seu banquinho e saia de mansinho\". Ganha a dupla que ficar por ├║ltimo"
            ]
      },
      {
            "id": "pdf-111",
            "title": "Salada de Fruta",
            "description": "O monitor falar├í uma fruta, em seguida ele escolher├í algu├®m para que fale a fruta que o monitor falou e uma de sua escolha (exemplo: monitor: ma├ºa, crian├ºa: ma├ºa banana) e assim sucessivamente, objetivo falar todas as frutas que j├í foram ditas mais a sua. Trabalhar a mem├│ria das crian├ºas -- 28 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "8+ anos",
            "materials": [],
            "steps": [
                  "O monitor falar├í uma fruta, em seguida ele escolher├í algu├®m para que fale a fruta que o monitor falou e uma de sua escolha (exemplo: monitor: ma├ºa, crian├ºa: ma├ºa banana) e assim sucessivamente, objetivo falar todas as frutas que j├í foram ditas mais a sua. Trabalhar a mem├│ria das crian├ºas -- 28 of 37 --"
            ]
      },
      {
            "id": "pdf-123",
            "title": "Cachorro e gato cego",
            "description": "Alunos em c├¡rculos, dois ir├úo para o centro; um ser├í o cachorro e outro o gato. Veda-se os olhos de ambos, toda vez que o cachorro latir, o gato miar├í, o cachorro dever├í tentar peg├í-lo, se conseguir, troca-se as crian├ºas.",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "7+ anos",
            "materials": [
                  "Len├ºos ou vendas"
            ],
            "steps": [
                  "Alunos em c├¡rculos, dois ir├úo para o centro; um ser├í o cachorro e outro o gato. Veda-se os olhos de ambos, toda vez que o cachorro latir, o gato miar├í, o cachorro dever├í tentar peg├í-lo, se conseguir, troca-se as crian├ºas."
            ]
      },
      {
            "id": "pdf-132",
            "title": "Tribunal.",
            "description": "Os participantes devem ser divididos em tr├¬s grupos (Ataque, defesa e ju├¡zes). Um caso aleat├│rio deve ser inventado pelo narrador da hist├│ria. Cada grupo ter├í uma fun├º├úo espec├¡fica. Ataque: Acusar a defesa e provar que est├úo certos. Defesa: Defender-se das acusa├º├Áes e tentar inocentar-se Ju├¡zes: Escolher qual dos lados tem raz├úo e atribui-lo a vit├│ria. -- 34 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [],
            "steps": [
                  "Os participantes devem ser divididos em tr├¬s grupos (Ataque, defesa e ju├¡zes). Um caso aleat├│rio deve ser inventado pelo narrador da hist├│ria. Cada grupo ter├í uma fun├º├úo espec├¡fica. Ataque: Acusar a defesa e provar que est├úo certos. Defesa: Defender-se das acusa├º├Áes e tentar inocentar-se Ju├¡zes: Escolher qual dos lados tem raz├úo e atribui-lo a vit├│ria. -- 34 of 37 --"
            ]
      },
      {
            "id": "pdf-137",
            "title": "Mist├®rio Explosivo",
            "description": "O narrador deve escrever uma hist├│ria de suspense e mist├®rio tendo obrigatoriamente uma v├¡tima e diversos suspeitos. Ap├│s isso v├írias pistas que levam ├á resolu├º├úo do mist├®rio devem ser colocadas dentro de bexigas e escondidas em um local pr├®-determinado. Os participantes devem encontrar essas bexigas e lev├í-las para a ÔÇ£DelegaciaÔÇØ, montada pelo narrador, e entregar as pistas para o ÔÇ£XerifeÔÇØ. Os integrantes devem descobrir: Quem cometeu o crime? Como ele cometeu o crime? Por que ele cometeu o crime? -- 36 of 37 --",
            "duration": "15-20 min",
            "participants": "4+",
            "age": "Livre",
            "materials": [
                  "Bexiga",
                  "papel",
                  "l├ípis",
                  "caneta."
            ],
            "steps": [
                  "O narrador deve escrever uma hist├│ria de suspense e mist├®rio tendo obrigatoriamente uma v├¡tima e diversos suspeitos. Ap├│s isso v├írias pistas que levam ├á resolu├º├úo do mist├®rio devem ser colocadas dentro de bexigas e escondidas em um local pr├®-determinado. Os participantes devem encontrar essas bexigas e lev├í-las para a ÔÇ£DelegaciaÔÇØ, montada pelo narrador, e entregar as pistas para o ÔÇ£XerifeÔÇØ. Os integrantes devem descobrir: Quem cometeu o crime? Como ele cometeu o crime? Por que ele cometeu o crime? -- 36 of 37 --"
            ]
      }
]
  },
]
