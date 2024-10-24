import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import ImageTextSection from '../components/ImageTextSection';
import Footer from '../components/Footer';

function About() {
    return (        
         <>
        <Navbar />
        <ImageTextSection
            title="Hi, I'm Olivia Thompson"
            text="As a certified Cognitive Behavioral Therapist and Personal Development Coach, I have dedicated my career to helping individuals overcome their mental health challenges and achieve their fullest potential. With over a decade of experience, I offer compassionate, personalized therapy that addresses your unique needs and goals. My approach is rooted in empathy, active listening, and a deep understanding of various psychological methods."
            buttonText="Book a Session"
            imgName="psychologist.png"
        />
        <ImageTextSection
            title="How I Started"
            text="My journey into the field of psychology began with a passion for understanding the human mind and a desire to make a positive difference in people's lives. After completing my studies in psychology and specializing in Cognitive Behavioral Therapy, I worked in various clinical settings, gaining extensive experience in treating anxiety, depression, and other mental health issues. Today, I bring all that knowledge to my private practice, helping clients find clarity and purpose."
            buttonText="Book a Session"
            imgName="campus.jpg"
            reverse = {true}
        />
        <ImageTextSection
            title="My Space"
            text="My therapy space is designed to be a safe and welcoming environment where you can feel comfortable sharing your thoughts and feelings. Located in a quiet, serene area, the space offers a tranquil atmosphere that promotes relaxation and openness. Whether you're here for a therapy session, a personal development workshop, or just seeking advice, my goal is to make you feel at ease."
            buttonText="Book a Session"
            imgName="office.png"
        />
        <Footer />
    </> );
}

export default About;