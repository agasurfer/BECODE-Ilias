
import React, {useState, useEffect} from 'react'
import './App.css'

const App = () => {

//USESTATES

const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState("");
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
        setNewTodo(""); 
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



// Function to handle Todo edits

const handleEdit = (idToEdit) => {
  // Find the todo to be edited
  const todoToEdit = todos.find((todo) => todo.id === idToEdit);

   setEditingTodo(todoToEdit);
  
  setNewTodo(todoToEdit.todo);


};

// Async function declaration that updates the todo in the server


const handleUpdateTodo = async () => {
  if (newTodo.trim() !== '' && editingTodo !== null) {
    try {
      const updatedTodo = { ...editingTodo, todo: newTodo };

      const response = await fetch(`http://localhost:3000/todos/${editingTodo.id}`, {
        method: "PUT",  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      if (response.ok) {
        // Update ul list localy
        setTodos(todos.map((todo) => (todo.id === editingTodo.id ? updatedTodo : todo)));
        setEditingTodo(null); //Go back to "adding mode"
        setNewTodo(""); // Erase input field
      } else {
        console.error("Failed to update todo");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }
};


// Logic to toggle the button add/edit
const handleAddOrUpdateTodo = () => {
  if (editingTodo !== null) {
    handleUpdateTodo();
  } else {
    handleAddTodo();
  }
};


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
      onChange={(e) => setNewTodo(e.target.value)} />
      <button 
      className='addTodo'
      type='submit'
      onClick={handleAddOrUpdateTodo}
      >{editingTodo !== null ? 'Edit' : 'Add'}</button>
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