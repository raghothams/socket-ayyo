/*
var express = require("express");
var app = express();

app.use(express.static(__dirname + '/static'));

app.get("/hello", function(req, res){
  res.send("Hello world")
});

var server = app.listen(3000, function(){
  console.log("server started on port %d", server.address().port);
});

*/

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9999);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/static/');
});

app.get('/static/socket.io-1.0.6.js', function (req, res) {
  res.sendfile(__dirname + '/static/socket.io-1.0.6.js');
});

app.get('/hello', function(req, res){

  res.send("Hello world");
});

io.on('connection', function(socket){
  socket.emit('news', {hello:'world'});
  socket.on('my other event', function(data){
    console.log(data);
  });
});

