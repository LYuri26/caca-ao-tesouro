// Sistema de Trilhas - Bird Box Caça ao Tesouro
console.log("📚 Carregando sistema de trilhas...");

// 10 Trilhas temáticas com 5 perguntas cada (50 livros)
// Gerado para: estilo "caça ao tesouro" — livro: dica autor/ano/gênero; localizacao: dica de capítulo; instrucoes: dica do assunto
const TRILHAS = {
  1: [
    {
      id: 1,
      texto:
        "No capítulo 'Acredite: você também pode ser demitido', há uma página que trata de processos de fusão.",
      pergunta:
        "Qual palavra ou expressão descreve alguém que busca constantemente competir?",
      respostaCorreta: [
        "competitividade",
        "rivalidade",
        "concorrência",
        "disputa de mercado",
        "capacidade de competir",
        "eficiência",
        "desempenho comparativo",
        "produtividade",
        "vantagem competitiva",
        "poder de competição",
        "aptidão para competir",
        "eficácia",
        "excelência",
        "qualidade",
        "performance",
        "capacidade técnica",
        "potencial de superação",
        "espírito competitivo",
        "desejo de vencer",
        "determinação",
        "ambição",
        "rivalidade saudável",
        "vontade de superação",
      ],
      livro: "Empregabilidade",
      localizacao: "Primeiro armário do lado B, quarta prateleira",
      instrucoes:
        "Sou dois irmãos idênticos que gostam de apostar; em cassinos sou símbolo de sorte a brilhar. Me encontrarás também no produto de sete e onze — sou espelho de mim mesmo. Quem sou eu?",
      fraseParaAnotar: "SEMANA",
    },
    {
      id: 2,
      texto: "Localize o livro 'Uma Receita Doce'.",
      pergunta: "Qual doce combina uma fruta, proteínas e comida italiana?",
      respostaCorreta: [
        "pizza proteica de banana",
        "pizza doce proteica",
        "pizza de banana com proteína",
        "pizza fit de banana",
        "pizza funcional de banana",
        "pizza saudável de banana",
        "pizza fitness de banana",
        "pizza doce fitness",
        "pizza doce saudável",
        "pizza doce funcional",
        "pizza doce enriquecida com proteínas",
        "pizza de banana com whey",
        "pizza doce com whey protein",
        "pizza doce nutritiva",
        "pizza doce rica em proteínas",
        "pizza de banana proteica",
        "pizza fit doce",
        "pizza de banana com suplemento proteico",
        "pizza doce fit de banana",
        "pizza doce energética",
      ],
      livro: "Inteligência Alimentar",
      localizacao: "Terceiro armário do lado A, quarta prateleira",
      instrucoes:
        "Sou alquimia na cozinha, onde o sabor não se perde, mas se transforma. Transformo tentações em versões que nutrem, sem roubar o prazer da mesa. O que estou fazendo?",
      fraseParaAnotar: "DA",
    },
    {
      id: 3,
      texto:
        "Procure a obra de quem decifra mentes e ensina a influenciar corações — um especialista em Neuropsicologia que transformou o estudo do comportamento em arte.",
      pergunta:
        "No contexto organizacional, qual é o aspecto mais importante do seu comportamento dentro da organização?",
      respostaCorreta: [
        "emocional",
        "inteligência emocional",
        "equilíbrio emocional",
        "consciência emocional",
        "maturidade emocional",
        "autodomínio",
        "autocontrole emocional",
        "gestão das emoções",
        "controle emocional",
        "competência emocional",
        "sabedoria emocional",
        "resiliência emocional",
        "resiliência",
        "autoconhecimento emocional",
        "empatia aplicada",
        "habilidade socioemocional",
        "consciência interpessoal",
        "inteligência interpessoal",
        "inteligência intrapessoal",
        "equilíbrio interno",
        "estabilidade emocional",
        "autogestão emocional",
        "alfabetização emocional",
      ],
      livro: "Decifre e Influencie Pessoas",
      localizacao: "Primeiro armário do lado B, terceira prateleira",
      instrucoes:
        "Sou invisível, mas sinto cada movimento; moldo decisões, alianças e conflitos sem ser visto. Minha força não está no poder de um, mas na soma de muitos. Observar-me é entender como cada peça se encaixa e como grupos se tornam mais que indivíduos isolados. Quem sou eu?",
      fraseParaAnotar: "BIBLIOTECA",
    },
    {
      id: 4,
      texto:
        "Encontre o livro que analisa comportamento e mudança. No capítulo sobre liderança há uma metáfora envolvendo 'queijo'.",
      pergunta:
        "Encontre o capítulo que tem o nome de uma pessoa — o mesmo nome da heroína Feiticeira Escarlate —, mas o que queremos é um certo homem.",
      respostaCorreta: [
        "Sr. Gonasey",
        "senhor",
        "homem",
        "cavaleiro",
        "líder",
        "mestre",
        "chefe",
        "guia",
        "proprietário",
        "personagem",
        "indivíduo",
        "educador",
        "mentor",
        "diretor",
        "especialista",
        "autoridade",
        "protagonista",
        "direção",
        "referência",
        "personalidade",
        "figura",
      ],
      livro: "Eu Sei Quem Tem Seu Queijo",
      localizacao: "Primeiro armário do lado A, quarta prateleira",
      instrucoes:
        "Em um labirinto de escolhas e caminhos, ela observa o que outros desejam e guardam. Entre esquinas e portas fechadas surge um guia peculiar — não é o dono do queijo, mas conhece o segredo do jogo. Quem são eles e o que procuram?",
      fraseParaAnotar: "NO",
    },
    {
      id: 5,
      texto: "Procure o título que aborda algum tipo de rede.",
      pergunta:
        "Como a escolha do número de camadas e neurônios em cada camada influencia a capacidade de aprendizado, e quais riscos surgem se a topologia não for adequada ao problema?",
      respostaCorreta: [
        "redes neurais",
        "sistemas neurais artificiais",
        "modelos de aprendizado profundo",
        "redes de processamento neural",
        "redes de inteligência artificial",
        "sistemas de deep learning",
        "modelos neurais",
        "arquiteturas neurais",
        "algoritmos de redes neurais",
        "estruturas de aprendizado artificial",
        "sistemas de rede neuronal",
        "redes de aprendizado automático",
        "redes cognitivas artificiais",
        "modelos de processamento neuronal",
        "redes artificiais de neurônios",
        "sistemas de aprendizado profundo",
      ],
      livro: "Inteligência Artificial",
      localizacao: "Primeiro armário do lado A, terceira prateleira",
      instrucoes:
        "Sou a base de tudo que contamos; minhas mãos me mostram inteiro, mas nada sobra. Comigo se inicia o sistema que usamos todo dia, e juntos, dois dedos meus formam um par perfeito. Quem sou eu?",
      fraseParaAnotar: "SENAI",
    },
  ],
  2: [
    {
      id: 2,
      texto:
        "Guiar equipes exige visão clara e tomada de decisões estratégicas. Quem consegue equilibrar metas, recursos e pessoas transforma desafios em oportunidades. Influenciar pelo exemplo, motivar continuamente e alinhar esforços gera resultados consistentes e impacto duradouro na organização.",
      pergunta:
        "Quem deve ser a força propulsora por trás da aceitação da filosofia Seis Sigma?",
      respostaCorreta: [
        "liderança executiva",
        "gestão executiva",
        "coordenação estratégica",
        "direção corporativa",
        "comando empresarial",
        "liderança estratégica",
        "administração de alto nível",
        "chefia executiva",
        "gerência sênior",
        "supervisão executiva",
        "condução organizacional",
        "liderança corporativa",
        "gestão de alto escalão",
        "orientação executiva",
        "governança empresarial",
        "liderança de topo",
        "comando estratégico",
        "administração corporativa",
        "direção estratégica",
        "liderança sênior",
        "gestão de líderes",
      ],
      livro: "Quem Comeu o Meu Hambúrguer?",
      localizacao: "Primeiro armário do lado B, primeira prateleira",
      instrucoes:
        "Sou invisível, mas transformo o mundo; nas mãos de muitos, ganho força. Nas escolhas de cada um, faço diferença. Não sou rei nem chefe, mas guio ações. Quem sou eu?",
      fraseParaAnotar: "BOX",
    },
    {
      id: 3,
      texto: "Ela controla o fluxo e mantém o equilíbrio no final do caminho.",
      pergunta:
        "Qual dispositivo, quanto mais se estende, consegue captar sinais mais distantes?",
      respostaCorreta: [
        "resistência terminal",
        "resistência final",
        "resistência de terminação",
        "resistor de terminação",
        "resistência limite",
        "resistência de carga",
        "resistência elétrica final",
        "resistência de circuito aberto",
        "resistência de fechamento",
        "resistência de ponta",
        "resistência de extremidade",
        "resistência de conexão final",
        "resistência terminal elétrica",
        "resistência de linha",
        "resistência de rede",
        "resistência de interface",
      ],
      livro: "Engenharia das Antenas",
      localizacao: "Quinto armário do lado B, segunda prateleira",
      instrucoes:
        "Ergo-me ao céu, sem pernas ou braços; capto o que não se vê, mas se sente. Quanto mais longo fico, mais longe alcanço. Sou guia silencioso de sinais invisíveis. Quem sou eu?",
      fraseParaAnotar: "REVELA",
    },
    {
      id: 4,
      texto:
        "Elas fornecem energia desde o início e mantêm o funcionamento constante de um sistema.",
      pergunta:
        "Quais unidades fornecem energia inicial e contínua em um circuito sem depender de fontes externas?",
      respostaCorreta: [
        "células primárias",
        "células principais",
        "células básicas",
        "unidades iniciais",
        "células fundamentais",
        "células elementares",
        "células iniciais",
        "células originais",
        "unidades primárias",
        "células essenciais",
        "células de origem",
      ],
      livro: "Química Geral",
      localizacao: "Terceiro armário do lado A, terceira prateleira",
      instrucoes:
        "Sou maior que dez, menor que vinte, resultado de nove vezes dois. Minha soma de dígitos é nove, e muitos me veem como a porta da maioridade. Que número sou eu?",
      fraseParaAnotar: "MEDO",
    },
    {
      id: 5,
      texto:
        "Seguir-me garante que tudo aconteça de forma organizada e segura, sem surpresas no caminho.",
      pergunta:
        "Quais conjuntos de regras ou instruções orientam ações para que ocorram de forma padronizada e eficiente?",
      respostaCorreta: [
        "protocolos",
        "normas",
        "regras",
        "procedimentos",
        "diretrizes",
        "orientações",
        "padrões",
        "instruções",
        "regulamentos",
        "etiquetas",
        "práticas estabelecidas",
      ],
      livro: "Informática na Empresa",
      localizacao: "Primeiro armário do lado A, segunda prateleira",
      instrucoes:
        "Sou menor que cinco, mas maior que dois, o primeiro número ímpar depois do par. Represento equilíbrio em triângulos e trios, e muitas vezes apareço em histórias e contos. Que número sou eu?",
      fraseParaAnotar: "INTENSO",
    },
  ],

  3: [
    {
      id: 1,
      texto: "Dou brilho, protejo e realço a superfície sem alterar sua forma.",
      pergunta:
        "Quais produtos aplicados em superfícies realçam a aparência e protegem contra desgaste ou umidade?",
      respostaCorreta: [
        "vernizes",
        "lacas",
        "revestimentos",
        "seladores",
        "camadas protetoras",
        "acabamentos",
        "impermeabilizantes",
        "resinas",
        "barnizes",
        "proteções superficiais",
        "camadas de brilho",
      ],
      livro: "Materiais Elétricos",
      localizacao: "Quarto armário do lado A, segunda prateleira",
      instrucoes:
        "Sou menor que dez, maior que cinco, resultado de dois vezes três. Tenho faces, mas não sou um dado, e muitos me veem como equilíbrio perfeito em família ou trios duplos. Que número sou eu?",
      fraseParaAnotar: "NA",
    },
    {
      id: 2,
      texto:
        "Sou formado por partes diferentes que juntas criam algo novo e funcional.",
      pergunta:
        "Qual termo descreve algo que resulta da união de elementos distintos formando um todo?",
      respostaCorreta: [
        "compound",
        "mistura",
        "combinação",
        "composto",
        "agregado",
        "associação",
        "união",
        "amálgama",
        "fusão",
        "conjunto",
        "composição",
      ],
      livro: "Eletrotécnica",
      localizacao: "Quarto armário do lado A, primeira prateleira",
      instrucoes:
        "Sou maior que dez, menor que vinte, formado pela soma de sete com sete. Não sou apenas um número; represento quatorze passos, dias ou partes em muitos ciclos. Que número sou eu?",
      fraseParaAnotar: "BIBLIOTECA",
    },
    {
      id: 3,
      texto:
        "Permito que peças se unam com firmeza, girando e encaixando sem esforço.",
      pergunta:
        "Quais elementos em espiral permitem fixar, prender ou unir componentes mecânicos de forma segura?",
      respostaCorreta: [
        "roscas",
        "filetes",
        "espirais",
        "enroscamentos",
        "hélices",
        "sulcos",
        "enroscos",
        "espiras",
        "roscas mecânicas",
        "roscas de parafuso",
        "canaletas em espiral",
      ],
      livro: "Máquinas de Roscar e Mulheres na Ciência",
      localizacao: "Terceiro armário do lado B, terceira prateleira",
      instrucoes:
        "Sou uma série de espirais padronizadas, criadas para unir e ajustar sem falhar. Meço diâmetros, passos e ângulos com precisão, e sem mim, parafusos e porcas não cumpririam sua missão. Quem sou eu?",
      fraseParaAnotar: "ENCONTRO",
    },
    {
      id: 4,
      texto:
        "Sou um processo lento que desgasta materiais, muitas vezes sem que se perceba até ser tarde.",
      pergunta:
        "Qual fenômeno químico provoca a deterioração gradual de metais e superfícies expostas ao ambiente?",
      respostaCorreta: [
        "corrosão",
        "oxidação",
        "degradação",
        "desgaste químico",
        "deterioração",
        "erosão química",
        "destruição gradual",
        "decomposição",
        "ataque químico",
        "desgaste metálico",
        "decadência química",
      ],
      livro: "Corrosão",
      localizacao: "Terceiro armário do lado B, segunda prateleira",
      instrucoes:
        "Sou maior que dez, menor que vinte, resultado da soma de sete com oito. Divido-me em três vezes cinco, ou cinco vezes três, e apareço em calendários e marcos importantes. Que número sou eu?",
      fraseParaAnotar: "MEU",
    },
    {
      id: 5,
      texto:
        "Defino passos e regras para que tarefas complexas sejam realizadas de forma organizada e eficiente.",
      pergunta:
        "Qual termo descreve o conjunto de técnicas e procedimentos usados para conduzir atividades de maneira estruturada e eficaz?",
      respostaCorreta: [
        "metodologia",
        "método",
        "procedimento",
        "abordagem",
        "estratégia",
        "técnica",
        "processo",
        "sistema",
        "modo de atuação",
        "modelo de trabalho",
        "estrutura de execução",
      ],
      livro: "Projeto na Engenharia",
      localizacao: "Segundo armário do lado B, primeira prateleira",
      instrucoes:
        "Sou o caminho que organiza ideias antes da execução; defino passos, prioridades e estratégias sem revelar o resultado final. Sem mim, planos se perdem e erros se multiplicam; guio projetos desde a concepção até a preparação da obra. Quem sou eu?",
      fraseParaAnotar: "REFUJO",
    },
  ],

  4: [
    {
      id: 1,
      texto:
        "Entrego resultados consistentes e superiores, mesmo sob pressão ou desafios intensos.",
      pergunta:
        "Qual termo descreve a capacidade de obter resultados superiores e manter eficiência máxima em qualquer situação?",
      respostaCorreta: [
        "alto desempenho",
        "máxima eficiência",
        "alto rendimento",
        "performance elevada",
        "eficácia superior",
        "produtividade ótima",
        "capacidade elevada",
        "resultado superior",
        "performance excepcional",
        "eficiência máxima",
        "rendimento elevado",
      ],
      livro: "O Livro do Carro",
      localizacao: "Sexto armário do lado A, quarta prateleira",
      instrucoes:
        "Sou maior que cem, menor que duzentos, formado por cento e quarenta e duas unidades. Minha centena indica o começo de um ciclo, minha dezena soma à unidade para formar treze. Que número sou eu?",
      fraseParaAnotar: "LIVROS",
    },
    {
      id: 2,
      texto:
        "Ocupo posição elevada na hierarquia e sou reconhecido por prestígio e autoridade.",
      pergunta:
        "Qual título designa um nobre de alta patente, geralmente acima de um duque comum, com grande prestígio e autoridade?",
      respostaCorreta: [
        "grão-duque",
        "nobre de alta patente",
        "aristocrata",
        "título real",
        "príncipe nobre",
        "duque superior",
        "senhor feudal",
        "título de nobreza",
        "alta linhagem",
        "aristocracia elevada",
        "nobreza de destaque",
      ],
      livro: "Andar do Bêbado",
      localizacao: "Segundo armário do lado B, terceira prateleira",
      instrucoes:
        "Sou uma figura de prestígio, com posição elevada e visão clara do que deve ser feito. Meu caminho é traçado por escolhas estratégicas, decisões cuidadosas e liderança reconhecida. Quem me segue aprende a navegar entre obstáculos e oportunidades, alcançando metas sem se perder. Quem sou eu e qual é o meu guia?",
      fraseParaAnotar: "TRANSFORMAM",
    },
    {
      id: 3,
      texto:
        "Reúno peças e componentes em uma sequência organizada para que funcionem corretamente como um todo.",
      pergunta:
        "Qual termo descreve o processo de unir partes ou componentes para formar um conjunto funcional e estruturado?",
      respostaCorreta: [
        "montagem",
        "instalação",
        "assemblagem",
        "construção",
        "configuração",
        "organização",
        "armação",
        "composição",
        "enfileiramento",
        "estruturação",
        "ajuste",
      ],
      livro: "Acionamentos Eletromagnéticos",
      localizacao: "Terceiro armário do lado A, primeira prateleira",
      instrucoes:
        "Sou o primeiro número par após o início, companheiro do um em quase tudo. Represento dualidade, equilíbrio e parceria, e muitas vezes apareço em pares ou duplas. Que número sou eu?",
      fraseParaAnotar: "MENTE",
    },
    {
      id: 4,
      texto:
        "Sou invisível aos olhos, mas sinto e transmito forças que influenciam tudo ao meu redor.",
      pergunta:
        "Qual termo descreve uma região ou sistema onde forças oscilantes ou energéticas se manifestam, afetando o ambiente ou objetos próximos?",
      respostaCorreta: [
        "campo vibracional",
        "campo de energia",
        "campo oscilante",
        "campo eletromagnético",
        "campo de vibração",
        "onda energética",
        "campo dinâmico",
        "campo ressonante",
        "campo energético",
        "campo de força",
        "campo oscilatório",
      ],
      livro: "O Segredo",
      localizacao: "Primeiro armário do lado B, terceira prateleira",
      instrucoes:
        "Não me vês, mas me sentes; não sou sólido, mas altero o que toca meu espaço. Oscilo, ressono, transmito forças sem toque direto. Cientistas me estudam e sábios me reconhecem. Quem sou eu?",
      fraseParaAnotar: "E",
    },
    {
      id: 5,
      texto:
        "Sou a característica que se sobressai e influencia decisões, comportamentos ou resultados sobre os demais.",
      pergunta:
        "Qual termo descreve a condição de algo ou alguém que exerce maior influência ou controle em relação aos outros?",
      respostaCorreta: [
        "predominância",
        "superioridade",
        "domínio",
        "prevalência",
        "hegemonia",
        "soberania",
        "controle",
        "liderança",
        "autoridade",
        "primazia",
        "vantagem",
      ],
      livro: "Ética nas Organizações",
      localizacao: "Primeiro armário do lado A, quarta prateleira",
      instrucoes:
        "Sou menor que dez, mas maior que cinco. Muitos me veem como símbolo de equilíbrio e harmonia, pois divido o espaço e os elementos de forma uniforme. Em jogos, apareço como metade de um par perfeito; em famílias ou grupos, represento união e colaboração. Qual número sou eu?",
      fraseParaAnotar: "CORAÇÃO",
    },
  ],
  5: [
    {
      id: 1,
      texto:
        "Sou a capacidade de um elemento existir em diferentes formas físicas ou estruturais, mesmo mantendo a mesma composição química.",
      pergunta:
        "Qual termo descreve a propriedade de um elemento de apresentar múltiplas formas estruturais ou físicas sem alterar sua composição química?",
      respostaCorreta: [
        "Alotropia",
        "formas alotrópicas",
        "variedades estruturais",
        "formas alternativas",
        "estruturas distintas",
        "modificações cristalinas",
        "formas químicas",
        "formas moleculares",
        "polimorfismo",
        "formas diferentes",
        "formas elementares",
      ],
      livro: "Química Integral",
      localizacao: "Terceiro armário do lado A, segunda prateleira",
      instrucoes:
        "Sou maior que dez, menor que vinte, formado por dois dígitos que juntos somam nove. Muitos me veem como um marco de transição, onde responsabilidades e liberdade se encontram. Apareço em calendários, aniversários e etapas importantes da vida. Que número sou eu?",
      fraseParaAnotar: "SENAI",
    },
    {
      id: 2,
      texto:
        "Sou um material projetado para cortar, perfurar ou usinar outros metais mesmo sob altas velocidades e temperaturas.",
      pergunta:
        "Qual termo descreve um tipo de aço utilizado em ferramentas de corte que mantém a dureza mesmo em altas velocidades e temperaturas?",
      respostaCorreta: [
        "Aços rápidos",
        "high-speed steel",
        "HSS",
        "aços de corte rápido",
        "aços de alta velocidade",
        "aços ferramenta",
        "aços endurecíveis",
        "ligas de corte",
        "aços temperáveis",
        "aços para fresagem",
        "aços resistentes ao calor",
      ],
      livro: "Teoria da Usinagem dos Materiais",
      localizacao: "Sexto armário do lado A, segunda prateleira",
      instrucoes:
        "Sou resistente e preciso, trabalhando sem parar mesmo quando o calor aumenta. Transformo peças duras em formas perfeitas, mantendo minha força e durabilidade. Alguns me chamam de veloz, outros de incansável; meu segredo está na liga e na estrutura que me torna imbatível. Que tipo de material sou eu?",
      fraseParaAnotar: "CAPACITA",
    },
    {
      id: 3,
      texto:
        "Permito que a corrente flua em apenas uma direção, sem oferecer resistência ou perder energia.",
      pergunta:
        "Qual termo descreve um componente eletrônico que conduz corrente perfeitamente em um sentido, sem apresentar perdas ou resistência?",
      respostaCorreta: [
        "diodo ideal",
        "diodo perfeito",
        "diodo sem perdas",
        "diodo de condução ideal",
        "diodo sem resistência",
        "diodo eletrônico ideal",
        "componente unidirecional perfeito",
        "diodo de corrente ideal",
        "diodo sem queda de tensão",
        "diodo teórico",
        "diodo de semicondutor ideal",
      ],
      livro: "Eletrônica de Potência",
      localizacao: "Quinto armário do lado B, primeira prateleira",
      instrucoes:
        "Sou invisível, mas transformo e direciono a corrente elétrica. Um de nós deixa a energia fluir apenas em uma direção, enquanto o outro amplifica sinais e controla fluxos com precisão. Juntos, dominamos circuitos, facilitamos a eletrônica e damos vida a sistemas modernos. Quem somos nós?",
      fraseParaAnotar: "PROFISSIONAIS",
    },
    {
      id: 4,
      texto:
        "Sou o espaço onde a criatividade, a técnica e o engenho se encontram para surpreender e encantar.",
      pergunta:
        "Qual termo descreve um local ou apresentação onde truques, engenhos e efeitos são exibidos para impressionar e entreter o público?",
      respostaCorreta: [
        "Teatro dos Artifícios",
        "palco de engenhos",
        "cenário de efeitos",
        "mostra de habilidades",
        "teatro de truques",
        "apresentação de manobras",
        "espetáculo de engenharias",
        "palco de criatividade",
        "teatro de invenções",
        "mostra de perícia",
        "cenário de artifícios",
      ],
      livro: "O Império do Efêmero",
      localizacao: "Sétimo armário do lado A, quarta prateleira",
      instrucoes:
        "Sou visível em ruas e passarelas, mas também nas atitudes e hábitos. Transformo o que é comum em expressão, e o que é passado em tendência. No Ocidente, guio estilos, cores e formas, refletindo cultura, história e inovação. Quem sou eu?",
      fraseParaAnotar: "PARA O",
    },
    {
      id: 5,
      texto:
        "Sou o processo que transforma curiosidade em conhecimento e prática em habilidade.",
      pergunta:
        "Qual termo descreve a ação de adquirir conhecimento, habilidades ou compreensão a partir de experiências, estudo ou prática?",
      respostaCorreta: [
        "Aprender",
        "estudar",
        "assimilar",
        "compreender",
        "absorver conhecimento",
        "instruir-se",
        "adquirir habilidades",
        "praticar",
        "aperfeiçoar-se",
        "educar-se",
        "desenvolver-se",
      ],
      livro: "Aprender ... Sim, mas Como?",
      localizacao: "Segundo armário do lado A, terceira prateleira",
      instrucoes:
        "Sou o começo de tudo, o ponto inicial de qualquer contagem. Não tenho pares, sou único em minha essência e muitas vezes simbolizo liderança e singularidade. Em famílias, em histórias e em jogos, minha presença marca o primeiro passo. Que número sou eu?",
      fraseParaAnotar: "FUTURO",
    },
  ],

  6: [
    {
      id: 1,
      texto:
        "Ela é a ação que transforma o desalinhado em harmonia, o desajuste em fluidez e o contraste em equilíbrio funcional.",
      pergunta:
        "Qual termo descreve o ato de ajustar ou adaptar algo para que se torne apropriado, coerente ou compatível com determinada condição ou contexto?",
      respostaCorreta: [
        "Adequa",
        "ajusta",
        "adapta",
        "harmoniza",
        "conforma",
        "alinha",
        "regula",
        "sincroniza",
        "compatibiliza",
        "coordena",
        "equilibra",
        "ajusta-se",
      ],
      livro: "Não erre mais",
      localizacao: "Sétimo armário do lado B, quarta prateleira",
      instrucoes:
        "Sou o elo silencioso entre o erro e a perfeição. Quando algo não se encaixa, entro em ação para ajustar o rumo e alinhar o que estava fora do lugar. Não imponho, apenas harmonizo; não transformo, apenas torno compatível. Sem mim, o equilíbrio se perde e a precisão desaparece. Quem sou eu?",
      fraseParaAnotar: "BIRD",
    },
    {
      id: 2,
      texto:
        "Organiza necessidades em camadas, apontando um caminho que vai do sobreviver ao florescer.",
      pergunta:
        "Qual teoria organiza as necessidades humanas em níveis, começando pelas fisiológicas e culminando na autorrealização?",
      respostaCorreta: [
        "Maslow",
        "Hierarquia de necessidades",
        "Pirâmide motivacional",
        "Teoria da motivação",
        "Escala de prioridades humanas",
        "Modelo de autorrealização",
        "Estrutura das aspirações humanas",
        "Níveis de motivação",
        "Teoria das necessidades humanas",
        "Pirâmide de Maslow",
        "Sistema de prioridades motivacionais",
      ],
      livro: "Gestão de pessoas nas organizações",
      localizacao: "Primeiro armário do lado B, segunda prateleira",
      instrucoes:
        "Sou uma construção invisível, mas presente em todos. Subo em etapas, partindo das necessidades que sustentam o corpo até alcançar os desejos que alimentam a alma. Muitos me veem como uma pirâmide, onde cada degrau revela uma nova motivação humana. Quando chego ao topo, encontro a plenitude e o verdadeiro sentido de ser. Quem sou eu?",
      fraseParaAnotar: "BOX",
    },
    {
      id: 3,
      texto:
        "Quando o coração pesa mais que os ombros, algo dentro de nós busca perdão, não dos outros, mas de si mesmo.",
      pergunta:
        "Qual sentimento surge quando alguém reconhece um erro e carrega o peso de suas próprias ações?",
      respostaCorreta: [
        "a culpa",
        "remorso",
        "arrependimento",
        "peso na consciência",
        "autocrítica",
        "responsabilidade moral",
        "sentimento de falha",
        "consciência pesada",
        "autocondenação",
        "autocensura",
        "sensação de erro",
        "desconforto ético",
      ],
      livro: "A arte da felicidade",
      localizacao: "Primeiro armário do lado B, terceira prateleira",
      instrucoes:
        "Sou o fim de um ciclo e o prenúncio de um novo começo. Carrego em mim a sabedoria da experiência e a conclusão de jornadas passadas. Muitos me associam à plenitude, outros à transição — pois após mim, tudo se reinicia. Estou entre o oito e o infinito, marcando o limite antes do recomeço. Que número sou eu?",
      fraseParaAnotar: "DESAFIA",
    },
    {
      id: 4,
      texto:
        "Sou a extensão onde os sinais se movem livremente, sem serem bloqueados ou distorcidos.",
      pergunta:
        "Qual termo descreve o intervalo de frequências que um sistema ou dispositivo permite transmitir ou processar de forma eficiente?",
      respostaCorreta: [
        "banda passante",
        "faixa de frequência",
        "range de transmissão",
        "largura de banda",
        "escopo de frequência",
        "intervalo de frequência",
        "faixa útil",
        "espectro de operação",
        "frequência ativa",
        "faixa operacional",
      ],
      livro: "Curso de circuitos elétricos",
      localizacao: "Primeiro armário do lado B, terceira prateleira",
      instrucoes:
        "Sou a forma que surge quando o tempo deixa de bagunçar os sinais. Minha oscilação é constante, previsível e repetitiva, como uma dança perfeita no espaço e no tempo. Posso ser a base de eletricidade, som ou vibração, revelando estabilidade em meio à variação. Quem sou eu?",
      fraseParaAnotar: "NOSSOS",
    },
    {
      id: 5,
      texto:
        "Procure o compêndio de química integral. No capítulo introdutório há a declaração sobre método científico aplicado à química.",
      pergunta: "Qual é a base do método em química descrita?",
      respostaCorreta: [
        "esqueléticas",
        "magras",
        "raquíticas",
        "frágeis",
        "definhadas",
        "delgadas",
        "muito finas",
        "subnutridas",
        "enxutas",
        "espartanas",
      ],
      livro: "Segredos de estilo",
      localizacao: "Sétimo armário do lado B, primeira prateleira",
      instrucoes:
        "Sou algo que todos percebem, mas poucos concordam sobre mim. Apareço em tons, matizes e expressões; meus detalhes revelam identidades e histórias. Alguns me julgam superficial, outros estudam minhas variações com atenção. No debate entre o que se vê e o que se sente, sempre estou presente. O que sou?",
      fraseParaAnotar: "SENTIDOS",
    },
  ],

  7: [
    {
      id: 1,
      texto:
        "Eles carregam experiência e histórias de batalhas passadas, servindo de referência e guia para os mais novos.",
      pergunta:
        "Qual termo descreve pessoas que possuem grande experiência e conhecimento adquirido ao longo do tempo em uma área específica?",
      respostaCorreta: [
        "os veteranos",
        "experientes",
        "os antigos",
        "os mais antigos",
        "profissionais experientes",
        "os capacitados",
        "os sábios",
        "os especializados",
        "os seniores",
        "os pioneiros",
      ],
      livro: "Virando gente grande",
      localizacao: "Primeiro armário do lado B, terceira prateleira",
      instrucoes:
        "Eu sei que você entende o que eu digo, mesmo sem ver minhas palavras no papel. Posso estar certo ou errado, mas ainda assim você consegue me seguir. O que sou eu?",
      fraseParaAnotar: "BIBLIOTECA",
    },
    {
      id: 2,
      texto:
        "Transforma barro em formas úteis ou artísticas, moldando com cuidado e paciência cada detalhe sem alterar a essência do material.",
      pergunta:
        "Qual termo descreve a pessoa especializada em trabalhar e modelar cerâmica, criando peças utilitárias ou artísticas?",
      respostaCorreta: [
        "ceramista",
        "oleiro",
        "artesão de barro",
        "mestre ceramista",
        "trabalhador de cerâmica",
        "modelador de barro",
        "fabricante de peças de argila",
        "artesão de argila",
        "especialista em cerâmica",
        "profissional de barro",
      ],
      livro: "Arte industrial",
      localizacao: "Sétimo armário do lado B, terceira prateleira",
      instrucoes:
        "Começo como barro mole e sem forma, mas nas mãos certas me torno útil ou belo. Quem me transforma ganha paciência, técnica e criatividade. Quem é meu mestre silencioso?",
      fraseParaAnotar: "GUARDA",
    },
    {
      id: 3,
      texto:
        "Contribuiu para a descoberta que transformou a física nuclear, abrindo caminhos para novos entendimentos sobre energia e átomo.",
      pergunta:
        "Qual cientista, pioneira na física nuclear, ajudou a compreender o processo que divide o núcleo atômico e mudou a ciência para sempre?",
      respostaCorreta: [
        "Lise Meitner",
        "cientista nuclear",
        "física austríaca",
        "pesquisadora atômica",
        "pioneira da física",
        "especialista em radioatividade",
        "mulher da ciência",
        "investigadora do núcleo",
        "descobridora de fissão nuclear",
        "profissional de física nuclear",
      ],
      livro: "As Ciências",
      localizacao: "Primeiro armário do lado B, quarta prateleira",
      instrucoes:
        "Sou invisível, mas minha descoberta mudou o mundo. Ajudei a dividir o núcleo e abrir portas para energia poderosa. Muitos me reconheceram apenas depois, mas meu trabalho fala sozinho. Quem sou eu?",
      fraseParaAnotar: "OS SEGREDOS",
    },
    {
      id: 4,
      texto:
        "É a estrutura invisível que guia pensamentos, interpreta experiências e influencia decisões sem que percebamos explicitamente.",
      pergunta:
        "Qual termo descreve a representação interna que cada pessoa cria para entender o mundo, interpretar situações e tomar decisões?",
      respostaCorreta: [
        "modelo mental",
        "padrão cognitivo",
        "mapa mental",
        "estrutura de pensamento",
        "representação interna",
        "modelo cognitivo",
        "paradigma pessoal",
        "esquema mental",
        "conceito interno",
        "referência mental",
      ],
      livro: "Líder do Futuro",
      localizacao: "Primeiro armário do lado B, segunda prateleira",
      instrucoes:
        "Sou menor que dez, maior que três, e muitos me veem como símbolo de equilíbrio e harmonia. Apareço em dedos de uma mão, estrelas e nos sentidos que nos conectam ao mundo. Divido espaço e elementos com perfeição, e em histórias antigas, represento união e proteção. Que número sou eu?",
      fraseParaAnotar: "DO",
    },
    {
      id: 5,
      texto:
        "Procure o manual de máquinas. No capítulo sobre manutenção há uma recomendação de segurança-chave.",
      pergunta: "Qual prática fundamental de segurança?",
      respostaCorreta: [
        "vender",
        "comercializar",
        "negociar",
        "transacionar",
        "oferecer",
        "fornecer",
        "distribuir",
        "alienar",
        "promover",
        "trocar",
      ],
      livro: "Os verdadeiros heróis de um negócio",
      localizacao: "Primeiro armário do lado B, segunda prateleira",
      instrucoes:
        "Sou o caminho pelo qual buscas respostas sem precisar decifrar tudo sozinho. Pessoas me procuram quando dúvidas surgem, e mesmo invisível, revelo informações que guiam decisões e esclarecem caminhos. Posso existir em livros, telas ou vozes, mas meu valor está em quem me procura. Quem sou eu?",
      fraseParaAnotar: "CONHECIMENTO",
    },
  ],

  8: [
    {
      id: 1,
      texto:
        "Envolve ações, hábitos e rotinas que repetimos todos os dias, moldando nossa experiência de forma constante.",
      pergunta:
        "Qual termo descreve tudo aquilo que fazemos de forma regular, envolvendo hábitos e rotinas diárias?",
      respostaCorreta: [
        "cotidiano",
        "rotina",
        "vida diária",
        "dia a dia",
        "atividade diária",
        "hábitos diários",
        "vida comum",
        "prática diária",
        "costumes diários",
        "agenda diária",
        "vida cotidiana",
      ],
      livro: "Cidadania",
      localizacao: "Segundo armário do lado A, primeira prateleira",
      instrucoes:
        "Sou o elo que organiza passos e métodos, garantindo que ações complexas aconteçam de forma ordenada e eficiente. Sem mim, planos se perdem e resultados se tornam imprevisíveis. Posso estar em processos, rotinas ou técnicas, sempre estruturando a execução de forma segura e confiável. Quem sou eu, representando a quinta posição e o equilíbrio entre o começo e o meio?",
      fraseParaAnotar: "LER",
    },
    {
      id: 2,
      texto:
        "Preenche o espaço com destaque, tornando cada detalhe mais perceptível sem alterar sua essência.",
      pergunta:
        "Qual característica descreve algo que ocupa muito espaço, transmite presença e chama atenção pelo seu tamanho ou densidade?",
      respostaCorreta: [
        "Volumosa",
        "grande",
        "abundante",
        "densa",
        "robusta",
        "espessa",
        "pesada",
        "proeminente",
        "caprichada",
        "enorme",
        "generosa",
      ],
      livro: "Moda e arte",
      localizacao: "Sétimo armário do lado B, primeira prateleira",
      instrucoes:
        "Sou maior que cinquenta, menor que setenta, formada por dois dígitos que juntos somam sete. Carrego presença, impacto e densidade, preenchendo espaço com destaque. Alguns me veem como abundância, outros como grandiosidade. Sem mim, o conteúdo pareceria raso e incompleto; com minha presença, tudo ganha corpo e expressão. Quem sou eu, representando a magnitude que se faz notar?",
      fraseParaAnotar: "LIVROS",
    },
    {
      id: 3,
      texto:
        "Fico totalmente envolvido e atento, absorvendo cada detalhe com intenso interesse e admiração.",
      pergunta:
        "Qual estado descreve alguém que está profundamente absorvido, encantado ou impressionado por algo ou alguém?",
      respostaCorreta: [
        "fascinado",
        "encantado",
        "maravilhado",
        "cativado",
        "hipnotizado",
        "arrebatado",
        "absorto",
        "deslumbrado",
        "impressionado",
        "seduzido",
        "atraído",
      ],
      livro: "Nunca desista dos seus sonhos",
      localizacao: "Primeiro armário do lado B, terceira prateleira",
      instrucoes:
        "Vivo entre o que é e o que poderia ser. Minhas ideias viajam além do alcance das mãos, construindo mundos que ainda não existem. Alguns me chamam de ilusório, outros de visionário. Cada passo meu é guiado por possibilidades, e não apenas pela realidade que me cerca. Quem sou eu, aquele que transforma sonhos em caminhos?",
      fraseParaAnotar: "AMPLIA",
    },
    {
      id: 4,
      texto:
        "Transforma o simples em memorável, transmite presença sem precisar de palavras e deixa cada gesto repleto de harmonia e equilíbrio.",
      pergunta:
        "Qual qualidade faz com que ações, aparência ou comportamentos transmitam charme, apuro e distinção sem esforço?",
      respostaCorreta: [
        "elegancia",
        "sofisticação",
        "graça",
        "distinção",
        "finesse",
        "requinte",
        "refinamento",
        "charme",
        "estilo",
        "classe",
        "apuro",
      ],
      livro: "A história das bolsas",
      localizacao: "Sétimo armário do lado B, segunda prateleira",
      instrucoes:
        "Não se vê apenas em roupas ou joias, mas se percebe no modo de andar, falar e agir. Está nos detalhes sutis, na harmonia dos movimentos e na aura que envolve quem a possui. Alguns tentam imitá-la, mas apenas quem a sente consegue transmiti-la sem esforço. Quem sou eu, presença que encanta sem dizer uma palavra?",
      fraseParaAnotar: "OS HORIZONTES",
    },
    {
      id: 5,
      texto:
        "Envolve tudo ao nosso redor, influencia mudanças invisíveis e conecta fenômenos distantes sem que possamos tocá-la.",
      pergunta:
        "Qual característica descreve algo relacionado à camada que envolve o planeta e controla condições como pressão, temperatura e movimento do ar?",
      respostaCorreta: [
        "Atmosférica",
        "aérea",
        "meteorológica",
        "climática",
        "ambiental",
        "celeste",
        "do ar",
        "de pressão",
        "do céu",
        "do clima",
        "troposférica",
      ],
      livro: "SDA - Sistema de Proteção Contra Descargas",
      localizacao: "Quarto armário do lado B, terceira prateleira",
      instrucoes:
        "Eu danço pelo céu com energia pura, iluminando a escuridão em frações de segundo. Meus caminhos são invisíveis até que explodo em brilho e som, conectando nuvens à terra ou nuvem com nuvem. Meu poder assusta, mas revela a força que circula acima de nossas cabeças. Quem sou eu?",
      fraseParaAnotar: "PESSOAIS",
    },
  ],

  9: [
    {
      id: 1,
      texto:
        "Localize o livro 'A Arte da Guerra'. No capítulo sobre tipos de terreno há uma definição essencial.",
      pergunta: "O que revela a classificação dos nove tipos de terreno?",
      respostaCorreta: [
        "Tumu",
        "tipos de terreno",
        "classificacao de batalha",
        "estrategia militar",
        "terreno hostil",
        "terreno defensivo",
        "terreno estratégico",
        "terreno vantajoso",
        "campo de batalha",
        "tipos de solo",
        "categorias de terreno",
        "estratégia de guerra",
      ],
      livro: "A Arte da Guerra",
      localizacao: "Segundo armário lado A, segunda prateleira",
      instrucoes: "Procure a explicação sobre os nove tipos de terreno.",
      fraseParaAnotar: "SENAI",
    },
    {
      id: 2,
      texto:
        "Consulte o livro 'Marketing'. No capítulo sobre sistemas há uma análise detalhada.",
      pergunta: "Qual elemento compõe o sistema de marketing?",
      respostaCorreta: [
        "macroambiente",
        "fatores externos",
        "ambiente de mercado",
        "forças externas",
        "concorrência",
        "clientes",
        "fornecedores",
        "tendências de mercado",
        "condições econômicas",
        "sociedade",
        "demanda de mercado",
        "regulamentações",
      ],
      livro: "Marketing",
      localizacao: "Sexto armário lado B, terceira prateleira",
      instrucoes: "Procure a explicação sobre o sistema de marketing.",
      fraseParaAnotar: "ENSINA",
    },
    {
      id: 3,
      texto:
        "Leia 'Não se apega não'. No capítulo sobre atitudes há uma menção importante.",
      pergunta: "Qual característica define a garota má do texto?",
      respostaCorreta: [
        "doce",
        "aparência enganosa",
        "personalidade sedutora",
        "cativante",
        "charme",
        "inteligente",
        "astuta",
        "irresistível",
        "confiante",
        "persuasiva",
        "independente",
        "determinada",
      ],
      livro: "Não se apega não",
      localizacao: "Primeiro armário lado B, terceira prateleira",
      instrucoes: "Procure a descrição sobre a garota má.",
      fraseParaAnotar: "HABILIDADES",
    },
    {
      id: 4,
      texto:
        "Abra 'Residências Inteligentes'. No capítulo sobre redes domésticas há um tópico sobre proteção.",
      pergunta:
        "Qual é o fator principal que garante a segurança da rede doméstica?",
      respostaCorreta: [
        "segurança",
        "proteção de rede",
        "controle de acesso",
        "firewall",
        "criptografia",
        "senhas fortes",
        "monitoramento",
        "antivírus",
        "backup",
        "restrições de usuário",
        "políticas de segurança",
        "autenticação",
      ],
      livro: "Residências Inteligentes",
      localizacao: "Sétimo armário lado A, segunda prateleira",
      instrucoes: "Procure a explicação sobre segurança em rede doméstica.",
      fraseParaAnotar: "COM",
    },
    {
      id: 5,
      texto:
        "Consulte 'Como Aprender a Ensinar Competências'. No capítulo sobre complexidade há uma abordagem detalhada.",
      pergunta: "O que representa o conceito de complexidade nesse contexto?",
      respostaCorreta: [
        "complexidade",
        "níveis de aprendizagem",
        "integração de habilidades",
        "multidisciplinaridade",
        "coordenação de tarefas",
        "estrutura de conhecimento",
        "níveis de competência",
        "interação entre áreas",
        "processos cognitivos",
        "abordagem sistêmica",
        "desenvolvimento de habilidades",
        "aprendizagem integrada",
      ],
      livro: "Como Aprender a Ensinar Competências",
      localizacao: "Segundo armário lado A, segunda prateleira",
      instrucoes: "Procure a explicação sobre o número sete e complexidade.",
      fraseParaAnotar: "EXCELÊNCIA",
    },
  ],

  10: [
    {
      id: 1,
      texto:
        "Encontre o livro sobre gestão de facilidades. No capítulo sobre novas agendas há uma explicação sobre otimização e eficiência no uso dos recursos.",
      pergunta:
        "Qual conceito descreve o processo de controle e eficiência dos recursos energéticos dentro das instalações?",
      respostaCorreta: [
        "gerenciamento de energia",
        "gestão energética",
        "controle de energia",
        "otimização energética",
        "administração de consumo",
        "eficiência energética",
        "monitoramento energético",
        "uso racional de energia",
        "planejamento energético",
        "gestão de energia",
      ],
      livro: "Gestão de facilidades",
      localizacao:
        "Capítulo 9 – Novas Agendas | 6º armário – lado B – 2ª prateleira",
      instrucoes:
        "Procure no capítulo onde a sustentabilidade se alia à eficiência. Sou a prática que transforma consumo em controle e desperdício em economia. Quem sou eu?",
      fraseParaAnotar: "LIVROS",
    },
    {
      id: 2,
      texto:
        "Localize a obra que conecta a arte do pensamento à precisão dos circuitos. No capítulo sobre conversores há uma explicação essencial sobre princípios teóricos.",
      pergunta:
        "Qual termo descreve o conjunto de fundamentos que explicam o funcionamento de sistemas e fenômenos em diversas áreas do conhecimento?",
      respostaCorreta: [
        "teoria",
        "conceito",
        "fundamento",
        "princípio",
        "base científica",
        "modelo teórico",
        "estrutura conceitual",
        "hipótese explicativa",
        "sistema de ideias",
        "pressuposto científico",
      ],
      livro: "Conectando o PIC",
      localizacao:
        "Capítulo 7 – Conversor Analógico-Digital Interno | 5º armário – lado A – 3ª prateleira",
      instrucoes:
        "Sou o alicerce do saber, a explicação antes da prática. Sem mim, a aplicação se perde; comigo, o conhecimento se sustenta. Quem sou eu?",
      fraseParaAnotar: "DO",
    },
    {
      id: 3,
      texto:
        "Procure o livro que mistura hierarquia, propósito e limpeza. No capítulo oitavo há uma lição valiosa sobre aprendizado e humildade.",
      pergunta:
        "Qual é o nome do personagem que ensina, através de atitudes simples, grandes lições de liderança e propósito?",
      respostaCorreta: [
        "fred hopper",
        "hopper",
        "sr. hopper",
        "o faxineiro",
        "fred",
        "mentor hopper",
        "personagem fred hopper",
      ],
      livro: "O faxineiro e o executivo",
      localizacao: "Capítulo 8 | 1º armário – lado B – 3ª prateleira",
      instrucoes:
        "Sou aquele que, com vassoura na mão e sabedoria na mente, transformo lugares e corações. Ensinei que liderar é servir e ouvir é o primeiro passo para compreender. Quem sou eu?",
      fraseParaAnotar: "SENAI",
    },
    {
      id: 4,
      texto:
        "Encontre o livro que une comportamento e cultura. No capítulo sobre o imaginário, há uma explicação sobre o olhar simbólico da moda.",
      pergunta:
        "Qual termo descreve o estudo que analisa o ser humano em sua relação com a cultura, os símbolos e as práticas sociais?",
      respostaCorreta: [
        "antropológica",
        "antropologia",
        "sociocultural",
        "cultural",
        "social",
        "etnográfica",
        "humana",
        "estudo da cultura",
        "estudo humano",
        "comportamental",
      ],
      livro: "A moda e seus desafios",
      localizacao:
        "Capítulo 3 – A moda e seu imaginário | 2º armário – lado A – 4ª prateleira",
      instrucoes:
        "Sou o olhar que busca compreender o homem por meio de seus símbolos, rituais e expressões. Na moda, explico o vestir não como vaidade, mas como linguagem. Quem sou eu?",
      fraseParaAnotar: "INSPIRAM",
    },
    {
      id: 5,
      texto:
        "Encontre a obra de reflexões e emoções. No capítulo sobre memórias e desapego, há um trecho que revela a leveza da ilusão e o peso do coração.",
      pergunta:
        "Qual palavra representa algo feito por diversão, mas que também pode esconder sentimentos e intenções mais profundas?",
      respostaCorreta: [
        "brincadeira",
        "jogo",
        "diversão",
        "passatempo",
        "entretenimento",
        "distração",
        "graça",
        "piada",
        "ludicidade",
        "recreação",
      ],
      livro: "Não se iluda, não",
      localizacao:
        "Capítulo 6 – Eu precisava te esquecer, só não quero | 1º armário – lado B – 3ª prateleira",
      instrucoes:
        "Sou leve, às vezes ingênua, mas posso esconder verdades não ditas. Entre o riso e o disfarce, misturo emoção e ilusão. Quem sou eu?",
      fraseParaAnotar: "MENTES",
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
