import React,{useState} from 'react';
import './App.css';

function App() { 
  const [items ,setItems]=useState('');
  const [todos ,setTodos] =useState([]);


  const submit=(e)=>{
    e.preventDefault();
    if(!items){
      alert("Please Enter");
      return;
    }
    const newTodos =[...todos ,items];
    setTodos(newTodos);
    setItems('');
  }
  const deleteitem=(indexValue)=>{
    const newTodo =todos.filter((todo ,index)=>index !==indexValue)
    setTodos(newTodo);

  
  }

  

  return (
    <>
      <div className='container'>
        <h2 className='heading'>Todo-List</h2>
        <form onSubmit={submit}>
          <input type='text' placeholder='Enter .....' className='input' value={items} onChange={(e)=>setItems(e.target.value)}></input>
          <input  className='submit' type='submit'value='Add' ></input>
          </form>
          <div className='items'>
            <ul>
            {todos.map((todo,index)=>
            <li key={index}>{todo}<button className='delete' onClick={()=>deleteitem(index)}>❌</button></li>
            )}
            </ul>
          </div>

      </div>
      </>
      
    
  );
}

export default App;
