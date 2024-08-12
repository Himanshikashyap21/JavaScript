// (for of) array specific loop

//["","",""]
//[{},{},{}]

// const arr=[1,2,3,4,5]
// for (const num of arr){
//     console.log(num);
// }


// const greetings="Hello World!"
// for(const greet of greetings){
//    // console.log(`EACH char is ${greet}`)
// }


//MAP
//MAP objects are collection of key-value pairs , it is unique in the map's collection
// const map=new Map()
// map.set('IN',"INDIA")
// map.set('USA',"United state of America")
// map.set('Fr',"France")
//console.log(map);


for (const [key,value] of map) {   //called forof loop,  [key]=>we can hold key and value saparately called array destructure
     console.log(key , ',' ,value)
}

const  myobj={
    'name1':'jcns',
    'name2':'spiderman'
}



// for(const[key,value] of Object){
//     console.log(key,',',value)
// }


