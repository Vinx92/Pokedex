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

tuttiPoke();

for (let i = 0; i < CHECKBOX.length; i++) {
  CHECKBOX[i].addEventListener("change", function (e) {
    if (e.target.checked && tipiAttivi == 0) {
      tipiAttivi += 1;
      ricercaTipi.push(CHECKBOX[i].name);
      LISTA_POKEMON.innerHTML = "";
      filtroTipo(CHECKBOX[i].name);
    } else if (e.target.checked && tipiAttivi > 0) {
      tipiAttivi += 1;
      ricercaTipi.push(CHECKBOX[i].name);
      filtroTipo(CHECKBOX[i].name);
    } else {
      ricercaTipi.splice(trovaIndex(ricercaTipi, CHECKBOX[i].name), 1);
      tipiAttivi -= 1;
      LISTA_POKEMON.innerHTML = "";
      for (let y = 0; y < ricercaTipi.length; y++) {
        filtroTipo(ricercaTipi[y]);
      }
      if (tipiAttivi == 0) {
        LISTA_POKEMON.innerHTML = "";
        tuttiPoke();
      }
    }
  });
}

NAV.addEventListener("click", function () {
  SUGGERIMENTI_RICERCA.classList.add("hidden");
});

INPUT_RICERCA.addEventListener("input", function () {
  let inputMinuscolo = INPUT_RICERCA.value.toLowerCase();
  if (INPUT_RICERCA.value != "") {
    SUGGERIMENTI_RICERCA.innerHTML = "";
    SUGGERIMENTI_RICERCA.classList.remove("hidden");
    ricercaPoke(inputMinuscolo);
  } else {
    SUGGERIMENTI_RICERCA.innerHTML = "";
    SUGGERIMENTI_RICERCA.classList.add("hidden");
  }
});

RICERCA.addEventListener("click", function (e) {
  let inputMinuscolo = INPUT_RICERCA.value.toLowerCase();
  e.preventDefault();
  if (INPUT_RICERCA.value !== "") {
    LISTA_POKEMON.innerHTML = "";
    ricercaGrande(inputMinuscolo);
  } else {
    LISTA_POKEMON.innerHTML = "";
    tuttiPoke();
  }
});

ARROW.addEventListener("click", function () {
  ARROW.classList.toggle("arrowDown");

  BOX_FILTRI.classList.toggle("hidden");
});

