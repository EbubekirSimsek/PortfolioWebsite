import "./card.css";
import React from "react";
import ContactForm from "./contactForm.jsx"; // Import the ContactForm component
import LinkedInSVG from "./linkedInSVG.jsx"; // Import the LinkedIn SVG component

const Card = () => {
  return (
    <div className="card">
      <h1 className="header">Get in touch!</h1>
      <p style={{}}>
        Hey, send me an email if you want to connect! Additionaly, you can find
        me on LinkedIN, shoot a message if you have to!
      </p>
      <ContactForm />
      <div className="icons">
        <LinkedInSVG />
      </div>
    </div>
  );
};

export default Card;
