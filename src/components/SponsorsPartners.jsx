import React from 'react';
import { Award, ShieldCheck, CheckCircle, Sparkles } from 'lucide-react';

export default function SponsorsPartners() {
  const partners = [
    { name: "ECA India", title: "Early Childhood Association", badge: "Accredited Member" },
    { name: "NEP 2020", title: "National Education Policy", badge: "Foundational Aligned" },
    { name: "Jolly Phonics", title: "UK Phonics Literacy", badge: "Official Framework" },
    { name: "ISO 9001:2015", title: "Safety & Hygiene Standard", badge: "Certified Campus" },
    { name: "STEM Junior", title: "Inquiry-Based Tinkering", badge: "Robotics Partner" },
    { name: "Fit India", title: "Early Childhood Fitness", badge: "Active Kids Council" },
  ];

  return (
    <section className="pt-6 md:pt-8 pb-12 bg-white/70 border-y border-orange-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Header */}
        <div className="text-center mb-8">
          <p className="font-fredoka text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">
            Recognized by Leading Educational Bodies & Safety Councils
          </p>
        </div>

        {/* Badges / Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {partners.map((p, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-2xl bg-[#FCF7EE] border border-orange-200/70 text-center flex flex-col items-center justify-center hover:border-[#FC800A] hover:bg-orange-50/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FC800A] mb-2 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="font-rowdies text-sm font-bold text-[#171E45] group-hover:text-[#FC800A] transition">
                {p.name}
              </h5>
              <p className="text-[10px] text-gray-500 font-semibold truncate max-w-[120px]">
                {p.title}
              </p>
              <span className="mt-1 text-[9px] font-bold text-[#5AAD65] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {p.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
