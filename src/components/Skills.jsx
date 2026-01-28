import React, { useState } from 'react';
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
  Clock,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  BarChart3,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const techStack = {
    frontend: [
      { name: "React", icon: Code, color: "text-blue-500", level: "Advanced", percentage: 90 },
      { name: "TypeScript", icon: Code, color: "text-blue-600", level: "Advanced", percentage: 85 },
      { name: "JavaScript", icon: Code, color: "text-yellow-500", level: "Advanced", percentage: 90 },
      { name: "HTML", icon: Code, color: "text-orange-500", level: "Advanced", percentage: 85 },
      { name: "CSS", icon: Code, color: "text-blue-400", level: "Advanced", percentage: 85 },
      { name: "Tailwind", icon: Settings, color: "text-teal-500", level: "Advanced", percentage: 88 }
    ],
    backend: [
      { name: "Node.js", icon: Server, color: "text-green-500", level: "Intermediate", percentage: 75 },
      { name: "Express", icon: Shield, color: "text-gray-600", level: "Intermediate", percentage: 70 },
      { name: "MongoDB", icon: Database, color: "text-green-600", level: "Intermediate", percentage: 75 },
      { name: "REST APIs", icon: Zap, color: "text-purple-500", level: "Intermediate", percentage: 80 }
    ],
    tools: [
      { name: "Git", icon: GitBranch, color: "text-orange-600", level: "Intermediate", percentage: 75 },
      { name: "GitHub", icon: Github, color: "text-gray-700", level: "Intermediate", percentage: 80 },
      { name: "Postman", icon: Settings, color: "text-orange-500", level: "Intermediate", percentage: 75 },
      { name: "VS Code", icon: Code, color: "text-blue-500", level: "Advanced", percentage: 90 },
      { name: "MongoDB Compass", icon: Database, color: "text-green-600", level: "Intermediate", percentage: 70 }
    ]
  };

  const proficiencyLevels = [
    { name: "React", level: "Advanced", percentage: 90, icon: Code, description: "Building complex applications with hooks, context, and state management" },
    { name: "JavaScript", level: "Advanced", percentage: 90, icon: Code, description: "ES6+, async/await, closures, and modern JS patterns" },
    { name: "TypeScript", level: "Advanced", percentage: 85, icon: Code, description: "Strong typing, interfaces, generics, and advanced TS features" },
    { name: "Node.js", level: "Intermediate", percentage: 75, icon: Server, description: "Server-side development, event loop, and ecosystem" },
    { name: "Express", level: "Intermediate", percentage: 70, icon: Shield, description: "Routing, middleware, error handling, and API development" },
    { name: "MongoDB", level: "Intermediate", percentage: 75, icon: Database, description: "Document modeling, aggregation, and database optimization" },
    { name: "HTML/CSS", level: "Advanced", percentage: 85, icon: Code, description: "Semantics, accessibility, and responsive design principles" },
    { name: "Git", level: "Intermediate", percentage: 75, icon: GitBranch, description: "Branching, merging, collaboration, and workflows" }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, description: "Analyzing complex issues and developing effective solutions", score: 90 },
    { name: "Communication", icon: MessageCircle, description: "Clear verbal and written communication with teams", score: 85 },
    { name: "Teamwork", icon: Users, description: "Collaborating effectively in diverse, cross-functional teams", score: 85 },
    { name: "Time Management", icon: Clock, description: "Prioritizing tasks and meeting deadlines efficiently", score: 80 },
    { name: "Adaptability", icon: Zap, description: "Quickly learning new technologies and adapting to changes", score: 88 },
    { name: "Critical Thinking", icon: Brain, description: "Evaluating information and making informed decisions", score: 85 }
  ];

  const categoryIcons = {
    frontend: Code,
    backend: Server,
    tools: Settings
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCardVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const SkillProgressBar = ({ percentage, color = "from-teal-500 to-blue-500" }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </div>
  );

  const SkillScore = ({ score }) => (
    <div className="flex items-center">
      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{score}%</span>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="p-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl shadow-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-teal-600 to-blue-600 bg-clip-text text-transparent dark:from-white dark:via-teal-400 dark:to-blue-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A comprehensive overview of my technical capabilities and professional competencies
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-blue-400">
                  18+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
              <BarChart3 className="w-10 h-10 text-teal-500 dark:text-teal-400" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                  3+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
              </div>
              <TrendingUp className="w-10 h-10 text-purple-500 dark:text-purple-400" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-400">
                  25+
                </p>
                <p className="text-gray-600 dark:text-gray-400">Projects Delivered</p>
              </div>
              <Target className="w-10 h-10 text-green-500 dark:text-green-400" />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section with Expandable Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 relative z-10"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Stack
          </h3>

          {Object.entries(techStack).map(([category, skills], categoryIndex) => {
            const IconComponent = categoryIcons[category];
            const isOpen = expandedCategory === category;

            return (
              <motion.div
                key={category}
                variants={itemVariants}
                className="mb-6 last:mb-0"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 + categoryIndex * 0.1 }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
                  onClick={() => toggleCategory(category)}
                >
                  <div className="p-6 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
                    <div className="flex items-center">
                      <div className="p-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white capitalize text-2xl">
                        {category}
                      </h4>
                      <span className="ml-3 text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {skills.length} skills
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
                    >
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="px-6 pb-6"
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                          {skills.map((skill, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.5, delay: index * 0.05 }}
                              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 group"
                              whileHover={{ scale: 1.05, y: -3 }}
                              onMouseEnter={() => setHoveredSkill(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <div className="flex items-center justify-center mb-3">
                                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-200">
                                  <skill.icon className={skill.color + " group-hover:scale-110 transition-transform duration-200"} size={24} />
                                </div>
                              </div>
                              <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center mb-2">
                                {skill.name}
                              </h5>
                              <div className="flex justify-between items-center mb-2">
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  skill.level === 'Expert'
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                    : skill.level === 'Advanced'
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                }`}>
                                  {skill.level}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {skill.percentage}%
                                </span>
                              </div>
                              <SkillProgressBar
                                percentage={skill.percentage}
                                color={
                                  skill.level === 'Expert'
                                    ? 'from-green-500 to-emerald-500'
                                    : skill.level === 'Advanced'
                                    ? 'from-blue-500 to-indigo-500'
                                    : 'from-purple-500 to-pink-500'
                                }
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency Levels Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 relative z-10"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {proficiencyLevels.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              >
                <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full group-hover:transform group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg mr-4">
                        <item.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.level === 'Expert'
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                              : item.level === 'Advanced'
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          }`}>
                            {item.level}
                          </span>
                          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    </div>
                    <SkillProgressBar
                      percentage={item.percentage}
                      color={
                        item.level === 'Expert'
                          ? 'from-green-500 to-emerald-500'
                          : item.level === 'Advanced'
                          ? 'from-blue-500 to-indigo-500'
                          : 'from-purple-500 to-pink-500'
                      }
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Soft Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Qualities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
              >
                <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-2xl transition-all duration-300 h-full group-hover:transform group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                        <skill.icon className="text-white" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <SkillScore score={skill.score} />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Rating</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {skill.score}/100
                      </span>
                    </div>
                    <SkillProgressBar
                      percentage={skill.score}
                      color="from-teal-500 to-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;