import React from 'react'
import './ProductCard.css'

const ProductCard = ({products}) => {

    const imgPath = products.imgSrc

  return (
    <div className='product-card'>
        <img src={products.imgSrc} alt="Product Photo" />
        <div className="infos">
        <div className="title"><h1 className='title'>{products.title}</h1></div>
        <div className="price"><p className='price'>{products.price}{products.currency}</p></div>
        <p className="year">{products.year}</p>
        <p className="stock">{products.stock} in stock</p>
        </div>

        </div>
  )
}

export default ProductCard