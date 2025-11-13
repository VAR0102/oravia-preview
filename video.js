

const data = {
  autopilot: {
    id: 1,
    title: "Autopilot",
    image: "/assets/images/brain.png",
    mainicon:"/assets/icons/brainIcon.svg",
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
    image: "/assets/images/light.png",
    mainicon:"/assets/icons/lightIcon.svg",
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
    image: "/assets/images/question.png",
    mainicon:"/assets/icons/questionIcon.svg",
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
    image: "/assets/images/smart.png",
    mainicon:"/assets/icons/smartIcon.svg",
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
document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    if (id) window.location = `video.html?video=${id}`;
  });
});
function populateVideo(id) {
  const change = data[id];
  document.getElementById("card-title").textContent = change.title;
  document.getElementById("main-image").src = change.image;
  document.getElementById("big-card-title").textContent = change.cardTitle;
  document.getElementById("big-card-text").textContent = change.cardText;
  document.getElementById("middle-gradient").textContent = change.gradient;
  document.getElementById("middle-icon").src = change.icon;
  document.getElementById("middle-text").textContent = change.smallTitle;
  document.getElementById("highlight").textContent = change.highlight;
  document.getElementById("big-title").textContent = change.bigTitle;
  document.getElementById("small-desc").textContent = change.description;
}

const params = new URLSearchParams(window.location.search);
const videoId = params.get("video");
populateVideo(videoId);

