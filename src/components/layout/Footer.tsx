import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
    },
    {
      label: 'Twitter',
      href: 'https://x.com',
      icon: Twitter,
    },
    {
      label: 'Email',
      href: `mailto:${PORTFOLIO_PROFILE.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight whitespace-nowrap"
          >
            <span className="text-[var(--text-primary)]">
              {PORTFOLIO_PROFILE.brandFirst}{' '}
            </span>
            <span className="text-[#FF3B2F]">
              {PORTFOLIO_PROFILE.brandSecond}
            </span>
          </a>
          <span
            aria-hidden="true"
            className="hidden sm:inline text-[var(--border-subtle)]"
          >
            ·
          </span>
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {year} {PORTFOLIO_PROFILE.fullName}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            const isMail = item.href.startsWith('mailto:');
            return (
              <a
                key={item.label}
                href={item.href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[#FF3B2F] hover:border-[#FF3B2F]/60 transition-colors duration-150"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
