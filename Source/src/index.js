import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollContext } from "react-router-scroll-4";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render((
  <Router basename={process.env.PUBLIC_URL}>
    <ScrollContext>
      <App />
    </ScrollContext>
  </Router>
), document.getElementById("root"));

serviceWorker.unregister();
