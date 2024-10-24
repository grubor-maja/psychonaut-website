import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const contactData = { firstName, lastName, email, message };
            const response = axios.post('https://psychonaut-website.onrender.com/api/messages', contactData);
            toast.success(response.data.message);
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="session-container">
                <h2>Contact Me</h2>
                <p>Whether you're seeking therapy or simply want more information, feel free to get in touch. Your well-being matters.</p>
                <form className="session-form" onSubmit={handleSubmit}>
                    <label>Your First Name</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />

                    <label>Your Last Name</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />

                    <label>Your Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                    <label>Your Message</label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} required />

                    <button type="submit">Send message</button>
                </form>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Contact;
