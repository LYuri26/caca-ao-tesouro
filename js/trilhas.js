// Sistema de Trilhas - Bird Box Caça ao Tesouro
console.log("📚 Carregando sistema de trilhas...");

// 10 Trilhas temáticas com 5 perguntas cada (50 livros)
// Gerado para: estilo "caça ao tesouro" — livro: dica autor/ano/gênero; localizacao: dica de capítulo; instrucoes: dica do assunto
const TRILHAS = {
  1: [
    {
      id: 1,
      texto:
        "Encontre no acervo o livro que discute tecnologia aplicada à empresa. Procure a afirmação chave sobre inovação organizacional.",
      pergunta: "Qual frase descreve a importância da tecnologia nas empresas?",
      respostaCorreta: [
        "tecnologia melhora processos",
        "tecnologia impulsiona a empresa",
        "melhora processos e eficiencia",
      ],
      livro:
        "Informática na empresa — Aldemar de Araújo Santos (guia técnico/prático)",
      localizacao: "Capítulo 2: Sistemas de Informação nas Organizações",
      instrucoes:
        "Procure a passagem que relaciona tecnologia com eficiência operacional.",
      fraseParaAnotar: "TECNOLOGIA MELHORA PROCESSOS",
    },
    {
      id: 2,
      texto:
        "Localize o livro sobre IA aplicada. Busque no capítulo que explica aprendizagem de máquina aplicada a negócios.",
      pergunta: "Qual conceito descreve máquinas aprendendo com dados?",
      respostaCorreta: [
        "aprendizado de maquina",
        "machine learning",
        "aprender com dados",
      ],
      livro:
        "Inteligência Artificial — Cairo L. Jr e Takashi Yoneyama (técnico, ~2018)",
      localizacao: "Capítulo 4: Aprendizado de Máquina",
      instrucoes:
        "Procure a definição do conceito básico de aprendizado automático.",
      fraseParaAnotar: "APRENDIZADO DE MÁQUINA",
    },
    {
      id: 3,
      texto:
        "Procure o livro que trata de conduta empresarial. No capítulo sobre valores, há uma frase curta sobre ética.",
      pergunta: "Qual frase resume a ética organizacional?",
      respostaCorreta: [
        "ética é responsabilidade",
        "valores norteiam acao",
        "etica responsabilidade social",
      ],
      livro:
        "Ética nas organizações — Elizete Passos (texto acadêmico/prático)",
      localizacao: "Capítulo 1: Valores e Conduta",
      instrucoes:
        "Busque a passagem que define ética nas decisões empresariais.",
      fraseParaAnotar: "ÉTICA É RESPONSABILIDADE",
    },
    {
      id: 4,
      texto:
        "Encontre o livro que analisa comportamento e mudança. No capítulo de liderança há uma metáfora sobre 'queijo'.",
      pergunta: "O que simboliza o 'queijo' no contexto do livro?",
      respostaCorreta: [
        "mudanca oportunidade",
        "oportunidade cambiamento",
        "adaptacao novidade",
      ],
      livro:
        "Eu sei quem tem seu queijo — Dr. Montgomery Lee, Ph.D (autoajuda/comportamento)",
      localizacao: "Capítulo 3: Como lidar com mudanças",
      instrucoes:
        "A dica refere-se ao que o 'queijo' representa simbolicamente.",
      fraseParaAnotar: "O QUEIJO REPRESENTA OPORTUNIDADE",
    },
    {
      id: 5,
      texto:
        "Procure o texto que aborda qualidade em processos. No capítulo sobre controle estatístico tem uma máxima sobre melhoria contínua.",
      pergunta: "Qual frase define melhoria contínua?",
      respostaCorreta: [
        "melhoria continua processo",
        "busca constante excelencia",
        "aperfeicoamento continuo",
      ],
      livro:
        "Gestão de qualidade — Luiz César Ribeiro Carpinetti (gestão/qualidade)",
      localizacao: "Capítulo 6: Melhoria Contínua e Controle",
      instrucoes: "Busque a sentença que sintetiza a filosofia da qualidade.",
      fraseParaAnotar: "MELHORIA CONTÍNUA DO PROCESSO",
    },
  ],

  2: [
    {
      id: 1,
      texto:
        "Encontre o livro que combina qualidade e inovação em serviços. No capítulo sobre eficiência há um ensinamento curto.",
      pergunta: "Qual frase sintetiza eficiência em serviços?",
      respostaCorreta: [
        "clientes satisfeitos fidelizam",
        "satisfacao gera fidelidade",
        "servico gera fidelidade",
      ],
      livro:
        "Quem comeu o meu hamburguer? — Subir Chowdhury (qualidade/serviço)",
      localizacao: "Capítulo 2: A experiência do cliente",
      instrucoes:
        "Procure a afirmação que liga qualidade a fidelização do cliente.",
      fraseParaAnotar: "CLIENTES SATISFEITOS FIDELIZAM",
    },
    {
      id: 2,
      texto:
        "Procure autora que fala de gestão de pessoas. No capítulo sobre recrutamento há uma linha sobre encontrar talentos.",
      pergunta: "O que se diz sobre contratar bons profissionais?",
      respostaCorreta: [
        "contrate talento certo",
        "pessoas certas fazem diferenca",
        "talento e ajuste cultural",
      ],
      livro:
        "Gestão de pessoas nas organizações — Sylvia Constant Vergara (gestão de RH)",
      localizacao: "Capítulo 4: Recrutamento e Seleção",
      instrucoes: "Procure a recomendação prática sobre contratação.",
      fraseParaAnotar: "PESSOAS CERTAS FAZEM DIFERENÇA",
    },
    {
      id: 3,
      texto:
        "Encontre a obra sobre tendências e futuro. No capítulo central há uma previsão sobre estilos de liderança.",
      pergunta: "Que característica o autor indica para líderes do futuro?",
      respostaCorreta: [
        "visao tendencia global",
        "pensamento estrategico",
        "lideranca visionaria",
      ],
      livro: "O líder do futuro — John Naisbitt (futurologia/gestão)",
      localizacao: "Capítulo 1: Tendências e Liderança",
      instrucoes:
        "Procure a frase que descreve a habilidade-chave do líder moderno.",
      fraseParaAnotar: "LÍDERES DO FUTURO SÃO VISIONÁRIOS",
    },
    {
      id: 4,
      texto:
        "Busque o livro que fala sobre cultura empresarial e heróis do negócio. No capítulo de cases está uma frase sobre equipe.",
      pergunta: "O que são os 'verdadeiros heróis' segundo o livro?",
      respostaCorreta: [
        "equipes executivas",
        "colaboradores cotidiano",
        "pessoas do dia a dia",
      ],
      livro:
        "Os verdadeiros heróis de um negócio — Bill Fromme e Len Schlesinger (gestão/casos)",
      localizacao: "Capítulo 5: Histórias de Sucesso",
      instrucoes: "Aponte a frase que valoriza o time operacional.",
      fraseParaAnotar: "OS VERDADEIROS HERÓIS SÃO A EQUIPE",
    },
    {
      id: 5,
      texto:
        "Encontre o autor que trata de sonhos e resiliência. No capítulo motivacional há uma frase central sobre persistir.",
      pergunta: "Qual a mensagem sobre persistência?",
      respostaCorreta: [
        "nunca desista sonhos",
        "persistencia conquista objetivos",
        "siga em frente sempre",
      ],
      livro:
        "Nunca desista dos seus sonhos — Augusto Cury (autoajuda/psicologia)",
      localizacao: "Capítulo 7: Persistência e Resiliência",
      instrucoes: "Procure a frase motivacional que incentiva a não desistir.",
      fraseParaAnotar: "NUNCA DESISTA DOS SEUS SONHOS",
    },
  ],

  3: [
    {
      id: 1,
      texto:
        "Localize o livro sobre influência e desenvolvimento pessoal. No capítulo sobre comunicação há uma recomendação prática.",
      pergunta: "Qual ação o autor recomenda para influenciar pessoas?",
      respostaCorreta: [
        "escutar antes falar",
        "entender para influenciar",
        "escuta ativa",
      ],
      livro:
        "Decifre e influencie Pessoas — Paulo Vieira e Deibson Silva (autoajuda/prática)",
      localizacao: "Capítulo 3: Comunicação e Influência",
      instrucoes: "Procure a dica prática sobre como influenciar com empatia.",
      fraseParaAnotar: "ESCOUTE PARA INFLUENCIAR",
    },
    {
      id: 2,
      texto:
        "Encontre o clássico espiritual que fala sobre felicidade. No capítulo sobre prática diária há uma síntese.",
      pergunta: "Qual conceito resume a arte da felicidade?",
      respostaCorreta: [
        "felicidade pratica diaria",
        "felicidade estado interno",
        "pratica e felicidade",
      ],
      livro: "A arte da felicidade — Dalai-Lama (espiritualidade/psicologia)",
      localizacao: "Capítulo 6: Práticas para a mente",
      instrucoes: "Procure a frase sobre felicidade como prática interna.",
      fraseParaAnotar: "A FELICIDADE É UMA PRÁTICA",
    },
    {
      id: 3,
      texto:
        "Procure o livro ilustrado sobre mulheres cientistas. No final há uma linha que celebra cientistas pioneiras.",
      pergunta: "O que o autor afirma sobre cientistas citadas?",
      respostaCorreta: [
        "mulheres inovadoras",
        "pioneiras da ciencia",
        "cientistas inspiradoras",
      ],
      livro:
        "As cientistas — Rachel Ignotofsky (ilustrado/divulgação científica)",
      localizacao: "Seção de biografias (último capítulo)",
      instrucoes:
        "Busque a frase que celebra a contribuição feminina à ciência.",
      fraseParaAnotar: "MULHERES PIONEIROS NA CIÊNCIA",
    },
    {
      id: 4,
      texto:
        "Encontre o best-seller sobre lei da atração. No capítulo sobre visualização há uma recomendação direta.",
      pergunta: "O que o autor diz sobre visualizar objetivos?",
      respostaCorreta: [
        "visualize com clareza",
        "clareza atrai resultados",
        "foco atrai sucesso",
      ],
      livro: "O segredo — Michael J. Losier (autoajuda/lei da atração)",
      localizacao: "Capítulo 2: A prática da visualização",
      instrucoes: "Procure a instrução sobre imaginar resultados desejados.",
      fraseParaAnotar: "VISUALIZE COM CLAREZA",
    },
    {
      id: 5,
      texto:
        "Busque a obra que contrapõe liderança e serviço. No capítulo sobre atitude há uma metáfora sobre 'faxina'.",
      pergunta: "Que lição o autor dá sobre serviço e liderança?",
      respostaCorreta: [
        "liderar servindo",
        "humildade na liderança",
        "servico e liderança",
      ],
      livro:
        "O faxineiro e o executivo — Todd Hopkins e Ray Hibert (liderança/prática)",
      localizacao: "Capítulo 4: Liderar com humildade",
      instrucoes: "Procure a máxima que liga serviço e liderança.",
      fraseParaAnotar: "LIDERAR É SERVIR",
    },
  ],

  4: [
    {
      id: 1,
      texto:
        "Localize o livro que fala de desapego. No capítulo sobre relacionamentos há uma frase prática para seguir em frente.",
      pergunta: "Qual conselho o autor dá sobre desapegar?",
      respostaCorreta: [
        "aceitar seguir em frente",
        "nao se apega segue",
        "deixar ir e seguir",
      ],
      livro: "Não se apega, não — Isabela Freitas (autoajuda/jovem adulto)",
      localizacao: "Capítulo 5: Superando laços",
      instrucoes: "Procure a orientação sobre encerrar ciclos afetivos.",
      fraseParaAnotar: "NÃO SE APEGA, SIGA EM FRENTE",
    },
    {
      id: 2,
      texto:
        "Encontre o segundo volume da autora com conselhos mais práticos. No capítulo sobre autovalor há uma dica curta.",
      pergunta: "Que orientação a autora repete sobre não se iludir?",
      respostaCorreta: [
        "preserve seu valor",
        "conheca seus limites",
        "nao se iluda mantenha valor",
      ],
      livro: "Não se iluda, não — Isabela Freitas (continuação/prático)",
      localizacao: "Capítulo 3: Valor pessoal",
      instrucoes: "Procure a frase que recomenda proteger sua autoestima.",
      fraseParaAnotar: "PRESERVE SEU VALOR",
    },
    {
      id: 3,
      texto:
        "Procure o guia sobre empregabilidade. No capítulo sobre habilidades interpessoais há uma lista sintetizada.",
      pergunta: "Qual habilidade o autor destaca para empregabilidade?",
      respostaCorreta: [
        "comunicação habilidades sociais",
        "adaptabilidade e atitude",
        "trabalho em equipe",
      ],
      livro: "Empregabilidade — José Augusto Minarelli (carreira/profissional)",
      localizacao: "Capítulo 2: Habilidades requisitadas",
      instrucoes:
        "Procure a recomendação sobre competências valorizadas no mercado.",
      fraseParaAnotar: "ADAPTABILIDADE E COMUNICAÇÃO",
    },
    {
      id: 4,
      texto:
        "Encontre o livro sobre transição para a vida adulta. No capítulo sobre carreira a autora dá um conselho direto.",
      pergunta: "Qual conselho central para 'virar gente grande'?",
      respostaCorreta: [
        "planeje sua carreira",
        "assuma responsabilidade",
        "seja proativo",
      ],
      livro:
        "Virando gente grande — Sofia Esteves do Amaral (carreira/juvenil)",
      localizacao: "Capítulo 1: Planejamento de carreira",
      instrucoes:
        "Procure a orientação principal sobre assumir responsabilidades.",
      fraseParaAnotar: "ASSUMA RESPONSABILIDADE PELA SUA VIDA",
    },
    {
      id: 5,
      texto:
        "Busque o material que trata de cidadania. No capítulo sobre direitos há uma definição curta.",
      pergunta: "O que é cidadania segundo o texto?",
      respostaCorreta: [
        "participacao direitos e deveres",
        "direitos e deveres",
        "participacao social",
      ],
      livro: "Cidadania — Maria de Lourdes Cerquier-Manzini (educação/cívica)",
      localizacao: "Capítulo 1: Direitos e Deveres",
      instrucoes: "Procure a frase que resume cidadania como participação.",
      fraseParaAnotar: "CIDADANIA É PARTICIPAÇÃO",
    },
  ],

  5: [
    {
      id: 1,
      texto:
        "Localize o tratado antigo de estratégia. No capítulo sobre guerra há uma máxima curta e direta.",
      pergunta: "Qual máxima militar resume o texto?",
      respostaCorreta: [
        "conheca a si e ao inimigo",
        "vencer sem lutar",
        "estrategia e vitoria",
      ],
      livro: "A arte da guerra — Sun Tzu (estratégia/militar, clássico)",
      localizacao: "Capítulo 3: Conhecimento e Estratégia",
      instrucoes: "Procure a máxima sobre conhecer a si e ao inimigo.",
      fraseParaAnotar: "CONHEÇA A SI E AO INIMIGO",
    },
    {
      id: 2,
      texto:
        "Encontre o manual de ensino sobre competências. No capítulo de planejamento está uma dica sobre objetivos de aprendizagem.",
      pergunta: "Qual objetivo central de ensinar competências?",
      respostaCorreta: [
        "ensinar para atuar",
        "competencias para a pratica",
        "aprender fazendo",
      ],
      livro:
        "Como aprender e ensinar competências — Antoni Zabala e Laia Arnau (educação/formação)",
      localizacao: "Capítulo 2: Planejamento por competências",
      instrucoes:
        "Procure a linha que relaciona ensino com prática profissional.",
      fraseParaAnotar: "ENSINAR PARA A PRÁTICA",
    },
    {
      id: 3,
      texto:
        "Busque o guia crítico sobre educação. No capítulo introdutório há uma reflexão sobre métodos de ensino.",
      pergunta: "O que o autor defende sobre como aprender?",
      respostaCorreta: [
        "aprende melhor com reflexao",
        "metodos participativos",
        "ensino ativo",
      ],
      livro: "Aprender sim, mas como — Philippe Meirieu (pedagogia/crítica)",
      localizacao: "Capítulo 1: Por uma pedagogia ativa",
      instrucoes:
        "Procure a recomendação de métodos participativos de aprendizagem.",
      fraseParaAnotar: "APRENDIZAGEM ATIVA E PARTICIPATIVA",
    },
    {
      id: 4,
      texto:
        "Encontre o texto que analisa moda. No capítulo sobre indústria há uma declaração sobre ritmo das tendências.",
      pergunta: "Como o autor descreve a moda contemporânea?",
      respostaCorreta: [
        "ritmo efemero",
        "consumo rapido efemeridade",
        "cultura do efemero",
      ],
      livro: "O império do Efêmero — Gilles Lipovetsky (cultura/moda)",
      localizacao: "Capítulo 2: A velocidade das tendências",
      instrucoes: "Procure a passagem que descreve moda como efêmera.",
      fraseParaAnotar: "A MODA É EFÊMERA",
    },
    {
      id: 5,
      texto:
        "Procure o livro que trata de etiqueta e estilo. No capítulo sobre imagem há um conselho conciso.",
      pergunta: "Qual a dica central para 'segredos de estilo'?",
      respostaCorreta: [
        "seja autoconfiante",
        "imagem coerente com personalidade",
        "conheca seu estilo",
      ],
      livro: "Segredos de estilo — Christiana Francini (estilo/moda)",
      localizacao: "Capítulo 3: Construindo sua imagem",
      instrucoes:
        "Procure a dica sobre coerência entre imagem e personalidade.",
      fraseParaAnotar: "SEJA AUTÊNTICO NO SEU ESTILO",
    },
  ],

  6: [
    {
      id: 1,
      texto:
        "Encontre a obra que mistura moda e arte. No capítulo sobre história há um ponto sobre relação arte-moda.",
      pergunta: "Como o autor relaciona moda e arte?",
      respostaCorreta: [
        "moda influencia arte",
        "arte influencia moda",
        "artes e moda entrelaçadas",
      ],
      livro: "Moda e Arte — Dinah Bueno Pezzolo (ensaios/moda e arte)",
      localizacao: "Capítulo 1: A Moda como Expressão Artística",
      instrucoes: "Procure a sentença que liga moda à indústria artística.",
      fraseParaAnotar: "MODA E ARTE SÃO INTERLIGADAS",
    },
    {
      id: 2,
      texto:
        "Procure o livro prático sobre não errar mais. No capítulo de dicas há uma máxima curta de comportamento profissional.",
      pergunta: "Qual orientação básica para não errar mais?",
      respostaCorreta: [
        "procurar padroes e verificar",
        "metodo e cuidado",
        "verificar antes agir",
      ],
      livro: "Não erre mais — Luiz Antônio Saconni (produtividade/qualidade)",
      localizacao: "Capítulo 2: Boas práticas no trabalho",
      instrucoes: "Procure a máxima sobre revisão e método.",
      fraseParaAnotar: "REVEJA, VERIFIQUE, NÃO APERTE ENTER SEM CONFERIR",
    },
    {
      id: 3,
      texto:
        "Encontre a obra que trata da história das bolsas. No capítulo ilustrado há um trecho que resume evolução estética.",
      pergunta: "Como o autor descreve a evolução das bolsas?",
      respostaCorreta: [
        "funcao e moda",
        "evolucao estetica e utilitaria",
        "forma e funcao",
      ],
      livro: "A História das bolsas — Dhora Costa (moda/história visual)",
      localizacao: "Capítulo ilustrado: Evolução por séculos",
      instrucoes: "Procure o resumo sobre função e estética ao longo do tempo.",
      fraseParaAnotar: "FUNÇÃO E ESTÉTICA",
    },
    {
      id: 4,
      texto:
        "Busque obra técnica sobre acionamentos. No capítulo de princípios está uma definição curta sobre atuação eletromagnética.",
      pergunta: "O que é acionamento eletromagnético?",
      respostaCorreta: [
        "uso eletromagnetico para mover",
        "forca magnetica aplicada",
        "atuador eletromagnetico",
      ],
      livro:
        "Acionamentos Eletromagnéticos — Jorge Assad Leludak (engenharia elétrica)",
      localizacao: "Capítulo 1: Princípios de atuação",
      instrucoes: "Procure a explicação concisa do princípio de atuação.",
      fraseParaAnotar: "FORÇA ELETROMAGNÉTICA GERA MOVIMENTO",
    },
    {
      id: 5,
      texto:
        "Procure o compêndio de química integral. No capítulo introdutório há a declaração sobre método científico aplicado à química.",
      pergunta: "Qual é a base do método em química descrita?",
      respostaCorreta: [
        "experimento observacao e analisE",
        "metodo experimental",
        "observacao e reproducao",
      ],
      livro: "Química Integral — Martha Reis (educacional/química)",
      localizacao: "Capítulo introdutório: Método em Química",
      instrucoes: "Procure a frase que sintetiza método experimental.",
      fraseParaAnotar: "EXPERIMENTO E OBSERVAÇÃO SÃO FUNDAMENTAIS",
    },
  ],

  7: [
    {
      id: 1,
      texto:
        "Encontre o manual de Química Geral. No capítulo de ligações há uma explicação curta sobre valência.",
      pergunta: "O que define a valência de um elemento?",
      respostaCorreta: [
        "numero de ligacoes",
        "capacidade de ligar",
        "valencia determina ligacoes",
      ],
      livro: "Química Geral — John B. Russell (texto universitário/química)",
      localizacao: "Capítulo 3: Ligações Químicas",
      instrucoes: "Procure a definição simples do conceito de valência.",
      fraseParaAnotar: "VALÊNCIA É A CAPACIDADE DE LIGAÇÃO",
    },
    {
      id: 2,
      texto:
        "Localize o livro sobre alimentação inteligente. No capítulo sobre nutrientes há uma recomendação curta.",
      pergunta: "Qual a ideia central sobre alimentação saudável?",
      respostaCorreta: [
        "equilibrio e variedade",
        "comer variado e equilibrado",
        "nutricao balanceada",
      ],
      livro: "Inteligência Alimentar — E. Al. Roper (nutrição/prático)",
      localizacao: "Capítulo 2: Nutrientes e Equilíbrio",
      instrucoes: "Procure a recomendação sobre dieta equilibrada.",
      fraseParaAnotar: "EQUILÍBRIO E VARIEDADE NA ALIMENTAÇÃO",
    },
    {
      id: 3,
      texto:
        "Procure o guia de projetos de engenharia. No capítulo de planejamento há um passo-chave sobre especificação.",
      pergunta: "Qual o passo essencial no planejamento de projetos?",
      respostaCorreta: [
        "definir requisitos claros",
        "especificacao requisitos",
        "planejamento e especificacao",
      ],
      livro: "Projetos na engenharia — Gerard Pahl (engenharia/projetos)",
      localizacao: "Capítulo 1: Especificação e Requisitos",
      instrucoes:
        "Procure a recomendação sobre definir requisitos antes de projetar.",
      fraseParaAnotar: "DEFINIR REQUISITOS CLAROS",
    },
    {
      id: 4,
      texto:
        "Encontre o livro sobre corrosão de materiais. No capítulo de proteção há uma instrução sobre prevenção.",
      pergunta: "Qual é a medida básica contra corrosão?",
      respostaCorreta: [
        "proteçao superficie revestimento",
        "revestir proteger",
        "barreiras anticorrosivas",
      ],
      livro: "Corrosão — Vicente Gentil (materiais/engenharia)",
      localizacao: "Capítulo 4: Técnicas de Proteção",
      instrucoes: "Procure a explicação sobre revestimentos protetores.",
      fraseParaAnotar: "REVESTIR SUPERFÍCIES PARA PREVENIR CORROSÃO",
    },
    {
      id: 5,
      texto:
        "Procure o manual de máquinas. No capítulo sobre manutenção há uma recomendação de segurança-chave.",
      pergunta: "Qual prática fundamental de segurança?",
      respostaCorreta: [
        "desligar antes manutencao",
        "bloquear fonte energia",
        "procedimentos de seguranca",
      ],
      livro: "Máquinas — A.L. Casillas (engenharia/máquinas)",
      localizacao: "Capítulo 7: Manutenção e Segurança",
      instrucoes:
        "Procure a instrução sobre procedimento seguro antes da manutenção.",
      fraseParaAnotar: "DESLIGUE E BLOQUEIE ANTES DE MEXER",
    },
  ],

  8: [
    {
      id: 1,
      texto:
        "Encontre o compêndio de Eletrotécnica. No capítulo de circuitos há uma definição simples de tensão.",
      pergunta: "O que é tensão elétrica?",
      respostaCorreta: [
        "diferenca de potencial",
        "forca que move carga",
        "diferenca de potencial eletrico",
      ],
      livro:
        "Eletrotécnica: Princípios e aplicações — Gray Wallace (técnico/eletricidade)",
      localizacao: "Capítulo 2: Conceitos Básicos de Eletricidade",
      instrucoes: "Procure a definição de tensão e sua analogia física.",
      fraseParaAnotar: "TENSÃO É DIFERENÇA DE POTENCIAL",
    },
    {
      id: 2,
      texto:
        "Busque o manual de materiais elétricos. No capítulo sobre condutores há uma recomendação sobre escolha de cabos.",
      pergunta: "Como escolher cabo elétrico básico?",
      respostaCorreta: [
        "calibre corrente e isolacao",
        "capacidade corrente e isolacao",
        "calibre conforme carga",
      ],
      livro: "Materiais elétricos — Walfredo Schmit (técnico/eletricidade)",
      localizacao: "Capítulo 3: Condutores e Isolantes",
      instrucoes: "Procure a instrução sobre dimensionamento básico de cabos.",
      fraseParaAnotar: "ESCOLHER CABO PELO CALIBRE E ISOLAÇÃO",
    },
    {
      id: 3,
      texto:
        "Encontre o guia de circuitos. No capítulo inicial há a regra para análise de circuitos em série.",
      pergunta: "O que acontece com a corrente em um circuito em série?",
      respostaCorreta: [
        "corrente eh a mesma",
        "mesma corrente em serie",
        "corrente constante",
      ],
      livro:
        "Curso de circuitos elétricos — L. Q. Orsini e Denise Consonni (engenharia elétrica)",
      localizacao: "Capítulo 4: Circuitos Série e Paralelo",
      instrucoes: "Procure a propriedade da corrente em circuitos série.",
      fraseParaAnotar: "A CORRENTE É A MESMA NO CIRCUITO EM SÉRIE",
    },
    {
      id: 4,
      texto:
        "Procure o material técnico sobre SPDA (proteção contra descargas). No capítulo de normas há uma recomendação prática.",
      pergunta: "Qual é a função básica do SPDA?",
      respostaCorreta: [
        "desviar corrente para terra",
        "proteger contra raios",
        "descarga controlada a terra",
      ],
      livro: "SPDA — André Nunes de Souza et al. (normas/proteção elétrica)",
      localizacao: "Capítulo 1: Conceitos e Aplicações",
      instrucoes: "Procure a definição do propósito do SPDA.",
      fraseParaAnotar: "DESVIAR CORRENTE PARA A TERRA",
    },
    {
      id: 5,
      texto:
        "Encontre o manual de microcontroladores. No capítulo introdutório há uma dica sobre conexão do PIC.",
      pergunta: "O que é essencial para conectar um PIC ao circuito?",
      respostaCorreta: [
        "alimentacao e referencia terra",
        "alimentacao e clock",
        "vcc e gnd",
      ],
      livro:
        "Conectando o PIC — David José de Souza e Nicolás César Lavinia (eletrônica/microcontroladores)",
      localizacao: "Capítulo 1: Primeira Conexão e Alimentação",
      instrucoes:
        "Procure a instrução sobre pinos de alimentação e referência.",
      fraseParaAnotar: "FORNECER VCC E GND CORRETOS",
    },
  ],

  9: [
    {
      id: 1,
      texto:
        "Localize o livro de eletrônica de potência. No capítulo sobre conversores há uma definição essencial.",
      pergunta: "O que faz um conversor de potência?",
      respostaCorreta: [
        "converte tensao e corrente",
        "controla energia eletrica",
        "transforma parametros eletricos",
      ],
      livro:
        "Eletrônica de Potência — Salvador Pinillos Gimenez e Devair Arrabaça (eletrônica/energia)",
      localizacao: "Capítulo 2: Conversores e Inversores",
      instrucoes: "Procure a explicação sobre função básica de conversores.",
      fraseParaAnotar: "CONVERTER E CONTROLAR ENERGIA ELÉTRICA",
    },
    {
      id: 2,
      texto:
        "Encontre o texto sobre antenas. No capítulo sobre ganho há uma frase sobre directividade.",
      pergunta: "O que indica o ganho de uma antena?",
      respostaCorreta: [
        "directividade e eficiencia",
        "capacidade irradiar em direcao",
        "potencia em direcao pref",
      ],
      livro:
        "Engenharia de Antenas — Luiz Gonzaga Rios e Eduardo Barbosa Perri (telecomunicações/antenas)",
      localizacao: "Capítulo 5: Parâmetros de Antena",
      instrucoes: "Procure a definição que relaciona ganho e directividade.",
      fraseParaAnotar: "GANHO INDICA DIRECTIVIDADE E EFICIÊNCIA",
    },
    {
      id: 3,
      texto:
        "Procure o livro sobre usinagem. No capítulo de teoria há uma máxima sobre velocidade de corte.",
      pergunta: "O que definir melhor o corte na usinagem?",
      respostaCorreta: [
        "velocidade e avanço",
        "parametros de usinagem",
        "velocidade de corte certa",
      ],
      livro:
        "Teoria de Usinagem dos Materiais — Álisson Rocha Machado et al. (engenharia/manufatura)",
      localizacao: "Capítulo 3: Parâmetros de Usinagem",
      instrucoes: "Procure a recomendação sobre velocidade e avanço ideais.",
      fraseParaAnotar: "VELOCIDADE E AVANÇO DETERMINAM QUALIDADE DO CORTE",
    },
    {
      id: 4,
      texto:
        "Encontre a enciclopédia visual sobre automóveis. No índice há uma nota sobre sistema de freios.",
      pergunta: "Qual componente é essencial para frear o carro?",
      respostaCorreta: [
        "sistema de freios",
        "disco e pastilha",
        "sistema hidraulico de freio",
      ],
      livro: "O livro do carro — Enciclopédia visual (referência técnica)",
      localizacao: "Seção Freios: Índice técnico",
      instrucoes: "Procure a linha que descreve o sistema de frenagem.",
      fraseParaAnotar: "DISCO E PASTILHA SÃO ESSENCIAIS",
    },
    {
      id: 5,
      texto:
        "Busque o manual de custos. No capítulo sobre apuração há uma frase sobre classificação de custos.",
      pergunta: "Como se classificam os custos básicos?",
      respostaCorreta: [
        "fixos e variaveis",
        "custos fixos e variaveis",
        "classificacao por comportamento",
      ],
      livro: "Custos — René Gomes Dutra (finanças/contabilidade)",
      localizacao: "Capítulo 2: Classificação de Custos",
      instrucoes: "Procure a explicação sobre fixos e variáveis.",
      fraseParaAnotar: "CUSTOS SÃO FIXOS OU VARIÁVEIS",
    },
  ],

  10: [
    {
      id: 1,
      texto:
        "Localize o manual sobre gestão de facilidades. No capítulo sobre serviços há uma definição de facility management.",
      pergunta: "O que é gestão de facilidades?",
      respostaCorreta: [
        "gestao de servicos e ambientes",
        "facility management cuidar de ativos",
        "administracao de facilidades",
      ],
      livro:
        "Gestão de facilidades — Robson Quinello e José Roberto Nicoletti (gestão/infraestrutura)",
      localizacao: "Capítulo 1: Conceito de Facility Management",
      instrucoes:
        "Procure a definição que resume a função do gestor de facilidades.",
      fraseParaAnotar: "GERENCIAR SERVIÇOS E AMBIENTES",
    },
    {
      id: 2,
      texto:
        "Encontre o clássico de marketing. No capítulo sobre mix há uma linha que sintetiza marketing moderno.",
      pergunta: "Qual é a função central do marketing segundo Kotler?",
      respostaCorreta: [
        "criar valor para o cliente",
        "valor e satisfacao do cliente",
        "gerar valor e satisfacao",
      ],
      livro: "Marketing — Philip Kotler (marketing/fundamentos)",
      localizacao: "Capítulo 2: Conceitos Fundamentais do Marketing",
      instrucoes: "Procure a frase que liga marketing à criação de valor.",
      fraseParaAnotar: "CRIAR VALOR PARA O CLIENTE",
    },
    {
      id: 3,
      texto:
        "Procure o livro sobre residências inteligentes. No capítulo de automação há uma recomendação sobre conectividade.",
      pergunta: "Qual elemento é essencial em casas inteligentes?",
      respostaCorreta: [
        "conectividade e automacao",
        "internet e sensores",
        "conexao de dispositivos",
      ],
      livro:
        "Residências Inteligentes — Caio Augusto Morais Bolzani (tecnologia/automação residencial)",
      localizacao: "Capítulo 3: Sistemas de Automação",
      instrucoes: "Procure a recomendação sobre integração e conectividade.",
      fraseParaAnotar: "CONECTIVIDADE É ESSENCIAL",
    },
    {
      id: 4,
      texto:
        "Encontre o ensaio sobre consumo e cultura. No capítulo analítico há uma frase que explica efemeridade da moda.",
      pergunta: "Como o autor descreve o consumo contemporâneo?",
      respostaCorreta: [
        "consumo rapido e efemero",
        "cultura do efemero",
        "consumo por novidade",
      ],
      livro: "O império do Efêmero — Gilles Lipovetsky (ensaios/sociologia)",
      localizacao: "Capítulo 4: A Sociedade de Consumo da Moda",
      instrucoes: "Procure a frase que descreve a rapidez das tendências.",
      fraseParaAnotar: "CONSUMO CONTEMPORÂNEO É EFÊMERO",
    },
    {
      id: 5,
      texto:
        "Localize o catálogo que articula arte e indústria. No capítulo introdutório há uma afirmação sobre estética industrial.",
      pergunta: "O que o autor diz sobre arte e indústria?",
      respostaCorreta: [
        "industria influencia arte",
        "arte e industria conectadas",
        "design industrial e estetica",
      ],
      livro: "Arte e Indústria — Venâncio Filho (artes/design)",
      localizacao: "Introdução: Arte e Produção Industrial",
      instrucoes:
        "Procure a ideia que relaciona produção com expressão estética.",
      fraseParaAnotar: "INDÚSTRIA INFLUENCIA A ARTE",
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

// --- FUNÇÃO: embaralhar array ---
function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

// --- FUNÇÃO: sorteia perguntas da trilha sem repetir até acabar ---
function sortearPerguntasDaTrilha(trilhaNumero) {
  const trilhaCompleta = TRILHAS[trilhaNumero];
  if (!trilhaCompleta) return null;

  // Carrega histórico de perguntas já jogadas dessa trilha
  const perguntasJogadasKey = `birdbox_perguntas_trilha_${trilhaNumero}`;
  const perguntasJogadas = JSON.parse(
    localStorage.getItem(perguntasJogadasKey) || "[]"
  );

  // Filtra perguntas ainda não jogadas
  const perguntasRestantes = trilhaCompleta.filter(
    (p) => !perguntasJogadas.includes(p.id)
  );

  let perguntasSorteadas;

  // Se já usou todas, reinicia o ciclo dessa trilha
  if (perguntasRestantes.length === 0) {
    console.log(`🔁 Reiniciando perguntas da trilha ${trilhaNumero}`);
    localStorage.removeItem(perguntasJogadasKey);
    perguntasSorteadas = embaralhar([...trilhaCompleta]).slice(0, 5);
  } else {
    // Sorteia até 5 das que restam
    perguntasSorteadas = embaralhar([...perguntasRestantes]).slice(0, 5);
  }

  // Atualiza histórico das perguntas jogadas
  const novasPerguntasJogadas = [
    ...new Set([...perguntasJogadas, ...perguntasSorteadas.map((p) => p.id)]),
  ];
  localStorage.setItem(
    perguntasJogadasKey,
    JSON.stringify(novasPerguntasJogadas)
  );

  return perguntasSorteadas;
}

// --- FUNÇÃO: sorteia trilha sem repetir até acabar ---
function sortearTrilha() {
  const trilhasDisponiveis = Object.keys(TRILHAS).map(Number);
  const trilhasJogadas = JSON.parse(
    localStorage.getItem("birdbox_trilhas_jogadas") || "[]"
  );

  // Trilhas ainda não jogadas
  const trilhasRestantes = trilhasDisponiveis.filter(
    (n) => !trilhasJogadas.includes(n)
  );

  let trilhaSorteada;

  if (trilhasRestantes.length === 0) {
    console.log("🔁 Todas as trilhas já foram jogadas. Reiniciando o ciclo...");
    localStorage.removeItem("birdbox_trilhas_jogadas");
    return sortearTrilha(); // reinicia
  } else {
    trilhaSorteada =
      trilhasRestantes[Math.floor(Math.random() * trilhasRestantes.length)];
  }

  // Atualiza trilhas jogadas
  trilhasJogadas.push(trilhaSorteada);
  localStorage.setItem(
    "birdbox_trilhas_jogadas",
    JSON.stringify(trilhasJogadas)
  );

  console.log(`🎯 Trilha sorteada: ${trilhaSorteada}`);
  console.log("📜 Trilhas já jogadas:", trilhasJogadas);

  // Retorna trilha com perguntas sorteadas
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
