import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Clock, ArrowRight, Sparkles, ChevronLeft, ChevronRight,
  Baby, Palette, BookOpen, GraduationCap, ShieldCheck, Check
} from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsSection({ onOpenTrialModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const pillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // 2. Filter pills gentle stagger
      if (pillsRef.current) {
        gsap.fromTo(
          pillsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillsRef.current,
              start: 'top 88%',
              once: true
            }
          }
        );
      }

      // 3. Program cards wave entrance
      if (scrollContainerRef.current) {
        gsap.fromTo(
          scrollContainerRef.current.children,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scrollContainerRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    { id: 'all', name: 'All Stages', hindi: 'सभी कक्षाएं', icon: Sparkles },
    { id: 'playgroup', name: 'Playgroup', hindi: 'नन्हे कदम', icon: Baby },
    { id: 'nursery', name: 'Nursery', hindi: 'उमंग', icon: Palette },
    { id: 'junior-kg', name: 'Junior KG', hindi: 'तरंग', icon: BookOpen },
    { id: 'senior-kg', name: 'Senior KG', hindi: 'उड़ान', icon: GraduationCap },
    { id: 'daycare', name: 'Daycare', hindi: 'सुरक्षा', icon: ShieldCheck },
  ];

  const filteredPrograms = activeCategory === 'all'
    ? brandConfig.programs
    : brandConfig.programs.filter(p => p.id === activeCategory);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" ref={sectionRef} className="pt-6 md:pt-8 pb-6 md:pb-8 bg-[#FCF7EE] relative overflow-hidden">
      
      {/* Playful Indian Cultural Floating Elements */}
      <div className="absolute top-4 right-6 md:right-16 text-3xl opacity-75 pointer-events-none animate-float hidden sm:block select-none" title="Patang / Kite">
        🪁
      </div>
      <div className="absolute top-1/2 -left-3 text-3xl opacity-30 pointer-events-none animate-float-delayed select-none">
        🪷
      </div>
      <div className="absolute bottom-6 right-8 text-2xl opacity-40 pointer-events-none animate-float select-none">
        🎨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact, Clean Section Header (No Clutter) */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-1.5 bg-orange-100/90 border border-orange-300/80 text-[#FC800A] font-fredoka font-bold text-xs px-3.5 py-1 rounded-full mb-2 shadow-xs">
            <span className="text-sm">🌱</span>
            <span>NEP 2020 Aligned • Early Childhood Learning</span>
          </div>

          <h2 className="font-rowdies text-2xl sm:text-3xl md:text-4xl font-bold text-[#171E45] leading-snug">
            Our Learning Stages <span className="text-[#FC800A]">&</span> Programs
          </h2>
        </div>

        {/* Category Filter Pills with Hindi Badges */}
        <div ref={pillsRef} className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-6 md:mb-7">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#171E45] text-white shadow-md scale-102 ring-2 ring-[#FC800A]'
                    : 'bg-white text-gray-700 border border-orange-200/80 hover:bg-orange-50/80 hover:border-orange-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#FAB823]' : 'text-[#FC800A]'}`} />
                <span>{cat.name}</span>
                <span className={`text-[10px] font-normal px-1.5 py-0.5 rounded-md ${
                  isActive ? 'bg-white/20 text-orange-200' : 'bg-orange-100 text-orange-800'
                }`}>
                  {cat.hindi}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile / Tablet Horizontal Navigation Arrows */}
        <div className="flex items-center justify-between sm:hidden mb-2 px-1 text-xs font-semibold text-gray-500">
          <span>← Swipe to explore stages →</span>
          <div className="flex space-x-1.5">
            <button 
              onClick={() => scroll('left')}
              className="p-1 rounded-full bg-white border border-gray-200 shadow-xs hover:bg-orange-50 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-[#171E45]" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-1 rounded-full bg-white border border-gray-200 shadow-xs hover:bg-orange-50 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-[#171E45]" />
            </button>
          </div>
        </div>

        {/* Single Screen View Programs Grid / Responsive Snap Carousel */}
        {activeCategory === 'all' ? (
          <div 
            ref={scrollContainerRef}
            className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-3.5 sm:gap-4 md:grid-cols-3 xl:grid-cols-5 pb-3 sm:pb-0 scroll-smooth no-scrollbar"
          >
            {filteredPrograms.map((program) => (
              <div 
                key={program.id}
                className="w-[260px] sm:w-auto shrink-0 snap-center bg-white rounded-2xl overflow-hidden border-2 border-[#171E45] card-playful-shadow flex flex-col group hover:border-[#FC800A] transition-all duration-300"
              >
                {/* Indian Kids Photo Header */}
                <div className="relative h-36 overflow-hidden bg-gray-100">
                  <img
                    src={program.image}
                    alt={`${program.title} at Aarambh Kidz`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Age Badge */}
                  <div className={`absolute top-2.5 left-2.5 ${program.badgeColor} text-white font-rowdies text-[11px] px-2.5 py-0.5 rounded-full shadow-sm`}>
                    {program.age}
                  </div>

                  {/* Timing Pill */}
                  <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded-lg flex items-center space-x-1 shadow-xs">
                    <Clock className="w-2.5 h-2.5 text-[#FAB823]" />
                    <span>{program.timing}</span>
                  </div>
                </div>

                {/* Card Content - Compact & Clean (No payment/trial clutter) */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title + Hindi Subtitle */}
                    <div className="flex items-baseline justify-between gap-1 mb-1">
                      <h3 className="font-rowdies text-base font-bold text-[#171E45] group-hover:text-[#FC800A] transition-colors leading-tight">
                        {program.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#FC800A] bg-orange-50 border border-orange-200/80 px-1.5 py-0.5 rounded-md shrink-0">
                        {program.hindiName}
                      </span>
                    </div>

                    {/* Concise 1-Line Description */}
                    <p className="text-gray-600 text-xs leading-snug line-clamp-2 mb-2.5 font-normal">
                      {program.description}
                    </p>

                    {/* 2 Micro-Pill Tags */}
                    <div className="flex flex-wrap gap-1">
                      {program.tags?.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center text-[10px] font-medium bg-gray-50 text-gray-700 border border-gray-200/80 px-1.5 py-0.5 rounded-md"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#5AAD65] mr-1"></span>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Focused Spotlight View for Individual Selected Stage */
          <div className="max-w-2xl mx-auto">
            {filteredPrograms.map((program) => (
              <div 
                key={program.id}
                className="bg-white rounded-3xl overflow-hidden border-3 border-[#171E45] card-playful-shadow flex flex-col md:flex-row group transition-all duration-300"
              >
                {/* Spotlight Image */}
                <div className="relative md:w-1/2 h-52 md:h-auto overflow-hidden bg-gray-100">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-3 left-3 ${program.badgeColor} text-white font-rowdies text-xs px-3 py-1 rounded-full shadow-md`}>
                    {program.age}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-xl flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FAB823]" />
                    <span>{program.timing}</span>
                  </div>
                </div>

                {/* Spotlight Info */}
                <div className="p-5 md:p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-bold text-[#FC800A] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">
                        {program.hindiName}
                      </span>
                      <span className="text-xs text-gray-500">• Early Learning Stage</span>
                    </div>

                    <h3 className="font-rowdies text-xl sm:text-2xl font-bold text-[#171E45] mb-2">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {program.tags?.map((tag, idx) => (
                        <span key={idx} className="inline-flex items-center space-x-1 text-xs font-semibold bg-orange-50 text-orange-900 border border-orange-200 px-2.5 py-1 rounded-lg">
                          <Check className="w-3 h-3 text-[#5AAD65]" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-end">
                    <button
                      onClick={() => setActiveCategory('all')}
                      className="inline-flex items-center space-x-1.5 text-xs text-[#171E45] hover:text-[#FC800A] font-bold px-3 py-1.5 rounded-xl border border-gray-200 hover:border-orange-300 hover:bg-orange-50/50 transition cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                      <span>Back to All Stages</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
