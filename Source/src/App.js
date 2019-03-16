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

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      welcomeLoaded: false,
      backgroundLoaded: false,
      scrolled: false
    };
  }
  handleWelcomeLoaded = () => {
    this.setState({
      welcomeLoaded: true
    });
  }
  handleBackgroundLoaded = () => {
    this.setState({
      backgroundLoaded: true
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
    this.welcomeImg = new Image();
    this.welcomeImg.src = welcomeJPG;
    this.welcomeImg.onload = this.handleWelcomeLoaded;
    this.welcomeImg.onerror = this.handleWelcomeLoaded;
    this.backgroundImg = new Image();
    this.backgroundImg.src = backgroundJPG;
    this.backgroundImg.onload = this.handleBackgroundLoaded;
    this.backgroundImg.onerror = this.handleBackgroundLoaded;
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount () {
    this.image.onload = undefined;
    this.image.onerror = undefined;
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <Fragment>
        {this.state.backgroundLoaded && this.state.welcomeLoaded
          ?
          <div className="App" onScroll={this.handleScroll}>
            <Header scrolled={this.state.scrolled} />
            <main>
              <Switch>
                <Route exact path="/" render={props =>
                    <Fragment>
                      <Welcome image={this.welcomeImg.src} />
                      <About />
                      <Skills image={this.backgroundImg.src} />
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
            <Footer />
          </div>
          :
          <Loading />
        }
      </Fragment>
    );
  }
}

export default App;
