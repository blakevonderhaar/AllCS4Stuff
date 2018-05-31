var express = require('express');
var app = express();


app.get("/",function(request,response){
	response.sendFile(__dirname + "/client.html");
});
var info = {"name":"joe"};
app.get("/request",function(request,response){
	response.json(info);
});
var info2 = {"fred":"ahhhh"};
app.get("/another",function(request,response){
	response.json(info2);
});
var port = process.env.PORT || 3000;
app.listen(port);