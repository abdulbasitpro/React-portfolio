import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration.",
      image: "https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-commerce",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application for managing tasks and team collaboration.",
      image: "https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=Task+App",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasting capabilities.",
      image: "https://via.placeholder.com/400x250/059669/FFFFFF?text=Weather",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media account management.",
      image: "https://via.placeholder.com/400x250/DC2626/FFFFFF?text=Social+Media",
      technologies: ["React", "Redux", "Material UI"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first fitness tracking application with workout plans.",
      image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Fitness",
      technologies: ["React Native", "GraphQL", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Content management system for bloggers and content creators.",
      image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Blog+Platform",
      technologies: ["Next.js", "Prisma", "Stripe"],
      liveLink: "#",
      githubLink: "#"
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