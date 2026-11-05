import React, { useEffect } from 'react';
import { X, Calendar, Briefcase, CheckCircle, Server, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { Project } from '@/lib/portfolio-data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#f6f7f6] rounded-2xl shadow-2xl border border-white/60 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="p-6 sm:p-7 border-b border-black/[0.06] flex items-start justify-between bg-white/70">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#078f83]/10 text-[#078f83] text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.period}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Completed</span>
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#171c1b]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-[#53615e] mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#53615e] hover:text-[#078f83] neumorph-circle"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {/* Project Image Banner */}
          {project.image && (
            <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden shadow-inner relative bg-[#eef2f1]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Project Context & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="p-3.5 rounded-xl bg-white neumorph-inset text-xs text-[#53615e] flex items-center gap-2.5">
              <Briefcase className="w-4 h-4 text-[#078f83] shrink-0" />
              <div>
                <span className="font-semibold text-[#171c1b]">Context: </span>
                {project.context}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white neumorph-inset text-xs text-[#53615e] flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#078f83] shrink-0" />
              <div>
                <span className="font-semibold text-[#171c1b]">Role: </span>
                {project.role}
              </div>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#078f83]">
              Overview & Architecture
            </h3>
            {project.longDescription.map((desc, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-[#53615e] leading-relaxed">
                {desc}
              </p>
            ))}
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#078f83] mb-3">
              Key Engineering Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-black/[0.04] text-xs text-[#4a5855]"
                >
                  <CheckCircle className="w-4 h-4 text-[#078f83] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#078f83] mb-3">
              Technical Architecture
            </h3>
            <div className="space-y-2">
              {project.architecture.map((arch, aIdx) => (
                <div
                  key={aIdx}
                  className="flex items-center gap-2 text-xs font-mono text-[#53615e] bg-white/70 px-3 py-2 rounded-md border border-black/[0.03]"
                >
                  <Server className="w-3.5 h-3.5 text-[#078f83] shrink-0" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#078f83] mb-2.5">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white neumorph-pill text-[#171c1b]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with GitHub Repo Link */}
        <div className="p-4 sm:p-5 border-t border-black/[0.06] bg-white/70 flex flex-wrap items-center justify-between gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#078f83] text-white text-xs font-semibold hover:bg-[#066f68] transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/75" />
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-[#171c1b] bg-white rounded-full neumorph-pill hover:text-[#078f83] transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
