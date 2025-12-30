import { evoluzioniPokemon } from "../../api/chiamatePokeApi.js";
import { stileEtichettaTipoStatica } from "../function/funzioniCerca.js";

let pokemonLocalStorage = JSON.parse(localStorage.getItem("pokemonCliccato"));
const CONT_INFO_POKE = document.getElementById("cont-inf-poke");
const NOME_POKEMON = document.getElementById("nome-pokemon");
const POS_POKEMON = document.getElementById("pos-pokemon");
const IMG_POKEMON = document.getElementById("img-pokemon");
const CONT_TIPI = document.getElementById("cont-tipi");
const VERSO_POKEMON = document.getElementById("verso-pokemon");
const PLAY_VERSO = document.getElementById("play-verso");
const CONT_STATISTICHE = document.getElementById("cont-statistiche");
const CONT_VERSIONI_PRESENTI_POKEMON = document.getElementById(
  "cont-versioni-presenti-pokemon"
);
const IMG_PRIMA_EV = document.getElementById("img-prima-ev");
const IMG_SECONDA_EV = document.getElementById("img-seconda-ev");
const IMG_TERZA_EV = document.getElementById("img-terza-ev");
const TESTO_SCONDA_EV = document.getElementById("testo-seconda-ev");
const TESTO_TERZA_EV = document.getElementById("testo-terza-ev");
console.log(pokemonLocalStorage);

let nomePokemon = pokemonLocalStorage.name;
let letteraMaiuscola = pokemonLocalStorage.name[0].toLocaleUpperCase();
let nomeConMaiuscola = nomePokemon.replace(
  pokemonLocalStorage.name[0],
  letteraMaiuscola
);
NOME_POKEMON.textContent = nomeConMaiuscola;
POS_POKEMON.textContent = `#${pokemonLocalStorage.id}`;
IMG_POKEMON.src = pokemonLocalStorage.sprites.front_default;
pokemonLocalStorage.types.forEach((tipo) => {
  const SPAN = document.createElement("span");
  SPAN.textContent = tipo.type.name.toLocaleUpperCase();
  stileEtichettaTipoStatica(tipo.type.name, SPAN);
  SPAN.classList.add("font-semibold");
  CONT_TIPI.appendChild(SPAN);
});
VERSO_POKEMON.src = pokemonLocalStorage.cries.legacy;
pokemonLocalStorage.stats.forEach((stat) => {
  let div = document.createElement("div");
  div.classList = "flex justify-between gap-2";
  let statistica = document.createElement("span");
  statistica.classList = "rounded-md bg-red-300 px-3 py-1 font-semibold";
  let numero = document.createElement("span");
  numero.classList = "rounded-md bg-red-300 px-3 py-1";
  CONT_STATISTICHE.appendChild(div);
  statistica.textContent = `${stat.stat.name.toLocaleUpperCase()} :`;
  div.appendChild(statistica);
  numero.textContent = stat.base_stat;
  div.appendChild(numero);
});
pokemonLocalStorage.game_indices.forEach((gioco) => {
  let li = document.createElement("li");
  if (gioco.version.name.includes("-")) {
    let nomeGioco = gioco.version.name.replaceAll("-", " ");
    let letteraMaiuscola = gioco.version.name[0].toLocaleUpperCase();
    let nomeConMaiuscola = nomeGioco.replace(
      gioco.version.name[0],
      letteraMaiuscola
    );
    li.textContent = nomeConMaiuscola;
    CONT_VERSIONI_PRESENTI_POKEMON.appendChild(li);
  } else {
    let nomeGioco = gioco.version.name;
    let letteraMaiuscola = gioco.version.name[0].toLocaleUpperCase();
    let nomeConMaiuscola = nomeGioco.replace(
      gioco.version.name[0],
      letteraMaiuscola
    );
    li.textContent = nomeConMaiuscola;
    CONT_VERSIONI_PRESENTI_POKEMON.appendChild(li);
  }
});
evoluzioniPokemon(
  pokemonLocalStorage.species.url,
  IMG_PRIMA_EV,
  IMG_SECONDA_EV,
  IMG_TERZA_EV,
  TESTO_SCONDA_EV,
  TESTO_TERZA_EV
);

PLAY_VERSO.addEventListener("click", () => {
  VERSO_POKEMON.play();
});
