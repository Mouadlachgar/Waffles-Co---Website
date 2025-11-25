import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import { LIFE_JUICES } from '../constants';
import { Asterisk, Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrutalistImage from '../components/BrutalistImage';
import HorizontalScroll from '../components/HorizontalScroll';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Good Vibes",
      highlight: "Only",
      description: "Tangier's creative studio for sweet indulgence and raw energy.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
      cta: "Start Order",
      link: "/menu",
      align: "left"
    },
    {
      id: 2,
      title: "Liquid",
      highlight: "Life",
      description: "Cold-pressed daily. 100% Raw. 0% Compromise.",
      image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1600&auto=format&fit=crop",
      cta: "Explore Juice",
      link: "/life-juices",
      align: "right"
    },
    {
      id: 3,
      title: "Churro",
      highlight: "Culture",
      description: "Golden fried geometry. Dipped in pure Belgian chocolate.",
      image: "https://images.unsplash.com/photo-1624303923368-e7be7c679a76?q=80&w=1600&auto=format&fit=crop",
      cta: "See Menu",
      link: "/menu",
      align: "center"
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
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-brand-300 border-b border-black">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0">
             <BrutalistImage 
               src={slides[currentSlide].image} 
               alt={slides[currentSlide].title} 
               className="w-full h-full object-cover grayscale opacity-20"
             />
             <div className="absolute inset-0 bg-brand-300/10"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
             <div className={`flex flex-col ${slides[currentSlide].align === 'right' ? 'items-end text-right' : slides[currentSlide].align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
                
                <motion.div 
                   initial={{ y: 50, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.2, duration: 0.8 }}
                   className="mb-6"
                >
                   <span className="bg-black text-brand-300 px-3 py-1 text-xs font-bold uppercase tracking-widest inline-block">
                      Now Open • Tangier
                   </span>
                </motion.div>

                <motion.h1 
                  className="text-[15vw] md:text-[12vw] leading-[0.8] font-thin uppercase tracking-tighter text-black mb-6"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 50 }}
                >
                  {slides[currentSlide].title}<br/>
                  <span className="font-black italic text-black">{slides[currentSlide].highlight}</span>
                </motion.h1>

                <motion.p 
                  className="text-xl md:text-3xl font-light max-w-xl leading-tight mb-12 text-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                   {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                   <Link to={slides[currentSlide].link}>
                      <Button size="lg" variant="primary">{slides[currentSlide].cta}</Button>
                   </Link>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-4">
         <button onClick={prevSlide} className="w-16 h-16 border border-black flex items-center justify-center hover:bg-black hover:text-brand-300 transition-all">
            <ArrowLeft size={24} />
         </button>
         <button onClick={nextSlide} className="w-16 h-16 border border-black flex items-center justify-center hover:bg-black hover:text-brand-300 transition-all">
            <ArrowRight size={24} />
         </button>
      </div>
      
      {/* Progress Dots */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex gap-2">
         {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all duration-300 ${currentSlide === idx ? 'w-12 bg-black' : 'w-2 bg-black/30'}`}
            />
         ))}
      </div>
    </section>
  );
};


