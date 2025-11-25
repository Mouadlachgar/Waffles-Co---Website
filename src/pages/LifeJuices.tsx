import React from 'react';
import Layout from '../components/Layout';
import JuiceCard from '../components/JuiceCard';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { LIFE_JUICES } from '../constants';
import { Zap, Droplet } from 'lucide-react';

const LifeJuices: React.FC = () => {
  return (
    <Layout>
      {/* Intro Block */}
      <div className="bg-black text-brand-300 pt-32 pb-24 border-b border-brand-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <ScrollReveal>
                <div className="inline-block border border-brand-300 px-3 py-1 text-[10px] font-sans mb-8 uppercase tracking-widest font-bold">
                  Unit 01 • Cold Pressed
                </div>
                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-thin leading-[0.8] uppercase tracking-tighter mb-8">
                  Life<br/><span className="font-black">Force</span>
                </h1>
                <p className="text-xl font-light text-brand-300/80 leading-relaxed max-w-lg">
                  Raw nutrient density. Extracted daily using hydraulic pressure. No heat, no pasteurization, just pure plant blood.
                </p>
              </ScrollReveal>
            </div>
            
            {/* Specs Table */}
            <div className="h-full flex flex-col justify-end">
                 <ScrollReveal delay={200} direction="left">
                   <div className="border-t border-brand-300 w-full">
                     <div className="grid grid-cols-2 py-4 border-b border-brand-300/30 group hover:bg-brand-300/10 transition-colors">
                        <span className="font-sans text-xs uppercase opacity-60 font-bold flex items-center gap-2"><Zap size={14}/> Method</span>
                        <span className="font-bold uppercase">Hydraulic Press</span>
                     </div>
                     <div className="grid grid-cols-2 py-4 border-b border-brand-300/30 group hover:bg-brand-300/10 transition-colors">
                        <span className="font-sans text-xs uppercase opacity-60 font-bold flex items-center gap-2"><Droplet size={14}/> Temp</span>
                        <span className="font-bold uppercase">Chilled (2-4°C)</span>
                     </div>
                     <div className="grid grid-cols-2 py-4 border-b border-brand-300/30 group hover:bg-brand-300/10 transition-colors">
                        <span className="font-sans text-xs uppercase opacity-60 font-bold">Shelf Life</span>
                        <span className="font-bold uppercase">48 Hours</span>
                     </div>
                   </div>
                 </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-brand-300 py-24 min-h-screen">
        <div className="container mx-auto px-6">
           <ScrollReveal>
             <div className="mb-24 flex justify-between items-end border-b border-black pb-8">
               <h2 className="text-6xl font-thin uppercase tracking-tighter text-black">The <span className="font-black">Lineup</span></h2>
               <span className="font-sans text-xs font-bold uppercase">Vol. 1</span>
             </div>
           </ScrollReveal>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LIFE_JUICES.map((juice, idx) => (
              <ScrollReveal key={juice.id} delay={idx * 100} className="h-[600px]">
                <JuiceCard juice={juice} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-32 border-2 border-black p-12 lg:p-24 flex flex-col items-center text-center bg-white shadow-[10px_10px_0px_0px_#000] hover:shadow-[15px_15px_0px_0px_#000] hover:-translate-y-1 transition-all">
               <h3 className="text-4xl lg:text-5xl font-black uppercase mb-6 text-black">Cleanse Packages</h3>
               <p className="text-xl font-light mb-12 max-w-xl text-black/80">
                 Reset your system with our 1-day, 3-day, and 5-day raw juice cleanse programs.
               </p>
               <Button variant="primary" size="lg">Inquire Now</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default LifeJuices;