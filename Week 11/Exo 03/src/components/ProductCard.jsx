import React from 'react'
import { useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {

   const [localStock, setLocalStock] = useState(products.stock); // Stock Localstate

    const handlePlusStock = async () => {
  
    try {
      const updatedStock = { ...products, stock: localStock +1 };

      const response = await fetch(`https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products/${products.id}`, {
        method: "PUT",  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStock),
      });

      if (response.ok) {
        setLocalStock((prevStock) => prevStock + 1); // Updates local stock in case of succes
      } else {
        console.error("Failed to update stock");
      }  


    
    } catch (error) {
      console.error("Error updating stock:", error);
    } 
  

};

const handleMinusStock = async () => {
  
    try {
      const updatedStock = { ...products, stock: localStock -1 };

      const response = await fetch(`https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products/${products.id}`, {
        method: "PUT",  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStock),
      });

      if (response.ok) {
        setLocalStock((prevStock) => prevStock - 1); // Updates local stock in case of succes
      } else {
        console.error("Failed to update stock");
      }  


    
    } catch (error) {
      console.error("Error updating stock:", error);
    } 
  

};

  return (
    <div className='product-card'>
        <img src={products.imgSrc} alt="Product Photo" />
        <div className="infos">
        <div className="title"><h1 className='title'>{products.title}</h1></div>
        <div className="price"><p className='price'>{products.price}{products.currency}</p></div>
        <p className="year">{products.year}</p>
        <div className="stockdiv"><p className="stock">{localStock} in stock</p><button
        onClick={handlePlusStock}>+</button><button
        onClick={handleMinusStock}>-</button></div>
        </div>
        <Link to={`/edit-product/${products.id}`}><button className='editBtn'>Edit</button></Link>

        </div>
  )
}

export default ProductCard