const Home: React.FC = () => {
  const [activeWaffle, setActiveWaffle] = useState<number | null>(0); 
  const [activeChurro, setActiveChurro] = useState<number | null>(null);

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

  // Data for Horizontal Scroll Section
  const horizontalItems = [
    {
      title: "The Process",
      subtitle: "Daily Ritual",
      text: "We don't take shortcuts. Every waffle batter is rested for 24 hours. Every juice is pressed at dawn.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop" // Kitchen/Process
    },
    {
      title: "The Ingredients",
      subtitle: "Strictly Fresh",
      text: "Berries from local farms. Chocolate from Belgium. Coffee beans roasted in small batches.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop" // Ingredients
    },
    {
      title: "The Space",
      subtitle: "Creative Studio",
      text: "Designed to inspire. High ceilings, raw concrete, and the smell of caramelized sugar.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" // Interior
    },
    {
      title: "The Community",
      subtitle: "Tangier Vibes",
      text: "A place for artists, dreamers, and waffle enthusiasts to connect.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" // People
    }
  ];

  return (
    <Layout>
      {/* DYNAMIC HERO SLIDER */}
      <HeroSlider />

      {/* MARQUEE */}
      <section className="bg-black py-6 border-b border-brand-300 overflow-hidden whitespace-nowrap relative z-20 transition-colors duration-500">
         <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap py-4 flex items-center group-hover:[animation-play-state:paused]">
               <span className="text-6xl md:text-8xl font-black text-brand-300 uppercase px-8 font-sans">Crunch</span>
               <Asterisk className="text-brand-300 w-12 h-12 animate-spin-slow" />
               <span className="text-6xl md:text-8xl font-thin italic text-brand-300 uppercase px-8 font-sans">Sip</span>
               <Asterisk className="text-brand-300 w-12 h-12 animate-spin-slow" />
               <span className="text-6xl md:text-8xl font-black text-brand-300 uppercase px-8 font-sans">Repeat</span>
               <Asterisk className="text-brand-300 w-12 h-12 animate-spin-slow" />
            </div>
            <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex items-center group-hover:[animation-play-state:paused]">
               <span className="text-6xl md:text-8xl font-black text-brand-300 uppercase px-8 font-sans">Crunch</span>
               <Asterisk className="text-brand-300 w-12 h-12 animate-spin-slow" />
               <span className="text-6xl md:text-8xl font-thin italic text-brand-300 uppercase px-8 font-sans">Sip</span>
               <Asterisk className="text-brand-300 w-12 h-12 animate-spin-slow" />
               <span className="text-6xl md:text-8xl font-black text-brand-300 uppercase px-8 font-sans">Repeat</span>
               <Asterisk className="text-brand-300 w-12 h-12 animate-spin-slow" />
            </div>
         </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      <HorizontalScroll>
        <div className="flex-shrink-0 w-[400px] lg:w-[600px] flex flex-col justify-center px-12 snap-center">
           <span className="font-black text-brand-300 text-9xl leading-none font-sans">THE<br/>STUDIO</span>
           <p className="mt-8 text-brand-300 font-light text-2xl font-sans">A closer look at how we build flavor.</p>
           <div className="w-24 h-1 bg-brand-300 mt-8"></div>
        </div>
        
        {horizontalItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] h-[600px] flex flex-col border border-brand-300/30 p-8 bg-black/50 hover:bg-black transition-colors snap-center">
             <div className="h-[50%] mb-8 border border-brand-300/20 relative overflow-hidden group">
                <BrutalistImage src={item.image} alt={item.title} className="w-full h-full group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
             </div>
             <h3 className="text-5xl font-thin text-brand-300 uppercase mb-2 font-sans">{item.title}</h3>
             <h4 className="text-sm font-bold bg-brand-300 text-black px-2 py-1 inline-block w-fit mb-4 uppercase tracking-widest font-sans">{item.subtitle}</h4>
             <p className="text-brand-300/80 font-light leading-relaxed text-lg font-sans">{item.text}</p>
          </div>
        ))}

        <div className="flex-shrink-0 w-[400px] flex items-center justify-center px-12 snap-center">
            <Link to="/about">
               <div className="w-80 h-80 rounded-full border-2 border-brand-300 flex items-center justify-center hover:bg-brand-300 hover:text-black transition-all cursor-pointer group">
                  <span className="font-black text-3xl uppercase group-hover:scale-110 transition-transform font-sans">Read More</span>
               </div>
            </Link>
        </div>
      </HorizontalScroll>

      {/* WAFFLE ARCHITECTURE */}
      <section className="bg-brand-300 border-b border-black py-32 overflow-hidden relative transition-colors duration-500">
         <div className="container mx-auto px-6">
            <ScrollReveal>
               <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-tight mb-4 text-black font-sans">
                  Waffle <span className="font-black italic">Blueprint</span>
               </h2>
               <p className="font-sans text-xs uppercase tracking-widest font-bold mb-16 border-b border-black w-fit pb-1">
                  Choose your base
               </p>
            </ScrollReveal>

            <div className="flex flex-col lg:flex-row h-[600px] gap-0 border-2 border-black">
               {waffles.map((waffle, idx) => (
                  <motion.div 
                     key={idx} 
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.2, ease: "easeOut" }}
                     onMouseEnter={() => setActiveWaffle(idx)}
                     className={`relative border-b lg:border-b-0 lg:border-r border-black last:border-0 transition-all duration-700 ease-in-out overflow-hidden group cursor-pointer ${
                        activeWaffle === idx ? 'flex-[3]' : 'flex-[1] hover:flex-[1.5]'
                     }`}
                  >
                     <BrutalistImage 
                        src={waffle.image} 
                        alt={waffle.name}
                        className={`absolute inset-0 w-full h-full transition-all duration-700 ${activeWaffle === idx ? 'opacity-100' : 'opacity-40 grayscale hover:opacity-60'}`} 
                     />
                     <div className="absolute inset-0 bg-brand-300/10 mix-blend-multiply"></div>
                     
                     {/* Content Overlay */}
                     <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                        <div className={`transition-all duration-500 ${activeWaffle === idx ? 'translate-y-0' : 'translate-y-4'}`}>
                           <h3 className="text-brand-300 font-black text-4xl lg:text-6xl uppercase leading-none mb-2 font-sans">
                              {waffle.name}
                           </h3>
                           <p className="text-brand-300 font-thin italic text-2xl mb-6 opacity-90 font-sans">
                              {waffle.title}
                           </p>
                           
                           {/* Tech Specs */}
                           <div className={`overflow-hidden transition-all duration-700 delay-100 ${activeWaffle === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                              <ul className="space-y-2 mb-8">
                                 {waffle.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-300/80 font-sans text-xs uppercase tracking-widest">
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

      {/* CHURRO DYNAMICS */}
      <section className="bg-black text-brand-300 py-32 border-b border-brand-300 relative overflow-hidden transition-colors duration-500">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <ScrollReveal>
                  <div className="relative">
                     <span className="font-sans text-xs uppercase tracking-widest font-bold border-b border-brand-300 pb-1 mb-6 inline-block">Sweet Geometry</span>
                     <h2 className="text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter mb-8 font-sans">
                        The<br/><span className="text-brand-300 font-thin">Loop</span>
                     </h2>
                     <p className="text-xl font-light opacity-80 mb-12 max-w-md font-sans">
                        Golden fried ridges. Soft, airy interior. Rolled in cinnamon sugar and engineered for maximum dip retention.
                     </p>
                     
                     <div className="space-y-4">
                        <p className="font-bold text-xs uppercase tracking-widest mb-4 font-sans">Select Dip Frequency</p>
                        <div className="flex flex-wrap gap-4">
                           {["Chocolate", "Caramel", "Pistachio", "Nutella"].map((dip, i) => (
                              <button 
                                 key={i}
                                 onMouseEnter={() => setActiveChurro(i)}
                                 onMouseLeave={() => setActiveChurro(null)}
                                 className="px-6 py-3 border border-brand-300 rounded-full hover:bg-brand-300 hover:text-black transition-all font-bold uppercase text-sm font-sans"
                              >
                                 {dip}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               </ScrollReveal>

               <motion.div 
                 initial={{ opacity: 0, x: 100 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative aspect-square border border-brand-300/30 p-8 flex items-center justify-center bg-brand-300/5 overflow-hidden group"
               >
                     <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle, var(--color-pink) 2px, transparent 2px)',
                        backgroundSize: '30px 30px'
                     }}></div>

                     <BrutalistImage 
                        src="https://images.unsplash.com/photo-1624303923368-e7be7c679a76?q=80&w=800&auto=format&fit=crop"
                        className={`w-full h-full object-cover transition-all duration-500 z-10 ${activeChurro !== null ? 'scale-105 rotate-3' : ''}`}
                        alt="Churros"
                     />
                     
                     <div className={`absolute bottom-8 right-8 bg-brand-300 text-black p-4 font-black uppercase text-xl z-20 border-2 border-black shadow-[4px_4px_0px_0px_var(--color-black)] transition-transform duration-300 ${activeChurro !== null ? 'scale-110' : 'scale-100'} font-sans`}>
                        {activeChurro !== null ? "Dip It." : "Churros Box"}
                     </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* LIFE JUICE TEASER */}
      <section className="bg-brand-300 py-32 border-b border-black transition-colors duration-500">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
               <h2 className="text-7xl md:text-9xl font-thin text-black uppercase tracking-tighter leading-none font-sans">
                 Raw.<br/><span className="font-black">Liquid.</span><br/>Life.
               </h2>
               <div className="mb-4 lg:mb-0 lg:text-right">
                  <p className="text-black text-xl font-bold mb-8 max-w-xs ml-auto font-sans">
                    Bottled daily. No heat. No preservatives. Just pure plant force.
                  </p>
                  <Link to="/life-juices">
                     <Button variant="secondary" size="lg">Explore LIFE</Button>
                  </Link>
               </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black">
             {LIFE_JUICES.slice(0, 3).map((juice, idx) => (
                <motion.div 
                   key={juice.id} 
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.2, ease: "easeOut" }}
                   className={`group border-b border-black md:border-b-0 ${idx !== 2 ? 'md:border-r' : ''} border-black p-8 md:p-12 hover:bg-black hover:text-brand-300 transition-colors duration-500 cursor-pointer h-full`}
                >
                     <div className="flex justify-between items-start mb-12 font-sans">
                        <span className="text-xs font-bold">0{idx + 1}</span>
                        <span className="text-xs font-bold">{juice.volume}</span>
                     </div>
                     <div className="h-48 flex items-center justify-center mb-8">
                        <div className="w-32 h-32 rounded-full blur-xl opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 mix-blend-multiply" style={{backgroundColor: juice.colorCode}}></div>
                     </div>
                     <h3 className="text-3xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform font-sans">{juice.name}</h3>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="h-[80vh] relative border-b border-black overflow-hidden transition-colors duration-500">
         <div className="absolute inset-0 bg-black/10 z-10"></div>
         <BrutalistImage 
           src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop" 
           className="w-full h-full object-cover grayscale scale-105 hover:scale-100 transition-transform duration-[2s]"
           alt="Studio Interior"
         />
         <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            {/* FORCE PINK COLOR FOR CONTRAST using hex code */}
            <h2 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-[#F7C1D9] uppercase tracking-tighter mix-blend-difference font-sans">
               Tangier
            </h2>
         </div>
         <div className="absolute bottom-12 left-6 lg:left-12 bg-brand-300 p-8 border border-black max-w-sm shadow-[8px_8px_0px_0px_var(--color-black)] z-30 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="font-black uppercase mb-2 text-xl font-sans">Headquarters</h3>
            <p className="font-light mb-6 font-sans">
               Rue de la Liberté, 25<br/>
               Tangier, Morocco
            </p>
            <Link to="/contact">
               <span className="uppercase text-sm font-black border-b-2 border-black pb-1 hover:bg-black hover:text-brand-300 transition-colors font-sans">Get Directions</span>
            </Link>
         </div>
      </section>
    </Layout>
  );
};

export default Home;