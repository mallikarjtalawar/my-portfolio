// src/components/Contact.jsx
import { motion } from 'framer-motion';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left - Contact Info */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-300">
              I'm always open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Email */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Email</h3>
              <p className="text-gray-400 mt-1">
                <a href="mailto:your@email.com">mallikarjuntalawar83@gmail.com</a>
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Location</h3>
              <p className="text-gray-400 mt-1">Bangalore, India</p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/mallikarjtalawar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:underline">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mallikarjun-ba93031a8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition hover:underline">
                  LinkedIn
                </a>
               
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Hi Mallikarjun, I'd like to work with you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-md hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}