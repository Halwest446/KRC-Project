import React from 'react';

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p className="services-subtitle">Comprehensive Healthcare Solutions for Every Need</p>
      </section>

      <section className="services-page-content">
        <div className="services-intro">
          <h2>What We Offer</h2>
          <p>
            At HealthCare Center, we provide a wide range of medical services designed to meet 
            all your healthcare needs. From preventive care to specialized treatments, our team 
            is equipped with the latest technology and expertise to ensure the best outcomes.
          </p>
        </div>

        <div className="service-categories">
          <div className="service-category">
            <div className="category-header">
              <span className="category-icon">🏥</span>
              <h2>Primary Care Services</h2>
            </div>
            <div className="service-list">
              <div className="service-item-detailed">
                <h3>General Medicine</h3>
                <p>Comprehensive primary care for adults including routine checkups, disease prevention, and health management.</p>
                <ul>
                  <li>Annual physical examinations</li>
                  <li>Chronic disease management</li>
                  <li>Preventive care and screenings</li>
                  <li>Vaccinations and immunizations</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Family Medicine</h3>
                <p>Healthcare for the entire family, from newborns to seniors.</p>
                <ul>
                  <li>Well-child visits</li>
                  <li>School and sports physicals</li>
                  <li>Geriatric care</li>
                  <li>Family planning services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="category-header">
              <span className="category-icon">❤️</span>
              <h2>Specialized Care</h2>
            </div>
            <div className="service-list">
              <div className="service-item-detailed">
                <h3>Cardiology</h3>
                <p>Expert diagnosis and treatment of heart and cardiovascular conditions.</p>
                <ul>
                  <li>Cardiac stress testing</li>
                  <li>Echocardiography</li>
                  <li>Heart disease management</li>
                  <li>Interventional procedures</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Neurology</h3>
                <p>Specialized care for brain, spine, and nervous system disorders.</p>
                <ul>
                  <li>Neurological examinations</li>
                  <li>EEG and EMG testing</li>
                  <li>Stroke care and prevention</li>
                  <li>Headache and migraine treatment</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Orthopedics</h3>
                <p>Treatment for musculoskeletal conditions and injuries.</p>
                <ul>
                  <li>Joint replacement surgery</li>
                  <li>Sports medicine</li>
                  <li>Fracture care</li>
                  <li>Physical rehabilitation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="category-header">
              <span className="category-icon">🔬</span>
              <h2>Diagnostic Services</h2>
            </div>
            <div className="service-list">
              <div className="service-item-detailed">
                <h3>Laboratory Services</h3>
                <p>Advanced diagnostic testing with quick and accurate results.</p>
                <ul>
                  <li>Blood tests and analysis</li>
                  <li>Urinalysis</li>
                  <li>Microbiological testing</li>
                  <li>Pathology services</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Imaging Services</h3>
                <p>State-of-the-art medical imaging technology.</p>
                <ul>
                  <li>X-Ray</li>
                  <li>CT Scans</li>
                  <li>MRI</li>
                  <li>Ultrasound</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="category-header">
              <span className="category-icon">🚑</span>
              <h2>Emergency Services</h2>
            </div>
            <div className="service-list">
              <div className="service-item-detailed">
                <h3>24/7 Emergency Care</h3>
                <p>Round-the-clock emergency medical services for urgent conditions.</p>
                <ul>
                  <li>Trauma care</li>
                  <li>Emergency surgery</li>
                  <li>Cardiac emergencies</li>
                  <li>Ambulance services</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Urgent Care</h3>
                <p>Walk-in services for non-life-threatening conditions.</p>
                <ul>
                  <li>Minor injuries and burns</li>
                  <li>Infections and illnesses</li>
                  <li>X-rays and lab tests</li>
                  <li>Prescription refills</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="category-header">
              <span className="category-icon">👶</span>
              <h2>Women & Children Services</h2>
            </div>
            <div className="service-list">
              <div className="service-item-detailed">
                <h3>Pediatrics</h3>
                <p>Specialized healthcare for infants, children, and adolescents.</p>
                <ul>
                  <li>Well-child checkups</li>
                  <li>Childhood vaccinations</li>
                  <li>Development assessments</li>
                  <li>Pediatric urgent care</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Maternity Care</h3>
                <p>Comprehensive care for expectant mothers.</p>
                <ul>
                  <li>Prenatal care</li>
                  <li>Delivery services</li>
                  <li>Postpartum care</li>
                  <li>Lactation support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="category-header">
              <span className="category-icon">💪</span>
              <h2>Wellness & Prevention</h2>
            </div>
            <div className="service-list">
              <div className="service-item-detailed">
                <h3>Health Screenings</h3>
                <p>Preventive health assessments and early detection programs.</p>
                <ul>
                  <li>Cancer screenings</li>
                  <li>Diabetes screening</li>
                  <li>Cholesterol testing</li>
                  <li>Blood pressure monitoring</li>
                </ul>
              </div>
              <div className="service-item-detailed">
                <h3>Wellness Programs</h3>
                <p>Programs designed to promote healthy lifestyles.</p>
                <ul>
                  <li>Weight management</li>
                  <li>Smoking cessation</li>
                  <li>Nutrition counseling</li>
                  <li>Fitness programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="insurance-section">
          <h2>Insurance & Payment</h2>
          <p>We accept most major insurance plans and offer flexible payment options.</p>
          <div className="insurance-logos">
            <div className="insurance-item">💳 Major Insurance Plans</div>
            <div className="insurance-item">💰 Flexible Payment Plans</div>
            <div className="insurance-item">🏥 Medicare & Medicaid</div>
            <div className="insurance-item">💵 Self-Pay Options</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;