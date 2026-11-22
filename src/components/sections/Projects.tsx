import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Building2,
  Code2,
  ExternalLink,
  Layers,
  MapPin,
  Search,
  Terminal,
  Wallet,
  X,
} from 'lucide-react';
import { FEATURED_PROJECTS, type ProjectItem } from '../../data/portfolio';
import { fadeSlideUp, staggerContainer } from '../../lib/motionVariants';
import { ResilientImage } from '../ui/ResilientImage';

type ProjectModalMode = 'demo' | 'code';

interface ActiveProjectModal {
  project: ProjectItem;
  mode: ProjectModalMode;
}

function ProjectCoverVisual({ project }: { project: ProjectItem }) {
  if (project.previewKind === 'image' && project.image) {
    return (
      <ResilientImage
        src={project.image}
        alt={`${project.title} showcase`}
        fallbackLabel={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    );
  }

  if (project.previewKind === 'easyproperty') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1b1414] via-[#141418] to-[#241616] p-5 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between text-xs text-neutral-300">
          <span className="font-display font-bold tracking-tight text-white flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#FF3B2F]" aria-hidden="true" />
            EasyProperty
          </span>
          <span className="text-[11px] text-neutral-400">
            Verified Listings
          </span>
        </div>

        <div className="rounded-xl bg-black/45 border border-white/10 p-3 flex items-center gap-2.5">
          <Search className="w-4 h-4 text-[#FF3B2F] shrink-0" aria-hidden="true" />
          <span className="text-xs text-neutral-300 truncate">
            Search Lahore · Islamabad · 3 Bed · PKR 2.5Cr
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-xs font-semibold text-white">DHA Phase 6</p>
            <p className="mt-1 text-[11px] text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FF3B2F]" aria-hidden="true" />
              1 Kanal Villa
            </p>
            <p className="mt-2 text-xs font-bold text-[#FF3B2F] tabular-nums">
              PKR 6.4 Cr
            </p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-3">
            <p className="text-xs font-semibold text-white">Bahria Enclave</p>
            <p className="mt-1 text-[11px] text-neutral-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#FF3B2F]" aria-hidden="true" />
              10 Marla Modern
            </p>
            <p className="mt-2 text-xs font-bold text-[#FF3B2F] tabular-nums">
              PKR 3.8 Cr
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewKind === 'portfolio') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#121212] via-[#1c1414] to-[#281514] p-5 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-bold text-white">
            Huzaifa <span className="text-[#FF3B2F]">Dev</span>
          </span>
          <span className="text-[11px] text-neutral-400">
            Dark / Light System
          </span>
        </div>

        <div className="space-y-2">
          <p className="font-display text-lg font-bold leading-tight text-white">
            HI I AM <span className="text-[#FF3B2F]">MUHAMMAD HUZAIFA</span>
          </p>
          <p className="text-xs text-neutral-300">
            Full Stack Developer · MERN Stack
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1.5 rounded-lg bg-[#FF3B2F] text-[11px] font-semibold text-white">
            Hire Me
          </span>
          <span className="px-3 py-1.5 rounded-lg border border-[#FF3B2F] text-[11px] font-semibold text-[#FF3B2F]">
            View Work
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#0d0d10] p-5 flex flex-col justify-between font-mono select-none">
      <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-white/10 pb-2.5">
        <span className="flex items-center gap-1.5 text-neutral-200 font-semibold">
          <Terminal className="w-3.5 h-3.5 text-[#FF3B2F]" aria-hidden="true" />
          easypaisa_cli.exe
        </span>
        <span>C++ / OOP</span>
      </div>

      <div className="space-y-1.5 text-xs leading-relaxed text-neutral-300">
        <p className="text-[#FF3B2F]">&gt; EasyPaisa Account Menu</p>
        <p>[1] Send Money &nbsp; [2] Mobile Load</p>
        <p>[3] Bill Payment &nbsp;[4] Balance Inquiry</p>
        <p className="text-emerald-400 pt-1">
          TXN #8421 Confirmed · Rs. 4,500 Sent
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-neutral-400">
        <span className="flex items-center gap-1.5">
          <Wallet className="w-3.5 h-3.5 text-[#FF3B2F]" aria-hidden="true" />
          Wallet Balance
        </span>
        <span className="text-white font-semibold tabular-nums">
          PKR 28,450.00
        </span>
      </div>
    </div>
  );
}

