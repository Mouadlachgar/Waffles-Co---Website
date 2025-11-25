
import React from 'react';
import { motion } from 'framer-motion';

interface FloatingStickerProps {
  src: string;
  className?: string;
  delay?: number;
  rotation?: number;
  scale?: number;
}

const FloatingSticker: React.FC<FloatingStickerProps> = ({ 
  src, 
  className = "", 
  delay = 0,
  rotation = 0,
  scale = 1
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ 
        y: [0, -20, 0], 
        opacity: 1,
        rotate: [rotation - 5, rotation + 5, rotation - 5] 
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        opacity: { duration: 0.5 }
      }}
      className={`absolute z-30 pointer-events-none drop-shadow-2xl ${className}`}
      style={{ rotate: rotation, scale: scale }}
    >
      <div className="bg-white p-2 rounded-2xl shadow-xl transform rotate-3">
        <img src={src} alt="Sticker" className="w-full h-full object-cover rounded-xl" />
      </div>
    </motion.div>
  );
};

export default FloatingSticker;
