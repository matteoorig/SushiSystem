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
        this.statoPresenteOrdine = 1; //1 se l'ordine vuoto appena inserisco almeno un piatto lo setto a tre
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
        if(this.ordine.length > 0){
            this.statoPresenteOrdine = 3;
        }
        var obj = {
            "nome": nome,
            "quantita": pz,
        }
        console.log(obj);
        this.ordine.push(obj);
    }
    deletePiatto(nome){
        for (let i = 0; i < this.ordine.length; i++) {
            const element = this.ordine[i];
            if(element.nome == nome){
                this.ordine.pop(element);
            }
        }
        console.log(this.ordine);
    }

    incPzPiatto(nome){
        for (let i = 0; i < this.ordine.length; i++) {
            var el = this.ordine[i];
            if(el.nome == nome){
                el.quantita = el.quantita+1;
            }
        }
        console.log(this.ordine)
    }
    decPzPiatto(nome){
        for (let i = 0; i < this.ordine.length; i++) {
            var el = this.ordine[i];
            if(el.nome == nome){
                el.quantita = el.quantita-1;
            }
        }
        console.log(this.ordine)
    }

    //in questo modo mi faccio dare il numero di pz in base al piatto
    //questo serve quando vado in una successiva pagina in Home.js
    //quando torno nella pagina menu di Home.js si resettano tutti i piatti 
    getPz(nome){
        var tmp = 0;
        for (let i = 0; i < this.ordine.length; i++) {
            var el = this.ordine[i];
            if(el.nome == nome){
                tmp = el.quantita;
            }
        }
        return tmp;
    }


    
}

module.exports= User;