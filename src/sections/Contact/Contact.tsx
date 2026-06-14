import React from 'react';
import './Contact.css';
import GlassContainer from '../../components/GlassContainer';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <GlassContainer className="contact-card">
            <h3 className="contact-subtitle">Let's work together!</h3>
            <p className="contact-text">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:Chetanrohit10@email.com" className="contact-link">Chetanrohit10@email.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span className="contact-value">Silvass, India</span>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://linkedin.com/in/chetan-rohit-344908240/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">GitHub</a>
            </div>
            <a href="mailto:Chetanrohit10@email.com" className="btn btn-primary contact-btn">Send an Email</a>
          </GlassContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
