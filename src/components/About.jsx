import React from 'react';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p className="about-subtitle">Committed to Excellence in physiotherapy</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At HealthCare Center, we are dedicated to providing exceptional medical care 
            to our community. Our mission is to promote health, prevent illness, and 
            restore wellness through compassionate, evidence-based healthcare services.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a healthier community where everyone has access to quality 
            healthcare services. We strive to be the leading healthcare provider 
            known for clinical excellence, innovation, and patient satisfaction.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🎯 Excellence</h3>
              <p>We maintain the highest standards of medical care</p>
            </div>
            <div className="value-item">
              <h3>💙 Compassion</h3>
              <p>We treat every patient with empathy and respect</p>
            </div>
            <div className="value-item">
              <h3>🤝 Integrity</h3>
              <p>We uphold ethical practices in all we do</p>
            </div>
            <div className="value-item">
              <h3>🔬 Innovation</h3>
              <p>We embrace the latest medical technologies</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2018, Kurdistan Rehabilitation Center has been serving the community for over 8 years. What started as a small clinic has grown into a comprehensive healthcare facility with multiple departments and specialist services. Throughout our journey, we have remained committed to our core values of providing accessible, affordable, and high-quality healthcare to all.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Facilities</h2>
          <p>
            Our modern facility features state-of-the-art medical equipment, comfortable patient rooms, advanced diagnostic laboratories. We continuously invest in the latest medical technology to ensure our patients receive the best possible care.
          </p>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>8+</h3>
          <p>Years of Service</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>Medical Specialists</p>
        </div>
        <div className="stat-item">
          <h3>5K+</h3>
          <p>Patients Served Annually</p>
        </div>
        <div className="stat-item">
          <h3>95%</h3>
          <p>Patient Satisfaction</p>
        </div>
      </section>
    </div>
  );
}

export default About;