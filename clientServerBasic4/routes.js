var express = require('express');
var router = express.Router();
router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");

});
router.get("/change",function(request,response){
	response.sendFile(__dirname + "/public/views/index2.html");
});

var smallNum = 0;
var bigNum = 10;
var num = (Math.floor(Math.random()*bigNum) + smallNum);
console.log(num);
var sendinfo = "Pick a number between 0 and 10";

router.get('/request', function(req, res){
	var tell = [];
	var num2 = req.query.index;
	tell[0] = {"tell1" : "", "tell2": ""};
	if(num2>num){
		tell[0].tell1 = "Pick a smaller number";
	}else if (num2<num){
		tell[0].tell1 = "Pick a larger number";
	}else{
		tell[0].tell1 = "You got it!";
	}
	tell[0].tell2 = sendinfo;
	res.json(tell[0]);
});
router.get('/another', function(req, res){
	var infoList = [];
	smallNum = req.query.index;
	bigNum = req.query.index2;
	console.log("index " + req.query.index);
	console.log("index2 " + req.query.index2);
	num = Math.floor(Math.random()* (parseInt(req.query.index) - parseInt(req.query.index2))) + parseInt(req.query.index2);
	console.log("num " + num);
	infoList[0] = {"small": req.query.index, "big": req.query.index2,"random":num};
	console.log("small " + infoList[0].small);
	sendinfo = "Pick a number between " + req.query.index + "and " + req.query.index2 + ": "
	res.json();
});

module.exports = router;

