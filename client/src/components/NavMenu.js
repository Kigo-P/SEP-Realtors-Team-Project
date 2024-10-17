import React from 'react';
import { Link } from 'react-router-dom'; // Using Link from react-router-dom for navigation

function NavMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/properties">Properties</Link>
                </li>
                <li>
                    <Link to="/add-property">Add New Property</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;
