import React from 'react';
import './Projects.css';
import GlassContainer from '../../components/GlassContainer';

const projectsData = [
  {
    title: 'Food Recognition AI',
    description: 'A model that identifies food items from images and estimates calorie content for dietary tracking.',
    tech: ['Python', 'CNN', 'PyTorch'],
    link: '#'
  },
  {
    title: 'Hand Gesture Interface',
    description: 'Human-computer interaction model to classify hand gestures from image or video data.',
    tech: ['OpenCV', 'SVM', 'Python'],
    link: '#'
  },
  {
    title: 'Interactive Web Apps',
    description: 'A suite of mini-apps including a stopwatch, tic-tac-toe game, and responsive landing pages.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    link: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <GlassContainer key={project.title} className="project-card">
              <div className="project-thumbnail">
                {/* Placeholder for project image */}
                <span>{project.title} Preview</span>
              </div>
              <div className="project-info">
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <a href={project.link} className="project-link">View Project &rarr;</a>
              </div>
            </GlassContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
