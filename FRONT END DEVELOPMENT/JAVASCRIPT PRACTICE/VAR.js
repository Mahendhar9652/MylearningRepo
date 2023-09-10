
   var first;
   var second;
   var result;

function addition(){ 
 
    first = document.getElementById("finput").value;
    second = document.getElementById("sinput").value;
    result = parseInt(first) + parseInt(second);
    document.getElementById("textArea").innerHTML=("total value :"+result);

}
function sub(){ 
   
    first = document.getElementById("finput").value;
    second = document.getElementById("sinput").value;
    result = parseInt(first) - parseInt(second);
    document.getElementById("textArea").innerHTML=("total value :"+result);

}
 
function mul(){ 

    first = document.getElementById("finput").value;
    second = document.getElementById("sinput").value;
    result = parseInt(first)*parseInt(second);
    document.getElementById("textArea").innerHTML=("total value :"+result);

}
 
function div(){ 
    
    first = document.getElementById("finput").value;
    second = document.getElementById("sinput").value;
    result = parseInt(first)/parseInt(second);
    document.getElementById("textArea").innerHTML=("total value :"+result);

}
function addition(x,y){
    return x+y;

}





console.log(addition(800,9));

let movies ={
    name:"rrr" ,
    year:2022,
    director:"ss"
}
console.log(movies);

console.log(movies);

console.log(input);

movies.budget="200";

movies.acotrs="ntr,ram ,alia";


document.getElementById("textArea").innerHTML=("movies");

btn2=document.getElementById("btn")




function convert(){
      
var name =prompt("Enter Your Name");
 var grade = prompt("enter your grade");
 grade = Number(grade);
 
 if( grade >= 101){
    console.log(name+"Please Enter Valid Grade");
    alert(name+"Please Enter Valid Grade");
 } 
  
 else if(grade>=80){
   console.log(name+" your are grade is "+ grade +" and your A student ");
   alert(name+" your are grade is "+ grade +" and your A student ");
 }

 else{
    console.log(name+" Your not grade below 80 then you b grade student");
    alert(name+" Your not grade below 80 then you b grade student");
  }
 



}


  var names = ["mahi","mahis","mahsi","wmahi"];
   

 
  console.log(sInput);

  var names ="mahi";

  console.log(names);










