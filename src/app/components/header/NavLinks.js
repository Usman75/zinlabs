"use client"
import { useState } from 'react';

const NavLinks = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="relative container mx-auto">
            <div className="container mx-auto flex justify-between items-center p-4 flex-wrap">
                <button
                    type="button"
                    className="absolute right-4 top-0 z-50 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    )}
                </button>

                <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-full right-0 bg-blue-700 w-full z-40 md:static md:bg-transparent md:w-auto md:flex`}>
                    <ul className="flex flex-col w-full md:flex-row  md:mt-0 md:text-sm md:font-medium flex-wrap">
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Stock Video</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Video Templates</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Music</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Sound Effects</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Graphic Templates</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Graphics</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Presentation Templates</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Photos</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Fonts</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">Add-ons</a>
                        </li>
                        <li className='xl:my-3 my-2 xl:mx-6 mx-4'>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white md:text-gray-900 bg-blue-700 md:bg-transparent md:p-0 hover:text-white md:hover:text-blue-700">More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavLinks;
