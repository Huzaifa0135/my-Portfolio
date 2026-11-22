import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';
import { fadeSlideUp } from '../../lib/motionVariants';

interface ContactProps {
  prefilledSubject?: string;
}

export function Contact({ prefilledSubject = '' }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setMessage(
        `Hi Muhammad Huzaifa, I would like to discuss a ${prefilledSubject} project.`
      );
      setSubmitted(false);
    }
  }, [prefilledSubject]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete your name, email address, and project message.');
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailValid) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 280);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Direct Contact & Social Links */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold text-[#FF3B2F] tracking-wide">
              Get In Touch
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance text-[var(--text-primary)]">
              Let&apos;s build something dependable together
            </h2>
            <p className="mt-4 text-base text-[var(--text-muted)] leading-relaxed">
              Have a web portal, MERN stack application, or frontend build in
              mind? Send a message and I will respond promptly.
            </p>

            <div className="mt-8 space-y-5 pt-8 border-t border-[var(--border-subtle)]">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[#FF3B2F] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-[var(--text-muted)]">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${PORTFOLIO_PROFILE.email}`}
                    className="mt-0.5 block text-base font-semibold text-[var(--text-primary)] hover:text-[#FF3B2F] transition-colors"
                  >
                    {PORTFOLIO_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[#FF3B2F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-[var(--text-muted)]">
                    Location
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-[var(--text-primary)]">
                    {PORTFOLIO_PROFILE.location}
                  </p>
                </div>
              </div>

              {/* Social Links (GitHub, LinkedIn) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={PORTFOLIO_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-primary)] hover:border-[#FF3B2F] hover:text-[#FF3B2F] transition-colors whitespace-nowrap"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PORTFOLIO_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-primary)] hover:border-[#FF3B2F] hover:text-[#FF3B2F] transition-colors whitespace-nowrap"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form Card */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8"
          >
            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <CheckCircle2
                  className="w-12 h-12 text-[#FF3B2F]"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-display text-2xl font-bold text-[var(--text-primary)]">
                  Message received
                </h3>
                <p className="mt-2 max-w-md text-sm sm:text-base text-[var(--text-muted)]">
                  Thank you for reaching out. Muhammad Huzaifa will review your
                  inquiry and reply shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[#FF3B2F] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[#FF3B2F] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a brief overview of your project, timeline, and goals..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[#FF3B2F] transition-colors resize-y"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="text-sm font-medium text-[#FF3B2F]"
                  >
                    {error}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] disabled:opacity-60 rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
