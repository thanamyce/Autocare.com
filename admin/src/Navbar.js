import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark flex-column" style={{ width: '250px' }} >
      <h2 className="text-center text-white">Admin Panel</h2>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/servicepackages">Service Packages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/servicerequests">Service Requests</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/serviceprogress">Service Progress</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;