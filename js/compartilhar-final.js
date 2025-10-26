// compartilhar-final.js - Sistema de Compartilhamento para Página Final

class FinalShareManager {
  constructor() {
    this.shareImageUrl = null;
    this.shareText = "";
    this.isMobile = this.detectMobile();
    this.trilhaNumero = null;
    this.frasesColetadas = [];
    this.init();
  }

  init() {
    console.log("🚀 Sistema de compartilhamento final inicializado");
    this.configurarEventListeners();
  }

  // Detectar se é dispositivo móvel
  detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Configurar event listeners
  configurarEventListeners() {
    const btnCompartilhar = document.getElementById("btnCompartilharConquista");
    if (btnCompartilhar) {
      btnCompartilhar.addEventListener("click", () => {
        this.openShareModal();
      });
    }
  }

  // Abrir modal de compartilhamento
  async openShareModal() {
    try {
      // Obter dados da trilha atual
      this.trilhaNumero =
        parseInt(document.getElementById("trilhaNumeroFinal")?.textContent) ||
        1;

      // Obter frases coletadas
      this.frasesColetadas = this.getFrasesColetadas();

      // Gerar texto para compartilhamento
      this.shareText = this.generateShareText();

      // Gerar imagem para compartilhamento
      await this.generateShareImage();

      // Mostrar modal
      this.showModal();
    } catch (error) {
      console.error("❌ Erro ao abrir modal de compartilhamento:", error);
      this.showError("Erro ao preparar compartilhamento");
    }
  }

  // Obter frases coletadas da página
  getFrasesColetadas() {
    const frases = [];
    const fraseItems = document.querySelectorAll(".frase-item");

    fraseItems.forEach((item) => {
      const numero = item.querySelector(".frase-numero")?.textContent;
      const texto = item.querySelector(".frase-texto")?.textContent;
      if (numero && texto) {
        frases.push({ numero, texto: texto.trim() });
      }
    });

    return frases;
  }

  // Gerar texto para compartilhamento
  generateShareText() {
    const frasesTexto = this.frasesColetadas.map((f) => f.texto).join(" ");

    return `🏆 CONQUISTA BIRD BOX COMPLETA!

Acabei de completar a Trilha ${this.trilhaNumero} do Bird Box Caça ao Tesouro!

📚 Minha sequência vencedora:
"${frasesTexto}"

🎮 Desafio superado na Biblioteca SENAI Uberaba
⏰ Durante a Semana da Biblioteca

#SemanaDaBibliotecaSENAIUberaba #BirdBoxGame #SENAIUberaba #CaçaAoTesouro`;
  }

  // Gerar imagem para compartilhamento
  async generateShareImage() {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      canvas.width = 1080;
      canvas.height = 1080;
      const ctx = canvas.getContext("2d");

      // Fundo gradiente moderno
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#0a0a1a");
      gradient.addColorStop(0.5, "#1a1a3a");
      gradient.addColorStop(1, "#0a0a1a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Adicionar padrão de fundo sutil
      this.drawBackgroundPattern(ctx, canvas.width, canvas.height);

      // Logo SENAI Uberaba
      this.drawSenaiLogo(ctx, canvas.width);

      // Título principal
      ctx.fillStyle = "#4361ee";
      ctx.font = 'bold 60px "Arial", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("CONQUISTA COMPLETA!", canvas.width / 2, 180);

      // Informações da trilha
      ctx.fillStyle = "#ffc107";
      ctx.font = 'bold 48px "Arial", sans-serif';
      ctx.fillText(
        `TRILHA ${this.trilhaNumero} FINALIZADA`,
        canvas.width / 2,
        250
      );

      // Card da conquista
      this.drawConquestCard(ctx, canvas.width);

      // Frases coletadas
      this.drawFrasesColetadas(ctx, canvas.width);

      // Hashtags
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.font = 'bold 24px "Arial", sans-serif';
      ctx.fillText(
        "#SemanaDaBibliotecaSENAIUberaba",
        canvas.width / 2,
        canvas.height - 40
      );

      // Converter para URL de dados
      this.shareImageUrl = canvas.toDataURL("image/png");

      // Atualizar preview no modal
      this.updatePreview(canvas);

      resolve(this.shareImageUrl);
    });
  }

  // Desenhar padrão de fundo
  drawBackgroundPattern(ctx, width, height) {
    ctx.fillStyle = "rgba(67, 97, 238, 0.05)";
    for (let i = 0; i < 25; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 2 + 1;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Desenhar logo SENAI
  drawSenaiLogo(ctx, width) {
    ctx.fillStyle = "#ffffff";
    ctx.font = 'bold 36px "Arial", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("SENAI UBERABA", width / 2, 80);

    // Linha decorativa
    ctx.strokeStyle = "#4361ee";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 100, 100);
    ctx.lineTo(width / 2 + 100, 100);
    ctx.stroke();
  }

  // Desenhar card da conquista
  drawConquestCard(ctx, width) {
    const centerX = width / 2;
    const cardY = 320;
    const cardWidth = 800;
    const cardHeight = 200;

    // Fundo do card
    ctx.fillStyle = "rgba(67, 97, 238, 0.2)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 3;

    // Card com bordas arredondadas
    this.drawRoundedRect(
      ctx,
      centerX - cardWidth / 2,
      cardY,
      cardWidth,
      cardHeight,
      20
    );
    ctx.fill();
    ctx.stroke();

    // Ícone de troféu
    ctx.fillStyle = "#ffc107";
    ctx.font = '48px "Arial"';
    ctx.fillText("🏆", centerX - 350, cardY + 60);

    // Texto da conquista
    ctx.fillStyle = "#ffffff";
    ctx.font = 'bold 32px "Arial", sans-serif';
    ctx.fillText("Bird Box Caça ao Tesouro", centerX, cardY + 70);

    ctx.fillStyle = "#a0e0ff";
    ctx.font = '28px "Arial", sans-serif';
    ctx.fillText("Missão Cumprida!", centerX, cardY + 110);
  }

  // Desenhar frases coletadas
  drawFrasesColetadas(ctx, width) {
    const centerX = width / 2;
    const startY = 560;

    ctx.fillStyle = "#25d366";
    ctx.font = 'bold 28px "Arial", sans-serif';
    ctx.fillText("Sequência Vencedora:", centerX, startY);

    // Desenhar frases (máximo 3 para caber na imagem)
    const frasesParaMostrar = this.frasesColetadas.slice(0, 3);

    frasesParaMostrar.forEach((frase, index) => {
      const y = startY + 50 + index * 40;

      ctx.fillStyle = "#ffc107";
      ctx.font = 'bold 24px "Arial", sans-serif';
      ctx.fillText(`${frase.numero}.`, centerX - 300, y);

      ctx.fillStyle = "#ffffff";
      ctx.font = '22px "Arial", sans-serif';
      ctx.fillText(this.truncateText(frase.texto, 25), centerX - 250, y);
    });

    // Mostrar indicador se há mais frases
    if (this.frasesColetadas.length > 3) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = '20px "Arial", sans-serif';
      ctx.fillText(
        `+${this.frasesColetadas.length - 3} frases...`,
        centerX,
        startY + 170
      );
    }
  }

  // Truncar texto muito longo
  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + "...";
  }

  // Desenhar retângulo com bordas arredondadas
  drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  // Atualizar preview no modal
  updatePreview(canvas) {
    const preview = document.getElementById("sharePreview");
    if (preview) {
      preview.innerHTML = "";
      const img = document.createElement("img");
      img.src = this.shareImageUrl;
      img.alt = "Preview compartilhamento conquista";
      img.style.width = "100%";
      img.style.borderRadius = "10px";
      img.style.maxWidth = "300px";
      img.style.margin = "0 auto";
      img.style.display = "block";
      preview.appendChild(img);
    }
  }

  // Mostrar modal
  showModal() {
    const modal = document.getElementById("shareModal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }

  // Fechar modal
  closeModal() {
    const modal = document.getElementById("shareModal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  // MÉTODOS DE COMPARTILHAMENTO (iguais ao anterior)
  async shareToInstagram() {
    if (!this.shareImageUrl) {
      await this.generateShareImage();
    }

    if (this.isMobile) {
      const instagramUrl = `instagram://library?assetPath=${encodeURIComponent(
        this.shareImageUrl
      )}`;
      const fallbackUrl = `https://www.instagram.com/create/story/`;

      this.openAppOrFallback(instagramUrl, fallbackUrl, "Instagram");
    } else {
      this.downloadImageWithInstructions("Instagram");
    }
  }

  async shareToTikTok() {
    if (!this.shareImageUrl) {
      await this.generateShareImage();
    }

    if (this.isMobile) {
      const tiktokUrl = `tiktok://`;
      const fallbackUrl = `https://www.tiktok.com/upload?`;

      this.openAppOrFallback(tiktokUrl, fallbackUrl, "TikTok");

      setTimeout(() => {
        this.showTikTokInstructions();
      }, 1000);
    } else {
      this.downloadImageWithInstructions("TikTok");
    }
  }

  async shareToTwitter() {
    const text = encodeURIComponent(this.shareText);

    if (this.isMobile) {
      const twitterUrl = `twitter://post?message=${text}`;
      const fallbackUrl = `https://twitter.com/intent/tweet?text=${text}`;

      this.openAppOrFallback(twitterUrl, fallbackUrl, "Twitter");
    } else {
      const url = `https://twitter.com/intent/tweet?text=${text}`;
      window.open(url, "_blank", "width=600,height=400");
    }
  }

  async shareToFacebook() {
    const text = encodeURIComponent(this.shareText);

    if (this.isMobile) {
      const facebookUrl = `fb://publish/?text=${text}`;
      const fallbackUrl = `https://www.facebook.com/sharer/sharer.php?quote=${text}`;

      this.openAppOrFallback(facebookUrl, fallbackUrl, "Facebook");
    } else {
      const url = `https://www.facebook.com/sharer/sharer.php?quote=${text}`;
      window.open(url, "_blank", "width=600,height=400");
    }
  }

  async shareToWhatsApp() {
    const text = encodeURIComponent(this.shareText);

    if (this.isMobile) {
      const whatsappUrl = `whatsapp://send?text=${text}`;
      const fallbackUrl = `https://api.whatsapp.com/send?text=${text}`;

      this.openAppOrFallback(whatsappUrl, fallbackUrl, "WhatsApp");
    } else {
      const url = `https://api.whatsapp.com/send?text=${text}`;
      window.open(url, "_blank");
    }
  }

  // Download da imagem
  downloadImage() {
    if (!this.shareImageUrl) {
      this.showError("❌ Erro ao gerar imagem para download");
      return;
    }

    try {
      const link = document.createElement("a");
      link.download = `birdbox-conquista-trilha-${this.trilhaNumero}.png`;
      link.href = this.shareImageUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("📥 Imagem da conquista salva automaticamente");

      if (this.isMobile) {
        setTimeout(() => {
          this.showMobileDownloadInstructions();
        }, 500);
      }
    } catch (error) {
      console.error("❌ Erro ao baixar imagem:", error);
      this.showError("Erro ao baixar imagem. Tente novamente.");
    }
  }

  // Método para abrir app ou fallback
  openAppOrFallback(appUrl, fallbackUrl, appName) {
    window.location.href = appUrl;

    setTimeout(() => {
      if (!document.hidden) {
        console.log(`📱 ${appName} não encontrado, abrindo fallback`);
        window.open(fallbackUrl, "_blank");

        if (appName === "Instagram" || appName === "TikTok") {
          this.showImageShareInstructions(appName);
        }
      }
    }, 500);
  }

  // Instruções para compartilhar imagem
  showImageShareInstructions(appName) {
    setTimeout(() => {
      const message = `📸 Para compartilhar no ${appName}:\n\n1. A imagem foi salva automaticamente\n2. Abra o ${appName}\n3. Crie um novo post\n4. Selecione a imagem da galeria\n5. Use as hashtags:\n   #SemanaDaBibliotecaSENAIUberaba\n   #BirdBoxGame`;

      if (
        confirm(
          message +
            "\n\nClique em OK para abrir a galeria e selecionar a imagem."
        )
      ) {
        this.downloadImage();
      }
    }, 1000);
  }

  // Instruções específicas para TikTok
  showTikTokInstructions() {
    const message = `🎵 Para compartilhar no TikTok:\n\n1. Abra o TikTok\n2. Toque em "+" para criar\n3. Selecione "Upload"\n4. Escolha a imagem da galeria\n5. Use as hashtags:\n   #SemanaDaBibliotecaSENAIUberaba\n   #BirdBoxGame\n   #SENAIUberaba`;

    alert(message);
    this.downloadImage();
  }

  // Instruções para download em mobile
  showMobileDownloadInstructions() {
    const message = `📱 Imagem salva na galeria!\n\nAgora você pode:\n\n1. Abrir Instagram/TikTok\n2. Criar novo post\n3. Selecionar esta imagem\n4. Usar as hashtags:\n   #SemanaDaBibliotecaSENAIUberaba\n   #BirdBoxGame`;

    alert(message);
  }

  // Download com instruções para desktop
  downloadImageWithInstructions(appName) {
    this.downloadImage();
    alert(
      `📸 Para compartilhar no ${appName}:\n\n1. A imagem foi salva no seu dispositivo\n2. Abra o ${appName}\n3. Faça um post com a imagem\n4. Use as hashtags: #SemanaDaBibliotecaSENAIUberaba #BirdBoxGame`
    );
  }

  // Mostrar erro
  showError(message) {
    alert(message);
  }
}

// Inicializar gerenciador de compartilhamento final
const finalShareManager = new FinalShareManager();

// Adicionar funções globais
if (typeof window !== "undefined") {
  window.finalShareManager = finalShareManager;
  window.downloadShareImage = function () {
    finalShareManager.downloadImage();
  };
}
