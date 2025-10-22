// ======================================================
// SISTEMA FINAL - BIRD BOX (VERSÃO UNIFICADA E CORRIGIDA)
// ======================================================

(() => {
  console.log("🏁 Inicializando página final...");

  // ======================================================
  // CONSTANTES DE FRASES FINAIS
  // ======================================================
  // Frases finais — Bird Box Caça ao Tesouro (atualizado para 10 trilhas)
  const FRASES_FINAIS = {
    1: [
      "O FUTURO É TECNOLÓGICO",
      "A INOVAÇÃO MOVE O MUNDO",
      "A ÉTICA GUIA AS DECISÕES",
      "O QUEIJO É A OPORTUNIDADE",
      "A QUALIDADE NÃO TEM FIM",
    ],
    2: [
      "A SATISFAÇÃO GERA LEALDADE",
      "AS PESSOAS CERTAS FAZEM A DIFERENÇA",
      "LÍDERES VEEM ALÉM",
      "OS HERÓIS ESTÃO NA EQUIPE",
      "SONHAR É NÃO DESISTIR",
    ],
    3: [
      "ESCUTAR É A CHAVE DA INFLUÊNCIA",
      "A FELICIDADE SE PRATICA",
      "A CIÊNCIA TEM ROSTOS FEMININOS",
      "O UNIVERSO RESPONDE AO FOCO",
      "LIDERAR É SERVIR",
    ],
    4: [
      "DEIXE IR PARA SEGUIR EM FRENTE",
      "QUEM SE CONHECE NÃO SE ILUDE",
      "ADAPTAR-SE É SOBREVIVER",
      "CRESCER É ASSUMIR RESPONSABILIDADES",
      "CIDADANIA É A FORÇA DO POVO",
    ],
    5: [
      "CONHEÇA O INIMIGO PARA VENCER",
      "ENSINE PARA TRANSFORMAR",
      "APRENDER É REINVENTAR",
      "A MODA É REFLEXO DO TEMPO",
      "ESTILO É SER AUTÊNTICO",
    ],
    6: [
      "A MODA E A ARTE SÃO UMA SÓ LINGUAGEM",
      "REVER, PENSAR, NÃO ERRAR",
      "A HISTÓRIA TAMBÉM SE CARREGA NO OMBRO",
      "A ENERGIA MOVE O MUNDO INVISÍVEL",
      "A CIÊNCIA COMEÇA NA OBSERVAÇÃO",
    ],
    7: [
      "A QUÍMICA UNE O INVISÍVEL",
      "O EQUILÍBRIO TRAZ SAÚDE",
      "PLANEJAR É CONSTRUIR O FUTURO",
      "A PROTEÇÃO VEM DA PREVENÇÃO",
      "SEGURANÇA É O PRIMEIRO PASSO",
    ],
    8: [
      "A TENSÃO MOVE O FLUXO",
      "O CONDUTOR LEVA A ENERGIA",
      "A CORRENTE É UMA SÓ",
      "O RAIO ENCONTRA O CAMINHO DA TERRA",
      "A LIGAÇÃO CORRETA FAZ A DIFERENÇA",
    ],
    9: [
      "A POTÊNCIA TRANSFORMA A ENERGIA",
      "A ANTENA OUVE O CÉU",
      "A VELOCIDADE DEFINE O CORTE",
      "O FREIO SALVA VIDAS",
      "CUSTOS BEM DEFINIDOS GUIAM RESULTADOS",
    ],
    10: [
      "GERENCIAR É CUIDAR DO TODO",
      "CRIAR VALOR É SERVIR AO CLIENTE",
      "O FUTURO É CONECTADO",
      "O CONSUMO É UM ESPELHO DO SER",
      "A INDÚSTRIA É ARTE EM MOVIMENTO",
    ],
  };

  let tempoInicio = null;
  let trilhaNumeroGlobal = null;

  document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Sistema final carregado com sucesso!");

    tempoInicio = Date.now();
    iniciarContadorTempo();

    const urlParams = new URLSearchParams(window.location.search);
    trilhaNumeroGlobal = parseInt(urlParams.get("trilha"));

    if (!trilhaNumeroGlobal || !FRASES_FINAIS[trilhaNumeroGlobal]) {
      mostrarErro("Trilha não especificada ou inválida. Voltando ao início...");
      setTimeout(() => (window.location.href = "index.html"), 3000);
      return;
    }

    carregarDadosTrilha(trilhaNumeroGlobal);
    configurarEventListeners(trilhaNumeroGlobal);

    // Esconder loading screen se existir
    const loadingScreen = document.getElementById("loadingScreen");
    if (loadingScreen) {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => (loadingScreen.style.display = "none"), 500);
    }
  });

  // ======================================================
  // FUNÇÕES DE CARREGAMENTO DE DADOS
  // ======================================================
  function carregarDadosTrilha(trilhaNumero) {
    try {
      const palavrasSalvas = localStorage.getItem(
        `birdbox_palavras_${trilhaNumero}`
      );
      const palavrasChave = palavrasSalvas ? JSON.parse(palavrasSalvas) : [];

      const perguntasSalvas = localStorage.getItem(
        `birdbox_perguntas_${trilhaNumero}`
      );
      const perguntasSorteadas = perguntasSalvas
        ? JSON.parse(perguntasSalvas)
        : [];

      document.getElementById("trilhaNumeroFinal").textContent = trilhaNumero;
      exibirFrasesOrdenadas(palavrasChave, perguntasSorteadas);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      mostrarErro("Erro ao carregar dados do jogo.");
    }
  }

  function exibirFrasesOrdenadas(palavrasChave, perguntasSorteadas) {
    const frasesContainer = document.getElementById("frasesColetadas");
    if (!frasesContainer) return;

    if (palavrasChave.length === 0) {
      frasesContainer.innerHTML = `
        <div class="alert alert-warning text-center">
          <i class="fas fa-exclamation-triangle me-2"></i>
          Nenhuma frase coletada. Complete as pistas primeiro!
        </div>
      `;
      return;
    }

    let html = "";
    const frasesOrdenadas = perguntasSorteadas.length
      ? perguntasSorteadas.map((p, i) => ({
          numero: i + 1,
          texto: palavrasChave[i] || "",
          perguntaOriginal: p.pergunta || "",
        }))
      : palavrasChave.map((frase, i) => ({ numero: i + 1, texto: frase }));

    frasesOrdenadas.forEach((f) => {
      html += `
        <div class="frase-item">
          <div class="d-flex align-items-start">
            <div class="frase-numero">${f.numero}</div>
            <div class="frase-texto flex-grow-1">${f.texto}</div>
          </div>
          ${
            f.perguntaOriginal
              ? `<small class="text-muted mt-1 d-block"><em>"${f.perguntaOriginal}"</em></small>`
              : ""
          }
        </div>
      `;
    });

    frasesContainer.innerHTML = html;

    if (palavrasChave.length === 5)
      preencherRespostaAutomatica(frasesOrdenadas);
  }

  function preencherRespostaAutomatica() {
    const trilha = trilhaNumeroGlobal;
    if (!trilha || !FRASES_FINAIS[trilha]) return;

    const frasesCorretas = FRASES_FINAIS[trilha];
    const respostaCompleta = frasesCorretas.join(" "); // ordem garantida

    const input = document.getElementById("respostaFinal");
    const feedback = document.getElementById("feedbackFinal");

    if (input && feedback) {
      input.value = respostaCompleta;
      feedback.innerHTML = `
      <div class="alert alert-info">
        <i class="fas fa-robot me-2"></i>
        Resposta preenchida automaticamente na ordem correta!
      </div>
    `;
    }
  }

  // ======================================================
  // EVENT LISTENERS
  // ======================================================
  function configurarEventListeners(trilhaNumero) {
    const btnVerificar = document.getElementById("btnVerificarFinal");
    const btnAuto = document.getElementById("btnPreencherAuto");
    const input = document.getElementById("respostaFinal");
    const btnVoltarInicio = document.getElementById("btnVoltarInicioFinal");
    const btnReiniciar = document.getElementById("btnReiniciarFinal");

    // Botão de verificação final
    if (btnVerificar)
      btnVerificar.addEventListener("click", () =>
        verificarRespostaFinal(trilhaNumero)
      );

    // Botão de preenchimento automático
    if (btnAuto)
      btnAuto.addEventListener("click", () => {
        const trilha = trilhaNumeroGlobal;
        if (!trilha || !FRASES_FINAIS[trilha]) return;

        const frasesCorretas = FRASES_FINAIS[trilha]; // ORDEM CORRETA
        if (input) {
          input.value = frasesCorretas.join(" ");
          document.getElementById("feedbackFinal").innerHTML = `
          <div class="alert alert-info">
            <i class="fas fa-robot me-2"></i>
            Resposta preenchida automaticamente na ordem correta!
          </div>
        `;
        }
      });

    // Atalho Ctrl + Enter para verificar
    if (input)
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && e.ctrlKey)
          verificarRespostaFinal(trilhaNumero);
      });

    // Botão Voltar ao Início
    if (btnVoltarInicio)
      btnVoltarInicio.addEventListener("click", () => {
        window.location.href = "index.html";
      });

    // Botão Reiniciar Jogo (mesma trilha, limpa respostas)
    if (btnReiniciar)
      btnReiniciar.addEventListener("click", () => {
        localStorage.removeItem(`birdbox_palavras_${trilhaNumero}`);
        localStorage.removeItem(`birdbox_perguntas_${trilhaNumero}`);
        window.location.reload(); // recarrega a página atual
      });
  }

  // ======================================================
  // VERIFICAÇÃO FINAL
  // ======================================================
  function verificarRespostaFinal(trilhaNumero) {
    const input = document.getElementById("respostaFinal");
    const feedback = document.getElementById("feedbackFinal");
    const btn = document.getElementById("btnVerificarFinal");

    if (!input || !feedback || !btn) return;

    const resposta = (input.value || "").trim().toUpperCase();
    if (!resposta) {
      feedback.innerHTML = `
        <div class="alert alert-warning">
          <i class="fas fa-exclamation-triangle me-2"></i>
          Digite a sequência completa das 5 frases.
        </div>
      `;
      return;
    }

    const correta = FRASES_FINAIS[trilhaNumero]?.join(" ").toUpperCase().trim();
    const normalizar = (str) =>
      str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const respostaNorm = normalizar(resposta);
    const corretaNorm = normalizar(correta);

    btn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Verificando...';
    btn.disabled = true;

    setTimeout(() => {
      if (respostaNorm === corretaNorm) {
        sucessoFinal(trilhaNumero, feedback);
        btn.innerHTML = '<i class="fas fa-trophy me-2"></i>Concluído';
      } else {
        feedback.innerHTML = `
          <div class="alert alert-danger">
            <strong>CÓDIGO INCORRETO</strong><br>
            A sequência não confere.<br>
            - Estão na ordem correta?<br>
            - Há erros de digitação?<br><br>
            <em>Dica: use "Preencher Automaticamente".</em>
          </div>
        `;
        btn.innerHTML = '<i class="fas fa-trophy me-2"></i>Tentar novamente';
        btn.disabled = false;
      }
    }, 700);
  }

  // ======================================================
  // SUCESSO FINAL
  // ======================================================
  function sucessoFinal(trilhaNumero, feedback) {
    feedback.innerHTML = `
      <div class="alert alert-success">
        🎉 MISSÃO CUMPRIDA!<br>
        Você chegou ao final da Trilha ${trilhaNumero}.<br>
        Mostre esta tela para a bibliotecária validar sua vitória!
      </div>
    `;
    const areaRecompensa = document.getElementById("areaRecompensa");
    if (areaRecompensa) areaRecompensa.classList.remove("d-none");

    salvarConquista(trilhaNumero);

    try {
      localStorage.removeItem(`birdbox_palavras_${trilhaNumero}`);
      localStorage.removeItem(`birdbox_perguntas_${trilhaNumero}`);
    } catch {}
  }

  function salvarConquista(trilhaNumero) {
    const conquistas = JSON.parse(
      localStorage.getItem("birdbox_conquistas") || "[]"
    );
    conquistas.push({
      trilha: trilhaNumero,
      data: new Date().toISOString(),
      tempo: document.getElementById("tempoJogo")?.textContent || "",
    });
    localStorage.setItem("birdbox_conquistas", JSON.stringify(conquistas));
    console.log("🏆 Conquista salva:", trilhaNumero);
  }

  // ======================================================
  // CONTADOR DE TEMPO
  // ======================================================
  function iniciarContadorTempo() {
    setInterval(() => {
      if (!tempoInicio) return;
      const decorrido = Date.now() - tempoInicio;
      const h = Math.floor(decorrido / 3600000);
      const m = Math.floor((decorrido % 3600000) / 60000);
      const s = Math.floor((decorrido % 60000) / 1000);
      const el = document.getElementById("tempoJogo");
      if (el)
        el.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(
          2,
          "0"
        )}:${String(s).padStart(2, "0")}`;
    }, 1000);
  }

  // ======================================================
  // ERRO
  // ======================================================
  function mostrarErro(msg) {
    const feedback = document.getElementById("feedbackFinal");
    if (feedback) {
      feedback.innerHTML = `
        <div class="alert alert-danger">
          <i class="fas fa-exclamation-triangle me-2"></i>${msg}
        </div>
      `;
    }
  }

  console.log("✅ Sistema Final - Bird Box pronto para uso!");
})();
