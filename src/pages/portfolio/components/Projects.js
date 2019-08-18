import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import LoadPageImage from "components/common/LoadPageImage";
import Loading from "components/common/Loading";
import Button from "./Button";

import pokemonCardViewer from "resources/portfolio/images/pokemon-card-viewer.png";
import javascriptCalculator from "resources/portfolio/images/javascript-calculator.png";
import pomodoroClock from "resources/portfolio/images/pomodoro-clock.png";
import drumMachine from "resources/portfolio/images/drum-machine.png";
import randomQuoteMachine from "resources/portfolio/images/random-quote-machine.png";

import "./Projects.scss";

const imgObj = {
  pokemonCardViewer,
  javascriptCalculator,
  pomodoroClock,
  drumMachine,
  randomQuoteMachine
};

const Projects = (props) => {
  const loadedImages = props.loadedImages;
  const projectList = [
    {
      href: "https://tkhquang.github.io/pokemon-card-viewer",
      source: "https://github.com/tkhquang/pokemon-card-viewer/tree/gh-pages/Source",
      imgSrc: loadedImages.pokemonCardViewer,
      text: "Pokémon Card Viewer",
      skillsUse: [
        "HTML",
        "CSS",
        "ReactJS",
        "Redux"
      ]
    },
    {
      href: "https://tkhquang.github.io/simple-reactjs-calculator",
      source: "https://github.com/tkhquang/simple-reactjs-calculator",
      imgSrc: loadedImages.javascriptCalculator,
      text: "Javascript Calculator",
      skillsUse: [
        "HTML",
        "SCSS",
        "ReactJS"
      ]
    },
    {
      href: "https://tkhquang.github.io/jquery-pomodoro-clock",
      source: "https://github.com/tkhquang/jquery-pomodoro-clock",
      imgSrc: loadedImages.pomodoroClock,
      text: "Pomodoro Clock",
      skillsUse: [
        "HTML",
        "CSS",
        "jQuery"
      ]
    },
    {
      href: "https://codepen.io/tkhquang/full/GPvYVL",
      source: "https://codepen.io/tkhquang/pen/GPvYVL",
      imgSrc: loadedImages.drumMachine,
      text: "Drum Machine",
      skillsUse: [
        "HTML",
        "SCSS",
        "ReactJS"
      ]
    },
    {
      href: "https://codepen.io/tkhquang/full/bORoQV",
      source: "https://codepen.io/tkhquang/pen/bORoQV",
      imgSrc: loadedImages.randomQuoteMachine,
      text: "Random Quote Machine",
      skillsUse: [
        "HTML",
        "SCSS",
        "jQuery",
        "Bootstrap"
      ]
    }
  ];
  return (
    <>
      <section className="projects">
        <h2 className="projects-header">
          {
            props.isPageImgLoaded(imgObj)
            ?
            "Projects"
            :
            "Loading..."
          }
        </h2>
        {
          props.isPageImgLoaded(imgObj)
          ?
          <ul className="project-list">
            {projectList.map((project) => (
              <li className="project-tile" key={project.href}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOut="fadeOutLeft"
                  className="img-link"
                >
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    <img src={project.imgSrc} alt={project.text} />
                  </a>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  animateOut="fadeOutRight"
                  className="desc"
                >
                  <h3>{project.text}</h3>
                  <div className="skills-use">
                    {project.skillsUse.map((skill) => (
                      <span className={skill.toLocaleLowerCase()} key={skill}>{skill}</span>
                    ))}
                  </div>
                  <div className="buttons">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">Visit</a>
                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
                  </div>
                </ScrollAnimation>
            </li>
            ))}
          </ul>
          :
          <Loading />
        }
      </section>
      <Button
        href="/portfolio/contact"
        title="Get in touch with Aleks!"
        text="Get in touch!"
      />
    </>
  );
}

export default LoadPageImage(Projects, imgObj);
