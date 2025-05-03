// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode instantly
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setDarkMode(newMode);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={200}
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          Mallikarjun
        </ScrollLink>

        {/* Desktop Nav + Theme Toggle */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
            <li>
              <NavLink to="hero">Home</NavLink>
            </li>
            <li>
              <NavLink to="projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Connect</NavLink>
            </li>
           
          </ul>

          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full hover:bg-gray-800 transition-colors duration-150"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-300">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-200">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 shadow-lg">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li><NavLink to="hero" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="contact" onClick={() => setIsMenuOpen(false)}>Connect</NavLink></li>
            <li><NavLink to="skills" onClick={() => setIsMenuOpen(false)}>Skills</NavLink></li>

            <li className="pt-2 border-t border-gray-700 mt-2">
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 text-left text-gray-300 hover:text-blue-300 transition-colors duration-150"
              >
                {darkMode ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-300">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-200">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

// Reusable NavLink component for better performance
const NavLink = ({ to, children }) => (
  <ScrollLink
    to={to}
    smooth={true}
    duration={200}
    className="cursor-pointer hover:text-blue-300 transition-colors duration-150"
    onClick={() => {}}
  >
    {children}
  </ScrollLink>
);