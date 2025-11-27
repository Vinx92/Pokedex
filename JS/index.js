import { Persona } from "./class/Persona.js";
import { OpenTab } from "./function/FuncIconaUtente.js";

let utente = JSON.parse(localStorage.getItem("profilo"));
const FORM = document.getElementById("registrati");
const BOX_ICONA_PROFILO = document.getElementById("box-icona-profilo")

if (utente && utente.online == true) {
  window.location = "../pages/home.html";
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!utente) {
    console.log("utente noin trovato ")
    let utente = new Persona(
      e.target.nomeUtente.value,
      e.target.password.value
    );
    localStorage.setItem("profilo", JSON.stringify(utente));
    window.location = "../pages/home.html";
  } else if (
    utente.nomeUtente == e.target.nomeUtente.value &&
    utente.password == e.target.password.value
  ) {
    utente.online = true
    localStorage.setItem("profilo", JSON.stringify(utente))
    window.location = "../pages/home.html";
  }
});

BOX_ICONA_PROFILO.addEventListener("click", OpenTab)