const {readFile, writeFile}  = require("fs");
console.log("start1");
 readFile("./content/first.txt", "utf8",  (error, result)=>{
    if(error){
        console.log(error)
        return;
    }
   const first = result;
   readFile("./content/second.txt", "utf8",  (error, result)=>{
    if(error){
        console.log(error)
        return;
    }
   const second = result;
writeFile("./content/result.txt", `here is the result: ${first}, ${second}`, (error, result) => {
    if(error){
        console.log(error)
        return;
    }
    console.log("i am done2");
} )
})
   
})
//console.log("i am doing with this");
console.log("i am starting new one3");