import React, { Component } from 'react';
import logo from '../assets/psychonautlogo-light.png';

function Footer() {
    return ( <>
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-text">
                <p>Terms & Conditions | All rights reserved.</p>
            </div>
        </footer>
    </> );
}

export default Footer;