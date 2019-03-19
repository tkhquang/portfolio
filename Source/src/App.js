import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import welcomeJPG from './images/welcome.jpg';
import backgroundJPG from './images/background02.jpg';
import AleksPNG from "./images/Aleks.png";
import CSS3 from "./images/CSS3.png";
import HTML5 from "./images/HTML5.png";
import JS from "./images/JS.png";
import Bootstrap from "./images/Bootstrap.png";
import Jquery from "./images/Jquery.png";
import ReactJS from "./images/ReactJS.png";

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      welcomeJPG: "",
      backgroundJPG: "",
      AleksPNG: "",
      CSS3: "",
      HTML5: "",
      JS: "",
      Bootstrap: "",
      Jquery: "",
      ReactJS: "",
      scrolled: false
    };
    this.listIMG = {
      welcomeJPG,
      backgroundJPG,
      AleksPNG,
      CSS3,
      HTML5,
      JS,
      Bootstrap,
      Jquery,
      ReactJS
    };
  }
  handleImageLoaded = (image, src) => {
    this.setState({
      [image]: src
    });
  }
  handleScroll = () => {
    const isScrolled = Boolean(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50);
    if (!this.state.scrolled && isScrolled) {
      this.setState({
        scrolled: true
      });
    }
    if (this.state.scrolled && !isScrolled) {
      this.setState({
        scrolled: false
      });
    }
  }
  componentDidMount () {
    Object.keys(this.listIMG).forEach((imageName) => {
      this[imageName] = new Image();
      this[imageName].src = this.listIMG[imageName];
      this[imageName].name = imageName;
      this[imageName].onload = () => this.handleImageLoaded(this[imageName].name, this[imageName].src);
      this[imageName].onerror = () => this.handleImageLoaded(this[imageName].name, this[imageName].src);
    });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount () {
    Object.keys(this.listIMG).forEach((imageName) => {
      this[imageName].onload = undefined;
      this[imageName].onerror = undefined;
    });
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const isEmpty = (str) => (!str || 0 === str.length);
    const isLoaded = () => Boolean(
      !isEmpty(this.state.backgroundJPG) &&
      !isEmpty(this.state.welcomeJPG) &&
      !isEmpty(this.state.AleksPNG) &&
      !isEmpty(this.state.CSS3) &&
      !isEmpty(this.state.HTML5) &&
      !isEmpty(this.state.JS) &&
      !isEmpty(this.state.Bootstrap) &&
      !isEmpty(this.state.Jquery) &&
      !isEmpty(this.state.ReactJS)
    );
    return (
      <Fragment>
        {
          isLoaded()
          ?
          <div className="App">
            <Header scrolled={this.state.scrolled} history={this.props.history} />
            <main>
              <Switch>
                <Route exact path="/" render={props =>
                    <Fragment>
                      <Welcome welcomeJPG={this.state.welcomeJPG} />
                      <About AleksPNG={this.state.AleksPNG} />
                      <Skills
                        backgroundJPG={this.state.backgroundJPG}
                        CSS3={this.state.CSS3}
                        HTML5={this.state.HTML5}
                        JS={this.state.JS}
                        Bootstrap={this.state.Bootstrap}
                        Jquery={this.state.Jquery}
                        ReactJS={this.state.ReactJS}
                      />
                      <Button
                        href="/projects/"
                        title="Check Aleks's Projects"
                        text="VIEW MY PROJECTS"
                      />
                    </Fragment>
                  }
                />
                <Route path="/projects/" render={props =>
                    <Fragment>
                      <Projects />
                      <Button
                        href="/contact/"
                        title="Get in touch with Aleks!"
                        text="Get in touch!"
                      />
                    </Fragment>
                  }
                />
                <Route path="/contact/" render={props =>
                    <Fragment>
                      <Contact />
                      <Button
                        href="/"
                        title="Get to know Aleks!"
                        text="Get to know Aleks!"
                      />
                    </Fragment>
                  }
                />
              </Switch>
            </main>
            <Footer AleksPNG={this.state.AleksPNG} history={this.props.history} />
          </div>
          :
          <Loading />
        }
      </Fragment>
    );
  }
}

export default App;
