import React from "react";
import Nstyle from "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from './auth';

export default function Navbar() {
  /*function login() {
    window.location.href = "./login.js";
  }
  function sign() {
    window.location.href = "./sign.js";
  }*/
    const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid mx-5" >
          <a
            className="navbar-brand fw-bold text-info"
            href="#"
            style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 1)" }}
          >
            <h2>AutoCare</h2>
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
            <ul
              className="navbar-nav me-auto mb-1 mb-lg-0 ms-lg-4  fs-5 "
              style={Nstyle}
            >
              <li className="nav-item me-lg-4">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-lg-4">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/profile"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item me-lg-4">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/contact"
                >
                  Help
                </Link>
              </li>
              <li className="nav-item me-lg-4">
                <Link
                  className="nav-link active "
                  aria-current="page"
                  to="/about"
                >
                  Aboutus
                </Link>
              </li>
            </ul>
            <div
    className="d-flex align-items-center justify-content-end w-100 my-1" // Aligns items to the right
    role="group"
    aria-label="Basic outlined example"
>
    {isLoggedIn ? (
        
        <div style={{ marginRight: '10px' }}> {/* Adjust margin as needed */}
            <Link to='/user'>
            <img
                src="https://cdn-icons-png.flaticon.com/128/12259/12259373.png"
                alt="Profile"
                className="rounded-circle"
                style={{ width: '60px', height: '60px' }}
            /></Link>
        </div>
    ) : null}

    {!isLoggedIn && (
        <div className="btn-group" role="group">
            <button
                type="button"
                className="btn btn-outline-success p-2 fw-bold me-2"
                onClick={() => {
                    window.location.href = "./login.js";
                }}
            >
                Login
            </button>

            <button
                type="button"
                className="btn btn-outline-success p-2 fw-bold"
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
    </>
  );
}
