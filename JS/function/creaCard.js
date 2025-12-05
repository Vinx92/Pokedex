import { TIPI_POKEMON, stileEtichettaTipo } from "./funzioniCerca.js";

export function creaCard(contcard, arrayPokemon) {
  arrayPokemon.forEach((pokemon) => {
    const DIV = document.createElement("div");
    const IMG = document.createElement("img");
    const H4 = document.createElement("h4");
    const CONT_TIPI = document.createElement("div");
    DIV.id = pokemon.id;
    DIV.classList =
      "flex flex-col items-center hover:bg-red-500 rounded-md p-3 w-full cursor-pointer";
    IMG.classList = "w-full h-full";
    IMG.src = pokemon.sprites.front_default;
    H4.textContent = pokemon.name.toLocaleUpperCase();
    H4.classList = "font-semibold";
    contcard.appendChild(DIV);
    DIV.appendChild(IMG);
    DIV.appendChild(H4);
    pokemon.types.forEach((tipo) => {
      const SPAN = document.createElement("span");
      CONT_TIPI.classList = "flex gap-1";
      SPAN.textContent = tipo.type.name.toLocaleUpperCase();
      etichettaTipo(TIPI_POKEMON, tipo.type.name, SPAN);
      CONT_TIPI.appendChild(SPAN);
    });
    DIV.appendChild(CONT_TIPI);
  });
}

function etichettaTipo(arryTipi, tipoPokemon, elementoHtml) {
  arryTipi.forEach((tipo) => {
    if (tipo.nome.toLocaleLowerCase() == tipoPokemon) {
      stileEtichettaTipo(tipo, elementoHtml);
    }
  });
}
