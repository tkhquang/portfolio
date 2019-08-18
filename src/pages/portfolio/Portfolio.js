import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PageLoading from "components/common/PageLoading";
import LoadPageImage from "components/common/LoadPageImage";

import welcomeJPG from "resources/portfolio/images/welcome.jpg";
import arrowDownPNG from "resources/portfolio/images/arrow_down.png";
import backgroundJPG from "resources/portfolio/images/background02.jpg";
import AleksPNG from "resources/portfolio/images/Aleks.png";
import fePNG from "resources/portfolio/images/felogo.png";
import CSS3 from "resources/portfolio/images/CSS3.png";
import HTML5 from "resources/portfolio/images/HTML5.png";
import JS from "resources/portfolio/images/JS.png";
import Bootstrap from "resources/portfolio/images/Bootstrap.png";
import Jquery from "resources/portfolio/images/Jquery.png";
import ReactJS from "resources/portfolio/images/ReactJS.png";

import "./Portfolio.css";

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

const MetaInfo = () => {
  const desc = "Highly motivated, self-starting developer with a good understanding of HTML5, CSS3, JavaScript and modern JS libraries such as ReactJS, Redux seeking to launch a career building web applications and services.";
  const title = "Aleks - Front-End Engineer";
  const url = process.env.REACT_APP_URL + "/portfolio";
  const imgUrl = url + backgroundJPG;
  return (
    <Helmet>
      <meta key="description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:site" content="@holy_quangtk" />
      <meta name="twitter:creator" content="@holy_quangtk" />
      <meta name="twitter:image" content={imgUrl} />
    </Helmet>
  );
};

const Portfolio = (props) => {
  const { loadedImages } = props;
  return (
    <>
      <MetaInfo />
      {
        props.isPageImgLoaded(imgObj)
        ?
        <div className="Portfolio">
          <Header />
          <main>
            <Switch>
              <Redirect exact path="/portfolio" to="/portfolio/about" />
              <Route
                exact
                path="/portfolio/about"
                render={() =>
                  <>
                    <Welcome
                      welcomeJPG={loadedImages.welcomeJPG}
                      arrowDownPNG={loadedImages.arrowDownPNG}
                    />
                    <About
                      AleksPNG={loadedImages.AleksPNG}
                    />
                    <Skills
                      backgroundJPG={loadedImages.backgroundJPG}
                      CSS3={loadedImages.CSS3}
                      HTML5={loadedImages.HTML5}
                      JS={loadedImages.JS}
                      Bootstrap={loadedImages.Bootstrap}
                      Jquery={loadedImages.Jquery}
                      ReactJS={loadedImages.ReactJS}
                    />
                  </>
                }
              />
              <Route
                exact
                path="/portfolio/projects"
                component={Projects}
              />
              <Route
                exact
                path="/portfolio/contact"
                component={Contact}
              />
              <Redirect to="/not-found" />
            </Switch>
          </main>
          <Footer
            AleksPNG={loadedImages.AleksPNG}
            fePNG={loadedImages.fePNG}
          />
        </div>
        :
        <PageLoading />
      }
    </>
  );
};

export default LoadPageImage(Portfolio, imgObj);
