import React from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation

function NavMenu() {
    return (
        <header className="flex justify-between items-center p-4 bg-[#0A1A2F] text-white">
            <div>
                <h1 className="text-2xl m-0">SEP REALTORS</h1>
            </div>
            <nav className="ml-auto">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-white text-lg hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link to="/listing" className="text-white text-lg hover:underline">Properties</Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-white text-lg hover:underline">Register</Link>
                    </li>
                    <li>
                        <Link to="/our-services" className="text-white text-lg hover:underline">Our Services</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white text-lg hover:underline">Login</Link>
                    </li>
                    <li>
                        <Link to="/about-us" className="text-white text-lg hover:underline">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="text-white text-lg hover:underline">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavMenu;
