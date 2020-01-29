// imports always go first - if we're importing anything

const socket = io(); //loading from node_modules folder

//the packet is whatever data we send thru with the connect event from the server
function setUserId(packet) {
    //debugger;
    console.log(packet);
}

function showDisconnect() {
    console.log('a user disconnected');
}

socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect',showDisconnect);