const cards = document.querySelectorAll(".video-card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

document.querySelectorAll(".main-icon img").forEach(icon => icon.style.display = "none");

const iconMap = {
  autopilot: "brain-icon",
  synergy: "light-icon",
  ask: "question-icon",
  crm: "smart-icon"
};

const videoIds = new URLSearchParams(window.location.search).get("video");
console.log("Current video ID:", videoIds);

const iconId = iconMap[videoIds];
if (iconId) document.getElementById(iconId).style.display = "block";

  
  


// const translation = {
//     autopilot: {
//     en: {
//       title: "Autopilot",
//       cardTitle: "Advanced Negotiation Engine",
//       cardText:
//         "Never type again - Let AI handle client conversation autometicaly",
//       gradient: "Smart Suggestion Engine",
//       smallTitle: "Predictive property suggestion based on client intent",
//       highlight: "Performance",
//       bigTitle: "Up to 90%",
//       description: "Faster client respones time",
//       autopilot: "Autopilot",
//       synergy: "Synergy 75x5",
//       ask: "Ask ORACIA",
//       crm: "Smart-CRM",
//     },

//     pt: {
//       title: "Como funciona o piloto automático",
//       cardTitle: "Modelo de Negociação Avançada",
//       cardText:
//         "“Menos digitação mais vendas - Conte com eficiência assistida para desenvolver suas conversas com clientes”",
//       gradient: "Sistema de Sugestões Inteligentes",
//       smallTitle:
//         "“Sugestão preditiva de imóveis com base nas preferências do cliente”",
//       highlight: "Performance",
//       bigTitle: "Aumento de 90%",
//       description: "No tempo de resposta do cliente",
//       autopilot: "Como funciona o piloto automático",
//       synergy: "Symbiosis Autopilot™",
//       ask: "Seu Assistente de Negócios IA, Sempre Ativo",
//       crm: "CRM Inteligente e Painel de Autocontrução",
//     },
//   },
//   synergy: {
//     en: {
//       title: "Synergy 75x5",
//       cardTitle: "Real-Time Suggestion Model",
//       cardText:
//         "Adapts to price, emotion, and context — helping realtors close faster and smarter.",
//       gradient: "75 Paths Engine",
//       icon: "assets/icons/star.svg",
//       smallTitle:
//         "Explores 75 negotiation routes, tests outcomes, and picks the one with highest success rate.",
//       highlight: "Conversion",
//       bigTitle: "Up to 3X",
//       description: "Better deal-closing rate",
//       autopilot: "Autopilot",
//       synergy: "Synergy 75x5",
//       ask: "Ask ORACIA",
//       crm: "Smart-CRM",
//     },

//     pt: {
//       title: "Symbiosis Autopilot™",
//       cardTitle: "Modelo de Sugestãoem Tempo Real",
//       cardText:
//         "“Adapta-se ao preço, emoções do cliente e contexto da negociação — para que corretores fechem vendas com mais rapidez e inteligência.”",
//       gradient: "Algoritmo de 75 caminhos",
//       smallTitle:
//         "“Explora 75  estratégias de negociação, testa resultados e seleciona aquela com a maior taxa de sucesso.”",
//       highlight: "Conversão",
//       bigTitle: "Mais de 3X",
//       description: "No fechamento de negócios",
//       autopilot: "Como funciona o piloto automático",
//       synergy: "Symbiosis Autopilot™",
//       ask: "Seu Assistente de Negócios IA, Sempre Ativo",
//       crm: "CRM Inteligente e Painel de Autocontrução",
//     },
//   },
//   ask: {
//     en: {
//       title: "Ask ORACIA",
//       cardTitle: "Remove Any Doubt",
//       cardText:
//         "Instant answers on listings, prices, or property details — right when you need them.",
//       gradient: "Deep Context",
//       smallTitle:
//         "Identifies tone, urgency, and emotion — developing a humanized understanding.",
//       highlight: "Privacy First",
//       bigTitle: "End-to-End",
//       description: "Your workspace, your control",
//       autopilot: "Autopilot",
//       synergy: "Synergy 75x5",
//       ask: "Ask ORACIA",
//       crm: "Smart-CRM",
//     },

//     pt: {
//       title: "Seu Assistente de Negócios IA, Sempre Ativo",
//       cardTitle: "Tire Qualquer Dúvida",
//       cardText:
//         "“Respostas instantâneas sobre listagens, preços ou detalhes da propriedade — no momento exato que você precisa.”",
//       gradient: "Contexto Aprofundado",
//       smallTitle:
//         "“Identifica tom, urgência, e emoção — desenvolvendo uma compreensão humanizada.”",
//       highlight: "Privacidade em 1º lugar",
//       bigTitle: "De Ponta a Ponta",
//       description: "Seu ambiente de trabalho, seu controle",
//       autopilot: "Como funciona o piloto automático",
//       synergy: "Symbiosis Autopilot™",
//       ask: "Seu Assistente de Negócios IA, Sempre Ativo",
//       crm: "CRM Inteligente e Painel de Autocontrução",
//     },
//   },
//   crm: {
//     en: {
//       title: "Smart-CRM",
//       cardTitle: "Smart CRM",
//       cardText:
//         "Automatic updating in your sales funnel, lead status and notes",
//       gradient: "Automatic Updatest",
//       smallTitle: "“Conversations — contacts, deals, notes—instantly.“",
//       highlight: "Performance",
//       bigTitle: "Up to 12x",
//       description: "More agility and precision in data filling",
//       autopilot: "Autopilot",
//       synergy: "Synergy 75x5",
//       ask: "Ask ORACIA",
//       crm: "Smart-CRM",
//     },

//     pt: {
//       title: "CRM Inteligente e Painel de Autocontrução",
//       cardTitle: "Smart CRM",
//       cardText:
//         "“Atualização automática em seu funil de vendas, status de leads e anotações”",
//       gradient: "Atualizações Automáticas",
//       smallTitle:
//         "“Conversas → contatos, negócios, anotações—instantaneamente..”",
//       highlight: "Performance",
//       bigTitle: "Até 12x",
//       description: "Mais agilidade e precisão no  preenchimento de dados",
//       autopilot: "Como funciona o piloto automático",
//       synergy: "Symbiosis Autopilot™",
//       ask: "Seu Assistente de Negócios IA, Sempre Ativo",
//       crm: "CRM Inteligente e Painel de Autocontrução",
//     },
//   },
// }

