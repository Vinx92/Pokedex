const CERCA = document.getElementById("cerca");
const SUGGERIMENTI = document.querySelector(".boxSuggerimentiRicerca");
const IMG_POKEMON = document.getElementById("imgPokemon");
const NOME_POKEMON = document.getElementById("nomePokemon");

const LISTA_POKEMON = document.querySelector(".listaPokemon");
const BOX_SPINNER = document.querySelector(".boxSpinner");

async function tuttiIPokemon() {
  BOX_SPINNER.classList.remove("hidden");
  try {
    const TUTTI_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const POKEMON = await TUTTI_POKEMON.json();

    // console.log(POKEMON);
    POKEMON.results.forEach(async (element) => {
      let boxPokemon = document.createElement("div");
      boxPokemon.classList.add("boxPokemon");
      LISTA_POKEMON.appendChild(boxPokemon);

      let nomePokemon = document.createElement("h3");
      nomePokemon.textContent = element.name;
      boxPokemon.appendChild(nomePokemon);
      try {
        const POKEMON_SINGOLO = await fetch(element.url);
        const FILE_POKEMON_SINGOLO = await POKEMON_SINGOLO.json();
        console.log(FILE_POKEMON_SINGOLO);
        let imgPokemon = document.createElement("img");
        imgPokemon.src = FILE_POKEMON_SINGOLO.sprites.front_default;
        imgPokemon.alt = `${element.name}`;
        boxPokemon.insertAdjacentElement("afterbegin", imgPokemon);

        FILE_POKEMON_SINGOLO.types.forEach((tipo) => {
          let tipoPokemon = document.createElement("span");
          tipoPokemon.textContent = tipo.type.name;
          nomePokemon.insertAdjacentElement("beforebegin", tipoPokemon);
        });
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
  BOX_SPINNER.classList.add("hidden");
}
tuttiIPokemon();

async function pokeApi(valore) {
  BOX_SPINNER.classList.remove("hidden");
  try {
    // console.log(valore);

    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"`
    );
    const filePokemon = await pokemon.json();
    // console.log(filePokemon);

    let esitoRicerca = false;
    let nonTrovato = document.createElement("h4");
    // console.log(esitoRicerca);

    filePokemon.results.forEach(async (element) => {
      if (element.name.includes(valore)) {
        // console.log(element.url)
        try {
          const immaginePokemon = await fetch(element.url);
          const fileImmaginePokemon = await immaginePokemon.json();
          // console.log(fileImmaginePokemon);

          let boxPokemon = document.createElement("div");
          boxPokemon.classList.add("boxPokemon");
          LISTA_POKEMON.appendChild(boxPokemon);

          let nomePokemon = document.createElement("h3");
          nomePokemon.textContent = element.name;
          boxPokemon.appendChild(nomePokemon);

          let imgPokemon = document.createElement("img");
          imgPokemon.src = fileImmaginePokemon.sprites.front_default;
          imgPokemon.alt = `${element.name}`;
          boxPokemon.insertAdjacentElement("afterbegin", imgPokemon);

          fileImmaginePokemon.types.forEach((tipo) => {
            let tipoPokemon = document.createElement("span");
            tipoPokemon.textContent = tipo.type.name;
            nomePokemon.insertAdjacentElement("beforebegin", tipoPokemon);
          });

          esitoRicerca = true;
          nonTrovato.textContent = "";
          // console.log(esitoRicerca);
        } catch (error) {
          console.error(error);
        }
      } else {
        esitoRicerca = false;
      }
    });
    if (esitoRicerca === false) {
      nonTrovato.textContent = "pokemon non trovato";
      LISTA_POKEMON.appendChild(nonTrovato);
    }
  } catch (error) {
    console.error(error);
  }
  BOX_SPINNER.classList.add("hidden");
}

CERCA.addEventListener("input", () => {
  // if (CERCA.value === "") {
  // SUGGERIMENTI.classList.add("hidden");
  // } else {
  LISTA_POKEMON.innerHTML = "";
  // SUGGERIMENTI.classList.remove("hidden");
  let valoreMinuscolo = CERCA.value.toLowerCase();
  pokeApi(valoreMinuscolo);
  // }
});
