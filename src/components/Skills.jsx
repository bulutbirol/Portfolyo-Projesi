import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-dark-heading">{skills.title}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {skills.list.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-medium text-primary">{skill.name}</h3>
              <p className="text-gray-500 dark:text-dark-text leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;