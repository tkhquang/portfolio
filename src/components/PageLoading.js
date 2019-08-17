import React from "react";
import loadingSVG from "../images/pacman-loading.svg";
import "./PageLoading.css";

const PageLoading = () => (
  <div className="page-loading">
    <img src={loadingSVG} alt="LOADING..." />
  </div>
);

export default PageLoading;
