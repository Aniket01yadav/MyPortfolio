import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img.png'

const AboutMe = () => {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-24" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

        {/* Left Side: Animated Image */}
        <motion.div
          className="md:w-1/2 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src= {img}
            alt="Aniket's image"
            className="w-full max-w-xs sm:max-w-sm opacity-90 drop-shadow-[0_0_8px_#00f2ff] rounded-2xl transition-all duration-300"
          />
        </motion.div>

        {/* Right Side: About Me Text */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-cyan-300">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
            I’m <span className="text-white font-medium">Aniket Kumar</span>, a Computer Science Engineer (B.Tech, 2026) and Full Stack Developer passionate about building scalable, user-centric web applications. I recently completed a Software Developer Internship at MedCapSky, where I contributed to production-ready healthcare platforms by building REST APIs, designing database schemas, and developing responsive frontend interfaces.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 text-gray-300">
            I enjoy turning ideas into reliable digital products using JavaScript, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Microsoft SQL Server. My focus is on writing clean, maintainable code and creating secure, high-performance applications that deliver a seamless user experience.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 text-gray-300">
           Beyond coding, I’m deeply interested in system design, web security, and continuously learning new technologies to grow as a software engineer. I also enjoy playing chess, which strengthens my strategic thinking and problem-solving skills. Outside of tech, I enjoy watching movies, playing cricket and video games, and exploring new places.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
