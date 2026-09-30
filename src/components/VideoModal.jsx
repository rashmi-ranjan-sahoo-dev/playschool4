import React, { useEffect } from 'react';
import { X, Play, Sparkles } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function VideoModal({ isOpen, onClose }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#171E45] rounded-3xl border-4 border-[#FC800A] shadow-2xl max-w-3xl w-full overflow-hidden relative card-playful-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-[#171E45] flex items-center justify-center hover:bg-[#FC800A] hover:text-white transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player / Mock Virtual Tour Player */}
        <div className="p-4 sm:p-6 text-white">
          <div className="text-center mb-4">
            <h3 className="font-rowdies text-xl sm:text-2xl font-bold">
              Virtual Campus Tour • {brandConfig.brandName}
            </h3>
            <p className="text-xs text-orange-200">
              Take an interactive peek into our Montessori labs, splash pool, and cheerful classrooms!
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border-2 border-white/20 flex items-center justify-center">
            {/* Embedded video or interactive preview */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/36YnV9STBqc?autoplay=1&mute=1&controls=1" 
              title="Preschool Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-4 flex justify-between items-center text-xs text-gray-300">
            <span>📍 Filmed at our Flagship Campus</span>
            <span className="text-[#FAB823] font-semibold">100% Safe • Biometric Security</span>
          </div>
        </div>

      </div>
    </div>
  );
}
