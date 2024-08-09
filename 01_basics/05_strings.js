const name="himanshi" //way to declare string
const repoCount=50
//console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String("vedio-game-com") //another way to declare striing
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("d"));


const newString=gameName.substring(0,4)
console.log(newString);


const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="    himanshi    "
console.log(newStringOne)
console.log(newStringOne.trim()); // remove space trim startand trim end 

const url="https://himanshi.com/himanshi%20kashyap"
console.log(url.replace('%20','-'))
console.log(url.includes('himanshi'))//true
console.log(url.includes('hcdsyd'))//false


console.log(gameName.split('-'))

