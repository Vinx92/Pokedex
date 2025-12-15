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
    contTipo.appendChild(DIV);
    const LABEL = document.createElement("label");
    LABEL.setAttribute("for", tipo.nome.toLocaleLowerCase());
    LABEL.textContent = tipo.nome;
    stileEtichettaTipo(tipo, LABEL);
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

function stileEtichettaTipo(tipo, elementoHtml) {
  switch (tipo.nome) {
    case "Normal":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Fire":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Fighting":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Water":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Flying":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Grass":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Poison":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Electric":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Ground":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Psychic":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Rock":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center `;
      break;
    case "Ice":
      elementoHtml.classList = ` px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center `;
      break;
    case "Bug":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center `;
      break;
    case "Dragon":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Ghost":
      elementoHtml.classList = `px-5 py-1 rounded-md ${tipo.bg} cursor-pointer w-full text-center `;
      break;
    case "Dark":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Steel":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
    case "Fairy":
      elementoHtml.classList = `px-5 py-1 rounded-md  ${tipo.bg} cursor-pointer w-full text-center`;
      break;
  }
}

// function flagCercaTipi(inputLabel) {
//   TIPI_POKEMON.forEach((tipo) => {
//     if (
//       inputLabel.id.toLocaleUpperCase().includes(tipo.nome.toLocaleUpperCase())
//     ) {
//       if (inputLabel.textContent == `${tipo.nome} ✓`) {
//         inputLabel.textContent = `${tipo.nome} `;
//       } else {
//         inputLabel.textContent = `${tipo.nome} ✓`;
//       }
//     }
//   });
// }

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

function creaArrayTipiSelezionati(event) {
  let arrayDaRiempire = []
  if (event.target.closest("span").textContent.includes("✓")) {
    arrayDaRiempire.push(event.target.closest("span").id);
    // console.log(arrayDaRiempire);
  } else {
    let nuovaArrTipiSel = [];
    arrayDaRiempire.forEach((tipo) => {
      if (tipo != event.target.closest("span").id) {
        nuovaArrTipiSel.push(tipo);
      }
    });
    return arrayDaRiempire
    // console.log(arrayDaRiempire);
  }
  return arrayDaRiempire
}

export {
  TIPI_POKEMON,
  GENERAZIONI,
  generaCercaTipo,
  stileEtichettaTipo,
  // flagCercaTipi,
  attivaTabGenerazioni,
  salvaSingoloPokemonLocal,
  creaArrayTipiSelezionati,
};
