import React, { Component } from "react";

const PageImageLoaded = (WrappedComponent, imageList) => class extends Component {
  constructor (props) {
    super (props);
    this.state= {
      loading: true
    };
    Object.keys(imageList).forEach((imageName) => {
      this.state[imageName] = "";
    });
    this.listIMG = {
      ...imageList
    };
  }
  handleImageLoaded = (image, src) => {
    this.setState({
      [image]: src
    });
  }
  checkLoaded = (imageList, state) => {
    const isEmpty = (str) => (!str || 0 === str.length);
    const checkList = [];
    Object.keys(imageList).forEach((imageName) => {
      checkList.push(!isEmpty(state[imageName]));
    });
    const condiCheck = (condi, value) => condi.every((config) => config === value);
    return Boolean(condiCheck(checkList, true) && !state.loading);
  }
  componentDidMount () {
    this.setState({
      loading: false
    });
    Object.keys(this.listIMG).forEach((imageName) => {
      this[imageName] = new Image();
      this[imageName].src = this.listIMG[imageName];
      this[imageName].name = imageName;
      this[imageName].onload = () => this.handleImageLoaded(this[imageName].name, this[imageName].src);
      this[imageName].onerror = () => this.handleImageLoaded(this[imageName].name, this[imageName].src);
    });
  }
  componentWillUnmount () {
    Object.keys(this.listIMG).forEach((imageName) => {
      this[imageName].onload = undefined;
      this[imageName].onerror = undefined;
    });
  }
  render() {
    return <WrappedComponent {...this.props } loadedCheck={this.checkLoaded} imageLoadedState={this.state} />
  }
};

export default PageImageLoaded;
