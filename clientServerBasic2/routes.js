var express = require('express');
var router = express.Router();
router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});
var infoList = [{"name":"Joe"},{"name":"Jim"},
{"name":"John"},{"name":"Jeff"}];
router.get('/request', function(req, res){
	res.json(infoList[req.query.index]);
});

router.post("/change",function  (req,res) {
	infoList[req.body.index].name = req.body.name;
	res.json(infoList[req.body.index]);
})

module.exports = router;

