// Loop through all numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
  // Check if number is divisible by 2 and 3
  if (i % 2 === 0 && i % 3 === 0) {
    console.log("The number " + i + " is divisible by 2 and 3");
  } 
  // Check if number is divisible by 3
  else if (i % 3 === 0) {
    console.log("The number " + i + " is divisible by 3");
  } 
  // Check if number is even
  else if (i % 2 === 0) {
    console.log("The number " + i + " is even");
  } 
  // If none of the above conditions are met, the number is odd
  else {
    console.log("The number " + i + " is odd");
  }
}
