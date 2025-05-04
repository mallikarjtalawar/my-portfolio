// src/components/Projects.jsx
import { motion } from 'framer-motion';
import React from 'react';

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "Built with React & Firebase. A fully functional admin dashboard with real-time data.",
    tags: ["Angular","Typescript", "Java", "Tailwind"],
  },
  {
    title: "Google Clone",
    desc: "A clone of Google Search page with responsive design and search functionality.",
    tags: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    desc: "This website you're looking at — built with React, Tailwind, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
  }
 
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              variants={itemVariants}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl h-full flex flex-col hover:border-blue-500 transition-all duration-300 transform group-hover:translate-y-[-5px] shadow-lg hover:shadow-blue-500/10">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition">{project.title}</h3>
                <p className="mt-2 text-gray-300 flex-1">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-blue-300 bg-blue-900/30 rounded-full border border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                {/* <div className="mt-6 text-blue-400 group-hover:underline inline-flex items-center">
                  View Project →
                </div> */}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}