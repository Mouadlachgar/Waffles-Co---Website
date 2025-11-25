import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-brand-300 pt-24 pb-24 border-b border-black">
        <div className="container mx-auto px-6">
            <ScrollReveal>
              <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-thin text-black uppercase tracking-tighter leading-[0.8]">
                Born In<br/><span className="font-black">Tangier</span>
              </h1>
            </ScrollReveal>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
         {/* Left Column - Text */}
         <div className="bg-brand-300 p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-light uppercase mb-12 leading-tight">
                A collision of <span className="font-black bg-black text-brand-300 px-2">indulgence</span><br/>and <span className="font-black border-b-4 border-black">vitality</span>.
              </h2>
              <div className="space-y-12 text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                <p>
                  <span className="font-black">Waffles&Co</span> started as a rebellion against the boring coffee chain. We wanted the best waffles in the city, but we also wanted juice that actually did something for your body.
                </p>
                <p>
                  So we built a <span className="font-bold">modern coffee shop</span> that serves food. No compromise. No soft edges.
                </p>
                <p>
                  Our kitchen is open. Our ingredients are transparent. Our vibe is <span className="font-black uppercase tracking-wider">loud</span>.
                </p>
                <div className="pt-8">
                   <Link to="/contact">
                     <Button variant="secondary">Visit The Shop</Button>
                   </Link>
                </div>
              </div>
            </ScrollReveal>
         </div>

         {/* Right Column - Images */}
         <div className="bg-black text-brand-300 flex flex-col">
            <ScrollReveal direction="left" className="h-[50vh] relative border-b border-brand-300/20 group overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80" 
                 className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                 alt="Interior"
               />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="font-black text-6xl uppercase text-brand-300">Space</span>
               </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={200} className="h-[50vh] relative p-12 flex items-center justify-center bg-black">
               <div className="text-center relative z-10 hover:scale-110 transition-transform duration-500 cursor-default">
                  <span className="block text-6xl md:text-8xl font-black mb-4">2024</span>
                  <span className="font-sans text-xs uppercase tracking-widest font-bold text-brand-300 border border-brand-300 px-4 py-2">Established</span>
               </div>
               {/* Decorative background pattern */}
               <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#F7C1D9 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
            </ScrollReveal>
         </div>
      </div>
    </Layout>
  );
};

export default About;