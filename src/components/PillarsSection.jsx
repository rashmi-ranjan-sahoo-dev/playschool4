import React from 'react';
import { BookOpen, ShieldCheck, MessageCircleHeart, Sparkles, ArrowRight } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function PillarsSection({ onOpenTrialModal }) {
  const iconMap = {
    BookOpen: BookOpen,
    ShieldAlert: ShieldCheck,
    HeartHandshake: MessageCircleHeart,
    Palette: Sparkles,
  };

  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-24 bg-[#FCF7EE] relative overflow-hidden">
      
      {/* Background doodles */}
      <div className="absolute top-10 right-4 text-4xl opacity-40 select-none pointer-events-none">🎨</div>
      <div className="absolute bottom-10 left-6 text-4xl opacity-40 select-none pointer-events-none">🧩</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            Our Core Educational Pillars
          </div>
          <h2 className="font-rowdies text-3xl sm:text-4xl md:text-5xl font-bold text-[#171E45] leading-tight">
            Nurturing Little Minds with Love, Logic & Sanskar
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Every day at {brandConfig.brandName} is a joyful journey crafted around foundational stages of NEP 2020, fostering curiosity, safety, and cultural pride.
          </p>
        </div>

        {/* 4 Blob Cards Grid (Matching reference template's signature styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandConfig.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;

            return (
              <div 
                key={pillar.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#171E45] card-playful-shadow flex flex-col items-center text-center relative group hover:border-[#FC800A] transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute top-4 right-5 font-rowdies text-lg font-bold text-gray-300 group-hover:text-[#FC800A] transition-colors">
                  0{index + 1}
                </div>

                {/* Rotating Dashed Circular Icon Container (Signature A for Apple effect) */}
                <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
                  
                  {/* Rotating Dashed Ring */}
                  <svg 
                    className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M50,5 C74.8,5 95,25.2 95,50 C95,74.8 74.8,95 50,95 C25.2,95 5,74.8 5,50 C5,25.2 25.2,5 50,5 Z"
                      fill="none"
                      stroke={pillar.bgColor}
                      strokeWidth="2.5"
                      strokeDasharray="6, 4"
                    />
                  </svg>

                  {/* Organic Colored Blob Shape in Center */}
                  <div 
                    className="w-20 h-20 rounded-[45%_55%_60%_40%/40%_50%_50%_60%] flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ backgroundColor: pillar.bgColor }}
                  >
                    <IconComponent className="w-9 h-9 stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-rowdies text-lg sm:text-xl font-bold text-[#171E45] group-hover:text-[#FC800A] transition-colors mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Learn More link */}
                <div className="mt-auto pt-2">
                  <button 
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#171E45] group-hover:text-[#FC800A] transition"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
