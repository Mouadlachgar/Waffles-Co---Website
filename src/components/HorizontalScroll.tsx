import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black text-brand-300 border-b border-brand-300/30 py-24 relative group transition-colors duration-500">
      <div className="container mx-auto px-6 mb-8 flex justify-between items-end">
          <h2 className="text-xl font-bold uppercase tracking-widest font-sans">Inside The Café</h2>
          <div className="flex gap-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-brand-300 flex items-center justify-center hover:bg-brand-300 hover:text-black transition-all"
              >
                  <ArrowLeft size={20} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-brand-300 flex items-center justify-center hover:bg-brand-300 hover:text-black transition-all"
              >
                  <ArrowRight size={20} />
              </button>
          </div>
      </div>

      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-8 px-6 lg:px-24 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </section>
  );
};

export default HorizontalScroll;