import React, { Component } from 'react';
import images from './images';
import './ImageTicker.css';
import PaginationBar from './PaginationBar.js';

class ImageTicker extends Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
    this.imageCount = this.props.data.carousel.length;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  changeImage = (index) => {
    this.setState({
      imageIndex: index % this.imageCount,
    });
  }

  tick() {
    const index = this.state.imageIndex + 1;
    this.changeImage(index);
  }

  render() {
    const { imageurl, title, synopsis } = this.props.data.carousel[this.state.imageIndex] || {};
    let imgSrc = images[imageurl] || imageurl;

    return (
      <div>
        <h3>{title}</h3>
        <div className="row">
          <img className="image col-9" src={imgSrc} role="presentation" />
          <label className="synopsis col-3">{synopsis}</label>
        </div>
        <div className="row">
          <PaginationBar className="pagination-bar" imageCount={this.imageCount} changeImage={this.changeImage} />
        </div>
      </div>
    );
  }
}

export default ImageTicker;
