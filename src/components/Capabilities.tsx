import React from 'react';
import { ArrowRight, Code2, ServerCog, Brain, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const Capabilities: React.FC = () => {
  const { capabilities } = PORTFOLIO_DATA;

  const getIcon = (id: string) => {
    switch (id) {
      case 'fullstack':
        return <Code2 className="w-6 h-6 text-[#078f83]" />;
      case 'backend':
        return <ServerCog className="w-6 h-6 text-[#078f83]" />;
      case 'ai-solutions':
        return <Brain className="w-6 h-6 text-[#078f83]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#078f83]" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-24 px-6 sm:px-12 relative border-t border-black/[0.04]">
      {/* Centered Structured Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="text-xs font-bold uppercase tracking-widest text-[#078f83] mb-2">
          ENGINEERING FOCUS
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#078f83] mb-3">
          What I Build
        </h2>
        <p className="text-sm sm:text-base text-[#53615e] leading-relaxed">
          I focus on reliable software systems that connect thoughtful, modern interfaces with secure, scalable backend services and applied machine learning models.
        </p>
      </div>

      {/* Balanced 3-Column Structured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {capabilities.map((cap, index) => (
          <div
            key={cap.id}
            className="neumorph-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-[#078f83]/30 transition-all"
          >
            <div>
              {/* Card Header with enhanced tech icons */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-[#edf6f4] border border-[#078f83]/20 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
                  {getIcon(cap.id)}
                </div>
                <span className="text-xs font-mono font-bold text-[#078f83] px-2.5 py-1 rounded-full bg-[#078f83]/10">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Summary */}
              <h3 className="text-lg font-bold text-[#171c1b] mb-2.5">
                {cap.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#53615e] leading-relaxed mb-5">
                {cap.summary}
              </p>

              {/* Key Bullet Highlights */}
              <ul className="space-y-2 mb-6">
                {cap.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs text-[#677774]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#078f83] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {cap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/90 border border-black/[0.04] text-[#4a5855]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-3 border-t border-black/[0.04]">
              <a
                href={cap.linkTarget}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white text-[#078f83] neumorph-pill hover:bg-[#078f83] hover:text-white transition-all shadow-xs"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
