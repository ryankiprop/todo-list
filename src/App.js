import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './components/Todolist';

let data = [
  {

    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {

    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {

    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {

    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {

    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  }
]



function App() {

const [todos, seTodos] = useState(data)

  return (
    <div className='App'>
      <h1>To do list</h1>
      <Todolist todos={todos} title="this is react" />
    </div>
  )
}

export default App;

