import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { Layers, ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import BrutalistImage from '../components/BrutalistImage';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 300]);

  const slides = [
    {
      id: 1,
      title: "Tangier",
      highlight: "Diaries",
      description: "A modern café dedicated to the art of waffle architecture.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop",
      cta: "Read Issue 01",
      link: "/about",
    },
    {
      id: 2,
      title: "Morning",
      highlight: "Ritual",
      description: "Cold-pressed vitality meets espresso culture.",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1600&auto=format&fit=crop",
      cta: "View Menu",
      link: "/menu",
    },
    {
      id: 3,
      title: "Sweet",
      highlight: "Escape",
      description: "Indulgence engineered for the modern palate.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
      cta: "Order Now",
      link: "/menu",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-bg border-b border-contrast">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image Layer with Parallax */}
          <div className="absolute inset-0 overflow-hidden">
             <motion.div style={{ y: parallaxY }} className="w-full h-[120%] -mt-[10%]">
                <BrutalistImage 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-full object-cover grayscale opacity-20"
                />
             </motion.div>
             <div className="absolute inset-0 bg-bg/10"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
             <motion.div 
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="mb-8"
             >
                <span className="bg-contrast text-bg px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] inline-block border border-contrast">
                   Est. 2024 • Tangier
                </span>
             </motion.div>

             <motion.h1 
               className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-contrast mb-6 mix-blend-multiply"
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
             >
               {slides[currentSlide].title}<br/>
               <span className="font-thin italic">{slides[currentSlide].highlight}</span>
             </motion.h1>

             <motion.p 
               className="text-xl md:text-2xl font-light max-w-lg leading-tight mb-12 text-contrast"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
             >
                {slides[currentSlide].description}
             </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7 }}
             >
                <Link to={slides[currentSlide].link}>
                   <Button size="lg" variant="outline">{slides[currentSlide].cta}</Button>
                </Link>
             </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation - Minimal Arrows */}
      <div className="absolute bottom-12 w-full px-6 md:px-12 flex justify-between z-20">
         <button onClick={prevSlide} className="group flex items-center gap-2 text-contrast hover:opacity-60 transition-opacity">
            <ArrowLeft size={24} /> <span className="hidden md:inline font-bold uppercase text-xs tracking-widest">Prev</span>
         </button>
         
         <div className="flex gap-2">
           {slides.map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-contrast scale-125' : 'bg-contrast/20'}`}></div>
           ))}
         </div>

         <button onClick={nextSlide} className="group flex items-center gap-2 text-contrast hover:opacity-60 transition-opacity">
            <span className="hidden md:inline font-bold uppercase text-xs tracking-widest">Next</span> <ArrowRight size={24} />
         </button>
      </div>
    </section>
  );
};

