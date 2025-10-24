import React from 'react';

function Doctors() {
  return (
    <div className="doctors">
      <section className="doctors-hero">
        <h1>Our Medical Team</h1>
        <p className="doctors-subtitle">Expert Healthcare Professionals Dedicated to Your Well-being</p>
      </section>

      <section className="doctors-content">
        <div className="doctors-intro">
          <h2>Meet Our Specialists</h2>
          <p>
            Our team consists of highly qualified and experienced medical professionals 
            committed to providing the highest quality of care. Each doctor brings expertise, 
            compassion, and dedication to ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="doctors-grid">
          <div className="doctor-card">
            <div className="doctor-image">👨‍⚕️</div>
            <h3>Dr. James Anderson</h3>
            <p className="specialty">Chief Medical Officer</p>
            <p className="department">General Medicine</p>
            <div className="doctor-info">
              <p><strong>Experience:</strong> 25+ years</p>
              <p><strong>Education:</strong> MD, Harvard Medical School</p>
              <p><strong>Specialization:</strong> Internal Medicine, Preventive Care</p>
            </div>
            <button className="appointment-btn">Book Appointment</button>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">👩‍⚕️</div>
            <h3>Dr. Sarah Williams</h3>
            <p className="specialty">Senior Cardiologist</p>
            <p className="department">Cardiology Department</p>
            <div className="doctor-info">
              <p><strong>Experience:</strong> 18+ years</p>
              <p><strong>Education:</strong> MD, Johns Hopkins University</p>
              <p><strong>Specialization:</strong> Interventional Cardiology</p>
            </div>
            <button className="appointment-btn">Book Appointment</button>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">👨‍⚕️</div>
            <h3>Dr. Robert Chen</h3>
            <p className="specialty">Head of Neurology</p>
            <p className="department">Neurology Department</p>
            <div className="doctor-info">
              <p><strong>Experience:</strong> 20+ years</p>
              <p><strong>Education:</strong> MD, Stanford University</p>
              <p><strong>Specialization:</strong> Neurosurgery, Brain Disorders</p>
            </div>
            <button className="appointment-btn">Book Appointment</button>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">👩‍⚕️</div>
            <h3>Dr. Emily Martinez</h3>
            <p className="specialty">Pediatric Specialist</p>
            <p className="department">Pediatrics Department</p>
            <div className="doctor-info">
              <p><strong>Experience:</strong> 15+ years</p>
              <p><strong>Education:</strong> MD, Yale School of Medicine</p>
              <p><strong>Specialization:</strong> Child Development, Pediatric Care</p>
            </div>
            <button className="appointment-btn">Book Appointment</button>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">👨‍⚕️</div>
            <h3>Dr. David Thompson</h3>
            <p className="specialty">Orthopedic Surgeon</p>
            <p className="department">Orthopedics Department</p>
            <div className="doctor-info">
              <p><strong>Experience:</strong> 22+ years</p>
              <p><strong>Education:</strong> MD, Duke University</p>
              <p><strong>Specialization:</strong> Joint Replacement, Sports Medicine</p>
            </div>
            <button className="appointment-btn">Book Appointment</button>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">👩‍⚕️</div>
            <h3>Dr. Lisa Kumar</h3>
            <p className="specialty">Chief of Laboratory</p>
            <p className="department">Diagnostic Services</p>
            <div className="doctor-info">
              <p><strong>Experience:</strong> 16+ years</p>
              <p><strong>Education:</strong> MD, PhD, MIT</p>
              <p><strong>Specialization:</strong> Clinical Pathology, Diagnostics</p>
            </div>
            <button className="appointment-btn">Book Appointment</button>
          </div>
        </div>

        <div className="join-team">
          <h2>Join Our Team</h2>
          <p>
            We're always looking for talented and compassionate healthcare professionals 
            to join our team. If you're passionate about making a difference in people's lives, 
            we'd love to hear from you.
          </p>
          <button className="cta-button">View Career Opportunities</button>
        </div>
      </section>
    </div>
  );
}

export default Doctors;