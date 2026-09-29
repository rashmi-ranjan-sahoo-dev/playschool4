import React, { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import DedicatedPerfectionSection from './components/DedicatedPerfectionSection';
import FunEducationSection from './components/FunEducationSection';
import ProgramsSection from './components/ProgramsSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import AdmissionSteps from './components/AdmissionSteps';
import EventsSection from './components/EventsSection';
import CampusGallery from './components/CampusGallery';
import TestimonialsSection from './components/TestimonialsSection';
import PromoCtaBanner from './components/PromoCtaBanner';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';
import WeeklyMenuModal from './components/WeeklyMenuModal';
import SearchModal from './components/SearchModal';
import VideoModal from './components/VideoModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FCF7EE] text-[#171E45] flex flex-col font-sans selection:bg-[#FC800A] selection:text-white">
      
      {/* 1. Main Sticky Navigation (Clean & animated without top contact bar) */}
      <Header onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Main Content Sections (Strictly mapped 1-to-1 to reference template: A for Apple) */}
      <main className="flex-1">
        
        {/* Section 1 (Template Sec 7): Hero Carousel with Rotating Dashed Rings & Floating Badges */}
        <HeroCarousel 
          onOpenTrialModal={() => setTrialModalOpen(true)}
          onOpenVideoModal={() => setVideoModalOpen(true)}
        />

        {/* Section 2 (Template Sec 8): About Us & Globally Recognized Interactive Preschool Education */}
        <AboutSection 
          onOpenVideoModal={() => setVideoModalOpen(true)}
          onOpenMenuModal={() => setMenuModalOpen(true)}
          onOpenTrialModal={() => setTrialModalOpen(true)}
        />

        {/* Section 3 (Template Sec 9): Dedicated To Perfection & Building Good Foundation Of Knowledge */}
        <DedicatedPerfectionSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Section 4 (Template Sec 10): Dark Navy Fun-Filled Education Showcase with 3D Stars & Lightning */}
        <FunEducationSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Section 5 (Template Sec 11): Tailored Classes & Unique Approaches To Teaching */}
        <ProgramsSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Section 6 (Template Sec 12): How We Works & What Makes Our Teaching Unique */}
        <HowWeWorkSection />

        {/* Section 7 (Template Sec 13): Loved By Kids & Join Today & Become Confident Learner */}
        <AdmissionSteps onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Section 8 (Template Sec 14): Photo Gallery & Ideal Kids Special Events */}
        <EventsSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Section 9 (Template Sec 15): Education Solution & Learn & Enjoy Together */}
        <CampusGallery onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* Section 10 (Template Sec 16): Testimonial & What Parents Say */}
        <TestimonialsSection />

        {/* Section 11 (Template Sec 18): What We Do & Sign Up Now For Your 15% OFF */}
        <PromoCtaBanner onOpenTrialModal={() => setTrialModalOpen(true)} />

      </main>

      {/* Section 12 (Template Sec 19-22): Signature Cloud Separator Footer & Newsletter */}
      <Footer 
        onOpenTrialModal={() => setTrialModalOpen(true)} 
        onOpenMenuModal={() => setMenuModalOpen(true)}
      />

      {/* Floating Actions: WhatsApp Direct Connect + Back-To-Top Button */}
      <FloatingActions />

      {/* Interactive Modals */}
      <TrialModal 
        isOpen={trialModalOpen} 
        onClose={() => setTrialModalOpen(false)} 
      />

      <WeeklyMenuModal 
        isOpen={menuModalOpen} 
        onClose={() => setMenuModalOpen(false)} 
      />

      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />

      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />

    </div>
  );
}
