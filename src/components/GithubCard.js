import React from 'react';

const GitHubCard = ({ userCard }) => {
  return (
    <div>
      <img src={userCard.avatar_url} alt={userCard.login} />
      <h2>{userCard.name}</h2>
      <ul>
        <li>{userCard.login}</li>
        <li>{userCard.followers}</li>
        <li>{userCard.following}</li>
        <li>{userCard.url}</li>
      </ul>
    </div>
  );
};

export default GitHubCard;
