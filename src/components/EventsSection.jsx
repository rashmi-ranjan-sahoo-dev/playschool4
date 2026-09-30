import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Bell } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function EventsSection({ onOpenTrialModal }) {
  return (
    <section id="events" className="pt-6 md:pt-8 pb-16 md:pb-24 bg-[#FCF7EE] relative overflow-hidden border-t border-orange-200/50">
      
      {/* Background doodle */}
      <div className="absolute top-10 left-8 text-4xl opacity-30 select-none pointer-events-none">🎪</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Strictly matching Reference Template Section 14) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-block bg-orange-100 border border-orange-300 text-[#FC800A] font-fredoka font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-3 shadow-sm">
              Photo gallery
            </div>
            <h2 className="font-rowdies text-3xl sm:text-4xl md:text-5xl font-bold text-[#171E45] leading-tight">
              Ideal Kids Special Events
            </h2>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#171E45] hover:text-[#FC800A] transition group cursor-pointer"
          >
            <span className="underline underline-offset-4">Register for Upcoming Event</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brandConfig.events.map((ev) => (
            <div
              key={ev.id}
              className="bg-white rounded-3xl overflow-hidden border-3 border-[#171E45] card-playful-shadow flex flex-col sm:flex-row group hover:border-[#FC800A] transition-all duration-300"
            >
              {/* Event Image + Date Badge */}
              <div className="relative sm:w-2/5 h-48 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Date Stamp Badge (Signature A for Apple layout) */}
                <div className="absolute top-3 left-3 bg-[#FC800A] text-white font-rowdies text-center px-3 py-1.5 rounded-xl shadow-md border border-white">
                  <span className="block text-xs font-bold leading-none">{ev.date.split(' ')[1]}</span>
                  <span className="block text-lg font-bold leading-tight">{ev.date.split(' ')[0]}</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#FC800A] uppercase tracking-wider mb-1">
                    {ev.category}
                  </span>

                  <h3 className="font-rowdies text-lg sm:text-xl font-bold text-[#171E45] group-hover:text-[#FC800A] transition-colors mb-2 leading-snug">
                    {ev.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FAB823]" />
                      <span>{ev.time}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#5AAD65]" />
                      <span>{ev.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                    {ev.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-4">
                  <span className="text-[11px] font-semibold text-emerald-600 flex items-center space-x-1">
                    <Bell className="w-3 h-3" />
                    <span>Open for Parents & Kids</span>
                  </span>

                  <button
                    onClick={onOpenTrialModal}
                    className="inline-flex items-center space-x-1 bg-[#171E45] hover:bg-[#FC800A] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    <span>RSVP Pass</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
