var express = require("express");
var app = express();

var http = require("http").Server(app);
var io   = require("socket.io")(http);


app.set("port", process.env.PROT || 3030);

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});


io.on("connection", function(socket){
  socket.on("chat message", function(msg){
    console.log( "message:" + msg );
    io.emit("chat message",  msg);
  })
});

http.listen(app.get("port"), function(){
  console.log("Express Chat server is running at localhost:" + app.get("port"));
});
