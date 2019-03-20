import React, { Component } from "react";

const PageImageLoaded = (WrappedComponent, imageList) => {
  return class extends Component {
    constructor (props) {
      super (props);
      this.state= {};
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
    checkLoaded = (imageList, objList) => {
      const isEmpty = (str) => (!str || 0 === str.length);
      const checkList = [];
      Object.keys(imageList).forEach((imageName) => {
        checkList.push(!isEmpty(objList[imageName]));
      });
      const condiCheck = (condi, value) => condi.every((config) => config === value);
      return Boolean(condiCheck(checkList, true));
    }
    componentDidMount () {
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
      return <WrappedComponent {...this.props } loadedCheck={this.checkLoaded} images={this.state} />
    }
  };
}

export default PageImageLoaded;
