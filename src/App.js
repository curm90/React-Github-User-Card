import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/curm90')
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>App Component</p>
      </div>
    );
  }
}

export default App;
