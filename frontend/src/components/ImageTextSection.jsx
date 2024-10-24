import React, { Component } from 'react';

function ImageTextSection({title,text, buttonText, reverse,imgName}) {
    const imageSource = require(`../assets/${imgName}`);
    return ( <>
        <section className={`image-text-section ${reverse? 'reverse':''}`}>
            <div className="image-container">
                <img src={imageSource} alt={title} />
            </div>
            <div className="text-container">
                <h2>{title}</h2>
                <p>{text}</p>
                <button>{buttonText}</button>
            </div>
        </section>
    </> );
}

export default ImageTextSection;