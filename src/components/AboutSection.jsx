import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brandConfig } from '../config/brandConfig';
import PencilSticker from './PencilSticker';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection({ onOpenVideoModal, onOpenMenuModal, onOpenTrialModal }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const highlightsRef = useRef(null);
  const collageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header & narrative smooth slow entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // 2. 6 Feature Icon Cards wave entrance
      if (highlightsRef.current) {
        gsap.fromTo(
          highlightsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: 'top 88%',
              once: true
            }
          }
        );
      }

      // 3. 4 Collage Tiles slow floating entrance
      if (collageRef.current) {
        const tiles = collageRef.current.querySelectorAll('.collage-tile');
        gsap.fromTo(
          tiles,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: collageRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  // 6 Highlights matching the reference screenshot in 2 columns x 3 rows
  const highlights = [
    {
      title: "Child Friendly\nEnvironment",
      bgColor: "bg-[#FF6C4B]", // Warm coral orange
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Child Head & Creative Mind / Lightbulb */}
          <path d="M16 4C10.5 4 6 8.5 6 14C6 17.5 7.8 20.6 10.6 22.4V25C10.6 25.6 11 26 11.6 26H20.4C21 26 21.4 25.6 21.4 25V22.4C24.2 20.6 26 17.5 26 14C26 8.5 21.5 4 16 4Z" />
          <path d="M13 29H19" />
          <path d="M12 14C12 11.8 13.8 10 16 10" />
        </svg>
      )
    },
    {
      title: "Real-Time\nEducation",
      bgColor: "bg-[#FAB823]", // Golden yellow
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Mortarboard Cap & Student */}
          <polygon points="16,5 28,11 16,17 4,11" />
          <path d="M28 11V18" />
          <path d="M10 14V17C10 20.3 12.7 23 16 23C19.3 23 22 20.3 22 17V14" />
          <path d="M7 28C7 24.5 11 23 16 23C21 23 25 24.5 25 28" />
        </svg>
      )
    },
    {
      title: "Well-Built\nInfrastructure",
      bgColor: "bg-[#74B343]", // Fresh leaf green
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Globe with Cap */}
          <polygon points="16,4 27,9 16,14 5,9" />
          <path d="M24 13.5C25.3 15 26 16.9 26 19C26 24.5 21.5 29 16 29C10.5 29 6 24.5 6 19C6 16.9 6.7 15 8 13.5" />
          <ellipse cx="16" cy="19" rx="5" ry="9" />
          <path d="M6 19H26" />
        </svg>
      )
    },
    {
      title: "Professional Staff\nMembers",
      bgColor: "bg-[#F05D78]", // Pinkish magenta
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Smartphone with Cap */}
          <polygon points="21,5 29,9 21,13 13,9" />
          <path d="M29 9V14" />
          <rect x="7" y="9" width="14" height="20" rx="3" />
          <line x1="12" y1="25" x2="16" y2="25" />
        </svg>
      )
    },
    {
      title: "Activity-Based\nLearning",
      bgColor: "bg-[#5DB7FF]", // Sky blue
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Tablet Screen with Cap */}
          <polygon points="22,4 30,8 22,12 14,8" />
          <rect x="6" y="8" width="16" height="21" rx="3" />
          <circle cx="14" cy="25" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Holistic Growth\n& Values",
      bgColor: "bg-[#B08BFF]", // Soft lavender purple
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Graduation Cap with Ribbon */}
          <polygon points="16,6 28,12 16,18 4,12" />
          <path d="M28 12V19" />
          <path d="M9 15V21C9 24.5 12 26 16 26C20 26 23 24.5 23 21V15" />
          <path d="M12 26V30L16 28L20 30V26" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 bg-[#FCF8EE] relative overflow-hidden">
      
      {/* Decorative background subtle elements */}
      <div className="absolute top-10 left-6 text-2xl opacity-20 select-none pointer-events-none">⭐</div>
      <div className="absolute top-1/2 left-2 text-xl opacity-20 select-none pointer-events-none">✨</div>
      <div className="absolute bottom-8 left-12 text-2xl opacity-20 select-none pointer-events-none">🌸</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: Headline, Narrative & 6 Icons ================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div ref={headerRef}>
              {/* Subtitle */}
              <span className="text-[#FC800A] font-rowdies font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-2 inline-block">
                ABOUT US
              </span>

              {/* Main Headline */}
              <h2 className="font-rowdies text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] leading-[1.18] tracking-tight mb-4">
                Globally Recognized Interactive Preschool Education
              </h2>

              {/* Narrative Paragraph */}
              <p className="text-gray-600 font-normal text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Rooted in rich Indian cultural values and accelerated by globally acclaimed early-childhood frameworks (Montessori & NEP 2020), {brandConfig.brandName} creates an inspiring second home. Through sensory exploration and joyful discovery, every child blossoms with natural curiosity and lifelong confidence.
              </p>
            </div>

            {/* 6 Feature Icon Cards (2 Columns x 3 Rows) */}
            <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 mb-7 sm:mb-9">
              {highlights.map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center space-x-3 group cursor-pointer transition-transform duration-300 hover:translate-x-1 min-w-0"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.bgColor} shadow-sm group-hover:scale-105 group-hover:rotate-2 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-rowdies text-sm sm:text-[15px] font-bold text-[#111827] leading-tight group-hover:text-[#FC800A] transition-colors whitespace-pre-line">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button & Guarantee Link Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center space-x-2.5 bg-[#FC800A] hover:bg-[#e06c00] text-white px-7 py-3.5 rounded-full font-rowdies font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer"
              >
                <span>MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 4-Item Visual Collage with Dashed Borders & Sticker ================= */}
          <div ref={collageRef} className="lg:col-span-6 relative w-full max-w-xl lg:max-w-none mx-auto mt-6 lg:mt-0 select-none">
            
            {/* Top Collage Row (Tile 1: Oval Green + Tile 2: Teacher Video Golden) */}
            <div className="flex items-center justify-between gap-2.5 sm:gap-4 mb-3 sm:mb-4">
              
              {/* Tile 1: Top-Left Vertical Oval Pill with Green Dashed Border */}
              <div className="collage-tile w-[38%] p-1 sm:p-1.5 rounded-[90px] sm:rounded-[110px] border-2 border-dashed border-[#5AAD65] bg-transparent animate-slow-float shrink-0">
                <div className="w-full h-40 xs:h-44 sm:h-56 md:h-64 rounded-[86px] sm:rounded-[106px] overflow-hidden shadow-sm group">
                  <img 
                    src="/images/about/indian_preschool_oval.jpg" 
                    alt="Indian preschool children in interactive play" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              {/* Tile 2: Top-Right Educator with Yellow/Golden Dashed Border */}
              <div className="collage-tile w-[58%] p-1 sm:p-1.5 rounded-3xl border-2 border-dashed border-[#FAB823] bg-transparent animate-slow-float-delayed-1 relative shrink-0">
                <div className="w-full h-40 xs:h-44 sm:h-56 md:h-64 rounded-[22px] overflow-hidden shadow-sm group">
                  <img 
                    src="/images/about/indian_teacher_call.jpg" 
                    alt="Indian preschool educator conducting interactive Montessori lesson" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

            </div>

            {/* Bottom Collage Row (Tile 3: Student Desk Coral + Tile 4: Boy Yellow Amber) */}
            <div className="flex items-center justify-between gap-2.5 sm:gap-4 relative">
              
              {/* Tile 3: Bottom-Left Study Desk with Coral Orange Dashed Border */}
              <div className="collage-tile w-[58%] p-1 sm:p-1.5 rounded-3xl border-2 border-dashed border-[#FC800A] bg-transparent animate-slow-float-delayed-2 shrink-0">
                <div className="w-full h-44 xs:h-48 sm:h-60 md:h-72 rounded-[22px] overflow-hidden shadow-sm group">
                  <img 
                    src="/images/about/indian_child_desk.jpg" 
                    alt="Indian preschool child studying at interactive workstation" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              {/* Tile 4: Bottom-Right Yellow Card with Amber Dashed Border */}
              <div className="collage-tile w-[38%] p-1 sm:p-1.5 rounded-3xl border-2 border-dashed border-[#E57A28] bg-transparent animate-slow-float-delayed-3 relative shrink-0">
                <div className="w-full h-44 xs:h-48 sm:h-60 md:h-72 rounded-[22px] overflow-hidden shadow-sm bg-[#FAB823] flex items-center justify-center group">
                  <img 
                    src="/images/about/indian_boy_yellow.jpg" 
                    alt="Indian student reading on modern study chair" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              {/* Standing 3D Wooden Pencil Sticker (Bottom-Right Corner) */}
              <div className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-4 z-20 pointer-events-none animate-slow-wiggle">
                <PencilSticker className="w-8 h-24 sm:w-11 sm:h-32" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
