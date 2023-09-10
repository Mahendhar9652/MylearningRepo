import React,{useState} from 'react';
import TodoList from  './TodoList';

function App() {
  const [task ,setTask]=useState("");
  const [todos,setTodos]=useState([]);

  const changeHandler =e=>{
    setTask(e.target.value);
  } 
  const submitHandler =e=>{
    e.preventDefault();
    const newTodos =[...todos,task];
    setTodos(newTodos);
    setTask("");
  }

  return (
    <div>
      <center>
        <div>
          <div>
            <div>
              <h5> Mahi Todo Management  Appplication</h5>
              <form onSubmit={submitHandler}>
                <input type="text" name="task" value={task} onChange={changeHandler}/><br/>
                <input type="submit" value="add" name="add"/>
              </form>
              <TodoList todolist={todos}/>


            </div>
          </div>
        </div>

      </center>
    </div>
  );
}

export default App;
