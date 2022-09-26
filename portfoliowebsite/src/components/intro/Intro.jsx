import "./intro.css";
import Me from "../../img/Portratt.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-intro"> Hello, My name is </h1>
          <h1 className="i-name"> Ebubekir Simsek</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">IT-Consultant</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Assocation person</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <div className="i-title-description">
            I am currently studying for my Bachelore's degree in Computer
            Science while working part-time as a Pressing Machine-Operator at
            Volvo Cars Olofström and as an IT-Consultant in CTK. Besides studies
            and work, I'm involved in developing and maintaining different
            websites.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
        </div>
    </div>
  );
};

export default Intro;