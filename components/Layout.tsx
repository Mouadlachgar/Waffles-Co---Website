import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import Button from './Button';
import ChatBot from './ChatBot';
import Logo from './Logo';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [text, setText] = useState('WAFFLES');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // A more rapid, glitch-like typographic sequence
    const words = ['CRUNCH', 'SIP', 'REPEAT', 'WAFFLES', '&', 'CO', 'TANGIER'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setText(words[index]);
    }, 180); // Faster cycle

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setText("WAFFLES & CO"); // Land on final brand name
      setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 600); 
      }, 800);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'}`}>
      <h1 className="text-brand-300 font-black text-[15vw] leading-none tracking-tighter uppercase font-sans animate-pulse">
        {text}
      </h1>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Default to true for Dark Mode (Inverse) as initial state
  const [isInverse, setIsInverse] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    // Ensure the DOM matches the initial state
    const root = document.documentElement;
    if (root.getAttribute('data-theme') === 'inverse') {
        setIsInverse(true);
    } else {
        setIsInverse(false);
    }
  }, [location]);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isInverse) {
      root.removeAttribute('data-theme');
      setIsInverse(false);
    } else {
      root.setAttribute('data-theme', 'inverse');
      setIsInverse(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'LIFE', path: '/life-juices' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-brand-300 border-b border-black transition-colors duration-500 h-[80px] flex items-center">
      <div className="w-full px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="group flex items-center text-black hover:opacity-70 transition-opacity">
          <Logo className="text-3xl lg:text-4xl" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest hover:text-black/60 transition-colors font-sans ${
                location.pathname === link.path ? 'underline underline-offset-4 decoration-2' : 'text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="text-black hover:opacity-60 transition-opacity p-2 border border-black/20 rounded-full"
            aria-label="Toggle Contrast"
          >
             {isInverse ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
           <Link to="/menu">
             <Button variant="secondary" size="sm">Order Online</Button>
           </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme} 
                className="text-black hover:opacity-60 transition-opacity p-2"
            >
             {isInverse ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
            className="text-black p-1"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-300 h-[calc(100vh-80px)] flex flex-col p-6 border-t border-black animate-in slide-in-from-top-5 z-[100] transition-colors duration-500">
           {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-5xl font-black text-black uppercase tracking-tight py-4 border-b border-black/10 hover:pl-4 transition-all font-sans"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pb-8">
            <Button fullWidth size="lg">Order Online</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-brand-300 border-t border-brand-300 overflow-hidden transition-colors duration-500">
      {/* Massive Brand Name */}
      <div className="border-b border-brand-300 py-12 md:py-24 px-6 overflow-hidden flex justify-center">
         <Logo className="text-[12vw] leading-none text-brand-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
         {/* Column 1: Manifesto */}
         <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-300 flex flex-col justify-between">
            <div className="mb-12">
               <p className="font-sans text-xs uppercase tracking-widest opacity-80 leading-relaxed max-w-xs">
                  Est. 2024 Tangier.<br/>
                  Dedicated to the art of indulgence and the science of vitality.
               </p>
            </div>
            <div className="font-sans text-sm uppercase tracking-widest font-bold">
               &copy; 2025 All Rights Reserved.
            </div>
         </div>

         {/* Column 2: Navigation Links */}
         <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-300">
            <h3 className="font-sans text-xs uppercase tracking-widest mb-8 border-b border-brand-300 pb-2 w-fit">Index</h3>
            <ul className="space-y-4">
               {[
                  { name: 'Menu', path: '/menu' },
                  { name: 'Locations', path: '/contact' },
                  { name: 'Our Story', path: '/about' },
                  { name: 'Careers', path: '#' },
                  { name: 'Press', path: '#' }
               ].map((item, idx) => (
                  <li key={idx}>
                     <Link to={item.path} className="text-3xl font-thin uppercase hover:pl-4 transition-all flex items-center group font-sans">
                        {item.name}
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-2 transition-opacity" size={20} />
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

         {/* Column 3: Newsletter / Connect */}
         <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-brand-300 text-black transition-colors duration-500">
            <div>
               <h3 className="font-sans text-xs uppercase tracking-widest mb-8 border-b border-black pb-2 w-fit font-bold">Stay Close</h3>
               <p className="text-xl font-light mb-8 leading-tight font-sans">
                  Join the inner circle. Secret menu drops and studio updates.
               </p>
               <form className="flex border-b border-black pb-2">
                  <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent w-full outline-none placeholder-black/50 font-sans uppercase text-sm" />
                  <button type="button" className="font-bold uppercase text-sm hover:opacity-60 font-sans">Join</button>
               </form>
            </div>
            
            <div className="mt-12">
               <h3 className="font-sans text-xs uppercase tracking-widest mb-4 font-bold">Social</h3>
               <div className="flex gap-4">
                  {['Instagram', 'TikTok', 'Spotify'].map((social) => (
                     <a key={social} href="#" className="border border-black px-4 py-2 rounded-full text-xs font-bold uppercase hover:bg-black hover:text-brand-300 transition-colors font-sans">
                        {social}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-300 selection:bg-black selection:text-brand-300 transition-colors duration-500">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="film-grain"></div>
      <Navbar />
      <main className={`flex-grow pt-[80px] transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;