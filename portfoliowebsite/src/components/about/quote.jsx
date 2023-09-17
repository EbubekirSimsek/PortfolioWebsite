import React, { useEffect, useState } from "react";
import "./qoute.css";
import { useInView } from "react-intersection-observer";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const typedQuote =
    "I have no special talent. I am only passionately curious.";

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    if (inView) {
      const typeQuote = async () => {
        for (let i = 0; i < typedQuote.length; i++) {
          setQuote(typedQuote.substring(0, i + 1));
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      };

      typeQuote();
    }
  }, [inView]);

  return (
    <div className="q-container" ref={ref}>
      <div className="container_terminal"></div>
      <div className="terminal_toolbar">
        <div className="butt">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        <p className="user">ebusim@admin: ~</p>
      </div>
      <div className="terminal_body">
        <div className="terminal_promt">
          <span className="terminal_user">ebusim:</span>
          <span className="terminal_location">~</span>
          <span className="terminal_bling">describeMe()</span>
          <span className="terminal_cursor"></span>
        </div>
        <div className="quote">{quote}</div>
      </div>
    </div>
  );
};

export default Quote;
