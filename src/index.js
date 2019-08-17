import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import CaptureNoMatch from "./HOCs/CaptureNoMatch";
import * as serviceWorker from "./serviceWorker";

// Component to Scroll to Top of the Page everytime location change
const ScrollToTop = withRouter(class extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo({
        top: 0
      });
    }
  }
  render() {
    return this.props.children;
  }
});

ReactDOM.render((
  <BrowserRouter>
    <CaptureNoMatch>
      <ScrollToTop>
          <App />
      </ScrollToTop>
    </CaptureNoMatch>
  </BrowserRouter>
), document.getElementById("root"));

serviceWorker.unregister();
