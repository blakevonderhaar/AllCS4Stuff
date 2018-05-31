//Blake VonderHaar

var express = require("express");
var router = express.Router();

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});

router.get("/info",function(request,response){
	response.sendFile(__dirname + "/public/views/info.html");
});

var infoList = [];
router.post("/store", function(req,res){
	if(req.body.index == "" || req.body.object == ""){
		res.json(null);
	} else{
		infoList[req.body.index] = [req.body.object,req.body.color,req.body.rating];
		res.json(1);
	}
});

router.get("/get", function(req,res){
	if(req.query.index == "" || !infoList[req.query.index]){
		res.json(null);
	} else{
		let tempArray = infoList[req.query.index];
		let tempObject = tempArray[0];
		let tempColor = tempArray[1];
		let tempRating = tempArray[2];
		res.json({object:tempObject,color:tempColor,rating:tempRating});
	}
});



module.exports = router;


