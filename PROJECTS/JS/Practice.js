const form = document.querySelector('#myform');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  const data = { username, password };
  console.log(data);
  
  const display = document.getElementById("display");
  display.innerHTML = `<ul><li>${username}</li></ul>`;
});
/*// function to compute the factorial of a number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4)); // output: 120
for (let i = 1; i <10; i++) {
  console.log(i);
}*/



function fact(num){
  let result =1;
  for(let i =1;i<num;i++){
    result *=i;
  }

  return result;
} 

console.log(fact(5))