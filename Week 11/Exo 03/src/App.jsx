import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/add-product" element={ <AddProduct /> } />
         <Route path="/edit-product" element={ <EditProduct /> } />
      </Routes>
    </Router>
  )
}

export default App
