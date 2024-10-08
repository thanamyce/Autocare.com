// src/pages/Services.js
import React from "react";
import "./Services.css"; // Optional custom styling
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mt-5">
      {/* Heading Block */}
      <div className="row text-center mb-5">
        <div className="col">
          <h1>Our Garage Services</h1>
          <p>
            Explore the range of service packages we offer for your vehicle.
            Choose the package that best suits your needs and leave the rest to
            us.
          </p>
        </div>
      </div>

      {/* Service Packages with Image (Vertical Layout) */}
      <div className="row">
        <div className="col-12 mb-4">
          <Link to="/BasicService.js" className="text-decoration-none text-dark">
          <div className="card service-package d-flex flex-row">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2052/2052385.png"
              alt="Basic Service"
              className="service-image"
            />
            <div className="card-body">
              <h5 className="card-title">Basic Service</h5>
              <p className="card-text">
                Oil change, filter replacement, and a 20-point inspection.
              </p>
              <p className="card-text">
                <strong>Price: </strong>$50
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-12 mb-4">
          <Link to="/PremiumService.js" className="text-decoration-none text-dark">
          <div className="card service-package d-flex flex-row" >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3389/3389596.png"
              alt="Premium Service"
              className="service-image"
            />
            <div className="card-body">
              <h5 className="card-title">Premium Service</h5>
              <p className="card-text">
              Complete vehicle inspection, engine diagnostics, and more.
              </p>
              <p className="card-text">
                <strong>Price: </strong>$150
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-12 mb-4">
          <Link to="/UltimateService.js" className="text-decoration-none text-dark">
          <div className="card service-package d-flex flex-row">
            <img
              src="https://cdn-icons-png.flaticon.com/128/12988/12988677.png"
              alt="Ultimate Service"
              className="service-image"
            />
            <div className="card-body">
              <h5 className="card-title">Basic Service</h5>
              <p className="card-text">
              Full service package with pickup and drop service, all repairs included.
              </p>
              <p className="card-text">
                <strong>Price: </strong>$250
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
