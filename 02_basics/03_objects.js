//singleton

//Object.create
//Object literals

const mySym=Symbol("key1")//symbol declare

const JsUser={
    name:"Himanshi",
    "fullname":"himanshi kashyap",
    [mySym]:"mykey1",//symbol declare
    age:20,
    location:"aligarh",
    email:"himanshi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}

// console.log(JsUser.email)//himanshi@google.com
// console.log(JsUser["email"])//himanshi@google.com
// console.log(JsUser["fullname"])//himanshi kashyap
// console.log(JsUser[mySym])//mykey1
//console.log(typeof JsUser.mySym)//mySym:"mykey1" give string


JsUser.email="himanshi@chatgpt.com"
//Object.freeze(JsUser) 
JsUser.email="himanshi@microsoft.com"
console.log(JsUser) 


JsUser.greeting=function(){
    console.log("hello js user");
}

JsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}

//console.log(JsUser.greeting)//[Function (anonymous)]
//console.log(JsUser.greeting())//hello js user


//=>after using backticks 
console.log(JsUser.greeting());//hello js user
console.log(JsUser.greetingTwo());//hello js user,Himanshi