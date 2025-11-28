function pokemonGenerazione(fine, inizio) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${fine}&offset=${inizio}`)
  .then((response) => response.json())
  .then((data) => {
  })
  .catch((error) => console.error(error));
}