import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import Button from "./Button";

import "./Skills.scss";


const Skills = (props) => {
  const skillList = [
    {
      animateIn: "fadeInLeft",
      animateOut: "fadeOutLeft",
      imgSrc: props.HTML5,
      text: "HTML5"
    },
    {
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      imgSrc: props.CSS3,
      text: "CSS3"
    },
    {
      animateIn: "fadeInRight",
      animateOut: "fadeOutRight",
      imgSrc: props.JS,
      text: "JavaScript"
    },
    {
      animateIn: "fadeInLeft",
      animateOut: "fadeOutLeft",
      imgSrc: props.Bootstrap,
      text: "Bootstrap"
    },
    {
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      imgSrc: props.Jquery,
      text: "JQuery"
    },
    {
      animateIn: "fadeInRight",
      animateOut: "fadeOutRight",
      imgSrc: props.ReactJS,
      text: "ReactJS"
    }
  ];
  return (
    <>
      <section
        className="skills"
        style={
          {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundJPG})`
          }
        }
        >
        <h2 className="skills-header">Skills</h2>
        <ul className="skills-list">
          {skillList.map((skill) => (
            <li key={skill.text}>
              <ScrollAnimation
                animateIn={skill.animateIn}
                animateOut={skill.animateOut}
                className="skill-item"
              >
                <img src={skill.imgSrc} alt={skill.text} />
                <span>{skill.text}</span>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
      </section>
      <Button
        href="/portfolio/projects"
        title="Check Aleks's Projects"
        text="VIEW MY PROJECTS"
      />
    </>
  );
}

export default Skills;
