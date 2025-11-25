import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const categories: (Category | 'All')[] = ['All', 'Sweets', 'Savory', 'Juices', 'Drinks'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-brand-300 pt-24 pb-12 border-b border-black transition-colors duration-500">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-thin text-black leading-none uppercase tracking-tighter font-sans">
              Menu
            </h1>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-brand-300 min-h-screen transition-colors duration-500">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Filter - Minimal List */}
            <div className="lg:w-1/5">
              <div className="sticky top-32">
                <ScrollReveal delay={100} direction="right">
                  <h3 className="font-sans text-xs uppercase tracking-widest mb-6 opacity-50 font-bold">Categories</h3>
                  <div className="flex flex-col items-start space-y-4">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-2xl md:text-3xl font-light uppercase tracking-tight transition-all duration-300 hover:pl-4 font-sans ${
                          activeCategory === category
                            ? 'text-black font-medium pl-4 border-l-2 border-black'
                            : 'text-black/40 hover:text-black'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Grid */}
            <div className="lg:w-4/5">
              
              {/* Highlight Banner - Sweets (Only show on All or Sweets) */}
              {(activeCategory === 'All' || activeCategory === 'Sweets') && (
                 <ScrollReveal className="mb-12">
                    <div className="bg-black text-brand-300 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-black shadow-[8px_8px_0px_0px_var(--color-pink)] transition-colors duration-500">
                       <div>
                          <span className="bg-brand-300 text-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block font-sans">Best Seller</span>
                          <h2 className="text-4xl md:text-5xl font-black uppercase mb-2 font-sans">The Waffle Tower</h2>
                          <p className="font-light opacity-80 max-w-md font-sans">Build your own masterpiece. Bubble or Belgian base, infinite toppings.</p>
                       </div>
                       <div className="mt-6 md:mt-0">
                          <span className="text-6xl font-thin italic font-sans">1.</span>
                       </div>
                    </div>
                 </ScrollReveal>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {filteredItems.filter(i => activeCategory === 'All' || i.category === activeCategory).map((item, index) => (
                  <ScrollReveal key={item.id} delay={index * 50}>
                    <ProductCard item={item} variant="light" />
                  </ScrollReveal>
                ))}
              </div>
              
              {/* Highlight Banner - Churros (Inserted mid-way if All, or top if Sweets) */}
              {(activeCategory === 'All' || activeCategory === 'Sweets') && (
                 <ScrollReveal className="my-24">
                    <div className="relative h-[300px] border border-black overflow-hidden group">
                       <img src="https://images.unsplash.com/photo-1624303923368-e7be7c679a76?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Churros" />
                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <h2 className="text-6xl md:text-8xl text-brand-300 font-black uppercase text-center leading-none mix-blend-overlay font-sans">
                             Churro<br/>Culture
                          </h2>
                       </div>
                       <div className="absolute bottom-6 right-6 bg-brand-300 text-black px-4 py-2 font-bold uppercase text-xs border border-black font-sans">
                          In Store Only
                       </div>
                    </div>
                 </ScrollReveal>
              )}
              
               {/* Highlight Banner - Savory */}
              {(activeCategory === 'All' || activeCategory === 'Savory') && (
                 <ScrollReveal className="my-12">
                     <div className="bg-white border-2 border-black p-8 text-center uppercase">
                        <h3 className="text-3xl font-thin tracking-widest font-sans text-black">Lunch Break?</h3>
                        <p className="font-bold text-xl mt-2 font-sans text-black">Try the Flatbread Chicken.</p>
                     </div>
                 </ScrollReveal>
              )}

              {filteredItems.length === 0 && (
                <div className="py-32 flex items-center justify-center opacity-50">
                  <p className="text-black text-xl font-light uppercase font-sans">No items found.</p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;