import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

        <div>
          <h3 className="font-bold mb-4">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-bold mb-4">GET IN TOUCH</h3>
          <p className="text-gray-300 text-sm mb-4">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex space-x-4 text-gray-400">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>

       
        <div>
          <h3 className="font-bold mb-4">NEWSLETTER</h3>
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full bg-transparent border-b border-gray-400 text-sm text-white placeholder-gray-400 mb-4 focus:outline-none"
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full w-full">
            SUBSCRIBE
          </button>
        </div>
      </div>

      
      <div className="text-center text-gray-400 text-sm space-y-4">
        
        <div className="flex justify-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" className="h-5" />
         </div>

        <p>
          Copyright ©2025 All rights reserved | Made with 💜 by <a href="#" className="text-indigo-400">Colorlib</a> & distributed by <a href="#" className="text-indigo-400">ThemeWagon</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer