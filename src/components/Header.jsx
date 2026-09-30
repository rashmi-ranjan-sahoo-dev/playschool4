import React, { useState, useEffect, useRef } from 'react';
import { brandConfig } from '../config/brandConfig';

export default function Header({ onOpenTrialModal }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const lastScrollY = useRef(0);
  const isClickScrolling = useRef(false);

  // 1. Navigation items with section hrefs
  const navLinks = [
    { name: 'Home', href: '#hero', hasHeart: true },
    { name: 'About Us', href: '#about', hasHeart: false },
    { name: 'Programs', href: '#programs', hasHeart: true },
    { name: 'How We Work', href: '#how-we-work', hasHeart: true },
    { name: 'Campus Life', href: '#gallery', hasHeart: true },
    { name: 'Contact Us', href: '#contact', hasHeart: false },
  ];

  // 2. Smart Scroll Hide/Show Behavior (Hides on scroll down, shows on scroll up)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Shadow and padding elevation past 20px
          setIsScrolled(currentScrollY > 20);

          // Don't auto-hide header if mobile menu is currently open
          if (!mobileMenuOpen) {
            const diff = currentScrollY - lastScrollY.current;

            // Scroll DOWN past 70px -> HIDE header
            if (diff > 8 && currentScrollY > 70) {
              setIsVisible(false);
            }
            // Scroll UP or near top -> SHOW header
            else if (diff < -8 || currentScrollY <= 30) {
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // 3. Scroll Spy: Automatically update active link name as user scrolls down the page
  useEffect(() => {
    const sectionIds = [
      { id: 'hero', name: 'Home' },
      { id: 'about', name: 'About Us' },
      { id: 'programs', name: 'Programs' },
      { id: 'how-we-work', name: 'How We Work' },
      { id: 'gallery', name: 'Campus Life' },
      { id: 'contact', name: 'Contact Us' },
    ];

    const handleScrollSpy = () => {
      if (isClickScrolling.current) return;

      const scrollPos = window.scrollY + 120; // Offset for header height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveLink(sectionIds[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // 4. Smooth Anchor Click Handler with Offset & Active Color Update
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link.name);
    setMobileMenuOpen(false);

    // Lock scroll spy briefly during smooth scroll
    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);

    const targetId = link.href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition > 0 ? offsetPosition : 0,
        behavior: 'smooth',
      });
    } else if (link.href === '#hero' || link.href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : '-translate-y-full shadow-none'
          } ${isScrolled
            ? 'py-2 sm:py-2.5 shadow-md shadow-black/5 border-b border-orange-100/90'
            : 'py-3 sm:py-4 border-b border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">

            {/* ================= Logo Section with Playful Mascot & Animation ================= */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, { name: 'Home', href: '#hero' })}
              className="flex items-center space-x-2 sm:space-x-3 group select-none shrink-0"
            >
              {/* Colorful smiling sun mascot with children rays */}
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                <svg
                  className="w-full h-full transform group-hover:rotate-45 group-hover:scale-110 transition-transform duration-500 ease-out"
                  viewBox="0 0 100 100"
                >
                  {/* Sun rays in playful multiple colors */}
                  <circle cx="50" cy="50" r="18" fill="#FFC107" />
                  <path d="M50 14 L50 24" stroke="#FF723A" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M50 76 L50 86" stroke="#4CAF50" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M14 50 L24 50" stroke="#03A9F4" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M76 50 L86 50" stroke="#E91E63" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M24 24 L32 32" stroke="#9C27B0" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M68 68 L76 76" stroke="#FF9800" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M24 76 L32 68" stroke="#00BCD4" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M68 32 L76 24" stroke="#8BC34A" strokeWidth="4.5" strokeLinecap="round" />
                  {/* Cute smiling face */}
                  <path d="M42 52 Q50 60 58 52" stroke="#171E45" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="43" cy="46" r="2.5" fill="#171E45" />
                  <circle cx="57" cy="46" r="2.5" fill="#171E45" />
                </svg>
              </div>

              {/* Playful Colorful Brand Name */}
              <div className="flex flex-col">
                <div className="flex items-center font-rowdies text-lg sm:text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap">
                  <span className="text-[#FF723A] transition-transform duration-200 group-hover:-translate-y-0.5">Aa</span>
                  <span className="text-[#FAB823] transition-transform duration-200 group-hover:-translate-y-1">ra</span>
                  <span className="text-[#5AAD65] transition-transform duration-200 group-hover:-translate-y-0.5">m</span>
                  <span className="text-[#03A9F4] transition-transform duration-200 group-hover:-translate-y-1">bh</span>
                  <span className="text-[#E91E63] ml-1 sm:ml-1.5 font-rowdies transition-transform duration-200 group-hover:-translate-y-0.5">Kidz</span>
                </div>
                <span className="text-[8px] sm:text-[9.5px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest -mt-0.5 sm:-mt-1 font-sans">
                  {brandConfig.brandSubtitle}
                </span>
              </div>
            </a>

            {/* ================= Desktop Navigation Links with Active Color & Smooth Hover ================= */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link, idx) => {
                const isActive = activeLink === link.name;
                const isHovered = hoveredIndex === idx;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative py-2 text-[14.5px] xl:text-[15.5px] font-bold tracking-wide transition-colors duration-250 group cursor-pointer ${isActive
                      ? 'text-[#FC800A]'
                      : 'text-[#171E45] hover:text-[#FC800A]'
                      }`}
                  >
                    <span className="inline-flex items-center space-x-1">
                      <span>{link.name}</span>
                      {link.hasHeart && (
                        <span
                          className={`text-xs ml-0.5 transition-all duration-300 inline-block ${isActive
                            ? 'text-[#FC800A] scale-125 font-bold'
                            : isHovered
                              ? 'scale-125 text-[#FF723A] rotate-12'
                              : 'text-gray-300'
                            }`}
                        >
                          ♡
                        </span>
                      )}
                    </span>

                    {/* Animated Bottom Indicator Line */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ease-out ${isActive
                        ? 'w-full bg-[#FC800A] opacity-100 shadow-xs'
                        : isHovered
                          ? 'w-full bg-orange-300 opacity-80'
                          : 'w-0 opacity-0'
                        }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* ================= Right Side: Admissions CTA Button + Mobile Hamburger ================= */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Desktop / Tablet CTA Button */}
              <div className="hidden sm:flex items-center">
                <button
                  onClick={onOpenTrialModal}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FC800A] to-[#FF723A] hover:from-[#e06c00] hover:to-[#e65c22] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-rowdies text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>Book Campus Tour</span>
                  <span className="text-sm font-sans font-bold leading-none">➔</span>
                </button>
              </div>

              {/* Mobile & Tablet Animated Hamburger Button (Visible on screens < lg) */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center focus:outline-none transition-all duration-300 cursor-pointer ${mobileMenuOpen
                    ? 'bg-[#FC800A] text-white shadow-md shadow-orange-500/25 rotate-90 scale-95'
                    : 'bg-orange-50/90 hover:bg-orange-100 text-[#171E45] hover:scale-105 active:scale-95'
                    }`}
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <div className="w-5 h-4 flex flex-col justify-between items-center relative pointer-events-none">
                    {/* Top bar morphs to 45 deg line */}
                    <span
                      className={`h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out origin-center ${mobileMenuOpen
                        ? 'bg-white rotate-45 translate-y-[7px]'
                        : 'bg-[#171E45]'
                        }`}
                    />
                    {/* Middle bar fades & shrinks to 0 */}
                    <span
                      className={`h-0.5 w-5 rounded-full transition-all duration-200 ease-in-out ${mobileMenuOpen
                        ? 'opacity-0 scale-0'
                        : 'bg-[#171E45] opacity-100'
                        }`}
                    />
                    {/* Bottom bar morphs to -45 deg line */}
                    <span
                      className={`h-0.5 w-5 rounded-full transition-all duration-300 ease-in-out origin-center ${mobileMenuOpen
                        ? 'bg-white -rotate-45 -translate-y-[7px]'
                        : 'bg-[#171E45]'
                        }`}
                    />
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ================= Responsive Mobile Drawer with Smooth Open & Close Animations ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen
            ? 'max-h-[520px] opacity-100 translate-y-0 border-t border-orange-100/90 shadow-2xl pointer-events-auto'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
            } bg-white/98 backdrop-blur-xl`}
        >
          <div className="px-4 sm:px-6 pt-3 pb-6 space-y-2">
            {navLinks.map((link, idx) => {
              const isActive = activeLink === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${idx * 40}ms` : '0ms'
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-bold transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    } ${isActive
                      ? 'bg-orange-50 text-[#FC800A] shadow-xs pl-5 font-extrabold border-l-4 border-[#FC800A]'
                      : 'text-[#171E45] hover:bg-orange-50/50 hover:text-[#FC800A]'
                    }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FC800A] animate-pulse" />
                    )}
                  </span>
                  {link.hasHeart && (
                    <span className={`text-sm transition-transform ${isActive ? 'text-[#FC800A] scale-125' : 'text-gray-300'}`}>
                      ♡
                    </span>
                  )}
                </a>
              );
            })}

            {/* Mobile Drawer Admissions CTA */}
            <div
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 40}ms` : '0ms' }}
              className={`pt-3 border-t border-gray-100 transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-[#FC800A] to-[#FF723A] hover:from-[#e06c00] hover:to-[#e65c22] text-white py-3.5 rounded-2xl font-rowdies text-sm tracking-wide shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <span>Book Campus Tour</span>
                <span className="text-base font-sans font-bold leading-none">➔</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Layout Spacer so page content flows cleanly beneath fixed header */}
      <div className="h-[64px] sm:h-[76px]" aria-hidden="true" />

      {/* Backdrop overlay for mobile menu tap-outside to close */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 top-16 bg-black/25 backdrop-blur-xs z-40 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />
    </>
  );
}
