import React from 'react';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <h1 className="about-title">About AutoCare</h1>
        <p className="about-description">
          AutoCare is dedicated to providing the best garage services for all vehicle types. With years of experience in the automotive industry, we are proud to offer our customers cutting-edge services with a team of certified professionals and advanced tools.
        </p>

        <div className="about-features">
          <div className="feature-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/29/08/16/engine-2691497_960_720.jpg"
              alt="Expert Mechanics"
              className="feature-img"
            />
            <h3>Expert Mechanics</h3>
            <p>
              Our mechanics are highly skilled and certified professionals who are passionate about vehicles and committed to delivering top-notch service.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="https://cdn.pixabay.com/photo/2017/11/10/05/46/auto-2932232_960_720.jpg"
              alt="State-of-the-art Tools"
              className="feature-img"
            />
            <h3>Advanced Tools</h3>
            <p>
              We use state-of-the-art tools and equipment to ensure that your vehicle is serviced with precision and care, ensuring long-lasting results.
            </p>
          </div>

          <div className="feature-item">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/09/09/19/auto-1245782_960_720.jpg"
              alt="Customer Satisfaction"
              className="feature-img"
            />
            <h3>Customer Satisfaction</h3>
            <p>
              Our top priority is your satisfaction. We go the extra mile to make sure that each customer has a smooth and seamless experience at AutoCare.
            </p>
          </div>
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At AutoCare, our mission is to offer the highest quality services with transparency, integrity, and a focus on customer satisfaction. We are committed to staying ahead of the curve with advanced techniques and continuous training, ensuring your vehicle is always in the best hands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
