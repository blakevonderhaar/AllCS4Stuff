var express = require('express');
var app = express();


app.get("/",function(request,response){
	response.sendFile(__dirname + "/client.html");
});
var info = [{"name":"joe"},{"name":"bob"}];
app.get("/request",function(request,response){
	response.json(info[request.query.index]);
});
var port = process.env.PORT || 3000;
app.listen(port);