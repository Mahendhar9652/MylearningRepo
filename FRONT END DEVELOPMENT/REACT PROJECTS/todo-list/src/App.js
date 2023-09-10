import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] =useState("");
  const [todos,setTodos] =useState([])
  const changeHandler=(e)=>{
   
    setTask(e.target.value);
    
  }
  const submitHandler=(e)=>{
    e.preventDefault();

    const newTodos =[...todos,task];
    setTodos(newTodos);
    setTask("");
 

  }
  const deleteHandler=(indexValue)=>{
    const newTodos = todos.filter((todos,index)=>index!==indexValue)
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name='task'value={task} onChange={changeHandler}></input>
              <input type="submit" value='add'name='add'></input>

            </form>
            <TodoList todos={todos} deleteHandler={deleteHandler}/>

          </div>
        </div>
      </center>
    </div>
  )
}

export default App