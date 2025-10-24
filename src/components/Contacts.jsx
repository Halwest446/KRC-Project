import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Replace these with your actual bot token and chat ID
  const TELEGRAM_BOT_TOKEN = '8276664471:AAFAp8ghvb9FWr04WqOGzQePoUEnB8KTge4';
  const TELEGRAM_CHAT_ID = '1598335250';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToTelegram = async (data) => {
    const message = `
🏥 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}

⏰ *Time:* ${new Date().toLocaleString()}
    `;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        return { success: true };
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return { success: false, error };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Send to Telegram
    const result = await sendToTelegram(formData);

    if (result.success) {
      setSubmitStatus('success');
      alert('Thank you for contacting us! We will get back to you soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contacts">
      <section className="contacts-hero">
        <h1>Contact Us</h1>
        <p className="contacts-subtitle">We're Here to Help</p>
      </section>

      <section className="contacts-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Healthcare Avenue<br />Medical District, City 12345</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>Main: (555) 123-4567<br />Emergency: (555) 911-0000</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@healthcarecenter.com<br />support@healthcarecenter.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div>
                <h3>Hours</h3>
                <p>Mon - Fri: 8:00 AM - 8:00 PM<br />
                   Sat - Sun: 9:00 AM - 5:00 PM<br />
                   Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this regarding?"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us more about your inquiry..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                ✓ Message sent successfully!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                ✗ Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          <p>🗺️ Map Location</p>
          <p className="map-note">Interactive map would be displayed here</p>
        </div>
      </section>
    </div>
  );
}

export default Contacts;