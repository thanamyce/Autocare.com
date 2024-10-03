// src/pages/Services.js
import React from 'react';
import './Services.css'; // Optional custom styling

const Services = () => {
  const packages = [
    {
      title: "Basic Service",
      description: "Oil change, filter replacement, and a 20-point inspection.",
      price: "$50",
      image: "https://cdn-icons-png.flaticon.com/128/2052/2052385.png", // Oil Change Image
    },
    {
      title: "Premium Service",
      description: "Complete vehicle inspection, engine diagnostics, and more.",
      price: "$150",
      image: "https://cdn-icons-png.flaticon.com/128/3389/3389596.png", // Vehicle Inspection Image
    },
    {
      title: "Ultimate Service",
      description: "Full service package with pickup and drop service, all repairs included.",
      price: "$250",
      image: "https://cdn-icons-png.flaticon.com/128/12988/12988677.png", // Full Service Image
    },
  ];
  
  

  return (
    <div className="container mt-5 justify-content-center">
      {/* Heading Block */}
      <div className="row text-center mb-5">
        <div className="col">
          <h1>Our Garage Services</h1>
          <p>Explore the range of service packages we offer for your vehicle. Choose the package that best suits your needs and leave the rest to us.</p>
        </div>
      </div>

      {/* Service Packages with Image (Vertical Layout) */}
      <div className="row justify-content-center">
        {packages.map((pkg, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card service-package d-flex flex-row">
              <img src={pkg.image} alt={pkg.title} className="service-image" />
              <div className="card-body">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-text">{pkg.description}</p>
                <p className="card-text"><strong>Price: </strong>{pkg.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
