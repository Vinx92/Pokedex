import { creazioneCard, tuttiPoke, smistamentoTipo } from "./funzioni.js";
const LISTA_POKEMON = document.querySelector(".listaPokemon");
const INPUT_RICERCA = document.getElementById("inputRicerca");
const SUGGERIMENTI_RICERCA = document.getElementById("suggerimentiRicerca");

tuttiPoke(LISTA_POKEMON);

INPUT_RICERCA.addEventListener("input", function () {
  if (INPUT_RICERCA.value !== "") {
    let inputRicercaMinuscolo = INPUT_RICERCA.value.toLowerCase();
    SUGGERIMENTI_RICERCA.innerHTML = "";
    ricercaPoke(inputRicercaMinuscolo, SUGGERIMENTI_RICERCA);
    console.log("pieno");
  } else {
    SUGGERIMENTI_RICERCA.classList.add("hidden");
    SUGGERIMENTI_RICERCA.innerHTML = "";
    console.log("vuoto");
  }
});

async function ricercaPoke(input, ricerca) {
  try {
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();

    for (let i = 0; i < JSON_TUTTI_POKEMON.results.length; i++) {
      if (JSON_TUTTI_POKEMON.results[i].name.includes(input)) {
        const POKEMON = JSON_TUTTI_POKEMON.results[i];
        const URL_POKEMON = await fetch(POKEMON.url);
        const JSON_URL_POKEMON = await URL_POKEMON.json();

        ricerca.classList.remove("hidden");

        const BOX_POKEMON = document.createElement("div");
        BOX_POKEMON.classList.add(
          "d-flex",
          "align-items-center",
          "justify-content-evenly",
          "border-bottom",
          "border-secondary-subtle",
          "border-2"
        );
        ricerca.appendChild(BOX_POKEMON);

        const IMG_POKEMON = document.createElement("img");
        IMG_POKEMON.src = JSON_URL_POKEMON.sprites.front_default;
        IMG_POKEMON.alt = `immagine di ${JSON_URL_POKEMON.name}`;
        BOX_POKEMON.appendChild(IMG_POKEMON);

        const NOME_POKEMON = document.createElement("span");
        NOME_POKEMON.textContent = JSON_URL_POKEMON.name;
        NOME_POKEMON.classList.add("fs-5", "fw-medium");
        BOX_POKEMON.appendChild(NOME_POKEMON);
      }
      //   else if (
      //     INPUT_RICERCA.value !=
      //     JSON_TUTTI_POKEMON.results[i].name.includes(input)
      //   ) {
      //     const BOX_POKEMON = document.createElement("div");
      //     BOX_POKEMON.classList.add("d-flex", "align-items-center");
      //     ricerca.appendChild(BOX_POKEMON);

      //     const NON_TROVATO = document.createElement("span");
      //     NON_TROVATO.textContent = `${INPUT_RICERCA.value} non è stato trovato`;
      //     BOX_POKEMON.appendChild(NON_TROVATO);
      //   }
    }
  } catch (error) {
    alert(error);
  }
}
