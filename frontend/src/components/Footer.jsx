import React, { Component } from 'react';
import logo from '../assets/psychonautlogo-light.png';
import { Link } from 'react-router-dom';

function Footer() {
    return ( <>
        <footer className="footer">
            <div className="footer-logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="footer-text">
                <p>Terms & Conditions | All rights reserved.</p>
            </div>
        </footer>
    </> );
}

export default Footer;