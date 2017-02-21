import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

const data = {"carousel":[
	{"imageurl": "images/bike.png", "title":"A Guy On A Bike", "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link": "www.good.com"},
	{"imageurl": "images/library.png", "title":"Books And Stuff", "synopsis":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", "link": "www.bad.com"},
	{"imageurl": "images/people.png", "title":"At The Movies", "synopsis":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", "link": "www.imdb.com"},
	{"imageurl": "images/bust.png", "title":"Some Clever Guy", "synopsis":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.", "link": "www.stackoverflow.com"},
	{"imageurl": "images/cat.png", "title":"I'm A Cat", "synopsis":"To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", "link": "www.massive.co"}
]};

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
