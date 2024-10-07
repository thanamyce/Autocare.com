import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div class="welcome-message">
        <h1>Welcome to the  AutoCare!</h1>
        <h2>your cars deserve better</h2>
    </div>
      
      {/* Carousel Section */}
      <section id="carouselSection">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
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
      <section className="about-garage py-5">
        <div className="container text-center">
          <h2 className="mb-4">About Our Garage</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="https://www.shutterstock.com/image-photo/car-service-checking-concept-hand-600nw-2465864641.jpg" alt="State-of-the-art Tools" className="img-fluid rounded mb-3" />
              <h4>State-of-the-Art Tools</h4>
              <p>Our garage is equipped with the latest tools and technology to ensure your vehicle receives top-quality care and precision service.</p>
            </div>
            <div className="col-md-4">
              <img src="https://img.freepik.com/premium-photo/skilled-mechanic-inspects-engine-heavy-duty-truck-highlighting-expertise-precision-required-automotive-maintenance_856795-97845.jpg" alt="Skilled Mechanics" className="img-fluid rounded mb-3" />
              <h4>Skilled Mechanics</h4>
              <p>Our certified and experienced mechanics are experts in handling all types of vehicle repairs, maintenance, and customization services.</p>
            </div>
            <div className="col-md-4">
              <img src="https://media.istockphoto.com/id/1471444483/photo/customer-satisfaction-survey-concept-users-rate-service-experiences-on-online-application.jpg?s=612x612&w=0&k=20&c=HFh1o4JU68KWv7PXgbLdIZT0_qepmgePEkvbsLJr5p0=" alt="Customer Satisfaction" className="img-fluid rounded mb-3" />
              <h4>100% Customer Satisfaction</h4>
              <p>We prioritize customer satisfaction with fast, reliable service and a convenient online tracking system for real-time updates on your vehicle's status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 text-center" style={{ backgroundColor: "#000", color: "#fff" }}>
        <div className="container">
          <h2 className="mb-5">Why Choose Our Garage?</h2>
          <div className="row">
            <div className="col-md-3">
              <i className="fas fa-wrench fa-3x mb-3"></i>
              <h5>Advanced Tools</h5>
              <p>Modern tools for precision service.</p>
              <p>Our garage is equipped with state-of-the-art technology, ensuring your vehicle is serviced to the highest standards.</p>
            </div>
            <div className="col-md-3">
              <i className="fas fa-car fa-3x mb-3"></i>
              <h5>Expert Mechanics</h5>
              <p>Skilled professionals with years of experience.</p>
              <p>Our mechanics are certified experts who handle everything from simple oil changes to complex repairs.</p>
            </div>
            <div className="col-md-3">
              <i className="fas fa-clock fa-3x mb-3"></i>
              <h5>Fast Turnaround</h5>
              <p>Quick service without compromising quality.</p>
              <p>We understand your time is valuable, so we aim to complete services efficiently while maintaining top quality.</p>
            </div>
            <div className="col-md-3">
              <i className="fas fa-star fa-3x mb-3"></i>
              <h5>Customer Satisfaction</h5>
              <p>Your satisfaction is our top priority.</p>
              <p>We go the extra mile to make sure your experience with us is smooth, transparent, and leaves you happy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services py-5" >
  <div className="container">
    <h2 className="text-center mb-5" style={{ color: "#333", fontSize: "2.5rem", fontWeight: "bold" }}>Our Services</h2>
    
    <div className="row justify-content-center text-center">
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-box p-4 shadow-sm" style={{ borderRadius: "15px", backgroundColor: "#ffffff" }}>
          <img src="https://cdn-icons-png.flaticon.com/128/1835/1835948.png" alt="Basic Service" className="img-fluid mb-3" style={{ height: "80px" }} />
          <h5 className="service-title" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>Basic Service</h5>
          <p className="service-desc" style={{ fontSize: "1rem", color: "#777" }}>Oil change, filter replacement, and 20-point inspection.</p>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-box p-4 shadow-sm" style={{ borderRadius: "15px", backgroundColor: "#ffffff" }}>
          <img src="https://cdn-icons-png.flaticon.com/128/7894/7894345.png" alt="Premium Service" className="img-fluid mb-3" style={{ height: "80px" }} />
          <h5 className="service-title" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>Premium Service</h5>
          <p className="service-desc" style={{ fontSize: "1rem", color: "#777" }}>Complete vehicle inspection, engine diagnostics, and more.</p>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="service-box p-4 shadow-sm" style={{ borderRadius: "15px", backgroundColor: "#ffffff" }}>
          <img src="https://cdn-icons-png.flaticon.com/128/5803/5803534.png" alt="Ultimate Service" className="img-fluid mb-3" style={{ height: "80px" }} />
          <h5 className="service-title" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px" }}>Ultimate Service</h5>
          <p className="service-desc" style={{ fontSize: "1rem", color: "#777" }}>Full service package with all repairs included.</p>
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
