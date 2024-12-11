import React from 'react'
import { useState, useEffect } from 'react'
import './HomePage.css'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    
        <div className='container'>
            <NavBar />
            <Products />
            <Footer />


        </div>
    
  )
}

export default HomePage