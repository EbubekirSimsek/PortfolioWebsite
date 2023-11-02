import "./about.css";
import Qoute from "./quote";
import ImageCard from "./imageCard";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="imageGrid">
          <ImageCard />
        </div>
      </div>
      <div className="a-right">
        <p className="a-subsection"> I'd describe </p>
        <h className="a-title">Myself as</h>
        <div className="qoute">
          <Qoute />
        </div>
      </div>
    </div>
  );
};

export default About;
