import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { triggerCVDownload } from './data/portfolio';

type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'huzaifa-theme';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      return saved === 'light' ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  const [prefilledSubject, setPrefilledSubject] = useState('');
  const [cvToastVisible, setCvToastVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleDownloadCV = () => {
    triggerCVDownload();
    setCvToastVisible(true);
    window.setTimeout(() => setCvToastVisible(false), 2600);
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPrefilledSubject(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#FF3B2F] selection:text-white">
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onDownloadCV={handleDownloadCV}
      />

      <main className="flex-1">
        <Hero />
        <About onDownloadCV={handleDownloadCV} />
        <Services onSelectServiceForContact={handleSelectServiceForContact} />
        <Projects />
        <Contact prefilledSubject={prefilledSubject} />
      </main>

      <Footer />

      {/* Subtle confirmation toast triggered only on explicit CV download */}
      <AnimatePresence>
        {cvToastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[#FF3B2F]/60 shadow-xl text-sm font-medium text-[var(--text-primary)]"
          >
            <span className="w-6 h-6 rounded-full bg-[#FF3B2F]/15 text-[#FF3B2F] flex items-center justify-center">
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <span>CV downloaded (Muhammad_Huzaifa_CV.html)</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
