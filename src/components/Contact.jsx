import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    // Contact section with adaptive theme
    <motion.section
      name="contact"
      id="contact"
      className="py-20 px-6 bg-lightBg dark:bg-bgDark text-lightText dark:text-textPrimary transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }} // fade in from below
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-4xl font-bold mb-6 font-heading text-lightText dark:text-white border-b-2 border-accentBlue inline-block">
          Contact
        </h2>

        {/* Contact subtext */}
        <p className="text-lightMuted dark:text-textMuted mb-8">
          Feel free to reach out — I’m always open to new opportunities and collaborations!
        </p>

        {/* Social icons row */}
        <div className="flex justify-center gap-10 text-3xl text-accentBlue">
          {/* GitHub */}
          <motion.a
            href="https://github.com/Sutavin2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-glowCyan transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sutavin-vinothan-9334a7263"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-glowCyan transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:sutavin2004@gmail.com"
            className="hover:text-glowCyan transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
