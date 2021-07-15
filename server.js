const express= require("express");
const bodyParser=require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const app= express();

app.get("/", function(req,res){
  res.send("Hellooo, World!!");
});

app.post("/save-products", (req, res) => {

    console.log(req);
  console.log("req.body in save-products route: ", req.body);
  res.send("jai hind!");
});


app.listen(3000,function(){
  console.log("server is tunning on port 3000");
});
