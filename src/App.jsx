import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200); // 1.2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans scroll-smooth 
                bg-lightBg text-lightText dark:bg-bgDark dark:text-textPrimary 
                transition-colors duration-300">
      {isLoading && <Loader />}

      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <footer className="text-center p-4 text-sm text-lightMuted dark:text-textMuted border-t border-gray-300 dark:border-gray-700 bg-lightBg dark:bg-bgDark transition-colors duration-300">
        Made using React & Tailwind by Sutavin Vinothan<br />
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}

export default App;
