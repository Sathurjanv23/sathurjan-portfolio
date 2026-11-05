import React from 'react';

export const Header: React.FC = () => {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full pt-6 pb-4 px-6 sm:px-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.04] relative z-40">
      {/* Brand Wordmark */}
      <a
        href="#home"
        className="group flex items-center text-xl sm:text-2xl font-bold tracking-tight text-[#171c1b] transition-transform hover:scale-[1.02]"
        aria-label="Sathurjan Portfolio Home"
      >
        <span>Sathurjan</span>
        <span className="text-[#078f83] transition-colors group-hover:text-[#0b9b8d]">.</span>
      </a>

      {/* Direct Navigation Links */}
      <nav className="flex items-center gap-3 sm:gap-6 flex-wrap" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs sm:text-[13.5px] font-medium text-[#53615e] hover:text-[#078f83] transition-colors py-1 px-1.5 rounded-md hover:bg-black/[0.02]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
