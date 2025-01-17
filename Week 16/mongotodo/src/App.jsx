import React from 'react'
import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {

const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = ('');




  return (
    <div className='container'>
      <form action="" method="post">
        <label htmlFor="newTodo"> Insert your Todo
         
        </label>
         <div className="addTodo"><input className='newTodo' id='newTodo' name='newTodo' type="text" />
         <button type="submit">Add</button></div>
        
      </form>
    </div>
  )
}

export default App
