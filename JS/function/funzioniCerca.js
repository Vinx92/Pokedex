const TIPI_POKEMON = [
  { nome: "Normale", bg: "bg-stone-400" },
  { nome: "Fuoco", bg: "bg-red-600" },
  { nome: "Lotta", bg: "bg-amber-600" },
  { nome: "Acqua", bg: "bg-sky-500" },
  { nome: "Volante", bg: "bg-blue-600" },
  { nome: "Erba", bg: "bg-green-600" },
  { nome: "Veleno", bg: "bg-violet-600" },
  { nome: "Elettro", bg: "bg-yellow-300" },
  { nome: "Terra", bg: "bg-amber-900" },
  { nome: "Psico", bg: "bg-fuchsia-600" },
  { nome: "Roccia", bg: "bg-stone-500" },
  { nome: "Ghiaccio", bg: "bg-cyan-300" },
  { nome: "Coleottero", bg: "bg-emerald-700" },
  { nome: "Drago", bg: "bg-indigo-600" },
  { nome: "Spettro", bg: "bg-purple-800" },
  { nome: "Buio", bg: "bg-zinc-800 text-red-100" },
  { nome: "Acciaio", bg: "bg-slate-500" },
  { nome: "Folletto", bg: "bg-fuchsia-400" },
];

const GENERAZIONI = [
  {},
];

function generaCercaTipo(contTipo, arryTipi) {
  arryTipi.forEach((tipo) => {
    const DIV = document.createElement("div");
    DIV.id = `cont-tipo-${tipo.nome.toLocaleLowerCase()}`;
    DIV.classList = "flex items-center gap-2";
    const LABEL = document.createElement("label");
    LABEL.setAttribute("for", tipo.nome.toLocaleLowerCase());
    LABEL.textContent = tipo.nome;
    switch (tipo.nome) {
      case "Normale":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Fuoco":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Lotta":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Acqua":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Volante":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Erba":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Veleno":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
      case "Elettro":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg}`;
        break;
      case "Terra":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
      case "Psico":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
      case "Roccia":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg} `;
        break;
      case "Ghiaccio":
        LABEL.classList = ` px-5 py-1 rounded-md ${tipo.bg} `;
        break;
      case "Coleottero":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg} `;
        break;
      case "Drago":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
      case "Spettro":
        LABEL.classList = `px-5 py-1 rounded-md ${tipo.bg} `;
        break;
      case "Buio":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
      case "Acciaio":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
      case "Folletto":
        LABEL.classList = `px-5 py-1 rounded-md  ${tipo.bg}`;
        break;
    }
    const CHECK_BOX = document.createElement("input");
    CHECK_BOX.type = "checkbox";
    CHECK_BOX.name = tipo.nome.toLocaleLowerCase();
    CHECK_BOX.id = tipo.nome.toLocaleLowerCase();
    contTipo.appendChild(DIV);
    DIV.appendChild(LABEL);
    DIV.appendChild(CHECK_BOX);
  });
}

export { TIPI_POKEMON, generaCercaTipo };
