const fruits=["Mango","Apple","Banana"]
const vegetables=["Potato","Carrot","Radish"]

fruits.push(vegetables)

console.log(fruits)
console.log(fruits[3][1])

//const all=fruits.concat(vegetables)
console.log(all)

const all=[...fruits,...vegetables]
console.log(all)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("done"))//false
console.log(Array.from("done"))//['d','o','n','e']
console.log(Array.from({name:"done"}))// []=> give empty array not able to convert

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//[100,200,300]
