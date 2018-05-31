const randommine = require('./randomMine');

let minValue = 0;
let maxValue = 100;
let computerNum = 10;
let numTries;

let obj = new randommine(minValue,maxValue);

exports.setMinMax = function(minVal,maxVal) {
	minValue = minVal;
	maxValue = maxVal;
}
exports.getMin = function() {
	return(minValue);
}
exports.getMax = function() {
	return(maxValue);
}

exports.storeNum = function() {
	obj.setRange(minValue,maxValue);
	computerNum = obj.getValue();
	numTries = 0;
}

exports.guessNum = function(guess) {
	let retVal = 0;
	if (guess < computerNum) {
		retVal = -1;
	} else if (guess > computerNum){
		retVal = 1;
	} else {
		retVal = 0;
	}
	numTries++;
	return(retVal);
}

exports.getNumTries = function() {
	return (numTries);
}



