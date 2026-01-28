import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AB Visionary Solutions",
      description: "Professional business solutions platform showcasing services and expertise.",
      image: "/src/assets/ab-visionary-solutions-screenshot.png", // Replace with actual screenshot
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://ab-visionary-solutions.vercel.app/",
      githubLink: "https://github.com/abdulbasitpro/Ab-visionary-solutions-"
    },
    {
      id: 2,
      title: "Project of Elegence Arena",
      description: "A sophisticated wedding hall booking system with elegant design and seamless reservation process.",
      image: "/src/assets/elegence-arena-screenshot.png", // Replace with actual screenshot
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://project-of-elegence-arena.vercel.app/",
      githubLink: "https://github.com/abdulbasitpro/project-of-elegence-arena"
    },
    {
      id: 3,
      title: "E-commerce Hackathon",
      description: "A comprehensive e-commerce store development guide with product API integration and best practices.",
      image: "/src/assets/hackathon-screenshot.png", // Replace with actual screenshot
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://hackathon-vert-seven.vercel.app/",
      githubLink: "https://github.com/abdulbasitpro/Hackathon"
    },
    {
      id: 4,
      title: "Landing Page",
      description: "Modern and responsive landing page with smooth animations and conversions.",
      image: "/src/assets/landing-page-screenshot.png", // Replace with actual screenshot
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://landing-page-five-xi-39.vercel.app/",
      githubLink: "https://github.com/abdulbasitpro/Landing-page"
    },
    {
      id: 5,
      title: "Sun and Moon Theme",
      description: "Dynamic theme switching application with beautiful sun and moon animations.",
      image: "/src/assets/sun-moon-screenshot.png", // Replace with actual screenshot
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://sun-and-moon-two.vercel.app/",
      githubLink: "https://github.com/abdulbasitpro/sun-and-moon"
    },
    {
      id: 6,
      title: "Netflix Clone",
      description: "A Netflix-inspired streaming platform with movie browsing and recommendations.",
      image: "/src/assets/netflix-clone-screenshot.png", // Replace with actual screenshot
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://netflix-by-abdul-basit.vercel.app/",
      githubLink: "https://github.com/abdulbasitpro/Netflix-"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-medium text-sm"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm"
                  >
                    <Github size={14} className="mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connect with me section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Connect With Me</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating or want to learn more? Feel free to connect with me!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/abdul-basit-8616aa294/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/abdulbasitpro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;