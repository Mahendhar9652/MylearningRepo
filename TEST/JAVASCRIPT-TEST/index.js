//loop through all number 1 to 100
for(var i=1;i<=200;i++){
  //check if number is divisible by two and three
  if(i % 2 ===0 && i % 3===0){
    console.log("The number "+i+" divisible by three and two ");
    //check if number is even
  }else if(i%2===0){
    console.log("The Number "+i+" is even ");
    // check if number is divisible by three
  }else if(i%3 ===0){

    console.log("The Number "+i+" divisibl by two and three ");
  }
  // if none of above conditions are met ,number is odd
  else{
    console.log("The number "+i+" odd" );
  }
}