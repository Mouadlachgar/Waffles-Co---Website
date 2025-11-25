import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BrutalistImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

const BrutalistImage: React.FC<BrutalistImageProps> = ({ src, alt, className = "", fallbackText }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Generate a random pattern type based on alt text length (deterministic for same alt)
  const patternType = alt.length % 3;

  if (error) {
    return (
      <div className={`relative overflow-hidden bg-brand-300 flex items-center justify-center border border-black/10 ${className}`}>
        {/* Fallback Patterns */}
        {patternType === 0 && (
           <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px',
              opacity: 0.1
           }}></div>
        )}
        {patternType === 1 && (
           <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
              backgroundSize: '16px 16px',
              opacity: 0.15
           }}></div>
        )}
        {patternType === 2 && (
           <div className="absolute inset-0 flex flex-col justify-between p-2">
             {Array.from({length: 10}).map((_, i) => (
                <div key={i} className="h-px bg-black/20 w-full"></div>
             ))}
           </div>
        )}
        
        <div className="z-10 bg-black text-brand-300 px-4 py-2 text-xs font-bold uppercase tracking-widest rotate-3 border border-brand-300 shadow-[4px_4px_0px_0px_rgba(247,193,217,1)]">
           {fallbackText || alt}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-brand-200 animate-pulse z-10"></div>
      )}
      <motion.img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        initial={{ scale: 1.1, filter: 'grayscale(100%)' }}
        whileInView={{ scale: 1, filter: 'grayscale(0%)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default BrutalistImage;