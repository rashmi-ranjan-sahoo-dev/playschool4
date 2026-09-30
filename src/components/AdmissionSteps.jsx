import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { brandConfig } from '../config/brandConfig';

gsap.registerPlugin(ScrollTrigger);

export default function AdmissionSteps({ onOpenTrialModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStartX, setTouchStartX] = useState(0);
  const sectionRef = useRef(null);
  const archRef = useRef(null);
  const rightHeaderRef = useRef(null);
  const stepsTrackRef = useRef(null);
  const rocketRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Left arch reveal
      if (archRef.current) {
        gsap.fromTo(
          archRef.current,
          { opacity: 0, x: -35, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }

      // 2. Right header reveal
      if (rightHeaderRef.current) {
        gsap.fromTo(
          rightHeaderRef.current.children,
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

      // 3. Steps track entrance
      if (stepsTrackRef.current) {
        gsap.fromTo(
          stepsTrackRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsTrackRef.current,
              start: 'top 88%',
              once: true
            }
          }
        );
      }

      // 4. Rocket gentle drift
      if (rocketRef.current) {
        gsap.fromTo(
          rocketRef.current,
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "1.",
      title: "Visit Our Website",
      hindiSubtitle: "वेबसाइट अवलोकन",
      desc: "Explore our playful campus tour, CCTV setups, nutritious weekly meal plan, and curriculum details.",
      theme: "white", // white circle with orange line icon
      isHigh: true,
    },
    {
      number: "2.",
      title: "Choose Course",
      hindiSubtitle: "कक्षा का चयन",
      desc: "Select the age-appropriate milestone from Nanhe Kadam Playgroup, Umang Nursery to Senior KG & Daycare.",
      theme: "coral", // deep coral/red circle with white icon
      isHigh: false,
    },
    {
      number: "3.",
      title: "Select Classes",
      hindiSubtitle: "समय व बैच चयन",
      desc: "Attend a complimentary 1-Day Trial Class, interact with motherly educators, and select flexible batch timings.",
      theme: "white", // white circle with orange line icon
      isHigh: true,
    },
    {
      number: "4.",
      title: "Start Journey",
      hindiSubtitle: "शुभ आरम्भ",
      desc: "Complete effortless digital enrollment, collect the welcome activity kit with RFID bag, and begin joyful learning.",
      theme: "coral", // deep coral/red circle with white icon
      isHigh: false,
    }
  ];

  // Dynamically calculate visible items according to screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) {
          setItemsPerView(3);
        } else if (window.innerWidth >= 640) {
          setItemsPerView(2);
        } else {
          setItemsPerView(1);
        }
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, steps.length - itemsPerView);

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  const stepPercent = 100 / itemsPerView;

  return (
    <section ref={sectionRef} className="pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 bg-[#FAA818] relative overflow-hidden text-[#171E45]">
      
      {/* ================= TOP RIGHT: 3D Cartoon Rocket Kid with Clouds ================= */}
      <div ref={rocketRef} className="absolute -top-2 right-4 sm:right-10 lg:right-20 z-20 pointer-events-none select-none">
        <div className="relative animate-rocket">
          <img 
            src="/images/cartoon_rocket_kid.jpg" 
            alt="Kid flying on rocket" 
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.2)] rounded-full mix-blend-multiply opacity-95"
          />
          {/* Whimsical mini stars */}
          <div className="absolute top-2 -left-3 text-white text-base animate-twinkle">✨</div>
          <div className="absolute bottom-4 right-1 text-yellow-100 text-sm animate-twinkle">⭐</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* ================= LEFT COLUMN: Arch Cutout with Smiling Indian Student ================= */}
          <div ref={archRef} className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative group">
              
              {/* Signature White Arch Frame */}
              <div className="w-[260px] xs:w-[280px] sm:w-[310px] md:w-[340px] max-w-[85vw] h-[350px] xs:h-[370px] sm:h-[430px] md:h-[470px] bg-white rounded-t-full border-4 sm:border-8 border-white shadow-2xl overflow-hidden relative flex items-end justify-center transition-transform duration-500 group-hover:-translate-y-1">
                
                {/* Authentic Indian Student with Backpack */}
                <img 
                  src="/images/indian_admission_boy.jpg" 
                  alt="Happy Indian preschool student with school backpack" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle soft gradient at bottom of the arch */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Playful Floating Badge on Arch */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-[#171E45] border-2 border-[#171E45] px-4 py-1.5 rounded-full font-rowdies text-xs shadow-md whitespace-nowrap flex items-center space-x-1.5 animate-float">
                <span>🎒</span>
                <span>Ready For School!</span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: Header & Undulating Wavy Steps ================= */}
          <div className="lg:col-span-8 flex flex-col justify-between pt-4 lg:pt-0">
            
            {/* Header: Exactly matching template */}
            <div ref={rightHeaderRef} className="mb-6 lg:mb-8 text-center lg:text-left pr-0 sm:pr-8 lg:pr-28">
              <span className="font-fredoka font-bold text-xs sm:text-sm tracking-widest text-white/95 uppercase block mb-2 drop-shadow-xs">
                LOVED BY KIDS
              </span>
              <h2 className="font-rowdies text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-xs">
                Join Today & Become Confident Learner
              </h2>
            </div>

            {/* Steps Pathway: Smooth GPU-accelerated slider track */}
            <div 
              ref={stepsTrackRef}
              className="w-full overflow-hidden py-4 select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * stepPercent}%)` }}
              >
                {steps.map((step, idx) => {
                  const isEven = idx % 2 === 1;
                  const isCoral = step.theme === 'coral';

                  return (
                    <div 
                      key={idx}
                      className="shrink-0 px-2 sm:px-3 relative"
                      style={{ width: `${stepPercent}%` }}
                    >
                      {/* Step Card Container (Offset for undulating zig-zag wave on desktop) */}
                      <div 
                        className={`flex flex-col items-center text-center transition-all duration-300 group cursor-pointer ${
                          isEven ? 'lg:translate-y-12' : 'lg:translate-y-0'
                        }`}
                        onClick={onOpenTrialModal}
                      >
                        {/* Step Circle with Glowing Outer Halo */}
                        <div className="relative mb-3 flex items-center justify-center">
                          
                          {/* Outer Glow Halo Ring */}
                          <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center p-2.5 transition-all duration-300 group-hover:scale-110 ${
                            isCoral 
                              ? 'bg-[#E25C3D]/35 ring-4 ring-[#E25C3D]/40' 
                              : 'bg-white/30 ring-4 ring-white/40'
                          }`}>
                            
                            {/* Inner Circle Badge */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-6 ${
                              isCoral 
                                ? 'bg-[#E25C3D] text-white' 
                                : 'bg-white text-[#E25C3D]'
                            }`}>
                              
                              {/* Line Icons strictly matching screenshot */}
                              {idx === 0 && (
                                <svg className={`w-7 h-7 ${isCoral ? 'text-white' : 'text-[#E25C3D]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
                                  <path d="m13.56 11.747 4.332-.924" />
                                  <path d="m16 21-3.105-6.21" />
                                  <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a2 2 0 0 1 2.425 1.455l.545 2.18a2 2 0 0 1-1.455 2.426l-1.09.272a2 2 0 0 1-2.425-1.455Z" />
                                  <path d="m6 21 3-6" />
                                </svg>
                              )}

                              {idx === 1 && (
                                <svg className={`w-7 h-7 ${isCoral ? 'text-white' : 'text-[#E25C3D]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                                  <path d="M22 10v6" />
                                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                                </svg>
                              )}

                              {idx === 2 && (
                                <svg className={`w-7 h-7 ${isCoral ? 'text-white' : 'text-[#E25C3D]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect width="18" height="18" x="3" y="3" rx="2" />
                                  <path d="M8 3v18M16 3v18M3 8h18M3 13h18M3 18h18" opacity="0.6" />
                                  <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                                  <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                                  <circle cx="12" cy="13" r="1.5" fill="currentColor" />
                                  <circle cx="16" cy="13" r="1.5" fill="currentColor" />
                                  <circle cx="8" cy="18" r="1.5" fill="currentColor" />
                                  <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                                </svg>
                              )}

                              {idx === 3 && (
                                <svg className={`w-7 h-7 ${isCoral ? 'text-white' : 'text-[#E25C3D]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                                  <path d="M6 6h10" />
                                  <path d="M6 10h10" />
                                  <path d="m9 16 2 2 4-4" />
                                </svg>
                              )}

                            </div>
                          </div>

                          {/* Dashed Connecting Arrow to Next Step (matching screenshot) */}
                          <div className={`hidden lg:block absolute left-[85%] z-10 pointer-events-none select-none ${
                            isEven ? 'top-[-8px]' : 'top-[28px]'
                          }`}>
                            <svg 
                              className="w-16 xl:w-20 h-10 text-white overflow-visible" 
                              viewBox="0 0 70 30" 
                              fill="none"
                            >
                              {isEven ? (
                                /* Upward pointing dashed arrow */
                                <>
                                  <path 
                                    d="M5,24 Q35,4 65,8" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    strokeDasharray="4,4" 
                                    className="animate-dash-flow" 
                                  />
                                  <polygon points="58,4 67,8 60,13" fill="white" />
                                </>
                              ) : (
                                /* Downward pointing dashed arrow */
                                <>
                                  <path 
                                    d="M5,6 Q35,26 65,22" 
                                    stroke="white" 
                                    strokeWidth="2" 
                                    strokeDasharray="4,4" 
                                    className="animate-dash-flow" 
                                  />
                                  <polygon points="58,26 67,22 60,17" fill="white" />
                                </>
                              )}
                            </svg>
                          </div>

                        </div>

                        {/* Step Number + Title */}
                        <h4 className="font-rowdies text-base sm:text-lg font-bold text-white mb-1 leading-snug group-hover:underline">
                          {step.number} {step.title}
                        </h4>

                        {/* Hindi Subtitle Tag */}
                        <span className="text-[10px] font-semibold text-yellow-100/90 mb-1">
                          {step.hindiSubtitle}
                        </span>

                        {/* Step Short Description */}
                        <p className="text-white/90 text-xs leading-relaxed max-w-[200px]">
                          {step.desc}
                        </p>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ================= BOTTOM CENTER: Hand-drawn Navigation Arrows ================= */}
            <div className="flex flex-col items-center justify-center mt-4 lg:mt-6 space-y-2">
              
              <div className="flex items-center space-x-8">
                {/* Hand-drawn Left Arrow (Salmon/Coral) */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="group p-2.5 cursor-pointer transition-all duration-300 hover:scale-125 active:scale-90 select-none focus:outline-none"
                  aria-label="Previous step"
                  title="Previous Step"
                >
                  <svg className="w-12 h-8 text-[#F57C58] drop-shadow-xs group-hover:text-[#E25C3D] transition-colors" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M42,15 L10,15" />
                    <path d="M22,6 L10,15 L22,24" />
                  </svg>
                </button>

                {/* Hand-drawn Right Arrow (White) */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="group p-2.5 cursor-pointer transition-all duration-300 hover:scale-125 active:scale-90 select-none focus:outline-none"
                  aria-label="Next step"
                  title="Next Step"
                >
                  <svg className="w-12 h-8 text-white drop-shadow-xs group-hover:text-yellow-100 transition-colors" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8,15 L40,15" />
                    <path d="M28,6 L40,15 L28,24" />
                  </svg>
                </button>
              </div>

              {/* Step Dots for Mobile / Tablet */}
              <div className="flex items-center space-x-2 pt-1 lg:hidden">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx ? 'bg-white w-6 shadow-xs' : 'bg-white/40 w-2 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= BOTTOM RIGHT: Upright Standing Pencil Doodle ================= */}
      <div className="absolute bottom-2 right-4 sm:right-8 md:right-12 hidden sm:flex flex-col items-center pointer-events-none select-none z-10">
        <div className="w-4 sm:w-5 h-12 sm:h-14 bg-[#F2C04B] border-2 border-[#171E45] rounded-t-xs relative flex flex-col items-center shadow-xs">
          
          {/* Eraser top (Pink) */}
          <div className="w-full h-3 bg-[#F96EA0] rounded-t-xs border-b border-[#171E45]"></div>
          
          {/* Metal ferrule (Gray) */}
          <div className="w-full h-1 bg-gray-300 border-b border-[#171E45]"></div>
          
          {/* Center lead line */}
          <div className="w-[1.5px] h-full bg-[#171E45]/30"></div>
          
          {/* Sharpened wood pencil tip */}
          <div className="absolute -bottom-3.5 w-0 h-0 border-l-[8px] sm:border-l-[9px] border-l-transparent border-r-[8px] sm:border-r-[9px] border-r-transparent border-t-[14px] border-t-[#FDE68A]">
            {/* Graphite tip */}
            <div className="absolute -top-[14px] -left-[2.5px] w-0 h-0 border-l-[2.5px] border-l-transparent border-r-[2.5px] border-r-transparent border-t-[5px] border-t-[#171E45]"></div>
          </div>
        </div>

        {/* Hand-drawn whimsical scribble underneath */}
        <svg className="w-8 sm:w-10 h-5 text-[#171E45] mt-3.5" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M25,0 Q10,12 35,16 Q18,22 25,28" />
        </svg>
      </div>

    </section>
  );
}