async function filtroTipo(input) {
  try {
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();

    for (let i = 0; i < JSON_TUTTI_POKEMON.results.length; i++) {
      const POKEMON = JSON_TUTTI_POKEMON.results[i];
      const URL_POKEMON = await fetch(POKEMON.url);
      const JSON_URL_POKEMON = await URL_POKEMON.json();

      for (let x = 0; x < JSON_URL_POKEMON.types.length; x++) {
        if (JSON_URL_POKEMON.types[x].type.name.includes(input)) {
          const POKEMON = JSON_TUTTI_POKEMON.results[i];
          const URL_POKEMON = await fetch(POKEMON.url);
          const JSON_URL_POKEMON = await URL_POKEMON.json();

          const CARD = document.createElement("div");
          CARD.classList.add("card", "mt-3", "ms-3", "bg-body-tertiary");
          CARD.style.width = 15 + "rem";
          CARD.id = JSON_URL_POKEMON.id;
          LISTA_POKEMON.appendChild(CARD);

          const IMG_POKEMON = document.createElement("img");
          IMG_POKEMON.classList.add("card-img-top", "sfondo");
          IMG_POKEMON.src = JSON_URL_POKEMON.sprites.front_default;
          IMG_POKEMON.alt = `immagine di ${JSON_URL_POKEMON.name}`;
          CARD.appendChild(IMG_POKEMON);

          const CARD_BODY = document.createElement("div");
          CARD_BODY.classList.add("card-body");
          CARD.appendChild(CARD_BODY);

          const NOME_POKEMON = document.createElement("h5");
          NOME_POKEMON.classList.add("card-text", "text-center");
          NOME_POKEMON.textContent = JSON_URL_POKEMON.name.toUpperCase();
          CARD_BODY.appendChild(NOME_POKEMON);

          const CONTENITORE_TAGS = document.createElement("div");
          CONTENITORE_TAGS.classList.add("d-flex", "justify-content-evenly");
          CARD_BODY.appendChild(CONTENITORE_TAGS);

          JSON_URL_POKEMON.types.forEach((tipo) => {
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
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function ricercaGrande(input) {
  try {
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();

    const POKEMON_TROVATI = JSON_TUTTI_POKEMON.results.filter((pokemon) =>
      pokemon.name.includes(input)
    );

    if (POKEMON_TROVATI.length > 0) {
      for (let i = 0; i < POKEMON_TROVATI.length; i++) {
        const POKEMON = POKEMON_TROVATI[i];
        const URL_POKEMON = await fetch(POKEMON.url);
        const JSON_URL_POKEMON = await URL_POKEMON.json();

        const CARD = document.createElement("div");
        CARD.classList.add("card", "mt-3", "ms-3", "bg-body-tertiary");
        CARD.style.width = 15 + "rem";
        CARD.id = JSON_URL_POKEMON.id;
        LISTA_POKEMON.appendChild(CARD);

        const IMG_POKEMON = document.createElement("img");
        IMG_POKEMON.classList.add("card-img-top", "sfondo");
        IMG_POKEMON.src = JSON_URL_POKEMON.sprites.front_default;
        IMG_POKEMON.alt = `immagine di ${JSON_URL_POKEMON.name}`;
        CARD.appendChild(IMG_POKEMON);

        const CARD_BODY = document.createElement("div");
        CARD_BODY.classList.add("card-body");
        CARD.appendChild(CARD_BODY);

        const NOME_POKEMON = document.createElement("h5");
        NOME_POKEMON.classList.add("card-text", "text-center");
        NOME_POKEMON.textContent = JSON_URL_POKEMON.name.toUpperCase();
        CARD_BODY.appendChild(NOME_POKEMON);

        const CONTENITORE_TAGS = document.createElement("div");
        CONTENITORE_TAGS.classList.add("d-flex", "justify-content-evenly");
        CARD_BODY.appendChild(CONTENITORE_TAGS);

        JSON_URL_POKEMON.types.forEach((tipo) => {
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

async function ricercaPoke(input) {
  try {
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();

    const POKEMON_TROVATI = JSON_TUTTI_POKEMON.results.filter((pokemon) =>
      pokemon.name.includes(input)
    );
    if (POKEMON_TROVATI.length > 0) {
      for (let i = 0; i < POKEMON_TROVATI.length; i++) {
        const POKEMON = POKEMON_TROVATI[i];
        const URL_POKEMON = await fetch(POKEMON.url);
        const JSON_URL_POKEMON = await URL_POKEMON.json();

        const BOX_POKEMON = document.createElement("div");
        BOX_POKEMON.classList.add(
          "d-flex",
          "justify-content-evenly",
          "border-bottom",
          "border-secondary-subtle",
          "align-items-center",
          "boxPoke"
        );
        BOX_POKEMON.id = JSON_URL_POKEMON.id;
        SUGGERIMENTI_RICERCA.appendChild(BOX_POKEMON);

        const IMG = document.createElement("img");
        IMG.src = JSON_URL_POKEMON.sprites.front_default;
        IMG.alt = `l'immagine del pokemon: ${JSON_URL_POKEMON.name}`;
        BOX_POKEMON.appendChild(IMG);

        const NOME_POKE = document.createElement("span");
        NOME_POKE.classList.add("fs-6", "text-dark", "fw-medium");
        NOME_POKE.textContent = JSON_URL_POKEMON.name;
        BOX_POKEMON.appendChild(NOME_POKE);
      }
    } else {
      SUGGERIMENTI_RICERCA.innerHTML = "";

      const DIV_NON_TROVATO = document.createElement("div");
      DIV_NON_TROVATO.classList.add(
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "h-100"
      );
      SUGGERIMENTI_RICERCA.appendChild(DIV_NON_TROVATO);

      const CONT_IMG = document.createElement("div");
      CONT_IMG.style.width = 50 + "%";
      DIV_NON_TROVATO.appendChild(CONT_IMG);

      const IMG = document.createElement("img");
      IMG.style.width = 100 + "%";
      IMG.src = "asset/Non-trovato.png";
      IMG.alt = "sfera pokè";
      CONT_IMG.appendChild(IMG);
    }
  } catch (error) {
    console.log(error);
  }
}

async function tuttiPoke() {
  try {
    // SPINNER.classList.remove("hidden");
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();

    for (let i = 0; i < JSON_TUTTI_POKEMON.results.length; i++) {
      const POKEMON = JSON_TUTTI_POKEMON.results[i];
      const URL_POKEMON = await fetch(POKEMON.url);
      const JSON_URL_POKEMON = await URL_POKEMON.json();

      const CARD = document.createElement("div");
      CARD.classList.add("card", "mt-3", "ms-3", "bg-body-tertiary");
      CARD.style.width = 15 + "rem";
      CARD.id = JSON_URL_POKEMON.id;
      LISTA_POKEMON.appendChild(CARD);

      const IMG_POKEMON = document.createElement("img");
      IMG_POKEMON.classList.add("card-img-top", "sfondo");
      IMG_POKEMON.src = JSON_URL_POKEMON.sprites.front_default;
      IMG_POKEMON.alt = `immagine di ${JSON_URL_POKEMON.name}`;
      CARD.appendChild(IMG_POKEMON);

      const CARD_BODY = document.createElement("div");
      CARD_BODY.classList.add("card-body");
      CARD.appendChild(CARD_BODY);

      const NOME_POKEMON = document.createElement("h5");
      NOME_POKEMON.classList.add("card-text", "text-center");
      NOME_POKEMON.textContent = JSON_URL_POKEMON.name.toUpperCase();
      CARD_BODY.appendChild(NOME_POKEMON);

      const CONTENITORE_TAGS = document.createElement("div");
      CONTENITORE_TAGS.classList.add("d-flex", "justify-content-evenly");
      CARD_BODY.appendChild(CONTENITORE_TAGS);

      JSON_URL_POKEMON.types.forEach((tipo) => {
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
    // SPINNER.classList.add("hidden");
  } catch (error) {
    console.log(error);
  }
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
