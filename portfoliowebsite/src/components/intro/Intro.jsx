import React, { useState, useEffect } from 'react';
import "./intro.css";
import Me from "../../img/Portrait.png";

const Intro = () => {

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Add the "fade-in" class after a brief delay (e.g., 100ms)
    const delay = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={`i ${fadeIn ? 'fade-in' : ''}`}>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-name"> Ebubekir Simsek</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">IT-Consultant</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Fullstack Developer</div>
            </div>
          </div>
          <p className="i-title-description">
            I am currently studying for my Bachelore's degree in Computer
            Science while working part-time as a Pressing Machine-Operator at
            Volvo Cars Olofström and as an IT-Consultant in CTK. Besides studies
            and work, I'm involved in developing and maintaining different
            websites.
          </p>
        </div>
      </div>
      <div className="r-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  );
};

export default Intro;