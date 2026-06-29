import React from 'react';
import { Star, Sparkles, Smile } from 'lucide-react';

export const TopStrip: React.FC = () => {
  return (
    <div className="w-full bg-[#FFD8E8] text-[#252525] py-2 px-4 text-xs font-semibold select-none z-40 border-b border-[#F56FA1]/10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12">
        <div className="flex items-center gap-1.5 transition-all hover:scale-105">
          <Sparkles size={13} className="text-[#F56FA1] fill-[#F56FA1]" />
          <span>Same Day Decoration Available</span>
        </div>
        <div className="h-3 w-[1px] bg-[#252525]/15 hidden md:block" />
        <div className="flex items-center gap-1.5 transition-all hover:scale-105">
          <Star size={13} className="text-[#D8A84F] fill-[#D8A84F]" />
          <span>4.9 Google Rated (1200+ Reviews)</span>
        </div>
        <div className="h-3 w-[1px] bg-[#252525]/15 hidden md:block" />
        <div className="flex items-center gap-1.5 transition-all hover:scale-105">
          <Smile size={13} className="text-[#F56FA1] fill-[#F56FA1]" />
          <span>3000+ Happy Celebrations in Bangalore</span>
        </div>
      </div>
    </div>
  );
};
