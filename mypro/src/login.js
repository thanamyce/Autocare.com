
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = new useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (res.data.success) {
        setMessage("Login Successful");
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
    <>
      <div>
        <div
          className="container bg-light mt-lg-4 w-25 pt-5 ps-5 pe-5 pb-3 bg-light"
          style={{
            borderRadius: "20px",
            boxShadow: "2px 2px 6px black",
          }}
        >
          <form onSubmit={handleSubmit}>
            <p
              className="text-center pb-3  fw-bold"
              style={{ fontSize: "45px" }}
            >
              Login
            </p>
            <div className="mb-3 ">
              <label HTMLfor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control  border border-success"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label HTMLfor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control  border border-success"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="fs-bold pt-3 text-center">{message}</p>
            </div>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary " style={{width: '200px', borderRadius: '15px'}}>
              Login
            </button></div>
            <p className="fs-bold pt-3 text-center">
              Don't Have Account <a href="./sign.js">Sign-in</a>
            </p>
          </form>
        </div>
      </div>
      
      
     
    </>
  );
}
