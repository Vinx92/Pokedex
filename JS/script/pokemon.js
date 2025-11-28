import { OpenTab, logOut } from "../function/FuncIconaUtente.js";
import { creaCard } from "../function/creaCard.js";
import { generaCercaTipo, TIPI_POKEMON } from "../function/funzioniCerca.js";

const BOX_ICONA_PROFILO = document.getElementById("box-icona-profilo");
const SPARA_POKEMON = document.getElementById("cont-card-pokemon");
const CONT_CERCA_TIPO = document.getElementById("cont-cerca-tipo");
BOX_ICONA_PROFILO.addEventListener("click", OpenTab);

generaCercaTipo(CONT_CERCA_TIPO, TIPI_POKEMON);

fetch("https://pokeapi.co/api/v2/pokemon?limit=904&offset=809")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    creaCard(SPARA_POKEMON, data.results);
  })
  .catch((error) => console.error(error));
