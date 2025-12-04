const TIPI_POKEMON = [
  { nome: "Normal", bg: "bg-stone-400" },
  { nome: "Fire", bg: "bg-red-600" },
  { nome: "Fighting", bg: "bg-amber-600" },
  { nome: "Water", bg: "bg-sky-500" },
  { nome: "Flying", bg: "bg-blue-600" },
  { nome: "Grass", bg: "bg-green-600" },
  { nome: "Poison", bg: "bg-violet-600" },
  { nome: "Electric", bg: "bg-yellow-300" },
  { nome: "Ground", bg: "bg-amber-900" },
  { nome: "Psychic", bg: "bg-fuchsia-600" },
  { nome: "Rock", bg: "bg-stone-500" },
  { nome: "Ice", bg: "bg-cyan-300" },
  { nome: "Bug", bg: "bg-emerald-700" },
  { nome: "Dragon", bg: "bg-indigo-600" },
  { nome: "Ghost", bg: "bg-purple-800" },
  { nome: "Dark", bg: "bg-zinc-800 text-red-100" },
  { nome: "Steel", bg: "bg-slate-500" },
  { nome: "Fairy", bg: "bg-fuchsia-400" },
];

const GENERAZIONI = [
  { nome: "prima", inizio: 0, fine: 151 },
  { nome: "seconda", inizio: 151, fine: 100 },
  { nome: "terza", inizio: 251, fine: 135 },
];

function generaCercaTipo(contTipo, arryTipi, imgLoading) {
  arryTipi.forEach((tipo) => {
    const DIV = document.createElement("div");
    DIV.id = `cont-tipo-${tipo.nome.toLocaleLowerCase()}`;
    DIV.classList = "flex items-center gap-2";
    const LABEL = document.createElement("label");
    LABEL.setAttribute("for", tipo.nome.toLocaleLowerCase());
    LABEL.textContent = tipo.nome;
    stileEtichettaTipo(tipo, LABEL);
    const CHECK_BOX = document.createElement("input");
    CHECK_BOX.type = "checkbox";
    CHECK_BOX.name = tipo.nome.toLocaleLowerCase();
    CHECK_BOX.id = tipo.nome.toLocaleLowerCase();
    contTipo.appendChild(DIV);
    DIV.appendChild(LABEL);
    DIV.appendChild(CHECK_BOX);
  });
  imgLoading.classList.remove("nascosto-caricamento")
  imgLoading.classList.add("hidden")
}

function stileEtichettaTipo(tipo, elementoHtml) {
  switch (tipo.nome) {
    case "Normal":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Fire":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Fighting":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Water":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Flying":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Grass":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Poison":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
    case "Electric":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
      break;
    case "Ground":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
    case "Psychic":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
    case "Rock":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} `;
      break;
    case "Ice":
      elementoHtml.classList = ` px-5 py-1 rounded-md ${tipo.bg} `;
      break;
    case "Bug":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} `;
      break;
    case "Dragon":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
    case "Ghost":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} `;
      break;
    case "Dark":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
    case "Steel":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
    case "Fairy":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
      break;
  }
}

export { TIPI_POKEMON, GENERAZIONI, generaCercaTipo, stileEtichettaTipo };
