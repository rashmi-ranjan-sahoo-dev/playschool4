import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Palette, Compass, Rocket, Smile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HowWeWorkSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header reveal
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

      // 2. 4 Stages wave entrance
      if (stepsGridRef.current) {
        gsap.fromTo(
          stepsGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsGridRef.current,
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
      step: "01",
      title: "Play & Sensory Discovery",
      desc: "Tactile play with clay, water, building blocks, and sand stimulates neurological synaptic connections.",
      color: "bg-[#FC800A]",
      textColor: "text-[#FC800A]",
      icon: "🧩"
    },
    {
      step: "02",
      title: "Guided Interaction & Phonics",
      desc: "Jolly Phonics, bilingual storytelling, rhythmic poetry, and circle conversations build vocal confidence.",
      color: "bg-[#5AAD65]",
      textColor: "text-[#5AAD65]",
      icon: "📖"
    },
    {
      step: "03",
      title: "Sanskar, Nature & STEM",
      desc: "Little gardening, morning Surya Namaskar, Panchatantra wisdom, and kid-safe science curiosity labs.",
      color: "bg-[#FAB823]",
      textColor: "text-[#FAB823]",
      icon: "🌱"
    },
    {
      step: "04",
      title: "Confidence & Big School Prep",
      desc: "Stage speaking, annual day participation, arithmetic readiness, and independence in daily tasks.",
      color: "bg-[#F96EA0]",
      textColor: "text-[#F96EA0]",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-we-work" ref={sectionRef} className="pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 bg-white/60 relative overflow-hidden border-t border-orange-200/60">
      
      {/* Background Pencil Doodle Decor (Matches Reference Template Section 12 wdt-pen-image) */}
      <div className="absolute top-8 right-10 text-5xl opacity-80 select-none pointer-events-none hidden lg:block animate-float">
        <svg className="w-24 h-24 text-[#FAB823] transform rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 L25,85 L85,25 L75,15 L15,75 Z M80,10 L90,20 L82,28 L72,18 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Strictly matching Reference Template Section 12) */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            How we works
          </div>
          <h2 className="font-rowdies text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#171E45] leading-tight">
            What Makes Our Teaching Unique
          </h2>
        </div>

        {/* 4 Steps Timeline Grid with Connecting Line */}
        <div ref={stepsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          
          {/* Subtle connecting dotted line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-1 border-t-2 border-dashed border-gray-300 -z-0"></div>

          {steps.map((st, i) => (
            <div 
              key={i}
              className="bg-[#FCF7EE] rounded-3xl p-6 border-2 border-[#171E45] card-playful-shadow flex flex-col items-center text-center relative z-10 group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Step Pill */}
              <div className={`w-14 h-14 rounded-2xl ${st.color} text-white font-rowdies text-2xl flex items-center justify-center shadow-md mb-4 border-2 border-[#171E45]`}>
                <span>{st.icon}</span>
              </div>

              <div className="font-rowdies text-xs font-bold text-gray-400 mb-1 tracking-widest uppercase">
                Stage {st.step}
              </div>

              <h3 className="font-rowdies text-lg font-bold text-[#171E45] mb-2 leading-snug">
                {st.title}
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
