import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ImageTextSection from '../components/ImageTextSection';
import Footer from '../components/Footer';

function Services() {
    return (        
         <>
            <Navbar />
            <ImageTextSection
                title="Individual Therapy"
                text="Our individual therapy sessions provide a safe and confidential environment where you can explore your thoughts and feelings. These one-on-one sessions are tailored to your unique needs, whether you're dealing with anxiety, depression, stress, or other mental health challenges. Our goal is to help you find clarity, develop coping strategies, and achieve personal growth."
                buttonText="Book a Session"
                imgName="single.jpg"
            />
            <ImageTextSection
                title="Group Therapy"
                text="Group therapy offers a supportive space where you can share your experiences with others who are facing similar challenges. Led by a trained therapist, these sessions allow you to connect, learn from others, and gain new perspectives on your struggles. Together, we work on building confidence, improving communication, and fostering a sense of community."
                buttonText="Book a Session"
                imgName="couple.jpg"
                reverse={true}
            />
            <ImageTextSection
                title="Workshops and Events"
                text="In addition to regular therapy sessions, we organize workshops and events focused on personal development, stress management, and mindfulness. These workshops are designed to give you practical tools and strategies for managing everyday stress and improving your mental well-being. Join us for an interactive experience that promotes growth and self-awareness."
                buttonText="Book a Session"
                imgName="group-therapy.jpg"
            />
            <Footer />
    </> );
}

export default Services;