var express = require("express");
var app = express();
//this code is going to get all of the static files such as images to send to the 
app.use(express.static(__dirname + "/"));

//__dirname is the most parent folder of the current script
console.log(__dirname);

app.get("/",function(request,response){
	response.sendFile(__dirname + "/index2.html");
});

var port = process.env.PORT || 3000;
app.listen(port);
