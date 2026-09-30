import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCarousel({ onOpenTrialModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const textContainerRef = useRef(null);
  const photoCardRef = useRef(null);
  const girlRef = useRef(null);
  const blobRef = useRef(null);
  const floatingDecorRef = useRef(null);

  // Exact slides based on the reference template
  const slides = [
    {
      badge: "PERSONAL ATTENTION",
      headlineLine1: "Child Focused Experiential",
      hasStar: true,
      headlineLine2: "Learning",
      description: "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Semper risus in hendrerit gravida rutrum quisque non. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
      ctaText: "GET STARTED"
    },
    {
      badge: "GREATER LEARNING",
      headlineLine1: "Discover, Engage,",
      hasStar: false,
      headlineLine2: "Develop, and Enjoy!",
      description: "Senectus et netus et malesuada fames ac turpis egestas integer eget. Augue ut lectus arcu bibendum at varius vel pharetra vel turpis nunc eget.",
      ctaText: "EXPLORE PROGRAMS"
    },
    {
      badge: "HOLISTIC SANSKAR",
      headlineLine1: "Play-Based Young",
      hasStar: true,
      headlineLine2: "Learning System",
      description: "Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sagittis orci a scelerisque purus semper eget duis at tellus.",
      ctaText: "BOOK FREE TRIAL"
    }
  ];

  const isInitialMount = useRef(true);

  // 1. Initial entrance & ScrollTrigger animations (smooth & slow)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Girl entrance from bottom on load
      gsap.fromTo(
        girlRef.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'power3.out' }
      );

      // Levitating photo card entrance from top-right on load
      gsap.fromTo(
        photoCardRef.current,
        { opacity: 0, y: -35, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.15, ease: 'back.out(1.5)' }
      );

      // Background orange blob entrance on load
      gsap.fromTo(
        blobRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.95, scale: 1, duration: 1.1, ease: 'power2.out' }
      );

      // Initial text reveal
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1.0, ease: 'power2.out' }
      );

      // ScrollTrigger gentle parallax drift for hero section
      if (floatingDecorRef.current) {
        gsap.to(floatingDecorRef.current.children, {
          y: -25,
          stagger: 0.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          }
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 2. ONLY smoothly transition the text content when user clicks arrow buttons
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (textContainerRef.current) {
      gsap.fromTo(
        textContainerRef.current,
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, duration: 0.55, ease: 'power2.out' }
      );
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative overflow-hidden bg-[#FAF4EA] pt-0 pb-6 sm:pb-8 lg:pb-10 border-b border-orange-200/40 select-none"
    >
      {/* 1. Signature Scalloped White Cloud Top Border (1-to-1 match with Reference Screenshot) */}
      <div className="w-full overflow-hidden leading-none z-10 pointer-events-none -mt-0.5">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full h-8 sm:h-12 fill-white">
          <path d="M0,0 L1440,0 L1440,16 Q1410,38 1380,22 Q1350,6 1320,24 Q1290,42 1260,20 Q1230,2 1200,24 Q1170,44 1140,22 Q1110,6 1080,24 Q1050,42 1020,20 Q990,2 960,24 Q930,44 900,22 Q870,6 840,24 Q810,42 780,20 Q750,2 720,24 Q690,44 660,22 Q630,6 600,24 Q570,42 540,20 Q510,2 480,24 Q450,44 420,22 Q390,6 360,24 Q330,42 300,20 Q270,2 240,24 Q210,44 180,22 Q150,6 120,24 Q90,42 60,20 Q30,2 0,22 Z"></path>
        </svg>
      </div>

      {/* 2. Floating Whimsical Stickers & Confetti (Authentic Assets from Reference) */}
      <div ref={floatingDecorRef} className="pointer-events-none">
        {/* Top Center: Floating Scissors Doodle (Positioned in high clouds, never overlapping text) */}
        <div className="absolute top-3 sm:top-5 left-[44%] -translate-x-1/2 z-20 pointer-events-none animate-float-delayed hidden lg:block">
          <img 
            src="/images/scissors.webp" 
            alt="Floating scissors doodle" 
            className="w-14 lg:w-16 h-auto drop-shadow-sm -rotate-12 opacity-90" 
          />
        </div>

        {/* Bottom Center-Left: Whimsical Mint & Coral Student Backpack (Under girl elbow, never behind arrows) */}
        <div className="absolute bottom-4 left-[24%] lg:left-[28%] z-20 pointer-events-none animate-float hidden lg:block">
          <img 
            src="/images/backpack.webp" 
            alt="Floating student backpack" 
            className="w-20 lg:w-24 h-auto drop-shadow-md opacity-90" 
          />
        </div>

        {/* Bottom Right: Wooden Triangular ABC Scale Ruler */}
        <div className="absolute bottom-4 right-4 sm:right-10 md:right-14 z-20 pointer-events-none animate-float-delayed hidden md:block">
          <img 
            src="/images/abc-scale.webp" 
            alt="Floating ABC scale ruler" 
            className="w-24 sm:w-28 md:w-32 h-auto drop-shadow-sm opacity-90" 
          />
        </div>

        {/* Scattered Pastel Confetti Dots (Positioned in open margins) */}
        <div className="absolute top-24 left-6 sm:left-10 w-3 h-3 rounded-full bg-[#FC800A] opacity-75 pointer-events-none"></div>
        <div className="absolute top-36 left-4 sm:left-8 text-[#FAB823] opacity-80 text-2xl font-black pointer-events-none select-none animate-twinkle">✦</div>
        <div className="absolute top-48 left-6 sm:left-10 text-[#4EC5F1] opacity-60 text-2xl pointer-events-none select-none">✳</div>
        
        <div className="absolute top-20 right-[12%] w-3 h-3 rounded-full bg-[#FAB823] opacity-75 pointer-events-none hidden md:block"></div>
        <div className="absolute top-32 right-[8%] text-[#F96EA0] opacity-60 text-3xl font-black pointer-events-none select-none animate-twinkle hidden md:block">✳</div>
        <div className="absolute top-28 right-[4%] w-3.5 h-3.5 rounded-full bg-[#FC800A] opacity-80 pointer-events-none hidden md:block"></div>
      </div>

      {/* 3. Main Hero Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          
          {/* ================= LEFT COLUMN: Authentic Indian Girl + Levitating Photo Card ================= */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start items-end max-w-full">
            
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[540px] flex items-end justify-center">
              {/* Background Organic Orange Blob Shape */}
              <div 
                ref={blobRef}
                className="absolute left-0 top-[6%] w-[88%] h-auto z-0 pointer-events-none animate-breathe-blob"
              >
                <img 
                  src="/images/hslider-blob.webp" 
                  alt="Organic orange background blob" 
                  className="w-full h-auto"
                />
              </div>

              {/* Main Smiling Indian Playschool Girl with organic bottom fade mask for seamless edge on all devices */}
              <div 
                ref={girlRef}
                className="relative z-10 w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              >
                <img
                  src="/images/indian_girl_hero_cutout.png"
                  alt="Happy Indian playschool girl giving thumbs up and presenting with open hand"
                  className="w-full h-auto object-contain drop-shadow-xl block"
                />
              </div>

              {/* Levitating Tilted Yellow Photo Card - Proportional to girl width, hovers gracefully above her palm with zero face overlap */}
              <div 
                ref={photoCardRef}
                className="absolute -top-1 xs:top-0 sm:top-1 md:top-2 -right-1 xs:-right-2 sm:-right-3 md:-right-4 z-20 w-[42%] max-w-[210px] animate-float-card pointer-events-none"
              >
                <div className="relative w-full">
                  <img 
                    src="/images/indian_card_with_cap.png" 
                    alt="Smiling Indian student hugging books with graduation cap on yellow card"
                    className="w-full h-auto drop-shadow-2xl block"
                  />
                  {/* Black doodle asterisk next to graduation cap */}
                  <div className="absolute -right-3 xs:-right-4 sm:-right-5 top-6 xs:top-7 sm:top-8 text-lg xs:text-xl sm:text-2xl text-[#171E45] font-black select-none pointer-events-none">
                    ✱
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: Plain Orange Subtitle, Headline + Star, Paragraph, CTA & Doodle Arrows ================= */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 pb-2 sm:pb-4 lg:pb-6 text-left" ref={textContainerRef}>
            
            {/* 1. Subtitle: Clean Orange Text (NO BLUE BOX - Exactly matches reference screenshot!) */}
            <div>
              <span className="text-[#FF723A] font-sans font-bold text-xs sm:text-[14px] tracking-[0.2em] uppercase select-none">
                {active.badge}
              </span>
            </div>

            {/* 2. Headline: Bold Black/Navy Text + Cute Yellow Star */}
            <h1 className="font-rowdies text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] xl:text-[52px] font-bold text-[#171E45] leading-[1.14] tracking-tight">
              <span className="inline-flex flex-wrap items-center">
                <span>{active.headlineLine1}</span>
                {active.hasStar && (
                  <span className="text-[#FAB823] ml-2 inline-block select-none animate-twinkle text-2xl sm:text-3xl lg:text-4xl align-middle">
                    ★
                  </span>
                )}
              </span>
              <div className="text-[#171E45] mt-1 sm:mt-1.5">
                {active.headlineLine2}
              </div>
            </h1>

            {/* 3. Description Paragraph in clean muted dark gray */}
            <p className="text-[#4B5563] text-sm sm:text-base md:text-[16px] leading-relaxed max-w-xl font-normal">
              {active.description}
            </p>

            {/* 4. Primary CTA: Solid Orange Pill Button with Arrow */}
            <div className="pt-1 sm:pt-2">
              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center space-x-2.5 bg-[#FF723A] hover:bg-[#e65c22] text-white px-8 sm:px-9 py-3.5 sm:py-4 rounded-full font-sans font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>{active.ctaText}</span>
                <span className="text-base font-bold leading-none">➔</span>
              </button>
            </div>

            {/* 5. Hand-Drawn Doodle Navigation Arrows with Green Dot (Matching screenshot: [←] [→ ●]) */}
            <div className="pt-2 sm:pt-3 flex items-center space-x-6">
              {/* Left Doodle Arrow Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="p-1 text-[#171E45] hover:text-[#FF723A] transition transform active:scale-90 cursor-pointer"
              >
                <svg className="w-12 h-6" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
                  <path d="M20 3 L4 10 L20 17" />
                  <path d="M5 10 Q28 13 56 9" />
                </svg>
              </button>

              {/* Right Doodle Arrow Button with Green Dot directly at tip */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="p-1 text-[#171E45] hover:text-[#FF723A] transition transform active:scale-90 cursor-pointer"
                >
                  <svg className="w-12 h-6" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
                    <path d="M40 3 L56 10 L40 17" />
                    <path d="M4 11 Q32 7 55 10" />
                  </svg>
                </button>
                <div className="w-2.5 h-2.5 rounded-full bg-[#5AAD65] inline-block -ml-1"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
