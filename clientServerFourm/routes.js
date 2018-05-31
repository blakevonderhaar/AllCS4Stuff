var express = require('express');
var router = express.Router();
router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");

});

	var infoList = [];
	router.get('/request', function(req, res){
		alert("work");
		if(req.body.topic == ""|| req.body.comment == ""){
			res.json(null);
		}else {
			temp = {"topic": req.body.topic, "comment": req.body.comment};
			infoList.push(temp);
		}
	});
	router.get('/another', function(req, res){
		if(req.body.topic == ""){
			res.json(null);
		}else {
			
		}
	});


module.exports = router;

