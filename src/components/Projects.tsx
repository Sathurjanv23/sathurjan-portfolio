import React, { useState } from 'react';
import { ArrowUpRight, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { PORTFOLIO_DATA, Project } from '@/lib/portfolio-data';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-16 sm:py-24 px-6 sm:px-12 border-t border-black/[0.04]">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12 sm:mb-16">
        <div className="text-xs font-bold uppercase tracking-widest text-[#078f83] mb-2">
          Portfolio Evidence
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#078f83] mb-3">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-base text-[#53615e] max-w-2xl">
          Completed software engineering projects with modular backend architectures, rigorous access control, and applied AI systems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="neumorph-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              {/* High-Resolution Project Visual */}
              <div className="mb-5 h-44 w-full rounded-xl overflow-hidden relative group/img shadow-inner bg-[#eef2f1]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#078f83] uppercase tracking-wider shadow-xs">
                  {project.category}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
                  <span className="font-semibold drop-shadow-sm">{project.title}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[10px] font-bold tracking-wide shadow-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Completed</span>
                  </span>
                </div>
              </div>

              {/* Badges / Period & Role */}
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="font-semibold px-2.5 py-0.5 rounded-full bg-[#078f83]/10 text-[#078f83]">
                  {project.category}
                </span>
                <span className="text-[#798885] font-mono flex items-center gap-1 text-[11px]">
                  <Calendar className="w-3 h-3" />
                  {project.period}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-[#171c1b] mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-[#078f83] mb-2">
                {project.subtitle}
              </p>

              {/* Role badge */}
              <div className="mb-4">
                <span className="inline-block text-[11px] font-medium text-[#53615e] px-2 py-0.5 rounded-md bg-black/[0.03] border border-black/[0.04]">
                  Role: {project.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#53615e] leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-black/[0.04] text-[#53615e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Clean Structured Bottom Actions */}
            <div className="pt-4 border-t border-black/[0.05] grid grid-cols-1 min-[420px]:grid-cols-2 gap-2.5">
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white text-[#171c1b] text-xs font-semibold neumorph-pill hover:text-[#078f83] transition-colors whitespace-nowrap shadow-xs"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#078f83]" />
              </button>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white text-[#171c1b] hover:text-[#078f83] text-xs font-semibold neumorph-pill transition-colors whitespace-nowrap shadow-xs"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#078f83]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#798885]" />
                </a>
              ) : (
                <div />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
