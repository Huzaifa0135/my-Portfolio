import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_LINKS, PORTFOLIO_PROFILE } from '../../data/portfolio';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onDownloadCV: () => void;
}

export function Navbar({ theme, onToggleTheme, onDownloadCV }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/88 backdrop-blur-md border-b border-[var(--border-subtle)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] rounded-md px-1"
        >
          <span className="text-[var(--text-primary)]">
            {PORTFOLIO_PROFILE.brandFirst}{' '}
          </span>
          <span className="text-[#FF3B2F]">{PORTFOLIO_PROFILE.brandSecond}</span>
        </a>

        {/* Zone 2: Primary Nav Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 whitespace-nowrap shrink-0 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FF3B2F] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions & Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[#FF3B2F]/60 hover:text-[#FF3B2F] transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F]"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            onClick={onDownloadCV}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Download CV</span>
          </motion.button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B2F]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-md"
          >
            <nav
              aria-label="Mobile navigation"
              className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[var(--text-primary)] hover:bg-[var(--bg-surface)] hover:text-[#FF3B2F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDownloadCV();
                }}
                className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#FF3B2F] hover:bg-[#e62e22] rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download CV</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
