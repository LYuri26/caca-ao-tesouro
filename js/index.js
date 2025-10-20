// Sistema Inicial - Bird Box Caça ao Tesouro
console.log("🎮 Inicializando Bird Box Caça ao Tesouro...");

// Estado do jogo
let estadoJogo = {
  listaAtiva: null,
  pistaAtual: 0,
  palavrasChave: [],
  jogoIniciado: false,
};

// Elementos DOM
const elementos = {
  loadingScreen: document.getElementById("loadingScreen"),
  btnIniciar: document.getElementById("btnIniciar"),
  jogoExistente: document.getElementById("jogoExistente"),
  btnContinuar: document.getElementById("btnContinuar"),
  btnNovoJogo: document.getElementById("btnNovoJogo"),
  trilhaAtual: document.getElementById("trilhaAtual"),
  pistaAtual: document.getElementById("pistaAtual"),
  ambienteAudio: document.getElementById("ambienteAudio"),
  clickSound: document.getElementById("clickSound"),
};

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  console.log("📚 Trilhas disponíveis:", Object.keys(TRILHAS || {}));

  inicializarSistema();
  configurarEventListeners();
  verificarJogoExistente();
});

function inicializarSistema() {
  // Simular carregamento
  setTimeout(() => {
    elementos.loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      elementos.loadingScreen.style.display = "none";
    }, 500);
  }, 1500);
}

