var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //console.log('new chat room');
});

io.on('connection', function(socket){
  console.log('user connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

/*
Homework

Here are some ideas to improve the application:

    Broadcast a message to connected users when someone connects or disconnects
    Add support for nicknames
    Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
    Add “{user} is typing” functionality
    Show who’s online
    Add private messaging
    Share your improvements!
*/