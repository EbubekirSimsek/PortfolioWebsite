import React from "react";
import "./skills.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
  faJava,
  faFigma,
  faWordpress,
  faSquarespace,
  faWix,
  faWeebly,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Battery50Icon from "@mui/icons-material/Battery50";
import Battery90Icon from "@mui/icons-material/Battery90";
import Battery30Icon from "@mui/icons-material/Battery30";
import Battery80Icon from "@mui/icons-material/Battery80";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", level: <Battery50Icon />, icon: faJs },
    { name: "React", level: <Battery50Icon />, icon: faReact },
    { name: "HTML/CSS", level: <Battery90Icon />, icon: faHtml5 },
    { name: "Figma", level: <Battery90Icon />, icon: faFigma },
  ];

  const backendSkills = [
    { name: "Python", level: <Battery50Icon />, icon: faPython },
    { name: "C#", level: <Battery80Icon />, icon: faCode },
    { name: "Database", level: <Battery30Icon />, icon: faDatabase },
    { name: "Java", level: <Battery50Icon />, icon: faJava },
  ];

  const webDevelopment = [
    { name: "Wordpress", level: <Battery90Icon />, icon: faWordpress },
    { name: "Squarespace", level: <Battery90Icon />, icon: faSquarespace },
    { name: "Wix", level: <Battery90Icon />, icon: faWix },
    { name: "Weebly", level: <Battery50Icon />, icon: faWeebly },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div key={index} className="skill">
        <FontAwesomeIcon icon={skill.icon} className="icon" />
        <h3>{skill.name}</h3>
        {skill.level}
      </div>
    ));
  };

  return (
    <div className="skills-container">
      <h2 className="h2">My skills</h2>
      <div className="row">
        <div
          className="col-md-4"
          style={{ paddingLeft: "20px", padding: "5vh", textAlign: "center" }}
        >
          <h3 className="h3">Frontend</h3>
          {renderSkills(frontendSkills)}
        </div>
        <div
          className="col-md-4"
          style={{ paddingLeft: "20px", padding: "5vh" }}
        >
          <h3 className="h3">Backend</h3>
          {renderSkills(backendSkills)}
        </div>
        <div
          className="col-md-4"
          style={{ paddingLeft: "20px", padding: "5vh" }}
        >
          <h3 className="h3">Web Development</h3>
          {renderSkills(webDevelopment)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
