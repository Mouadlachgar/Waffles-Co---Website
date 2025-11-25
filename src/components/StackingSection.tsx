import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackingSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "10px"]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, filter: `blur(${blur})` }}
      className={`sticky top-0 w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default StackingSection;