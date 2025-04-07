import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Legal-RAG Assistant",
    description: "AI-powered legal assistant using Retrieval-Augmented Generation, OCR, and semantic search via FAISS and OpenAI.",
    link: "https://github.com/Sutavin2004/Legal-RAG-Assistant",
    tech: ["Python", "Flask", "OpenAI", "FAISS", "OCR"],
  },
  {
    title: "Stock Sentiment Analyzer",
    description: "Real-time financial news sentiment analysis using NLP, Hugging Face Transformers, and Flask.",
    link: "https://github.com/Sutavin2004/Stock-Market-Analyzer",
    tech: ["NLP", "Flask", "NewsAPI", "HuggingFace", "yfinance"],
  },
  {
    title: "Multi-Client Chatroom",
    description: "A multithreaded TCP & UDP chatroom built in Python with client-server architecture and configurable protocol selection.",
    link: "https://github.com/Sutavin2004/Multi-Client-Chat-Application",
    tech: ["Python", "Sockets", "TCP/UDP", "Threads"],
  },
];

const Projects = () => {
  return (
    // Projects section with dual-theme background
    <motion.section
      name="projects"
      id="projects"
      className="py-20 px-6 bg-lightBg dark:bg-bgDark text-lightText dark:text-textPrimary transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl font-bold mb-12 text-center font-heading text-lightText dark:text-white border-b-2 border-accentBlue inline-block">
          Projects
        </h2>

        {/* Project cards grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#181818] border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.03 }}
            >
              {/* Project title */}
              <h3 className="text-2xl font-semibold text-accentBlue mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-lightMuted dark:text-textMuted text-sm mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-accentViolet text-black px-2 py-1 rounded-full font-medium"
                    // Shared accentViolet background for tech labels
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accentBlue hover:text-glowCyan text-sm underline font-semibold transition"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
