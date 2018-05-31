
let highNum = 0;
let lowNum = 0;
exports.setRange = function  (low,high) {
	highNum = high;
	lowNum = low;
}
exports.getMin = function  () {
	return(lowNum);
}
exports.getMax = function  () {
	return(highNum);
}
exports.getValue = function  () {
	return Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
}
exports.getRange = function  () {
	let val = highNum-lowNum;
	return(val+1);
}