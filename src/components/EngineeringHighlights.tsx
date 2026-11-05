import React from 'react';
import { Workflow, ShieldCheck, CheckCircle2, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const EngineeringHighlights: React.FC = () => {
  const { highlights } = PORTFOLIO_DATA;

  return (
    <section id="highlights" className="py-16 sm:py-20 px-6 sm:px-12 border-t border-black/[0.04]">
      {/* Centered Heading in Teal */}
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
        <div className="text-xs font-bold uppercase tracking-widest text-[#078f83] mb-2">
          Engineering Highlights
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#078f83] mb-3">
          Proven System Capabilities
        </h2>
        <p className="text-xs sm:text-sm text-[#53615e]">
          Key architectural patterns and core engineering achievements built across production-grade and research software projects.
        </p>
      </div>

      {/* Two Equal-Width Raised Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="neumorph-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Large decorative teal quote/code glyph */}
            <div className="text-[#078f83]/15 font-serif text-6xl font-black absolute top-4 right-6 select-none pointer-events-none">
              “
            </div>

            <div>
              {/* Header Icon & Tagline */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-white neumorph-circle flex items-center justify-center text-[#078f83]">
                  {item.iconName === 'Workflow' ? (
                    <Workflow className="w-5 h-5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#171c1b]">
                    {item.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#078f83]">
                    {item.tagline}
                  </div>
                </div>
              </div>

              {/* Bold Statement */}
              <p className="text-sm sm:text-base font-medium text-[#171c1b] leading-relaxed mb-4">
                "{item.statement}"
              </p>

              {/* Supporting Details */}
              <p className="text-xs sm:text-sm text-[#53615e] leading-relaxed">
                {item.details}
              </p>
            </div>

            {/* Bottom verification badge */}
            <div className="mt-6 pt-4 border-t border-black/[0.04] flex items-center gap-2 text-xs text-[#078f83] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Grounded in CV & Project Architecture</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
