//aaray

//const myArr=[0,1,2,3,4,5,true,"Hiamsnhi"]
const myArr=[0,1,2,3,4,5]
//console.log(myArr[1]);
const myHeors =["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


// myArr.unshift(9)//add 9 starting of array
// myArr.shift()


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))


// const newArr=myArr.join()

// console.log(myArr);//[0,1,2,3,4,5]
// console.log(typeof newArr)//0,1,2,3,4,5
// console.log(typeof newArr)//string


//slice=> The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.
//splice=> The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.

console.log("A", myArr)//A [0,1,2,3,4,5]
const myn1=myArr.slice(1,3)//print value between 1to 3 index 3 is not include
console.log(myn1)//[1,2]
console.log("B",myArr)//B [0,1,2,3,4,5]

const myn2=myArr.splice(1,3)//include 3 index
console.log(myn2)
