import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='container navbar'>
        <div className="logo"><h1><span>Becode</span> Hardware</h1>
        </div>
        <div  className="navlinks">
            <Link className='navlink' to="/">Manager Tool</Link>
            <Link className='navlink' to="/add-product">Add Product</Link>
            <Link className='navlink' to="#">About Us </Link>
            <Link className='navlink' to="#">Contact </Link>
            
        </div>
        
    </div>
  )
}

export default NavBar