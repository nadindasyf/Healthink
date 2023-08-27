import React, { useState, useEffect } from 'react';

const ApiExample = ({ darkMode }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const dropdownStyle ={
    backgroundColor: darkMode ? '#698269': '#42855B',
    border: 'none',
    margin: '3%'
  }

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={dropdownStyle}
        >
          Open Data
        </button>
        <ul className={`dropdown-menu ${darkMode ? 'dark' : ''}`} aria-labelledby="dropdownMenuButton">
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApiExample;