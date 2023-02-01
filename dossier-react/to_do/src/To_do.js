import './To_do.css';
import React, { useState } from 'react';

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [done, setDone] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    setTodo([...todo, input]);
    setInput('');
  };

  const handleCheck = (index) => {
    const item = todo[index];
    setTodo(todo.filter((_, i) => i !== index));
    setDone([...done, item]);
  };

  return (
    <div className='container' >
      <input className='input_text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className='bouton' onClick={handleAdd}>Add</button>
      <div className='container-todo' >
        <h3>Todo</h3>
        <ul className='item-todo' >
          {todo.map((item, index) => (
            <li key={index}>
              <input type="checkbox" onChange={() => handleCheck(index)} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='container-done' >
        <h3>Done</h3>
        <ul className='item-done' >
          {done.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

