import React from 'react';
import './package.css'; // We'll add styles here.

const BasicService = () => {
  return (
    <section className="package-page py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="package-title">Basic Service Package</h1>
          <p className="package-subtitle">Efficient and reliable vehicle care</p>
        </div>

        {/* What's Included and Image Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="mb-3">What’s Included</h3>
            <ul className="list-group">
              <li className="list-group-item">Oil Change</li>
              <li className="list-group-item">Filter Replacement</li>
              <li className="list-group-item">20-Point Inspection</li>
              <li className="list-group-item">Tire Pressure Check</li>
              <li className="list-group-item">Brake Fluid Top-up</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1682146874717-204139b9f29d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFzaWMlMjBzZXJ2aWNpbmclMjBjYXJ8ZW58MHx8MHx8fDA%3D"
              alt="What's Included Image"
              className="img-fluid package-image"
            />
          </div>
        </div>

        {/* Service Benefits and Image Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
          <img
              src="https://plus.unsplash.com/premium_photo-1682141938795-6f878eb81834?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwZW5naW5lfGVufDB8fDB8fHww"
              alt="Service Benefits Image"
              className="img-fluid package-image"
            />
          </div>
          <div className="col-md-6 text-center">
           
            <h3 className="mb-3">Service Benefits</h3>
            <ul className="list-group">
              <li className="list-group-item">Improved Engine Performance</li>
              <li className="list-group-item">Enhanced Fuel Efficiency</li>
              <li className="list-group-item">Extended Vehicle Lifespan</li>
              <li className="list-group-item">Peace of Mind for Long Drives</li>
            </ul>
          </div>
        </div>

        {/* Additional Info Blocks */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Affordable Pricing</h4>
              <p>Our Basic Service offers excellent value at competitive prices.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Quick Turnaround</h4>
              <p>We complete the service quickly while maintaining high standards.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Professional Care</h4>
              <p>Our mechanics provide professional and reliable service for your vehicle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicService;
