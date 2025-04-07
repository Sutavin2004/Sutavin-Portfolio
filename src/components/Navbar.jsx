import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    // Sticky navbar with background that adapts to theme
    <nav className="sticky top-0 z-50 bg-lightBg dark:bg-bgDark border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Name/logo title - blue accent */}
        <h1 className="text-xl font-heading font-bold text-accentBlue">
          Sutavin Vinothan
        </h1>

        {/* Desktop nav links - hidden on mobile */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true} // enable scroll animation
              duration={500} // scroll time
              offset={-80} // scroll offset
              spy={true} // highlight current section
              activeClass="text-glowCyan font-bold" // active section style
              className="cursor-pointer text-lightMuted dark:text-textMuted hover:text-accentBlue transition font-medium"
              // text color changes with theme; hover to blue
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme toggle button - only shown on desktop */}
        <div className="hidden md:block ml-6">
          <ThemeToggle />
        </div>

        {/* Hamburger menu icon - shown on mobile only */}
        <button
          className="md:hidden text-lightMuted dark:text-textMuted focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6" // size of hamburger
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {/* Animate icon to X on open */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown for mobile nav links */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-glowCyan font-bold"
              className="cursor-pointer text-lightMuted dark:text-textMuted hover:text-accentBlue font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile version of theme toggle */}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
