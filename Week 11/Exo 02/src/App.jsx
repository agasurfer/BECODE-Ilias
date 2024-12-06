
import React, {useState, useEffect} from 'react'
import './App.css'

const App = () => {

//USESTATES

const [todos, setTodos] = useState([]);
const [newTodo, setnewTodo] = useState("");
const [editingTodo, setEditingTodo] = useState(null);

//Async function declaration that adds todo to the "server"

const handleAddTodo = async () => {
  if (newTodo.trim() !== '') {
    const newTodoItem = { todo: newTodo };

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodoItem),
      });

      if (response.ok) {
        const createdTodo = await response.json();
        setTodos([...todos, createdTodo]); 
        setnewTodo(""); 
      } else {
        console.error("Failed to add todo:");
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }
};

//async fuction declaration that deletes todo from the "server"
 const handleDelete = async (idToDelete) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${idToDelete}`, {
        method: "DELETE",
      });
      
      if (response.ok) {
        
        setTodos(todos.filter(todo => todo.id !== idToDelete));
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  //function declaration to handle edit process

  const handleEdit = (idToEdit) => {
  // Find the todo to be edited
  const todoToEdit = todos.find((todo) => todo.id === idToEdit);
  
  // Set the editing state
  setEditingTodo(todoToEdit);
  setNewTodo(todoToEdit.todo);
};

  //async function declaration to save edited todos


//USEEFFECT

//async function that fetches todos fromt the "server"

useEffect(() => {
  const fetchTodos = async () => {
    
    try {
      const response = await fetch("http://localhost:3000/todos"); 
      if (response.ok) {
        const data = await response.json();
        setTodos(data); 
      } else {
        console.error("Failed to fetch todos");
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  fetchTodos();
}, []);






  return (
    <div className='container'>
      <h1 className='head'>My Incredible Todo List</h1>
      <div className="todoField">
      <input 
      type="text" 
      className='todoInput'
      placeholder='Insert Todo'
      value={newTodo}
      onChange={(e) => setnewTodo(e.target.value)} />
      <button 
      className='addTodo'
      type='submit'
      onClick={handleAddTodo}
      >Add</button>
      </div>

      {todos.length !== 0 && 
      
      <ul className="list">

          {todos.map((todo) => (
    <li key={todo.id}>
      {todo.todo}
      <div className='buttons'> 
      <button onClick={() => handleDelete(todo.id)} className="deleteButton">&times;</button>
      <button onClick={() => handleEdit(todo.id)} className="editButton">&#9998;</button>
      </div>
    </li>
  ))}

      </ul>}
    </div>
  )
}

export default App