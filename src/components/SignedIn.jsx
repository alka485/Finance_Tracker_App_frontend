/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import FinancialRecord   from './FinancialRecordProvider'

// Styled Components
const SignInPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  .container {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    width: 100%;
    max-width: 400px;
    h1 {
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .form-group {
      margin-bottom: 1rem;
      
      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }

    .error {
      color: red;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
      padding: 0.75rem;
      background-color: var(--color-accent);
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background-color: var(--color-green);
      }
    }

    .signup-link {
      text-align: center;
      margin-top: 1rem;
      a {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

const SignedIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('All fields are required');
      return;
    }

    try {
      navigate('/financial-record');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };
  return (
    <SignInPageStyled>
      <div className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          {error && <div className="error">{error}</div>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Sign In</button>
          <div className="signup-link">
            <p> Don't have an account? <a href="/signup">Sign Up</a></p>
          </div>
        </form>
      </div>
    </SignInPageStyled>
  );
};

export default SignedIn;
