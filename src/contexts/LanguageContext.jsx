import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { data as localData } from '../data'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [content, setContent] = useState(localData[language]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
    axios.post('https://reqres.in/api/workintech', localData)
      .then(response => {
        setContent(response.data[language]);
      })
      .catch(error => {
        console.log("API hatası alındı, yerel veri kullanılıyor.");
        setContent(localData[language]);
      })
      .finally(() => {
        setLoading(false);
      });
      
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'tr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, content, toggleLanguage, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);