import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import './Products.css'

const Products = () => {

     const [products, setProducts] = useState([]);
    

    useEffect(() => {
      const fetchProducts = async () => {

        const apiUrl = "https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products/"
       
        try {
             
        const response = await fetch(apiUrl);
        const data = await response.json()
        setProducts(data)
        
        
        
        } catch (error) {
          console.log("Error fetching products", error);
          
        } 
     

      }
      fetchProducts();
    }, [])

    /* const idInteger = parseInt(products.id) */




  return (
   <div className="container products">
    
          {products.map((product) => (

            <ProductCard key= {product.id} products= {product} />

         ))}
         
         </div>
  )
}

export default Products