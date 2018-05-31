console.log('----------');

console.log('Hello World!');

var num = 5;
if (num === 5){
	console.log('This works');
}else {
	console.log('This does not work');
}


//for(let i = 0;i<11;i++){
//	setTimeout(function(){console.log(i)}, 1000);
//}


console.log('----------');

doThing(5,function(number){console.log('in the funtion ' + (number +2))});


function doThing(num,thisFuntion){
	console.log(num);
	thisFuntion(num);
}

console.log('----------');

for (let i = 0; i<11;i++){
	if(i==5)
		break;
	console.log(i);
}

console.log('----------');

for (let i = 0; i<11;i++){
	if(i==5)
		continue;
	console.log(i);
}

console.log('----------');

let person = new Object();
person.age = 17;
person.hairColor = "Black";
person.eyeColor = "Brown";

let person2 = {
	age : 18,
	hairColor : "Blonde",
	eyeColor : "Blue"
}

let person3 = new Person(19,"Brown","Blue");

function Person(age,hairColor,eyeColor){
	this.age = age;
	this.hairColor = hairColor;
	this.eyeColor = eyeColor;
}

person2["age"] = 5;


let person4 = Object.create(person2);
let person5 = Object.create(person3);

console.log(person4.age + " " + person4.hairColor);
console.log(person5.age + " " + person5.hairColor);
//console.log("Person one: " + person.age + " " + person.hairColor + " " + person.eyeColor);
//console.log("Person two: " + person2.age + " " + person2.hairColor + " " + person2.eyeColor);
//console.log("Person three: " + person3.age + " " + person3.hairColor + " " + person3.eyeColor);
console.log('----------');

let values = [5,1,3,56,76,];
let largest = values[0];

for(let i=0;i<values.length;i++){
	if(largest < values[i])
		largest = values[i];
}

let list2 = [];
for(let i=0;i<=largest;i++){
	list2[i] = 0;
}
for(let i=0;i<list2.length;i++){
	list2[values[i]] = 1;
}
for(let i=0;i<list2.length;i++){
	if(list2[i] === 1){
		console.log(i);
	}
}
console.log('----------');

let values2 = [7,34,78,23,12,54];
let list3 = [];
for(let j = 0;j<values2.length;j++){
	let smallest = values2[j];
	for(let i=j;i<values2.length;i++){
		if(smallest > values2[i]){
			smallest = values2[i];
		}
	}
	list3[j] = smallest;
}
for(let i=0;i<list3.length;i++){
	console.log(list3[i]);
}




