
var Promise = require('promise');

var express = require("express");
var mongoose = require("mongoose");
var Info = require("./models/Info");

let myDatabase = function() {
}

//add or modify.  Complete getAllObjects function.
myDatabase.prototype.getAllObjects = function(req,res) {

Info.find({},function(error,info) {
	if (error) {
		return res.json(null);
	} else {
		let objs = [];
		for (let i=0;i<info.length;i++) {
            if (info[i].userName == req.user.username)
    		  objs.push({teamName:info[i].teamName});
		}
		return res.json({username:req.user.username,teams:objs});
	}
});

}

myDatabase.prototype.addObject = function(obj,res) {
	var Prom1 = prom1();
	Prom1.then(
	  function(result) {
	    let found = false;
	    for (let i=0;i<result.length;i++) {
	      if (result[i].teamName == obj.teamName)
	        found = true;
	    }

	    if (found) {
	      console.log("already there");
	      return res.json(null);
	    } else {
	      	console.log("not there");
		    Info.create(obj,function(error,info) {
	    	    if (error) {
	        	    return res.json(null);
	    	    }
	        	return res.json(obj);
	    	});	  	    }
	  },
	  function(err) {
	    console.log(err);
	  }
	);

}

//////////////////////////
function prom1() {
  return new Promise(function(resolve,reject) {
	Info.find({},function(error,info) {
		if (error) {
	        reject(err);
		} else {
	        resolve(info);
		}
	});
  });
}

module.exports = myDatabase;


