
let myRandomNum = function(minVal,maxVal) {
    this.minValue = Number(minVal);
    this.maxValue = Number(maxVal);
}

myRandomNum.prototype.setRange = function(minVal,maxVal) {
    this.minValue = Number(minVal);
    this.maxValue = Number(maxVal);
}

myRandomNum.prototype.getMin = function() {
    return Number(this.minValue);
}
myRandomNum.prototype.getMax = function() {
    return Number(this.maxValue);
}

myRandomNum.prototype.getValue = function() {

	let value = Math.floor((Math.random() * (Number(this.maxValue)+1-Number(this.minValue)) + Number(this.minValue)));

	return (value);
}
myRandomNum.prototype.getRange = function() {
		return (Number(this.maxValue)+1-Number(this.minValue));
}

module.exports = myRandomNum;



