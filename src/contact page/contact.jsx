// import React, { useState } from 'react';

// const DashboardWithCart = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isCartOpen, setIsCartOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const toggleCart = () => {
//         setIsCartOpen(!isCartOpen);
//     };

//    
function ContactUS(){
     return (
      <div className={`bg-gray-100 min-h-screen flex flex-col ${isCartOpen ? 'lg:mr-96' : ''} transition-margin duration-300 ease-in-out`}>

            {/* Top Bar */}
            <div className="bg-gray-800 text-gray-300 text-sm py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <span>Free shipping for standard order over $100</span>
                    <div className="hidden md:block">
                        <a href="#" className="mr-2 hover:text-white">Help & FAQs</a>
                        <a href="#" className="mr-2 hover:text-white">My Account</a>
                        <span className="mr-2">EN</span>
                        <span>USD</span>
                    </div>
                    <div className="md:hidden">
                        <span className="mr-2">EN</span>
                        <span>USD</span>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-20">
                <div className="container mx-auto p-4 flex flex-row justify-between items-center px-4">
                    <a href="#" className="text-xl font-bold text-gray-800">COZA STORE</a>
                    <div className="flex items-center">
                        {/* Mobile Menu Icon */}
                        <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none mr-4">
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
                            <a href="#" className="relative">
                                Features
                                <span className="absolute top-[-0.5rem] right-[-1rem] bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">HOT</span>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
                        </div>

                        {/* Mobile Icons */}
                        <div className="md:hidden flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className="relative">
                                <button onClick={toggleCart} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-blue-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">2</span>
                                </button>
                            </div>
                            <div className="relative">
                                <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">0</span>
                                </button>
                            </div>
                        </div>

                        {/* Desktop Icons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <div className="relative">
                                <button onClick={toggleCart} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-blue-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">2</span>
                                </button>
                            </div>
                            <div className="relative">
                                <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                    <span className="absolute top-[-0.5rem] right-[-0.5rem] bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">0</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-md py-2 px-4">
                        <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Home</a>
                        <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Shop</a>
                        <a href="#" className="block py-2 text-gray-600 hover:text-gray-800 relative">
                            Features
                            <span className="absolute top-1/2 right-[-1rem] transform -translate-y-1/2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">HOT</span>
                        </a>
                        <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Blog</a>
                        <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">About</a>
                        <a href="#" className="block py-2 text-gray-600 hover:text-gray-800">Contact</a>
                    </div>
                )}
            </nav>

            {/* Cart Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-screen w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-30 overflow-y-auto ${
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                    <h1 className="text-xl font-semibold">YOUR CART</h1>
                    <button onClick={toggleCart} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-4">
                            <img src="https://via.placeholder.com/50" alt="White Shirt" className="w-12 h-12 object-cover" />
                            <div className="flex-1">
                                <h2 className="text-sm font-medium">White Shirt Pleat</h2>
                                <p className="text-gray-600 text-xs">1 x $19.00</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <img src="https://via.placeholder.com/50/0000FF" alt="Converse All Star" className="w-12 h-12 object-cover" />
                            <div className="flex-1">
                                <h2 className="text-sm font-medium">Converse All Star</h2>
                                <p className="text-gray-600 text-xs">1 x $39.00</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <img src="https://via.placeholder.com/50/A0522D" alt="Nixon Porter Leather" className="w-12 h-12 object-cover" />
                            <div className="flex-1">
                                <h2 className="text-sm font-medium">Nixon Porter Leather</h2>
                                <p className="text-gray-600 text-xs">1 x $17.00</p>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-6 py-4 border-t border-gray-200">
                        <p className="text-right font-semibold">Total: $75.00</p>
                    </div>
                    <div className="mt-4 flex space-x-2">
                        <button className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded focus:outline-none">VIEW CART</button>
                        <button className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded focus:outline-none">CHECK OUT</button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="container mx-auto mt-8 p-4 flex-grow">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Side - Contact Form */}
                        </div>
                           
                        


    <div class="container mx-auto py-12 px-4 md:px-0">
        <div class="bg-white shadow-md rounded-lg overflow-hidden md:flex">
            {/* Left Side - Contact Form */}
            <div class="p-8 md:w-1/2">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Send Us A Message</h2>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-2 align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8m0 0l1.68-1.06a2 2 0 012.12-.08L8 9.86m1.68-1.06a2 2 0 012.12-.08L14 9.86m-1.68-1.06a2 2 0 012.12-.08L20 7.14m-0 0l-1.68 1.06a2 2 0 01-2.12.08L16 8.14m1.68-1.06a2 2 0 01-2.12.08L10 7.14" />
                        </svg>
                        Your Email Address
                    </label>
                    <input type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email Address"/>
                </div>
                <div class="mb-6">
                    <label for="message" class="block text-gray-700 text-sm font-bold mb-2">How Can We Help?</label>
                    <textarea id="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="How Can We Help?"></textarea>
                </div>
                <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
                    SUBMIT
                </button>
            </div>

            {/* Right Side - Contact Information */}
            <div class="p-8 md:w-1/2 bg-gray-50">
                <h2 class="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div class="mb-6">
                    <div class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L6.343 16.657a9 9 0 010-12.728l8.486-8.485a9 9 0 0112.728 0l-8.486 8.485z" />
                        </svg>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700 mb-1">Address</h3>
                            <p class="text-gray-600 text-sm">Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                        </div>
                    </div>
                </div>
                <div class="mb-6">
                    <div class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-1.001 0-1.948-.52-2.64-1.408l-3.422-6.844a1 1 0 01-.29-1.188l-1.202-2.405a2 2 0 01-1.942-2.069L9.09 5.414A2 2 0 017.08 5z" />
                        </svg>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700 mb-1">Lets Talk</h3>
                            <p class="text-gray-600 text-sm">+1 800 1236879</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.2V9.5" />
                        </svg>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-700 mb-1">Sale Support</h3>
                            <p class="text-gray-600 text-sm">contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




                            </div>
                            </div>
                         





    <footer class="bg-gray-800 text-gray-300 py-12">
        <div class="container mx-auto px-4 md:px-0">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* CATEGORIES */}
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">CATEGORIES</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-400">Women</a></li>
                        <li><a href="#" class="hover:text-gray-400">Men</a></li>
                        <li><a href="#" class="hover:text-gray-400">Shoes</a></li>
                        <li><a href="#" class="hover:text-gray-400">Watches</a></li>
                    </ul>
                </div>

                {/* HELP */}
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">HELP</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-gray-400">Track Order</a></li>
                        <li><a href="#" class="hover:text-gray-400">Returns</a></li>
                        <li><a href="#" class="hover:text-gray-400">Shipping</a></li>
                        <li><a href="#" class="hover:text-gray-400">FAQs</a></li>
                    </ul>
                </div>

                {/* GET IN TOUCH */}
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">GET IN TOUCH</h3>
                    <p class="mb-2">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-white"><svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.897 3.777-3.897 1.094.196 2.278.361 2.278.361v2.54h-1.26c-1.226 0-1.63.771-1.63 1.562v1.877h2.776l-.443 2.89h-2.333v6.987C18.343 21.128 22 16.991 22 12z"/></svg></a>
                        <a href="#" class="text-gray-300 hover:text-white"><svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M23.954 4.562c-.885.39-1.504.66-2.605 1.13a.98.98 0 00-.212-.028c.83-.031 1.567-.272 2.187-.692-.764.45-1.608.77-2.52.953a.977.977 0 00-.128-.034c-.803-.83-2.072-1.342-3.468-1.342-2.76 0-5 2.24-5 5 0 .387.044.766.13 1.133-4.154-.208-7.82-2.194-10.217-5.145C1.664 3.903 1.3 4.46 1.3 5.14c0 1.737.88 3.275 2.185 4.17-.643-.02-1.25-.2-1.786-.5v.063c0 2.42 1.713 4.435 3.983 4.89-.517.143-1.07.22-1.643.22-.32 0-.636-.03-.946-.087 1.79.935 3.718 1.438 5.734 1.45-1.693 1.325-3.84 2.108-6.22 2.108-.39 0-.775-.023-1.15-.068 2.11 1.357 4.65 2.15 7.463 2.15 8.957 0 13.867-7.428 13.867-13.867 0-.21-.008-.41-.02-.615.958-.69 1.795-1.56 2.455-2.55z"/></svg></a>
                        <a href="#" class="text-gray-300 hover:text-white"><svg class="h-6 w-6 fill-current" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.228-1.69 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.057-1.265-.069-1.644-.069-4.849 0-3.205.012-3.584.069-4.849.149-3.227 1.691-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.16c-3.205 0-3.585.012-4.85.07-3.25.148-4.771 1.691-4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205.012 3.584.069 4.849.149 3.227 1.69 4.771 4.919 4.919 1.266.057 1.645.069 4.849.069 3.205 0 3.585-.012 4.85-.07 3.251-.149 4.771-1.691 4.919-4.919.058-1.265.069-1.645.069-4.849 0-3.205-.012-3.584-.069-4.849-.149-3.227-1.69-4.771-4.919-4.919-1.266-.057-1.645-.069-4.849-.069zm0 5.838a3.417 3.417 0 110 6.834 3.417 3.417 0 010-6.834z"/><path fill="currentColor" d="M12 16a4 4 0 100-8 4 4 0 000 8zm6.406-11.845a1.44 1.44 0 00-2.163 0l-.31.312a5.5 5.5 0 01-7.712 0l-.31-.312a1.44 1.44 0 00-2.163 0 1.426 1.426 0 000 2.146l.31.312a5.5 5.5 0 017.712 0l.31-.312a1.426 1.426 0 000-2.146z"/></svg></a>
                    </div>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">NEWSLETTER</h3>
                    <p class="mb-2">email@example.com</p>
                    <div class="flex">
                        <input type="email" class="bg-gray-700 text-gray-300 rounded-l-md py-2 px-4 w-full focus:outline-none" placeholder="Your email address"/>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-md focus:outline-none">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    






      </div>



                           
              );
              };
export default ContactUS;