const randommine = require("./randomnum");
var minValue = 0;
var maxValue = 100;
var computerNum = 0;
var numTries = 0;
var obj = new randommine(0,100);
exports.storeNum = function(){
	console.log("Choose a number from 0 to 100");
	conputerNum = obj.getValue();
	console.log("computer num = "+ computerNum);
	numTries = 0;
}
exports.guessNum = function(guess){
	if(guess>computerNum){
		console.log("Pick a smaller number!");
	}else if (guess<computerNum){
		console.log("Pick a greater number!");
	}else {
		console.log("You got it!");
	}
}
exports.getNumTries = function(){
	return (numTries);
}
exports.getNum = function(){
	return computerNum;
}