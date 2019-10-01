import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GithubData from './components/GithubData';

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
        <GithubData userData={this.state.user} />
      </div>
    );
  }
}

export default App;
