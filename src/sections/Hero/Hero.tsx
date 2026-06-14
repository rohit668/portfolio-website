import React from 'react';
import './Hero.css';
import GlassContainer from '../../components/GlassContainer';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="hero-container">
        <GlassContainer className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Chetan Rohit</span>
            <br />
            AI/ML & Web Developer
          </h1>
          <p className="hero-description">
            Specializing in creating AI-powered web applications that are smart, adaptive, and user-centric. 
            Bridging the gap between intelligent data models and dynamic web interfaces.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
};

export default Hero;
