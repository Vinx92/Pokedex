import { pokemonGenerazione } from "../../api/chiamatePokeApi.js";
import { OpenTab, logOut } from "../function/FuncIconaUtente.js";
import { creaCard } from "../function/creaCard.js";
import {
  generaCercaTipo,
  TIPI_POKEMON,
  GENERAZIONI,
} from "../function/funzioniCerca.js";

const BOX_ICONA_PROFILO = document.getElementById("box-icona-profilo");
const CONT_CARD_POKEMON = document.getElementById("cont-card-pokemon");
const CONT_CERCA_TIPO = document.getElementById("cont-cerca-tipo");
let pokemon = await pokemonGenerazione(
  GENERAZIONI[0].inizio,
  GENERAZIONI[0].fine
);
const TAB_GENERAZIONI = document.getElementById("tab-generazioni");

TAB_GENERAZIONI.addEventListener("click", async (e) => {
  CONT_CARD_POKEMON.innerHTML = "";
  pokemon = await pokemonGenerazione(
    GENERAZIONI[1].inizio,
    GENERAZIONI[1].fine
  );
  creaCard(CONT_CARD_POKEMON, pokemon);
});

BOX_ICONA_PROFILO.addEventListener("click", OpenTab);

generaCercaTipo(CONT_CERCA_TIPO, TIPI_POKEMON);

creaCard(CONT_CARD_POKEMON, pokemon);