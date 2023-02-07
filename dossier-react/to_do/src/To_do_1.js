import './To_do.css';
import React, { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleCheck = (index) => {
    const newTodos = [...todos];
    setDone([...done, newTodos.splice(index, 1)[0]]);
    setTodos(newTodos);
  };

  return (
    <div className='container' >
      <form onSubmit={handleSubmit} className='form-input' >
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          className='input-text'
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => handleCheck(index)}
            />
            {todo}
          </li>
        ))}
      </ul>
      <ul>
        <h3>Done:</h3>
        {done.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
