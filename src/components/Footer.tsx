import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-10 pb-10 px-6 sm:px-12 border-t border-black/[0.05] bg-[#f0f3f1]/40">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Brand & Subtitle */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#171c1b] mb-1.5 transition-transform hover:scale-105"
        >
          Sathurjan<span className="text-[#078f83]">.</span>
        </a>

        <p className="text-xs sm:text-[13px] text-[#53615e] font-medium mb-7">
          Full-Stack Software Engineer · BSc (Hons) in IT, University of Moratuwa
        </p>

        {/* Social Icons & Back to Top in One Cohesive Group */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#53615e] hover:text-[#078f83] neumorph-circle hover:scale-110 transition-all shadow-xs"
            aria-label="GitHub Profile"
            title="GitHub: Sathurjanv23"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#53615e] hover:text-[#078f83] neumorph-circle hover:scale-110 transition-all shadow-xs"
            aria-label="LinkedIn Profile"
            title="LinkedIn: vijithakumarasena-sathurjan"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#53615e] hover:text-[#078f83] neumorph-circle hover:scale-110 transition-all shadow-xs"
            aria-label="Send Email"
            title={`Email: ${personal.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="h-10 px-4 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#078f83] neumorph-pill hover:scale-105 transition-all shadow-xs ml-1"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full pt-6 border-t border-black/[0.05] text-[11px] text-[#798885] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Sathurjan Vijithakumarasena. All rights reserved.</span>
          <span className="font-mono text-[10px]">Sri Lanka · Built with React & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};
