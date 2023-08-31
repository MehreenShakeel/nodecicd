const express = require("express");
const app = express();
const port = 3000;

console.log("hello world!");

 app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
 });