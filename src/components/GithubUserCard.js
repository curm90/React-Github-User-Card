import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35rem;
  margin: 2rem auto;
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 5px #d8d8d8;

  .profile-image {
    width: 10rem;

    img {
      border-radius: 50%;
      width: 100%;
    }
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    ul {
      list-style: none;

      li {
        font-weight: 700;
        margin: 0.2rem 0;
        font-weight: 700;
      }

      span {
        padding-right: 0.5rem;
        color: gray;
        margin-bottom: 1rem;
      }
    }
  }
`;

const GitHubUserCard = ({ user }) => {
  return (
    <CardContainer>
      <div className='profile-image'>
        <img src={user.avatar_url} alt={user.login} />
      </div>
      <div className='profile-info'>
        <ul>
          <li>
            <span>Name:</span>
            {user.name}
          </li>
          <li>
            <span>username:</span>
            {user.login}
          </li>
          <li>
            <span>Github Profile: </span>
            <a href={user.html_url}>{user.html_url}</a>
          </li>
        </ul>
      </div>
    </CardContainer>
  );
};

export default GitHubUserCard;
