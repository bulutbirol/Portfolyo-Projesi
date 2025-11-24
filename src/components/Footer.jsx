import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { content } = useLanguage();
  const { footer } = content;

  return (
    <footer id="footer" className="py-20 bg-light dark:bg-dark-footer transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-dark-heading mb-10">
            {footer.title}
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <a href={`mailto:${footer.email}`} className="text-primary font-medium flex items-center gap-2 text-lg underline">
              👉 {footer.email}
            </a>
            
            <div className="flex gap-6 font-medium text-gray-900 dark:text-dark-heading">
               {footer.links.map((link, index) => (
                 <a key={index} href={link.url} className={`${link.color || 'hover:text-primary dark:hover:text-primary'} transition`}>
                   {link.name}
                 </a>
               ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;