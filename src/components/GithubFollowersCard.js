import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 22rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 16rem;
    background: #f4f4f4;
    border-radius: 5px;
    box-shadow: 4px 4px 5px #d8d8d8;
    margin: 1rem 0;

    img {
      border-radius: 50%;
      width: 10rem;
      box-shadow: 4px 4px 5px #d8d8d8;
    }
  }
`;

const GithubFollowersCard = ({ followers }) => {
  return (
    <Div>
      {followers.map(follower => (
        <div key={follower.id}>
          <img src={follower.avatar_url} alt={follower.id} />
          <p>{follower.login}</p>
        </div>
      ))}
    </Div>
  );
};

export default GithubFollowersCard;
