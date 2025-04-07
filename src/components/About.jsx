import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    // Animated section entrance
    <motion.section
      name="about"
      id="about"
      className="py-20 px-6 bg-lightBg dark:bg-bgDark text-lightText dark:text-textPrimary transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section title */}
        <h2 className="text-4xl font-bold mb-8 font-heading text-lightText dark:text-white border-b-2 border-accentBlue inline-block">
          About Me
        </h2>

        {/* Intro paragraph */}
        <p className="text-lg text-lightMuted dark:text-textMuted mb-12">
          I’m a Computer Science student at Western University with hands-on experience in AI-powered systems, backend development, data pipelines, and automation.
          I love turning real-world problems into elegant solutions using a combination of creativity, code, and clean architecture.
        </p>

        {/* Grid: Education and Skills side by side */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Education card */}
          <motion.div
            className="bg-white dark:bg-[#181818] rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition hover:scale-[1.015]"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-accentBlue mb-3">🎓 Education</h3>
            <p className="text-md text-lightText dark:text-textPrimary">
              <strong>Western University</strong><br />
              BSc, Computer Science (Honours)<br />
              <span className="text-sm text-lightMuted dark:text-textMuted">2022 – 2026</span>
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-lightMuted dark:text-textMuted space-y-1">
              <li>Data Structures & Algorithms</li>
              <li>Artificial Intelligence, Software Project Management</li>
              <li>Computer Architecture, Database Systems</li>
              <li>Math Foundations: Linear Algebra, Stats, Discrete Math</li>
            </ul>
          </motion.div>

          {/* Skills card */}
          <motion.div
            className="bg-white dark:bg-[#181818] rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition hover:scale-[1.015]"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-accentBlue mb-3">💻 Technical Snapshot</h3>
            <ul className="text-sm text-lightMuted dark:text-textMuted space-y-2">
              <li><strong className="text-lightText dark:text-textPrimary">Languages:</strong> Python, Java, C, SQL</li>
              <li><strong className="text-lightText dark:text-textPrimary">Frameworks:</strong> Flask, PyTorch, TensorFlow, NumPy, Pandas</li>
              <li><strong className="text-lightText dark:text-textPrimary">Cloud/DevOps:</strong> Docker, Snowflake, CI/CD, Airflow</li>
              <li><strong className="text-lightText dark:text-textPrimary">Concepts:</strong> NLP, Computer Vision, Sentence Embeddings</li>
              <li><strong className="text-lightText dark:text-textPrimary">Tools:</strong> Git, GitHub, MVC, Agile/Scrum</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
