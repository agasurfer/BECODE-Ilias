import React from 'react'
import { useState, useEffect } from 'react'
import './HomePage.css'
import NavBar from '../components/NavBar'
import Products from '../components/Products'

const HomePage = () => {
  return (
    
        <div className='container'>
            <NavBar />
            <Products />


        </div>
    
  )
}

export default HomePage