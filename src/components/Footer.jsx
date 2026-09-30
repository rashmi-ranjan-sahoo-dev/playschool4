import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brandConfig } from '../config/brandConfig';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. Playful Retro Cartoon Flower Mascot SVG
// ==========================================
function FlowerMascot({ className = "w-28 h-auto" }) {
  return (
    <svg 
      viewBox="0 0 140 160" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.25))' }}
    >
      {/* Bendy Green Cartoon Legs */}
      <path d="M52 110 Q46 130 40 145" stroke="#4CAF50" strokeWidth="6" strokeLinecap="round" />
      <path d="M88 110 Q94 130 100 145" stroke="#4CAF50" strokeWidth="6" strokeLinecap="round" />
      
      {/* Cartoon Green Shoes */}
      <ellipse cx="34" cy="148" rx="14" ry="8" fill="#2E7D32" stroke="#171E45" strokeWidth="2.5" transform="rotate(-8 34 148)" />
      <ellipse cx="106" cy="148" rx="14" ry="8" fill="#2E7D32" stroke="#171E45" strokeWidth="2.5" transform="rotate(8 106 148)" />
      
      {/* Arms */}
      <path d="M46 84 Q28 88 16 80" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round" />
      <path d="M94 84 Q114 94 126 84" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round" />

      {/* Left White Cartoon Glove */}
      <g transform="translate(6, 68) rotate(-18)">
        <ellipse cx="12" cy="14" rx="9" ry="8" fill="#FFFFFF" stroke="#171E45" strokeWidth="2" />
        <circle cx="8" cy="8" r="4.5" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.5" />
        <circle cx="14" cy="6" r="4" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.5" />
        <path d="M10 12 L11 16 M13 12 L14 16" stroke="#171E45" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Right White Cartoon Glove (Welcoming gesture) */}
      <g transform="translate(116, 72) rotate(26)">
        <ellipse cx="12" cy="14" rx="9" ry="8" fill="#FFFFFF" stroke="#171E45" strokeWidth="2" />
        <circle cx="16" cy="8" r="4.5" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.5" />
        <circle cx="10" cy="6" r="4" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.5" />
        <path d="M10 12 L11 16 M13 12 L14 16" stroke="#171E45" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Little Green Stem Body */}
      <path d="M62 78 Q70 102 70 114 Q70 102 78 78 Z" fill="#4CAF50" stroke="#171E45" strokeWidth="2.5" />

      {/* 8 Soft Pink Flower Petals with Bold Outline */}
      <g stroke="#171E45" strokeWidth="2.5" strokeLinejoin="round" fill="#F48FB1">
        {/* Top */}
        <path d="M70 48 C70 20, 60 8, 70 2 C80 8, 70 20, 70 48" />
        {/* Top Right */}
        <path d="M70 48 C88 28, 102 22, 107 28 C108 38, 92 48, 70 48" />
        {/* Right */}
        <path d="M70 48 C98 42, 110 50, 112 58 C108 67, 95 62, 70 48" />
        {/* Bottom Right */}
        <path d="M70 48 C92 68, 102 80, 96 86 C86 88, 78 72, 70 48" />
        {/* Bottom */}
        <path d="M70 48 C70 72, 78 85, 70 90 C62 85, 70 72, 70 48" />
        {/* Bottom Left */}
        <path d="M70 48 C48 72, 38 85, 32 82 C30 72, 45 62, 70 48" />
        {/* Left */}
        <path d="M70 48 C42 45, 28 40, 26 50 C28 60, 45 55, 70 48" />
        {/* Top Left */}
        <path d="M70 48 C50 25, 38 20, 34 26 C33 36, 48 45, 70 48" />
      </g>

      {/* Center Cheerful Yellow Face */}
      <circle cx="70" cy="48" r="23" fill="#FDD835" stroke="#171E45" strokeWidth="2.5" />

      {/* Retro 1930s Pie-Cut Cartoon Eyes */}
      <g fill="#171E45">
        {/* Left eye */}
        <ellipse cx="63" cy="44" rx="4.5" ry="7" />
        <ellipse cx="61.5" cy="42" rx="1.5" ry="2.5" fill="#FFFFFF" />
        <path d="M59 36 L57 32 M62 35 L62 31 M66 36 L68 32" stroke="#171E45" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right eye */}
        <ellipse cx="77" cy="44" rx="4.5" ry="7" />
        <ellipse cx="75.5" cy="42" rx="1.5" ry="2.5" fill="#FFFFFF" />
        <path d="M74 36 L72 32 M78 35 L78 31 M82 36 L84 32" stroke="#171E45" strokeWidth="1.5" strokeLinecap="round" />

        {/* Rosy Cheeks */}
        <circle cx="56" cy="52" r="3" fill="#FF8A80" opacity="0.75" />
        <circle cx="84" cy="52" r="3" fill="#FF8A80" opacity="0.75" />

        {/* Happy Crescent Smile */}
        <path d="M62 52 Q70 61 78 52" stroke="#171E45" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M60 51 Q62 53 63 51" stroke="#171E45" strokeWidth="1.5" fill="none" />
        <path d="M80 51 Q78 53 77 51" stroke="#171E45" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}

