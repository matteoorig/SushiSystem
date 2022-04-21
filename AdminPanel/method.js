//Get tavoli
//porta -> 8890
//ip -> 
function getTavoli()
{
    fetch("http://172.16.102.76:8890/sushiSystem/getTavoli").then((data)=>{
        return data.json(); //Cast in json
    }).then((res)=>{
        console.log(res);
    })
}

function getOrdini(id)
{
    fetch("http://172.16.102.76:8890/sushiSystem/getOrdini").then((data)=>{
        return data.json(); //Cast in json
    }).then((res)=>{
        console.log(res);
    })
}
