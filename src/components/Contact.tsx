import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [userMessage, setUserMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userMessage.trim()) return;

    // Open direct prefilled mailto
    const subject = encodeURIComponent('Collaboration / Opportunity Inquiry - Portfolio');
    const body = encodeURIComponent(
      `Hi Sathurjan,\n\n${userMessage.trim()}\n\nBest regards.`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="pt-16 pb-16 px-4 sm:px-10 relative">
      {/* Wide Teal Rounded Card */}
      <div className="relative rounded-3xl bg-[#078f83] text-white p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(7,143,131,0.35)] overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold mb-4 tracking-wider uppercase">
            <span>GET IN TOUCH</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Let's build something meaningful together.
          </h2>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8 max-w-lg">
            Have a software engineering opportunity, full-stack project, or research collaboration in mind? I'd love to connect.
          </p>

          {/* Functional Email Input Form */}
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white rounded-full p-1.5 shadow-xl flex items-center mb-8 border border-white/40"
          >
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Your email or quick message..."
              className="flex-1 px-4 py-2 text-xs sm:text-sm text-[#171c1b] placeholder-[#798885] bg-transparent focus:outline-none"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#078f83] text-white text-xs sm:text-sm font-semibold hover:bg-[#066f68] transition-colors shrink-0 shadow-sm"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {submitted && (
            <div className="flex items-center gap-2 text-xs text-white/95 bg-white/20 px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Opening your default mail client with prefilled details!</span>
            </div>
          )}

          {/* Direct Verified Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#078f83] text-xs font-semibold hover:bg-white/95 transition-all hover:scale-105 shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-[#078f83]" />
              <span>github.com/Sathurjanv23</span>
              <ExternalLink className="w-3 h-3 text-[#078f83]/70" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 text-white border border-white/25 text-xs font-semibold hover:bg-white/25 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{personal.email}</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 text-white border border-white/25 text-xs font-semibold hover:bg-white/25 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
