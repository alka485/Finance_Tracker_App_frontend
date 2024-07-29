/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Quotes from './Quotes';

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;

  h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: #333;
  }

  .btn {
    background-color: var(--primary-color);
    border: none;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 0.5rem 0;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-green);
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

const HomePage = () => {
  return (
    <HomePageStyled>
      <h1>Welcome to your own Personal Finance Tracker</h1>
      <Quotes />
      <button className="btn"><Link to="/signup">Sign Up</Link></button>
      <button className="btn"><Link to="/signin">Sign In</Link></button>
    </HomePageStyled>
  );
};

export default HomePage;
