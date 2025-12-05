import { pokemonGenerazione } from "../../api/chiamatePokeApi.js";
import { OpenTab, logOut } from "../function/FuncIconaUtente.js";
import { creaCard } from "../function/creaCard.js";
import {
  generaCercaTipo,
  TIPI_POKEMON,
  GENERAZIONI,
  flagCercaTipi,
} from "../function/funzioniCerca.js";

const BOX_ICONA_PROFILO = document.getElementById("box-icona-profilo");
const CONT_CARD_POKEMON = document.getElementById("cont-card-pokemon");
const CONT_CERCA_TIPO = document.getElementById("cont-cerca-tipo");
let pokemon = await pokemonGenerazione(
  GENERAZIONI[0].inizio,
  GENERAZIONI[0].fine
);
const TAB_GENERAZIONI = document.getElementById("tab-generazioni");
const CONT_LOAD = document.getElementById("cont-load");
const GO_TOP = document.getElementById("go-top");

generaCercaTipo(CONT_CERCA_TIPO, TIPI_POKEMON, CONT_LOAD);

creaCard(CONT_CARD_POKEMON, pokemon);

CONT_CERCA_TIPO.addEventListener("click", (e) => {
  if (e.target.tagName == "LABEL") {
    flagCercaTipi(e.target);
  }
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
      break;
    case "seconda":
      pokemon = await pokemonGenerazione(
        GENERAZIONI[1].inizio,
        GENERAZIONI[1].fine
      );
      break;

    default:
      pokemon = await pokemonGenerazione(
        GENERAZIONI[2].inizio,
        GENERAZIONI[2].fine
      );
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
  CONT_CARD_POKEMON.scrollTop;
});

console.log(pokemon);

BOX_ICONA_PROFILO.addEventListener("click", OpenTab);
