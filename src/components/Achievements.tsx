import React, { useState } from 'react';
import { Trophy, Award, CheckCircle, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const Achievements: React.FC = () => {
  const { achievements, certifications } = PORTFOLIO_DATA;
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <section id="achievements" className="py-16 sm:py-20 px-6 sm:px-12 border-t border-black/[0.04]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-[#078f83] mb-2">
          Recognitions & Credentials
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#078f83] mb-3">
          Achievements & Certifications
        </h2>
        <p className="text-sm sm:text-base text-[#53615e] max-w-2xl">
          Competitive algorithmic hackathons and verified technical credentials grounded directly in academic and professional milestones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Column 1: Competitive Achievements & Hackathons */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-full bg-white neumorph-circle flex items-center justify-center text-[#078f83]">
              <Trophy className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-[#171c1b]">
              Competitions & Hackathons
            </h3>
          </div>

          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="neumorph-card rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-[#171c1b]">
                      {item.title}
                    </h4>
                    {item.year && (
                      <span className="text-[11px] font-mono text-[#798885] px-2 py-0.5 rounded bg-black/[0.03] shrink-0">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-[#078f83] mb-2">
                    {item.organization} · <span className="font-normal text-[#53615e]">{item.badge}</span>
                  </p>

                  {item.description && (
                    <p className="text-xs text-[#677774] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Certifications & Coursework */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-full bg-white neumorph-circle flex items-center justify-center text-[#078f83]">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-bold text-[#171c1b]">
              Verified Certifications
            </h3>
          </div>

          <div className="space-y-4">
            {(showAllCerts ? certifications : certifications.slice(0, 3)).map((cert, index) => (
              <div
                key={index}
                className="neumorph-card rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-[#171c1b]">
                      {cert.title}
                    </h4>
                    {cert.year && (
                      <span className="text-[11px] font-mono text-[#798885] px-2 py-0.5 rounded bg-black/[0.03] shrink-0">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-[#078f83] mb-2">
                    {cert.organization} · <span className="font-normal text-[#53615e]">{cert.badge}</span>
                  </p>

                  {cert.description && (
                    <p className="text-xs text-[#677774] leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Toggle to show all certifications */}
            {certifications.length > 3 && (
              <button
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="w-full py-2.5 px-4 rounded-xl bg-white neumorph-pill text-xs font-semibold text-[#078f83] flex items-center justify-center gap-1.5 hover:bg-[#078f83]/5 transition-colors"
              >
                <span>{showAllCerts ? 'Show Fewer Certifications' : `Show All (${certifications.length}) Certifications`}</span>
                {showAllCerts ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
