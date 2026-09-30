import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const testimonials = brandConfig.testimonials || [];
  const total = testimonials.length;

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

  // Responsive visible cards count
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(total); // Start at Set 1
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const isTransitioning = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ScrollTrigger animations
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

      // 2. Carousel reveal
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: carouselRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Responsive window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 4 sets of testimonials for a rock-solid, seamless infinite scroll in both directions
  const extendedTestimonials = useMemo(() => {
    if (total === 0) return [];
    return [
      ...testimonials.map((t, i) => ({ ...t, uniqueKey: `s0-${t.id}-${i}` })),
      ...testimonials.map((t, i) => ({ ...t, uniqueKey: `s1-${t.id}-${i}` })),
      ...testimonials.map((t, i) => ({ ...t, uniqueKey: `s2-${t.id}-${i}` })),
      ...testimonials.map((t, i) => ({ ...t, uniqueKey: `s3-${t.id}-${i}` })),
    ];
  }, [testimonials, total]);

  // Next slide (infinite forward)
  const next = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Prev slide (infinite backward)
  const prev = () => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle seamless wrapping when transition completes
  const handleTransitionEnd = () => {
    isTransitioning.current = false;

    if (currentIndex >= total * 2) {
      // Slid into Set 2 -> silently reposition to Set 1 without animation
      setWithTransition(false);
      setCurrentIndex((prev) => prev - total);
    } else if (currentIndex < total) {
      // Slid back into Set 0 -> silently reposition to Set 1 without animation
      setWithTransition(false);
      setCurrentIndex((prev) => prev + total);
    }
  };

  // Re-enable transition on the next animation frame after silent repositioning
  useEffect(() => {
    if (!withTransition) {
      const frame = requestAnimationFrame(() => {
        setWithTransition(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [withTransition]);

  // Infinite Auto-play timer
  useEffect(() => {
    if (isPaused || total === 0) return;
    const interval = setInterval(() => {
      next();
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Active dot index (0 to 5)
  const activeDot = total > 0 ? ((currentIndex % total) + total) % total : 0;

  const goToSlide = (dotIdx) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setWithTransition(true);
    setCurrentIndex(total + dotIdx);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 bg-[#FCF7EE] relative overflow-hidden border-t border-orange-200/60"
    >
      {/* Background playful subtle accents */}
      <div className="absolute top-6 right-8 text-3xl opacity-20 select-none pointer-events-none animate-float">
        🌸
      </div>
      <div className="absolute bottom-8 left-8 text-3xl opacity-20 select-none pointer-events-none animate-float-delayed">
        ✨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-1.5 bg-orange-100/90 border border-orange-300/80 text-[#FC800A] font-fredoka font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-2.5 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-[#FC800A]" />
            <span>अभिभावकों का भरोसा • Real Stories</span>
          </div>
          <h2 className="font-rowdies text-2xl sm:text-3xl md:text-4xl font-bold text-[#171E45] leading-tight">
            What Parents Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Track Wrapper */}
          <div 
            className="overflow-hidden py-3 px-1"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                transition: withTransition ? 'transform 550ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((t) => (
                <div
                  key={t.uniqueKey}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="bg-white rounded-2xl p-5 border-2 border-[#171E45] shadow-[0_4px_0_0_#171E45] hover:shadow-[0_8px_0_0_#FC800A] hover:border-[#FC800A] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[290px] relative group select-none">
                    
                    {/* Top Row: Rating & Compact Quote Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(t.rating || 5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 ml-1.5 flex items-center space-x-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />
                            <span>Verified</span>
                          </span>
                        </div>

                        {/* Mini Quote Badge */}
                        <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200 text-[#FC800A] flex items-center justify-center shrink-0 group-hover:bg-[#FC800A] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                          <Quote className="w-4 h-4 fill-current" />
                        </div>
                      </div>

                      {/* Tag Badge */}
                      {t.tag && (
                        <div className="mb-2.5">
                          <span className="text-[10px] font-fredoka font-semibold uppercase tracking-wider text-orange-600 bg-orange-100/60 px-2 py-0.5 rounded-md border border-orange-200/60">
                            {t.tag}
                          </span>
                        </div>
                      )}

                      {/* Concise Quote Text */}
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author & Child Info (Indian Parent Avatar) */}
                    <div className="pt-3.5 mt-4 border-t border-gray-100 flex items-center space-x-3">
                      <div className="relative shrink-0">
                        <img
                          src={t.avatar}
                          alt={t.parentName}
                          className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover border-2 border-[#171E45] shadow-xs group-hover:border-[#FC800A] transition-colors"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-[9px] text-white">
                          ✓
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-rowdies text-xs sm:text-sm font-bold text-[#171E45] truncate group-hover:text-[#FC800A] transition-colors">
                          {t.parentName}
                        </h4>
                        <p className="text-[11px] text-gray-500 font-medium truncate">
                          {t.childDetail}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls: Prev / Next Buttons & Dots */}
          <div className="flex items-center justify-between mt-6 px-1">
            
            {/* Dots Pagination */}
            <div className="flex items-center space-x-1.5">
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeDot === idx 
                      ? 'w-6 bg-[#FC800A]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full bg-white border-2 border-[#171E45] shadow-[0_2px_0_0_#171E45] hover:shadow-[0_4px_0_0_#FC800A] hover:border-[#FC800A] active:translate-y-0.5 flex items-center justify-center text-[#171E45] hover:text-[#FC800A] transition-all cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full bg-white border-2 border-[#171E45] shadow-[0_2px_0_0_#171E45] hover:shadow-[0_4px_0_0_#FC800A] hover:border-[#FC800A] active:translate-y-0.5 flex items-center justify-center text-[#171E45] hover:text-[#FC800A] transition-all cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
