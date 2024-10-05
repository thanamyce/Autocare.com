import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <section id="carouselSection">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.pexels.com/photos/28123184/pexels-photo-28123184/free-photo-of-the-range-rover-is-parked-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" className="d-block w-100" alt="Garage Service" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Efficient Garage Services</h5>
                <p>Experience high-quality servicing for your vehicle.</p>
              </div>
              
            </div>
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/4756887/pexels-photo-4756887.jpeg?auto=compress&cs=tinysrgb&w=600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920" className="d-block w-100" alt="Modern Tools" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Modern Tools & Techniques</h5>
                <p>Our garage is equipped with state-of-the-art technology.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media.istockphoto.com/id/1207296973/photo/vehicle-service-maintenance-handsome-mens-checking-under-car-condition-on-lifter-hoist-in.jpg?s=1024x1024&w=is&k=20&c=qXGl0QsoGWSFXAlpbELhIMFRjxtDOOGRYWWbPXXw9mM=" className="d-block w-100" alt="Skilled Professionals" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Skilled Professionals</h5>
                <p>Our team is comprised of certified professionals to handle all your needs.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us py-5">
        <div className="container text-center">
          <h2 className="mb-4">About Our Garage</h2>
          <p className="lead">
            Welcome to the ultimate online garage management system, designed to simplify vehicle maintenance for our customers.
            We offer a seamless booking system, pickups, and drop services, with real-time tracking.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2903/2903121.png" alt="Expert Service" className="mb-3" width="60" />
                <h5>Expert Service</h5>
                <p>Our skilled mechanics use cutting-edge tools to deliver exceptional service.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/2913/2913478.png" alt="Convenient Scheduling" className="mb-3" width="60" />
                <h5>Convenient Scheduling</h5>
                <p>Book your service at your convenience through our easy-to-use platform.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box p-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1037/1037767.png" alt="Real-Time Tracking" className="mb-3" width="60" />
                <h5>Real-Time Tracking</h5>
                <p>Track the status of your vehicle service online with real-time updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="https://cdn-icons-png.flaticon.com/512/3035/3035583.png" className="card-img-top" alt="Basic Service" />
                <div className="card-body">
                  <h5 className="card-title">Basic Service</h5>
                  <p className="card-text">Includes oil change, filter replacement, and 20-point inspection.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="https://cdn-icons-png.flaticon.com/512/2330/2330921.png" className="card-img-top" alt="Premium Service" />
                <div className="card-body">
                  <h5 className="card-title">Premium Service</h5>
                  <p className="card-text">Complete vehicle inspection, engine diagnostics, and more.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img src="https://cdn-icons-png.flaticon.com/512/1364/1364193.png" className="card-img-top" alt="Ultimate Service" />
                <div className="card-body">
                  <h5 className="card-title">Ultimate Service</h5>
                  <p className="card-text">Full service package with all repairs included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-dark text-white text-center">
        <div className="container">
          <p>&copy; 2024 Online Garage Management System. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
