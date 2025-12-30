async function pokemonGenerazione(inizio, fine) {
  try {
    const RISPOSTA = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${fine}&offset=${inizio}`
    );
    const DATI = await RISPOSTA.json();
    const TUTTI_DATI_POKEMON = await Promise.all(
      DATI.results.map(async (pokemon) => {
        const RISPOSTA2 = await fetch(pokemon.url);
        return await RISPOSTA2.json();
      })
    );
    return TUTTI_DATI_POKEMON;
  } catch (error) {
    console.error(error);
  }
}

async function singoloPokemon(nomePokemon) {
  try {
    const RISPOSTA = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
    );
    const DATI = await RISPOSTA.json();
    return await DATI;
  } catch (error) {
    console.error(error);
  }
}

async function evoluzioniPokemon(
  url,
  imgPrimaEv,
  imgSecondaEv,
  imgTerzaEv,
  testoSecondaEv,
  testoTerzaEv
) {
  try {
    const RISPOSTA = await fetch(url);
    const DATI = await RISPOSTA.json();
    const RISPOSTA2 = await fetch(DATI.evolution_chain.url);
    const DATI2 = await RISPOSTA2.json();
    let pokemonPars = await singoloPokemon(DATI2.chain.species.name);
    imgPrimaEv.src = pokemonPars.sprites.front_default;
    DATI2.chain.evolves_to.forEach(async (dati) => {
      pokemonPars = await singoloPokemon(dati.species.name);
      testoSecondaEv.textContent = dati.evolution_details[0].trigger.name;
      imgSecondaEv.src = pokemonPars.sprites.front_default;
      dati.evolves_to.forEach(async (dati) => {
        pokemonPars = await singoloPokemon(dati.species.name);
        testoTerzaEv.textContent = dati.evolution_details[0].trigger.name;
        imgTerzaEv.src = pokemonPars.sprites.front_default;
      });
    });
    console.log(DATI2);
  } catch (error) {
    console.error(error);
  }
}

export { pokemonGenerazione, evoluzioniPokemon, singoloPokemon };
