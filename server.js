const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>WELCOME TO TAHI CLOUD WORLD</h1>'); // HTML message
  });

 app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
 });
