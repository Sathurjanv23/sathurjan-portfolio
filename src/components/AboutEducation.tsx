import React from 'react';
import { GraduationCap, Briefcase, MapPin, Mail, Award, BookOpen, CheckCircle, Globe, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

export const AboutEducation: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-16 sm:py-20 px-6 sm:px-12 border-t border-black/[0.04]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="text-xs font-bold uppercase tracking-widest text-[#078f83] mb-2">
          Background & Journey
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#078f83] mb-3">
          About & Education
        </h2>
        <p className="text-sm sm:text-base text-[#53615e] max-w-2xl">
          An engineering-first perspective grounded in solid academic foundations at Sri Lanka's leading technology institution, hands-on enterprise projects, and modern software engineering practices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Narrative, Coursework & Languages */}
        <div className="lg:col-span-7 neumorph-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header Profile Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden neumorph-circle p-1 bg-white shrink-0">
                <img
                  src="/images/sathurjan-fit-expo.jpg"
                  alt="Sathurjan Vijithakumarasena at FIT EXPO"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#171c1b]">
                  {personal.name}
                </h3>
                <p className="text-xs font-semibold text-[#078f83]">
                  Undergraduate · Software Engineer · Full Stack Developer
                </p>
                <p className="text-[11px] text-[#798885] mt-0.5">
                  Faculty of Information Technology · University of Moratuwa
                </p>
              </div>
            </div>

            {/* Professional Summary from CV */}
            <p className="text-sm text-[#53615e] leading-relaxed mb-4">
              {personal.summary}
            </p>

            <p className="text-sm text-[#53615e] leading-relaxed mb-6">
              {personal.extendedSummary}
            </p>

            {/* Relevant Coursework */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#078f83] mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Relevant Coursework</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {personal.education.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-black/[0.03] text-xs font-medium text-[#4a5855]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#078f83] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#078f83] mb-2.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Languages</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {personal.spokenLanguages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white neumorph-pill text-xs font-medium text-[#171c1b]"
                  >
                    <span className="font-semibold text-[#078f83]">{lang.language}:</span> {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-black/[0.04] flex flex-wrap items-center gap-4 text-xs text-[#798885]">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#078f83]" />
              <span>{personal.location}</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-[#078f83]" />
              <span>{personal.email}</span>
            </span>
          </div>
        </div>

        {/* Right Column: Timeline Cards (Education & Project Experience) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Education Card */}
          <div className="neumorph-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white neumorph-circle flex items-center justify-center text-[#078f83]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#078f83]">
                  Higher Education
                </span>
                <h4 className="text-base font-bold text-[#171c1b]">
                  {personal.education.institution}
                </h4>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#171c1b] mb-1">
              {personal.education.degree}
            </p>
            <p className="text-xs text-[#798885] font-mono mb-3">
              {personal.education.period} · {personal.education.location}
            </p>
            <p className="text-xs text-[#53615e] leading-relaxed mb-3">
              {personal.education.note}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {personal.education.focusAreas.map((f, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-black/[0.04] text-[#53615e]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Project Experience Card (Accurately mirrors CV) */}
          <div className="neumorph-card rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white neumorph-circle flex items-center justify-center text-[#078f83]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#078f83]">
                  Experience
                </span>
                <h4 className="text-base font-bold text-[#171c1b]">
                  Software Engineering Project – CRMS
                </h4>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#078f83] mb-1">
              Cognitx Company / University Software Engineering Project
            </p>
            <p className="text-xs text-[#798885] font-mono mb-3">
              2025 – 2026 · Sri Lanka
            </p>

            <ul className="space-y-1.5 text-xs text-[#53615e]">
              <li className="flex items-start gap-1.5">
                <span className="text-[#078f83] font-bold">•</span>
                <span>Developed full-stack Change Request Management System (CRMS) for software project requests, requirements, and tasks.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#078f83] font-bold">•</span>
                <span>Designed enterprise workflows with RBAC and JWT authentication for Client, Company, and Admin users.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#078f83] font-bold">•</span>
                <span>Built PRD management, Kanban board, task tracking, and project workflow functionality.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#078f83] font-bold">•</span>
                <span>RESTful Spring Boot backend services integrated with Next.js, React, and MongoDB persistent storage.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
