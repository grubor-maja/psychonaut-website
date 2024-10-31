import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
    return ( <>
        <div className="hero-section">
            <div className="hero-content">
                <h1>
                    Find <span className="animated-word">Clarity</span>, <span className="animated-word">Healing</span>, and <span className="animated-word">Strength</span>
                </h1>                
                <p>Offering a safe space to explore your thoughts, emotions, and regain control over your life.</p>
                <Link to ="/session"><button>Book a Session</button></Link>
            </div>
        </div>
    </> );
}

export default HeroSection;