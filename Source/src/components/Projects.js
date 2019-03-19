import React, { Component, Fragment } from "react";
import "./Projects.scss";
import Fade from "react-reveal/Fade";
import pokemonCardViewer from "../images/pokemon-card-viewer.png";
import contactList from "../images/contact-list.png";
import javascriptCalculator from "../images/javascript-calculator.png";
import pomodoroClock from "../images/pomodoro-clock.png";
import drumMachine from "../images/drum-machine.png";
import randomQuoteMachine from "../images/random-quote-machine.png";

class Projects extends Component {
  constructor (props) {
    super (props);
    this.state = {
      pokemonCardViewer: "",
      contactList: "",
      javascriptCalculator: "",
      pomodoroClock: "",
      drumMachine: "",
      randomQuoteMachine: ""
    };
    this.listIMG = {
      pokemonCardViewer,
      contactList,
      javascriptCalculator,
      pomodoroClock,
      drumMachine,
      randomQuoteMachine
    };
  }
  handleImageLoaded = (image, src) => {
    this.setState({
      [image]: src
    });
  }
  componentDidMount () {
    Object.keys(this.listIMG).forEach((imageName) => {
      this[imageName] = new Image();
      this[imageName].src = this.listIMG[imageName];
      this[imageName].onload = () => this.handleImageLoaded(imageName, this[imageName].src);
      this[imageName].onerror = () => this.handleImageLoaded(imageName, this[imageName].src);
    });
  }
  componentWillUnmount () {
    Object.keys(this.listIMG).forEach((imageName) => {
      this[imageName].onload = undefined;
      this[imageName].onerror = undefined;
    });
  }
  render () {
    const isEmpty = (str) => (!str || 0 === str.length);
    const isLoaded = () => Boolean(
      !isEmpty(this.state.pokemonCardViewer) &&
      !isEmpty(this.state.contactList) &&
      !isEmpty(this.state.javascriptCalculator) &&
      !isEmpty(this.state.pomodoroClock) &&
      !isEmpty(this.state.drumMachine) &&
      !isEmpty(this.state.randomQuoteMachine)
    );
    return (
      <section className="projects">
          <h2 className="projects-header">
            {
              isLoaded()
              ?
              "Projects"
              :
              "Loading..."
            }
          </h2>
          {
            isLoaded()
            &&
            <Fragment>
              <ul className="project-list">
                <li className="project-tile">
                  <Fade left>
                    <a className="img-link" href="https://tkhquang.github.io/pokemon-card-viewer/" target="_blank" rel="noopener noreferrer">
                      <img src={this.state.pokemonCardViewer} alt="Project Tile Preview" />
                    </a>
                  </Fade>
                  <Fade right>
                    <div className="desc">
                      <h3>Pokémon Card Viewer</h3>
                      <div className="skills-use">
                        <span className="html">HTML</span>
                        <span className="css">CSS</span>
                        <span className="reactjs">ReactJS</span>
                        <span className="redux">Redux</span>
                      </div>
                      <div className="buttons">
                        <a href="https://tkhquang.github.io/pokemon-card-viewer/" target="_blank" rel="noopener noreferrer">Visit</a>
                        <a href="https://github.com/tkhquang/pokemon-card-viewer-source" target="_blank" rel="noopener noreferrer">Source</a>
                      </div>
                    </div>
                  </Fade>
                </li>
                <li className="project-tile">
                    <Fade left>
                      <a className="img-link" href="https://tkhquang.github.io/contactlist/" target="_blank" rel="noopener noreferrer">
                        <img src={this.state.contactList} alt="Project Tile Preview" />
                      </a>
                    </Fade>
                    <Fade right>
                      <div className="desc">
                        <h3>Contact List App</h3>
                        <div className="skills-use">
                          <span className="html">HTML</span>
                          <span className="css">CSS</span>
                          <span className="reactjs">ReactJS</span>
                          <span className="redux">Redux</span>
                        </div>
                        <div className="buttons">
                          <a href="https://tkhquang.github.io/contactlist/" target="_blank" rel="noopener noreferrer">Visit</a>
                          <a href="https://github.com/tkhquang/contactlist-source" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                      </div>
                    </Fade>
                </li>
                <li className="project-tile">
                    <Fade left>
                      <a className="img-link" href="https://tkhquang.github.io/simple-reactjs-calculator/" target="_blank" rel="noopener noreferrer">
                        <img src={this.state.javascriptCalculator} alt="Project Tile Preview" />
                      </a>
                    </Fade>
                    <Fade right>
                      <div className="desc">
                        <h3>Javascript Calculator</h3>
                        <div className="skills-use">
                          <span className="html">HTML</span>
                          <span className="scss">SCSS</span>
                          <span className="reactjs">ReactJS</span>
                        </div>
                        <div className="buttons">
                          <a href="https://tkhquang.github.io/simple-reactjs-calculator/" target="_blank" rel="noopener noreferrer">Visit</a>
                          <a href="https://github.com/tkhquang/simple-reactjs-calculator" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                      </div>
                    </Fade>
                </li>
                <li className="project-tile">
                    <Fade left>
                      <a className="img-link" href="https://tkhquang.github.io/jquery-pomodoro-clock/" target="_blank" rel="noopener noreferrer">
                        <img src={this.state.pomodoroClock} alt="Project Tile Preview" />
                      </a>
                    </Fade>
                    <Fade right>
                      <div className="desc">
                        <h3>Pomodoro Clock</h3>
                        <div className="skills-use">
                          <span className="html">HTML</span>
                          <span className="css">CSS</span>
                          <span className="jquery">jQuery</span>
                        </div>
                        <div className="buttons">
                          <a href="https://tkhquang.github.io/jquery-pomodoro-clock/" target="_blank" rel="noopener noreferrer">Visit</a>
                          <a href="https://github.com/tkhquang/jquery-pomodoro-clock" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                      </div>
                    </Fade>
                </li>
                <li className="project-tile">
                    <Fade left>
                      <a className="img-link" href="https://codepen.io/tkhquang/full/GPvYVL" target="_blank" rel="noopener noreferrer">
                        <img src={this.state.drumMachine} alt="Project Tile Preview" />
                      </a>
                    </Fade>
                    <Fade right>
                      <div className="desc">
                        <h3>Drum Machine</h3>
                        <div className="skills-use">
                          <span className="html">HTML</span>
                          <span className="scss">SCSS</span>
                          <span className="reactjs">ReactJS</span>
                        </div>
                        <div className="buttons">
                          <a href="https://codepen.io/tkhquang/full/GPvYVL" target="_blank" rel="noopener noreferrer">Visit</a>
                          <a href="https://codepen.io/tkhquang/pen/GPvYVL" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                      </div>
                    </Fade>
                </li>
                <li className="project-tile">
                    <Fade left>
                      <a className="img-link" href="https://codepen.io/tkhquang/full/bORoQV" target="_blank" rel="noopener noreferrer">
                        <img src={this.state.randomQuoteMachine} alt="Project Tile Preview" />
                      </a>
                    </Fade>
                    <Fade right>
                      <div className="desc">
                        <h3>Random Quote Machine</h3>
                        <div className="skills-use">
                          <span className="html">HTML</span>
                          <span className="scss">SCSS</span>
                          <span className="bootstrap">Bootstrap</span>
                          <span className="jquery">jQuery</span>
                        </div>
                        <div className="buttons">
                          <a href="https://codepen.io/tkhquang/full/bORoQV" target="_blank" rel="noopener noreferrer">Visit</a>
                          <a href="https://codepen.io/tkhquang/pen/bORoQV" target="_blank" rel="noopener noreferrer">Source</a>
                        </div>
                      </div>
                    </Fade>
                </li>
              </ul>
            </Fragment>
          }
      </section>
    );
  }
}

export default Projects;
