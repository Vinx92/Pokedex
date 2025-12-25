import { evoluzioniPokemon } from "../../api/chiamatePokeApi.js";
import { stileEtichettaTipoStatica } from "../function/funzioniCerca.js"

let pokemonLocalStorage = JSON.parse(localStorage.getItem("pokemonCliccato"));
const CONT_INFO_POKE = document.getElementById("cont-inf-poke");
const NOME_POKEMON = document.getElementById("nome-pokemon");
const POS_POKEMON = document.getElementById("pos-pokemon");
console.log(pokemonLocalStorage);

let nomePokemon = pokemonLocalStorage.name;
let letteraMaiuscola = pokemonLocalStorage.name[0].toLocaleUpperCase();
let nomeConMaiuscola = nomePokemon.replace(
  pokemonLocalStorage.name[0],
  letteraMaiuscola
);
NOME_POKEMON.textContent = nomeConMaiuscola;
POS_POKEMON.textContent = `#${pokemonLocalStorage.id}`;
const BOX_POKEMON = document.createElement("div");
BOX_POKEMON.classList =
  "w-full-h-full bg-red-500 rounded-md border-2 border-red-100 mt-3 p-3";
CONT_INFO_POKE.appendChild(BOX_POKEMON);
const CONT_IMG_TIPI = document.createElement("div");
BOX_POKEMON.appendChild(CONT_IMG_TIPI);
const BOX_IMG_POKEMON = document.createElement("div");
BOX_IMG_POKEMON.classList =
  "bg-red-300 rounded-md border-2 border-red-100";
CONT_IMG_TIPI.appendChild(BOX_IMG_POKEMON);
const IMG_POKEMON = document.createElement("img");
IMG_POKEMON.src = pokemonLocalStorage.sprites.front_default;
BOX_IMG_POKEMON.appendChild(IMG_POKEMON);
const BOX_TIPI = document.createElement("div");
CONT_IMG_TIPI.appendChild(BOX_TIPI);
pokemonLocalStorage.types.forEach((tipo) => {
  const SPAN = document.createElement("span");
  SPAN.textContent = tipo.type.name;
  stileEtichettaTipoStatica(tipo.type.name, SPAN);
  BOX_TIPI.appendChild(SPAN);
});
const VERSO_POKEMON = document.createElement("audio");
VERSO_POKEMON.src = pokemonLocalStorage.cries.legacy;
BOX_POKEMON.appendChild(VERSO_POKEMON);
const CONTROLLO_PER_VERSO_POKEMON = document.createElement("img");
CONTROLLO_PER_VERSO_POKEMON.src = "../asset/play-musica.png";
CONTROLLO_PER_VERSO_POKEMON.classList = "cursor-pointer";
BOX_POKEMON.appendChild(CONTROLLO_PER_VERSO_POKEMON);
evoluzioniPokemon(pokemonLocalStorage.species.url, BOX_POKEMON)

CONTROLLO_PER_VERSO_POKEMON.addEventListener("click",()=>{
  VERSO_POKEMON.play()
})