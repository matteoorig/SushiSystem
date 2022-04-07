//connessione iniziale al server
const CONNESSIONE = {
    "nTavolo": "51",
    "nomeTavolo": "nomeTavolone",
    "nomeUtente": "nomeUtente"
}

//update timerato degli utenti          | i cibi sono NUMERI ovvero  es. pane = 004
const UPDATEUTENTI = {
    "method" : "updateutenti",
    "users" : [
        {"nome": "Utente1", "ordinazione":[ "cibo1", "cibo2", "cibo3" ], "quantità":["3", "5", "8"]},
        {"nome": "Utente2", "ordinazione":[ "cibo2-1", "cibo2-2", "cibo2-3", "cibo4" ], "quantità":["2-3", "2-5", "2-8", "2-5"]}
    ],
}

//utente singolo che mando al server la mia ordinazione
const ORDINAZIONE = {
    "method" : "ordinazione",
    "nomeT": "NomeTavolo1",
    "ordine" : {"nomeU": "Utente1", "ordinazione":[ "cibo1", "cibo2", "cibo3" ], "quantità":["3", "5", "8"]},
}



const ORDINAZIONECOMPLETA = {
    "method" : "odinazioneCompleta",
    "nTavolo" : ""
}
