import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export default function Login() {
  const { login } = useAuth();
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (res.data.success) {
        setMessage("Login Successful");
        login();
        setTimeout(() => {
          navigate('/'); // Redirect to home after successful login
        }, 500);
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      console.error('There was an error with the login request!', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container bg-light  w-md-50 p-5" style={{ borderRadius: "20px", boxShadow: "2px 2px 6px black", width: '380px'}}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-3 fw-bold">Login</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control border border-success"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control border border-success"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-success text-center pt-3">{message}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary" style={{ width: '200px', borderRadius: '15px' }}>
              Login
            </button>
          </div>
          <p className="text-center pt-3">
            Don't have an account? <a href="./sign.js">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
