import React, {useState, useEffect } from 'react'
const App = () =>{

const [todos, setTodos] = useState([])
  
useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => setTodos(data))
  .catch((e)=> console.log(e))

}, [])
return (
  <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            { }
            {todo.title} - {}
          </li>
        ))}
      </ul>
    </div>
);
}

export default App;

