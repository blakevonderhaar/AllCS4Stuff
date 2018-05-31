
var express = require("express");
var mongoose = require("mongoose");

var router = express.Router();

////////////////////////////////////////////////////
const myDatabase = require('./mongoDatabase');

let db = new myDatabase();

//add or modify.  Use getAllObjects.
router.get('/people', function(req, res){
console.log("doing a get");
	return(db.getAllObjects(res));	
});

//add or modify.  Use addObject and no need for index.
//                teanName should be part of object.
router.post('/people', function(req, res){
console.log("doing a create");
console.log(req.body);

  if (!req.isAuthenticated()) {
    console.log("is not Authenticated");
    res.json({redirect:"/login"});   
  } else {
    console.log("is Authenticated");

	if (req.body.teamName == "") {
		res.json(null);
		return;
	}
console.log(req.user.username);
	let obj = {userName:req.user.username,teamName:req.body.teamName};
	return(db.addObject(obj,res));

  }
});


module.exports = router;

