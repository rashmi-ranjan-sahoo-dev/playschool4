import React from 'react';
import { GraduationCap, Users, ShieldCheck, Star } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function StatsCounter() {
  const statIcons = [GraduationCap, Users, ShieldCheck, Star];
  const bgColors = [
    'from-orange-500 to-amber-500',
    'from-emerald-500 to-teal-500',
    'from-blue-600 to-indigo-600',
    'from-pink-500 to-rose-500',
  ];

  return (
    <section className="pt-6 md:pt-8 pb-12 bg-[#171E45] text-white relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-2 left-6 text-xl text-yellow-300 opacity-60">✨</div>
      <div className="absolute bottom-2 right-8 text-xl text-yellow-300 opacity-60">⭐</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {brandConfig.stats.map((stat, idx) => {
            const Icon = statIcons[idx] || Star;
            return (
              <div 
                key={idx}
                className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${bgColors[idx]} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-rowdies text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm font-fredoka text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
