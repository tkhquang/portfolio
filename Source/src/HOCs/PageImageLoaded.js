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
      const isLoaded = () => {
        const isEmpty = (str) => (!str || 0 === str.length);
        const checkList = [];
        Object.keys(this.listIMG).forEach((imageName) => {
          checkList.push(!isEmpty(this.state[imageName]));
        });
        const condiCheck = (condi, value) => condi.some((config) => config === value);
        return Boolean(condiCheck(checkList, true));
      }
      return <WrappedComponent {...this.props } loaded={isLoaded()} />
    }
  };
}

export default PageImageLoaded;
