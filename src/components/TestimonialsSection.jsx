import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + brandConfig.testimonials.length) % brandConfig.testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % brandConfig.testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FCF7EE] relative overflow-hidden border-t border-orange-200/60">
      
      {/* Background doodles */}
      <div className="absolute top-12 right-12 text-4xl opacity-30 select-none pointer-events-none">💬</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Strictly matching Reference Template Section 16) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            Testimonial
          </div>
          <h2 className="font-rowdies text-3xl sm:text-4xl md:text-5xl font-bold text-[#171E45] leading-tight">
            What Parents Say
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Real stories from working mothers, fathers, and grandparents across our campuses in India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brandConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 border-3 border-[#171E45] card-playful-shadow flex flex-col justify-between relative group hover:border-[#FC800A] transition-all duration-300"
            >
              {/* Quote Icon Badge */}
              <div className="absolute -top-4 -right-2 w-10 h-10 rounded-2xl bg-[#FC800A] text-white flex items-center justify-center border-2 border-[#171E45] shadow-md">
                <Quote className="w-5 h-5 fill-current" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-gray-500 ml-2">Verified Parent</span>
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Child Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.parentName}
                  className="w-13 h-13 rounded-2xl object-cover border-2 border-[#171E45]"
                />
                <div>
                  <h4 className="font-rowdies text-base font-bold text-[#171E45]">
                    {t.parentName}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {t.childDetail}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white border border-gray-300 px-5 py-2.5 rounded-full shadow-sm">
            <span className="text-blue-600 font-bold text-sm">G</span>
            <div className="flex text-amber-400 text-xs">★★★★★</div>
            <span className="text-xs font-semibold text-gray-700">4.9 / 5 rating across 5,800+ Google Reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
}
