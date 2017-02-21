import React, { Component } from 'react';
import ImageTicker from './ImageTicker';
import './styles/App.css';
import './images';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div>
          <ImageTicker data={this.props.data} alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
