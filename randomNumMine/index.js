const randommime = require("./randommime");

randommime.setRange(100,150);
console.log("min= " + randommime.getMin() + " max= " + randommime.getMax() + 
" range= " + randommime.getRange());
console.log(randommime.getValue());

randommime.setRange(0,3);
console.log("min= " + randommime.getMin() + " max= " + randommime.getMax() + 
" range= " + randommime.getRange());
console.log(randommime.getValue());