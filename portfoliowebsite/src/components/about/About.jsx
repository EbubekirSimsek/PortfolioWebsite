import "./about.css";
import cardImage from "../../img/AboutImage.png";
import Qoute from "./quote";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={cardImage} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <p className="a-subsection"> I'd describe myself as </p>
        <h className="a-title">Albert Einstein did</h>
        <div className="qoute">
          <Qoute />
        </div>
      </div>
    </div>
  );
};

export default About;
