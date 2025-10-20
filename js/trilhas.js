// Sistema de Trilhas - Bird Box Caça ao Tesouro
console.log("📚 Carregando sistema de trilhas...");

// 10 Trilhas temáticas com 5 perguntas cada
const TRILHAS = {
  // TRILHA 1 - SOBREVIVÊNCIA
  1: [
    {
      id: 1,
      texto:
        "No mundo cego de Bird Box, a sobrevivência depende dos outros sentidos. Malorie aprende a confiar nos sons ao seu redor. Encontre no livro 'O Iluminado' a frase sobre o medo que paralisa.",
      pergunta: "Qual frase descreve o medo incapacitante?",
      respostaCorreta: [
        "medo morte em vida",
        "medo paralisa",
        "medo incapacita",
      ],
      livro: "O Iluminado",
      localizacao: "Seção Terror - Prateleira T12",
      instrucoes: "Procure no capítulo 15 a reflexão sobre o medo.",
      fraseParaAnotar: "O MEDO É A MORTE EM VIDA",
    },
    {
      id: 2,
      texto:
        "Os pássaros são os guardiões em Bird Box. Sua agitação alerta para perigos invisíveis. Encontre em 'A Revolução dos Bichos' o princípio dos animais.",
      pergunta: "Qual o lema da revolução animal?",
      respostaCorreta: [
        "quatro pernas bom",
        "duas pernas ruim",
        "quatro pernas bom duas pernas ruim",
      ],
      livro: "A Revolução dos Bichos",
      localizacao: "Seção Clássicos - Prateleira C45",
      instrucoes: "Procure no capítulo 1 os mandamentos dos animais.",
      fraseParaAnotar: "QUATRO PERNAS BOM DUAS PERNAS RUIM",
    },
    {
      id: 3,
      texto:
        "A jornada pelo rio representa a única esperança. Encontre em 'As Crônicas de Nárnia' o conselho sobre coragem.",
      pergunta: "O que Aslam diz sobre momentos seguros?",
      respostaCorreta: [
        "não há tempo seguro",
        "tempo seguro não existe",
        "sempre perigo",
      ],
      livro: "As Crônicas de Nárnia",
      localizacao: "Seção Infantojuvenil - Prateleira IJ23",
      instrucoes:
        "Procure no capítulo 'O Leão, a Feiticeira e o Guarda-Roupa'.",
      fraseParaAnotar: "NÃO HÁ TEMPO SEGURO",
    },
    {
      id: 4,
      texto:
        "As vendas protegem da escuridão mortal. Encontre em 'Dom Quixote' a visão distorcida da realidade.",
      pergunta: "O que Dom Quixote vê nos moinhos?",
      respostaCorreta: [
        "gigantes perigosos",
        "moinhos são gigantes",
        "gigantes ameaçadores",
      ],
      livro: "Dom Quixote",
      localizacao: "Seção Clássicos - Prateleira C18",
      instrucoes: "Procure no primeiro capítulo a cena dos moinhos.",
      fraseParaAnotar: "GIGANTES PERIGOSOS",
    },
    {
      id: 5,
      texto:
        "A obsessão pode ser tão perigosa quanto a escuridão. Encontre em 'Moby Dick' a famosa introdução.",
      pergunta: "Como começa Moby Dick?",
      respostaCorreta: [
        "chama-me ismael",
        "me chamem ismael",
        "ismael narrador",
      ],
      livro: "Moby Dick",
      localizacao: "Seção Aventura - Prateleira A89",
      instrucoes: "A frase está na primeira página do livro.",
      fraseParaAnotar: "CHAMA-ME ISMAEL",
    },
  ],

  // TRILHA 2 - CORAGEM
  2: [
    {
      id: 1,
      texto:
        "Enfrentar o desconhecido exige coragem. Encontre em 'Orgulho e Preconceito' a verdade universal.",
      pergunta: "Qual a famosa primeira frase?",
      respostaCorreta: [
        "verdade universalmente reconhecida",
        "verdade universal",
        "homem solteiro fortuna",
      ],
      livro: "Orgulho e Preconceito",
      localizacao: "Seção Romance - Prateleira R12",
      instrucoes: "A frase está na abertura do livro.",
      fraseParaAnotar: "VERDADE UNIVERSALMENTE RECONHECIDA",
    },
    {
      id: 2,
      texto:
        "A solidão testa a resistência humana. Encontre em 'Robinson Crusoé' a situação inicial.",
      pergunta: "Como Robinson se descreve?",
      respostaCorreta: [
        "naufrago sozinho ilha",
        "sozinho ilha deserta",
        "sobrevivente naufrágio",
      ],
      livro: "Robinson Crusoé",
      localizacao: "Seção Aventura - Prateleira A34",
      instrucoes: "Procure no diário do capítulo 5.",
      fraseParaAnotar: "NAUFRAGO SOZINHO NA ILHA",
    },
    {
      id: 3,
      texto:
        "Aventuras exigem sair da zona de conforto. Encontre em 'O Hobbit' o convite de Gandalf.",
      pergunta: "O que Gandalf oferece a Bilbo?",
      respostaCorreta: [
        "boas aventuras",
        "aventura emocionante",
        "jornada emocionante",
      ],
      livro: "O Hobbit",
      localizacao: "Seção Fantasia - Prateleira F56",
      instrucoes: "Procure no primeiro capítulo a conversa inicial.",
      fraseParaAnotar: "QUER BOAS AVENTURAS",
    },
    {
      id: 4,
      texto:
        "Enfrentar o mal requer coragem. Encontre em 'Drácula' o convite sinistro.",
      pergunta: "Como Drácula recebe Harker?",
      respostaCorreta: ["entre livremente", "goze da paz", "bem-vindo castelo"],
      livro: "Drácula",
      localizacao: "Seção Terror - Prateleira T89",
      instrucoes: "Procure na chegada ao castelo no capítulo 2.",
      fraseParaAnotar: "ENTRE LIVREMENTE E GOZE DA PAZ",
    },
    {
      id: 5,
      texto:
        "O convite para a transformação. Encontre em 'A Cabana' o chamado misterioso.",
      pergunta: "O que Mack recebe?",
      respostaCorreta: ["convite cabana", "carta cabana", "encontro cabana"],
      livro: "A Cabana",
      localizacao: "Seção Drama - Prateleira D23",
      instrucoes: "Procure no início do livro o convite.",
      fraseParaAnotar: "CONVITE PARA A CABANA",
    },
  ],

  // TRILHA 3 - ESPERANÇA
  3: [
    {
      id: 1,
      texto:
        "Proteger a inocência em tempos sombrios. Encontre em 'O Apanhador no Campo de Centeio' o desejo de Holden.",
      pergunta: "O que Holden quer ser?",
      respostaCorreta: [
        "apanhador campo centeio",
        "salvar crianças",
        "protetor inocência",
      ],
      livro: "O Apanhador no Campo de Centeio",
      localizacao: "Seção Americana - Prateleira LA78",
      instrucoes: "Procure no capítulo 22 a explicação.",
      fraseParaAnotar: "APANHADOR NO CAMPO DE CENTEIO",
    },
    {
      id: 2,
      texto:
        "A esperança contra a censura. Encontre em 'Fahrenheit 451' o símbolo da repressão.",
      pergunta: "A que temperatura o papel queima?",
      respostaCorreta: ["fahrenheit 451", "451 graus", "queima livros"],
      livro: "Fahrenheit 451",
      localizacao: "Seção Ficção - Prateleira FC23",
      instrucoes: "A informação está no título.",
      fraseParaAnotar: "FAHRENHEIT 451",
    },
    {
      id: 3,
      texto:
        "A redenção é possível para todos. Encontre em 'Os Miseráveis' o gesto do bispo.",
      pergunta: "O que o bispo faz por Valjean?",
      respostaCorreta: ["comprou alma deus", "redenção alma", "salvação"],
      livro: "Os Miseráveis",
      localizacao: "Seção Clássicos - Prateleira C89",
      instrucoes: "Procure no encontro com o bispo.",
      fraseParaAnotar: "COMPROU SUA ALMA PARA DEUS",
    },
    {
      id: 4,
      texto:
        "A esperança em uma sociedade melhor. Encontre em 'Admirável Mundo Novo' os pilares sociais.",
      pergunta: "Qual o lema da sociedade?",
      respostaCorreta: [
        "comunidade identidade estabilidade",
        "sociedade perfeita",
        "mundo novo",
      ],
      livro: "Admirável Mundo Novo",
      localizacao: "Seção Ficção - Prateleira FI45",
      instrucoes: "Procure no primeiro capítulo.",
      fraseParaAnotar: "COMUNIDADE IDENTIDADE ESTABILIDADE",
    },
    {
      id: 5,
      texto:
        "O amor como identidade. Encontre em 'O Morro dos Ventos Uivantes' a declaração de Catherine.",
      pergunta: "O que Catherine diz sobre Heathcliff?",
      respostaCorreta: ["sou heathcliff", "alma mesma", "identidade amor"],
      livro: "O Morro dos Ventos Uivantes",
      localizacao: "Seção Romance - Prateleira R56",
      instrucoes: "Procure no capítulo 9 a declaração.",
      fraseParaAnotar: "EU SOU HEATHCLIFF",
    },
  ],

  // TRILHA 4 - MISTÉRIO
  4: [
    {
      id: 1,
      texto:
        "O mistério do tesouro perdido. Encontre em 'O Código Da Vinci' a busca inicial.",
      pergunta: "O que está escondido sob o Louvre?",
      respostaCorreta: [
        "segredo milenar",
        "tesouro secreto",
        "mistério antigo",
      ],
      livro: "O Código Da Vinci",
      localizacao: "Seção Suspense - Prateleira S34",
      instrucoes: "Procure no capítulo 4 a descoberta.",
      fraseParaAnotar: "SEGREDO MILENAR",
    },
    {
      id: 2,
      texto:
        "O enigma da identidade. Encontre em 'O Retrato de Dorian Gray' o pacto.",
      pergunta: "O que Dorian deseja?",
      respostaCorreta: [
        "eterna juventude",
        "juventude eterna",
        "nunca envelhecer",
      ],
      livro: "O Retrato de Dorian Gray",
      localizacao: "Seção Clássicos - Prateleira C67",
      instrucoes: "Procure no capítulo 2 o desejo.",
      fraseParaAnotar: "ETERNA JUVENTUDE",
    },
    {
      id: 3,
      texto:
        "O mistério do assassinato. Encontre em 'Assassinato no Expresso Oriente' a pergunta crucial.",
      pergunta: "Quem matou Ratchett?",
      respostaCorreta: ["todos mataram", "culpa coletiva", "todos culpados"],
      livro: "Assassinato no Expresso Oriente",
      localizacao: "Seção Policial - Prateleira P89",
      instrucoes: "Procure no desfecho do mistério.",
      fraseParaAnotar: "TODOS MATARAM",
    },
    {
      id: 4,
      texto:
        "O enigma do labirinto. Encontre em 'O Nome do Vento' a busca do protagonista.",
      pergunta: "O que Kvothe procura?",
      respostaCorreta: ["nome do vento", "segredo vento", "poder vento"],
      livro: "O Nome do Vento",
      localizacao: "Seção Fantasia - Prateleira F78",
      instrucoes: "Procure no título do livro.",
      fraseParaAnotar: "O NOME DO VENTO",
    },
    {
      id: 5,
      texto:
        "O mistério do manuscrito. Encontre em 'A Sombra do Vento' o cemitério de livros.",
      pergunta: "O que é o Cemitério dos Livros Esquecidos?",
      respostaCorreta: [
        "livros esquecidos",
        "biblioteca secreta",
        "livros perdidos",
      ],
      livro: "A Sombra do Vento",
      localizacao: "Seção Mistério - Prateleira M12",
      instrucoes: "Procure no início do livro.",
      fraseParaAnotar: "LIVROS ESQUECIDOS",
    },
  ],

  // TRILHA 5 - AVENTURA
  5: [
    {
      id: 1,
      texto:
        "A aventura da descoberta. Encontre em 'Viagem ao Centro da Terra' o ponto de partida.",
      pergunta: "Onde começa a jornada?",
      respostaCorreta: [
        "cratera sneffels",
        "vulcano sneffels",
        "islandia sneffels",
      ],
      livro: "Viagem ao Centro da Terra",
      localizacao: "Seção Ficção - Prateleira F34",
      instrucoes: "Procure a localização do portal.",
      fraseParaAnotar: "CRATERA SNEFFELS",
    },
    {
      id: 2,
      texto:
        "A aventura marítima. Encontre em 'Vinte Mil Léguas Submarinas' a descrição do Náutilus.",
      pergunta: "Como é o submarino?",
      respostaCorreta: ["narval gigante", "monstro marinho", "narval aço"],
      livro: "Vinte Mil Léguas Submarinas",
      localizacao: "Seção Aventura - Prateleira A56",
      instrucoes: "Procure a primeira aparição do Náutilus.",
      fraseParaAnotar: "NARVAL GIGANTE",
    },
    {
      id: 3,
      texto:
        "A aventura espacial. Encontre em '2001: Uma Odisseia no Espaço' o monolito misterioso.",
      pergunta: "O que os macacos encontram?",
      respostaCorreta: ["monolito negro", "pedra negra", "objeto misterioso"],
      livro: "2001: Uma Odisseia no Espaço",
      localizacao: "Seção Ficção - Prateleira FC67",
      instrucoes: "Procure a descoberta no início.",
      fraseParaAnotar: "MONOLITO NEGRO",
    },
    {
      id: 4,
      texto:
        "A aventura na selva. Encontre em 'O Livro da Selva' a lei dos lobos.",
      pergunta: "Qual a lei da selva?",
      respostaCorreta: [
        "força lobo matilha",
        "lobo fortaleza",
        "matilha força",
      ],
      livro: "O Livro da Selva",
      localizacao: "Seção Infantil - Prateleira I45",
      instrucoes: "Procure os ensinamentos de Baloo.",
      fraseParaAnotar: "FORÇA DO LOBO É A MATILHA",
    },
    {
      id: 5,
      texto:
        "A aventura do conhecimento. Encontre em 'O Mundo de Sofia' a pergunta filosófica.",
      pergunta: "Qual a primeira pergunta?",
      respostaCorreta: ["quem és tu", "quem é você", "identidade pergunta"],
      livro: "O Mundo de Sofia",
      localizacao: "Seção Filosofia - Prateleira FIL34",
      instrucoes: "Procure o cartão misterioso.",
      fraseParaAnotar: "QUEM ÉS TU",
    },
  ],

  // TRILHA 6 - SABEDORIA
  6: [
    {
      id: 1,
      texto:
        "A sabedoria começa com o autoconhecimento. Encontre em 'O Pequeno Príncipe' a lição da raposa.",
      pergunta: "O que é invisível aos olhos?",
      respostaCorreta: [
        "essencial invisível",
        "verdade invisível",
        "importante invisível",
      ],
      livro: "O Pequeno Príncipe",
      localizacao: "Seção Infantil - Prateleira I34",
      instrucoes: "Procure no capítulo 21 o diálogo com a raposa.",
      fraseParaAnotar: "O ESSENCIAL É INVISÍVEL AOS OLHOS",
    },
    {
      id: 2,
      texto:
        "A manipulação da verdade é uma arma. Encontre em '1984' os slogans do Partido.",
      pergunta: "Quais são os paradoxos do Partido?",
      respostaCorreta: [
        "guerra é paz",
        "liberdade escravidão",
        "ignorância força",
      ],
      livro: "1984",
      localizacao: "Seção Ficção - Prateleira F12",
      instrucoes: "Procure no primeiro capítulo os três slogans.",
      fraseParaAnotar: "GUERRA É PAZ LIBERDADE É ESCRAVIDÃO IGNORÂNCIA É FORÇA",
    },
    {
      id: 3,
      texto:
        "O amor persiste mesmo na escuridão. Encontre em 'A Moreninha' a declaração final.",
      pergunta: "Como Augusto declara seu amor?",
      respostaCorreta: [
        "amo-te mais que tudo",
        "amo-te infinitamente",
        "amor eterno",
      ],
      livro: "A Moreninha",
      localizacao: "Seção Romance - Prateleira R67",
      instrucoes: "Procure no capítulo final a confissão de amor.",
      fraseParaAnotar: "AMO-TE MAIS QUE TUDO",
    },
    {
      id: 4,
      texto:
        "A comunidade é fundamental para sobreviver. Encontre em 'O Cortiço' a metáfora social.",
      pergunta: "Como é descrito o cortiço?",
      respostaCorreta: ["organismo coletivo", "ser coletivo", "vida coletiva"],
      livro: "O Cortiço",
      localizacao: "Seção Brasileira - Prateleira B29",
      instrucoes: "Procure no capítulo 3 a descrição do cortiço.",
      fraseParaAnotar: "ORGANISMO COLETIVO",
    },
    {
      id: 5,
      texto:
        "A transformação pode ser a única saída. Encontre em 'A Metamorfose' o início impactante.",
      pergunta: "O que acontece com Gregor Samsa?",
      respostaCorreta: [
        "acordou transformado",
        "transformou-se inseto",
        "metamorfose",
      ],
      livro: "A Metamorfose",
      localizacao: "Seção Estrangeira - Prateleira E56",
      instrucoes: "A frase está na primeira linha do livro.",
      fraseParaAnotar: "GREGOR SAMSA ACORDOU TRANSFORMADO",
    },
  ],

  // TRILHA 7 - DESTINO
  7: [
    {
      id: 1,
      texto:
        "O destino tece seus fios. Encontre em 'Romeu e Julieta' a famosa cena.",
      pergunta: "O que Romeu vê na janela?",
      respostaCorreta: ["que luz janela", "julieta sol", "luz beleza"],
      livro: "Romeu e Julieta",
      localizacao: "Seção Teatro - Prateleira TE34",
      instrucoes: "Procure a cena do balcão no Ato II.",
      fraseParaAnotar: "QUE LUZ ALI NA JANELA",
    },
    {
      id: 2,
      texto:
        "A jornada da meia-idade. Encontre em 'A Divina Comédia' o início da epopeia.",
      pergunta: "Como começa a Divina Comédia?",
      respostaCorreta: ["meio caminho vida", "caminho vida", "selva escura"],
      livro: "A Divina Comédia",
      localizacao: "Seção Poesia - Prateleira P67",
      instrucoes: "A frase está no primeiro canto do Inferno.",
      fraseParaAnotar: "NO MEIO DO CAMINHO DA NOSSA VIDA",
    },
    {
      id: 3,
      texto:
        "A coragem de viver o presente. Encontre em 'O Poder do Agora' o conceito central.",
      pergunta: "Qual o poder do momento presente?",
      respostaCorreta: ["poder agora", "força presente", "momento agora"],
      livro: "O Poder do Agora",
      localizacao: "Seção Autoajuda - Prateleira AA45",
      instrucoes: "Procure no título do primeiro capítulo.",
      fraseParaAnotar: "O PODER DO AGORA",
    },
    {
      id: 4,
      texto:
        "A coragem de assumir quem se é. Encontre em 'O Estranho Misterioso' a revelação.",
      pergunta: "Quem é o estranho?",
      respostaCorreta: ["sou satanás", "anjo caído", "diabo"],
      livro: "O Estranho Misterioso",
      localizacao: "Seção Literatura - Prateleira L78",
      instrucoes: "Procure no capítulo 3 a revelação.",
      fraseParaAnotar: "SOU SATANÁS",
    },
    {
      id: 5,
      texto:
        "A superação das limitações. Encontre em 'Helen Keller' o momento crucial.",
      pergunta: "Qual o dia mais importante?",
      respostaCorreta: [
        "dia mais importante vida",
        "dia crucial",
        "momento decisivo",
      ],
      livro: "Helen Keller",
      localizacao: "Seção Biografia - Prateleira B12",
      instrucoes: "Procure o momento do aprendizado.",
      fraseParaAnotar: "DIA MAIS IMPORTANTE DA MINHA VIDA",
    },
  ],

  // TRILHA 8 - CONHECIMENTO
  8: [
    {
      id: 1,
      texto:
        "A busca pelo conhecimento eterno. Encontre em 'O Nome da Rosa' a frase final.",
      pergunta: "O que permanece no final?",
      respostaCorreta: [
        "rosa permanece nome",
        "nome sobrevive",
        "rosa simbólica",
      ],
      livro: "O Nome da Rosa",
      localizacao: "Seção Mistério - Prateleira M34",
      instrucoes: "Procure no final do livro.",
      fraseParaAnotar: "A ROSA PERMANECE EM SEU NOME",
    },
    {
      id: 2,
      texto:
        "A esperança nos laços únicos. Encontre em 'O Pequeno Príncipe' a lição da raposa.",
      pergunta: "O que a amizade cria?",
      respostaCorreta: ["cativar único", "laço especial", "amizade única"],
      livro: "O Pequeno Príncipe",
      localizacao: "Seção Infantil - Prateleira IP78",
      instrucoes: "Procure no capítulo 21.",
      fraseParaAnotar: "CATIVAR TE FEZ ÚNICO",
    },
    {
      id: 3,
      texto:
        "A esperança na jornada de retorno. Encontre em 'A Odisseia' a descrição de Ulisses.",
      pergunta: "Como Homero descreve Ulisses?",
      respostaCorreta: ["homem mil ardis", "astucioso herói", "sábio ardiloso"],
      livro: "A Odisseia",
      localizacao: "Seção Épicos - Prateleira E23",
      instrucoes: "Procure na abertura do poema.",
      fraseParaAnotar: "HOMEM DE MIL ARDIS",
    },
    {
      id: 4,
      texto:
        "A esperança na memória. Encontre em 'Cem Anos de Solidão' o início memorável.",
      pergunta: "Como começa o livro?",
      respostaCorreta: [
        "muitos anos depois",
        "frente pelotão",
        "lembraria tarde",
      ],
      livro: "Cem Anos de Solidão",
      localizacao: "Seção Realismo - Prateleira RM56",
      instrucoes: "A frase está na primeira página.",
      fraseParaAnotar: "MUITOS ANOS DEPOIS",
    },
    {
      id: 5,
      texto:
        "O enigma do tempo. Encontre em 'O Físico' a busca pelo conhecimento.",
      pergunta: "O que Rob J. busca?",
      respostaCorreta: [
        "conhecimento cura",
        "sabedoria antiga",
        "ciência perdida",
      ],
      livro: "O Físico",
      localizacao: "Seção Histórico - Prateleira H45",
      instrucoes: "Procure no propósito da jornada.",
      fraseParaAnotar: "CONHECIMENTO CURA",
    },
  ],

  // TRILHA 9 - LIBERDADE
  9: [
    {
      id: 1,
      texto:
        "O mistério da ilha. Encontre em 'A Ilha do Tesouro' o mapa secreto.",
      pergunta: "O que o mapa revela?",
      respostaCorreta: ["ilha tesouro", "tesouro escondido", "mapa tesouro"],
      livro: "A Ilha do Tesouro",
      localizacao: "Seção Aventura - Prateleira A23",
      instrucoes: "Procure a descoberta do mapa.",
      fraseParaAnotar: "ILHA TESOURO",
    },
    {
      id: 2,
      texto:
        "O enigma do sonho. Encontre em 'A Interpretação dos Sonhos' a definição.",
      pergunta: "O que são os sonhos para Freud?",
      respostaCorreta: [
        "realização desejos",
        "desejos realizados",
        "vontades sonho",
      ],
      livro: "A Interpretação dos Sonhos",
      localizacao: "Seção Psicologia - Prateleira PS12",
      instrucoes: "Procure na introdução.",
      fraseParaAnotar: "REALIZAÇÃO DE DESEJOS",
    },
    {
      id: 3,
      texto: "O mistério do oráculo. Encontre em 'Edipo Rei' a profecia.",
      pergunta: "Qual a maldição de Édipo?",
      respostaCorreta: ["matar pai", "casar mãe", "destino trágico"],
      livro: "Édipo Rei",
      localizacao: "Seção Teatro - Prateleira TE89",
      instrucoes: "Procure a profecia no início.",
      fraseParaAnotar: "MATAR O PAI CASAR COM A MÃE",
    },
    {
      id: 4,
      texto:
        "O enigma final. Encontre em 'O Segredo de Brokeback Mountain' o amor proibido.",
      pergunta: "O que os homens escondem?",
      respostaCorreta: ["amor secreto", "paixão proibida", "afeto escondido"],
      livro: "O Segredo de Brokeback Mountain",
      localizacao: "Seção Drama - Prateleira D67",
      instrucoes: "Procure a revelação do segredo.",
      fraseParaAnotar: "AMOR SECRETO",
    },
    {
      id: 5,
      texto:
        "A aventura do herói. Encontre em 'A Guerra dos Tronos' o lema dos Stark.",
      pergunta: "Qual o lema da Casa Stark?",
      respostaCorreta: [
        "inverno está chegando",
        "inverno chegando",
        "frio chegando",
      ],
      livro: "A Guerra dos Tronos",
      localizacao: "Seção Fantasia - Prateleira F89",
      instrucoes: "Procure o símbolo da família.",
      fraseParaAnotar: "O INVERNO ESTÁ CHEGANDO",
    },
  ],

  // TRILHA 10 - IMAGINAÇÃO
  10: [
    {
      id: 1,
      texto:
        "A aventura da imaginação. Encontre em 'Alice no País das Maravilhas' o conselho do Gato.",
      pergunta: "O que o Gato diz a Alice?",
      respostaCorreta: ["somos todos loucos", "mundo loucura", "loucura geral"],
      livro: "Alice no País das Maravilhas",
      localizacao: "Seção Infantil - Prateleira I67",
      instrucoes: "Procure o diálogo com o Gato.",
      fraseParaAnotar: "SOMOS TODOS LOUCOS",
    },
    {
      id: 2,
      texto:
        "A aventura da sobrevivência. Encontre em 'O Senhor das Moscas' a queda do avião.",
      pergunta: "Como as crianças chegam à ilha?",
      respostaCorreta: ["acidente avião", "avião caiu", "naufrágio aéreo"],
      livro: "O Senhor das Moscas",
      localizacao: "Seção Drama - Prateleira D78",
      instrucoes: "Procure o início da história.",
      fraseParaAnotar: "ACIDENTE DE AVIÃO",
    },
    {
      id: 3,
      texto:
        "A aventura do desconhecido. Encontre em 'A Máquina do Tempo' a descrição do futuro.",
      pergunta: "Como é o ano 802.701?",
      respostaCorreta: ["futuro distante", "ano 802701", "era futura"],
      livro: "A Máquina do Tempo",
      localizacao: "Seção Ficção - Prateleira F45",
      instrucoes: "Procure a chegada ao futuro.",
      fraseParaAnotar: "ANO 802701",
    },
    {
      id: 4,
      texto:
        "A aventura final. Encontre em 'As Viagens de Gulliver' a chegada a Lilipute.",
      pergunta: "O que Gulliver encontra?",
      respostaCorreta: ["homens pequenos", "povo pequeno", "seres minúsculos"],
      livro: "As Viagens de Gulliver",
      localizacao: "Seção Sátira - Prateleira S56",
      instrucoes: "Procure o despertar em Lilipute.",
      fraseParaAnotar: "HOMENS PEQUENOS",
    },
    {
      id: 5,
      texto:
        "A coragem do amor proibido. Encontre em 'Romeu e Julieta' a famosa cena.",
      pergunta: "O que Romeu vê na janela?",
      respostaCorreta: ["que luz janela", "julieta sol", "luz beleza"],
      livro: "Romeu e Julieta",
      localizacao: "Seção Teatro - Prateleira TE34",
      instrucoes: "Procure a cena do balcão no Ato II.",
      fraseParaAnotar: "QUE LUZ ALI NA JANELA",
    },
  ],
};
function normalizar(str) {
  return str
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

// Distância de Levenshtein
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

// --- VALIDAÇÃO DE RESPOSTA COM TOLERÂNCIA ---
function validarRespostaComTolerancia(
  respostaUsuario,
  respostasCorretas,
  tolerancia = 3
) {
  const usuario = normalizar(respostaUsuario);

  return respostasCorretas.some((resposta) => {
    const correta = normalizar(resposta);

    const distancia = levenshtein(usuario, correta);

    // Tolerância proporcional ao tamanho da frase
    const toleranciaAjustada = Math.max(
      tolerancia,
      Math.floor(correta.length / 5)
    );

    return distancia <= toleranciaAjustada;
  });
}

// --- SORTEIO DE PERGUNTAS ---
function sortearPerguntasDaTrilha(trilhaNumero) {
  const trilhaCompleta = TRILHAS[trilhaNumero];
  if (!trilhaCompleta) return null;
  return [...trilhaCompleta].sort(() => Math.random() - 0.5).slice(0, 5);
}

function sortearTrilha() {
  const trilhasDisponiveis = Object.keys(TRILHAS).map(Number);
  const trilhaSorteada =
    trilhasDisponiveis[Math.floor(Math.random() * trilhasDisponiveis.length)];
  return {
    numero: trilhaSorteada,
    perguntas: sortearPerguntasDaTrilha(trilhaSorteada),
  };
}

// --- FUNÇÕES DE ACESSO ---
function obterTrilha(numeroTrilha) {
  return TRILHAS[numeroTrilha] || null;
}

function obterPista(trilha, numeroPista) {
  if (!trilha || numeroPista < 0 || numeroPista >= trilha.length) return null;
  return trilha[numeroPista];
}

function obterFrasesColetadas(palavrasChave) {
  return palavrasChave.join(" ");
}

// --- CARREGAMENTO ---
console.log(
  "✅ Sistema de trilhas carregado com",
  Object.keys(TRILHAS).length,
  "trilhas (5 perguntas cada)"
);

// --- EXPORTAÇÃO ---
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    TRILHAS,
    sortearTrilha,
    sortearPerguntasDaTrilha,
    obterTrilha,
    obterPista,
    obterFrasesColetadas,
    validarRespostaComTolerancia,
  };
}
