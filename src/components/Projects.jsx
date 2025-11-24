import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { content } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg border-t border-[#BAB2E7] dark:border-[#BAB2E7] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-dark-heading">
          {projects.title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.list.map((project) => (
            <div key={project.id} className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300 flex flex-col">
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto" 
              />
              

              <div className="p-6 flex flex-col flex-grow space-y-4">
                <h3 className="text-2xl font-medium text-primary">{project.title}</h3>
                
                <p className="text-gray-500 dark:text-dark-text text-sm leading-relaxed flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex gap-2 flex-wrap pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="border border-primary text-primary px-4 py-1 rounded-full text-xs font-medium dark:bg-dark-bg">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-4">
                  <a 
                    href={project.links.repo} 
                    className="text-gray-900 dark:text-dark-heading underline font-medium hover:text-primary dark:hover:text-primary transition"
                  >
                    {projects.links.repo}
                  </a>
                  <a 
                    href={project.links.view} 
                    className="text-gray-900 dark:text-dark-heading underline font-medium hover:text-primary dark:hover:text-primary transition"
                  >
                    {projects.links.view}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;