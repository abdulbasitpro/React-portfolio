import React from 'react';
import Typewriter from 'typewriter-effect';
import ParticlesBackground from './ParticlesBackground';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticlesBackground darkMode={darkMode} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm <span className="text-teal-600 dark:text-teal-400">Abdul Basit</span>
            </h1>
            <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 min-h-[60px]">
              <Typewriter
                options={{
                  strings: ['MERN Stack Developer', 'Full Stack Developer', 'JavaScript Enthusiast', 'IT Student'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Passionate MERN stack developer and IT student creating scalable web applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 px-8 py-3 rounded-lg hover:bg-teal-600 hover:text-white dark:hover:bg-teal-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img
                  src="/src/assets/Screenshot 2024-11-17 154953.png"
                  alt="Abdul Basit"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Media Icons */}
              <div className="absolute -bottom-4 -right-4 flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/abdul-basit-8616aa294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700 dark:text-blue-500">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/abdulbasitpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800 dark:text-gray-300">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;