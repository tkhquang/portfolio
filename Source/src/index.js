import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

history.listen(_ => {
  window.scrollTo({
    top: 0
  });
});

ReactDOM.render((
  <HashRouter>
    <App history={history} />
  </HashRouter>
), document.getElementById("root"));

serviceWorker.unregister();
