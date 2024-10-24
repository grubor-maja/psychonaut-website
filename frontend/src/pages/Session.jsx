import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Session() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([
        '10:00', '11:00', '12:00', '13:00', '14:00', 
        '15:00', '16:00', '17:00', '18:00', '19:00'
    ]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (date) {
            axios.get('/api/sessions', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                const bookedSessions = response.data?.data ? response.data.data.filter(session => session.date === date) : [];
                const bookedTimes = bookedSessions.map(session => session.time);
                const freeTimes = availableTimes.filter(time => !bookedTimes.includes(time));
                setAvailableTimes(freeTimes);
            })
            .catch(error => {
                console.error("Error fetching sessions:", error);
            });
        }
    }, [date]);
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const sessionData = { firstName, lastName, email, phone, date, time };
            const response = await axios.post('/api/sessions',sessionData);

            toast.success(response.data.message);

            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setDate('');
            setTime('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to book session');
        }
    };

    return (
        <>
            <Navbar />
            <div className="session-container">
                <h2>Book a Free Session</h2>
                <form className="session-form" onSubmit={handleSubmit}>
                    <label>Your First Name</label>
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required />

                    <label>Your Last Name</label>
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required />

                    <label>Your Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    
                    <label>Your Phone</label>
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required />

                    <label>Pick a Date</label>
                    <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

                    <label>Pick a Time</label>
                    <select value={time} onChange={e => setTime(e.target.value)} required>
                        <option value="">Select a time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>

                    <button type="submit">Book a Session</button>
                </form>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Session;
