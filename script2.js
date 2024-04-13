const LISTA_POKEMON = document.querySelector(".listaPokemon");

async function tuttiPoke() {
  try {
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();
    JSON_TUTTI_POKEMON.results.forEach(async (pokemon) => {
      const URL_POKEMON = await fetch(pokemon.url);
      const JSON_URL_POKEMON = await URL_POKEMON.json();
      console.log(JSON_URL_POKEMON);

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
          default:
            break;
        }
        TAGS.classList.add("tags");
        TAGS.textContent = tipo.type.name;
        CONTENITORE_TAGS.appendChild(TAGS);
      });
    });
  } catch (error) {
    alert(error);
  }
}

tuttiPoke();
