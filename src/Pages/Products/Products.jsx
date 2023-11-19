import React from 'react'
import Product from '../../Components/Product/Product'
// import Product from '../Product/Product'
// import '../Products/Products.css'
import './Products.css'

function Products() {
    const Products =[
        {
            productName: "Smartphone",
            price: 35000,
            imageURL: "https://i.postimg.cc/Hk8RK7nR/pngegg.png",
          },
          
          
          {
            productName: "Headphones",
            price: 3500,
            imageURL: "https://i.postimg.cc/L4vcZpGC/pngegg-1.png",
          },
          
          {
            productName: "Speaker",
            price: 2500,
            imageURL: "https://i.postimg.cc/cJq2N48H/pngegg-2.png",
          },
          
          {
            productName: "Keyboard",
            price: 2200,
            imageURL: "https://i.postimg.cc/d16xd2Nk/pngegg-3.png",
          },
          
          {
            productName: "Mouse",
            price: 1300,
            imageURL: "https://i.postimg.cc/y6vrfT1v/pngegg-8.png",
          },
          {
            productName: "airbuds",
            price: 2700,
            imageURL: "https://i.postimg.cc/X7JTfPbV/pngegg-4.png",
          },
          {
            productName: "watch",
            price: 5100,
            imageURL: "https://i.postimg.cc/sDNbwJj5/pngegg-5.png",
          },
          {
            productName: "fan",
            price: 1000,
            imageURL: "https://i.postimg.cc/zfnMDZnk/pngegg-7.png",
          },
          
          
    ]
  return (
    <div className='container'>
      {
        Products.map((product, index) => <Product key={index} product={product}/>)
      }
    </div>
  )
}

export default Products