import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    // Section with dual-theme background and animated reveal
    <motion.section
      name="experience"
      id="experience"
      className="py-20 px-6 bg-lightBg dark:bg-bgDark text-lightText dark:text-textPrimary transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold mb-12 text-center font-heading text-lightText dark:text-white border-b-2 border-accentBlue inline-block">
          Experience
        </h2>

        <div className="space-y-10">
          {/* RBC Internship */}
          <motion.div
            className="bg-white dark:bg-[#181818] p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.015]"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-accentBlue">Software Developer Intern @ RBC</h3>
            <p className="text-sm text-lightMuted dark:text-textMuted">May 2024 – Aug 2024</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-lightMuted dark:text-textMuted">
              <li>Developed and deployed a monitoring script using Apache Airflow to observe endpoint health and performance.</li>
              <li>Created alerting mechanisms using email for failure detection across production systems.</li>
              <li>Built data pipelines to extract and embed large text datasets into a vector DB using sentence transformers.</li>
              <li>Deployed internal UI in a CI/CD environment and conducted Snowflake cost optimization research.</li>
            </ul>
          </motion.div>

          {/* iNet Internship */}
          <motion.div
            className="bg-white dark:bg-[#181818] p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.015]"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-accentBlue">Software Engineer Intern @ iNet Solutions</h3>
            <p className="text-sm text-lightMuted dark:text-textMuted">May 2023 – Sept 2023</p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-lightMuted dark:text-textMuted">
              <li>Contributed to internal dashboards and Python utilities to streamline backend performance checks.</li>
              <li>Worked within an Agile team to test, debug, and release client-requested features.</li>
              <li>Improved logging and error tracking systems for automated builds and database scripts.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
