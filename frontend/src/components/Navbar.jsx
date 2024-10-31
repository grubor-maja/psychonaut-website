import logo from '../assets/psychonautlogo-light.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import burgerMenuIcon from '../assets/menu.png';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return ( <>
        <nav className='navbar'>
            <div className="navbar-logo navbar-mobile">
                <Link to="/"><img src={logo} alt="Psychonaut Logo" /></Link>
                <span className="menu-icon" onClick = {toggleMenu}>
                 <img src={burgerMenuIcon} className='burgermenu-image'/>
            </span>
            </div>


            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/session">Book a Session</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </> );
}

export default Navbar;