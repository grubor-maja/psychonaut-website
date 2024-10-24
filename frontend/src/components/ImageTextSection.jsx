import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function ImageTextSection({title,text, buttonText, reverse,imgName}) {
    const imageSource = require(`../assets/${imgName}`);
    return ( <>
        <section className={`image-text-section ${reverse? 'reverse':''}`}>
            <div className="image-container">
                <img src={imageSource} alt={title} />
            </div>
            <div className={`text-container ${reverse? '' : 'reverse'}`}>
                <h2>{title}</h2>
                <p>{text}</p>
                <Link to ="/session"><button>{buttonText}</button></Link>
            </div>
        </section>
    </> 
    );
}

export default ImageTextSection;