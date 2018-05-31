
let infoList = [];

let myModule = function(){
	this.infoList = [];
}

myModule.prototype.getAllNames = function  () {
	var newList = [];
	let num = 0;
	for (let i=0;i<infoList.length;i++){
		if(infoList[i]!=null){
			newList[num] = infoList[i];
			num++;
		}
	}
	return(newList);
}
myModule.prototype.returnAtIndex = function(req){
	if(req.params.index < 0 || req.params.index >= infoList.length) {
		return(null);
	}else {
		if(infoList[req.params.index]){
		return(infoList[req.params.index]);
		}
		else 
			return(null);
	}
}
myModule.prototype.update = function(req){
	if (req.body.index < 0 || req.body.name == "" || infoList[req.body.index] == null) {
		return(null);
	} else {
		let temp = {name:req.body.name};
		infoList[req.body.index] = temp;
		return(infoList[req.body.index]);
	}
}
myModule.prototype.create = function(req){
	if (req.body.index < 0 || req.body.name == "" || req.body.index == null) {
		return(null);
	} else {
		let temp = {name:req.body.name};
		infoList[req.body.index] = temp;
		return(infoList[req.body.index]);
	}
}
myModule.prototype.deleteObj = function(req){
	if(req.params.index < 0 || req.params.index >= infoList.length) {
		return(null);
	}else {
		if(!infoList[req.params.index]){
			return(null);
		}
		else{
			let temp = infoList[req.params.index];
			infoList[req.params.index] = undefined;
			return(temp);
		} 	
	}
}

module.exports = myModule;