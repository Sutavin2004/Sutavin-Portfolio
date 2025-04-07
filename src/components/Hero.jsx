import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Section container with theme-aware background and text
    <motion.section
      name="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center 
                 bg-lightBg dark:bg-bgDark text-lightText dark:text-textPrimary 
                 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }} // fade in animation
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Profile image placeholder (you can replace this with your photo) */}
      <img
        src="https://via.placeholder.com/180"
        alt="Profile"
        className="w-44 h-44 rounded-full object-cover border-4 border-accentBlue shadow-md mb-6"
      />

      {/* Subheading */}
      <p className="text-lightMuted dark:text-textMuted text-sm mb-2">
        Hello, I'm
      </p>

      {/* Main heading with theme-responsive color */}
      <h1 className="text-5xl font-heading font-bold mb-2 text-lightText dark:text-white">
        Sutavin Vinothan
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-lightMuted dark:text-textMuted mb-6">
        Computer Science Student @ Western University
      </p>

      {/* Buttons for resume and contact */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {/* Resume download button */}
        <a
          href="/resume.pdf"
          download
          className="bg-accentBlue text-white dark:text-black px-6 py-2 rounded-full font-semibold 
                     transition duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-glowCyan"
        >
          Download CV
        </a>

        {/* Smooth scroll to contact section */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-60}
          className="border border-accentBlue text-accentBlue px-6 py-2 rounded-full font-semibold 
                     transition duration-300 ease-in-out hover:scale-105 hover:bg-accentBlue 
                     hover:text-white dark:hover:text-black cursor-pointer"
        >
          Contact Info
        </Link>
      </div>

      {/* Scroll down indicator */}
      <Link to="about" smooth={true} duration={500} offset={-60}>
        <div className="absolute bottom-10 animate-bounce cursor-pointer">
          <svg
            className="w-6 h-6 text-accentBlue"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </Link>
    </motion.section>
  );
};

export default Hero;
