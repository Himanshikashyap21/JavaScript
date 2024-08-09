//7 types: String, Number, boolean,null,undefined,symbol,BigInt
 const score=100
 const scoreValue=100.3
const isLoggedIn=false
 const outsidetemp=null
 let useEmail;
 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id===anotherId);
const bigNumber=1562236324792846365n



//reference (Non primitive)
//Array,Objects,Functions
const heros=["shaktiman","nagraj","doga"]
let myObj={
    name:"himanshi",
    age:20,

}
const myFunction=function(){
    console.log("hello");

}
console.log(typeof myFunction)//function
console.log(typeof heros)//object
console.log(typeof anotherId)//symbol

console.log(typeof bigNumber);  //bigInt
console.log(typeof outsidetemp) //object
console.log(typeof scoreValue)