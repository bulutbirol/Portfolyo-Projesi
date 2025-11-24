import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { content, toggleLanguage } = useLanguage();
  const { header } = content;

  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-12 h-12 bg-purple-100 dark:bg-dark-card rounded-full flex items-center justify-center text-primary font-bold text-xl transform -rotate-12">
          B
        </div>

        <nav className="hidden md:flex gap-8 items-center text-gray-500 dark:text-dark-text font-medium">
          <a href="#skills" className="hover:text-primary dark:hover:text-primary transition">{header.skills}</a>
          <a href="#projects" className="hover:text-primary dark:hover:text-primary transition">{header.projects}</a>
          <a href="#footer" className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition">{header.hireMe}</a>
          
          <div className="flex items-center gap-4 ml-4">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-xs font-bold tracking-widest">
              {theme === 'light' ? (
                <>
                  <div className="w-8 h-4 bg-gray-300 rounded-full p-0.5 relative">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full absolute left-0.5"></div>
                  </div>
                  <span className="text-gray-900 dark:text-dark-heading">{header.darkMode}</span>
                </>
              ) : (
                <>
                   <div className="w-8 h-4 bg-primary rounded-full p-0.5 relative flex justify-end">
                    <div className="w-3 h-3 bg-white rounded-full absolute right-0.5"></div>
                  </div>
                  <span className="text-gray-900 dark:text-dark-heading">{header.lightMode}</span>
                </>
              )}
            </button>
            <span className="text-gray-300">|</span>
            <button onClick={toggleLanguage} className="text-xs font-bold tracking-widest text-gray-900 dark:text-dark-heading">
               <span className="text-primary">{header.language}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;