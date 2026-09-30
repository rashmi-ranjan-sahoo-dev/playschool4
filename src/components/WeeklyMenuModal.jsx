import React, { useEffect } from 'react';
import { X, Utensils, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function WeeklyMenuModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#FCF7EE] rounded-3xl border-4 border-[#171E45] shadow-2xl max-w-2xl w-full overflow-hidden relative card-playful-shadow max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border-2 border-[#171E45] flex items-center justify-center text-[#171E45] hover:bg-[#FC800A] hover:text-white transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {/* Header */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center space-x-1.5 bg-amber-100 text-[#FC800A] border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold mb-2">
              <Utensils className="w-3.5 h-3.5" />
              <span>100% In-House Fresh Hygiene Kitchen</span>
            </span>
            <h3 className="font-rowdies text-2xl sm:text-3xl font-bold text-[#171E45]">
              Weekly Nutritious Sattvic Menu
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-lg mx-auto">
              Prepared daily with pure cow's desi ghee, zero preservatives, low refined sugar, and organic pulses.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-gray-700 mb-6 bg-white p-3 rounded-2xl border border-orange-200">
            <div className="flex items-center justify-center space-x-1 text-[#5AAD65]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>No Junk / Packaged Food</span>
            </div>
            <div className="flex items-center justify-center space-x-1 text-[#FC800A]">
              <Heart className="w-3.5 h-3.5" />
              <span>Warm Desi Ghee Khichdi</span>
            </div>
            <div className="flex items-center justify-center space-x-1 text-[#171E45]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RO Purified Drinking Water</span>
            </div>
          </div>

          {/* Days Schedule */}
          <div className="space-y-3">
            {brandConfig.weeklyMenu.map((m, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 rounded-2xl border-2 border-gray-200 hover:border-[#FC800A] transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-rowdies text-sm font-bold text-[#FC800A]">
                    {m.day}
                  </span>
                  <span className="text-[10px] bg-orange-100 text-orange-950 font-bold px-2 py-0.5 rounded-md">
                    Fresh & Wholesome
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-700">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-bold uppercase">Breakfast (9:30 AM)</span>
                    <span className="font-semibold">{m.breakfast}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block font-bold uppercase">Hot Lunch (12:30 PM)</span>
                    <span className="font-semibold">{m.lunch}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block font-bold uppercase">Evening Snack (4:00 PM)</span>
                    <span className="font-semibold">{m.snack}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="bg-[#171E45] hover:bg-[#FC800A] text-white px-8 py-2.5 rounded-xl font-rowdies text-xs shadow-md transition cursor-pointer"
            >
              Close Menu
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
