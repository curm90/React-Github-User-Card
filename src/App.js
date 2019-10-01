import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GithubUserCard from './components/GithubUserCard';
import GithubFollowersCard from './components/GithubFollowersCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: 'curm90',
      user: {},
      followers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    const userPromise = Axios.get(
      `https://api.github.com/users/${this.state.username}`
    );
    const followersPromise = Axios.get(
      `https://api.github.com/users/${this.state.username}/followers`
    );

    Promise.all([userPromise, followersPromise])
      .then(([userPromise, followersPromise]) => {
        this.setState({
          user: userPromise.data,
          followers: followersPromise.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='app'>
        <GithubUserCard user={this.state.user} />
        <GithubFollowersCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
