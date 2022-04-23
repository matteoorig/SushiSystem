/*
    classe che gestisce tutti i dati dell'utente in utilizzo 
    in modo che ogni view ci si possa basare
*/


class User {


    constructor(){
        this.nTavolo = "";
        this.nomeTavolo = "";
        this.nomeUtente = "";
        this.id = "";
        this.ordine = [];
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
    setId(e){
        this.id = e;
    }

    addPiatto(nome, pz){
        var obj = {
            "nome": nome,
            "quantita": pz,
        }
        this.ordine.push(obj);
    }
    updatePiatto(nome, pz){
        var obj = {
            "nome": nome,
            "quantita": pz,
        }

        if(pz == 0){
            //elimino piatto
            this.ordine.pop(obj);
        }
        for (let i = 0; i < this.ordine.length; i++) {
            var el = this.ordine[i];
            if(el.nome == nome){
                el.quantita = pz;
            }
        }
    }


    
}

module.exports= User;