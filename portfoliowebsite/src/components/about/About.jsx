import "./about.css";
import cardImage from "../../img/AboutImage.png";

const About = () => {
    return (
        <div className="about" >
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                  <img src={cardImage} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <div className="a-title">About me</div>
                <p className="a-sub">
                The life of an IT Consultant                </p>
                <p className="a-desc">
                When I'm not rolling up my sleeves and diving into technical challenges, 
                <br/>
                you'll discover me gracefully soaring amidst the billowing clouds. 
                <br/>
                With a screen held securely in one hand and the exhilarating embrace of a paragliding wing in the other, I navigate the realms of both code and the skies, driven by an insatiable curiosity for innovation and adventure
                </p>


            </div>
        </div>
    );
    }

export default About;