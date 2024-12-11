import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './EditProduct.css'

const EditProduct = () => {

 const { id } = useParams(); // Gets id from url
  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({
    title: '',
    price: '',
    currency: '',
    year: '',
    stock: '',
    imgSrc: '',
  });

  // useEffect to load the product Data at page opening
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products/${id}`);
        if (response.ok) {
          const productData = await response.json();
          
          setFormData(productData); //Fills  the inputs with the fetched data
        } else {
          toast.error('Failed to load product data.');
        }
      } catch (error) {
       
      } 
    };
    fetchProduct();
  }, [id]);

  // Function declaration handle user changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Function declaration to change data on the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success(`Product ${formData.title} updated successfully!`, {
           style: {
            background: "#3E86C5",
            color: "#f6ff00"
           }
        });
        navigate('/'); 
      } else {
        toast.error('Failed to update product.');
      }
    } catch (error) {
      toast.error('Error updating product.');
    }
  };

  

  const handleDelete = async (e) => {
    e.preventDefault()

     const confirmDelete = window.confirm(`Are you sure you want to delete ${formData.title}?`);
  
  if (!confirmDelete) {
    return; // if not confirmed, it doesn't go further
  }
    try {
      const response = await fetch(`https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        toast.success(`${formData.title} deleted successfully!`, {
          style: {
            background: "#3E86C5",
            color: "#f6ff00"
           }
        });
        navigate('/');
      } else {
        toast.error('Failed to delete product.');
      }
    } catch (error) {
      toast.error('Error deleting product.');
    }
  };




  return (
    <div className='container'>
        <NavBar />
        <form className="container editForm" onSubmit={handleSubmit}  >
          <label htmlFor="title">Enter the products name</label>
          <input type="text"
          id='title' 
          className="title"
          value={formData.title}
          name='title'
          onChange={handleInputChange}
          
           />
         
          <label htmlFor="price">Enter the price of the product</label>
          <input type="text"
          id='price'
          className='price'
          name='price'
          value={formData.price}
          onChange={handleInputChange}
          
           />
          
          <label>Enter currency of the product</label>
          <input 
          id='currency' 
          name="currency"
          value={formData.currency}
          onChange={handleInputChange}
          
          
          /> 
          <label htmlFor="year">Enter year of production</label>
          <input type="text"
          id='year'
          className='year'
          name='year'
          value={formData.year}
          onChange={handleInputChange}         
          />
         
          <label htmlFor="stock">Enter the available stock of the product</label>
          <input type="text"
          id='stock' 
          className="stock"
          name='stock'
          value={formData.stock}
          onChange={handleInputChange}
          
           />
          
          <label htmlFor="imgSrc">Copy url of the image of the product</label>
          <input type="text"
          id='imgSrc'
          className="imgSrc"
          name='imgSrc'
          value={formData.imgSrc}
          onChange={handleInputChange}
          
           />
          <div className='btngroup'>
          <button type="submit" 
          className='editBtn'
          >Edit</button>
          <button 
          className="deleteBtn"
          onClick={handleDelete}>Delete</button>
          </div>
   
        </form>
        <Footer />
        </div>
  )
}

export default EditProduct