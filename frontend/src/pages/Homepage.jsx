import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ImageTextSection from '../components/ImageTextSection';
import ScrollingSection from '../components/ScrollingSection';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <ScrollingSection/>
            <ImageTextSection
            title="Dr. Olivia Thompson"
            text="As a certified Cognitive Behavioral Therapist and Personal Development Coach, I specialize in helping individuals navigate life's challenges with a compassionate and professional approach. With over 10 years of experience, my goal is to empower clients to reach their fullest potential and achieve long-lasting change. Whether you're struggling with anxiety, stress, or seeking personal growth, I'm here to guide you every step of the way."
            buttonText="About Me"
            imgName="psychologist.png"
            reverse={false}
            />
            <ImageTextSection
            title="Book a Free Consultation"
            text="Taking the first step towards improving your mental well-being can be daunting, but you're not alone. I offer a complimentary introductory session where we can discuss your concerns and explore how therapy can benefit you. Let's work together to develop a personalized approach that meets your unique needs. Taking care of your mental health is one of the most important investments you can make for yourself and your future."
            buttonText="Book a Session"
            imgName="office.png"
            reverse={true}
            />
            <Footer/>
        </>
    );
}

export default Homepage;

