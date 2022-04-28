//Get tavoli
//porta -> 8890
//ip -> 


function getTavoli(id)
{
    console.log("object");
    fetch("http://172.16.102.69:8890/SushiSystem/getTavoli").then((res)=>{
        return res.json(); //Cast in json
    }).then((data)=>{
        console.log(data);

        let tavolo = {
            "nTavolo": data.value[id].nTavolo,
            "nomeTavolo": data.value[id].nomeTavolo,
            "numeroClienti": data.value[id].clienti.length
        }

        console.log(tavolo);
        
        

    }).catch((err)=>{
        console.log(err);
    })
}

function getOrdini(id)
{
    fetch("http://172.16.102.69:8890/sushiSystem/getOrdini").then((res)=>{
        return res.json(); //Cast in json
    }).then((data)=>{ //data è il contenuto della response (res) già castato in json

        ordini
        console.log(tavolo);

        console.log(data);
    })
}