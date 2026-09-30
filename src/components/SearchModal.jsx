import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, Calendar, MapPin } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function SearchModal({ isOpen, onClose, onSelectProgram }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchTerm.trim() === '' ? [] : [
    ...brandConfig.programs.filter(p => 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.age.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(item => ({ ...item, type: 'Program' })),
    ...brandConfig.events.filter(e =>
      e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.desc.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(item => ({ ...item, type: 'Event' })),
    ...brandConfig.contact.campuses.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.city.toLowerCase().includes(searchTerm.toLowerCase())
    ).map(item => ({ title: item.name, desc: item.city + ' Campus', type: 'Campus' }))
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-[#FCF7EE] rounded-3xl border-4 border-[#171E45] shadow-2xl max-w-xl w-full overflow-hidden relative card-playful-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b-2 border-orange-200 flex items-center space-x-3 bg-white">
          <Search className="w-5 h-5 text-[#FC800A] shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search programs (Playgroup, Nursery), events, fees, campuses..."
            className="w-full text-base font-medium outline-none bg-transparent text-[#171E45] placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-4 max-h-80 overflow-y-auto">
          {searchTerm.trim() === '' ? (
            <div className="text-center py-6 text-gray-500 text-xs">
              <p className="font-bold text-gray-700 mb-2">Popular Searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Playgroup Fees', 'Nursery Syllabus', 'CCTV App', 'Daycare Hours', 'Van GPS Route'].map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchTerm(s.split(' ')[0])}
                    className="bg-white border border-gray-300 px-3 py-1 rounded-full text-xs font-semibold hover:border-[#FC800A] transition cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              {results.map((r, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    onClose();
                  }}
                  className="p-3 bg-white rounded-xl border border-gray-200 hover:border-[#FC800A] flex items-center justify-between cursor-pointer transition"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#FC800A] uppercase block">
                      {r.type}
                    </span>
                    <h5 className="font-rowdies text-sm font-bold text-[#171E45]">
                      {r.title}
                    </h5>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {r.desc || r.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 text-xs">
              No matching results found for "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
