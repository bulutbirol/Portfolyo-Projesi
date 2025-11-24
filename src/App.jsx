import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { loading } = useLanguage();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center dark:bg-dark-bg dark:text-dark-text">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="bg-gradient-to-b from-purple-50 to-white dark:from-dark-bg dark:to-dark-bg">
        <Header />
        <Hero />
      </div>
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;