import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BrutalistImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  priority?: boolean; // New prop to control loading behavior
}

const BrutalistImage: React.FC<BrutalistImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackText,
  priority = false
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Use a reliable backup texture image if the main image fails
  const fallbackImage = "https://images.unsplash.com/photo-1550951298-5c7b95a66b90?q=80&w=800&auto=format&fit=crop";

  if (error) {
    return (
       <div className={`relative overflow-hidden bg-bg flex items-center justify-center border border-contrast/10 ${className}`}>
        <img 
          src={fallbackImage} 
          alt="Texture" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" 
        />
        <div className="z-10 bg-contrast text-bg px-4 py-2 text-xs font-bold uppercase tracking-widest rotate-3 border border-bg shadow-lg">
           {fallbackText || alt}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-contrast/5 animate-pulse z-10"></div>
      )}
      <motion.img 
        src={src} 
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        initial={priority ? { opacity: 1 } : { scale: 1.1, filter: 'grayscale(100%)' }}
        whileInView={priority ? undefined : { scale: 1, filter: 'grayscale(0%)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default BrutalistImage;