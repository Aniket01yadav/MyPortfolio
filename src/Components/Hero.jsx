import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import contact from './ContactMe'

const Hero = () => {
  return (
    <section
      className="bg-black text-cyan-300 min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
      id="home"
    >
      <div className="z-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Hello, I'm Aniket.</h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">Full Stack Developer</h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <a
            href= "#contact"
            className="px-4 sm:px-6 py-2 text-sm sm:text-base border border-cyan-500 rounded hover:bg-cyan-300 hover:text-black transition"
          >
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1PYQaoyCV4eujWG824rov3FjOimQIW08p/view?usp=sharing"
            download
            className="px-4 sm:px-6 py-2 text-sm sm:text-base border border-cyan-500 rounded hover:bg-cyan-300 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-4 sm:gap-6 justify-center text-xl sm:text-2xl">
          <a href="https://www.linkedin.com/in/aniket-kumar-0ab18a340/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-white" />
          </a>
          <a href="https://github.com/Aniket01yadav?tab=overview&from=2025-03-01&to=2025-03-05" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white" />
          </a>
          <a href="https://x.com/theaniketyadav1?t=O_DMIwnLf7cyi_ybquohKw&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
