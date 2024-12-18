import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Custom CSS to style the homepage

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to AutoCare Garage Management System</h1>
      <p>Manage your vehicle servicing with ease.</p>
      <div className="home-links">
        <Link to="/profile" className="btn btn-primary">View Profile</Link>
        <Link to="/admin" className="btn btn-secondary">Admin Panel</Link>
      </div>
    </div>
  );
};

export default Home;
