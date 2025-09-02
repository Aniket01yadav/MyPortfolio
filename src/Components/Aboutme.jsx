import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/img.png'

const AboutMe = () => {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-24" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Side: Animated Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src= {img}
            alt="Aniket's image"
            className="w-full max-w-xs opacity-90 drop-shadow-[0_0_8px_#00f2ff] rounded-2xl transition-all duration-300"
          />
        </motion.div>

        {/* Right Side: About Me Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-300">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m <span className="text-white font-medium">Aniket Kumar</span>, a B.Tech student at Greater Noida College of Technology and recently completed my Software Development Internship at MedCapSky, where I contributed to building scalable applications, designing user-friendly features, and creating clean, maintainable code across both frontend and backend.

            I enjoy tackling development challenges, experimenting with Full Stack technologies like React, JavaScript, Tailwind CSS, Express, MSSQL and Node.js, and continuously learning new tools to improve my projects.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-300">
            Outside of coding, I enjoy watching movies, playing cricket and video games, and exploring new places. I’m always eager to learn and grow in the field of Full Stack and Devops.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;
