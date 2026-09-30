import React, { useState, useEffect } from 'react';
import { X, Phone, User, Baby, Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { brandConfig } from '../config/brandConfig';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    program: 'Playgroup (1.5 – 2.5 yrs)',
  });

  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key & Lock background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct prefilled WhatsApp message with user-filled contact details
    const textMessage = `Namaste Aarambh Kidz! 🙏\nI would like to request preschool admission details / a 1-day free trial class:\n• Parent Name: ${formData.parentName}\n• Contact Number: +91 ${formData.phone}\n• Program / Stage: ${formData.program}`;
    const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(textMessage)}`;

    // 2. Trigger playful celebration confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    // 3. Immediately redirect to WhatsApp with filled contact details
    window.open(whatsappUrl, '_blank');

    // 4. Show brief confirmation and close popup
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({
        parentName: '',
        phone: '',
        program: 'Playgroup (1.5 – 2.5 yrs)',
      });
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-[#FCF7EE] rounded-3xl border-3 sm:border-4 border-[#171E45] shadow-2xl max-w-md w-full overflow-hidden relative card-playful-shadow max-h-[92vh] overflow-y-auto transform transition-all duration-300 ease-out scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (X) */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white border-2 border-[#171E45] flex items-center justify-center text-[#171E45] hover:bg-[#FC800A] hover:text-white transition-colors duration-200 cursor-pointer z-10 shadow-xs active:scale-95"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {submitted ? (
          /* Quick Confirmation Feedback while WhatsApp opens */
          <div className="p-6 sm:p-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-3 border-[#5AAD65] text-[#5AAD65] flex items-center justify-center mx-auto text-2xl shadow-md animate-bounce">
              <CheckCircle2 className="w-9 h-9 text-[#5AAD65]" />
            </div>

            <h3 className="font-rowdies text-xl sm:text-2xl font-bold text-[#171E45]">
              Redirecting to WhatsApp...
            </h3>
            
            <p className="text-gray-600 text-xs sm:text-sm">
              Connecting you with <strong>{brandConfig.brandName}</strong> admissions.
            </p>
          </div>
        ) : (
          /* Clean Contact & Trial Form (No lower reach us section) */
          <div className="p-5 sm:p-7">
            
            {/* Header */}
            <div className="text-center mb-5">
              <span className="inline-flex items-center space-x-1 bg-orange-100 text-[#FC800A] border border-orange-300 px-3 py-0.5 rounded-full text-[11px] font-bold mb-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Admissions 2025-26 • Free 1-Day Trial</span>
              </span>
              <h3 className="font-rowdies text-xl sm:text-2xl font-bold text-[#171E45] leading-snug">
                Connect With Aarambh
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Fill details & request instantly on WhatsApp.
              </p>
            </div>

            {/* Simple 3-Field Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Enter parent's full name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm focus:border-[#FC800A] focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">
                  Phone / WhatsApp (+91)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm focus:border-[#FC800A] focus:ring-2 focus:ring-orange-100 outline-none transition"
                  />
                </div>
              </div>

              {/* Learning Stage */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">
                  Child's Age / Program
                </label>
                <div className="relative">
                  <Baby className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-300 bg-white text-xs sm:text-sm focus:border-[#FC800A] focus:ring-2 focus:ring-orange-100 outline-none font-medium transition cursor-pointer"
                  >
                    <option value="Playgroup (1.5 – 2.5 yrs)">Playgroup (1.5 – 2.5 yrs)</option>
                    <option value="Nursery (2.5 – 3.5 yrs)">Nursery (2.5 – 3.5 yrs)</option>
                    <option value="Junior KG (3.5 – 4.5 yrs)">Junior KG / LKG (3.5 – 4.5 yrs)</option>
                    <option value="Senior KG (4.5 – 5.5 yrs)">Senior KG / UKG (4.5 – 5.5 yrs)</option>
                    <option value="Daycare & Creche">Daycare & Infant Care</option>
                  </select>
                </div>
              </div>

              {/* WhatsApp Redirect Request CTA Button */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-2xl font-rowdies text-sm shadow-md transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center space-x-2 mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>Request on WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
