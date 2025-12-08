document.querySelectorAll(".video-card").forEach((card) => {
  card.addEventListener("click", () => {
    window.location = card.dataset.page;
  });
});

const translations = {
  en: {
    title: " in one of the videos to get more details",
    gradient: "Click",
    create: "Create your AI extension",
    autopilot: "Autopilot",
    synergy: "Synergy 75x5",
    ask: "Ask ORACIA",
    crm: "Smart-CRM",
  },
  pt: {
    title: " em um dos vídeos para obter mais detalhes",
    gradient: "Clique",
    create: "Crie seu corretor de IA",
    autopilot: "Como funciona o piloto automático",
    synergy: "Symbiosis Autopilot™",
    ask: "Seu Assistente de Negócios IA, Sempre Ativo",
    crm: "CRM Inteligente e Painel de Autocontrução",
  },
};

function changeLang(lang) {
  document.querySelectorAll("[data-key]").forEach((element) => {
    element.textContent = translations[lang][element.dataset.key];
  });

  document.getElementById("qr-img").src =
    lang === "pt" ? "assets/images/QrCode.png" : "assets/images/qr.png";
  const title = document.querySelector(".title-phrase");
  if (lang === "pt") {
    title.classList.add("pt-small");
  } else {
    title.classList.remove("pt-small");
  }
}
document
  .getElementById("english")
  .addEventListener("change", () => changeLang("en"));
document
  .getElementById("portuguese")
  .addEventListener("change", () => changeLang("pt"));
changeLang("en");
