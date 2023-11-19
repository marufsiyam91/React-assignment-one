import React from 'react'
import '../Product/Product.css'

function Product({product}) {
    const {productName, price, imageURL} = product
  return (
    <div className='cart_container'>
            <div className='product_cart'>
                  <img src={imageURL} alt="" />
                  <h3>Product: {productName}</h3>
                  <p>Price: {price}</p>
            </div>
    </div>
  )
}

export default Product
