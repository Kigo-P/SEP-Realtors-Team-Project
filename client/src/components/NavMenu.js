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

<<<<<<< HEAD
export default NavMenu;

=======
export default NavMenu;
>>>>>>> 39377fcd88ceed834e00871b6cebb49cb82b97c7
