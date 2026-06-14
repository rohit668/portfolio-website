import React from 'react';
import './About.css';
import GlassContainer from '../../components/GlassContainer';
import myPhoto from '../../assets/me.png';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image-container">
            <GlassContainer className="glass-image-wrapper">
              <img src={myPhoto} alt="Chetan Rohit" className="about-photo" />
            </GlassContainer>
          </div>
          <div className="about-text">
            <p>
              I am a passionate developer with a strong foundation in web development and a growing expertise in
              AI/ML. My journey began with building dynamic, user-friendly web applications using modern frameworks,
              which taught me how to handle data flow, databases, and system architecture.
            </p>
            <p>
              Driven by curiosity about how data can drive intelligent decisions, I expanded into AI/ML — 
              working on predictive models, data preprocessing, and integrating AI features into web platforms. 
              My unique strength lies at the intersection of these fields: creating applications that are not 
              only functional but also smart and adaptive.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Internships Done</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">AI & Web Projects</span>
              </div>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Full CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
