import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
//== <Component
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Button from "./components/Button";
import Footer from "./components/Footer";
import PageLoading from "./components/PageLoading";
import PageImageLoaded from "./HOCs/PageImageLoaded";
//== Component>
//== <Media
import welcomeJPG from './images/welcome.jpg';
import arrowDownPNG from "./images/arrow_down.png";
import backgroundJPG from './images/background02.jpg';
import AleksPNG from "./images/Aleks.png";
import CSS3 from "./images/CSS3.png";
import HTML5 from "./images/HTML5.png";
import JS from "./images/JS.png";
import Bootstrap from "./images/Bootstrap.png";
import Jquery from "./images/Jquery.png";
import ReactJS from "./images/ReactJS.png";
//== Media>

const imageList = {
  welcomeJPG,
  arrowDownPNG,
  backgroundJPG,
  AleksPNG,
  CSS3,
  HTML5,
  JS,
  Bootstrap,
  Jquery,
  ReactJS
}

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      scrolled: false
    };
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
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount () {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <Fragment>
        {
          this.props.loadedCheck(imageList, this.props.imageLoadedState)
          ?
          <div className="App">
            <Header scrolled={this.state.scrolled} history={this.props.history} />
            <main>
              <Switch>
                <Route exact path="/" render={props =>
                    <Fragment>
                      <Welcome
                        welcomeJPG={this.props.imageLoadedState.welcomeJPG}
                        arrowDownPNG={this.props.imageLoadedState.arrowDownPNG}
                      />
                      <About
                        AleksPNG={this.props.imageLoadedState.AleksPNG}
                      />
                      <Skills
                        backgroundJPG={this.props.imageLoadedState.backgroundJPG}
                        CSS3={this.props.imageLoadedState.CSS3}
                        HTML5={this.props.imageLoadedState.HTML5}
                        JS={this.props.imageLoadedState.JS}
                        Bootstrap={this.props.imageLoadedState.Bootstrap}
                        Jquery={this.props.imageLoadedState.Jquery}
                        ReactJS={this.props.imageLoadedState.ReactJS}
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
            <Footer
              AleksPNG={this.props.imageLoadedState.AleksPNG}
              history={this.props.history}
            />
          </div>
          :
          <PageLoading />
        }
      </Fragment>
    );
  }
}

export default PageImageLoaded(App, imageList);
