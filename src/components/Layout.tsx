import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Preloader from './Preloader';
import ChatBot from './ChatBot';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-300 selection:bg-black selection:text-brand-300 transition-colors duration-500">
      <Preloader onComplete={() => setLoading(false)} />
      
      <div className="film-grain"></div>
      
      <Navbar />
      
      <main className={`flex-grow pt-[80px] transition-opacity duration-1000 ease-in-out ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;