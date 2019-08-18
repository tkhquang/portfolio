import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Loading from "components/common/PageLoading";
import ScrollToTop from "components/ScrollToTop";

import "./index.css";

// const Home = React.lazy(() => import("pages/home/Home"));
const Portfolio = React.lazy(() => import("pages/portfolio/Portfolio"));
const NotFound = React.lazy(() => import("pages/NotFound"));

ReactDOM.render((
  <BrowserRouter>
    <ScrollToTop>
      <Suspense fallback={<Loading />}>
        <Switch>
          {
            // Under Construction
            // <Route exact path="/" component={Home} />
          }
          <Redirect exact path="/" to="/portfolio" />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/not-found" component={NotFound}/>
          <Redirect exact to="/not-found" />
        </Switch>
      </Suspense>
    </ScrollToTop>
  </BrowserRouter>
), document.getElementById("root"));

serviceWorker.unregister();
