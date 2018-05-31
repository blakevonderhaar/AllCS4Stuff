/**
 * http://usejsdoc.org/
 */
console.log('----------');
console.log('Calculator');
console.log('----------');
const Operator = {
	ADD:0,SUBTRACT:1,MULTIPLY:2,DIVIDE:3,FACTORIAL:4,EXPONENT:5
}

calc(Operator.ADD,99,3);
calc(Operator.SUBTRACT,53,22);
calc(Operator.MULTIPLY,75,56);
calc(Operator.DIVIDE,6,3);
calc(Operator.FACTORIAL,4,3);
calc(Operator.EXPONENT,2,6);

function calc(op,num1,num2){

	switch(op){
		case Operator.ADD:
		console.log(num1 + ' + ' + num2 + ' = ' + (num1+num2));
		break;

		case Operator.SUBTRACT:
		console.log(num1 + ' - ' + num2 + ' = ' + (num1-num2));
		break;

		case Operator.MULTIPLY:
		console.log(num1 + ' * ' + num2 + ' = ' + (num1*num2));
		break;

		case Operator.DIVIDE:
		console.log(num1 + ' / ' + num2 + ' = ' + (num1/num2));
		break;

		case Operator.FACTORIAL:
		let num3 = 1;
		for(let i = 1;i<=num1;i++){
			num3*=i;
		}
			console.log("!" + num1 +' = ' + (num3));
		break;

		case Operator.EXPONENT:
		let num4 = 1;
		for(let i = 0;i<num2;i++)
			num4*=num1;
		console.log(num1 + '^' + num2 + ' = ' + (num4));
		break;

		default: console.log(0);
	}
}
console.log('----------');
