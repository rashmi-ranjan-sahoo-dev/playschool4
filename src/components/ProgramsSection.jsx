import React, { useState } from 'react';
import { 
  CheckCircle, Clock, Calendar, ArrowRight, 
  Baby, Sparkles, Heart, Shield, Award 
} from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function ProgramsSection({ onOpenTrialModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'playgroup', name: 'Playgroup (1.5 - 2.5 yrs)' },
    { id: 'nursery', name: 'Nursery (2.5 - 3.5 yrs)' },
    { id: 'junior-kg', name: 'Junior KG (3.5 - 4.5 yrs)' },
    { id: 'senior-kg', name: 'Senior KG (4.5 - 5.5 yrs)' },
    { id: 'daycare', name: 'Daycare (6m - 10 yrs)' },
  ];

  const filteredPrograms = activeCategory === 'all'
    ? brandConfig.programs
    : brandConfig.programs.filter(p => p.id === activeCategory);

  return (
    <section id="programs" className="py-16 md:py-24 bg-[#FCF7EE] relative overflow-hidden">
      
      {/* Signature Pen / Crayon Doodle Decorative Element (Matches Reference Template Section 11) */}
      <div className="absolute top-6 right-8 md:right-24 text-4xl opacity-80 pointer-events-none animate-float hidden md:block">
        <svg className="w-20 h-20 text-[#FC800A] transform -rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M70,10 L90,30 L30,90 L10,90 L10,70 Z M25,85 L15,85 L15,75 Z" />
        </svg>
      </div>

      <div className="absolute bottom-12 left-6 text-4xl opacity-30 select-none pointer-events-none">📚</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (Strictly matching Reference Template Section 11) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            Tailored classes
          </div>
          <h2 className="font-rowdies text-3xl sm:text-4xl md:text-5xl font-bold text-[#171E45] leading-tight">
            Unique Approaches To Teaching Combined Technology & Learning.
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Our curriculum blends the play-way Montessori method, Jolly Phonics, early mathematical thinking, and Indian cultural values.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FC800A] text-white shadow-md card-playful-orange'
                  : 'bg-white text-[#171E45] border border-orange-200 hover:bg-orange-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div 
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden border-3 border-[#171E45] card-playful-shadow flex flex-col group hover:border-[#FC800A] transition-all duration-300"
            >
              {/* Program Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Age Badge */}
                <div className={`absolute top-4 left-4 ${program.badgeColor} text-white font-rowdies text-xs px-3.5 py-1.5 rounded-full shadow-md`}>
                  {program.age}
                </div>

                {/* Timing Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#FAB823]" />
                  <span>{program.timing}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-rowdies text-xl font-bold text-[#171E45] group-hover:text-[#FC800A] transition-colors mb-2">
                  {program.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {program.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-medium text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#5AAD65] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer: Fee & CTA */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-semibold block uppercase">Starting at</span>
                    <span className="font-rowdies text-base font-bold text-[#171E45]">{program.fees}</span>
                  </div>

                  <button
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center space-x-1.5 bg-[#FC800A] hover:bg-[#e06c00] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <span>Free Trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
