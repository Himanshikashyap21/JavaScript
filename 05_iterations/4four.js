const  myobj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myobj) { //for in loop => give keys 
    //console.log(myobj[key]);//value => javascript c++ ruby, swift by apple
    //console.log(key); // print keys=> js cpp rb swift
    //console.log(`${key} shortcut is for ${myobj[key]}`); // key, value pair
}


const pro=["js","java","py","cpp","rb"]
for (const key in pro) {
 //   console.log(key)
}



const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"United state of America")
map.set('Fr',"France")
for (const key in map) {
    console.log(key)//this {MAP} is not itrratable
}