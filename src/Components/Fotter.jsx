import React from "react";


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] relative text-gray-300 px-6 py-12 overflow-hidden border-t border-gray-800">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#00eaff21] blur-[150px] -z-10"></div>

      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">Aniket kumar</h2>
          <p className="text-sm mt-2 opacity-75">
            Building smooth and interactive web experiences
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="font-semibold text-white text-sm mb-3 tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#about" className="hover:text-[#00eaff] transition">About</a></li>
            <li><a href="#skills" className="hover:text-[#00eaff] transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#00eaff] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#00eaff] transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-white text-sm mb-3 tracking-wide">Connect With Me</h3>
          <div className="flex justify-center md:justify-start gap-6 text-xl">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-[#00eaff]"><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-[#00eaff]"><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="mailto:aniket@example.com" className="hover:text-[#00eaff]"><FaEnvelope /></motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-6"></div>

      {/* Bottom Section */}
      <div className="text-center flex flex-col items-center gap-3">
        <p className="text-xs opacity-60">
          © {year} Aniket — All Rights Reserved.
        </p>

        {/* Back to top */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="text-[#00eaff] hover:text-white text-sm transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top ↑
        </motion.button>
      </div>

    </footer>
  );
};

export default Footer;
