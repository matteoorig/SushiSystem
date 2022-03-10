var http = require('http');
const WebSocket = require('ws');
const Persona = require('./persona.js');
const Ordine = require('./ordine.js');
const Tavolo = require('./tavolo.js');
var Tavoli = new Array();
const server = new WebSocket.Server({pot:8080})
const clients = new Map();
const o = [];
const p = [];
server.listen(8080);

server.on('connection', (ws) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const metadata = { id, color };

    clients.set(ws, metadata);

    server.on('message', (messageAsString) => {

        const message = JSON.parse(messageAsString);
        const metadata = clients.get(ws);
  
        checkmetod(message);

        message.sender = metadata.id;
        message.color = metadata.color;

        const outbound = JSON.stringify(message);

      [...clients.keys()].forEach((client) => {
        client.send(outbound);
      });


    });


server.on("close", () => {
    clients.delete(ws);
  });
});

function checkmetod(message){

switch(message.method){
    case 'connessione':
    connessione(message);
    break;

    case 'ordine':
    ordine(message);
    break;
}

function connessione(){
  let per = new Persona(message);
  p.push(per);
  if(Tavoli.length>0){
  for (let i = 0 ; i < Tavoli.length; i++) {
      
    if(Tavoli[i].ntavolo = per.ntavolo){

      Tavoli[i].addPersona;
    }
    else{
      let tav = new Tavolo(per.ntavolo, per.nomeutente)
      Tavoli.push(tav);

    }



  }


  }
  else{
    let tav = new Tavolo(per.ntavolo, per.nomeutente)
    Tavoli.push(tav);


  }

}

function ordine(){
  let ord = new Ordine(message);
  o.push(ord);
}

}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  console.log("wss up");