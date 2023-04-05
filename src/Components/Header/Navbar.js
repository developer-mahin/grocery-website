import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div>
                <div className='container mx-auto px-3 py-2'>
                    <nav>
                        <Link to="/" className='flex items-center md:ml-0 ml-2'>
                            <img src="https://i.ibb.co/93VdwBc/Developer-Mahin.png" className="w-80" alt="" />
                        </Link>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "text-red-500"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about-us"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Messages
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/booking"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Messages
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;