import React, { Component } from 'react';
import './styles/PaginationBar.css';

const active = 'active col';
const deactive = 'deactive col';

class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { first: 0, last: 3 };
  }
  firstVisible = (first) => first === 0;
  lastVisible = (last, imageCount) => last === imageCount;

  turnPage = (page) => {
    const { first, last } = this.state;
    this.setState({ first: first + page, last: last + page });
  }

  next = () => {
    const { first, last } = this.state;
    const { imageCount } = this.props;

    if (!this.lastVisible(last, imageCount)) {
      this.turnPage(1);
    }
  }

  prev = () => {
    const { first, last } = this.state;

    if (!this.firstVisible(first)) {
      this.turnPage(-1);
    }
  }
  render() {
    const { first, last } = this.state;
    const { changeImage } = this.props;
    const imageCounter = [];

    for (let i = first; i < last; i++) {
      imageCounter.push((
        <div className={active} key={i} onClick={() => changeImage(i)}>
          {i}
        </div>
      ));
    }
    // decide the styling of left and right arrow keys
    const prevClass = this.firstVisible(first) ? deactive : active;
    const nextClass = this.lastVisible(last) ? deactive : active;

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
