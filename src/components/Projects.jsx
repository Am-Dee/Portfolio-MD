// components/Projects.js
import React from 'react';
import projects from '../data/projectsData.json';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects by Mukul Dogra</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="card" key={index}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;