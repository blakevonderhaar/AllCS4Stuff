
var express = require("express");
var Info = require("./models/Info");

var router = express.Router();

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});


////////////////////////////////////////////////////
const myDatabase = require('./myDatabase');

let db = new myDatabase();

//add or modify.  Use getAllObjects.
router.get('/read', function(req, res){
	let objs= db.getAllObjects(res);
	return(objs);
});

//add or modify.  Use getObjectWithID and change index to ident.
router.get('/read/:ident', function(req, res){

	return(db.getObjectWithID(req.params.ident,res));

});

//add or modify.  Use addObject and no need for index.
//                ident should be part of object.
router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}

	let obj = {ident:req.body.ident,name:req.body.name};
	return (db.addObject(obj,res));


});

//add or modify.  Use changeObject and no need for index.
//                ident should be part of object.
router.put('/update', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}

	let obj = {ident:req.body.ident,name:req.body.name};
	res.json(db.changeObject(obj));
});

//add or modify.  Use deleteObjectWithID and change index to ident.
router.delete('/delete/:ident', function(req, res){

	res.json(db.deleteObjectWithID(req.params.ident));
});




module.exports = router;
