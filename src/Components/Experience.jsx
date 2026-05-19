import React from "react";
import { FaBriefcase, FaAward, FaFileDownload } from "react-icons/fa";

const experience = [
  {
    id: 1,
    company: "Medcapsky",
    website: "https://www.medcapsky.com/",
    type: "Startup",
    position: "Backend Developer Intern",
    certificate: "Software Developer Intern",
    duration: "Duration: 2 Months",
    description:
      "Developed and maintained backend services using modern technologies. Recognized as Employee of the Month during my tenure, demonstrating excellence and dedication.",
    tech: ["Node.js", "Express.js", "MSSQL", "JavaScript"],
    achievements: [
      "Employee of the Month Award",
      "Built production-ready backend features",
      "Contributed to API development",
    ],
    certificates: [
      {
        name: "Internship Completion Certificate",
        link: "https://drive.google.com/file/d/1smSiLDZ4cFcNNKMgphyvqkx6XO87SkgeW/view?usp=sharing",
      },
      {
        name: "Certificate of Appreciation",
        link: "https://drive.google.com/file/d/1zuGPxPiddOQHFyfXSVazjDk4pwO-P9Wz/view?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    company: "InternPe",
    website: "https://internpe.in/",
    type: "Platform",
    position: "Frontend Developer Intern",
    certificate: "Frontend Developer Intern",
    duration: "Duration: 2 Months",
    description:
      "Built responsive user interfaces and worked on frontend components using modern web technologies and best practices.",
    tech: ["React.js", "JavaScript", "TailwindCSS", "HTML/CSS"],
    achievements: [
      "Developed multiple reusable UI components",
      "Handled frontend errors and optimized component performance",
      "Implemented responsive and pixel-perfect designs",
    ],
    certificates: [
      {
        name: "Internship Completion Certificate",
        link: "https://drive.google.com/file/d/1_NQTrjHP68_U04XquQ5cHfX1-KYHxwuQ/view?usp=sharing",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="text-cyan-300 min-h-screen px-6 py-20 relative"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">Experience</h2>
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto">
        {experience.map((exp, index) => (
          <div key={exp.id} className="mb-12 relative">
            {/* Timeline line - hidden on mobile */}
            {index < experience.length - 1 && (
              <div className="hidden lg:block absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-cyan-500/50 to-cyan-500/0"></div>
            )}

            <div className="group">
              {/* Timeline dot */}
              <div className="hidden lg:flex absolute left-0 top-6 w-14 h-14 items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition duration-300">
                  <FaBriefcase className="text-gray-900 text-lg" />
                </div>
              </div>

              {/* Card - adjusted left margin on desktop */}
              <div className="lg:ml-32 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-cyan-500/60 transition duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                
                {/* Top Section - Company & Role */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition inline-flex items-center gap-2"
                      >
                        {exp.company}
                        <span className="text-lg opacity-0 group-hover:opacity-100 transition">↗</span>
                      </a>
                      <p className="text-sm text-gray-400 mt-1">📍 {exp.type}</p>
                    </div>
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/40 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Position */}
                  <div className="space-y-2">
                    {exp.certificate && (
                      <p className="text-2xl font-bold text-white">
                        Position: {exp.certificate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 my-6"></div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Achievements & Tech - Two Column on Desktop */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="md:border-r md:border-gray-800 md:pr-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FaAward className="text-yellow-400 text-lg" />
                        <h4 className="font-bold text-yellow-300">Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-cyan-200/90">
                            <span className="text-cyan-400 font-bold mt-0.5">→</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <p className="font-bold text-cyan-300 mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-full text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-900/50 transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificates Section */}
                {exp.certificates && exp.certificates.length > 0 && (
                  <div className="pt-6 border-t border-gray-800">
                    <p className="font-bold text-cyan-300 mb-4 flex items-center gap-2">
                      <span>📜</span> Credentials
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.certificates.map((cert, idx) => (
                        <a
                          key={idx}
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400/80 hover:bg-cyan-500/20 transition duration-200 group/cert"
                        >
                          <FaFileDownload className="text-cyan-400 text-sm group-hover/cert:scale-125 transition" />
                          <span className="text-sm text-cyan-300 group-hover/cert:text-cyan-200 transition">
                            {cert.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;