var minValue = 0;
var maxValue = 0;
var num = 0;

var randomnum = function(minVal,maxVal){
	this.minValue = minVal;
	this.maxValue = maxVal;
	num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
randomnum.prototype.setRange = function(minVal,maxVal) {
	this.minValue = minVal;
	this.maxValue = maxVal;
}
randomnum.prototype.getRange = function() {
	let ret = this.maxValue - this.minValue +1;
	return(ret);
}
randomnum.prototype.getValue = function() {
	return num;
}
randomnum.prototype.getMax = function() {
	return maxValue;
}
randomnum.prototype.getMin = function() {
	return minValue;
}

module.exports = randomnum;