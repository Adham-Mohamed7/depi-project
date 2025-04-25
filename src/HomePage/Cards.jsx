import React from 'react'

const Cards = () => {
  return (
    <div className='m-10 flex w-full flex-col md:flex-row flex-wrap gap-6 justify-center'>
      
    
      <a className="group relative md:w-[400px] w-full flex flex-col border border-gray-200 rounded-lg px-8 pb-8 pt-72 max-w-lg ml-16 mx-auto mt-10 overflow-hidden">
        <img src="/banner-01.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-[rgba(103,117,214,0.8)] duration-300 opacity-0 group-hover:opacity-80 absolute w-full h-full top-0 left-0 z-50"></div>
        <div className="absolute top-5 left-5 z-50">
          <h3 className="text-4xl font-bold text-black group-hover:text-white">Women</h3>
          <div className="text-lg text-[#555] group-hover:text-white">Spring 2025</div>
          <div className="absolute top-44 left-0 z-50 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white text-base font-semibold underline underline-offset-4">SHOP NOW</span>
          </div>
        </div>
      </a>

    
      <a className="group relative md:w-[400px] w-full flex flex-col border border-gray-200 rounded-lg px-8 pb-8 pt-72 max-w-lg mx-auto -ml-16 mt-10 overflow-hidden">
        <img src="/banner-02.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-[rgba(103,117,214,0.8)] duration-300 opacity-0 group-hover:opacity-80 absolute w-full h-full top-0 left-0 z-50"></div>
        <div className="absolute top-5 left-5 z-50">
          <h3 className="text-4xl font-bold text-black group-hover:text-white">Men</h3>
          <div className="text-lg text-[#555] group-hover:text-white">Spring 2025</div>
          <div className="absolute top-44 left-0 z-50 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white text-base font-semibold underline underline-offset-4">SHOP NOW</span>
          </div>
        </div>
      </a>

    
      <a className="group relative md:w-[400px] w-full flex flex-col border border-gray-200 rounded-lg px-8 pb-8 pt-72 max-w-lg mx-auto -ml-16 mt-10 overflow-hidden">
        <img src="/banner-03.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-[rgba(103,117,214,0.8)] duration-300 opacity-0 group-hover:opacity-80 absolute w-full h-full top-0 left-0 z-50"></div>
        <div className="absolute top-5 left-5 z-50">
          <h3 className="text-4xl font-bold text-black group-hover:text-white">Men</h3>
          <div className="text-lg text-[#555] group-hover:text-white">Spring 2025</div>
          <div className="absolute top-44 left-0 z-50 opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white text-base font-semibold underline underline-offset-4">SHOP NOW</span>
          </div>
        </div>
      </a>

    </div>
  )
}

export default Cards
