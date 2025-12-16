import { TIPI_POKEMON, stileEtichettaTipoStatica } from "./funzioniCerca.js";

export function creaCard(contcard, arrayPokemon) {
  arrayPokemon.forEach((pokemon) => {
    const DIV = document.createElement("div");
    const IMG = document.createElement("img");
    const H4 = document.createElement("h4");
    const H3 = document.createElement("h3");
    const CONT_TIPI = document.createElement("div");
    DIV.id = pokemon.id;
    H3.textContent = `#${pokemon.id}`;
    H3.classList = "absolute top-[15px] left-[20px] font-black text-gray-300";
    DIV.classList =
      "flex flex-col items-center hover:bg-red-500 rounded-md p-3 w-full cursor-pointer relative duration-[0.3s]";
    DIV.title = `${pokemon.name.toLocaleLowerCase()}`;
    IMG.classList = "w-full h-full";
    IMG.alt = `Immagine Pokemon: ${pokemon.name.toLocaleUpperCase()}`;
    IMG.src = pokemon.sprites.front_default;
    H4.textContent = pokemon.name.toLocaleUpperCase();
    H4.classList = "font-semibold";
    contcard.appendChild(DIV);
    DIV.appendChild(H3);
    DIV.appendChild(IMG);
    DIV.appendChild(H4);
    pokemon.types.forEach((tipo) => {
      const SPAN = document.createElement("span");
      CONT_TIPI.classList = "flex gap-1";
      SPAN.textContent = tipo.type.name.toLocaleUpperCase();
      SPAN.title = tipo.type.name.toLocaleLowerCase();
      etichettaTipo(tipo.type.name, SPAN);
      CONT_TIPI.appendChild(SPAN);
    });
    DIV.appendChild(CONT_TIPI);
  });
}

function etichettaTipo(tipo, elementoHtml) {
      stileEtichettaTipoStatica(tipo, elementoHtml);
}
