import React from "react";
import { withRouter } from "react-router-dom";

const NoMatch = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "100vh"
    }}
  >
    <h3>
    404 - Not Found</h3>
  </div>
);

const CaptureNoMatch = withRouter(({children, location}) => {
  return location && location.pathname === "/404" ? <NoMatch /> : children;
});

export default CaptureNoMatch;

