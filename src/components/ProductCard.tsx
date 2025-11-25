import React, { useState } from 'react';
import { Plus, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import BrutalistImage from './BrutalistImage';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductCardProps {
  item: MenuItem;
  variant?: 'light' | 'dark';
}

const ProductCard: React.FC<ProductCardProps> = ({ item, variant = 'light' }) => {
  const isDark = variant === 'dark';
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`group flex flex-col h-full transition-all duration-300 relative ${
      isDark 
        ? 'bg-black text-brand-300' 
        : 'bg-brand-300 text-black border border-black'
    }`}>
      {/* Image Container with Zoom Effect */}
      <div className="relative aspect-[4/5] border-b border-black/10 overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110">
          <BrutalistImage 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full"
          />
        </div>
        {/* Overlay on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${isDark ? 'bg-brand-300' : 'bg-black'}`}></div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           <h3 className={`text-xl font-medium uppercase tracking-tight leading-none ${isDark ? 'text-brand-300' : 'text-black'}`}>
              {item.name}
            </h3>
        </div>
          
        <p className={`text-sm mb-6 font-light leading-relaxed opacity-80 line-clamp-2 ${isDark ? 'text-brand-300' : 'text-black'}`}>
          {item.description}
        </p>
        
        <div className={`flex items-center justify-between mt-auto pt-4 border-t ${isDark ? 'border-brand-300/20' : 'border-black/10'}`}>
          <span className="font-light text-lg">
            {item.price} MAD
          </span>
          
          <button 
            onClick={handleAddToCart}
            className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 relative overflow-hidden ${
              isDark 
                ? 'border-brand-300 text-brand-300 hover:bg-brand-300 hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-brand-300'
            }`}
            aria-label={isAdded ? "Added to cart" : "Add to cart"}
          >
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.div
                  key="bag"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ShoppingBag size={14} strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus size={16} strokeWidth={1} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;