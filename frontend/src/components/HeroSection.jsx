import React, { Component } from 'react';

function HeroSection() {
    return ( <>
        <div className="hero-section">
            <div className="hero-content">
                <h1>
                    Find <span className="animated-word">Clarity</span>, <span className="animated-word">Healing</span>, and <span className="animated-word">Strength</span>
                </h1>                
                <p>Offering a safe space to explore your thoughts, emotions, and regain control over your life.</p>
                <button>Book a Session</button>
            </div>
        </div>
    </> );
}

export default HeroSection;