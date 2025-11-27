export class Persona {
  constructor(nomeUtente, password) {
    this.nomeUtente = nomeUtente;
    this.password = password;
  }
  online = true;
  squadraPokèmon = [];
  preferiti = [];
  trovaPokémon = {
    tentativi: 3,
    ultimiPokémonUsciti: [],
  };
}
