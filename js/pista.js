// Sistema de Pistas - Bird Box Caça ao Tesouro

// Estado atual do jogo
let estadoAtual = {
  trilhaNumero: null,
  pistaNumero: 0,
  palavrasChave: [],
  pistaAtual: null,
  trilhaPerguntas: [], // Array com as 5 perguntas sorteadas
};

// Elementos DOM
const elementos = {
  loadingScreen: document.getElementById("loadingScreen"),
  numeroTrilha: document.getElementById("numeroTrilha"),
  pistaAtualNumero: document.getElementById("pistaAtualNumero"),
  livroReferencia: document.getElementById("livroReferencia"),
  progressoAtual: document.getElementById("progressoAtual"),
  progressBar: document.getElementById("progressBar"),
  textoPista: document.getElementById("textoPista"),
  perguntaPista: document.getElementById("perguntaPista"),
  respostaInput: document.getElementById("respostaInput"),
  btnVerificar: document.getElementById("btnVerificar"),
  feedbackArea: document.getElementById("feedbackArea"),
  localizacaoCard: document.getElementById("localizacaoCard"),
  nomeLivro: document.getElementById("nomeLivro"),
  instrucoesLivro: document.getElementById("instrucoesLivro"),
  fraseParaAnotar: document.getElementById("fraseParaAnotar"),
  btnProximaPista: document.getElementById("btnProximaPista"),
  palavrasChaveContainer: document.getElementById("palavrasChaveContainer"),
  palavrasColetadasCount: document.getElementById("palavrasColetadasCount"),
  btnReiniciar: document.getElementById("btnReiniciar"),
  btnVoltarInicio: document.getElementById("btnVoltarInicio"),
  somPista: document.getElementById("somPista"),
};

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Inicializando página de pista...");
  carregarEstadoJogo();
  configurarEventListeners();
});

function sortearPerguntasDaTrilha(trilhaNumero) {
  const trilhaCompleta = TRILHAS[trilhaNumero];
  if (!trilhaCompleta) return null;

  // Embaralhar as perguntas da trilha
  const perguntasEmbaralhadas = [...trilhaCompleta].sort(
    () => Math.random() - 0.5
  );

  // Pegar apenas 5 perguntas (ou todas se tiver menos)
  return perguntasEmbaralhadas.slice(0, 5);
}

function carregarEstadoJogo() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const trilha = parseInt(urlParams.get("lista"));
    const pista = parseInt(urlParams.get("pista")) || 0;

    console.log("📊 Parâmetros URL:", { trilha, pista });

    // Verificar se temos parâmetros válidos
    if (!trilha || isNaN(trilha)) {
      throw new Error("Número da trilha não especificado ou inválido");
    }

    estadoAtual.trilhaNumero = trilha;
    estadoAtual.pistaNumero = pista;

    // Carregar palavras-chave do localStorage
    const palavrasSalvas = localStorage.getItem(`birdbox_palavras_${trilha}`);
    if (palavrasSalvas) {
      estadoAtual.palavrasChave = JSON.parse(palavrasSalvas);
    }

    // Carregar perguntas sorteadas do localStorage ou sortear novas
    const perguntasSalvas = localStorage.getItem(`birdbox_perguntas_${trilha}`);
    if (perguntasSalvas) {
      estadoAtual.trilhaPerguntas = JSON.parse(perguntasSalvas);
    } else {
      // Sortear novas perguntas para esta trilha
      estadoAtual.trilhaPerguntas = sortearPerguntasDaTrilha(trilha);
      localStorage.setItem(
        `birdbox_perguntas_${trilha}`,
        JSON.stringify(estadoAtual.trilhaPerguntas)
      );
    }

    console.log(`🎯 Trilha carregada: ${trilha}, Pista: ${pista}`);
    console.log(`📚 Perguntas sorteadas:`, estadoAtual.trilhaPerguntas);

    // Carregar a pista atual
    carregarPistaAtual();
  } catch (error) {
    console.error("❌ Erro ao carregar estado do jogo:", error);
    mostrarErro(`Erro: ${error.message}. Voltando ao início...`);
    setTimeout(() => (window.location.href = "index.html"), 3000);
  }
}

function configurarEventListeners() {
  elementos.btnVerificar.addEventListener("click", verificarResposta);
  elementos.btnProximaPista.addEventListener("click", proximaPista);
  elementos.btnReiniciar.addEventListener("click", reiniciarJogo);
  elementos.btnVoltarInicio.addEventListener("click", voltarInicio);

  elementos.respostaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      verificarResposta();
    }
  });

  // Esconder loading screen quando carregado
  setTimeout(() => {
    elementos.loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      elementos.loadingScreen.style.display = "none";
    }, 500);
  }, 1000);
}

