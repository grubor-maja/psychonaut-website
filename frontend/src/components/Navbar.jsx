import React, { Component } from 'react';
import logo from '../assets/psychonautlogo-light.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( <>
        <nav className='navbar'>
            <div className="navbar-logo">
                <Link to="/"><img src={logo} alt="Psychonaut Logo" /></Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/about-me">About Me</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/session">Book a Session</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </> );
}

export default Navbar;