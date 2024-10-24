import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Session() {
    return ( <>
    <Navbar/>
    <div className="session-container">
        <h2>Book a Free Session</h2>
        <p>Book a free session with a duration of 60 minutes in the available period that suits you.</p>
        <form  className="session-form">
            <label>Your Name</label>
            <input type="text" placeholder='Your name' />

            <label>Your Email</label>
            <input type="email" placeholder='Your email' />
            
            <label>Your Phone Number</label>
            <input type="tel" placeholder='Your phone number' />

            <label>Pick a Date</label>
            <input type="date" />

            <label>Preferred Time</label>
            <input type="time" />

            <button type="submit">Book Session</button>

        </form>
        </div>
    <Footer/>
    </> );
}

export default Session;