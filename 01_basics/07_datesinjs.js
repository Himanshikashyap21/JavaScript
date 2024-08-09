//Dates

let myDate=new Date()
console.log(myDate.toString()) //prints the current date and time
console.log(myDate.toLocaleDateString())//10/8/2024
console.log(myDate.toLocaleString())//10/8/2024 ,1:37:56 am
console.log(myDate.toLocaleTimeString())//1:37:56 am
console.log(myDate.toDateString())//Sat  Aug 10 2024
console.log(myDate.toISOString())//2024-08-09T20:07:56.681Z
console.log(myDate.toJSON())//2024-08-09T20:07:56.681Z
console.log(myDate.toTimeString())//1:37:56 GMT+0530 (India Standard time)
console.log(myDate.toUTCString())//Fri, 09 Aug 2024 20:07:56 GMT
console.log(myDate.getTimezoneOffset())//-330
console.log( typeof myDate)//object

// let mycreatedDate=new Date(2023,0,23)
// let mycreatedDate=new Date(2023,0,23,5,3)
// let mycreatedDate=new Date("2023-01-23")
// let myCreatedDate=new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate)//2024-08-09T20:27;31.998Z
console.log(newDate.getMonth()+1)//8
console.log(newDate.getDay())//6

newDate.toLocaleDateString('default',{
    weekday:'long',
})