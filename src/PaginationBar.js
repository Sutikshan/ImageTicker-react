import React, { Component } from 'react';
import './PaginationBar.css';

class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { first: 0, last: 3 };
  }

  next = () => {
    const { first, last } = this.state;
    const { imageCount } = this.props;

    if (last < imageCount) {
      this.setState({ first: first + 1, last: last + 1 });
    }
  }

  prev = () => {
    const { first, last } = this.state;

    if (first > 0) {
      this.setState({ first: first - 1, last: last - 1 });
    }
  }
  render() {
    const { first, last } = this.state;
    const { imageCount, changeImage } = this.props;
    const active = 'active col';
    const deactive = 'deactive col';
    const imageCounter = [];

    for (let i = first; i < last; i++) {
      imageCounter.push((
        <div className={active} key={i} onClick={() => changeImage(i)}>
          {i}
        </div>
      ));
    }
    // decide the styling of left and right arrow keys
    let nextClass = active, prevClass = active;
    if (first === 0) {
      prevClass = deactive;
    }
    if (last >= imageCount) {
      nextClass = deactive;
    }

    return (
      <span className="pagination-bar">
          <div className={prevClass} onClick={this.prev}>&lt;</div>
          { imageCounter }
          <div className={nextClass} onClick={this.next}>&gt;</div>
      </span>
    );
  }
}


export default PaginationBar;
