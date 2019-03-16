import React from "react";
import loadingSVG from "../images/pacman-loading.svg";
import "./Loading.css";

const Loading = () => (
  <div className="loading">
    <img src={loadingSVG} alt="Loading..." />
  </div>
);

export default Loading;
