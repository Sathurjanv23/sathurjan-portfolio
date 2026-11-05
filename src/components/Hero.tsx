import React from 'react';
import { ArrowDownRight, Download, Mail, Code2, Database, Terminal, Cpu, Layers, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 px-6 sm:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.05] shadow-xs text-[11px] sm:text-xs font-semibold tracking-wider text-[#078f83] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#078f83] animate-ping" />
            <span>{personal.eyebrow}</span>
          </div>

          {/* Heading with Teal highlight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#171c1b] leading-[1.15] mb-5">
            Hi, I'm <span className="text-[#078f83] underline decoration-[#078f83]/20 underline-offset-8">Sathurjan</span>.
          </h1>

          {/* Summary */}
          <p className="text-base sm:text-lg text-[#53615e] leading-relaxed max-w-xl mb-3">
            {personal.summary}
          </p>

          <p className="text-xs sm:text-sm text-[#798885] leading-relaxed max-w-lg mb-8">
            Specializing in Spring Boot, Next.js, TypeScript, REST APIs, and applied AI systems with robust access control.
          </p>

          {/* Pill CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#078f83] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#066f68] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={personal.cvUrl}
              download="Sathurjan_SE_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#171c1b] font-semibold text-xs sm:text-sm neumorph-pill hover:text-[#078f83] transition-all"
            >
              <Download className="w-4 h-4 text-[#078f83]" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Verified Social Profile Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#171c1b] hover:text-[#078f83] neumorph-pill text-xs font-semibold transition-all hover:scale-105"
              aria-label="GitHub profile"
              title="GitHub: Sathurjanv23"
            >
              <GithubIcon className="w-4 h-4 text-[#078f83]" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#798885]" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#171c1b] hover:text-[#078f83] neumorph-pill text-xs font-semibold transition-all hover:scale-105"
              aria-label="LinkedIn profile"
              title="LinkedIn: vijithakumarasena-sathurjan"
            >
              <LinkedinIcon className="w-4 h-4 text-[#078f83]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#798885]" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#171c1b] hover:text-[#078f83] neumorph-pill text-xs font-semibold transition-all hover:scale-105"
              aria-label="Email Sathurjan"
              title={`Email: ${personal.email}`}
            >
              <Mail className="w-4 h-4 text-[#078f83]" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Real Portrait & Concentric Arcs */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px] md:min-h-[420px] w-full max-w-full">
          {/* Faint Concentric Circles / Arcs (aria-hidden) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[430px] md:h-[430px] rounded-full border border-[#078f83]/15 animate-arc" />
            <div className="absolute w-[230px] h-[230px] sm:w-[290px] sm:h-[290px] md:w-[350px] md:h-[350px] rounded-full border border-black/[0.05]" />
            <div className="absolute w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] rounded-full border border-[#078f83]/20" />
          </div>

          {/* Central Neumorphic Portrait Container */}
          <div className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-white to-[#edf2f0] p-2 sm:p-2.5 shadow-[10px_15px_35px_rgba(15,42,39,0.18),-8px_-8px_24px_rgba(255,255,255,0.95)] border border-white/90 flex items-center justify-center group">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#078f83]/25 shadow-inner relative bg-[#e7eeec]">
              <img
                src="/images/sathurjan-hero.jpg"
                alt="Sathurjan Vijithakumarasena - Software Engineer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 inset-x-0 text-center">
                <span className="text-[9px] sm:text-[10px] font-semibold text-white/95 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-xs">
                  University of Moratuwa
                </span>
              </div>
            </div>
          </div>

          {/* Floating Teal Outline & Glyph Badges around perimeter */}
          <div
            className="absolute top-2 right-2 sm:top-5 sm:right-8 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white neumorph-pill flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#078f83]"
            title="React / Next.js"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>React</span>
          </div>

          <div
            className="absolute top-12 left-0 sm:top-14 sm:left-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white neumorph-pill flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#078f83]"
            title="Spring Boot Backend"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Spring Boot</span>
          </div>

          <div
            className="absolute bottom-4 left-1 sm:bottom-8 sm:left-8 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white neumorph-pill flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#078f83]"
            title="TypeScript Full-Stack"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>TypeScript</span>
          </div>

          <div
            className="absolute bottom-2 right-1 sm:bottom-6 sm:right-8 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white neumorph-pill flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#078f83]"
            title="Database & APIs"
          >
            <Database className="w-3.5 h-3.5" />
            <span>MongoDB</span>
          </div>

          <div
            className="hidden sm:flex absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-white/95 border border-black/[0.04] shadow-xs text-[10px] font-mono font-medium text-[#53615e] items-center gap-1"
          >
            <Cpu className="w-3 h-3 text-[#078f83]" />
            <span>AI / ML Pipelines</span>
          </div>
        </div>
      </div>
    </section>
  );
};
