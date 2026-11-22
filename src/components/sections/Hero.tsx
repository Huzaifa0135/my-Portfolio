import { motion } from 'motion/react';
import { ArrowRight, Layers, Server } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';
import { EASE_OUT_EXPO, fadeSlideUp } from '../../lib/motionVariants';
import { ResilientImage } from '../ui/ResilientImage';

export function Hero() {
  const typedRole = useTypewriter(PORTFOLIO_PROFILE.roles, {
    typeSpeed: 72,
    deleteSpeed: 40,
    pauseMs: 1500,
  });

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-14">
          {/* Left Column on Desktop (50%), Bottom on Mobile */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 order-2 md:order-1 flex flex-col items-start"
          >
            <p className="text-sm font-medium text-[var(--text-muted)] mb-4 tracking-wide">
              <span>{PORTFOLIO_PROFILE.location}</span>
              <span className="mx-2 text-[#FF3B2F]" aria-hidden="true">
                ·
              </span>
              <span>{PORTFOLIO_PROFILE.availability}</span>
            </p>

            <h1 className="font-display font-bold tracking-tight text-balance text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.08] text-[var(--text-primary)]">
              HI I AM{' '}
              <span className="text-[#FF3B2F] block sm:inline">
                MUHAMMAD HUZAIFA
              </span>
            </h1>

            {/* Typing Effect Row */}
            <div
              className="mt-5 flex items-center min-h-[2.25rem] text-xl sm:text-2xl font-display font-semibold text-[var(--text-primary)]"
              aria-live="polite"
            >
              <span className="text-[var(--text-muted)] mr-2">I am a</span>
              <span className="text-[var(--text-primary)]">{typedRole}</span>
              <span
                aria-hidden="true"
                className="inline-block w-[3px] h-[1.15em] ml-1 bg-[#FF3B2F] animate-cursor-blink"
              />
            </div>

            <p className="mt-6 text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
              {PORTFOLIO_PROFILE.heroBio}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FF3B2F] border border-[#FF3B2F] bg-transparent hover:bg-[#FF3B2F]/10 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                <span>View Work</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column on Desktop (50%), TOP on Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
            className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-68 h-68 sm:w-80 sm:h-80 lg:w-[24rem] lg:h-[24rem] my-4 md:my-0 flex items-center justify-center">
              {/* Soft Accent Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full bg-[#FF3B2F]/25 blur-3xl pointer-events-none"
              />

              {/* Circular Portrait Frame */}
              <div className="relative w-full h-full rounded-full p-2 border border-[#FF3B2F]/50 bg-[var(--bg-surface)] shadow-[0_0_70px_-14px_rgba(255,59,47,0.5)]">
                <div className="w-full h-full rounded-full overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]">
                  <ResilientImage
                    src={PORTFOLIO_PROFILE.portraitImage}
                    alt="Portrait of Muhammad Huzaifa, Full Stack and MERN Stack Developer"
                    fallbackLabel="Muhammad Huzaifa"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating Badge 1 (Top Left): MERN Stack Developer */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-3 left-0 sm:top-4 sm:-left-6 z-10 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-lg"
              >
                <span className="w-8 h-8 rounded-lg bg-[#FF3B2F]/15 text-[#FF3B2F] flex items-center justify-center shrink-0">
                  <Server className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-[var(--text-primary)] whitespace-nowrap">
                  MERN Stack Developer
                </span>
              </motion.div>

              {/* Floating Badge 2 (Bottom Right): Full Stack Developer */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
                className="absolute -bottom-3 right-0 sm:bottom-4 sm:-right-6 z-10 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-lg"
              >
                <span className="w-8 h-8 rounded-lg bg-[#FF3B2F]/15 text-[#FF3B2F] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-[var(--text-primary)] whitespace-nowrap">
                  Full Stack Developer
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
