import React, { useState, useEffect } from "react";
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
    <div className={`i ${fadeIn ? "fade-in" : ""}`}>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="welcome"> HI, I'M </h1>
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
            I'm currently part of the Strategy and Innovation department at
            Volvo Cars, contributing as an IT consultant on an exhilarating
            project, specializing in software development Automation & Testing.
            Combining my academic foundation with practical expertise, I'm
            poised to drive innovation and make meaningful contributions. Let's
            connect and explore opportunities to collaborate.
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
