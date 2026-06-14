import React from 'react';
import './Skills.css';
import GlassContainer from '../../components/GlassContainer';

const skillsData = [
  { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { category: 'AI/ML', skills: ['NumPy', 'PyTorch', 'CNN', 'RNN', 'Node.js', 'Django'] },
  { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Jenkins', 'Terraform', 'VS Code'] },
];

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((item) => (
            <GlassContainer key={item.category} className="skills-card">
              <h3 className="skills-category">{item.category}</h3>
              <ul className="skills-list">
                {item.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
