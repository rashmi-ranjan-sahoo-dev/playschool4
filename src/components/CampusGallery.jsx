import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function CampusGallery({ onOpenTrialModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Classrooms', 'Outdoors', 'Events', 'Wellness', 'Art & Craft'];

  const filteredImages = activeFilter === 'All'
    ? brandConfig.gallery
    : brandConfig.gallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white/70 relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Strictly matching Reference Template Section 15) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            Education Solution
          </div>
          <h2 className="font-rowdies text-3xl sm:text-4xl md:text-5xl font-bold text-[#171E45] leading-tight">
            Learn & Enjoy Together
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Take a visual tour through our lively Montessori labs, splash pools, organic kitchen gardens, and creative art workshops.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#171E45] text-white shadow-md'
                  : 'bg-[#FCF7EE] text-gray-700 border border-orange-200 hover:bg-orange-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border-3 border-[#171E45] card-playful-shadow bg-white h-72 cursor-pointer"
              onClick={onOpenTrialModal}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="inline-block self-start text-[10px] font-bold uppercase text-[#FAB823] bg-black/40 px-2.5 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h4 className="font-rowdies text-lg font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center space-x-1.5 text-xs text-orange-200 font-semibold">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Click to Book Campus Tour</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
