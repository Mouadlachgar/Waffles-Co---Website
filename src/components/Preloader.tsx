import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check session
    const hasVisited = sessionStorage.getItem('hasVisitedWaffles');
    if (hasVisited) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Counter Animation
    const duration = 2000; // 2 seconds total
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Completion sequence
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasVisitedWaffles', 'true');
      setTimeout(onComplete, 800);
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          <div className="relative">
            {/* Massive Counter */}
            <motion.h1 
              className="text-[25vw] font-black text-brand-300 leading-none tracking-tighter tabular-nums"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {Math.round(count)}
            </motion.h1>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-300/20"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-brand-300/20"></div>
          </div>

          <div className="absolute bottom-12 w-full px-12 flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
                Tangier, Morocco
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-300 opacity-50">
                Est. 2024
              </span>
            </div>
            <div className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-300 animate-pulse">
              System Loading...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;