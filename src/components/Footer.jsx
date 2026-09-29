import React, { useState } from 'react';
import { 
  Send, Phone, Mail, MapPin, Heart, 
  MessageCircle, Sparkles 
} from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function Footer({ onOpenTrialModal, onOpenMenuModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#171E45] text-white relative pt-12 overflow-hidden">
      
      {/* Playful Organic Cloud SVG Top Edge (Signature styling from reference template) */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none transform -translate-y-[99%]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 md:h-16 text-[#171E45] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Newsletter Box (Matches A for Apple template) */}
        <div className="bg-[#21295c] border-2 border-[#2f3977] rounded-3xl p-6 sm:p-10 mb-16 shadow-xl card-playful-orange">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[#FAB823] font-fredoka text-xs font-bold uppercase tracking-wider">
                Parents Knowledge Hub
              </span>
              <h3 className="font-rowdies text-2xl sm:text-3xl font-bold text-white leading-snug">
                Subscribe For Free Parenting Tips & Fun Home Activity Sheets!
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">
                Receive weekly Montessori learning ideas, DIY crafts, and early nutrition recipes.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-emerald-900/60 border border-emerald-500 text-emerald-200 p-4 rounded-2xl text-center font-bold text-sm">
                  ✨ Thank you for subscribing! Your first activity kit is on its way.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email ID"
                    className="flex-1 px-5 py-3.5 rounded-2xl bg-white text-gray-900 placeholder-gray-400 outline-none border-2 border-transparent focus:border-[#FC800A] text-sm font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-[#FC800A] hover:bg-[#e06c00] text-white px-7 py-3.5 rounded-2xl font-rowdies text-sm shadow-md transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2 shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-[#FC800A] flex items-center justify-center font-rowdies text-2xl text-white shadow-md">
                A
              </div>
              <div>
                <span className="font-rowdies text-2xl font-bold text-white">
                  {brandConfig.brandName}
                </span>
                <p className="text-[11px] font-semibold text-orange-200 tracking-wider">
                  {brandConfig.brandSubtitle}
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {brandConfig.tagline}. An institution devoted to instilling sanskar, cognitive brilliance, and cheerful lifelong learning habits in toddlers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={brandConfig.social.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FC800A] text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={brandConfig.social.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FC800A] text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a 
                href={brandConfig.social.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FC800A] text-white flex items-center justify-center transition"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href={`https://wa.me/${brandConfig.contact.whatsappNumber}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-rowdies text-base font-bold text-white tracking-wide border-b border-[#FC800A] pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-[#FC800A] transition">About Our School</a></li>
              <li><a href="#programs" className="hover:text-[#FC800A] transition">Programs & Age Group</a></li>
              <li><a href="#how-we-work" className="hover:text-[#FC800A] transition">Teaching Methodology</a></li>
              <li><a href="#events" className="hover:text-[#FC800A] transition">Upcoming Celebrations</a></li>
              <li><a href="#testimonials" className="hover:text-[#FC800A] transition">Parent Testimonials</a></li>
              <li><button onClick={onOpenTrialModal} className="hover:text-[#FC800A] transition cursor-pointer text-left">Book Campus Tour</button></li>
            </ul>
          </div>

          {/* Col 3: Parent Care & Facilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-rowdies text-base font-bold text-white tracking-wide border-b border-[#FC800A] pb-2 inline-block">
              Parent Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="text-gray-300">📱 Live Mobile App CCTV</span></li>
              <li><span className="text-gray-300">🚐 GPS Vans with Aaya Didi</span></li>
              <li><button onClick={onOpenMenuModal} className="text-orange-300 hover:underline cursor-pointer">🥣 Sattvic Fresh Snack Menu</button></li>
              <li><span className="text-gray-300">🩺 Pediatric Health Tie-Ups</span></li>
              <li><span className="text-gray-300">📜 NEP 2020 Accreditation</span></li>
              <li><span className="text-gray-300">⏰ Flexible Daycare Support</span></li>
            </ul>
          </div>

          {/* Col 4: Contact & Campuses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-rowdies text-base font-bold text-white tracking-wide border-b border-[#FC800A] pb-2 inline-block">
              Get In Touch
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#FC800A] shrink-0 mt-0.5" />
                <span>{brandConfig.contact.mainCampusAddress}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#FAB823] shrink-0" />
                <a href={`tel:${brandConfig.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#FC800A] font-bold">
                  {brandConfig.contact.primaryPhone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#5AAD65] shrink-0" />
                <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-[#FC800A]">
                  {brandConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Campuses Tag */}
            <div className="pt-2">
              <p className="text-[11px] text-gray-400 font-bold uppercase mb-1">Our Branches:</p>
              <div className="flex flex-wrap gap-1.5">
                {brandConfig.contact.campuses.map((c, idx) => (
                  <span key={idx} className="bg-white/10 text-gray-200 text-[10px] px-2 py-0.5 rounded-md">
                    {c.city}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} {brandConfig.brandName}. All Rights Reserved. Designed with Love for Little Minds in India.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Safety Protocols</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
