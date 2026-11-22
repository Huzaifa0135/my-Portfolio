import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { ABOUT_STATS, PORTFOLIO_PROFILE } from '../../data/portfolio';
import { fadeSlideUp, staggerContainer } from '../../lib/motionVariants';

interface AboutProps {
  onDownloadCV: () => void;
}

export function About({ onDownloadCV }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: 2x2 Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {ABOUT_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeSlideUp}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#FF3B2F]/50"
              >
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-bold tracking-tight tabular-nums text-[#FF3B2F]">
                    {stat.value}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: About Me Content & Personal Info */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <p className="text-sm font-semibold text-[#FF3B2F] tracking-wide">
              Introduction
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance text-[var(--text-primary)]">
              About Me
            </h2>

            <p className="mt-6 text-base text-[var(--text-muted)] leading-relaxed">
              {PORTFOLIO_PROFILE.aboutBio}
            </p>
            <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
              {PORTFOLIO_PROFILE.aboutSecondaryBio}
            </p>

            {/* Personal Info List */}
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--border-subtle)]">
              <div>
                <dt className="text-xs font-medium text-[var(--text-muted)]">
                  Name
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                  {PORTFOLIO_PROFILE.fullName}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[var(--text-muted)]">
                  Email
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                  <a
                    href={`mailto:${PORTFOLIO_PROFILE.email}`}
                    className="hover:text-[#FF3B2F] transition-colors"
                  >
                    {PORTFOLIO_PROFILE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[var(--text-muted)]">
                  Location
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                  {PORTFOLIO_PROFILE.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[var(--text-muted)]">
                  Focus
                </dt>
                <dd className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                  MERN Stack &amp; UI Systems
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                onClick={onDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
