const user={
    username:"himanshi",
    price:99,
    WelcomeMessage:function(){
        console.log(`${ this.username},Welcome to website`);
        console.log(this)//talk about curent value or context
    }
}

// user.WelcomeMessage()
// user.username="sam"
// user.WelcomeMessage()

// console.log(this)//{} empty object


// function chai(){
//     let username="himanshi"
//     console.log(this.username);
// }
// chai()                //all data


//regular function
// const chai = function(){
//     let username="himanshi"
//     console.log(this.username);
// }
// chai()            //undefined


//arrow function
// const chai=()=>{   //called arrow function
//     let username="himanshi"
//     console.log(this.username);
// }
// chai()            //undefine 


//Basic Arrow function
// const addTwo=(num1, num2)=>{
//     return num1+num2
// } //7

//implicit return
//const addTwo=(num1, num2)=> num1+num2 //7

//const addTwo=(num1, num2)=> (num1+num2)  //7

//return object
//const addTwo=(num1,num2)=>{username:"himanshi"} //undefined
//we need to wrap it in parantheses()
const addTwo=(num1,num2)=>({username:"himanshi"}) //{username:'himanshi'}


console.log(addTwo(3,4))


