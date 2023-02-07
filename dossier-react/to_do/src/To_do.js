import './To_do.css';
import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleCheckbox = index => {
    setDone([...done, todos[index]]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className='container' >
      <form onSubmit={handleSubmit} className='form-input' >
        <input
          type="text"
          value={todo}
          placeholder='  tap here the todo...'
          onChange={e => setTodo(e.target.value)}
          className='input-text'
        />
      </form>
      <div className='todo-done' >
      <div className='table-todo' >
        <h3>Todo</h3>
         <ul>
           {todos.map((todo, index) => (
             <li key={index}>
               <input type="checkbox" onClick={() => handleCheckbox(index)} />
               { todo}
              </li>
            ))}
          </ul>
      </div>
      <div className='table-done'  >
        <h3>Done</h3>
         <ul>
           {done.map((todo, index) => (
             <li key={index}>{todo}</li>
            ))}
          </ul>
      </div>
      </div>
    </div>
  );
};

export default TodoList;
