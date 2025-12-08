const data = {
  autopilot: {
    id: 1,
    title: "Autopilot",
    create: "Create your AI extension",
    image: "/assets/images/brain.png",
    cardTitle: "Advanced Negotiation Engine",
    cardText:
      "Never type again - Let AI handle client conversation autometicaly",
    gradient: "Smart Suggestion Engine",
    icon: "assets/icons/star.svg",
    smallTitle: "Predictive property suggestion based on client intent",
    highlight: "Performance",
    bigTitle: "Up to 90%",
    description: "Faster client respones time",
  },
  synergy: {
    id: 2,
    title: "Synergy 75x5",
    create: "Create your AI extension",
    image: "/assets/images/light.png",
    cardTitle: "Real-Time Suggestion Model",
    cardText:
      "Adapts to price, emotion, and context — helping realtors close faster and smarter.",
    gradient: "75 Paths Engine",
    icon: "assets/icons/star.svg",
    smallTitle:
      "Explores 75 negotiation routes, tests outcomes, and picks the one with highest success rate.",
    highlight: "Conversion",
    bigTitle: "Up to 3X",
    description: "Better deal-closing rate",
  },
  ask: {
    id: 3,
    title: "Ask ORACIA",
    create: "Create your AI extension",
    image: "/assets/images/question.png",
    cardTitle: "Remove Any Doubt",
    cardText:
      "Instant answers on listings, prices, or property details — right when you need them.",
    gradient: "Deep Context",
    icon: "assets/icons/star.svg",
    smallTitle:
      "Identifies tone, urgency, and emotion — developing a humanized understanding.",
    highlight: "Privacy First",
    bigTitle: "End-to-End",
    description: "Your workspace, your control",
  },
  crm: {
    id: 4,
    title: "Smart-CRM",
    create: "Create your AI extension",
    image: "/assets/images/smart.png",
    cardTitle: "Smart CRM",
    cardText: "Automatic updating in your sales funnel, lead status and notes",
    gradient: "Automatic Updatest",
    icon: "assets/icons/star.svg",
    smallTitle: "“Conversations — contacts, deals, notes—instantly.“",
    highlight: "Performance",
    bigTitle: "Up to 12 x",
    description: "More agility and precision in data filling",
  },
};

const translation = {
  autopilot: {
    en: {
      video: "/assets/video/autopilot.mp4",
      title: "Autopilot",
      create: "Create your AI extension",
      cardTitle: "Advanced Negotiation Engine",
      cardText:
        "Never type again - Let AI handle client conversation autometicaly",
      gradient: "Smart Suggestion Engine",
      smallTitle: "Predictive property suggestion based on client intent",
      highlight: "Performance",
      bigTitle: "Up to 90%",
      description: "Faster client respones time",
      autopilot: "Autopilot",
    },
    pt: {
      video: "/assets/video/autopilotPort.mp4",
      title: "Como funciona o piloto automático",
      create: "Crie sua extensão IA",
      cardTitle: "Modelo de Negociação Avançada",
      cardText:
        "“Menos digitação mais vendas - Conte com eficiência assistida para desenvolver suas conversas com clientes”",
      gradient: "Sistema de Sugestões Inteligentes",
      smallTitle:
        "“Sugestão preditiva de imóveis com base nas preferências do cliente”",
      highlight: "Performance",
      bigTitle: "Aumento de 90%",
      description: "No tempo de resposta do cliente",
      autopilot: "Como funciona o piloto automático",
    },
  },

  synergy: {
    en: {
      video: "assets/video/synergy.mp4",
      title: "Synergy 75x5",
      create: "Create your AI extension",
      cardTitle: "Real-Time Suggestion Model",
      cardText:
        "Adapts to price, emotion, and context — helping realtors close faster and smarter.",
      gradient: "75 Paths Engine",
      smallTitle:
        "Explores 75 negotiation routes, tests outcomes, and picks the one with highest success rate.",
      highlight: "Conversion",
      bigTitle: "Up to 3X",
      description: "Better deal-closing rate",
    },
    pt: {
      video: "assets/video/synergyPort.mp4",
      title: "Symbiosis Autopilot™",
      create: "Crie sua extensão IA",
      cardTitle: "Modelo de Sugestão em Tempo Real",
      cardText:
        "“Adapta-se ao preço, emoções do cliente e contexto da negociação — para que corretores fechem vendas com mais rapidez e inteligência.”",
      gradient: "Algoritmo de 75 caminhos",
      smallTitle:
        "“Explora 75 estratégias de negociação, testa resultados e seleciona aquela com a maior taxa de sucesso.”",
      highlight: "Conversão",
      bigTitle: "Mais de 3X",
      description: "No fechamento de negócios",
    },
  },

  ask: {
    en: {
      video: "assets/video/ask.mp4",
      title: "Ask ORACIA",
      create: "Create your AI extension",
      cardTitle: "Remove Any Doubt",
      cardText:
        "Instant answers on listings, prices, or property details — right when you need them.",
      gradient: "Deep Context",
      smallTitle:
        "Identifies tone, urgency, and emotion — developing a humanized understanding.",
      highlight: "Privacy First",
      bigTitle: "End-to-End",
      description: "Your workspace, your control",
    },
    pt: {
      video: "assets/video/askPort.mp4",
      title: "Seu Assistente de Negócios IA, Sempre Ativo",
      create: "Crie sua extensão IA",
      cardTitle: "Tire Qualquer Dúvida",
      cardText:
        "“Respostas instantâneas sobre listagens, preços ou detalhes da propriedade — no momento exato que você precisa.”",
      gradient: "Contexto Aprofundado",
      smallTitle:
        "“Identifica tom, urgência, e emoção — desenvolvendo uma compreensão humanizada.”",
      highlight: "Privacidade em 1º lugar",
      bigTitle: "De Ponta a Ponta",
      description: "Seu ambiente de trabalho, seu controle",
    },
  },

  crm: {
    en: {
      video: "assets/video/smart.mp4",
      title: "Smart-CRM",
      create: "Create your AI extension",
      cardTitle: "Smart CRM",
      cardText:
        "Automatic updating in your sales funnel, lead status and notes",
      gradient: "Automatic Updatest",
      smallTitle: "“Conversations — contacts, deals, notes—instantly.“",
      highlight: "Performance",
      bigTitle: "Up to 12x",
      description: "More agility and precision in data filling",
    },
    pt: {
      video: "assets/video/smartPort.mp4",
      title: "CRM Inteligente e Painel de Autocontrução",
      create: "Crie sua extensão IA",
      cardTitle: "Smart CRM",
      cardText:
        "“Atualização automática em seu funil de vendas, status de leads e anotações”",
      gradient: "Atualizações Automáticas",
      smallTitle:
        "“Conversas → contatos, negócios, anotações—instantaneamente..”",
      highlight: "Performance",
      bigTitle: "Até 12x",
      description: "Mais agilidade e precisão no preenchimento de dados",
    },
  },
};

