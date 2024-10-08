import React from 'react';
import './package.css'; 

const PremiumService = () => {
  return (
    <section className="package-page py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="package-title">Premium Service Package</h1>
          <p className="package-subtitle">Comprehensive care for your vehicle</p>
        </div>

        {/* What's Included and Image Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="mb-3">What’s Included</h3>
            <ul className="list-group">
              <li className="list-group-item">Full Vehicle Inspection</li>
              <li className="list-group-item">Engine Diagnostics</li>
              <li className="list-group-item">Brake Check & Repair</li>
              <li className="list-group-item">Suspension Adjustment</li>
              <li className="list-group-item">AC System Check</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://media.istockphoto.com/id/1138560072/photo/salesman-giving-new-car-keys-to-customer.webp?a=1&b=1&s=612x612&w=0&k=20&c=wB8W1U85F166HfQVg2Ze39t1iimF1BnaX63cu7TLiyg="
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
              src="https://plus.unsplash.com/premium_photo-1661778512247-d5fcf4b52b37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwZGlhZ25vc3RpY3N8ZW58MHx8MHx8fDA%3D"
              alt="Service Benefits Image"
              className="img-fluid package-image"
            />
          </div>
          <div className="col-md-6">
            <h3 className="mb-3">Service Benefits</h3>
            <ul className="list-group">
              <li className="list-group-item">Thorough Diagnostics</li>
              <li className="list-group-item">Enhanced Safety</li>
              <li className="list-group-item">Better Fuel Efficiency</li>
              <li className="list-group-item">Longer Vehicle Lifespan</li>
            </ul>
          </div>
        </div>

        {/* Additional Info Blocks */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Top-Quality Parts</h4>
              <p>We use premium parts for all replacements and repairs.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Comprehensive Coverage</h4>
              <p>Get complete peace of mind with our all-inclusive service.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-block p-3 text-center">
              <h4>Extended Warranty</h4>
              <p>We offer a warranty on all repairs and service parts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumService;
