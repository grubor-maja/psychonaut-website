import React, { useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import {FaArrowRight } from "react-icons/fa";

function ScrollingSection() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <>
    <div className="scrolling-heading">
    I can help you in <span style={{ color: 'var(--mint-green)' }}>Psychotherapy</span> and <span style={{ color: 'var(--blue-violet)' }}>Psychology</span> areas.<br/> 
    Below are listed only some of the topics we can work on.    </div>
    <div className="scrolling-section">
      <button onClick={scrollLeft} className="scroll-btn"><FaArrowLeft style={{ color: 'var(--light-beige)' }}/></button>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-item">
          <h3>Anxiety Disorders</h3>
          <p>Anxiety disorders are characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with daily activities.</p>
        </div>
        <div className="scroll-item">
          <h3>Depression</h3>
          <p>Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest, affecting how you feel, think, and handle daily activities.</p>
        </div>
        <div className="scroll-item">
          <h3>PTSD</h3>
          <p>Post-traumatic stress disorder (PTSD) can develop after exposure to a traumatic event, causing flashbacks, nightmares, and severe anxiety.</p>
        </div>
        <div className="scroll-item">
          <h3>Obsessive-Compulsive Disorder</h3>
          <p>OCD involves unwanted and intrusive thoughts (obsessions) and repetitive behaviors (compulsions) to ease the distress caused by these thoughts.</p>
        </div>
      </div>
      <button onClick={scrollRight} className="scroll-btn"><FaArrowRight style={{ color: 'var(--light-beige)' }}/></button>
    </div>
    </>
  );
}

export default ScrollingSection;