const videoEl = document.getElementById("video");
const loader = document.getElementById("video-loader");
const wrapper = document.getElementById("wrapper");
const playIcon = document.getElementById("playIcon");
const langBtns = document.querySelectorAll("input[name='lang']");

function loadVideoData(id) {
  const lang = localStorage.getItem("language") || "en";
  const base = data[id];
  const langData = translation[id][lang];

  if (!base) return;

  document.getElementById("card-title").textContent = langData.title;
  document.getElementById("create").textContent = langData.create;
  document.getElementById("big-card-title").textContent = langData.cardTitle;
  document.getElementById("big-card-text").textContent = langData.cardText;
  document.getElementById("middle-gradient").textContent = langData.gradient;
  document.getElementById("middle-text").textContent = langData.smallTitle;
  document.getElementById("highlight").textContent = langData.highlight;
  document.getElementById("big-title").textContent = langData.bigTitle;
  document.getElementById("small-desc").textContent = langData.description;
  document.getElementById("main-image").src = base.image;

  videoEl.src = langData.video;
  videoEl.pause();
  videoEl.load();

  document
    .querySelectorAll(".video-card")
    .forEach((card) => card.classList.toggle("active", card.dataset.id === id));

  document.querySelectorAll(".main-icon img").forEach((icon) => {
    icon.style.display = "none";
  });

  const iconMap = {
    autopilot: "brain-icon",
    synergy: "light-icon",
    ask: "question-icon",
    crm: "smart-icon",
  };
  document.getElementById(iconMap[id]).style.display = "block";
}

document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    history.pushState({ video: id }, "", `?video=${id}`);
    loadVideoData(id);
  });
});

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.id === "portuguese" ? "pt" : "en";
    const titleEl = document.getElementById("card-title");
    if (lang === "pt") titleEl.classList.add("pt-small");
    else titleEl.classList.remove("pt-small");

    localStorage.setItem("language", lang);

    const params = new URLSearchParams(window.location.search);
    const currentVideo = params.get("video") || "autopilot";

    loadVideoData(currentVideo);
  });
});

const params = new URLSearchParams(window.location.search);
const videoId = params.get("video") || "autopilot";

loadVideoData(videoId);

videoEl.addEventListener("loadeddata", () => {
  loader.classList.add("hidden");
  wrapper.classList.remove("hidden");
});

playIcon.addEventListener("click", () => {
  playIcon.style.display = "none";
  videoEl.play();
  videoEl.setAttribute("controls", true);
});
