 var form =document.getElementById("form");
  var htno = document.getElementById("ht");
  var nameperson = document.getElementById("name");
  var dob = document.getElementById("dob");
  var display = document.getElementById("display");
  var no =document.getElementById("no");



  
  

   form.addEventListener('submit', event => {
     event.preventDefault();
     
     display.innerHTML = nameperson.value+"<br> "+htno.value+"<br> "+dob.value+"<br> "+no.value+"<br> ";


  
   });
function stars(){
  for(let i =0;i<6;i++){
    console.log("*".repeat(1));
    console.log("*".repeat(2));
    console.log("*".repeat(4));
    console.log("*".repeat(6));
    console.log("*".repeat(8));
  console.log("*".repeat(10));
  }
  
}
   stars();