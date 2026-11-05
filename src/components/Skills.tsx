import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 sm:py-20 px-6 sm:px-12 border-t border-black/[0.04]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-[#078f83] mb-2">
          Engineering Toolbox
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#078f83] mb-3">
          Technical Skills
        </h2>
        <p className="text-sm sm:text-base text-[#53615e] max-w-2xl">
          Organized by domain, reflecting practical capabilities applied in production-ready projects and university software curricula.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category) => (
          <div
            key={category.category}
            className="neumorph-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#078f83]" />
                <h3 className="text-sm font-bold text-[#171c1b]">
                  {category.category}
                </h3>
              </div>

              <p className="text-[11px] text-[#798885] mb-4">
                {category.description}
              </p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-white border border-black/[0.04] text-[#42504d] shadow-2xs hover:border-[#078f83]/40 hover:text-[#078f83] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
