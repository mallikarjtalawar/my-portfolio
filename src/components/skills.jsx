// src/components/Skills.jsx
import { motion } from 'framer-motion';
import React from 'react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Angular', 'JavaScript', 'TypeScript','Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      skills: ['Java','REST API', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub','Jenkins', 'Docker', 'Vercel', 'VS Code', 'Postman', 'Jira','Figma']
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Professional Skills
        </motion.h2>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.2)" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="px-4 py-1.5 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}