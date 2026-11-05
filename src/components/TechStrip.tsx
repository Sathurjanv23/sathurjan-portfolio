import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const TechStrip: React.FC = () => {
  return (
    <section
      aria-label="Core Engineering Technologies"
      className="w-full py-7 px-6 sm:px-10 border-y border-black/[0.04] bg-[#f0f3f1]/40"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Subtle label */}
        <div className="text-[11px] font-bold tracking-widest text-[#798885] uppercase whitespace-nowrap">
          BUILDING WITH
        </div>

        {/* Desaturated Technology Marks */}
        <div className="w-full flex items-center justify-center md:justify-end gap-x-6 sm:gap-x-8 gap-y-3 flex-wrap">
          {PORTFOLIO_DATA.technologies.slice(0, 8).map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-1.5 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b0b8b5] group-hover:bg-[#078f83] transition-colors" />
              <span className="text-xs sm:text-[13px] font-semibold text-[#677774] group-hover:text-[#171c1b] transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
