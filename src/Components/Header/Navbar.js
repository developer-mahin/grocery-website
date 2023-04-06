import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-[#e7e7e7e5] backdrop-blur-sm shadow-lg sticky top-0 left-0 right-0 z-50'>
            <div>
                <div className='container mx-auto px-3 py-2'>
                    <nav className="flex items-center justify-between relative">
                        <Link to="/" className='flex items-center md:ml-0 ml-2'>
                            <img src="https://i.ibb.co/hVWrZBR/Logo-Isabells-H-2-1.png" className="lg:w-36 w-20" alt="" />
                        </Link>
                        <ul className={`md:flex md:items-center rounded-lg md:justify-end md:static absolute z-50  w-full  ${isOpen ? "top-14 lg:px-0 px-3 bg-[#e7e7e7e5] lg:py-0 py-5 duration-300" : "top-[-260px] duration-300"}`}>
                            <li
                                onClick={() => setIsOpen(!isOpen)}
                                className='md:border-none border-b-2 border-gray-500 md:ml-10 md:mb-0 mb-4'>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#29a56c] font-semibold" : "font-semibold"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li
                                onClick={() => setIsOpen(!isOpen)}
                                className='md:border-none border-b-2 border-gray-500 md:ml-10 md:mb-0 mb-4'>
                                <NavLink
                                    to="/products"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#29a56c] font-semibold" : "font-semibold"
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li
                                onClick={() => setIsOpen(!isOpen)}
                                className='md:border-none border-b-2 border-gray-500 md:ml-10 md:mb-0 mb-4'>
                                <NavLink
                                    to="/booking"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#29a56c] font-semibold" : "font-semibold"
                                    }
                                >
                                    Booking
                                </NavLink>
                            </li>
                            <li
                                onClick={() => setIsOpen(!isOpen)}
                                className='md:border-none border-b-2 border-gray-500 md:ml-10 md:mb-0 mb-4'>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#29a56c] font-semibold" : "font-semibold"
                                    }
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li
                                onClick={() => setIsOpen(!isOpen)}
                                className='md:border-none border-b-2 border-gray-500 md:ml-10 md:mb-0 mb-4'>
                                <NavLink
                                    to="/signin"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#29a56c] font-semibold" : "font-semibold"
                                    }
                                >
                                    Sign In
                                </NavLink>
                            </li>
                        </ul>
                        <div className='md:hidden md:pr-0 pr-3'>
                            {
                                isOpen ? <HiX
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='w-6 h-6 cursor-pointer text-black'
                                ></HiX>
                                    :
                                    <HiMenuAlt3
                                        onClick={() => setIsOpen(!isOpen)}
                                        className='w-6 h-6 cursor-pointer text-black'
                                    ></HiMenuAlt3>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;