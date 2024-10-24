import React, { Component } from 'react';
import logo from '../assets/psychonautlogo-light.png';

function Navbar() {
    return ( <>
        <nav className='navbar'>
            <div className="navbar-logo">
                <img src={logo} alt="Psychonaut Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#book">Book a Session</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </> );
}

export default Navbar;