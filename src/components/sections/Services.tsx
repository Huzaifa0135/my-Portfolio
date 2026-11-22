import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  Code2,
  Gauge,
  Layers,
  Layout,
  Server,
  Wrench,
  X,
} from 'lucide-react';
import { SERVICES_LIST, type ServiceItem } from '../../data/portfolio';
import { fadeSlideUp, staggerContainer } from '../../lib/motionVariants';

const SERVICE_ICONS: Record<ServiceItem['iconName'], typeof Layers> = {
  Layers,
  Code2,
  Server,
  Layout,
  Gauge,
  Wrench,
};

interface ServicesProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export function Services({ onSelectServiceForContact }: ServicesProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (!activeService) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeService]);

  return (
    <section
      id="services"
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
            Capabilities
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance text-[var(--text-primary)]">
            My Services
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
            Full-cycle engineering and frontend implementation services designed
            to ship fast, maintainable web applications.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES_LIST.map((service) => {
            const IconComponent = SERVICE_ICONS[service.iconName];
            return (
              <motion.article
                key={service.id}
                variants={fadeSlideUp}
                className="group bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8 flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:border-[#FF3B2F]/60 hover:shadow-[0_18px_40px_-18px_rgba(255,59,47,0.35)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF3B2F]/12 text-[#FF3B2F] flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#FF3B2F] group-hover:text-white">
                  <IconComponent className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF3B2F] hover:text-[var(--text-primary)] transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] rounded-sm"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* Service Scope Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
            onClick={() => setActiveService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#FF3B2F]">
                    Typical Turnaround · {activeService.turnaround}
                  </p>
                  <h3
                    id="service-modal-title"
                    className="mt-1 font-display text-2xl font-bold text-[var(--text-primary)]"
                  >
                    {activeService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  aria-label="Close service details"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[#FF3B2F]/60 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <p className="mt-4 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {activeService.description}
              </p>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  Key Deliverables
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {activeService.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]"
                    >
                      <Check
                        className="w-4 h-4 text-[#FF3B2F] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="px-4 py-2.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = activeService.title;
                    setActiveService(null);
                    onSelectServiceForContact(title);
                  }}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                >
                  Inquire About {activeService.title}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
