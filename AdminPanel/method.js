//Get tavoli
//porta -> 8890
//ip -> 

//ip otex -> 192.168.178.130


setInterval(() => {
    var tavoli = getTavoli();
    setEventListener();    
}, 3000);



function setEventListener(){
    element = document.querySelectorAll(".tavolo");
    console.log(element.length);

    element.forEach((el) => {
        el.addEventListener("click", ()=>{
            console.log(el)
        })
    });

        for (let i = 0; i < element.length; i++) {
            tmp = new Rectangle();

            console.log(element[i].id)
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

function getTavoli()
{
    fetch("http://192.168.178.130:8890/SushiSystem/getTavoli").then((res)=>{
        return res.json(); //Cast in json
    }).then((data)=>{

    if (data.value.length > 0) {
        console.log(data);
            //Variabili
            let value = data.value;
            const wrapperTavoli = document.getElementById("wrapperTavoli");
            var str = "";
            //Cerco il tavolo che mi serve
            for (let i = 0; i < value.length; i++) {
                const element = value[i];
                str += '<div class="tavolo" name="tav" id='+element.nTavolo+'>TAVOLO '+element.nTavolo+'</div>';
            }
            wrapperTavoli.innerHTML = str;
           
    }
        
    })

}

function getOrdini(id)
{
    fetch("http://192.168.178.130:8890/sushiSystem/getTavoli").then((res)=>{
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
        setClienti(tavolo.numeroClienti);
        console.log(tavolo.nTavolo);
    })
}


//METODI SCRIPT

//Creazione elemento tavolo
function createTavolo(nTavolo){

    console.log("[SERVER]: Creazione tavolo");

    const listTavoli = document.querySelectorAll(".tavolo");
    var array = [];
    listTavoli.forEach(e => {
        array.push(e.id);
    });

    const wrapperTavoli = document.getElementById("containerSx");
    wrapperTavoli.innerHTML += '<div class="tavolo" name="tav" id='+nTavolo+'>TAVOLO '+nTavolo+'</div>';
}

function setClienti(numClienti){
    const divNumPersone = document.getElementById("numeroP");
    divNumPersone.innerHTML += numClienti;
    const totale = document.getElementById("totale");
    tmp = numClienti * 20;
    totale.innerHTML += "TOTALE: " + tmp + "€"; 
}