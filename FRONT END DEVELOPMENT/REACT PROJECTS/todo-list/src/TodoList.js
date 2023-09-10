import React from 'react';

const TodoList = ({todos ,deleteHandler}) => {
  return (
    <div>
      {todos.map((todos ,index)=>
      <div>
        <h5>{todos} &nbsp;<button onClick={()=>deleteHandler(index)}>Delete</button> </h5>
        </div>)}

    </div>
  )
}

export default TodoList