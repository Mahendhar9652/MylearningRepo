const express =require("express");
const bodyParser =require("body-parser");
const app =express();

app.use("view engine","ejs");

app.get("/",function(req,res){
  res.send("hello welcome mahi");
});

app.listen(3000,function(){
  console.log("server is runing at 3000");
});
