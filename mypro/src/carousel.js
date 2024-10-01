// src/components/ImageCarousel.js
import React from 'react';
import Slider from "react-slick";

const ImageCarousel = () => {
  const settings = {
    dots: true,                 // Show navigation dots
    infinite: true,              // Loop through slides
    speed: 300,                  // Animation speed
    slidesToShow: 1,             // Show one slide at a time
    slidesToScroll: 1,           // Scroll one slide at a time
    autoplay: true,              // Enable automatic scrolling
    autoplaySpeed: 3000,         // Time between each scroll (ms)
    pauseOnHover: false,         // Do not pause on hover
  };

  return (
    <div className="carousel-container " style={{ width: '80%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjd2Sj7xafyV96H1KfPD62vvnwE-1bv-E2Iw&s" alt="Slide 1" />
        </div>
        <div>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/027/484/635/small/man-cleaning-and-detailing-luxury-car-with-microfiber-cloth-car-wash-service-man-hand-holding-blue-microfiber-cloth-polish-red-car-after-cleaning-auto-care-service-business-concept-generative-ai-photo.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/06/41/73/20/360_F_641732036_if4Eq4gHSoPiDmmxIcim0FDPkjWGYlOq.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1349412663/photo/supervisor-at-a-car-workshop-checking-tablet-while-mechanic-works-at-background-on-a-car.jpg?s=612x612&w=0&k=20&c=8gIKT99lBP5llaNxxpqaxZ2xYZcRDA0vV5hvYmJrkbQ=" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
