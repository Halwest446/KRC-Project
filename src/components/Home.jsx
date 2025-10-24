import React, { useState, useEffect } from 'react';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your 4 image paths here
  const images = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">
      <section className="hero">
        {/* Background Image Slider */}
        <div className="hero-background">
          {images.map((image, index) => (
            <div
              key={index}
              className={`hero-bg-image ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          <div className="hero-overlay"></div>
        </div>

        {/* Your existing content */}
        <div className="hero-content">
          <h1>Welcome to Kurdistan Rehabilitation Center</h1>
          <p className="hero-subtitle">Your Health, Our Priority</p>
          <p className="hero-description">
            Here to support your recovery We provide caring rehab, therapy & wellness services to help you heal, move freely & live better every day.
          </p>
          <button className="cta-button">Book Appointment</button>
        </div>

        {/* Optional: Slider Dots */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Physiotherapy</h3>
            <p>Take a step better with physiotherapy treatments</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>Speech Therapy</h3>
            <p>Treat your child's speech problems and speech delays with the best speech therapists</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🤽</div>
            <h3>HydroTherapy</h3>
            <p>water for pain relief and rehabilitation by utilizing the properties of water, such as buoyancy, temperature, and pressure</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🩻</div>
            <h3>X-ray</h3>
            <p>We serve patients with the best modern equipment</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👶</div>
            <h3>Pediatrics</h3>
            <p>Dedicated care for children's health and development</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>Laboratory</h3>
            <p>Advanced diagnostic and testing services</p>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h4>🌟 Expert Team</h4>
            <p>Highly qualified medical professionals</p>
          </div>
          <div className="feature">
            <h4>🏡 Best Service</h4>
            <p>Always we provide the best care for our patients</p>
          </div>
          <div className="feature">
            <h4>🔵 Modern Facilities</h4>
            <p>State-of-the-art medical equipment</p>
          </div>
          <div className="feature">
            <h4>🤝 Patient-Centered</h4>
            <p>Compassionate and personalized care</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;