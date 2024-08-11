//Immidiately Invoked Function Expressions(IIFE)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.


//Avoid polluting the global namespace Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.


//named iife
(function chai(){
    console.log(`DB CONNNETED`)
})();//here semicolon is important ; to execute to iife  otherwise it gives a error



//simple iife
((name)=>{
    console.log(`DB CONNNETED AGAIN ${name}`)
})('himanshi')
