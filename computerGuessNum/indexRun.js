const random = require("./randomnum");
const guessnum = require("./index");
let minVal = 0;
let maxVal = 100;
let myGuess = 50;
let obj = new random(minVal,maxVal);
guessnum.storeNum();
let loop = true;
while(loop){
	myGuess = obj.getValue();
	console.log("my guess is : " + myGuess);
	let guessInfo = guessnum.guessNum(myGuess);
	if(myGuess<guessnum.getNum()){
		obj.setRange(myguess+1,obj.getMax());
	}else if(myGuess>guessnum.getNum()){
		obj.setRange(obj.getMin(),myguess-1);
	}else{
		loop = false;
	}
}
console.log(guessnum.getNumTries());
