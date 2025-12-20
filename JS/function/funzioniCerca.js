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
  { nome: "Dark", bg: "bg-zinc-800", text: "text-red-100" },
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
    contTipo.appendChild(DIV);
    const LABEL = document.createElement("label");
    LABEL.setAttribute("for", tipo.nome.toLocaleLowerCase());
    LABEL.textContent = tipo.nome;
    LABEL.classList = `px-5 py-1 rounded-md cursor-pointer w-full text-center font-bold`;
    DIV.appendChild(LABEL);
    const CHECK_BOX = document.createElement("input");
    CHECK_BOX.type = "checkbox";
    CHECK_BOX.name = tipo.nome.toLocaleLowerCase();
    CHECK_BOX.id = tipo.nome.toLocaleLowerCase();
    CHECK_BOX.classList.add("hidden");
    DIV.appendChild(CHECK_BOX);
  });
  imgLoading.classList.remove("nascosto-caricamento");
  imgLoading.classList.add("hidden");
}

function stileEtichettaTipoDinamica(tipoEsterno, elementoHtml) {
  TIPI_POKEMON.forEach((tipo) => {
    if (tipoEsterno === tipo.nome)
      switch (tipoEsterno) {
        case "Normal":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Fire":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Fighting":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Water":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Flying":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Grass":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Poison":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Electric":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Ground":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Psychic":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Rock":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Ice":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Bug":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Dragon":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Ghost":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Dark":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          elementoHtml.classList.toggle(`${tipo.text}`);
          break;
        case "Steel":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
        case "Fairy":
          elementoHtml.classList.toggle(`${tipo.bg}`);
          break;
      }
  });
}

function stileEtichettaTipoStatica(tipoEsterno, elementoHtml) {
  TIPI_POKEMON.forEach((tipo) => {
    let letteraMaiuscola = tipoEsterno[0].toLocaleUpperCase();
    let stringaSenzaIniziale = tipoEsterno.slice(1, tipoEsterno.length);
    let parolaPerSwitch = letteraMaiuscola + stringaSenzaIniziale;
    if (tipoEsterno.toLocaleLowerCase() === tipo.nome.toLocaleLowerCase())
      switch (parolaPerSwitch) {
        case "Normal":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Fire":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Fighting":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Water":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Flying":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Grass":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Poison":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Electric":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Ground":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Psychic":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Rock":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Ice":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Bug":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Dragon":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Ghost":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Dark":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} ${tipo.text}flex gap-1`;
          break;
        case "Steel":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
        case "Fairy":
          elementoHtml.classList = `px-5 py-1 rounded-md text-center ${tipo.bg} flex gap-1`;
          break;
      }
  });
}

async function attivaTabGenerazioni(
  pokemonGenerazione,
  evento,
  tabPrimaGen,
  tabSecondaGen,
  tabTerzaGen,
  arrPokemon
) {
  switch (evento.target.id) {
    case "prima":
      tabPrimaGen.classList.toggle("border-red-100");
      tabPrimaGen.classList.toggle("border-red-300");
      tabPrimaGen.classList.toggle("bg-red-500");
      tabSecondaGen.classList.remove("border-red-100");
      tabSecondaGen.classList.add("border-red-300");
      tabSecondaGen.classList.remove("bg-red-500");
      tabTerzaGen.classList.remove("border-red-100");
      tabTerzaGen.classList.add("border-red-300");
      tabTerzaGen.classList.remove("bg-red-500");
      arrPokemon = await pokemonGenerazione(
        GENERAZIONI[0].inizio,
        GENERAZIONI[0].fine
      );
      break;
    case "seconda":
      tabPrimaGen.classList.remove("border-red-100");
      tabPrimaGen.classList.add("border-red-300");
      tabPrimaGen.classList.remove("bg-red-500");
      tabSecondaGen.classList.toggle("border-red-100");
      tabSecondaGen.classList.toggle("border-red-300");
      tabSecondaGen.classList.toggle("bg-red-500");
      tabTerzaGen.classList.remove("border-red-100");
      tabTerzaGen.classList.add("border-red-300");
      tabTerzaGen.classList.remove("bg-red-500");
      arrPokemon = await pokemonGenerazione(
        GENERAZIONI[1].inizio,
        GENERAZIONI[1].fine
      );
      break;

    case "terza":
      tabPrimaGen.classList.remove("border-red-100");
      tabPrimaGen.classList.add("border-red-300");
      tabPrimaGen.classList.remove("bg-red-500");
      tabSecondaGen.classList.remove("border-red-100");
      tabSecondaGen.classList.add("border-red-300");
      tabSecondaGen.classList.remove("bg-red-500");
      tabTerzaGen.classList.toggle("border-red-100");
      tabTerzaGen.classList.toggle("border-red-300");
      tabTerzaGen.classList.toggle("bg-red-500");
      arrPokemon = await pokemonGenerazione(
        GENERAZIONI[2].inizio,
        GENERAZIONI[2].fine
      );
      break;
  }
  return arrPokemon;
}

function salvaSingoloPokemonLocal(pokemon, event) {
  pokemon.forEach((singPok) => {
    if (singPok.id == event.target.closest("div").id) {
      localStorage.setItem("pokemonCliccato", JSON.stringify(singPok));
    }
  });
}

export {
  TIPI_POKEMON,
  GENERAZIONI,
  generaCercaTipo,
  stileEtichettaTipoDinamica,
  stileEtichettaTipoStatica,
  attivaTabGenerazioni,
  salvaSingoloPokemonLocal,
};
