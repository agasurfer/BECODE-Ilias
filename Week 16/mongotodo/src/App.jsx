import React from 'react'
import { useEffect, useState } from 'react';
import './App.css'

const App = () => {

const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('');

    // Fetch tous les todos
    const fetchTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };


     const addTodo = async (e) => {
        e.preventDefault(); 
        try {
            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todo: newTodo }), 
            });
            if (response.ok) {
                setNewTodo(''); 
                fetchTodos(); 
            }
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    // Supprimer un todo
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'DELETE',
            });
            fetchTodos(); 
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    useEffect(() => {
        fetchTodos(); 
    }, []);

        

  return (
    <div className='container'>
      <form onSubmit={addTodo}>
        <label htmlFor="newTodo"> Insert your Todo
         
        </label>
        <div className="addTodo">
        <input className='newTodo' 
        id='newTodo' 
        name='newTodo' 
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} />

        
        <button type="submit">➕</button></div>
        
      </form>

      <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.todo}{' '}
                        <button 
                        onClick={() => deleteTodo(todo._id)}
                        className='deletebtn'>🗑️</button>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default App
