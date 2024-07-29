/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled Components
const SignUpPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  .container {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    padding: 3rem;
    width: 100%;
    max-width: 400px;
    h1 {
      margin-bottom: 1.5rem;
      font-size: 2rem;
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

    .signin-link {
      text-align: center;
      margin-top: 1rem;

      a {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Replace with your sign-up logic (e.g., API call)
      // Example:
      // const response = await axios.post('/api/signup', { email, password });

      // If successful, redirect to sign-in page
      navigate('/signin');
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <SignUpPageStyled>
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignUp}>
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
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit">Sign Up</button>
          <div className="signin-link">
            <p>Already have an account? <a href="/signin">Sign In</a></p>
          </div>
        </form>
      </div>
    </SignUpPageStyled>
  );
};

export default SignUp;
