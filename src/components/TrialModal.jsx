import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, Phone, User, Baby, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { brandConfig } from '../config/brandConfig';

export default function TrialModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    program: 'playgroup',
    campus: brandConfig.contact.campuses[0].name,
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FCF7EE] rounded-3xl border-4 border-[#171E45] shadow-2xl max-w-lg w-full overflow-hidden relative card-playful-shadow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border-2 border-[#171E45] flex items-center justify-center text-[#171E45] hover:bg-[#FC800A] hover:text-white transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-[#5AAD65] text-[#5AAD65] flex items-center justify-center mx-auto text-3xl shadow-lg">
              🎉
            </div>

            <h3 className="font-rowdies text-2xl font-bold text-[#171E45]">
              Trial Session Booked Successfully!
            </h3>

            <div className="bg-white p-5 rounded-2xl border-2 border-dashed border-[#FC800A] space-y-2 text-left">
              <div className="flex justify-between text-xs text-gray-500 font-bold uppercase">
                <span>Voucher Code</span>
                <span className="text-[#FC800A]">AARAMBH-FREE-PASS</span>
              </div>
              <p className="font-rowdies text-sm text-[#171E45]">
                Child: <span className="text-[#FC800A]">{formData.childName || 'Little One'}</span>
              </p>
              <p className="text-xs text-gray-600">
                Campus: {formData.campus}
              </p>
              <p className="text-xs text-gray-600">
                A confirmation SMS & WhatsApp invite have been sent to <strong>+91 {formData.phone}</strong>.
              </p>
            </div>

            <p className="text-xs text-gray-500">
              Our Head Counselor will reach out shortly to guide you on dress code, kit, and visitor parking.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#171E45] hover:bg-[#FC800A] text-white px-8 py-3 rounded-2xl font-rowdies text-sm shadow-md transition cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <span className="inline-flex items-center space-x-1.5 bg-orange-100 text-[#FC800A] border border-orange-300 px-3.5 py-1 rounded-full text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Cost • Free Welcome Kit Included</span>
              </span>
              <h3 className="font-rowdies text-2xl sm:text-3xl font-bold text-[#171E45]">
                Book A Free 1-Day Trial Class
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Experience the magic of {brandConfig.brandName} before making any decision.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">Parent's Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#FC800A] outline-none"
                  />
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">WhatsApp / Phone (+91)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                    placeholder="10-digit mobile number"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#FC800A] outline-none"
                  />
                </div>
              </div>

              {/* Child's Name & Program */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#171E45] mb-1">Child's Name</label>
                  <div className="relative">
                    <Baby className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      placeholder="e.g. Vihaan"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#FC800A] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#171E45] mb-1">Grade / Age Group</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#FC800A] outline-none font-medium"
                  >
                    <option value="playgroup">Playgroup (1.5 - 2.5 yrs)</option>
                    <option value="nursery">Nursery (2.5 - 3.5 yrs)</option>
                    <option value="junior-kg">Junior KG (3.5 - 4.5 yrs)</option>
                    <option value="senior-kg">Senior KG (4.5 - 5.5 yrs)</option>
                    <option value="daycare">Daycare (Infants & Kids)</option>
                  </select>
                </div>
              </div>

              {/* Campus Selector */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">Select Preferred Campus</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.campus}
                    onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#FC800A] outline-none font-medium"
                  >
                    {brandConfig.contact.campuses.map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name} ({c.city})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-[#171E45] mb-1">Preferred Trial Date</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-[#FC800A] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FC800A] hover:bg-[#e06c00] text-white py-3.5 rounded-2xl font-rowdies text-base shadow-md card-playful-shadow transition active:scale-95 cursor-pointer mt-2"
              >
                Confirm Free Trial Session
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
