// src/components/About.jsx
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import React from 'react';
import developerThinkingAnimation from '../assets/animations/developerThinking.json';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = ['React', 'Angular', 'Javascript' ,'TypeScript','Java','Mysql', 'SpringBoot','Tailwind CSS'];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Column - Bio */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            variants={fadeIn}
          >
            A little more about me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={fadeIn}
          >
            Hi Everyone, I am Mallikarjun from karnataka, India.
            I am currently employed as a software developer.
            I have completed my B.Tech in Electrical and Electronics Engineering from UVCE college, Bangalore.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={fadeIn}
          >
           Apart from coding, I enjoy playing cricket and watching movies.
          </motion.p>

          {/* Skills Badges */}
          {/* <motion.div
            className="flex flex-wrap gap-3 mt-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={fadeIn}
                className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 hover:border-blue-600 text-blue-400 cursor-default transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Right Column - Visual / Timeline */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.div
            className="w-full max-w-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Lottie animationData={developerThinkingAnimation} loop={true} />
          </motion.div>

          {/* Optional: Add Timeline Later */}
          <motion.div
            className="mt-10 w-full"
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Experience</h3>
            <div className="relative pl-6 border-l-2 border-gray-700">
              <motion.div
                className="mb-8 ml-4"
                variants={fadeIn}
              >
                <h4 className="text-lg font-medium text-white">Full Stack Developer</h4>
                <p className="text-sm text-gray-400">Feb 2023 - Present</p>
                <p className="text-gray-300 mt-1">Built modern apps using React,Angular,Java, Sql.</p>
              </motion.div>

              <motion.div
                className="mb-8 ml-4"
                variants={fadeIn}
              >
                <h4 className="text-lg font-medium text-white">Software Developer Intern</h4>
                <p className="text-sm text-gray-400">Oct 2022 - Jan 2023</p>
                <p className="text-gray-300 mt-1">Designed and developed custom websites for clients.</p>
              </motion.div>

              <motion.div
                className="ml-4"
                variants={fadeIn}
              >
                <h4 className="text-lg font-medium text-white">Self-Taught Coder</h4>
                {/* <p className="text-sm text-gray-400">2019 - 2021</p> */}
                <p className="text-gray-300 mt-1">Learned coding through YouTube, blogs, and open-source projects.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}