import React from 'react';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import './AddProduct.css';

const AddProduct = () => {

const [addingProducts, setAddingProducts] = useState([]);
const [newData, setNewData] = useState("")


//FUNCTION DECLARATION THAT HANDLES THE CHANGES IN THE ADDING INPUTS

const handleAddChange = (e) => {

 

  const name = e.target.name;
  const value = e.target.value



    setNewData((prev) => {
      return {...prev,[name]: value};
    })

    console.log(newData);

  }
  console.log(newData);
  

//ASYNC FUCTION DECLARATION THAT ADDS PRODUCT ON THE API

const handleAddProduct = async () => {

  if (newData.trim() !== "") { 
  newProductCard = {
  products : {newData}
  }
   try {
      const response = await fetch("https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductCard),
      });

      if (response.ok) {
        const createdProduct = await response.json();
        setAddingProducts({...products, createdProduct}); 
        setAddingProducts(""); 
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

}



  return (
    <div className='container'>
        <NavBar />
        <form className="container addForm">
          <label htmlFor="title">Enter the products name</label>
          <input type="text"
          id='title' 
          className="title"
          name='title'
          placeholder='Enter the name of the product'
          onChange={(e) => handleAddChange(e)} />
          <label htmlFor="price">Enter the price of the product</label>
          <input type="text"
          id='price'
          className='price'
          name='price'
          placeholder='Enter the price of the product'
          onChange={(e) => handleAddChange(e)} />
          <label>Choose a currency from this list</label>
              <input list="currency"
              id='currency' 
              name="currency"
              onChange={(e) => handleAddChange(e)}
              />  
             
          <datalist id="currency">
          <option value="€" />
          <option value="$" />
          <option value="£" />
          </datalist>
          <label htmlFor="year">Enter year of production</label>
          <input type="text"
          id='year'
          className='year'
          name='year'
          placeholder='Enter year of production'
          onChange={(e) => handleAddChange(e)}  />
          <label htmlFor="stock">Enter the available stock of the product</label>
          <input type="text"
          id='stock' 
          className="stock"
          name='stock'
          placeholder='Enter the available stock of the product'
          onChange={(e) => handleAddChange(e)} />
          <label htmlFor="imgSrc">Copy url of the image of the product</label>
          <input type="text"
          id='imgSrc'
          className="imgSrc"
          name='imgSrc'
          placeholder='https://mywonderfulpicture.products'
          onChange={(e) => handleAddChange(e)} />

          <button type="submit" 
          className='addBtn'
          onClick={handleAddProduct}>Add</button>
   
        </form>
        </div>
  )
}

export default AddProduct