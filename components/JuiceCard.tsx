import React from 'react';
import { JuiceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';
import BrutalistImage from './BrutalistImage';
import { motion } from 'framer-motion';

interface JuiceCardProps {
  juice: JuiceItem;
}

const JuiceCard: React.FC<JuiceCardProps> = ({ juice }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative flex flex-col border border-brand-300 bg-black text-brand-300 h-full transition-colors duration-500"
    >
      {/* Header Info */}
      <div className="p-4 flex justify-between items-start border-b border-brand-300/30">
         <span className="font-sans text-xs uppercase opacity-70">Vol. {juice.volume}</span>
         <span className="font-sans text-xs uppercase opacity-70">Raw Pressed</span>
      </div>

      {/* Image Section */}
      <div className="relative h-64 w-full border-b border-brand-300/20">
         <BrutalistImage 
          src={juice.image} 
          alt={juice.name}
          className="w-full h-full opacity-80 group-hover:opacity-100"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-4xl font-thin uppercase leading-none mb-6 tracking-tighter font-sans">{juice.name}</h3>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
          {juice.ingredients.map((ing, index) => (
            <span key={index} className="text-xs uppercase tracking-widest opacity-60 border-b border-brand-300/30 pb-1 font-sans">
              {ing}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-brand-300/30 w-full flex items-center justify-between group-hover:px-2 transition-all duration-300">
           <span className="font-light text-xl font-sans">{juice.price} MAD</span>
           <ArrowUpRight size={20} strokeWidth={1} />
        </div>
      </div>
    </motion.div>
  );
};

export default JuiceCard;