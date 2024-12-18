// src/pages/Services.js
import React from "react";
import "./Services.css"; // Optional custom styling
import { Link, useNavigate} from "react-router-dom";
import { useAuth  } from './auth'; // Import your authentication context
 

const Services = () => {
  const { isLoggedIn } = useAuth(); // Get user data from authentication context
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle the booking action
  const handleBookService = () => {
    if (isLoggedIn) {
      // If user is logged in, navigate to the booking page
      navigate('/track'); // Change this to your booking form route
    } else {
      alert("Please log in to Track your service."); // Alert if not logged in
    }
  };
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
                <strong>Price: </strong>Rs.4000
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
                <strong>Price: </strong>Rs.12000
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
              <h5 className="card-title">Ultimate Service</h5>
              <p className="card-text">
              Full service package with pickup and drop service, all repairs included.
              </p>
              <p className="card-text">
                <strong>Price: </strong>Rs.21000
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <div className="text-center mt-4 mb-4">
          <button className="btn btn-success"  style={{width: '425px', padding: '15px', fontSize: '20px', border: 'solid',borderWidth: '2px', borderColor: 'white'}}
        onClick={handleBookService}>
            Track Your service  Service
          </button>
        </div>
    </div>
  );
};

export default Services;
