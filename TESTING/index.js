







fetch('https://mahi-42a51-default-rtdb.firebaseio.com/todos.json')
  .then(response => response.json())
  .then(todos => {

  let keys =Object.keys(todos)
  console.log(keys);
 let data = keys.map(key=>todos[key])
  data.map((text,index)=>{
    console.log(text);
   })
  });





