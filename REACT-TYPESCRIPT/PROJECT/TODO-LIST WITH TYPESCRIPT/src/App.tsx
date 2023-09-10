import { useState } from "react";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [updateTodo, setUpdateTodo] = useState<Todo | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo !== "") {
      const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
      const newTodoItem: Todo = { id: newId, text: newTodo, done: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleUpdateTodo = () => {
    if (updateTodo) {
      const newTodos = todos.map((todo) => {
        if (todo.id === updateTodo.id) {
          return { ...todo, text: updateTodo.text };
        }
        return todo;
      });
      setTodos(newTodos);
      setUpdateTodo(null);
    }
  };

  const handleTodoClick = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleEditClick = (todo: Todo) => {
    setUpdateTodo(todo);
    setNewTodo(todo.text);
  };

  const handleCancelUpdate = () => {
    setUpdateTodo(null);
    setNewTodo("");
  };

  const handleDeleteClick = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="form">
        <input type="text" value={newTodo} onChange={handleInputChange} />
        {updateTodo ? (
          <>
            <button onClick={handleUpdateTodo}>Update</button>
            <button onClick={handleCancelUpdate}>Cancel</button>
          </>
        ) : (
          <button onClick={handleAddTodo}>Add</button>
        )}
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : ""}>
            <span onClick={() => handleTodoClick(todo.id)}>{todo.text}</span>
            <div className="actions">
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
