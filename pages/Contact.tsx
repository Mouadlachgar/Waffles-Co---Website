import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* Left: Info */}
        <div className="bg-black text-brand-300 p-12 md:p-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-brand-300/20">
           <ScrollReveal>
             <div className="mt-12">
               <h1 className="text-7xl md:text-9xl font-thin uppercase tracking-tighter leading-none mb-16">
                 Get<br/>Close
               </h1>
             </div>
             
             <div className="space-y-12 mb-12">
                <div className="border-l border-brand-300 pl-6 hover:pl-8 transition-all">
                   <h3 className="text-[10px] font-sans text-brand-300/60 uppercase tracking-widest mb-2 font-bold">Studio</h3>
                   <p className="text-2xl font-light uppercase">Rue de la Liberté, 25<br/>90000 Tangier</p>
                </div>
                <div className="border-l border-brand-300 pl-6 hover:pl-8 transition-all">
                   <h3 className="text-[10px] font-sans text-brand-300/60 uppercase tracking-widest mb-2 font-bold">Hours</h3>
                   <p className="text-2xl font-light uppercase">09:00 — 22:00<br/>Daily</p>
                </div>
                <div className="border-l border-brand-300 pl-6 hover:pl-8 transition-all">
                   <h3 className="text-[10px] font-sans text-brand-300/60 uppercase tracking-widest mb-2 font-bold">Talk</h3>
                   <p className="text-2xl font-light uppercase mb-2">+212 5XX XX XX XX</p>
                   <p className="text-xl font-light underline hover:text-white transition-colors cursor-pointer">hello@wafflesandco.ma</p>
                </div>
             </div>
           </ScrollReveal>
        </div>

        {/* Right: Form */}
        <div className="bg-brand-300 p-12 md:p-24 flex flex-col justify-center">
            <ScrollReveal direction="left" delay={200}>
              <form className="space-y-12 max-w-lg w-full mx-auto">
                <div className="relative group">
                  <input type="text" className="block w-full py-4 bg-transparent border-b border-black text-black focus:outline-none focus:border-black transition-colors font-light text-2xl placeholder-black/30" placeholder="NAME" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                </div>
                
                <div className="relative group">
                  <input type="email" className="block w-full py-4 bg-transparent border-b border-black text-black focus:outline-none focus:border-black transition-colors font-light text-2xl placeholder-black/30" placeholder="EMAIL" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="relative group">
                  <textarea rows={3} className="block w-full py-4 bg-transparent border-b border-black text-black focus:outline-none focus:border-black transition-colors font-light text-2xl placeholder-black/30 resize-none" placeholder="MESSAGE"></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="pt-8">
                  <Button size="lg" fullWidth variant="secondary">Send Message</Button>
                </div>
              </form>
            </ScrollReveal>
        </div>
      </div>
      
      {/* Map Strip */}
      <div className="h-[400px] bg-gray-200 w-full border-t border-black grayscale contrast-[1.2]">
         <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12948.37315183427!2d-5.83395435!3d35.7594651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTangier%2C%20Morocco!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;