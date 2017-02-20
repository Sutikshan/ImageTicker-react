import React, { Component } from 'react';

class ImageTicker extends Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const index = this.state.imageIndex + 1;
    const imageCount = this.props.data.carousel.length;

    this.setState({
      imageIndex: index % imageCount,
    });
  }

  render() {
    const imgSrc = this.props.data.carousel[this.state.imageIndex].imageurl;
    console.log(imgSrc);
    return (
      <div>
        <img src={imgSrc} role="presentation" />
      </div>
    );
  }
}

export default ImageTicker;
