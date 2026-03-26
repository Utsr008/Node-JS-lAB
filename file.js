//const add = (a, b) => a + b;
//const multiply = (a, b) => a * b;

//export default add;
//export { multiply };

//import fs from "fs";
//const output =fs.readFileSync("file.txt","utf-8");
//console.log(output);
//fs.writeFileSync("file.txt","File read successfully");
//fs.appendFileSync("file.txt","\nAppended successfully");
//fs.readFile("file.txt","utf-8",(err,output)=>{
  //  if(err){
//        console.log(err);
  //  }
    //console.log(output);
//});
//console.log("ended");
//import path from "path";
//const filePath=path.join ("C:\\Users\\utsr0\\Desktop\\Documents\\Node.js");
//const dynamicPath=path.join("text","file.txt");
//console.log(filePath);
//fs.readFile("file.txt","utf-8",(err,data)=>{
    //console.log(data);
//});
//const absolutePath=path.resolve("text","file.txt");
///console.log(absolutePath);

//const dirName=path.dirname("C:\\Users\\utsr0\\Desktop\\Documents\\Node.js\\text\\file.txt");
//console.log(dirName);

//import os from "os";
//os.platform();
//console.log(os.platform());
//os.freemem();
//console.log(os.freemem());

//const utils=require("./utils.js");
//const {add}=utils;
//console.log("destructuring add (2,3);",add(2,3));
//console.log("dot multiply (2,3);",utils.multi(2,3));
//console.log("bracket add(2,3);",utils["add"](2,3));

//call stack,event loop, callback
//console.log("start");

//url  17feb
//https:// -> protocol
//glauniversity.in -> domain
// /UploadAttendance -> path
//?access_key=12345 -> query string
// #key -> hash


//const[, , functionName,value1,value2] = process.argv;
//const.functionName=process.argv[2];
//console.log(functionName);
//const value1=process.argv[3];
//console.log(value1);
//const value2=process.argv[4];
//console.log(value2);

//if(functionName==="add"){
 //   console.log("addition",Number(value1)+Number(value2));
//}

//if(functionName==="multiply"){
 //   console.log(value1*value2);
//}


//const http = require("http");
//const server = http.createServer((req, res) => {
//  const requestUrl = req.url;
 // console.log(requestUrl);
  //const requestMethod = req.method;
  //console.log(requestMethod);
  //if (requestUrl === "/") {
    //res.end("Welcome to the home page");
  //}
  //if(requestUrl === "/about") {
    //res.end("Welcome to the about page");
  //}
   //if(requestUrl === "/contact") {
    //res.end("Welcome to the contact page");
  //}
//});
//server.listen(3000);




