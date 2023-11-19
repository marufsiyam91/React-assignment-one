import React from 'react'
import Products from '../Products/Products'
import Persons from '../Persons/Persons'
import Articles from '../Articles/Articles'
import Comments from '../Comments/Comments'
import './Home.css'


function Home() {
  return (
    <div>
      <h2>Task one Product Card Component</h2>
      <Products/>
      <h2>Task two a Dynamic User Profile Component</h2>
      <Persons/>
      <h2>Task three News Article Component</h2>
      <Articles/> 
      <h2>This is task four Comment Section Component</h2>
      <Comments/>
    </div>
  )
}

export default Home
