/*
    classe che gestisce tutti i dati dell'utente in utilizzo 
    in modo che ogni view ci si possa basare
*/


class User {


    constructor(){
        this.nTavolo = "";
        this.nomeTavolo = "";
        this.nomeUtente = "";
    }

    setnTavolo(e){
        this.nTavolo = e;
        
    }
    setnomeTavolo(e){
        this.nomeTavolo = e;
        
    }
    setnomeUtente(e){
        this.nomeUtente = e;
    }



    
}

module.exports= User;