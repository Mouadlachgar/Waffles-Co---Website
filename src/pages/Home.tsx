import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import StackingSection from '../components/StackingSection';
import EssentialsList from '../components/EssentialsList';
import BrutalistImage from '../components/BrutalistImage';
import { Asterisk, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { IMAGES } from '../constants';

const VibeMarquee = () => {
    return (
        <section className="bg-black text-brand-300 py-48 md:py-64 overflow-hidden border-b border-brand-300 relative">
             <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-20 pointer-events-none">
                 <motion.div 
                    animate={{ x: [0, -1000] }} 
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="text-[12vh] font-black uppercase leading-none tracking-tighter"
                 >
                     Sip Crunch Repeat Sip Crunch Repeat Sip Crunch Repeat
                 </motion.div>
             </div>
             <div className="container mx-auto px-6 relative z-10 text-center">
                 <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
                     <h2 className="text-6xl md:text-9xl font-thin leading-tight mb-24">
                         WE DON'T DO <span className="font-black italic bg-brand-300 text-black px-6">BORING</span>.
                     </h2>
                 </motion.div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                     {[
                       { title: "Energy", img: IMAGES.WALL_OF_MOMENTS.IMG1 },
                       { title: "Ritual", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" },
                       { title: "Taste", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop" }
                     ].map((item, idx) => (
                       <div key={idx} className={`flex flex-col items-center group ${idx === 1 ? 'md:-mt-24' : ''}`}>
                           <div className="w-full aspect-[4/5] border border-brand-300 mb-8 overflow-hidden">
                               <BrutalistImage src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                           </div>
                           <h3 className="text-xl font-bold uppercase tracking-[0.2em]">{item.title}</h3>
                       </div>
                     ))}
                 </div>
             </div>
        </section>
    )
}

const MakingOfSweet = () => (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-brand-300 border-b border-black">
        <div className="relative h-[60vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-black overflow-hidden group">
             <BrutalistImage src={IMAGES.MAKING_OF.BATTER} alt="Making of" className="w-full h-full object-cover grayscale transition-transform duration-[2s] group-hover:scale-105" />
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-brand-300">
            <ScrollReveal>
                <h2 className="text-7xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-tighter mb-16 text-black">
                    The<br/>Making<br/>Of<br/>Sweet.
                </h2>
                <p className="text-2xl lg:text-3xl font-light italic mb-12 max-w-md leading-tight text-black">
                    Crafted fresh, every morning in Tangier — bubble waffles, churros, crêpes, and everything in between.
                </p>
                <div className="w-24 h-1 bg-black mb-12"></div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-black opacity-80 leading-loose max-w-sm">
                    No shortcuts. No compromises. Just good ingredients, heat, balance, and a touch of chaos.
                </p>
            </ScrollReveal>
        </div>
    </section>
);

const LifeInColor = () => (
    <section className="py-48 bg-black text-brand-300 border-b border-brand-300 overflow-hidden">
         <div className="container mx-auto px-6 mb-24 text-center">
            <h2 className="text-[12vw] leading-none font-black uppercase tracking-tighter text-brand-300">Life In Color</h2>
            <div className="flex justify-center mt-12">
                 <p className="font-bold uppercase tracking-[0.3em] text-xs border border-brand-300 px-6 py-3">Cold-Pressed • Made Daily</p>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh] w-full border-t border-brand-300">
            {[
                { name: 'Glow', desc: 'Citrus × Gold', img: IMAGES.LIFE_IN_COLOR.ORANGE },
                { name: 'Reset', desc: 'Fresh × Clean', img: IMAGES.LIFE_IN_COLOR.GREEN },
                { name: 'Boost', desc: 'Deep × Bright', img: IMAGES.LIFE_IN_COLOR.RED }
            ].map((item, idx) => (
                <div key={idx} className="relative border-b md:border-b-0 md:border-r border-brand-300 group overflow-hidden">
                    <BrutalistImage src={item.img} alt={item.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 p-12 flex flex-col justify-end pointer-events-none">
                        <h3 className="text-7xl font-thin uppercase tracking-tight text-brand-300 mb-2">{item.name}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-brand-300">{item.desc}</p>
                    </div>
                </div>
            ))}
         </div>
    </section>
);

const WallOfMoments = () => (
    <section className="bg-brand-300 border-b border-black py-48">
         <div className="container mx-auto px-6 mb-32 text-center flex flex-col items-center">
             <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12 text-black">The Wall<br/>Of Moments.</h2>
             <p className="text-2xl font-light text-black mb-16">A collection of bites, sips, smiles, and Tangier energy.</p>
             <Button variant="primary" size="lg">Follow @wafflesandco</Button>
         </div>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
             {[IMAGES.WALL_OF_MOMENTS.IMG1, IMAGES.WALL_OF_MOMENTS.IMG2, IMAGES.WALL_OF_MOMENTS.IMG3, IMAGES.WALL_OF_MOMENTS.IMG4].map((src, idx) => (
                 <div key={idx} className={`aspect-[3/4] border-2 border-black p-3 bg-white hover:-translate-y-2 transition-transform duration-500 ${idx % 2 !== 0 ? 'mt-12' : ''}`}>
                     <BrutalistImage src={src} alt="Moment" className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                 </div>
             ))}
         </div>
    </section>
);

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <StackingSection>
         <section className="h-[90vh] bg-brand-300 border-b border-black relative flex items-center justify-center overflow-hidden">
            <BrutalistImage src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" />
            <div className="relative z-10 text-center px-6">
               <span className="bg-black text-brand-300 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] inline-block mb-12">Est. 2024 • Tangier</span>
               <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-black mb-12">
                  Waffles<br/><span className="font-thin italic">Culture</span>
               </h1>
               <div className="flex justify-center gap-4">
                  <Link to="/menu"><Button size="lg" variant="secondary">Order Now</Button></Link>
                  <Link to="/about"><Button size="lg" variant="outline">Our Story</Button></Link>
               </div>
            </div>
         </section>
      </StackingSection>

      {/* Editorial Intro */}
      <StackingSection>
          <section className="bg-brand-300 py-48 border-b border-black text-center relative">
             <div className="absolute top-12 left-12"><Asterisk size={64} className="text-black animate-spin-slow" /></div>
             <div className="container mx-auto px-6 max-w-5xl">
                <ScrollReveal>
                  <h2 className="text-4xl md:text-6xl font-light leading-tight mb-24 text-black">
                    "We built a space where <span className="font-black italic border-b-4 border-black inline-block">indulgence</span> is an art form and <span className="font-black italic border-b-4 border-black inline-block">vitality</span> is a daily ritual."
                  </h2>
                </ScrollReveal>
             </div>
          </section>
      </StackingSection>

      <StackingSection><VibeMarquee /></StackingSection>
      <StackingSection><MakingOfSweet /></StackingSection>
      <StackingSection><EssentialsList /></StackingSection>
      <StackingSection><LifeInColor /></StackingSection>
      <StackingSection><WallOfMoments /></StackingSection>

      {/* Newsletter */}
      <section className="bg-brand-300 py-48 border-b border-black text-center">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12 text-black leading-none">Join The<br/>Club</h2>
            <p className="text-xl font-light mb-16 text-black">Get our monthly "Studio Notes" — secret menu drops & playlists.</p>
            <div className="flex border-b-4 border-black pb-4">
               <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent w-full text-2xl font-light uppercase placeholder-black/30 outline-none text-black" />
               <button className="text-2xl font-bold uppercase text-black">Subscribe</button>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Home;