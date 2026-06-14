import React from 'react';
import './Experience.css';
import GlassContainer from '../../components/GlassContainer';

const expData = [
  {
    company: 'Prodigy Infotech',
    role: 'Machine Learning Intern',
    period: 'Oct 2025',
    desc: 'Implemented Linear Regression for house price prediction, K-Means for customer clustering, SVM for image classification, and hand gesture/food recognition models.'
  },
  {
    company: 'Prodigy Infotech',
    role: 'Web Developer Intern',
    period: 'Aug 2025',
    desc: 'Developed multiple web applications including an interactive navigation menu, a responsive landing page, a stopwatch app, and a Tic-Tac-Toe game.'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {expData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <GlassContainer className="experience-card">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-desc">{exp.desc}</p>
              </GlassContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
