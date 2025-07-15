import React from 'react';
import './Projects.css';
import projectsData from '../Data/projectsData';

function Projects() {
  const title = "Behance Projects";

  return (
    <div className="projects-wrapper">

      {/* محتوى الصفحة فوق الخلفية */}
      <div className="projects-page">
        <h2 className="projects-title">
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="projects-char"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="project-card scale-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-name">{project.title}</h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View on Behance
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;