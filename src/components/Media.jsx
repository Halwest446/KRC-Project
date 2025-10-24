import React from 'react';

function Media() {
  return (
    <div className="media">
      <section className="media-hero">
        <h1>Media Gallery</h1>
        <p className="media-subtitle">Explore Our Facilities and Activities</p>
      </section>

      <section className="media-content">
        <div className="gallery-section">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-image">🏥</div>
              <h3>Modern Facilities</h3>
              <p>State-of-the-art medical equipment and comfortable patient rooms</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🔬</div>
              <h3>Advanced Laboratory</h3>
              <p>Cutting-edge diagnostic and testing facilities</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🏃</div>
              <h3>Wellness Center</h3>
              <p>Physical therapy and rehabilitation services</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">👨‍⚕️</div>
              <h3>Medical Team</h3>
              <p>Our dedicated healthcare professionals at work</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🚑</div>
              <h3>Emergency Services</h3>
              <p>24/7 emergency care and ambulance services</p>
            </div>
            <div className="gallery-item">
              <div className="gallery-image">🏨</div>
              <h3>Patient Rooms</h3>
              <p>Comfortable and modern patient accommodations</p>
            </div>
          </div>
        </div>

        <div className="video-section">
          <h2>Video Tour</h2>
          <div className="video-grid">
            <div className="video-item">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
                <p>Virtual Tour of Our Facilities</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
                <p>Meet Our Medical Team</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-placeholder">
                <span className="play-icon">▶️</span>
                <p>Patient Success Stories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-section">
          <h2>Patient Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">💬</div>
              <p className="testimonial-text">
                "Excellent care and professional staff. They made me feel comfortable 
                throughout my treatment. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Cardiology Patient</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">💬</div>
              <p className="testimonial-text">
                "The doctors here are amazing. They took the time to explain everything 
                and provided exceptional care for my family."
              </p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Pediatrics Patient</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="quote-icon">💬</div>
              <p className="testimonial-text">
                "Modern facilities and compassionate staff. I wouldn't trust my health 
                with anyone else. Thank you for everything!"
              </p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>General Medicine Patient</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Media;