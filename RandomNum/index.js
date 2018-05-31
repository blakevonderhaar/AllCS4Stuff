const seedrandom = require("seedrandom");

let rng = seedrandom();

let myRandomNumber = Math.floor(rng()*10+1);
console.log(myRandomNumber);

myRandomNumber = Math.floor(rng()*10+1);
console.log(myRandomNumber);

myRandomNumber = Math.floor(rng()*10+1);
console.log(myRandomNumber);


