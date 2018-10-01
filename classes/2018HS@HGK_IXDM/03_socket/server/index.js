// first we load all the libraries we need
const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
// this is our server listening to the specified port in our case localhost:5000
const server = app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
// here we call the socket library
const socket = require('socket.io');
const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log(socket.id);
    // here we look if we recieve any data
    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        // if data is recieved than send it to the observer
        socket.broadcast.emit('data', data);
        console.log(data);
    }
}

