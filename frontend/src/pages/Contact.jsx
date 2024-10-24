import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Contact() {
    return ( <>
        <Navbar/>
    <div className="session-container">
        <h2>Contact Me</h2>
        <p>Whether you're seeking therapy or simply want more information, feel free to get in touch. Your well-being matters.</p>
        <form  className="session-form">
            <label>Your Name</label>
            <input type="text" placeholder='Your name' />

            <label>Your Email</label>
            <input type="email" placeholder='Your email' />
            
            <label>Your Message</label>
            <textarea  placeholder='Your message' />
            <button type="submit">Send message</button>

        </form>
        </div>
    <Footer/>
    </> );
}

export default Contact;