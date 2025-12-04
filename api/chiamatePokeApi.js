export async function pokemonGenerazione(inizio, fine) {
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
