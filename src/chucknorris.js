import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Chuck extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        joke: "",
      };
    }

    componentDidMount() {

        fetch('https://api.chucknorris.io/jokes/random')
          .then(response => response.json())
          .then(data => this.setState({ joke: data.value }));
    }


    render(){
      return this.state.joke;
    }
}

export default Chuck;
