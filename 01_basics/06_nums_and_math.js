//***********NUMBERS********************************

const score=400
//console.log(score);

const balance=new Number(100)
// console.log(balance);

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(3))

const otherNumber=123.8966
//console.log(otherNumber.toPrecision(4));

const hundreds=1000000
//console.log(hundreds.toLocaleString('en-IN'));



//*************MATHS******************
// console.log(Math);
// console.log(Math.abs(-4)); //give +ve value only negative will change +ve num will not be -ve
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.6));//5
// console.log(Math.floor(4.6));//4
// console.log(Math.min(4,5,6,7,3));//3
// console.log(Math.max(4,6,8,5,9));//9
console.log(Math.random());//value between 0 or 1 like 0.1, 0.2, 0.4
console.log((Math.random()*10)+1);//chance to get value 0
console.log((Math.random()*10)+1);//add 1 because floor can give value 0 so avoid this add 1
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//do max-min because we get perticular range +1 to avoid 0 case 