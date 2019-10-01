import React from 'react';

const GitHubCard = ({ user, followers }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <p>
        <a href={user.html_url}>{user.html_url}</a>
      </p>
      <div>
        {followers.map(follower => (
          <div key={follower.id}>{follower.login}</div>
        ))}
      </div>
    </div>
  );
};

export default GitHubCard;
