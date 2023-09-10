import React,{useState} from 'react';
import './App.css';

function App() { 

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [message,setMessage]=useState('')
    const [key,setKey]=useState();
    
     
  
    async function fetchData() {
      const resposnse = await fetch('https://mahi-42a51-default-rtdb.firebaseio.com/todos.json');
      const resposnseJson = await resposnse.json();
    
      const keys = Object.keys(resposnseJson);
      setKey(keys)
      const todoList = keys.map(key => resposnseJson[key]);
      setTodos(todoList);
    }
  
   const addTodo = () => {
      if(!text){
        setMessage('Please Enter AnyThing');
  
      }else{
 fetch('https://mahi-42a51-default-rtdb.firebaseio.com/todos.json', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ text})
      }).then(
        console.log("Data is Submitted successfully :"+text)
      )
        .then(() => {
          const newTodos = [...todos, text];
          console.log(newTodos)
          setTodos(newTodos);
          console.log(todos)
          setText('');
        });}}
    const deleteTodo=(indexValue)=>{
         fetch(
        `https://mahi-42a51-default-rtdb.firebaseio.com/todos/${key[indexValue]}.json`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },})
      const newTodo =todos.filter((todo ,index)=>index !==indexValue)
      setTodos(newTodo);
  fetchData()
    
    }
  
  
      const updateTodo = (index) => {
  
      const todo = todos[index];
      const newTodos = [...todos];
      const newTodo = { ...todo, text: 'hello' };
      newTodos[index] = newTodo;
      fetch(
        `https://mahi-42a51-default-rtdb.firebaseio.com/todos/${key[index]}.json`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ text: newTodo.text }),
        }
      )
        .then(() => {
          console.log('Updated successfully : ' + key[index].text);
          setTodos(newTodos);
          setText('');
        })
        .catch((error) => {
          console.error(error);
        });
    };

  

  return (
    <>
      <div className='container'>
        <h2 className='heading'>Todo-List</h2>
        <form>
          <p>{message}</p>
          <input type='text' placeholder='Enter .....' className='input' value={text} onChange={(e)=>setText(e.target.value)}></input>
          <input  className='submit' type='submit'value='Add' onClick={addTodo()}></input>
          </form>
          <div className='items'>
            <ul>
            {todos.map((todo,index)=>
            <li key={index}>{todo.text}<button className='delete' onClick={()=>deleteTodo(index)}>❌</button>
            <button className='update' onClick={()=>updateTodo(index)}>Edit</button></li>
            )}
            </ul>
          </div>

      </div>
      </>
      
    
  );
}

export default App;
