export function creaCard(contcard, arrayPokemon) {
  arrayPokemon.forEach((pokemon) => {
    // console.log(pokemon);
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        const DIV = document.createElement("div");
        const IMG = document.createElement("img");
        const H4 = document.createElement("h4");
        DIV.id = data.id;
        DIV.classList =
          "flex flex-col items-center hover:bg-red-500 rounded-md p-3 w-full cursor-pointer";
        IMG.classList = "w-full h-full";
        contcard.appendChild(DIV);
        IMG.src = data.sprites.front_default;
        DIV.appendChild(IMG);
        H4.textContent = data.name;
        DIV.appendChild(H4);
      })
      .catch((error) => console.error(error));
  });
}
