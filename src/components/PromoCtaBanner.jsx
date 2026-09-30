import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { brandConfig } from '../config/brandConfig';

export default function PromoCtaBanner({ onOpenTrialModal }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
      setTimeout(() => {
        setSubmitted(false);
        setPhoneNumber('');
      }, 5000);
    }
  };

  return (
    <section className="pt-6 md:pt-8 pb-16 md:pb-20 bg-gradient-to-r from-[#FC800A] via-[#f76e0a] to-[#FAB823] text-white relative overflow-hidden">
      
      {/* Decorative floating shapes */}
      <div className="absolute top-4 left-6 text-4xl animate-bounce opacity-80 pointer-events-none">
        🎈
      </div>
      <div className="absolute bottom-4 right-10 text-4xl animate-float opacity-80 pointer-events-none">
        🎨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#171E45] rounded-3xl p-8 sm:p-12 border-4 border-white shadow-2xl card-playful-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative (Strictly matching Reference Template Section 18) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#FC800A] text-white px-3.5 py-1 rounded-full text-xs font-rowdies">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What We Do</span>
              </div>

              <h2 className="font-rowdies text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Sign Up Now For Your 15% OFF
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Enroll early for the 2025-26 academic batch and receive a 15% tuition fee waiver, zero admission registration fees, and a complimentary welcome learning kit.
              </p>

              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-orange-200 pt-2">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5AAD65]" />
                  <span>Zero Registration Fee</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5AAD65]" />
                  <span>Free Diagnostic Assessment</span>
                </span>
              </div>
            </div>

            {/* Right Quick Form */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border-2 border-[#171E45] text-[#171E45]">
              <h3 className="font-rowdies text-xl font-bold text-[#171E45] mb-2">
                Claim Offer & Free Trial Class
              </h3>
              <p className="text-xs text-gray-500 mb-5">
                Leave your WhatsApp/Mobile number for an instant prospectus & invite.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-center space-y-2">
                  <p className="font-rowdies text-base font-bold">🎉 Welcome to {brandConfig.brandName}!</p>
                  <p className="text-xs">Our Counselor will call you within 15 minutes with your 15% waiver code.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Parent's Mobile Number (+91)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        placeholder="98765 43210"
                        className="w-full pl-13 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#FC800A] focus:ring-2 focus:ring-orange-200 outline-none text-sm font-semibold transition"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FC800A] hover:bg-[#e06c00] text-white py-3.5 rounded-xl font-rowdies text-sm tracking-wide shadow-md transition active:scale-95 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Claim 15% Waiver</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    🔒 No spam. Strictly confidential.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