function configurarEventListeners() {
  // Botão de iniciar jogo
  elementos.btnIniciar.addEventListener("click", function () {
    playClickSound();
    sortearTrilhaAutomatica();
  });

  // Botões do jogo existente
  elementos.btnContinuar.addEventListener("click", function () {
    playClickSound();
    continuarJogoExistente();
  });

  elementos.btnNovoJogo.addEventListener("click", function () {
    playClickSound();
    reiniciarJogo();
  });

  // Teclado - Enter para iniciar
  document.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !estadoJogo.jogoIniciado) {
      playClickSound();
      sortearTrilhaAutomatica();
    }
  });

  // Smooth scroll para navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Intersection Observer para animações
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  document.querySelectorAll(".feature-card, .rule-item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

function sortearTrilhaAutomatica() {
  // Efeito visual no botão
  elementos.btnIniciar.classList.add("loading");
  elementos.btnIniciar.disabled = true;

  // Simular processo de sorteio com animação
  let count = 0;
  const sorteioInterval = setInterval(() => {
    count++;
    if (count <= 3) {
      elementos.btnIniciar.querySelector(
        ".btn-loading"
      ).innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Sorteando${".".repeat(
        count
      )}`;
    } else {
      clearInterval(sorteioInterval);
      realizarSorteio();
    }
  }, 500);
}

function realizarSorteio() {
  // Sortear apenas entre as trilhas existentes (1-5)
  const trilhasExistentes = [1, 2, 3, 4, 5].filter(
    (num) => TRILHAS[num] && TRILHAS[num].length >= 5 // ← CORRIGIDO
  );

  if (trilhasExistentes.length === 0) {
    console.error("❌ Nenhuma trilha disponível");
    mostrarAlerta("Erro: Nenhuma trilha disponível no momento.", "danger");
    resetarBotaoIniciar();
    return;
  }

  const trilhaSorteada =
    trilhasExistentes[Math.floor(Math.random() * trilhasExistentes.length)];

  // Animação de confirmação
  elementos.btnIniciar.querySelector(
    ".btn-loading"
  ).innerHTML = `<i class="fas fa-check me-2"></i>Trilha ${trilhaSorteada} Sorteada!`;

  setTimeout(() => {
    estadoJogo.listaAtiva = trilhaSorteada;
    estadoJogo.pistaAtual = 0;
    estadoJogo.palavrasChave = [];
    estadoJogo.jogoIniciado = true;

    // Salvar no localStorage
    salvarEstadoJogo();

    console.log(`🎲 Trilha sorteada: ${estadoJogo.listaAtiva}`);

    // Redirecionar para a primeira pista
    redirecionarParaPista();
  }, 1000);
}

function resetarBotaoIniciar() {
  elementos.btnIniciar.classList.remove("loading");
  elementos.btnIniciar.disabled = false;
}

function salvarEstadoJogo() {
  localStorage.setItem("birdbox_trilha_ativa", estadoJogo.listaAtiva);
  localStorage.setItem("birdbox_pista_atual", estadoJogo.pistaAtual);
  localStorage.setItem(
    `birdbox_palavras_${estadoJogo.listaAtiva}`,
    JSON.stringify(estadoJogo.palavrasChave)
  );
  localStorage.setItem("birdbox_jogo_iniciado", "true");
}

function redirecionarParaPista() {
  // Efeito de transição
  document.body.style.opacity = "0.8";
  elementos.btnIniciar.innerHTML =
    '<i class="fas fa-spinner fa-spin me-2"></i>Redirecionando...';

  setTimeout(() => {
    window.location.href = `pista.html?lista=${estadoJogo.listaAtiva}&pista=${estadoJogo.pistaAtual}`;
  }, 1000);
}

function verificarJogoExistente() {
  const jogoSalvo = localStorage.getItem("birdbox_jogo_iniciado");

  if (jogoSalvo) {
    const listaAtiva = localStorage.getItem("birdbox_trilha_ativa");
    const pistaAtual = localStorage.getItem("birdbox_pista_atual");
    const palavrasSalvas = localStorage.getItem(
      `birdbox_palavras_${listaAtiva}`
    );

    if (listaAtiva && pistaAtual) {
      const palavras = palavrasSalvas ? JSON.parse(palavrasSalvas) : [];
      mostrarJogoExistente(
        parseInt(listaAtiva),
        parseInt(pistaAtual),
        palavras.length
      );
    }
  }
}

function mostrarJogoExistente(listaAtiva, pistaAtual, palavrasColetadas) {
  elementos.jogoExistente.classList.remove("d-none");
  elementos.trilhaAtual.textContent = listaAtiva;
  elementos.pistaAtual.textContent = pistaAtual + 1;

  // Atualizar estado do jogo
  estadoJogo.listaAtiva = listaAtiva;
  estadoJogo.pistaAtual = pistaAtual;
  estadoJogo.jogoIniciado = true;
}

function continuarJogoExistente() {
  if (!estadoJogo.listaAtiva) return;

  // Carregar palavras-chave salvas
  const palavrasSalvas = localStorage.getItem(
    `birdbox_palavras_${estadoJogo.listaAtiva}`
  );
  estadoJogo.palavrasChave = palavrasSalvas ? JSON.parse(palavrasSalvas) : [];

  // Efeito visual
  elementos.btnContinuar.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2"></span>Continuando...';

  setTimeout(() => {
    redirecionarParaPista();
  }, 800);
}

function reiniciarJogo() {
  if (
    !confirm(
      "Tem certeza que deseja iniciar uma nova trilha? Todo o progresso atual será perdido."
    )
  ) {
    return;
  }

  // Limpar todos os dados salvos
  for (let i = 1; i <= 5; i++) {
    localStorage.removeItem(`birdbox_palavras_${i}`);
  }
  localStorage.removeItem("birdbox_trilha_ativa");
  localStorage.removeItem("birdbox_pista_atual");
  localStorage.removeItem("birdbox_jogo_iniciado");

  // Resetar estado
  estadoJogo.listaAtiva = null;
  estadoJogo.pistaAtual = 0;
  estadoJogo.palavrasChave = [];
  estadoJogo.jogoIniciado = false;

  // Ocultar jogo existente
  elementos.jogoExistente.classList.add("d-none");

  // Mostrar feedback
  mostrarAlerta(
    'Nova trilha disponível! Clique em "Iniciar Nova Aventura".',
    "success"
  );
}

function mostrarAlerta(mensagem, tipo = "info") {
  // Criar alerta temporário
  const alerta = document.createElement("div");
  alerta.className = `alert alert-${
    tipo === "danger" ? "danger" : tipo === "success" ? "success" : "info"
  } alert-dismissible fade show position-fixed`;
  alerta.style.cssText =
    "top: 20px; right: 20px; z-index: 9999; min-width: 300px;";
  alerta.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="fas fa-${
              tipo === "danger"
                ? "exclamation-triangle"
                : tipo === "success"
                ? "check-circle"
                : "info-circle"
            } me-2"></i>
            <div>${mensagem}</div>
            <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="alert"></button>
        </div>
    `;

  document.body.appendChild(alerta);

  // Auto-remover após 5 segundos
  setTimeout(() => {
    if (alerta.parentNode) {
      alerta.remove();
    }
  }, 5000);
}

function playClickSound() {
  if (elementos.clickSound) {
    elementos.clickSound.currentTime = 0;
    elementos.clickSound
      .play()
      .catch((e) => console.log("Áudio não disponível"));
  }
}

// Utilitários
function formatarNumeroTrilha(numero) {
  return numero.toString().padStart(2, "0");
}

// Inicializar áudio ambiente (opcional)
function inicializarAudio() {
  if (elementos.ambienteAudio) {
    elementos.ambienteAudio.volume = 0.3;
    elementos.ambienteAudio.play().catch((e) => {
      console.log("Áudio de ambiente não pode ser reproduzido automaticamente");
    });
  }
}

// Iniciar áudio quando o usuário interagir com a página
document.addEventListener(
  "click",
  function () {
    inicializarAudio();
  },
  { once: true }
);

console.log("✅ Sistema Bird Box inicializado com sucesso!");
