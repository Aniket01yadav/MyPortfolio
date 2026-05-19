import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const basicProjects = [
  {
    id: 1,
    title: "BMI Calculator",
    description: "A simple BMI calculator built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aniket01yadav/BMI-calculator",
    demo: "https://aniket01yadav.github.io/BMI-calculator/",
  },
  {
    id: 2,
    title: "Clock App",
    description: "A digital clock application showing real-time date and time.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/clock-app",
    demo: "https://yourusername.github.io/clock-app/",
  },
  {
    id: 3,
    title: "Number Guessing Game",
    description: "Fun game to guess a random number with hints.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aniket01yadav/Number_guessing_game",
    demo: "https://aniket01yadav.github.io/Number_guessing_game/",
  },
];

const mediumProjects = [
  {
    id: 1,
    title: "ThePeachDev.com Clone",
    description:
      "A responsive clone of ThePeachDev.com built with modern UI and animations.",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js"],
    github: "https://github.com/yourusername/thepeachdev-clone",
    demo: "https://yourusername.github.io/thepeachdev-clone/",
  },
];

const advancedProjects = [
  {
    id: 1,
    title: "Automated Attendance System",
    description:
      "An intelligent attendance tracking system that automates the process of marking attendance efficiently.",
    tech: ["React.js", "JavaScript", "TailwindCSS", "MongoDB","Express.js", "Node.js"],
    github: "https://github.com/Aniket01yadav/Automated-Attendance",
    demo: "https://inclasses.netlify.app/",
  },
  {
    id: 2,
    title: "Samvidhan Seekho",
    description:
      "An educational platform dedicated to teaching and exploring the Indian Constitution with interactive content.",
    tech: ["React.js", "Javascript", "TailwindCSS", "MongoDB","Express.js", "Node.js"],
    github: "https://github.com/SamvidhanSeekho/Samvidhan_1",
    demo: "https://samvidhanseekho.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className=" text-cyan-300 min-h-screen px-6 py-16 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-40 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-20 right-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-1/2 right-1/4 animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-cyan-300">Projects</h2>
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Basic Projects */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-cyan-400 border-l-4 border-cyan-400 pl-4">Basic Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basicProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-500 hover:-translate-y-6 hover:scale-105 border border-gray-800 hover:border-cyan-500/60 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10 transition duration-300"></div>
              
              <div className="relative z-10">
              <h4 className="text-2xl font-semibold mb-3 text-cyan-300 group-hover:text-cyan-100 transition">{project.title}</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-full text-cyan-200 border border-cyan-700/50 group-hover:border-cyan-500 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 hover:gap-3 transition duration-300 text-sm font-medium"
                >
                  <FaGithub className="group-hover:scale-110 transition" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 hover:gap-3 transition duration-300 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="group-hover:scale-110 transition" /> Live
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium Projects */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-cyan-400 border-l-4 border-cyan-400 pl-4">Medium Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediumProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-500 hover:-translate-y-6 hover:scale-105 border border-gray-800 hover:border-cyan-500/60 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10 transition duration-300"></div>
              
              <div className="relative z-10">
              <h4 className="text-2xl font-semibold mb-3 text-cyan-300 group-hover:text-cyan-100 transition">{project.title}</h4>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-full text-cyan-200 border border-cyan-700/50 group-hover:border-cyan-500 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 hover:gap-3 transition duration-300 text-sm font-medium"
                >
                  <FaGithub className="group-hover:scale-110 transition" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 hover:gap-3 transition duration-300 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="group-hover:scale-110 transition" /> Live
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Projects */}
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-cyan-400 border-l-4 border-cyan-400 pl-4">Advanced Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advancedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:shadow-cyan-500/20 transition duration-500 hover:-translate-y-6 hover:scale-105 border border-gray-800 hover:border-cyan-500/60 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/5 group-hover:to-cyan-500/10 transition duration-300"></div>
              
              <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-2xl font-semibold text-cyan-300 group-hover:text-cyan-100 transition">{project.title}</h4>
                <div className="text-2xl opacity-30 group-hover:opacity-100 transition"></div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-full text-cyan-200 border border-cyan-700/50 group-hover:border-cyan-500 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 hover:gap-3 transition duration-300 text-sm font-medium"
                >
                  <FaGithub className="group-hover:scale-110 transition" /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-cyan-300 hover:text-cyan-100 hover:gap-3 transition duration-300 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="group-hover:scale-110 transition" /> Live
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;
