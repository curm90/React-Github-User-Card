import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  handleSearchInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setUsername(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='search'
          onChange={this.handleSearchInput}
          placeholder='Search For User...'
          value={this.state.search}
        />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default SearchForm;
