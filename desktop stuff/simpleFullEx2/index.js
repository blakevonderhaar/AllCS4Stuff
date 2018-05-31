var express = require('express');
var app = express();
//request is info sending to server from client.
//response is info sending to client from server.
app.get("/",function(request,response){
	response.sendFile(__dirname + "/index.html");
});
var info = {"name":"Joe"}
app.get("/request", function(req, res){
	res.json(info);
});
var info2 = {"fred":"Stuff"}
app.get("/another", function(req, res){
	res.json(info2);
});
var port = process.env.PORT || 3000;
app.listen(port);
