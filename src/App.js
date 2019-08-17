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
import fePNG from "./images/felogo.png";
import CSS3 from "./images/CSS3.png";
import HTML5 from "./images/HTML5.png";
import JS from "./images/JS.png";
import Bootstrap from "./images/Bootstrap.png";
import Jquery from "./images/Jquery.png";
import ReactJS from "./images/ReactJS.png";
//== Media>

const imgObj = {
  welcomeJPG,
  arrowDownPNG,
  backgroundJPG,
  AleksPNG,
  fePNG,
  CSS3,
  HTML5,
  JS,
  Bootstrap,
  Jquery,
  ReactJS
}

class App extends Component {
  // constructor (props) {
  //   super (props);
  // }
  componentWillMount () {
    // Fix "#" placed incorrectly when query string is present on load
    if (window.location.search) {
      window.location.href = window.location.href.split("?")[0];
    }
  }
  render() {
    const loadedImgObj = {...this.props.loadedImgObj};
    return (
      <Fragment>
        {
          this.props.isPageImgLoaded(imgObj)
          ?
          <div className="App">
            <Header />
            <main>
              <Switch>
                <Route exact path="/" render={props =>
                    <Fragment>
                      <Welcome
                        welcomeJPG={loadedImgObj.welcomeJPG}
                        arrowDownPNG={loadedImgObj.arrowDownPNG}
                      />
                      <About
                        AleksPNG={loadedImgObj.AleksPNG}
                      />
                      <Skills
                        backgroundJPG={loadedImgObj.backgroundJPG}
                        CSS3={loadedImgObj.CSS3}
                        HTML5={loadedImgObj.HTML5}
                        JS={loadedImgObj.JS}
                        Bootstrap={loadedImgObj.Bootstrap}
                        Jquery={loadedImgObj.Jquery}
                        ReactJS={loadedImgObj.ReactJS}
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
              AleksPNG={loadedImgObj.AleksPNG}
              fePNG={loadedImgObj.fePNG}
            />
          </div>
          :
          <PageLoading />
        }
      </Fragment>
    );
  }
}

export default PageImageLoaded(App, imgObj);
