import React from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      institution: "The University of Agriculture Peshawar",
      year: "2023 - 2027",
      description:
        "Currently pursuing degree in Information Technology with focus on web development and database systems.",
    },
    {
      id: 2,
      degree: "MERN Stack Development",
      institution: "SMIT (Saylani Mass IT Training)",
      year: "2024 - 2026",
      description:
        "1.5-year intensive program covering MongoDB, Express, React, and Node.js technologies.",
    },
  ];

  const experience = [
    {
      id: 1,
      position: "Junior MERN Stack Developer",
      company: "Creative Tech Solutions",
      year: "Sep 2025 – Mar 2026",
      description:
        "Developed and maintained full-stack web applications using React.js, Node.js, and Express.js. Designed and managed scalable MongoDB database structures. Collaborated with cross-functional teams to deliver high-quality software solutions and wrote clean, maintainable, and well-structured code.",
    },
    {
      id: 2,
      position: "MERN Stack Developer (Personal Projects)",
      company: "",
      year: "2025 – Present",
      description:
        "Building full-stack applications using MongoDB, Express, React, and Node.js. Learning through personal projects, documentation, and online resources. Focusing on REST APIs, authentication, databases, and deployments.",
    },
    {
      id: 3,
      position: "Web Developer (Learning & Personal Projects)",
      company: "",
      year: "2024 – 2025",
      description:
        "Developing responsive websites with JavaScript, React, and Tailwind CSS. Improving UI/UX, component structure, and performance through practice. Learning version control, Git workflows, and modern web tooling.",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background, professional experience, and
            certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-teal-600 dark:text-teal-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="border-l-4 border-teal-600 pl-4 py-1 bg-white dark:bg-gray-800 p-4 rounded-r-lg shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 flex items-center">
                    <Calendar size={14} className="mr-1" /> {edu.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border-l-4 border-indigo-600 pl-4 py-1 bg-white dark:bg-gray-800 p-4 rounded-r-lg shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {exp.position}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 flex items-center">
                    <Calendar size={14} className="mr-1" /> {exp.year}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">
                abdulbasitdevx@gmail.com
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">
                +923436887399
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">
                Peshawar, Pakistan
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abdul-basit-8616aa294/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 text-sm font-medium"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/abdulbasitpro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center flex items-center justify-center">
            <Award className="w-6 h-6 mr-2 text-yellow-600 dark:text-yellow-400" />
            Certifications & Experience Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Creative Tech Solutions */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                    Verified
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  Junior MERN Stack Developer
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-2">
                  Creative Tech Solutions
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                  <Calendar size={12} className="mr-1" /> March 2026
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Certified experience in full-stack web development using React.js, Node.js, Express.js, and MongoDB.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="/Abdul_Basit_Exp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 hover:underline"
                >
                  View Certificate <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* SMIT */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 animate-pulse">
                    In Progress
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                  MERN Stack Development
                </h4>
                <p className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-2">
                  SMIT (Saylani Mass IT Training)
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                  <Calendar size={12} className="mr-1" /> 2024 - 2026
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  1.5-year intensive training covering modern web technologies and full-stack development practices.
                </p>
              </div>
              <div className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                <Calendar size={14} className="mr-1" /> Expected Graduation 2026
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
