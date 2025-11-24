import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import avatar from '../assets/avatar.jpg';

const Hero = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
             <div className="w-20 h-[1px] bg-primary"></div>
             <span className="text-primary font-medium">{hero.name}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-dark-heading">
            {hero.intro}
          </h1>
          
          <p className="text-gray-500 dark:text-dark-text max-w-lg leading-relaxed">
            {hero.description}
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition">
              {hero.buttons.hire}
            </button>
            
            <a 
              href={hero.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded text-primary hover:bg-gray-50 dark:hover:bg-dark-card transition"
            >
              <FaGithub /> {hero.buttons.github}
            </a>
            
            <a 
              href={hero.links.linkedin}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded text-primary hover:bg-gray-50 dark:hover:bg-dark-card transition"
            >
              <FaLinkedin /> {hero.buttons.linkedin}
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <img 
            src={avatar}
            alt="Profile" 
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;