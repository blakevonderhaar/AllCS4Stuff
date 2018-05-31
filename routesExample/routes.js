var express = require("express");
var router = express.Router();
router.get("/", function (request, response) {
	response.sendFile(__dirname+"???/index.html");
});
var infolist = [{"name":"joe"},{"name":"bob"},{"name":"blake"}];
router.get("/request",function  (req,res) {
	res.json(infolist[req.query.index]);
});


module??? = router;