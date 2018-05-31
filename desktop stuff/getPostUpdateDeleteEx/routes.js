
var express = require("express");
var router = express.Router();
//var path = require("path");

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
//below is new
//	var thePath = path.resolve(__dirname,"public/views/index.html");
//	response.sendFile(thePath);	
});

var infoList = [];
	  
router.get('/read', function(req, res){
	let strList = [];
	for (let i=0;i<infoList.length;i++){
		if (infoList[i]) {
			strList.push(infoList[i].name);
		}
	}
	res.json(strList);	
});

router.get('/read/:index', function(req, res){

	if (req.params.index < 0 || req.params.index >= infoList.length) {
		res.json(null);
	} else {
		if (!infoList[req.params.index]) {
			res.json(null);
		} else {
			res.json(infoList[req.params.index]);
		}
	}
});


router.post('/create', function(req, res){
	if (req.body.index < 0 || req.body.name == "") {
		res.json(null);
	} else {
		if (infoList[req.body.index])
			res.json(null);
		else {
			let temp = {name:req.body.name};
			infoList[req.body.index] = temp;
			res.json(infoList[req.body.index]);
		}
	}
});


router.put('/update', function(req, res){
	if (req.body.index < 0 || req.body.name == "") {
		res.json(null);
	} else {
		if (infoList[req.body.index]) {
			let temp = {name:req.body.name};
			infoList[req.body.index] = temp;
			res.json(infoList[req.body.index]);
		} else {
			res.json(null);
		}
	}
});


router.delete('/delete/:index', function(req, res){
	if (req.params.index < 0 || req.params.index >= infoList.length) {
		res.json(null);
	} else {
		if (!infoList[req.params.index]) {
			res.json(null);
		} else {
			let temp = infoList[req.params.index];
			infoList[req.params.index] = undefined;
			res.json(temp);
		}
	}
	
});

module.exports = router;

