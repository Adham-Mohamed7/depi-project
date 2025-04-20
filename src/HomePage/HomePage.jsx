import React from 'react'
import Nav from '../Nav'
import Cards from './Cards'
import Carousel from './Carousel'

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
    </div> 
    
    
  )
}

export default Home