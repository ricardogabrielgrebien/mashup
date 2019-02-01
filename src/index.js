import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



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

    return (
      <ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
