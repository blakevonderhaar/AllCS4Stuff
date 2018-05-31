
var express = require("express");
var router = express.Router();
const m = require("./myModule");
let mod = new m();
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
	res.json(mod.getAllNames());
});

router.get('/read/:index', function(req, res){
	console.log("in read with index");
	res.json(mod.returnAtIndex(req));
});


router.put('/update', function(req, res){
	res.json(mod.update(req));
});


router.post('/create', function(req, res){
	res.json(mod.create(req));
});

router.delete('/delete/:index', function(req, res){
	res.json(mod.deleteObj(req));
});

module.exports = router;

