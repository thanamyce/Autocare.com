import React from 'react';
import Nstyle from './navbar.css';
import {
    Link
  } from "react-router-dom";

export default function navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid mx-5">
    <a className="navbar-brand fw-bold text-info" href="#" style={{textShadow: '1px 1px 1px rgba(0, 0, 0, 1)'}}><h2>AutoCare</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-1 mb-lg-0 ms-lg-4  fs-5 " style={Nstyle}>
        
        <li className="nav-item me-lg-4">
          <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item me-lg-4">
          <Link className="nav-link active " aria-current="page" to="/profile">Profile</Link>
        </li>
        <li className="nav-item me-lg-4">
          <Link className="nav-link active " aria-current="page" to="/contact">Contactus</Link>
        </li>
        <li className="nav-item me-lg-4">
          <Link className="nav-link active " aria-current="page" to="/about">Aboutus</Link>
          
        </li>
        
        </ul>
        <div class="btn-group w-25 my-1 " role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-success p-2 fw-bold">Login</button>
             <button type="button" class="btn btn-outline-success p-2 fw-bold">Sign Up</button>
            </div>
      
      
     
      
      </div>
      
      
    
  </div>
</nav>
    </>
  )
}
