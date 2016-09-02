var express = require("express");

var app = express();


var http = require("http").Server(app);


app.set("port", process.env.PROT || 3030);

app.get("/", function(req, res){
  res.send("This is Chat server");
});

http.listen(app.get("port"), function(){
  console.log("Express Chat server is running at localhost:" + app.get("port"));
});
