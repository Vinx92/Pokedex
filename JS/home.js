import { controlloUtente } from "../JS/function/controlloUtente.js";
import { logOut, OpenTab } from "./function/FuncIconaUtente.js";

const LOG_OUT = document.getElementById("log-out");
const BOX_ICONA_PROFILO = document.getElementById("box-icona-profilo");

let utente = JSON.parse(localStorage.getItem("profilo"));
controlloUtente(utente);

BOX_ICONA_PROFILO.addEventListener("click", OpenTab);
LOG_OUT.addEventListener("click", logOut);
