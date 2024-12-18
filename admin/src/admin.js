import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <nav className="vertical-navbar">
        <Link to="/users" className="nav-link">Users</Link>
        <Link to="/service-packages" className="nav-link">Service Packages</Link>
        <Link to="/service-requests" className="nav-link">Service Requests</Link>
      </nav>
      <div className="page-content">
        <Outlet /> {/* This will load the selected page */}
      </div>
    </div>
  );
};

export default Admin;
