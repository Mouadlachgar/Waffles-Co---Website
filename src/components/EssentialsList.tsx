import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrutalistImage from './BrutalistImage';

const EssentialsList = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  
  const items = [
    { id: 1, title: "Espresso Tonic", desc: "The summer essential.", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "The 5PM Waffle", desc: "Caramel drizzle, sea salt.", image: "https://images.unsplash.com/photo-1562608420-13ae7df0987c?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Green Reset", desc: "Cucumber, apple, mint.", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Churro Box", desc: "Shareable. Dip included.", image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="bg-black text-brand-300 py-32 border-b border-brand-300">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
           <span className="block text-xs font-bold uppercase tracking-widest mb-12 border-b border-brand-300 pb-2 w-fit">The Essentials</span>
           <div className="flex flex-col">
              {items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveItem(idx)}
                  onMouseLeave={() => setActiveItem(null)}
                  className="group relative py-8 border-b border-brand-300/20 cursor-pointer transition-all duration-300 hover:pl-8"
                >
                  <h3 className="text-4xl md:text-6xl font-thin uppercase tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2 opacity-50 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              ))}
           </div>
        </div>

        <div className="relative h-[600px] hidden lg:block border border-brand-300/20 overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center p-12 text-center opacity-30">
              <h2 className="text-9xl font-black text-brand-300/20 leading-none uppercase">Waffles<br/>& Co.</h2>
           </div>
           <AnimatePresence mode='wait'>
             {activeItem !== null && (
               <motion.div
                 key={activeItem}
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.4 }}
                 className="absolute inset-0"
               >
                 <BrutalistImage src={items[activeItem].image} alt={items[activeItem].title} className="w-full h-full object-cover grayscale" />
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EssentialsList;