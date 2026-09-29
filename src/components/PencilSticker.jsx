import React from 'react';

export default function PencilSticker({ className = "w-10 h-28" }) {
  return (
    <div className={`relative select-none pointer-events-none filter drop-shadow-md ${className}`}>
      <svg
        viewBox="0 0 48 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform rotate-3"
      >
        {/* Pink Eraser */}
        <path
          d="M 12 24 C 12 13 36 13 36 24 L 36 32 L 12 32 Z"
          fill="#FB7185"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Eraser highlight */}
        <path
          d="M 16 19 C 18 16 23 16 25 17"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Metal Ferrule (Collar) */}
        <rect
          x="12"
          y="32"
          width="24"
          height="14"
          fill="#E2E8F0"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Metal Ferrule Grooves */}
        <line x1="12" y1="36.5" x2="36" y2="36.5" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="12" y1="41.5" x2="36" y2="41.5" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Yellow Wooden Pencil Body */}
        {/* Left facet (shade) */}
        <path
          d="M 12 46 L 20 46 L 20 102 L 12 102 Z"
          fill="#EAB308"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Center facet (bright) */}
        <path
          d="M 20 46 L 28 46 L 28 102 L 20 102 Z"
          fill="#FDE047"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Right facet (warm tone) */}
        <path
          d="M 28 46 L 36 46 L 36 102 L 28 102 Z"
          fill="#CA8A04"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Sharpened Wood Section */}
        <path
          d="M 12 102 Q 16 104 20 102 Q 24 104 28 102 Q 32 104 36 102 L 24 128 Z"
          fill="#FED7AA"
          stroke="#1E293B"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Graphite Tip */}
        <path
          d="M 21 121 L 27 121 L 24 130 Z"
          fill="#1E293B"
          stroke="#1E293B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
