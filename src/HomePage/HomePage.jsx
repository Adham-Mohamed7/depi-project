import React from 'react'
import Nav from '../Nav'
import Cards from './Cards'
import Carousel from './Carousel'
import ProductsOverview from "./ProductsOverview"
import Footer from "./Footer"
import { Route,Routes } from 'react-router-dom'
import Product from '../Shopping/Product'



const Home = () => {
  return (

    <div >
      <div>
        <Nav/>   
      </div>
       <div> 
        <Carousel/>
      </div>
      <div>
        <Cards/>
      </div>
      <ProductsOverview/>
      <div>
        <Footer/>
      </div>
    </div> 
    
    
  )
}

export default Home