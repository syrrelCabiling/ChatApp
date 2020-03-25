var express = require('express');
var app = express();
var fs = require('file-system');

// add socket.io
const io = require('socket.io')(); //running function right away

const port = process.env.PORT || 3030;

// tell express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

const server = app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});



// attach our chat server to our app
io.attach(server);


io.on('connection', function(socket) {
    console.log('a user has connected');
    socket.emit('connected', {sID: socket.id, message: "new connection"});

    socket.on('chat_message', function(msg) {
        console.log(msg); //lets see what the payload is from the client side

        //tell the connection manager which is socket.io to send this message to everyone connected to our app. our app will then get this meesage including the sender
        io.emit('new_message', { id: socket.id, message: msg})
    });

    socket.on('chat_message', function(emojis) {
        console.log(msg); //lets see what the payload is from the client side

        //tell the connection manager which is socket.io to send this message to everyone connected to our app. our app will then get this meesage including the sender
        io.emit('new_message', { id: socket.id, emoji: emojis})
    });

    socket.on('disconnect', function() {
        console.log('a user has disconnected');
    });

    // socket.on('typing', function(data){
    //     socket.broadcast.emit('typing', data)
    // });

    // //we're broadcasting when each user is typing
    // socket.on('typing', function(data){
    //     socket.broadcast.emit('typing', data)
    //   });


 });


//  io.on('connection', function(socket){
//     fs.readFile(__dirname + '/images/image.jpg', function(err, buf){
//       // it's possible to embed binary data
//       // within arbitrarily-complex objects
//       socket.emit('image', { image: true, buffer: buf });
//       console.log('image file is initialized');
//     })
//  });
