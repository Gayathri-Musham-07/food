import React from 'react';
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Locations Section */}
      <section className="locations-section">
        <h2>Our Locations</h2>
        <p>Visit us at any of our convenient locations:</p>
        <div className="locations-grid">
          <div className="location-card">
            <h3>Downtown Bakery</h3>
            <p>123 Main Street, Cityville</p>
            <p>Open: 8:00 AM - 8:00 PM</p>
          </div>
          <div className="location-card">
            <h3>Uptown Bakery</h3>
            <p>456 Elm Street, Townsville</p>
            <p>Open: 9:00 AM - 7:00 PM</p>
          </div>
          <div className="location-card">
            <h3>Suburban Bakery</h3>
            <p>789 Maple Avenue, Suburbia</p>
            <p>Open: 7:00 AM - 9:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
