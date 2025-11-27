function logOut() {
    let utente = JSON.parse(localStorage.getItem("profilo"))
    utente.online = false
    localStorage.setItem("profilo", JSON.stringify(utente))
    window.location = "../pages/index.html"
}

function OpenTab() {
    const TAB_LOG_OUT = document.getElementById("tab-logOut")
    TAB_LOG_OUT.classList.toggle("transizioneIn")
    TAB_LOG_OUT.classList.toggle("transizioneOut")
}

export {logOut, OpenTab}