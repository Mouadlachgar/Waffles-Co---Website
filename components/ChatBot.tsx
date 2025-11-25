import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, LIFE_JUICES } from '../constants';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hey! I am the Waffles&Co AI. Ask me about our waffles, juices, or where to find us in Tangier.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Initialize Gemini
      // Note: In a real app, ensure process.env.API_KEY is available.
      // If it's not set, we'll simulate a response or handle the error gracefully.
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        throw new Error("API Key missing");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Construct Context from Constants
      const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.price} MAD): ${item.description}`).join('\n');
      const juiceContext = LIFE_JUICES.map(item => `${item.name} (${item.price} MAD): ${item.ingredients.join(', ')}`).join('\n');
      
      const systemPrompt = `
        You are the brand AI for Waffles&Co, a brutalist-minimal café in Tangier, Morocco.
        Tone: Cool, minimal, direct, slightly bold, friendly but not "cute". Use emojis sparingly.
        
        Brand Info:
        - Location: Rue de la Liberté, 25, Tangier.
        - Hours: 09:00 - 22:00 Daily.
        - Vibe: Creative studio x Café. Indulgence meets Vitality.
        - Key Products: Bubble Waffles, Churros, Cold-pressed LIFE Juices.
        
        Menu:
        ${menuContext}
        
        Juices:
        ${juiceContext}
        
        Answer short and concise. If asked about expansion, mention Rabat, Casablanca, and Marrakech coming soon.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            { role: 'user', parts: [{ text: systemPrompt + "\n\nUser Question: " + userMessage }] }
        ]
      });

      const text = response.text || "Sorry, I'm having trouble connecting to the studio right now.";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm offline right now (API Key missing or error). But trust me, the waffles are good." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-black text-brand-300 p-4 rounded-full border border-brand-300 shadow-lg hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[90vw] md:w-[400px] bg-black border border-brand-300 z-50 transition-all duration-300 transform origin-bottom-right shadow-[10px_10px_0px_0px_rgba(247,193,217,0.5)] ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-brand-300 text-black p-4 flex justify-between items-center border-b border-black">
          <div className="flex items-center gap-2">
            <Sparkles size={16} />
            <span className="font-bold uppercase tracking-widest text-sm">Waffles&Co AI</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-black/95">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 text-sm font-light leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-brand-300 text-black border border-brand-300' 
                  : 'bg-black text-brand-300 border border-brand-300/30'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-black text-brand-300 border border-brand-300/30 p-3 text-xs animate-pulse">
                  Thinking...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-black border-t border-brand-300/30 flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything..."
            className="flex-grow bg-transparent border-b border-brand-300/50 text-brand-300 placeholder-brand-300/30 focus:outline-none focus:border-brand-300 text-sm py-2 font-light"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="text-brand-300 hover:text-white transition-colors disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;