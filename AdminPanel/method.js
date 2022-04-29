//Get tavoli
//porta -> 8890
//ip -> 

//ip otex -> 192.168.178.130


setTimeout(() => {
    getTavoli().then((tavoli)=>{
        
    })
    setEventListener()
    console.log(element)
}, 3000);

function setEventListener(){
    
    if(element){
        for (let i = 0; i < element.length; i++) {
            tmp = new Rectangle();

            element[i].addEventListener("click", ()=>{
                console.log(element.id);
                if(!stato){
                    document.getElementById("e1").style.height="80%";
                    document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                    stato=true;
                    tempEventId=element[i].id;
                }
                else if(stato){
                    if(element[i].id==tempEventId){
                        document.getElementById("e1").style.height="0%";
                        document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                        stato=false;
                    }
                    if(element[i].id!=tempEventId){
                        console.log("[SERVER]: Cambio tavolo");
                        document.getElementById("e1").style.height="0%";
                        document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                        setTimeout(()=>{
                            document.getElementById("e1").style.height="80%";
                            document.getElementById("e1").style.transition = "height 500ms ease-in-out";
                        },600);
                        stato=true;
                        tempEventId=element[i].id;
                    }
                }
            });
        }
    }
}

function getTavoli()
{
    var tmp;
    fetch("http://192.168.178.130:8890/SushiSystem/getTavoli").then((res)=>{
        return res.json(); //Cast in json
    }).then((data)=>{


        //Variabili
        let value = data.value;
        
        //Cerco il tavolo che mi serve
        for (let i = 0; i < value.length; i++) {
            const element = value[i];
            createTavolo(element.nTavolo);
        }

        arrayTavoli = document.getElementsByClassName(".tavolo");
        tmp= arrayTavoli;
    })
    return tmp;
}

function getOrdini(id)
{
    fetch("http://192.168.178.130:8890/sushiSystem/getOrdini").then((res)=>{
        return res.json(); //Cast in json
    }).then((data)=>{ //data è il contenuto della response (res) già castato in json
        
        let tavolo;
        let value = data.value;
        
        //Cerco il tavolo che mi serve
        for (let i = 0; i < value.length; i++) {
            const element = value[i];
            if (element.nTavolo == id) {
                tavolo = {
                    "nTavolo": data.value[id].nTavolo,
                    "nomeTavolo": data.value[id].nomeTavolo,
                    "numeroClienti": data.value[id].clienti.length
                }
            }
        }

        createTavolo(tavolo.nTavolo);        

        console.log(data);
    })
}


//METODI SCRIPT

//Creazione elemento tavolo
function createTavolo(nTavolo){
    console.log("[SERVER]: Creazione tavolo");
    const numTav = nTavolo;
    const wrapperTavoli = document.getElementById("containerSx");
    wrapperTavoli.innerHTML += '<div class="tavolo" name="tav" id='+numTav+'>TAVOLO '+numTav+'</div>';
    element = document.getElementsByClassName("tavolo");
    setEventListener();
}
