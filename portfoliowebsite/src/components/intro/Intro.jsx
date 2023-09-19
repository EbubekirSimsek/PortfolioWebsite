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
            I'm a recent Computer Science graduate actively seeking
            opportunities in the IT industry. With a strong academic background
            and hands-on experience in both manufacturing and IT consulting, I'm
            eager to contribute my skills and drive to a dynamic team. Let's
            connect and explore how I can make an impact in your organization.
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
