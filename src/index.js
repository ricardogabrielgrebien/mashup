import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Chuck from './chucknorris';
import Redux from './redux';


class Resp extends React.Component{
  responseString = "asdf";
}



class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=redux')
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }



  render() {
    const { hits } = this.state;
    const { joke } = this.state;

    console.log(joke);

    return (
      <div>
        <Chuck />

        <div class="docdiv">
          <Redux />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