export function Projects() {
  const [modalState, setModalState] = useState<ActiveProjectModal | null>(null);

  useEffect(() => {
    if (!modalState) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalState(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalState]);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold text-[#FF3B2F] tracking-wide">
            Selected Work
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance text-[var(--text-primary)]">
            FEATURED PROJECTS
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
            Real-world web portals, MERN platforms, and object-oriented software
            built with clean architecture and responsive interfaces.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeSlideUp}
              className="group bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:border-[#FF3B2F]/60 hover:shadow-[0_18px_40px_-18px_rgba(255,59,47,0.35)]"
            >
              {/* Project Preview Media */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)]">
                <ProjectCoverVisual project={project} />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-medium text-[var(--text-muted)]">
                  <span>{project.category}</span>
                  <span className="mx-1.5" aria-hidden="true">
                    ·
                  </span>
                  <span className="tabular-nums">{project.year}</span>
                </p>

                <h3 className="mt-2 font-display text-xl font-bold text-[var(--text-primary)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Accent Tech Stack Line */}
                <p className="mt-4 text-xs font-semibold text-[#FF3B2F] tracking-wide">
                  {project.techStack.join(' · ')}
                </p>

                {/* Bottom Action Buttons pushed down via mt-auto */}
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setModalState({ project, mode: 'code' })}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[#FF3B2F] hover:text-[#FF3B2F] rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    <Code2 className="w-4 h-4" aria-hidden="true" />
                    <span>Code</span>
                  </motion.button>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setModalState({ project, mode: 'demo' })}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Project Lightbox / Architecture Modal */}
      <AnimatePresence>
        {modalState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setModalState(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] overflow-hidden shadow-2xl"
            >
              <div className="aspect-[16/9] w-full bg-[var(--bg-surface-elevated)] relative">
                <ProjectCoverVisual project={modalState.project} />
                <button
                  type="button"
                  onClick={() => setModalState(null)}
                  aria-label="Close project preview"
                  className="absolute top-4 right-4 w-10 h-10 inline-flex items-center justify-center rounded-lg bg-black/75 text-white hover:bg-[#FF3B2F] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-[var(--text-muted)]">
                      {modalState.project.category} · {modalState.project.year}
                    </p>
                    <h3
                      id="project-modal-title"
                      className="mt-1 font-display text-2xl font-bold text-[var(--text-primary)]"
                    >
                      {modalState.project.title}
                    </h3>
                  </div>

                  {/* Mode Switcher */}
                  <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <button
                      type="button"
                      onClick={() =>
                        setModalState({ ...modalState, mode: 'demo' })
                      }
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        modalState.mode === 'demo'
                          ? 'bg-[#FF3B2F] text-white'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setModalState({ ...modalState, mode: 'code' })
                      }
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                        modalState.mode === 'code'
                          ? 'bg-[#FF3B2F] text-white'
                          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      Architecture
                    </button>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {modalState.mode === 'demo'
                    ? modalState.project.description
                    : modalState.project.codeSummary}
                </p>

                <div className="mt-5 pt-5 border-t border-[var(--border-subtle)]">
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2">
                    <Layers
                      className="w-4 h-4 text-[#FF3B2F]"
                      aria-hidden="true"
                    />
                    <span>Engineering Highlights</span>
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {modalState.project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-[var(--text-muted)] flex items-start gap-2"
                      >
                        <span
                          aria-hidden="true"
                          className="text-[#FF3B2F] font-bold"
                        >
                          ·
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs font-semibold text-[#FF3B2F]">
                    {modalState.project.techStack.join(' · ')}
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalState(null)}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
