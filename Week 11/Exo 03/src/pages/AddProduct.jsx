import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './AddProduct.css';

const AddProduct = () => {

  const navigate = useNavigate();


  const [newData, setNewData] = useState({
    title: '',
    price: '',
    currency: '€',
    year: '',
    stock: '',
    imgSrc: ''
  });

  const [addedProducts, setAddedProducts] = useState([]);

  const [validationErrors, setValidationErrors] = useState({});

  // Validation des données avant envoi
  const validateProductData = () => {
    const errors = {};

    // Validation du titre
    if (!newData.title.trim()) {
      errors.title = "Product must have a name";
    }

    // Validation du prix
    if (!newData.price || isNaN(parseFloat(newData.price))) {
      errors.price = "Price must me a valid number";
    }

    // Validation de l'année
    const currentYear = new Date().getFullYear();
    if (!newData.year || 
        isNaN(parseInt(newData.year)) || 
        parseInt(newData.year) < 1900 || 
        parseInt(newData.year) > currentYear + 5) {
      errors.year = "Year must be between 1900 and 5 years from now";
    }

    // Validation du stock
    if (!newData.stock || isNaN(parseInt(newData.stock)) || parseInt(newData.stock) < 0) {
      errors.stock = "Invalid Stock";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
//FUNCTION DECLARATION THAT HANDLES THE CHANGES IN THE ADDING INPUTS

const handleAddChange = (e) => {

 

  const name = e.target.name;
  const value = e.target.value



     setNewData(prev => ({
      ...prev,
      [name]: value
    }));
    // Efface l'erreur spécifique quand l'utilisateur corrige
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    

  }
 
  

//ASYNC FUCTION DECLARATION THAT ADDS PRODUCT ON THE API

const handleAddProduct = async (e) => {

  e.preventDefault();

  if (!validateProductData()) {
      return; // Arrête si validation échoue
    }
   
   
    try {
      const response = await fetch("https://6756f733c0a427baf94b2bb5.mockapi.io/react-training-api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        
        const createdProduct = await response.json();
        
        setAddedProducts((prev) => [...prev, createdProduct]); 
          setNewData({
          title: '',
          price: '',
          currency: '€',
          year: '',
          stock: '',
          imgSrc: ''
        });  

         toast.success(`Produit "${newData.title}" ajouté avec succès !`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            background: "#6E75BF",
            color: "#f6ff00"
          }
        });

    

        navigate('/');

      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }





  return (
    <div className='container'>
        <NavBar />
        <form className="container addForm" onSubmit={handleAddProduct}>
          <label htmlFor="title">Enter the products name</label>
          <input type="text"
          id='title' 
          className="title"
          name='title'
          value={newData.title || ""}
          placeholder='Enter the name of the product'
          onChange={(e) => handleAddChange(e)} />
          {validationErrors.title && <p className='error'>{validationErrors.title}</p>}
          <label htmlFor="price">Enter the price of the product</label>
          <input type="text"
          id='price'
          className='price'
          name='price'
          value={newData.price || ""}
          placeholder='Enter the price of the product'
          onChange={(e) => handleAddChange(e)} />
          {validationErrors.price && <p className='error'>{validationErrors.price}</p>}
          <label>Enter currency of the product</label>
          <input 
          id='currency' 
          name="currency"
          placeholder='€'
          value={newData.currency || ""}
          onChange={(e) => handleAddChange(e)}
          /> 
          <label htmlFor="year">Enter year of production</label>
          <input type="text"
          id='year'
          className='year'
          name='year'
          value={newData.year || ""}
          placeholder='Enter year of production'
          onChange={(e) => handleAddChange(e)}  />
          {validationErrors.year && <p className='error'>{validationErrors.year}</p>}
          <label htmlFor="stock">Enter the available stock of the product</label>
          <input type="text"
          id='stock' 
          className="stock"
          name='stock'
          value={newData.stock || ""}
          placeholder='Enter the available stock of the product'
          onChange={(e) => handleAddChange(e)} />
          {validationErrors.stock && <p className='error'>{validationErrors.stock}</p>}
          <label htmlFor="imgSrc">Copy url of the image of the product</label>
          <input type="text"
          id='imgSrc'
          className="imgSrc"
          name='imgSrc'
          value={newData.imgSrc || ""}
          placeholder='https://mywonderfulpicture.products'
          onChange={(e) => handleAddChange(e)} />

          <button type="submit" 
          className='addBtn'
          >Add</button>
   
        </form>
        <Footer />
        </div>
  )
}

export default AddProduct