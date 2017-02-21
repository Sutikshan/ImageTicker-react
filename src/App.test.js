import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing for empty data', () => {
  const data = { carousel: [] };
  const div = document.createElement('div');
  ReactDOM.render(<App data={data} />, div);
});

it('renders without crashing with data', () => {
  const data = {
    "carousel":[
	{"imageurl": "images/bike.png", "title":"A Guy On A Bike", "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link": "www.good.com"}]
};

  const div = document.createElement('div');
  ReactDOM.render(<App data={data} />, div);
});