import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GithubUserCard from './components/GithubUserCard';
import GithubFollowersCard from './components/GithubFollowersCard';
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: 'curm90',
      user: {},
      followers: []
    };
  }

  setUsername = username => {
    this.setState({ username });
  };

  fetchUser = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => console.log(err));
  };

  fetchFollowers = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  componentDidUpdate(prevProps, prevState) {
    debugger;
    if (prevState.username !== this.state.username) {
      this.fetchUser();
      this.fetchFollowers();
    }
  }

  render() {
    return (
      <div className='app'>
        <SearchForm setUsername={this.setUsername} />
        <GithubUserCard user={this.state.user} />
        <GithubFollowersCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
