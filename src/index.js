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


  loadData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
         //console.log(xhttp.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }


  render() {
    const { hits } = this.state;

    //this.loadData("https://pokeapi.co/api/v2/pokemon/1/");
    var resp;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
         //console.log(xhttp.responseText);
         //resp = xhttp.responseText;
      }
    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/1/");
    xhttp.send();

    this.componentDidMount();
    //console.log(xhttp.responseText);


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
