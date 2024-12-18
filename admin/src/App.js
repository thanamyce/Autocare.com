import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users.js';
import ServicePackages from './ServicePackages.js';
import ServiceRequests from './ServiceRequests.js';
import Home from './Home.js';
import ServiceProgress from './ServiceProgress.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="d-flex" style={{ height: "100vh" }}>
        <Navbar/>
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/users" element={<Users/>} />
            <Route path="/servicepackages" element={<ServicePackages/>} />
            <Route path="/servicerequests" element={<ServiceRequests/>} />
            <Route path="/serviceprogress" element={<ServiceProgress/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;