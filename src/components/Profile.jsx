import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Profile = () => {
  const { content } = useLanguage();
  const { profile } = content;

  return (
    <section className="py-20 bg-light dark:bg-dark-bg border-t border-[#BAB2E7] dark:border-[#BAB2E7] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center md:text-left text-gray-900 dark:text-dark-heading">
          {profile.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-transparent p-8 rounded-lg shadow-sm dark:shadow-none border border-gray-100 dark:border-none relative transition-colors duration-300">
            <h3 className="text-2xl font-medium text-primary mb-6">{profile.basicInfoTitle}</h3>
            
            <div className="space-y-4">
              <div className="flex">
                <span className="w-36 font-bold text-gray-900 dark:text-dark-heading">{profile.labels.birthDate}</span>
                <span className="text-gray-600 dark:text-dark-text">{profile.info.birthDate}</span>
              </div>
              <div className="flex">
                <span className="w-36 font-bold text-gray-900 dark:text-dark-heading">{profile.labels.city}</span>
                <span className="text-gray-600 dark:text-dark-text">{profile.info.city}</span>
              </div>
              <div className="flex">
                <span className="w-36 font-bold text-gray-900 dark:text-dark-heading">{profile.labels.education}</span>
                <span className="text-gray-600 dark:text-dark-text">{profile.info.education}</span>
              </div>
              <div className="flex">
                <span className="w-36 font-bold text-gray-900 dark:text-dark-heading">{profile.labels.role}</span>
                <span className="text-gray-600 dark:text-dark-text">{profile.info.role}</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
             <h3 className="text-2xl font-medium text-primary border-b-2 border-primary inline-block pb-1">{profile.aboutMeTitle}</h3>
             {profile.aboutMe.map((paragraph, idx) => (
               <p key={idx} className="text-gray-600 dark:text-dark-text leading-relaxed">
                 {paragraph}
               </p>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;