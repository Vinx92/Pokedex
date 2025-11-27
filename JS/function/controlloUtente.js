export function controlloUtente(utente) {
    if(!utente){
        window.location = "../pages/index.html"
    }else if (utente.online == false) {
        window.location = "../pages/index.html"
    }
}