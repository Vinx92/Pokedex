export function creazioneCard(listaP, url) {
  const CARD = document.createElement("div");
  CARD.classList.add("card", "mt-3", "ms-3", "bg-body-tertiary");
  CARD.style.width = 15 + "rem";
  CARD.id = url.id;
  listaP.appendChild(CARD);

  const IMG_POKEMON = document.createElement("img");
  IMG_POKEMON.classList.add("card-img-top", "sfondo");
  IMG_POKEMON.src = url.sprites.front_default;
  IMG_POKEMON.alt = `immagine di ${url.name}`;
  CARD.appendChild(IMG_POKEMON);

  const CARD_BODY = document.createElement("div");
  CARD_BODY.classList.add("card-body");
  CARD.appendChild(CARD_BODY);

  const NOME_POKEMON = document.createElement("h5");
  NOME_POKEMON.classList.add("card-text", "text-center");
  NOME_POKEMON.textContent = url.name.toUpperCase();
  CARD_BODY.appendChild(NOME_POKEMON);

  const CONTENITORE_TAGS = document.createElement("div");
  CONTENITORE_TAGS.classList.add("d-flex", "justify-content-evenly");
  CARD_BODY.appendChild(CONTENITORE_TAGS);

  url.types.forEach((tipo) => {
    smistamentoTipo(tipo, CONTENITORE_TAGS);
  });
}

export async function tuttiPoke(listaP) {
  try {
    const TUTTI_I_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const JSON_TUTTI_POKEMON = await TUTTI_I_POKEMON.json();

    for (let i = 0; i < JSON_TUTTI_POKEMON.results.length; i++) {
      const POKEMON = JSON_TUTTI_POKEMON.results[i];
      const URL_POKEMON = await fetch(POKEMON.url);
      const JSON_URL_POKEMON = await URL_POKEMON.json();

      creazioneCard(listaP,JSON_URL_POKEMON)

    }
  } catch (error) {
    alert(error);
  }
}

export function smistamentoTipo(tipo, contTags) {
  const TAGS = document.createElement("button");
  switch (tipo.type.name) {
    case "fire":
      TAGS.classList.add("tags", "fuoco");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "grass":
      TAGS.classList.add("tags", "erba");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "poison":
      TAGS.classList.add("tags", "veleno");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "ground":
      TAGS.classList.add("tags", "terra");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "flying":
      TAGS.classList.add("tags", "volante");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "water":
      TAGS.classList.add("tags", "acqua");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "bug":
      TAGS.classList.add("tags", "coleottero");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "normal":
      TAGS.classList.add("tags", "normale");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "electric":
      TAGS.classList.add("tags", "elettro");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "fairy":
      TAGS.classList.add("tags", "fata");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "fighting":
      TAGS.classList.add("tags", "lotta");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "psychic":
      TAGS.classList.add("tags", "psico");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "rock":
      TAGS.classList.add("tags", "roccia");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "steel":
      TAGS.classList.add("tags", "metallo");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "ice":
      TAGS.classList.add("tags", "ghiaccio");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "ghost":
      TAGS.classList.add("tags", "fantasma");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
    case "dragon":
      TAGS.classList.add("tags", "drago");
      TAGS.textContent = tipo.type.name;
      contTags.appendChild(TAGS);
      break;
  }
}
