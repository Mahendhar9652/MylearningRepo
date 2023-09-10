const express =require("express");
const app =express();
const https =require("https");
const bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){
  const query =req.body.cityName;
  const apikey="7f08bccf342cc40cd28be4460003f04e";
  const units ="metric";
   const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units;

  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const whetherData =JSON.parse(data)
      const temp =whetherData.main.temp
      const whetherDes=whetherData.weather[0].description
      const icon =whetherData.weather[0].icon
      const imageUrl="http:openweathermap.org/img/win/"+icon+"@2x.png"
      res.write("<p>The is currently "+whetherDes+"</p>");
      res.write("<h1>The temperature in "+query +" is "+temp+"Degree Celcius.</h1>");
  res.write("<img src="+imageUrl+">");
  res.send();
    });
  });
});
app.listen(3000,function(){
console.log("server is running on port 3000.");
});