function carregarPistaAtual() {
  try {
    console.log("🔍 Carregando pista atual...");
    console.log("📊 Estado atual:", estadoAtual);

    // Verificar se a pista existe
    if (
      estadoAtual.pistaNumero < 0 ||
      estadoAtual.pistaNumero >= estadoAtual.trilhaPerguntas.length
    ) {
      // Todas as pistas foram completadas
      console.log(
        "🏁 Todas as pistas completadas, redirecionando para final..."
      );
      window.location.href = `final.html?trilha=${estadoAtual.trilhaNumero}`;
      return;
    }

    estadoAtual.pistaAtual =
      estadoAtual.trilhaPerguntas[estadoAtual.pistaNumero];

    if (!estadoAtual.pistaAtual) {
      throw new Error(
        `Pista ${estadoAtual.pistaNumero} não encontrada na trilha`
      );
    }

    console.log("✅ Pista carregada:", estadoAtual.pistaAtual);
    atualizarInterface();
  } catch (error) {
    console.error("❌ Erro ao carregar pista:", error);
    mostrarErro(`Erro ao carregar pista: ${error.message}`);
  }
}

function atualizarInterface() {
  const pista = estadoAtual.pistaAtual;
  const progresso = ((estadoAtual.pistaNumero + 1) / 5) * 100; // 5 perguntas por trilha

  console.log("🔄 Atualizando interface...", pista);

  // Atualizar informações básicas
  elementos.numeroTrilha.textContent = estadoAtual.trilhaNumero
    .toString()
    .padStart(2, "0");
  elementos.pistaAtualNumero.textContent = estadoAtual.pistaNumero + 1;
  elementos.livroReferencia.textContent = pista.livro;
  elementos.progressoAtual.textContent = Math.round(progresso);
  elementos.progressBar.style.width = `${progresso}%`;

  // Atualizar conteúdo da pista com livro e instruções já na pergunta
  elementos.textoPista.textContent = pista.texto;

  // Pergunta exibida junto com livro e instruções (mas sem a localização ainda)
  elementos.perguntaPista.innerHTML = `
    <div class="pergunta-texto mb-2">
      <strong>${pista.pergunta}</strong>
    </div>
    <div class="info-extra text-muted small">
      <i class="fas fa-book me-1"></i> <strong>Livro:</strong> ${
        pista.livro || "-"
      }<br>
      <i class="fas fa-info-circle me-1"></i> <strong>Instruções:</strong> ${
        pista.instrucoes || "-"
      }
    </div>
  `;

  // Atualizar contador de palavras coletadas
  elementos.palavrasColetadasCount.textContent =
    estadoAtual.palavrasChave.length;

  // ⚠️ Esconde o card de localização até o jogador acertar a resposta
  elementos.localizacaoCard.classList.add("d-none");

  // Limpar campos de resposta e feedback
  elementos.respostaInput.value = "";
  elementos.feedbackArea.innerHTML = "";

  // Atualizar palavras coletadas
  atualizarPalavrasColetadas();

  // Focar no input
  elementos.respostaInput.focus();

  console.log("✅ Interface atualizada com sucesso");
}

// Função auxiliar: calcula distância de Levenshtein
function distanciaLevenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

// Função de verificação atualizada
function verificarResposta() {
  try {
    const respostaUsuario = elementos.respostaInput.value
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove acentos

    const pista = estadoAtual.pistaAtual;

    if (!respostaUsuario) {
      mostrarFeedback("⚠️ Por favor, digite uma resposta.", "incorreto");
      return;
    }

    let respostaCorreta = false;
    const tolerancia = 2; // permite até 2 erros de digitação

    for (const palavra of pista.respostaCorreta) {
      const palavraNormalizada = palavra
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const distancia = distanciaLevenshtein(
        respostaUsuario,
        palavraNormalizada
      );

      if (
        distancia <= tolerancia ||
        palavraNormalizada.includes(respostaUsuario)
      ) {
        respostaCorreta = true;
        break;
      }
    }

    if (respostaCorreta) {
      if (!estadoAtual.palavrasChave.includes(pista.fraseParaAnotar)) {
        estadoAtual.palavrasChave.push(pista.fraseParaAnotar);
      }
      salvarProgresso();
      mostrarFeedback(
        "✅ Resposta correta! Você encontrou a frase secreta!",
        "correto"
      );
      mostrarLocalizacao();
      elementos.respostaInput.classList.add("is-valid");
      if (elementos.somPista) elementos.somPista.play().catch(() => {});
    } else {
      mostrarFeedback(
        "❌ Resposta incorreta. Tente novamente ou verifique o livro indicado na biblioteca.",
        "incorreto"
      );
      elementos.respostaInput.classList.add("shake", "is-invalid");
      setTimeout(
        () => elementos.respostaInput.classList.remove("shake", "is-invalid"),
        500
      );
    }
  } catch (error) {
    console.error("❌ Erro ao verificar resposta:", error);
    mostrarFeedback(
      "❌ Erro ao processar resposta. Tente novamente.",
      "incorreto"
    );
  }
}

