// src/components/Hero.jsx
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Link as ScrollLink } from 'react-scroll';
import developerAnimation from '../assets/animations/developer.json';

export default function Hero() {
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

  // Emoji variants
  const emojiVariants = {
    hidden: { y: -50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Emoji + Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            variants={itemVariants}
          >
       
            <p className="text-white "> Hi There! <motion.span
              className="inline-block mr-3"
              variants={emojiVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              👋
            </motion.span></p>
            
            <br />
            <span className='text-white'> I'm</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 ml-2">
              Mallikarjun
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl max-w-xl text-gray-300"
            variants={itemVariants}
          >
            A passionate full-stack developer building modern web apps with React, Java, and more.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block px-6 py-3 mt-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 cursor-pointer transition-all transform hover:scale-105"
            >
              View My Work
            </ScrollLink>
          </motion.div>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="flex-1 w-full max-w-md mx-auto"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Lottie animationData={developerAnimation} loop={true} />
        </motion.div>
      </div>
    </section>
  );
}