const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//PUS
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;
  res.send("the result of the calculation is " + result +"<br><a href='http://localhost:3000/'> back </a>");
});



//BMI
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(Math.pow(height,2));
      bmi = Math.round(result);
  res.send("the result of the calculation is " + bmi);
});





app.listen(3000,function(){
console.log("server is running on port 3000");
});