function mostrarFeedback(mensagem, tipo) {
  const icon =
    tipo === "correto" ? "fa-check-circle" : "fa-exclamation-triangle";
  const className =
    tipo === "correto" ? "feedback-correto" : "feedback-incorreto";

  elementos.feedbackArea.innerHTML = `
    <div class="${className}">
      <i class="fas ${icon} me-2"></i>
      ${mensagem}
    </div>
  `;
}

function mostrarLocalizacao() {
  const pista = estadoAtual.pistaAtual;

  elementos.nomeLivro.textContent = pista.livro;
  elementos.instrucoesLivro.innerHTML = `
    <strong>📍 Localização:</strong> ${pista.localizacao}<br>
    <strong>📖 Instruções:</strong> ${pista.instrucoes}
  `;
  elementos.fraseParaAnotar.textContent = pista.fraseParaAnotar;

  elementos.localizacaoCard.classList.remove("d-none");
  elementos.localizacaoCard.scrollIntoView({ behavior: "smooth" });
}

function proximaPista() {
  estadoAtual.pistaNumero++;

  if (estadoAtual.pistaNumero >= 5) {
    // 5 perguntas por trilha
    // Todas as pistas completadas
    console.log("🏁 Completou todas as pistas, redirecionando...");
    window.location.href = `final.html?trilha=${estadoAtual.trilhaNumero}`;
  } else {
    // Carregar próxima pista
    console.log("➡️ Indo para próxima pista:", estadoAtual.pistaNumero);
    carregarPistaAtual();
  }
}

function atualizarPalavrasColetadas() {
  const container = elementos.palavrasChaveContainer;

  if (estadoAtual.palavrasChave.length === 0) {
    container.innerHTML = `
      <div class="text-muted text-center">
        <i class="fas fa-inbox fa-2x mb-2"></i>
        <p>Nenhuma frase coletada ainda...</p>
      </div>
    `;
    return;
  }

  let html = "";
  estadoAtual.palavrasChave.forEach((frase, index) => {
    html += `
      <div class="palavra-item">
        <div class="palavra-numero">
          <i class="fas fa-scroll me-1"></i>Frase ${index + 1}
        </div>
        <div class="palavra-texto">${frase}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function salvarProgresso() {
  // Salvar no localStorage
  localStorage.setItem(`birdbox_trilha_ativa`, estadoAtual.trilhaNumero);
  localStorage.setItem(`birdbox_pista_atual`, estadoAtual.pistaNumero);
  localStorage.setItem(
    `birdbox_palavras_${estadoAtual.trilhaNumero}`,
    JSON.stringify(estadoAtual.palavrasChave)
  );
  localStorage.setItem("birdbox_jogo_iniciado", "true");

  console.log("💾 Progresso salvo:", {
    trilha: estadoAtual.trilhaNumero,
    pista: estadoAtual.pistaNumero,
    palavras: estadoAtual.palavrasChave,
  });
}

function reiniciarJogo() {
  if (
    !confirm(
      "Tem certeza que deseja reiniciar esta trilha? Todo o progresso será perdido."
    )
  ) {
    return;
  }

  // Limpar dados específicos desta trilha
  localStorage.removeItem(`birdbox_palavras_${estadoAtual.trilhaNumero}`);
  localStorage.removeItem(`birdbox_perguntas_${estadoAtual.trilhaNumero}`);
  localStorage.removeItem("birdbox_trilha_ativa");
  localStorage.removeItem("birdbox_pista_atual");
  localStorage.removeItem("birdbox_jogo_iniciado");

  window.location.href = "index.html";
}

function voltarInicio() {
  window.location.href = "index.html";
}

function mostrarErro(mensagem) {
  elementos.feedbackArea.innerHTML = `
    <div class="feedback-incorreto">
      <i class="fas fa-exclamation-triangle me-2"></i>
      ${mensagem}
    </div>
  `;
}
