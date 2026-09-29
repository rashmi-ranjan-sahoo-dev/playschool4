import React from 'react';
import { 
  CalendarCheck, UsersRound, Sparkles, Gift, 
  ArrowRight, PhoneCall, CheckCircle2, Globe, BookOpen, Clock, HeartHandshake 
} from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function AdmissionSteps({ onOpenTrialModal }) {
  const steps = [
    {
      step: "01",
      title: "Visit Our Website",
      desc: "Explore our programs, campuses, curriculum, and schedule a personalized zero-cost campus tour.",
      icon: Globe,
    },
    {
      step: "02",
      title: "Choose Course",
      desc: "Select the developmental age bracket suitable for your child — Playgroup, Nursery, Jr. KG, or Sr. KG.",
      icon: BookOpen,
    },
    {
      step: "03",
      title: "Select Classes",
      desc: "Attend a complimentary 1-Day Trial Class, interact with motherly educators, and choose batch timings.",
      icon: Clock,
    },
    {
      step: "04",
      title: "Join Our School",
      desc: "Complete effortless digital enrollment, collect the welcome learning activity kit, and begin the journey!",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FCF7EE] relative overflow-hidden border-t border-orange-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mascot & Guarantee Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Playful Backdrop Card */}
            <div className="relative w-full max-w-md bg-gradient-to-br from-[#171E45] to-[#26316b] text-white rounded-3xl p-8 border-4 border-[#171E45] card-playful-orange">
              
              <div className="inline-block bg-[#FC800A] text-white font-rowdies text-xs px-3.5 py-1 rounded-full mb-4">
                Admissions 2025-26
              </div>

              <h3 className="font-rowdies text-2xl sm:text-3xl font-bold leading-tight mb-4">
                Loved By 5,800+ Indian Toddlers & Parents
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                Enrolling your child at {brandConfig.brandName} is simple and completely transparent. Experience our warm environment with a zero-cost 1-Day Trial Class.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#5AAD65] shrink-0" />
                  <span>Free 1-Day Trial Session</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#5AAD65] shrink-0" />
                  <span>No Donation / Capitation Fee</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#5AAD65] shrink-0" />
                  <span>Complimentary Welcome Activity Kit</span>
                </div>
              </div>

              <button
                onClick={onOpenTrialModal}
                className="w-full bg-[#FC800A] hover:bg-[#e06c00] text-white py-3.5 rounded-2xl font-rowdies text-base shadow-lg transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Book Free Trial Class</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>

            {/* Sunflower Sticker */}
            <div className="absolute -bottom-6 -left-4 text-4xl animate-float hidden sm:block">
              🌻
            </div>

          </div>

          {/* Right Column: 4 Admission Steps (Matching Reference Template Section 13) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
                Loved By Kids
              </span>
              <h2 className="font-rowdies text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171E45] leading-tight">
                Join Today & Become Confident Learner
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-3xl bg-white border-2 border-[#171E45] card-playful-shadow group hover:border-[#FC800A] transition"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FC800A] flex items-center justify-center group-hover:bg-[#FC800A] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-rowdies text-2xl font-bold text-gray-300 group-hover:text-[#FC800A] transition">
                        {s.step}
                      </span>
                    </div>

                    <h4 className="font-rowdies text-base font-bold text-[#171E45] mb-1.5">
                      {s.title}
                    </h4>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