// ==========================================
// 2. Playful Retro Cartoon Mushroom Mascot SVG
// ==========================================
function MushroomMascot({ className = "w-28 h-auto" }) {
  return (
    <svg 
      viewBox="0 0 140 140" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0px 8px 14px rgba(0,0,0,0.3))' }}
    >
      {/* Mushroom Cap Dome in Warm Coral-Orange */}
      <path 
        d="M15 80 C10 38, 45 8, 80 10 C115 12, 135 44, 130 80 C125 90, 115 92, 100 86 C85 80, 55 80, 40 86 C25 92, 18 90, 15 80 Z" 
        fill="#FF5722" 
        stroke="#171E45" 
        strokeWidth="3" 
      />

      {/* Cream Polka Dots on Mushroom Cap */}
      <ellipse cx="45" cy="40" rx="11" ry="8" fill="#FFF9C4" stroke="#171E45" strokeWidth="2" />
      <ellipse cx="90" cy="35" rx="14" ry="10" fill="#FFF9C4" stroke="#171E45" strokeWidth="2" />
      <ellipse cx="70" cy="65" rx="8" ry="6" fill="#FFF9C4" stroke="#171E45" strokeWidth="2" />
      <ellipse cx="118" cy="62" rx="7" ry="5" fill="#FFF9C4" stroke="#171E45" strokeWidth="2" />
      <ellipse cx="24" cy="65" rx="6" ry="5" fill="#FFF9C4" stroke="#171E45" strokeWidth="2" />

      {/* Underside & Mushroom Stalk Body */}
      <path 
        d="M38 86 C40 115, 45 130, 72 130 C100 130, 105 115, 106 86 Z" 
        fill="#FFE082" 
        stroke="#171E45" 
        strokeWidth="2.5" 
      />

      {/* Big Cartoon Eyes Looking Cheerful */}
      <g fill="#171E45">
        {/* Left eye */}
        <ellipse cx="62" cy="100" rx="5.5" ry="8" />
        <ellipse cx="60" cy="98" rx="2" ry="3" fill="#FFFFFF" />
        <path d="M57 91 L54 87 M62 90 L62 86 M67 91 L70 87" stroke="#171E45" strokeWidth="1.5" strokeLinecap="round" />

        {/* Right eye */}
        <ellipse cx="80" cy="100" rx="5.5" ry="8" />
        <ellipse cx="78" cy="98" rx="2" ry="3" fill="#FFFFFF" />
        <path d="M75 91 L73 87 M80 90 L80 86 M85 91 L88 87" stroke="#171E45" strokeWidth="1.5" strokeLinecap="round" />

        {/* Rosy Cheeks */}
        <circle cx="53" cy="108" r="3.5" fill="#FF8A80" opacity="0.75" />
        <circle cx="89" cy="108" r="3.5" fill="#FF8A80" opacity="0.75" />

        {/* Cute Smile */}
        <path d="M65 108 Q71 115 77 108" stroke="#171E45" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </g>

      {/* Little White Cartoon Glove Hands */}
      <g transform="translate(24, 96) rotate(-25)">
        <ellipse cx="8" cy="8" rx="6" ry="5" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.8" />
        <circle cx="6" cy="4" r="2.5" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.5" />
      </g>
      <g transform="translate(104, 96) rotate(25)">
        <ellipse cx="8" cy="8" rx="6" ry="5" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.8" />
        <circle cx="10" cy="4" r="2.5" fill="#FFFFFF" stroke="#171E45" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// ==========================================
// 3. Iconic A for Apple Rainbow Sunburst Logo
// ==========================================
function AppleLogo() {
  return (
    <div className="flex items-center space-x-3 select-none group">
      {/* Sunburst Rainbow with Happy Kids Silhouette */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-500 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Outer Colorful Rays */}
          <path d="M12 55 L2 52" stroke="#FF5722" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M18 38 L9 32" stroke="#FF9800" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M30 22 L24 14" stroke="#FFEB3B" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M50 14 L50 4" stroke="#E91E63" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M70 22 L76 14" stroke="#9C27B0" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M82 38 L91 32" stroke="#03A9F4" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M88 55 L98 52" stroke="#4CAF50" strokeWidth="4.5" strokeLinecap="round" />
          
          {/* Main Orange Sun Arch */}
          <path d="M22 65 C22 36, 40 18, 50 18 C60 18, 78 36, 78 65" stroke="#FFA000" strokeWidth="6" strokeLinecap="round" />

          {/* Inner Glowing Sun Disc */}
          <circle cx="50" cy="55" r="16" fill="#FFC107" />

          {/* 3 Joyful Kids Silhouette inside the Arch */}
          {/* Center kid */}
          <circle cx="50" cy="45" r="3.2" fill="#E65100" />
          <path d="M46 54 L50 49 L54 54 M44 51 L56 51 M48 54 L48 62 M52 54 L52 62" stroke="#E65100" strokeWidth="1.8" strokeLinecap="round" />
          
          {/* Left kid */}
          <circle cx="39" cy="48" r="2.8" fill="#0288D1" />
          <path d="M36 56 L39 51 L42 56 M34 52 L43 53 M38 56 L37 62 M41 56 L42 62" stroke="#0288D1" strokeWidth="1.6" strokeLinecap="round" />

          {/* Right kid */}
          <circle cx="61" cy="48" r="2.8" fill="#2E7D32" />
          <path d="M58 56 L61 51 L64 56 M57 53 L66 52 M60 56 L59 62 M63 56 L64 62" stroke="#2E7D32" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      {/* "A for APPLE" Bold Multi-Color Letters */}
      <div className="flex items-baseline font-rowdies">
        {/* Big Yellow 'A' with 'for' */}
        <div className="relative inline-block mr-1">
          <span className="text-[#FFEB3B] text-3xl sm:text-4xl font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            A
          </span>
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[10px] font-fredoka font-bold text-[#FF5722] italic">
            for
          </span>
        </div>
        {/* PPLE in primary colors */}
        <div className="flex text-2xl sm:text-3xl font-black tracking-wider">
          <span className="text-[#2196F3] hover:-translate-y-0.5 transition-transform">P</span>
          <span className="text-[#4CAF50] hover:-translate-y-0.5 transition-transform">P</span>
          <span className="text-[#00BCD4] hover:-translate-y-0.5 transition-transform">L</span>
          <span className="text-[#F44336] hover:-translate-y-0.5 transition-transform">E</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Main Footer Component
// ==========================================
export default function Footer({ onOpenTrialModal, onOpenMenuModal }) {
  const footerRef = useRef(null);
  const columnsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (columnsRef.current) {
        gsap.fromTo(
          columnsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="bg-[#171E45] text-white relative pt-10 md:pt-12 pb-6 sm:pb-8 overflow-hidden border-t-4 border-[#FC800A]/30">
      
      {/* Container matching Reference Screenshot Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 4 Main Footer Columns */}
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-6 sm:pb-8">
          
          {/* ========================================================== */}
          {/* Column 1: Logo, Short Paragraph, Social Media & Flower Mascot */}
          {/* ========================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-5 relative">
            <div>
              {/* Reference Logo */}
              <AppleLogo />

              {/* Description Paragraph */}
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-4 max-w-sm">
                Konec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor gravida ligula eleifend finibus sed vel tellus.
              </p>
            </div>

            {/* Social Media & Mascot Row */}
            <div className="flex items-end justify-between pt-2">
              <div>
                <h4 className="font-rowdies text-base sm:text-lg font-bold text-white mb-3 tracking-wide">
                  Social Media
                </h4>
                
                {/* 4 White Circular Social Media Buttons with Dark Icons */}
                <div className="flex items-center space-x-2.5 sm:space-x-3">
                  
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#171E45] flex items-center justify-center hover:bg-[#FC800A] hover:text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#171E45] flex items-center justify-center hover:bg-[#FC800A] hover:text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#171E45] flex items-center justify-center hover:bg-[#FC800A] hover:text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                    aria-label="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#171E45] flex items-center justify-center hover:bg-[#FC800A] hover:text-white transition-all duration-300 hover:scale-110 shadow-md cursor-pointer"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>

                </div>
              </div>

              {/* Retro Cartoon Flower Character Mascot */}
              <div className="shrink-0 -mb-2 sm:-mr-4 animate-float select-none">
                <FlowerMascot className="w-20 sm:w-24 md:w-26 h-auto" />
              </div>

            </div>
          </div>

          {/* ========================================================== */}
          {/* Column 2: Get In Touch */}
          {/* ========================================================== */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-rowdies text-lg sm:text-xl font-bold text-white tracking-wide">
              Get In Touch
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-300">
              <p className="leading-relaxed">
                Manzana María Elena Leiva<br />
                s/n., Vitoria, Can 58948
              </p>

              <p className="flex items-center">
                <span className="text-white font-medium mr-2">Call Us :</span>
                <a 
                  href="tel:+000123456789" 
                  className="hover:text-[#FC800A] transition-colors"
                >
                  +00 (0) 123 456 789
                </a>
              </p>

              <p className="flex items-center">
                <span className="text-white font-medium mr-2">E-Mail :</span>
                <a 
                  href="mailto:admin@example.com" 
                  className="hover:text-[#FC800A] transition-colors"
                >
                  admin@example.com
                </a>
              </p>
            </div>
          </div>

          {/* ========================================================== */}
          {/* Column 3: Useful Links & 4 Colored Dots */}
          {/* ========================================================== */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-rowdies text-lg sm:text-xl font-bold text-white tracking-wide">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#contact" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  History
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#how-we-work" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Terms & Conditions
                </a>
              </li>
            </ul>

            {/* 4 Overlapping Colored Motif Dots from A for Apple */}
            <div className="flex items-center -space-x-1 pt-2">
              <span 
                className="w-5 h-5 rounded-full bg-[#FAB823] border-2 border-[#171E45] shadow-xs hover:scale-125 transition-transform cursor-pointer" 
                title="Yellow"
              />
              <span 
                className="w-5 h-5 rounded-full bg-[#FC800A] border-2 border-[#171E45] shadow-xs hover:scale-125 transition-transform cursor-pointer" 
                title="Orange"
              />
              <span 
                className="w-5 h-5 rounded-full bg-[#4EC5F1] border-2 border-[#171E45] shadow-xs hover:scale-125 transition-transform cursor-pointer" 
                title="Sky Blue"
              />
              <span 
                className="w-5 h-5 rounded-full bg-[#5AAD65] border-2 border-[#171E45] shadow-xs hover:scale-125 transition-transform cursor-pointer" 
                title="Green"
              />
            </div>
          </div>

          {/* ========================================================== */}
          {/* Column 4: Customer Services & Mushroom Mascot */}
          {/* ========================================================== */}
          <div className="lg:col-span-3 space-y-3 relative">
            <h4 className="font-rowdies text-lg sm:text-xl font-bold text-white tracking-wide">
              Customer Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#app" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Communication App
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenTrialModal} 
                  className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block cursor-pointer text-left"
                >
                  Tour A School
                </button>
              </li>
              <li>
                <a href="#safety" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Health & Safety
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Our Curriculum
                </a>
              </li>
              <li>
                <a href="#educators" className="hover:text-[#FC800A] hover:translate-x-1 transition-all duration-200 inline-block">
                  Our Educators
                </a>
              </li>
            </ul>

            {/* Retro Cartoon Mushroom Character Mascot Peeking in Bottom Right */}
            <div className="hidden sm:block absolute -bottom-8 right-0 sm:right-2 md:right-4 pointer-events-none select-none z-10 animate-float-delayed">
              <MushroomMascot className="w-20 sm:w-24 md:w-26 h-auto" />
            </div>
          </div>

        </div>

        {/* Subtle Bottom Copyright Bar */}
        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} A for Apple Preschool. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
