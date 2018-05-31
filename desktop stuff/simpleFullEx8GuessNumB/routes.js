
var express = require("express");
var router = express.Router();

const randommine = require('./randomMine');
const guessnum = require('./guessNum');

guessnum.storeNum();

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});

router.get('/request', function(req, res){
	let guessInfo = guessnum.guessNum(req.query.guessNum);
	res.json({value:guessInfo});
});

router.get('/range', function(req, res){
	let minVal = guessnum.getMin();
	let maxVal = guessnum.getMax();
	res.json({minVal:minVal,maxVal:maxVal});
});

router.get("/modify",function(request,response){
	response.sendFile(__dirname + "/public/views/modify.html");
});

router.post('/modify2', function(req, res){
	guessnum.setMinMax(req.body.minNum,req.body.maxNum);
	guessnum.storeNum();
	res.json({value:2});   //not sure about this.
});


module.exports = router;

