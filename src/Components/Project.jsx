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

const Projects = () => {
  return (
    <section
      id="projects"
      className=" text-cyan-300 min-h-screen px-6 py-16 relative"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      {/* Basic Projects */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8 text-cyan-400">Basic Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basicProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-cyan-500/30 transition duration-300 hover:-translate-y-4"
            >
              <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-cyan-900 rounded-full text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium Projects */}
      <div>
        <h3 className="text-3xl font-semibold mb-8 text-cyan-400">Medium Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediumProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-cyan-500/30 transition duration-300 hover:-translate-y-4"
            >
              <h4 className="text-2xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-cyan-900 rounded-full text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-400"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
