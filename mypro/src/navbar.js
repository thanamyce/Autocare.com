import React from "react";
import './navbar.css'; // Ensure your CSS file is imported
import { Link } from "react-router-dom";
import { useAuth } from './auth';

export default function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid mx-5">
        <a className="navbar-brand fw-bold" href="/">
          AutoCare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0 ms-lg-4 fs-5">
            <li className="nav-item me-lg-4">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item me-lg-4">
              <Link className="nav-link active" aria-current="page" to="/profile">
                Services
              </Link>
            </li>
            <li className="nav-item me-lg-4">
              <Link className="nav-link active" aria-current="page" to="/contact">
                Help
              </Link>
            </li>
            <li className="nav-item me-lg-4">
              <Link className="nav-link active" aria-current="page" to="/about">
                AboutUs
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center justify-content-end w-100 my-1">
            {isLoggedIn ? (
              <div style={{ marginRight: '10px' }}>
                <Link to='/user'>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/12259/12259373.png"
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: '60px', height: '60px' }}
                  />
                </Link>
              </div>
            ) : null}

            {!isLoggedIn && (
            <div >
            <button
              
              style={{width: '100px', borderRadius: '20px', padding: '10px'}}
              className="btn  btn-outline-success me-2" // Custom class for your styles
              onClick={() => {
                window.location.href = "./login.js";
              }}
            >
              Login
            </button>
            <button
              
              style={{width: '100px', borderRadius: '20px', padding: '10px'}}
              className="btn btn-outline-success me-2"
              onClick={() => {
                window.location.href = "./sign.js";
              }}
            >
              Sign Up
            </button>
          </div>
          
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
