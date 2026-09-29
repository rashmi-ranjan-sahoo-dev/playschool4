import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3">
      
      {/* Direct WhatsApp Chat Floating Button */}
      <a
        href={`https://wa.me/${brandConfig.contact.whatsappNumber}?text=Hello%20Aarambh%20Kidz,%20I%20am%20interested%20in%20preschool%20admissions%20and%20would%20like%20to%20know%20more.`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white relative group cursor-pointer"
        title="Chat with Admissions on WhatsApp"
        aria-label="WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white"></span>
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#171E45] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp 💬
        </span>
      </a>

      {/* Scroll to Top Button (Matches reference template's back-to-top) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-2xl bg-[#FC800A] text-white border-2 border-[#171E45] flex items-center justify-center shadow-lg hover:bg-[#e06c00] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
