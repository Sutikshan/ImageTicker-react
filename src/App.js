import React, { Component } from 'react';
import ImageTicker from './ImageTicker';
import './App.css';
import './images';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <ImageTicker data={this.props.data} alt="logo" />
        </div>
        <p className="App-intro">
          Images.
        </p>
      </div>
    );
  }
}

export default App;
