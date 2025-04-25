import React from 'react'

export const Carousel = () => {
  return (
    <div className="relative bg-center bg-[url(/public/slide-02.jpg)] bg-cover min-h-screen flex items-center justify-center ">
      <div className="max-w-7xl top-[50%] translate-y-[-50%] left-[40px] absolute">
        <div className="text-center lg:text-left space-y-10 max-w-md lg:max-w-lg">
          <p className="text-gray-700 text-xl">Men Collection 2018</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            NEW <span className="font-light">ARRIVALS</span>
          </h1>
          <button className="mt-4 px-6 py-3 bg-indigo-500 hover:bg-black text-white font-semibold rounded-full transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel