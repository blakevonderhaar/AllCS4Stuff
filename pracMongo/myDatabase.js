var mongoose = require("mongoose");
var Info = require("./models/Info");
var express = require('express');


let myDatabase = function() {
}

myDatabase.prototype.getArraySize = function() {
	return this.infoList.length;
}

//add or modify.  Complete getAllObjects function.
myDatabase.prototype.getAllObjects = function(res) {
	let objs = [];
	for (let i=0;i<this.infoList.length;i++) {
		if (this.infoList[i]) {
			objs.push(this.infoList[i]);
		}
	}
	return(objs);
}

myDatabase.prototype.getObjectWithID = function(id,res) {
	Info.findOne({ident:id},function(err,info){
		console.log(info);
		return res.json(info);
	});
	return res.json(null);
}

myDatabase.prototype.addObject = function(obj,res) {
	Info.create(obj,function(error,info){
		if(error){
			return res.json(null);
		}
		let obj2 = {ident:obj.ident,name:obj.name};
		console.log("This is obj2: " + obj2);
		return res.json(obj2);
	});
}


//add or modify.  Complete changeObject function.
myDatabase.prototype.changeObject = function(obj) {
	for (let i=0;i<this.infoList.length;i++) {
		if (this.infoList[i] && obj.ident == this.infoList[i].ident) {
			this.infoList[i] = obj;
			return (obj);
		}
	}
	return (null);
}


//add or modify.  Complete deleteObjectWithID function.
myDatabase.prototype.deleteObjectWithID = function(ident) {
	for (let i=0;i<this.infoList.length;i++) {
		if (this.infoList[i] && ident == this.infoList[i].ident) {
			let temp = this.infoList[i];
			this.infoList[i] = undefined;
			return (temp);
		}
	}
	return (null);
}


module.exports = myDatabase;
