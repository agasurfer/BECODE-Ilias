import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({products}) => {

    const imgPath = products.imgSrc

  return (
    <div className='product-card'>
        <img src={products.imgSrc} alt="Product Photo" />
        <div className="infos">
        <div className="title"><h1 className='title'>{products.title}</h1></div>
        <div className="price"><p className='price'>{products.price}{products.currency}</p></div>
        <p className="year">{products.year}</p>
        <div className="stockdiv"><p className="stock">{products.stock} in stock</p><button>+</button><button>-</button></div>
        </div>
        <Link to="/edit-product"><button className='editBtn'>Edit</button></Link>

        </div>
  )
}

export default ProductCard