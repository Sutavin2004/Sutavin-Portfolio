import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-glowCyan z-[9999] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
