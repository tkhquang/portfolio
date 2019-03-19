import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.scss";
import CSS3 from "../images/CSS3.png";
import HTML5 from "../images/HTML5.png";
import JS from "../images/JS.png";
import Bootstrap from "../images/Bootstrap.png";
import Jquery from "../images/Jquery.png";
import ReactJS from "../images/ReactJS.png";

const Skills = (props) => (
  <section
    className="skills"
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundJPG})`}}
  >
    <h2 className="skills-header">Skills</h2>
    <ul className="skills-list">
      <li><Fade left><img src={HTML5} alt="HTML5" /><span>HTML5</span></Fade></li>
      <li><Fade><img src={CSS3} alt="CSS3" /><span>CSS3</span></Fade></li>
      <li><Fade right><img src={JS} alt="JavaScript" /><span>JavaScript</span></Fade></li>
      <li><Fade left><img src={Bootstrap} alt="Bootstrap" /><span>Bootstrap</span></Fade></li>
      <li><Fade><img src={Jquery} alt="JQuery" /><span>jQuery</span></Fade></li>
      <li><Fade right><img src={ReactJS} alt="ReactJS" /><span>ReactJS</span></Fade></li>
    </ul>
  </section>
);

export default Skills;
