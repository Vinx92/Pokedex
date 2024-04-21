const LISTA_POKEMON = document.querySelector(".listaPokemon");
const INPUT_RICERCA = document.getElementById("inputRicerca");
const SUGGERIMENTI_RICERCA = document.getElementById("suggerimentiRicerca");
const NAV = document.getElementById("nav");
const RICERCA = document.getElementById("ricerca");
const FILTRO = document.getElementById("filtro");
const ARROW = document.getElementById("arrow");
const BOX_FILTRI = document.querySelector(".boxFiltri");
const CHECKBOX = document.querySelectorAll('input[type="checkbox"]');
const SPINNER = document.querySelector(".boxSpinner");

let tipiAttivi = 0;
let ricercaTipi = [];

pokedex();

RICERCA.addEventListener("click", function (e) {
  let inputMinuscolo = INPUT_RICERCA.value.toLowerCase();
  e.preventDefault();
  if (INPUT_RICERCA.value !== "") {
    LISTA_POKEMON.innerHTML = "";
    ricercaGrande(inputMinuscolo);
  } else {
    LISTA_POKEMON.innerHTML = "";
    pokedex();
  }
});

async function ricercaGrande(input) {
  try {
    const TUTTI_POKEMON = await tuttiPokemon();

    const POKEMON_TROVATI = TUTTI_POKEMON.results.filter((pokemon) =>
      pokemon.name.includes(input)
    );

    if (POKEMON_TROVATI.length > 0) {
      for (let i = 0; i < POKEMON_TROVATI.length; i++) {
        const INDICE_POKEMON = POKEMON_TROVATI[i];
        const SINGOLO_POKEMON = await singoloPokemon(INDICE_POKEMON.url);

        creazioneCard(SINGOLO_POKEMON);
      }
    } else {
      const CONT_IMG = document.createElement("div");
      CONT_IMG.classList.add("contImg");
      CONT_IMG.style.width = 100 + "%";
      CONT_IMG.style.height = 100 + "%";
      LISTA_POKEMON.appendChild(CONT_IMG);

      const IMG = document.createElement("img");
      IMG.style.width = 25 + "%";
      IMG.src = "asset/Non-trovato.png";
      IMG.alt = "sfera pokè";
      CONT_IMG.appendChild(IMG);
    }
  } catch (error) {}
}

async function pokedex() {
  try {
    const TUTTI_POKEMON = await tuttiPokemon();
    for (let i = 0; i < TUTTI_POKEMON.results.length; i++) {
      const INDICE_POKEMON = TUTTI_POKEMON.results[i];
      const SINGOLO_POKEMON = await singoloPokemon(INDICE_POKEMON.url);

      creazioneCard(SINGOLO_POKEMON);
    }
  } catch (error) {
    console.log(error);
  }
}

async function tuttiPokemon() {
  try {
    const POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON = await POKEMON.json();
    return JSON;
  } catch (error) {
    console.log(error);
  }
}

async function singoloPokemon(pokemon) {
  try {
    const URL_POKEMON = await fetch(pokemon);
    const JSON_URL_POKEMON = await URL_POKEMON.json();
    return JSON_URL_POKEMON;
  } catch (error) {
    console.log(error);
  }
}

function creazioneCard(pokemon) {
  const CARD = document.createElement("div");
  CARD.classList.add("card", "mt-3", "ms-3", "bg-body-tertiary");
  CARD.style.width = 15 + "rem";
  CARD.id = pokemon.id;
  LISTA_POKEMON.appendChild(CARD);

  const IMG_POKEMON = document.createElement("img");
  IMG_POKEMON.classList.add("card-img-top", "sfondo");
  IMG_POKEMON.src = pokemon.sprites.front_default;
  IMG_POKEMON.alt = `immagine di ${pokemon.name}`;
  CARD.appendChild(IMG_POKEMON);

  const CARD_BODY = document.createElement("div");
  CARD_BODY.classList.add("card-body");
  CARD.appendChild(CARD_BODY);

  const NOME_POKEMON = document.createElement("h5");
  NOME_POKEMON.classList.add("card-text", "text-center");
  NOME_POKEMON.textContent = pokemon.name.toUpperCase();
  CARD_BODY.appendChild(NOME_POKEMON);

  const CONTENITORE_TAGS = document.createElement("div");
  CONTENITORE_TAGS.classList.add("d-flex", "justify-content-evenly");
  CARD_BODY.appendChild(CONTENITORE_TAGS);

  pokemon.types.forEach((tipo) => {
    const TAGS = document.createElement("button");
    switch (tipo.type.name) {
      case "fire":
        TAGS.classList.add("tags", "fuoco");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "grass":
        TAGS.classList.add("tags", "erba");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "poison":
        TAGS.classList.add("tags", "veleno");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "ground":
        TAGS.classList.add("tags", "terra");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "flying":
        TAGS.classList.add("tags", "volante");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "water":
        TAGS.classList.add("tags", "acqua");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "bug":
        TAGS.classList.add("tags", "coleottero");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "normal":
        TAGS.classList.add("tags", "normale");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "electric":
        TAGS.classList.add("tags", "elettro");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "fairy":
        TAGS.classList.add("tags", "fata");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "fighting":
        TAGS.classList.add("tags", "lotta");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "psychic":
        TAGS.classList.add("tags", "psico");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "rock":
        TAGS.classList.add("tags", "roccia");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "steel":
        TAGS.classList.add("tags", "metallo");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "ice":
        TAGS.classList.add("tags", "ghiaccio");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "ghost":
        TAGS.classList.add("tags", "fantasma");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
      case "dragon":
        TAGS.classList.add("tags", "drago");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
        break;
    }
  });
}

function trovaIndex(tipo, input) {
  let indice;
  for (let index = 0; index < tipo.length; index++) {
    if (tipo[index] === input) {
      indice = index;
    }
  }
  return indice;
}
