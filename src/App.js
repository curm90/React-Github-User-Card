import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GithubCard from './components/GithubCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      followers: []
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
    Axios.get('https://api.github.com/users/curm90/followers')
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <GithubCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
