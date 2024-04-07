const CERCA = document.getElementById("cerca");
const SUGGERIMENTI = document.querySelector(".boxSuggerimentiRicerca");
const IMG_POKEMON = document.getElementById("imgPokemon");
const NOME_POKEMON = document.getElementById("nomePokemon");

const LISTA_POKEMON = document.querySelector(".listaPokemon");

async function tuttiIPokemon() {
  try {

    const TUTTI_POKEMON = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
    );
    const POKEMON = await TUTTI_POKEMON.json();

    console.log(POKEMON);
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

        let imgPokemon = document.createElement("img");
        imgPokemon.src = FILE_POKEMON_SINGOLO.sprites.front_default;
        imgPokemon.alt = `${element.name}`;
        boxPokemon.insertAdjacentElement("afterbegin", imgPokemon);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}
tuttiIPokemon();

async function pokeApi(valore) {
  try {
    // console.log(valore);
    const pokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"`
    );
    const filePokemon = await pokemon.json();
    console.log(filePokemon);

    let esitoRicerca = false;
    let nonTrovato = document.createElement("h4");
    console.log(esitoRicerca);

    filePokemon.results.forEach(async (element) => {
      // console.log(element.name)
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

          esitoRicerca = true;
          nonTrovato.textContent = "";
          console.log(esitoRicerca);
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
