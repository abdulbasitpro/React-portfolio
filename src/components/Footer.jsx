import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-400">Abdul Basit</h3>
            <p className="text-gray-300 dark:text-gray-400">
              Building scalable web applications with the MERN stack and modern technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200">Home</a></li>
              <li><a href="#projects" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200">Skills</a></li>
              <li><a href="#resume" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200">Resume</a></li>
              <li><a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abdul-basit-8616aa294/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/abdulbasitpro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Abdul Basit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;