import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isDark, setIsDark] = useState(false);

  // Check if dark mode is active
  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains('dark');
    setIsDark(isDarkTheme);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center 
                  ${isDark ? 'bg-bgDark' : 'bg-lightBg'} 
                  transition-colors duration-300`}
    >
      <div className="relative w-24 h-24">
        {/* Spinner ring with theme-aware color */}
        <div
          className={`absolute inset-0 rounded-full border-4 animate-spin 
                      ${isDark ? 'border-glowCyan border-t-transparent' : 'border-accentBlue border-t-transparent'}`}
        ></div>

        {/* Static initials in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`font-heading font-bold text-xl 
                        ${isDark ? 'text-glowCyan' : 'text-accentBlue'}`}
          >
            SV
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
