import React from 'react';
import GithubCard from './GithubCard';

const GithubData = ({ userData }) => {
  console.log(userData);

  return (
    <div>
      <h1>GithubData Component</h1>
      <GithubCard userCard={userData} />
    </div>
  );
};

export default GithubData;
