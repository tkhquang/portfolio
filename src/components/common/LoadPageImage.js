import React, { Component } from "react";

const LoadPageImage = (WrappedComponent, imgObj) => class extends Component {
  constructor (props) {
    super (props);
    this.state= {};
    Object.keys(imgObj).forEach((imgName) => {
      this.state[imgName] = "";
    });
    this.imgObj = {
      ...imgObj
    };
  }
  handleImageLoaded = (image, src) => {
    this.setState({
      [image]: src
    });
  }
  isPageImgLoaded = (imgObj) => {
    const isEmpty = (str) => (!str || 0 === str.length);
    const checkList = [];
    Object.keys(imgObj).forEach((imgName) => {
      checkList.push(!isEmpty(this.state[imgName]));
    });
    const condiCheck = (condi, value) => condi.every((config) => config === value);
    return Boolean(condiCheck(checkList, true));
  }
  componentDidMount () {
    Object.keys(this.imgObj).forEach((imgName) => {
      this[imgName] = new Image();
      this[imgName].onload = () => this.handleImageLoaded(imgName, this.imgObj[imgName]);
      this[imgName].onerror = () => this.handleImageLoaded(imgName, this.imgObj[imgName]);
      this[imgName].src = this.imgObj[imgName];
    });
  }
  componentWillUnmount () {
    Object.keys(this.imgObj).forEach((imgName) => {
      this[imgName].onload = undefined;
      this[imgName].onerror = undefined;
    });
  }
  render() {
    return (
      <WrappedComponent
        {...this.props }
        isPageImgLoaded={this.isPageImgLoaded}
        loadedImages={this.state}
      />
    );
  }
};

export default LoadPageImage;
