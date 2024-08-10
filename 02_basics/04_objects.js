//const tinderUser=new Object() //empty object singleton {}
const tinderUser={}//{} empty object non singleton
tinderUser.id="123abs"
tinderUser.name="JohnDoe"
tinderUser.isLoggedIn=false
// console.log(tinderUser)
const regularUser={
    email:"asd@gmail.com",
    fullname:{
        userfullname:{
            firstname:"himanshi",
            lastname:"kashyap"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3)

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));//array datatype
// console.log(Object.values(tinderUser));//array datatype
// console.log(Object.entries(tinderUser));//array datatype
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true
// console.log(tinderUser.hasOwnProperty('isLogged'));//false



const course={
    coursename:"js in hindi",
    price:"99",
    courseinstructor:"hitesh"
}

//course.courseinstructor
const {courseinstructor:instructor}=course//object de-structur
console.log(instructor)

// {
//     "name": "himanshi",
//     "coursename":"js in hindi",
//     "price": "999"
// }

[
    {},
    {},
    {}
]