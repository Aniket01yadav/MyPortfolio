import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import attendancei_img from "../assets/attendance.png"
import samvidhan_img from "../assets/samvidhan.png"
import peachdev_img from "../assets/peachdev.png"
import syanpse from "../assets/synapse.png"


const projects = [
  {
    id: 1,
    title: "Automated Attendance System",
    description:
      "Smart attendance system using real-time face recognition technology.",
    tech: ["React.js", "JavaScript", "TailwindCSS", "MongoDB","Express.js", "Node.js"],
    github: "https://github.com/Aniket01yadav/Automated-Attendance",
    demo: "https://inclasses.netlify.app/",
    image: attendancei_img,
  },
  {
    id: 2,
    title: "Samvidhan Seekho",
    description:
      "A gamified platform for learning and exploring the Indian Constitution interactively.",
    tech: ["React.js", "Javascript", "TailwindCSS", "MongoDB","Express.js", "Node.js"],
    github: "https://github.com/SamvidhanSeekho/Samvidhan_1",
    demo: "https://samvidhanseekho.vercel.app/",
    image: samvidhan_img,
  },
  {
    id: 3,
    title: "Synapse",
    description:
      "Interactive social networking platform with relationship visualization, hobby management, and personalized recommendations.",
    tech: ["React.js", "React Flow", "Javascript", "TailwindCSS", "MongoDB","Express.js", "Node.js"],
    github: "https://github.com/Aniket01yadav/Synapse",
    demo: "https://synapse-three-eta.vercel.app",
    image: syanpse,
  },
  {
    id: 4,
    title: "ThePeachDev",
    description:
      "A responsive clone of ThePeachDev.com built with modern UI and animations.",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js"],
    github: "https://github.com/yourusername/thepeachdev-clone",
    demo: "https://yourusername.github.io/thepeachdev-clone/",
    image: peachdev_img,
  }
];

const ProjectCard = ({ project }) => (
  <article className="group flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 shadow-lg backdrop-blur-sm transition duration-500 hover:-translate-y-3 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 sm:min-h-[410px]">
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title} live project`}
      className="group/image relative block h-40 overflow-hidden border-b border-cyan-500/20 bg-gradient-to-br from-cyan-950/50 via-gray-950 to-blue-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover/image:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center px-5 text-center">
          <span className="text-sm font-medium text-cyan-300/50">{project.title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent"></div>
      <div className="absolute inset-0 grid place-items-center bg-gray-950/75 opacity-0 backdrop-blur-sm transition duration-300 group-hover/image:opacity-50 group-focus-visible/image:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/70 bg-cyan-400 px-4 py-2 text-sm font-semibold text-gray-950 shadow-lg shadow-cyan-500/30">
          Live<FiArrowUpRight className="text-lg" />
        </span>
      </div>
    </a>

    <div className="relative z-10 flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h4 className="text-xl font-semibold leading-snug text-cyan-300 transition group-hover:text-cyan-100">
          {project.title}
        </h4>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} source code`}
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-500/40 px-3 py-1.5 text-sm font-semibold text-cyan-300/80 transition hover:border-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-100"
        >
          <FaGithub /> Code
        </a>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-700/50 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 px-3 py-1 text-xs text-cyan-200 transition group-hover:border-cyan-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden px-6 py-16 text-cyan-300"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center text-2xl font-bold text-cyan-300 sm:text-3xl md:text-4xl">
            Projects
          </h2>
        </div>

        <div>
          <h3 className="mb-6 border-l-4 border-cyan-400 pl-4 text-xl font-semibold text-cyan-400 sm:mb-8 sm:text-2xl md:text-3xl">
            Things I have built
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
