
var express = require("express");
var router = express.Router();
//var path = require("path");

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
//below is new
//	var thePath = path.resolve(__dirname,"public/views/index.html");
//	response.sendFile(thePath);	
});

var infoList = [];

router.get('/read', function(req, res){
	console.log("in read without index");
	var newList = [];
	let num = 0;
	for (let i=0;i<infoList.length;i++){
		if(infoList[i]!=null){
			newList[num] = infoList[i];
			num++;
		}
	}
	res.json(newList);
});

router.get('/read/:index', function(req, res){
	console.log("in read with index");

	if(req.params.index < 0 || req.params.index >= infoList.length) {
		res.json(null);
	}else {
		if(infoList[req.params.index]){
		res.json(infoList[req.params.index]);
		console.log(infoList[req.params.index].name);
		}
		else 
			res.json(null);
	}
});


router.put('/update', function(req, res){
	if (req.body.index < 0 || req.body.name == "" || infoList[req.body.index] == null) {
		res.json(null);
	} else {
		let temp = {name:req.body.name};
		infoList[req.body.index] = temp;
		res.json(infoList[req.body.index]);
	}
});


router.post('/create', function(req, res){
	if (req.body.index < 0 || req.body.name == "" || req.body.index == null) {
		res.json(null);
	} else {
		let temp = {name:req.body.name};
		infoList[req.body.index] = temp;
		res.json(infoList[req.body.index]);
	}
});

router.delete('/delete/:index', function(req, res){
	if(req.params.index < 0 || req.params.index >= infoList.length) {
		res.json(null);
	}else {
		if(!infoList[req.params.index]){
			res.json(null);
		}
		else{
			let temp = infoList[req.params.index];
			infoList[req.params.index] = undefined;
			res.json(temp);
		} 	
	}
});

module.exports = router;

