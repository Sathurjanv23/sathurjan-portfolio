import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TechStrip } from '@/components/TechStrip';
import { Capabilities } from '@/components/Capabilities';
import { Projects } from '@/components/Projects';
import { EngineeringHighlights } from '@/components/EngineeringHighlights';
import { AboutEducation } from '@/components/AboutEducation';
import { Skills } from '@/components/Skills';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#078f83] via-[#078f83] via-[580px] to-[#eef2f1] to-[580px] py-4 sm:py-8 md:py-12 px-2 sm:px-6 lg:px-10 flex flex-col items-center">
      {/* Floating Off-White Main Shell */}
      <main className="w-full max-w-[1120px] bg-[#f6f7f6] rounded-2xl sm:rounded-3xl shadow-[0_25px_65px_rgba(7,60,55,0.22)] border border-white/70 overflow-hidden flex flex-col">
        {/* 1. Header & Navigation */}
        <Header />

        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Technology Credibility Strip */}
        <TechStrip />

        {/* 4. What I Build (3 Staggered Capability Cards) */}
        <Capabilities />

        {/* 5. Featured Projects (CRMS, MedAssist AI X, EduSmart AI) */}
        <Projects />

        {/* 6. Engineering Highlights (2 Raised Proof Cards) */}
        <EngineeringHighlights />

        {/* 7. About & Education */}
        <AboutEducation />

        {/* 8. Technical Skills Toolbox */}
        <Skills />

        {/* 9. Achievements & Certifications */}
        <Achievements />

        {/* 10. Contact Closing CTA */}
        <Contact />

        {/* 11. Footer */}
        <Footer />
      </main>
    </div>
  );
}
