var http = require('http');
const WebSocket = require('ws');

const server = new WebSocket.Server({pot:8080})
const clients = new Map();

server.listen(8080);

server.on('connection', (ws) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const metadata = { id, color };

    clients.set(ws, metadata);

    server.on('message', (messageAsString) => {

        const message = JSON.parse(messageAsString);
        const metadata = clients.get(ws);
  
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

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  console.log("wss up");