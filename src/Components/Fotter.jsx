import React from "react";


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] to-black relative text-gray-300 px-6 py-16 overflow-hidden border-t border-cyan-500/30">
      
      {/* Animated Glow Effects */}
      <div className="absolute inset-0 bg-[#00eaff21] blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 text-center sm:text-left mb-8">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">Aniket Kumar</h2>
          <p className="text-xs sm:text-sm opacity-75 leading-relaxed">
            Building smooth and interactive web experiences with modern tech
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white text-xs sm:text-sm mb-4 tracking-wide relative inline-block">
            Quick Links
            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-500"></div>
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-cyan-400 transition duration-300 inline-flex items-center gap-2"><span className="text-cyan-500">›</span> About</a></li>
            <li><a href="#experience" className="opacity-80 hover:opacity-100 hover:text-cyan-400 transition duration-300 inline-flex items-center gap-2"><span className="text-cyan-500">›</span> Experience</a></li>
            <li><a href="#skills" className="opacity-80 hover:opacity-100 hover:text-cyan-400 transition duration-300 inline-flex items-center gap-2"><span className="text-cyan-500">›</span> Skills</a></li>
            <li><a href="#projects" className="opacity-80 hover:opacity-100 hover:text-cyan-400 transition duration-300 inline-flex items-center gap-2"><span className="text-cyan-500">›</span> Projects</a></li>
            <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-cyan-400 transition duration-300 inline-flex items-center gap-2"><span className="text-cyan-500">›</span> Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-white text-xs sm:text-sm mb-4 tracking-wide relative inline-block">
            Connect
            <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-500"></div>
          </h3>
          <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 text-xl sm:text-2xl">
            <motion.a 
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Aniket01yadav" 
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition duration-300 relative group"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition"></div>
              <FaGithub className="relative" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/aniket-kumar-0ab18a340/" 
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 relative group"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition"></div>
              <FaLinkedin className="relative" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:aniyadav264@gmail.com" 
              className="text-gray-400 hover:text-red-400 transition duration-300 relative group"
            >
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition"></div>
              <FaEnvelope className="relative" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-cyan-500/20 my-8"></div>

      {/* Bottom Section */}
      <div className="text-center flex flex-col items-center gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm opacity-60">
          © {year} <span className="text-cyan-400">Aniket Kumar</span> — All Rights Reserved.
        </p>

        {/* Back to top */}
        <motion.button
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="text-cyan-400 hover:text-cyan-300 text-sm transition duration-300 px-4 py-2 border border-cyan-500/50 rounded-lg hover:border-cyan-400 group flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Back to Top</span>
          <span className="group-hover:translate-y-[-4px] transition duration-300">↑</span>
        </motion.button>
      </div>

    </footer>
  );
};

export default Footer;
