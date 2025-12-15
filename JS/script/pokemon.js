import { pokemonGenerazione } from "../../api/chiamatePokeApi.js";
import { OpenTab, logOut } from "../function/FuncIconaUtente.js";
import { creaCard } from "../function/creaCard.js";
import {
  generaCercaTipo,
  TIPI_POKEMON,
  GENERAZIONI,
  // flagCercaTipi,
  salvaSingoloPokemonLocal,
  creaArrayTipiSelezionati,
} from "../function/funzioniCerca.js";

const BOX_ICONA_PROFILO = document.getElementById("box-icona-profilo");
const CONT_CARD_POKEMON = document.getElementById("cont-card-pokemon");
const CONT_CERCA_TIPO = document.getElementById("cont-cerca-tipo");
let pokemon = await pokemonGenerazione(
  GENERAZIONI[0].inizio,
  GENERAZIONI[0].fine
);
let arrTipiSelezionati = [];
const TAB_GENERAZIONI = document.getElementById("tab-generazioni");
const CONT_LOAD = document.getElementById("cont-load");
const GO_TOP = document.getElementById("go-top");
const PRIMA = document.getElementById("prima");
const SECONDA = document.getElementById("seconda");
const TERZA = document.getElementById("terza");
const CERCA_POKEMON = document.getElementById("cerca-pokemon");

generaCercaTipo(CONT_CERCA_TIPO, TIPI_POKEMON, CONT_LOAD);

creaCard(CONT_CARD_POKEMON, pokemon);

// CONT_CERCA_TIPO.addEventListener("click", (e) => {
//   if (e.target.tagName == "SPAN") {
//     flagCercaTipi(e.target);
//   }
// });

CONT_CERCA_TIPO.addEventListener("click", (e) => {
  console.log(e.target.closest("input").id)
  console.log(arrTipiSelezionati)
  // arrTipiSelezionati = creaArrayTipiSelezionati(e);
  // console.log(arrTipiSelezionati)
  // if (e.target.closest("span").textContent.includes("✓")) {
  //   arrTipiSelezionati.push(e.target.closest("span").id);
  //   console.log(arrTipiSelezionati);
  // } else {
  //   let nuovaArrTipiSel = [];
  //   arrTipiSelezionati.forEach((tipo) => {
  //     if (tipo != e.target.closest("span").id) {
  //       nuovaArrTipiSel.push(tipo);
  //     }
  //   });
  //   arrTipiSelezionati = nuovaArrTipiSel;
  //   console.log(arrTipiSelezionati);
  // }
});

CONT_CARD_POKEMON.addEventListener("click", (e) => {
  salvaSingoloPokemonLocal(pokemon, e);
});

TAB_GENERAZIONI.addEventListener("click", async (e) => {
  CONT_LOAD.classList.add("nascosto-caricamento");
  CONT_LOAD.classList.remove("hidden");
  switch (e.target.id) {
    case "prima":
      pokemon = await pokemonGenerazione(
        GENERAZIONI[0].inizio,
        GENERAZIONI[0].fine
      );
      PRIMA.classList.toggle("border-red-100");
      PRIMA.classList.toggle("border-red-300");
      PRIMA.classList.toggle("bg-red-500");
      SECONDA.classList.remove("border-red-100");
      SECONDA.classList.add("border-red-300");
      SECONDA.classList.remove("bg-red-500");
      TERZA.classList.remove("border-red-100");
      TERZA.classList.add("border-red-300");
      TERZA.classList.remove("bg-red-500");
      break;
    case "seconda":
      pokemon = await pokemonGenerazione(
        GENERAZIONI[1].inizio,
        GENERAZIONI[1].fine
      );
      PRIMA.classList.remove("border-red-100");
      PRIMA.classList.add("border-red-300");
      PRIMA.classList.remove("bg-red-500");
      SECONDA.classList.toggle("border-red-100");
      SECONDA.classList.toggle("border-red-300");
      SECONDA.classList.toggle("bg-red-500");
      TERZA.classList.remove("border-red-100");
      TERZA.classList.add("border-red-300");
      TERZA.classList.remove("bg-red-500");
      break;

    case "terza":
      pokemon = await pokemonGenerazione(
        GENERAZIONI[2].inizio,
        GENERAZIONI[2].fine
      );
      PRIMA.classList.remove("border-red-100");
      PRIMA.classList.add("border-red-300");
      PRIMA.classList.remove("bg-red-500");
      SECONDA.classList.remove("border-red-100");
      SECONDA.classList.add("border-red-300");
      SECONDA.classList.remove("bg-red-500");
      TERZA.classList.toggle("border-red-100");
      TERZA.classList.toggle("border-red-300");
      TERZA.classList.toggle("bg-red-500");
      break;
  }
  CONT_CARD_POKEMON.innerHTML = "";
  CONT_CARD_POKEMON.scrollTop;
  creaCard(CONT_CARD_POKEMON, pokemon);
  CONT_LOAD.classList.remove("nascosto-caricamento");
  CONT_LOAD.classList.add("hidden");
});

CONT_CARD_POKEMON.addEventListener("scroll", (e) => {
  if (CONT_CARD_POKEMON.scrollTop >= 600) {
    GO_TOP.classList.remove("hidden");
  } else {
    GO_TOP.classList.add("hidden");
  }
});

GO_TOP.addEventListener("click", () => {
  CONT_CARD_POKEMON.scrollTop = 0 + "px";
});

CERCA_POKEMON.addEventListener("input", (e) => {
  CONT_LOAD.classList.add("nascosto-caricamento");
  CONT_LOAD.classList.remove("hidden");
  CONT_CARD_POKEMON.innerHTML = "";
  let arrayPokemonCercati = pokemon.filter((singPoke) =>
    singPoke.name.includes(e.target.value)
  );
  creaCard(CONT_CARD_POKEMON, arrayPokemonCercati);
  CONT_LOAD.classList.remove("nascosto-caricamento");
  CONT_LOAD.classList.add("hidden");
});

BOX_ICONA_PROFILO.addEventListener("click", OpenTab);