const EssentialsList = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  
  const items = [
    { id: 1, title: "Espresso Tonic", desc: "The summer essential.", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "The 5PM Waffle", desc: "Caramel drizzle, sea salt.", image: "https://images.unsplash.com/photo-1562608420-13ae7df0987c?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Green Reset", desc: "Cucumber, apple, mint.", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Churro Box", desc: "Shareable. Dip included.", image: "https://images.unsplash.com/photo-1624303923368-e7be7c679a76?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section className="bg-contrast text-bg py-32 border-b border-bg/20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
           <span className="block text-xs font-bold uppercase tracking-widest mb-12 border-b border-bg/20 pb-2 w-fit">The Essentials</span>
           <div className="flex flex-col">
              {items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveItem(idx)}
                  onMouseLeave={() => setActiveItem(null)}
                  className="group relative py-8 border-b border-bg/10 cursor-pointer transition-all duration-300 hover:pl-8"
                >
                  <h3 className="text-4xl md:text-6xl font-thin uppercase tracking-tight group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest mt-2 opacity-50 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              ))}
           </div>
        </div>

        <div className="relative h-[600px] hidden lg:block border border-bg/10 overflow-hidden">
           {/* Default Image */}
           <div className="absolute inset-0 flex items-center justify-center p-12 text-center opacity-30">
              <h2 className="text-9xl font-black text-bg/20 leading-none uppercase">Waffles<br/>& Co.</h2>
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

const Home: React.FC = () => {
  const [activeWaffle, setActiveWaffle] = useState<number | null>(0); 

  const waffles = [
      { 
          name: "Bubble", 
          title: "The Icon",
          specs: ["Egg-based Batter", "Airy Pockets", "Soft Core"], 
          image: "https://images.unsplash.com/photo-1562608420-13ae7df0987c?q=80&w=800&auto=format&fit=crop" 
      },
      { 
          name: "Belgian", 
          title: "The Classic",
          specs: ["Yeast-leavened", "Deep Grid", "Crispy Exterior"], 
          image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800&auto=format&fit=crop" 
      },
      { 
          name: "Crêpe", 
          title: "The Fold",
          specs: ["Paper Thin", "French Style", "Folded Layers"], 
          image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=800&auto=format&fit=crop" 
      }
  ];

  return (
    <Layout>
      <HeroSlider />

      {/* EDITORIAL INTRO */}
      <section className="bg-bg py-32 border-b border-contrast text-center">
         <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8 text-contrast">
                "We built a space where <span className="font-black italic bg-contrast text-bg px-2">indulgence</span> is an art form and <span className="font-black italic border-b-4 border-contrast">vitality</span> is a daily ritual."
              </h2>
              <p className="text-sm font-bold uppercase tracking-widest text-contrast/60">
                 — The Café, Tangier
              </p>
            </ScrollReveal>
         </div>
      </section>

      {/* "THE EDIT" - MAGAZINE GRID */}
      <section className="bg-bg border-b border-contrast">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[800px]">
           {/* Item 1 - Large Vertical */}
           <div className="md:col-span-1 lg:col-span-1 border-b md:border-b-0 md:border-r border-contrast relative group overflow-hidden">
              <Link to="/about" className="block h-full w-full">
                <BrutalistImage 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop" 
                  alt="Process" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-contrast/20 group-hover:bg-transparent transition-all"></div>
                <div className="absolute top-8 left-8">
                   <span className="bg-contrast text-bg px-3 py-1 text-xs font-bold uppercase tracking-widest">The Process</span>
                </div>
                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-5xl font-black text-white uppercase leading-none mb-2 mix-blend-overlay">Behind<br/>The Scenes</h3>
                   <div className="h-px w-0 bg-white group-hover:w-full transition-all duration-700"></div>
                </div>
              </Link>
           </div>

           {/* Item 2 - Text Block */}
           <div className="md:col-span-1 lg:col-span-1 border-b md:border-b-0 lg:border-r border-contrast p-12 flex flex-col justify-between bg-contrast text-bg">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-bg pb-1 mb-8 inline-block">Current Mood</span>
                <h3 className="text-6xl font-thin uppercase leading-none mb-8 text-accent">Raw<br/>Energy</h3>
                <p className="font-light text-lg opacity-80 leading-relaxed">
                   Our LIFE juices aren't just drinks. They are 1kg of produce, hydraulic-pressed into a bottle. No heat. No hacks.
                </p>
              </div>
              <div className="mt-12">
                 <Link to="/life-juices">
                    <Button variant="inverse" fullWidth>Shop Juice</Button>
                 </Link>
              </div>
           </div>

           {/* Item 3 & 4 - Stacked */}
           <div className="md:col-span-2 lg:col-span-1 flex flex-col md:flex-row lg:flex-col">
              <div className="flex-1 border-b border-contrast relative group overflow-hidden h-[400px] lg:h-auto">
                 <Link to="/menu" className="block h-full w-full">
                    <BrutalistImage 
                       src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
                       alt="Community" 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-6 left-6">
                       <h3 className="text-3xl font-bold text-white uppercase mix-blend-difference flex items-center gap-2">
                          Community <ArrowUpRight size={24}/>
                       </h3>
                    </div>
                 </Link>
              </div>
              <div className="flex-1 p-12 flex flex-col justify-center hover:bg-contrast hover:text-bg transition-colors duration-300 group cursor-pointer border-r border-contrast">
                 <span className="text-8xl font-black leading-none mb-2 text-contrast group-hover:text-bg">25</span>
                 <span className="text-xl font-light uppercase text-contrast group-hover:text-bg">Rue de la Liberté</span>
                 <p className="mt-4 text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 text-contrast group-hover:text-bg">Visit HQ</p>
              </div>
           </div>
        </div>
      </section>

      {/* THE ESSENTIALS LIST */}
      <EssentialsList />

      {/* WAFFLE BLUEPRINT */}
      <section className="bg-bg border-b border-contrast py-32 overflow-hidden relative transition-colors duration-500">
         <div className="container mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-4 text-contrast">
                  Waffle <span className="font-black italic">Blueprint</span>
               </h2>
               <p className="font-bold text-xs uppercase tracking-widest mb-16 border-b border-contrast w-fit pb-1 text-contrast">
                  Technical Specifications
               </p>
            </ScrollReveal>

            <div className="flex flex-col lg:flex-row h-[600px] gap-0 border-2 border-contrast">
               {waffles.map((waffle, idx) => (
                  <motion.div 
                     key={idx} 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.2, ease: "easeOut" }}
                     onMouseEnter={() => setActiveWaffle(idx)}
                     className={`relative border-b lg:border-b-0 lg:border-r border-contrast last:border-0 transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer ${
                        activeWaffle === idx ? 'flex-[3]' : 'flex-[1] hover:flex-[1.5]'
                     }`}
                  >
                     <BrutalistImage 
                        src={waffle.image} 
                        alt={waffle.name}
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ${activeWaffle === idx ? 'opacity-100' : 'opacity-40 grayscale hover:opacity-60'}`} 
                     />
                     
                     {/* Content Overlay */}
                     <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                        <div className={`transition-all duration-500 ${activeWaffle === idx ? 'translate-y-0' : 'translate-y-4'}`}>
                           <h3 className="text-white font-black text-4xl lg:text-6xl uppercase leading-none mb-2">
                              {waffle.name}
                           </h3>
                           <p className="text-brand-300 font-thin italic text-2xl mb-6 opacity-90">
                              {waffle.title}
                           </p>
                           
                           {/* Tech Specs */}
                           <div className={`overflow-hidden transition-all duration-700 delay-100 ${activeWaffle === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <ul className="space-y-2 mb-8">
                                 {waffle.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 text-xs uppercase tracking-widest font-bold">
                                       <Layers size={12} /> {spec}
                                    </li>
                                 ))}
                              </ul>
                              <Link to="/menu">
                                 <Button variant="inverse" size="sm">Configure Build</Button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* MAGAZINE NEWSLETTER */}
      <section className="bg-bg py-32 border-b border-contrast text-center">
         <div className="container mx-auto px-6 max-w-2xl">
            <ScrollReveal>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-contrast">
                 Join The<br/>Club
              </h2>
              <p className="text-lg font-light mb-12 text-contrast/80">
                 Get our monthly "Brew Notes" — featuring secret menu drops, Tangier city guides, and playlists curated by our baristas.
              </p>
              <form className="flex flex-col md:flex-row gap-4 border-b-2 border-contrast pb-4">
                 <input 
                   type="email" 
                   placeholder="YOUR EMAIL ADDRESS" 
                   className="bg-transparent text-2xl font-light placeholder-contrast/30 outline-none w-full uppercase text-contrast"
                 />
                 <button className="text-xl font-bold uppercase hover:opacity-50 transition-opacity text-contrast">
                    Subscribe
                 </button>
              </form>
            </ScrollReveal>
         </div>
      </section>

      {/* LOCATION STRIP */}
      <section className="h-[60vh] relative overflow-hidden transition-colors duration-500 group">
         <div className="absolute inset-0 bg-contrast/10 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
         <BrutalistImage 
           src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop" 
           className="w-full h-full object-cover grayscale scale-105 group-hover:scale-100 transition-transform duration-[2s]"
           alt="Café Interior"
         />
         <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            {/* FORCE PINK COLOR FOR CONTRAST using hex code */}
            <h2 className="text-[15vw] font-black text-[#F7C1D9] uppercase tracking-tighter mix-blend-difference">
               Tangier
            </h2>
         </div>
         <div className="absolute bottom-0 w-full bg-bg border-t border-contrast p-4 flex justify-between items-center z-30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
             <span className="font-bold uppercase text-xs tracking-widest text-contrast">Open Daily 09:00 — 22:00</span>
             <Link to="/contact" className="font-bold uppercase text-xs tracking-widest text-contrast underline">Get Directions</Link>
         </div>
      </section>
    </Layout>
  );
};

export default Home;