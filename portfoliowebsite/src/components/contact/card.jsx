import "./card.css";
import React from 'react';
import ContactForm from './contactForm.jsx'; // Import the ContactForm component
import LinkedInSVG from './linkedInSVG.jsx'; // Import the LinkedIn SVG component

const Card = () => {
    return (
        <div className="card">
            <h1 className="header">Contact me!</h1>
            <ContactForm />
            <div className="icons">
                <LinkedInSVG />
            </div>
        </div>
    );
}

export default Card;
