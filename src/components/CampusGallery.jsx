import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

gsap.registerPlugin(ScrollTrigger);

export default function CampusGallery({ onOpenTrialModal }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const galleryGridRef = useRef(null);

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

      // 2. Gallery Cards wave entrance
      if (galleryGridRef.current) {
        gsap.fromTo(
          galleryGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: galleryGridRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Close lightbox on Escape key & arrow keys navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex(prev => 
      prev !== null ? (prev > 0 ? prev - 1 : brandConfig.gallery.length - 1) : null
    );
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex(prev => 
      prev !== null ? (prev < brandConfig.gallery.length - 1 ? prev + 1 : 0) : null
    );
  };

  return (
    <section id="gallery" ref={sectionRef} className="pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 bg-white/70 relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
            Education Solution
          </div>
          <h2 className="font-rowdies text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#171E45] leading-tight">
            Learn & Enjoy Together
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Moments of curiosity, playful learning & joyful childhood at {brandConfig.brandName}.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {brandConfig.gallery.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden border-3 border-[#171E45] card-playful-shadow bg-white h-64 sm:h-72 md:h-80 cursor-pointer transition-all duration-300 hover:border-[#FC800A] hover:-translate-y-1.5"
            >
              {/* Pure Indian Preschool Photo (No extra text/data) */}
              <img
                src={item.image}
                alt={item.alt || `Aarambh Kidz campus gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Subtle hover icon zoom indicator (clean & minimal, no text clutter) */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/95 text-[#171E45] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5 text-[#FC800A]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Smooth Image Lightbox Preview (Close on Blank Space / ESC) */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/90 hover:bg-[#FC800A] text-[#171E45] hover:text-white flex items-center justify-center transition cursor-pointer z-50 shadow-lg active:scale-95"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 hover:bg-[#FC800A] text-[#171E45] hover:text-white flex items-center justify-center transition cursor-pointer z-50 shadow-lg active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 hover:bg-[#FC800A] text-[#171E45] hover:text-white flex items-center justify-center transition cursor-pointer z-50 shadow-lg active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Lightbox Image Container */}
          <div 
            className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={brandConfig.gallery[selectedImageIndex].image}
              alt={brandConfig.gallery[selectedImageIndex].alt}
              className="max-w-full max-h-[85vh] object-contain transition-all duration-300"
            />
          </div>
        </div>
      )}
    </section>
  );
}
