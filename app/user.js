/*
    classe che gestisce tutti i dati dell'utente in utilizzo 
    in modo che ogni view ci si possa basare
*/

import axios from 'axios';
class User {


    constructor(){
        this.nTavolo = "";
        this.nomeTavolo = "";
        this.nomeUtente = "";
        this.id = "";
        this.ordine = [];
        this.statoPresenteOrdine = []; //1 se l'ordine vuoto appena inserisco almeno un piatto lo setto a tre
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

        var obj = {
            "stato": 3
        }
        this.statoPresenteOrdine.push(obj);
        console.log(this.statoPresenteOrdine);
    }
    deletePiatto(nome){
        for (let i = 0; i < this.ordine.length; i++) {
            const element = this.ordine[i];
            if(element.nome == nome){
                this.ordine = this.ordine.filter((item) => item.nome !== nome);
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

    //quando devo ristampare tutti gli item una volta selezionati 
    //la funzione ritorna lo stato tra 1 o 3 di quel determinato 
    //piatto passato come attributo 
    getAnimationState(nomePiatto){
        var tmp = 1;    //stato base con nome prodotto su item
        for (let i = 0; i < this.ordine.length; i++) {
            var el = this.ordine[i];
            if(el.nome == nomePiatto){
                tmp = 4;
            }
        }
        console.log(nomePiatto +" ha richiesto "+ tmp)
        return tmp;
    }

    inviaOrdine(url){
        var tmpOrdine = [];
        var tmpQuantita = [];

        for (let i = 0; i < this.ordine.length; i++) {
            let objOrdine;
            if(this.ordine[i].nome == "Pane cinese"){
                objOrdine = 1;
            }else if(this.ordine[i].nome == "Involtini di gamberi"){
                objOrdine = 2;
            }else if(this.ordine[i].nome == "Astice roll"){
                objOrdine = 3;
            }else if(this.ordine[i].nome == "Salmon roll"){
                objOrdine = 4;
            }else if(this.ordine[i].nome == "Sashimi"){
                objOrdine = 5;
            }else if(this.ordine[i].nome == "Salmone flambè"){
                objOrdine = 5;
            }else if(this.ordine[i].nome == "Sushi misto"){
                objOrdine = 6;
            }else {
                objOrdine = 7;
            }

            let objQuantita = this.ordine[i].quantita;
            
            tmpOrdine.push(objOrdine);
            tmpQuantita.push(objQuantita);
        }
        const payload = {
            "nomeTavolo": this.nomeTavolo,
            "nomeUtente": this.nomeUtente,
            "ordinazione": tmpOrdine,
            "quantita": tmpQuantita
        }
        axios.post(url, payload).then((res)=>{

            if(res.data.status = "ok"){
                console.log("ordine effettuato");
                this.ordine = [];
                this.statoPresenteOrdine = [];
            }else{
                console.log("[ERROR] "+ res.data.status);
            }
        }).catch((e) =>{
            navigateToBack(props);
            console.log("[ERROR] "+ e);
        })

    }


    
}

module.exports= User;