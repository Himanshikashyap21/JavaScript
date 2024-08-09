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



//memory (1)Stack[primitive][copy ]
//memory (2)Heap[non primitive][reference]

let myname="himanshi" 
let anothername=myname
anothername="jasndjk"

console.log(myname)
console.log(anothername)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"

}

let userTwo=userOne
userTwo.email="hiamsnhi@google.com"
console.log(userOne.email)
console.log(userTwo.email)