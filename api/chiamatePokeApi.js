let pokemon;

export async function pokemonGenerazione(inizio, fine) {
  try {
    const RISPOSTA = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${fine}&offset=${inizio}`
    );
    const DATI = await RISPOSTA.json();
    return DATI.results
  } catch (error) {
    console.error(error);
  }
}
