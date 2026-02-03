//const add = (a, b) => a + b;
//const multiply = (a, b) => a * b;

//export default add;
//export { multiply };

import fs from "fs";
//const output =fs.readFileSync("file.txt","utf-8");
//console.log(output);
//fs.writeFileSync("file.txt","File read successfully");
//fs.appendFileSync("file.txt","\nAppended successfully");
fs.readFile("file.txt","utf-8",(err,output)=>{
    if(err){
        console.log(err);
    }
    console.log(output);
});
console.log("ended");