import React from 'react';
import Section from './Section';

const Projects = ({ projects }) => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col overflow-hidden transition-all duration-300 transform border rounded-lg shadow-lg bg-gradient-to-br from-blue-800/40 to-slate-800/60 hover:-translate-y-2 border-sky-500/20 hover:border-blue-400/40 hover:shadow-blue-500/20">
            <div className="mb-4">
              <img 
                src={project.img_url} 
                alt={project.title}
                className="object-cover w-full h-48 rounded-lg"
              />
            </div>
            <div className="flex-grow p-6">
              <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
              {/* <p className="flex-grow text-slate-300">{project.description}</p> */}
            </div>
            <div className="p-6 mt-auto bg-blue-900/30">
              {project.repo_frontend && <a href={project.repo_frontend} target="_blank" rel="noopener noreferrer" className="mr-4 font-semibold text-sky-400 hover:text-blue-300">Frontend Repo</a>}
              {project.repo_backend && <a href={project.repo_backend} target="_blank" rel="noopener noreferrer" className="mr-4 font-semibold text-sky-400 hover:text-blue-300">Backend Repo</a>}
              {project.live_link && <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-400 hover:text-blue-300">Live Site</a>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;