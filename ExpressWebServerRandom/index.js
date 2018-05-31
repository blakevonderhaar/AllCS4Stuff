var express = require("express");
var app = express();

app.get("/random/:min/:max",function(request,response){
	var min = parseInt(request.params.min);
	var max = parseInt(request.params.max);
	if(isNaN(min)|| isNaN(max)){
		response.status(400);
		response.json({error: "Bad request."});
		return;
	}


var resultVal = Math.round((Math.random()*(max-min))+min);
response.json({result: resultVal})
});
var port = process.env.PORT || 3000;
app.listen(port);
