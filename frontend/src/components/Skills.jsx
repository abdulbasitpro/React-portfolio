import React from 'react';
import {
  Code,
  Server,
  Database,
  GitBranch,
  Settings,
  Github,
  Shield,
  Zap,
  Brain,
  MessageCircle,
  Users,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const techStack = {
    frontend: [
      { name: "React", icon: Code, color: "text-blue-500" },
      { name: "TypeScript", icon: Code, color: "text-blue-600" },
      { name: "JavaScript", icon: Code, color: "text-yellow-500" },
      { name: "HTML", icon: Code, color: "text-orange-500" },
      { name: "CSS", icon: Code, color: "text-blue-400" },
      { name: "Tailwind", icon: Settings, color: "text-teal-500" }
    ],
    backend: [
      { name: "Node.js", icon: Server, color: "text-green-500" },
      { name: "Express", icon: Shield, color: "text-gray-600" },
      { name: "MongoDB", icon: Database, color: "text-green-600" },
      { name: "REST APIs", icon: Zap, color: "text-purple-500" }
    ],
    tools: [
      { name: "Git", icon: GitBranch, color: "text-orange-600" },
      { name: "GitHub", icon: Github, color: "text-gray-700" },
      { name: "Postman", icon: Settings, color: "text-orange-500" },
      { name: "VS Code", icon: Code, color: "text-blue-500" },
      { name: "MongoDB Compass", icon: Database, color: "text-green-600" }
    ]
  };

  const proficiencyLevels = [
    { name: "React", level: "Advanced", icon: Code },
    { name: "JavaScript", level: "Advanced", icon: Code },
    { name: "TypeScript", level: "Advanced", icon: Code },
    { name: "Node.js", level: "Intermediate", icon: Server },
    { name: "Express", level: "Intermediate", icon: Shield },
    { name: "MongoDB", level: "Intermediate", icon: Database },
    { name: "HTML/CSS", level: "Advanced", icon: Code },
    { name: "Git", level: "Intermediate", icon: GitBranch }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain },
    { name: "Communication", icon: MessageCircle },
    { name: "Teamwork", icon: Users },
    { name: "Time Management", icon: Clock },
    { name: "Adaptability", icon: Zap },
    { name: "Critical Thinking", icon: Brain }
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Skills & Expertise</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and professional competencies
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code className="mr-2 text-blue-500" size={20} />
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.frontend.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <tech.icon className={tech.color} size={16} />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Server className="mr-2 text-green-500" size={20} />
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.backend.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="flex items-center p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <tech.icon className={tech.color} size={16} />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Settings className="mr-2 text-gray-600" size={20} />
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    className="flex items-center p-2 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <tool.icon className={tool.color} size={16} />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proficiency Levels Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 0.8 }}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <item.icon className="mr-2 text-teal-600 dark:text-teal-400" size={14} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.name}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    item.level === 'Advanced'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {item.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 + 1.2 }}
                className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center hover:shadow-sm transition-shadow duration-200"
              >
                <skill.icon className="mr-3 text-yellow-500" size={16} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;