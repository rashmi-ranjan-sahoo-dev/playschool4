import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { brandConfig } from '../config/brandConfig';

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100 text-xs md:text-sm transition-all overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-stretch">
        
        {/* Left: Signature Orange Slanted Polygon Ribbon (1-to-1 match with reference screenshot) */}
        <div className="bg-[#FC800A] text-white px-5 sm:px-8 py-2.5 flex items-center space-x-2 font-medium tracking-wide md:[clip-path:polygon(0_0,calc(100%-28px)_0,100%_100%,0_100%)] pr-8 sm:pr-14">
          <MapPin className="w-4 h-4 text-white shrink-0 fill-white/20" />
          <span className="truncate max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl text-xs sm:text-[13px]">
            {brandConfig.contact.mainCampusAddress}
          </span>
        </div>

        {/* Right: Phone, Divider & Email with clean dark typography */}
        <div className="flex items-center justify-center md:justify-end space-x-3 sm:space-x-5 text-gray-800 font-semibold px-4 sm:px-8 py-2 md:py-0">
          <a 
            href={`tel:${brandConfig.contact.primaryPhone.replace(/\s+/g, '')}`} 
            className="flex items-center space-x-2 text-[#171E45] hover:text-[#FC800A] transition text-xs sm:text-[13px]"
            title="Call Admissions Helpline"
          >
            <Phone className="w-3.5 h-3.5 fill-current text-[#171E45]" />
            <span>{brandConfig.contact.primaryPhone}</span>
          </a>

          <span className="text-gray-300 select-none">|</span>

          <a 
            href={`mailto:${brandConfig.contact.email}`} 
            className="flex items-center space-x-2 text-[#171E45] hover:text-[#FC800A] transition text-xs sm:text-[13px]"
            title="Email Us"
          >
            <Mail className="w-4 h-4 text-[#171E45]" />
            <span>{brandConfig.contact.email}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
