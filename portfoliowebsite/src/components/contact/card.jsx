import "./card.css";
import React from "react";
import ContactForm from "./contactForm.jsx";
import LinkedInSVG from "./linkedInSVG.jsx";
import { useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideIn } from "../../animations/animations.js";

const Card = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    if (inView) {
      controls.start("show"); // Start the animation when in view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={slideIn("left", "tween", 0.2, 2)} // Use the animation function
      initial="hidden"
      animate={controls}
    >
      <div className="card">
        <h1 className="header">Get in touch!</h1>
        <p>
          Hey, send me an email if you want to connect! Additionally, you can
          find me on LinkedIn, shoot a message if you have to!
        </p>
        <ContactForm />
        <div className="icons">
          <LinkedInSVG />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
