import React from 'react';

// function ContactPage() {
//   return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold">COZA STORE</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-gray-500">Home</a>
            <a href="#" className="hover:text-gray-500">Shop</a>
            <a href="#" className="hover:text-gray-500">Features</a>
            <a href="#" className="hover:text-gray-500">Blog</a>
            <a href="#" className="hover:text-gray-500">About</a>
            <a href="#" className="hover:text-gray-500">Contact</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-500">Q</button>
            <button className="hover:text-gray-500">L</button>
            <button className="hover:text-gray-500">X</button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto mt-10 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Send Us A Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email Address</label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">How Can We Help?</label>
            <textarea
              id="message"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </section>

      {/* Address, Let's Talk, Sale Support Section */}
      <section className="container mx-auto mt-10 p-8 bg-white shadow-md rounded-md flex flex-row justify-between flex-wrap gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p className="text-gray-600">Coza Store Center, 8th Floor, 379 Hudson St, New York, NY 10018 US</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's Talk</h3>
          <p className="text-blue-500 hover:text-blue-700">+1 800 123 6879</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Sale Support</h3>
          <p className="text-green-500 hover:text-green-700">contact@example.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>&copy; 2025 COZA STORE. All rights reserved.</p>
      </footer>
   

    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">CATEGORIES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Women</a></li>
            <li><a href="#" className="hover:text-gray-400">Men</a></li>
            <li><a href="#" className="hover:text-gray-400">Shoes</a></li>
            <li><a href="#" className="hover:text-gray-400">Watches</a></li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">HELP</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Track Order</a></li>
            <li><a href="#" className="hover:text-gray-400">Returns</a></li>
            <li><a href="#" className="hover:text-gray-400">Shipping</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">GET IN TOUCH</h3>
          <p className="mb-2">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 US</p>
          <p className="mb-2">Call us on ‪(+84) 98 716 6809‬</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM12 4c-4.419 0-8 3.581-8 8s3.581 8 8 8 8-3.581 8-8-3.581-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zM12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z"/></svg></a> {/* Placeholder for Facebook icon */}
            <a href="#" className="hover:text-gray-400"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.672-1.64.996-2.552 1.176a4.847 4.847 0 0 0 2.12-2.824c-.848.504-1.78.864-2.784 1.056a4.827 4.827 0 0 0-8.176 4.336c-2.828-1.488-4.992-2.64-6.592-3.504a4.849 4.849 0 0 0-.672 2.496c0 1.664.864 3.168 2.16 4.048a4.846 4.846 0 0 1-2.224-.616v.064c0 2.32 1.64 4.264 3.824 4.696a4.828 4.828 0 0 1-2.224.088 4.849 4.849 0 0 0 4.512 3.36c-1.792 1.408-4.072 2.256-6.64 2.256-.416 0-.832-.024-1.248-.072a9.627 9.627 0 0 0 5.216 1.536z"/></svg></a> {/* Placeholder for Twitter icon */}
            <a href="#" className="hover:text-gray-400"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M21.632 6.448c.328.328.328.864 0 1.192l-8.192 8.192c-.16.16-.384.24-.608.24-.224 0-.448-.08-.608-.24l-4.256-4.256c-.328-.328-.328-.864 0-1.192l.8-.8c.328-.328.864-.328 1.192 0l3.648 3.648 7.584-7.584c.328-.328.864-.328 1.192 0l.8.8zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg></a> {/* Placeholder for Instagram icon */}
            <a href="#" className="hover:text-gray-400"><svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M20.947 8.314c.15-.225.24-.48.24-.754 0-.755-.61-.985-1.09-.985h-2.964c-.252 0-.456.208-.456.464v3.896h-3.28v-3.368c0-.256-.208-.464-.464-.464h-2.98c-.482 0-.89.23-.89.712 0 .256.208.464.464.464h2.336v3.104c0 .952.768 1.72 1.72 1.72h2.736v-1.544c0-.256.208-.464.464-.464h1.888c.256 0 .464.208.464.464v1.544h2.224c.52 0 .944-.264.944-.784 0-.256-.208-.464-.464-.464h-1.68v-3.896c0-.256-.208-.464-.464-.464h-1.888v-1.544c0-.256-.208-.464-.464-.464h-2.736c-.952 0-1.72-.768-1.72-1.72v-3.104h-2.336c-.256 0-.464-.208-.464-.464 0-.482.408-.712.89-.712h2.98c.256 0 .464.208.464.464v3.368h3.28v-3.896c0-.256.208-.464.464-.464h2.964c.482 0 .89.23.89.712 0 .274-.225.48-.24.754v3.104c0 .256.208.464.464.464h1.68c.256 0 .464-.208.464-.464v-3.104z"/></svg></a> {/* Placeholder for Pinterest icon */}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">NEWSLETTER</h3>
          <p className="mb-4">email@example.com</p>
          <div className="flex">
            <input type="email" className="bg-gray-700 text-gray-300 py-2 px-3 rounded-l-md focus:outline-none w-full" placeholder="Your email address" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-md focus:outline-none">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
 
   



    </div>







//   );
// }

// export default ContactPage;