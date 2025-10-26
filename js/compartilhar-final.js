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

  // Detectar se é iOS
  isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  // Detectar se é Android
  isAndroid() {
    return /Android/.test(navigator.userAgent);
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

  // MÉTODOS DE COMPARTILHAMENTO CORRIGIDOS - PARA CRIAR PUBLICAÇÃO DIRETAMENTE
  async shareToInstagram() {
    if (!this.shareImageUrl) {
      await this.generateShareImage();
    }

    if (this.isMobile) {
      // Primeiro baixa a imagem para a galeria
      await this.downloadImageToGallery();

      if (this.isIOS()) {
        // iOS - Instagram Stories com a imagem
        const instagramUrl = `instagram-stories://share?source_application=com.birdbox.game&backgroundImage=${encodeURIComponent(
          this.shareImageUrl
        )}`;
        window.location.href = instagramUrl;

        // Fallback para criar post normal após delay
        setTimeout(() => {
          if (!document.hidden) {
            const fallbackUrl = `instagram://camera`;
            window.location.href = fallbackUrl;
            this.showInstagramInstructions();
          }
        }, 2000);
      } else if (this.isAndroid()) {
        // Android - Instagram com intent de compartilhamento
        const instagramUrl = `intent://com.instagram.share.add-to-stories/#Intent;package=com.instagram.android;scheme=instagram;end;`;
        window.location.href = instagramUrl;

        setTimeout(() => {
          if (!document.hidden) {
            this.shareViaAndroidIntent("com.instagram.android", "Instagram");
          }
        }, 1500);
      }
    } else {
      this.downloadImageWithInstructions("Instagram");
    }
  }

  async shareToTikTok() {
    if (!this.shareImageUrl) {
      await this.generateShareImage();
    }

    if (this.isMobile) {
      // Baixa a imagem primeiro
      await this.downloadImageToGallery();

      if (this.isIOS()) {
        // iOS - TikTok - Abre criação de conteúdo
        const tiktokUrl = `snssdk1233://compose`;
        window.location.href = tiktokUrl;
      } else if (this.isAndroid()) {
        // Android - TikTok - Abre criação
        const tiktokUrl = `intent://compose/#Intent;package=com.zhiliaoapp.musically;scheme=snssdk1233;end;`;
        window.location.href = tiktokUrl;
      }

      // Instruções após tentar abrir o app
      setTimeout(() => {
        this.showTikTokInstructions();
      }, 1500);
    } else {
      this.downloadImageWithInstructions("TikTok");
    }
  }

  async shareToTwitter() {
    const text = encodeURIComponent(this.shareText);

    if (this.isMobile) {
      if (this.isIOS()) {
        // iOS Twitter - Abre composer com o texto
        const twitterUrl = `twitter://post?message=${text}`;
        window.location.href = twitterUrl;
      } else if (this.isAndroid()) {
        // Android Twitter/X - Abre composer
        const twitterUrl = `intent://compose?text=${text}#Intent;package=com.twitter.android;scheme=twitter;end;`;
        window.location.href = twitterUrl;
      }

      // Fallback
      setTimeout(() => {
        if (!document.hidden) {
          const fallbackUrl = `https://twitter.com/intent/tweet?text=${text}`;
          window.open(fallbackUrl, "_blank");
        }
      }, 1000);
    } else {
      const url = `https://twitter.com/intent/tweet?text=${text}`;
      window.open(url, "_blank", "width=600,height=400");
    }
  }

  async shareToFacebook() {
    const text = encodeURIComponent(this.shareText);

    if (this.isMobile) {
      if (this.isIOS()) {
        // iOS Facebook - Abre composer para publicação
        const facebookUrl = `fb://publish/?text=${text}`;
        window.location.href = facebookUrl;
      } else if (this.isAndroid()) {
        // Android Facebook - Abre composer
        const facebookUrl = `intent://post?text=${text}#Intent;package=com.facebook.katana;scheme=fb;end;`;
        window.location.href = facebookUrl;
      }

      // Fallback
      setTimeout(() => {
        if (!document.hidden) {
          const fallbackUrl = `https://www.facebook.com/sharer/sharer.php?quote=${text}`;
          window.open(fallbackUrl, "_blank");
        }
      }, 1000);
    } else {
      const url = `https://www.facebook.com/sharer/sharer.php?quote=${text}`;
      window.open(url, "_blank", "width=600,height=400");
    }
  }

  async shareToWhatsApp() {
    const text = encodeURIComponent(this.shareText);

    if (this.isMobile) {
      if (this.isIOS()) {
        // iOS WhatsApp - Abre chat com texto pré-preenchido
        const whatsappUrl = `whatsapp://send?text=${text}`;
        window.location.href = whatsappUrl;
      } else if (this.isAndroid()) {
        // Android WhatsApp - Abre chat com texto
        const whatsappUrl = `intent://send?text=${text}#Intent;package=com.whatsapp;scheme=whatsapp;end;`;
        window.location.href = whatsappUrl;
      }

      // Fallback
      setTimeout(() => {
        if (!document.hidden) {
          const fallbackUrl = `https://api.whatsapp.com/send?text=${text}`;
          window.open(fallbackUrl, "_blank");
        }
      }, 1000);
    } else {
      const url = `https://api.whatsapp.com/send?text=${text}`;
      window.open(url, "_blank");
    }
  }

  // Compartilhamento nativo (se disponível)
  async shareNative() {
    if (navigator.share) {
      try {
        if (!this.shareImageUrl) {
          await this.generateShareImage();
        }

        // Converter data URL para blob
        const response = await fetch(this.shareImageUrl);
        const blob = await response.blob();
        const file = new File(
          [blob],
          `birdbox-conquista-trilha-${this.trilhaNumero}.png`,
          {
            type: "image/png",
          }
        );

        await navigator.share({
          title: "Bird Box Game - Conquista Completa!",
          text: this.shareText,
          files: [file],
        });

        console.log("✅ Compartilhamento nativo realizado");
      } catch (error) {
        console.log("❌ Compartilhamento nativo cancelado");
        this.downloadImage();
      }
    } else {
      this.downloadImage();
    }
  }

  // Método para baixar imagem para galeria
  async downloadImageToGallery() {
    return new Promise((resolve) => {
      this.downloadImage();
      // Dar tempo para o download completar
      setTimeout(resolve, 1000);
    });
  }

  // Compartilhamento via Intent do Android
  shareViaAndroidIntent(packageName, appName) {
    try {
      // Tenta usar a Web Share API primeiro
      if (navigator.share) {
        this.shareNative();
        return;
      }

      // Fallback para download + instruções
      this.downloadImage();
      setTimeout(() => {
        this.showImageShareInstructions(appName);
      }, 500);
    } catch (error) {
      console.error(`❌ Erro ao compartilhar no ${appName}:`, error);
      this.downloadImage();
      this.showImageShareInstructions(appName);
    }
  }

  // Instruções específicas para Instagram
  showInstagramInstructions() {
    const message = `📸 Para postar no Instagram:\n\n1. A imagem foi salva na sua galeria\n2. Toque no ícone ➕ para criar novo post\n3. Selecione a imagem da galeria\n4. Ajuste o post e adicione:\n   #SemanaDaBibliotecaSENAIUberaba\n   #BirdBoxGame\n   #SENAIUberaba`;

    setTimeout(() => {
      if (
        confirm(
          message +
            "\n\nClique em OK se precisar de ajuda para encontrar a imagem."
        )
      ) {
        this.showExtraHelp("Instagram");
      }
    }, 2000);
  }

  // Instruções específicas para TikTok
  showTikTokInstructions() {
    const message = `🎵 Para postar no TikTok:\n\n1. Abra o TikTok\n2. Toque em "+" para criar\n3. Selecione "Upload"\n4. Escolha a imagem da galeria\n5. Adicione as hashtags:\n   #SemanaDaBibliotecaSENAIUberaba\n   #BirdBoxGame\n   #SENAIUberaba`;

    setTimeout(() => {
      alert(message);
    }, 1500);
  }

  // Instruções para compartilhar imagem
  showImageShareInstructions(appName) {
    const message = `📸 Para compartilhar no ${appName}:\n\n1. A imagem foi salva automaticamente\n2. Abra o ${appName}\n3. Crie um novo post\n4. Selecione a imagem da galeria\n5. Use as hashtags:\n   #SemanaDaBibliotecaSENAIUberaba\n   #BirdBoxGame\n   #SENAIUberaba`;

    setTimeout(() => {
      alert(message);
    }, 500);
  }

  // Ajuda extra para encontrar a imagem
  showExtraHelp(appName) {
    const helpMessage = `🔍 Dica para encontrar a imagem:\n\n1. Abra a Galeria de Fotos\n2. Procure na pasta "Downloads"\n3. O nome do arquivo é: "birdbox-conquista-trilha-${this.trilhaNumero}.png"\n4. Ou procure a imagem mais recente`;

    alert(helpMessage);
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
    } catch (error) {
      console.error("❌ Erro ao baixar imagem:", error);
      this.showError("Erro ao baixar imagem. Tente novamente.");
    }
  }

  // Download com instruções para desktop
  downloadImageWithInstructions(appName) {
    this.downloadImage();
    alert(
      `📸 Para compartilhar no ${appName}:\n\n1. A imagem foi salva no seu dispositivo\n2. Abra o ${appName}\n3. Crie um novo post com a imagem\n4. Use as hashtags: #SemanaDaBibliotecaSENAIUberaba #BirdBoxGame #SENAIUberaba`
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

  window.shareToInstagram = function () {
    finalShareManager.shareToInstagram();
  };

  window.shareToTikTok = function () {
    finalShareManager.shareToTikTok();
  };

  window.shareToTwitter = function () {
    finalShareManager.shareToTwitter();
  };

  window.shareToFacebook = function () {
    finalShareManager.shareToFacebook();
  };

  window.shareToWhatsApp = function () {
    finalShareManager.shareToWhatsApp();
  };

  window.shareNative = function () {
    finalShareManager.shareNative();
  };
}
