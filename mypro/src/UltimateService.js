import React from 'react';
import './package.css'; 
import { useAuth } from './auth'; // Import your authentication context
import { useNavigate } from 'react-router-dom';

const UltimateService = () => {
  const { isLoggedIn } = useAuth(); // Get user data from authentication context
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle the booking action
  const handleBookService = () => {
    if (isLoggedIn) {
      // If user is logged in, navigate to the booking page
      navigate('/bookingu'); // Change this to your booking form route
    } else {
      alert("Please log in to book a service."); // Alert if not logged in
    }
  };
  return (
    <section className="package-page py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="package-title">Ultimate Service Package</h1>
          <p className="package-subtitle">The ultimate protection for your vehicle</p>
        </div>

        {/* What's Included and Image Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="mb-3">What’s Included</h3>
            <ul className="list-group">
              <li className="list-group-item">Complete Engine Overhaul</li>
              <li className="list-group-item">Full Interior & Exterior Detailing</li>
              <li className="list-group-item">Transmission Inspection</li>
              <li className="list-group-item">Wheel Alignment & Balancing</li>
              <li className="list-group-item">Brake System Overhaul</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1479481753/photo/mechanical-engineer-check-and-maintenance-smart-maintenance-system-in-modern-car-garage-auto.webp?a=1&b=1&s=612x612&w=0&k=20&c=UNw5vhT8h72KTx3KLFxBnXXdR-VcBhiuk_QLvm56nwY="
              alt="What's Included Image"
              className="img-fluid package-image"
            />
          </div>
        </div>

        {/* Service Benefits and Image Section */}
        <div className="row align-items-center">
          {/* Move Image Column Before Content */}
          <div className="col-md-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1179410964/photo/auto-repair-estimate.webp?a=1&b=1&s=612x612&w=0&k=20&c=sp81Ygoc6g9QV8ghwp9n3WToza33rlpDEKLcQmZklD4="
              alt="Service Benefits Image"
              className="img-fluid package-image"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Service Benefits</h3>
            <ul className="list-group">
              <li className="list-group-item">Maximized Performance</li>
              <li className="list-group-item">Premium Detailing</li>
              <li className="list-group-item">Prolonged Vehicle Life</li>
              <li className="list-group-item">Increased Resale Value</li>
            </ul>
          </div>
        </div>

        {/* Additional Info Blocks */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Best in Class</h4>
              <p>Our Ultimate Service package provides the highest quality of care and precision.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>All-Inclusive</h4>
              <p>Get every aspect of your vehicle serviced with our all-in-one package.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Exclusive Benefits</h4>
              <p>Enjoy exclusive service benefits, including priority booking and free check-ups.</p>
            </div>
          </div>
        </div>
         {/* Book Service Button */}
         <div className="text-center mt-4">
          <button className="btn btn-success"  style={{width: '425px', padding: '15px', fontSize: '20px', border: 'solid',borderWidth: '2px', borderColor: 'white'}}
        onClick={handleBookService}>
            Book Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default UltimateService;
