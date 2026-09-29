import React, { useState } from 'react';
import { ArrowRight, Sparkles, Star, Zap, GraduationCap, Heart, Rocket } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function FunEducationSection({ onOpenTrialModal }) {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      id: 1,
      tag: "Play & Learn",
      title: "Committed To Fun Filled Education.",
      description: "Diam quam nulla porttitor massa id neque aliquam vestibulum. Purus gravida quis blandit turpis cursus in hac habitasse platea. Senectus et netus et malesuada. Eget nullam non nisi est.",
      indianDescription: "Joy-infused experiential learning rooted in Indian values. Toddlers discover science, letters, numbers, and art through hands-on play without screen fatigue.",
      icon: GraduationCap,
      color: "#FC800A",
      bgLight: "bg-orange-500/10",
      borderColor: "border-[#FC800A]",
      badge: "NEP 2020 Aligned"
    },
    {
      id: 2,
      tag: "High Quality",
      title: "Passion & Vision Towards Shaping Kids.",
      description: "Ultricies mi quis hendrerit dolor. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Porttitor eget dolor commodo nulla facilisi nullam morbi non arcu risus quis varius.",
      indianDescription: "Certified NTT and motherly mentors with an exceptional 1:10 educator-to-child ratio. Complete safety with live parent CCTV and GPS vans with female attendants.",
      icon: Heart,
      color: "#5AAD65",
      bgLight: "bg-emerald-500/10",
      borderColor: "border-[#5AAD65]",
      badge: "1:10 Child Ratio"
    },
    {
      id: 3,
      tag: "Good Foundation",
      title: "Solid Foundation For Bright Future.",
      description: "Risus nullam eget felis eget nunc lobortis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Volutpat diam ut venenatis tellus in metus gravida cum sociis nec.",
      indianDescription: "Holistic development blending Jolly Phonics, bilingual Hindi-English fluency, morning yogic shlokas, and nutritious freshly cooked in-house sattvic meals.",
      icon: Rocket,
      color: "#FAB823",
      bgLight: "bg-amber-500/10",
      borderColor: "border-[#FAB823]",
      badge: "Holistic Sanskar"
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-[#171E45] text-white overflow-hidden">
      
      {/* Decorative Floating Stickers (Matching Reference Template's 3D Star & Thunder) */}
      <div className="absolute top-10 left-8 md:left-16 text-amber-400 opacity-80 pointer-events-none animate-float hidden sm:block">
        <svg className="w-16 h-16 drop-shadow-[0_5px_15px_rgba(250,184,35,0.4)]" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" />
        </svg>
      </div>

      <div className="absolute top-16 right-10 md:right-20 text-[#FC800A] opacity-80 pointer-events-none animate-float-delayed hidden sm:block">
        <svg className="w-16 h-20 drop-shadow-[0_5px_15px_rgba(252,128,10,0.4)]" viewBox="0 0 100 120" fill="currentColor">
          <polygon points="60,0 10,70 50,70 30,120 90,45 50,45" />
        </svg>
      </div>

      <div className="absolute bottom-8 left-1/4 text-purple-400 opacity-60 pointer-events-none animate-spin-slow hidden lg:block">
        <span className="text-4xl">✨</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 text-[#FAB823] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-4 backdrop-blur-xs">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Childhood Atmosphere</span>
          </div>

          <h2 className="font-rowdies text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Committed To Fun-Filled Early Education
          </h2>

          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            Every child blooms at their own pace. At {brandConfig.brandName}, our daily routines ignite wonder, build empathy, and instill lasting confidence.
          </p>
        </div>

        {/* 3 Interactive Feature Cards (A for Apple Section 10 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = activeCard === idx;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(idx)}
                className={`relative bg-[#1f295c] rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 cursor-pointer ${
                  isHovered ? `${card.borderColor} shadow-[6px_6px_0px_#FC800A]` : 'border-white/10 hover:border-white/40'
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      className="font-fredoka text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: card.color }}
                    >
                      {card.tag}
                    </span>

                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:rotate-12 transition-transform duration-300"
                      style={{ backgroundColor: card.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-rowdies text-xl sm:text-2xl font-bold text-white group-hover:text-[#FAB823] transition-colors mb-4 leading-snug">
                    {card.title}
                  </h3>

                  {/* Narrative */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                    {card.indianDescription}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-semibold">
                    {card.badge}
                  </span>

                  <button
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center space-x-2 text-white font-rowdies text-sm group-hover:text-[#FAB823] transition"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Cloud-like curved bottom separator */}
      <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-10 md:h-14 text-[#FCF7EE] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
