export interface NavLinkItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | 'Layers'
    | 'Code2'
    | 'Server'
    | 'Layout'
    | 'Gauge'
    | 'Wrench';
  deliverables: string[];
  turnaround: string;
}

export type ProjectPreviewKind =
  | 'image'
  | 'easyproperty'
  | 'portfolio'
  | 'easypaisa';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image?: string;
  previewKind: ProjectPreviewKind;
  techStack: string[];
  highlights: string[];
  codeSummary: string;
  repoUrl: string;
  liveUrl: string;
}

export const PORTFOLIO_PROFILE = {
  brandFirst: 'Huzaifa',
  brandSecond: 'Dev',
  fullName: 'Muhammad Huzaifa',
  roles: ['Full Stack Developer', 'MERN Stack Developer'],
  email: 'shuzaifaa786@gmail.com',
  location: 'Bhakkar, Pakistan',
  availability: 'Available for Projects & Roles',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  heroBio:
    'I engineer fast, scalable full-stack web applications and crisp user interfaces with MongoDB, Express, React, and Node.js—built for real-world reliability and clean user flow.',
  aboutBio:
    'I specialize in building complete web applications from database schema design to responsive frontend interfaces. My focus is on writing clean, maintainable code with modern JavaScript, TypeScript, and the MERN stack to deliver dependable digital products.',
  aboutSecondaryBio:
    'From institutional portals and real-estate search platforms to interactive UI systems and core C++ problem-solving, I pair solid engineering fundamentals with thoughtful visual design.',
  portraitImage:
    '/assets/aistudio/Tech_Developer_Portrait_with_Neon_Accents_e7a04f42.png',
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const ABOUT_STATS: StatItem[] = [
  {
    value: '55+',
    label: 'Projects Completed',
    detail: 'Web portals, MERN apps, and production interfaces',
  },
  {
    value: '99+',
    label: 'Happy Clients',
    detail: 'Founders, businesses, and teams served worldwide',
  },
  {
    value: '100%',
    label: 'Satisfaction',
    detail: 'Focused on clarity, precision, and clean delivery',
  },
  {
    value: '24/7',
    label: 'Support',
    detail: 'Responsive maintenance and technical assistance',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    description:
      'End-to-end MERN stack web applications combining structured MongoDB schemas, Express APIs, and responsive React frontends.',
    iconName: 'Layers',
    deliverables: [
      'Complete frontend and backend architecture',
      'Authentication, role permissions & database modeling',
      'Production deployment and environment configuration',
    ],
    turnaround: '2–6 Weeks',
  },
  {
    id: 'frontend-react',
    title: 'Frontend (React)',
    description:
      'Modular, interactive React interfaces styled with Tailwind CSS and smooth Framer Motion transitions across every screen size.',
    iconName: 'Code2',
    deliverables: [
      'Reusable React component architecture',
      'Responsive layouts for mobile, tablet & desktop',
      'Clean state management and API integration',
    ],
    turnaround: '1–3 Weeks',
  },
  {
    id: 'backend-api',
    title: 'Backend & API',
    description:
      'Secure, well-documented RESTful APIs built with Node.js and Express, backed by indexed MongoDB data pipelines.',
    iconName: 'Server',
    deliverables: [
      'REST API endpoints with validation & error handling',
      'JWT authentication & protected route middleware',
      'Database indexing and query optimization',
    ],
    turnaround: '1–3 Weeks',
  },
  {
    id: 'ui-ux-implementation',
    title: 'UI/UX Implementation',
    description:
      'Pixel-accurate translation of design systems into accessible, high-contrast web interfaces with intuitive navigation.',
    iconName: 'Layout',
    deliverables: [
      'Design token setup with Tailwind CSS variables',
      'WCAG-compliant contrast and keyboard accessibility',
      'Dark & Light theme system implementation',
    ],
    turnaround: '1–2 Weeks',
  },
  {
    id: 'web-performance',
    title: 'Web Performance',
    description:
      'Auditing and optimizing bundle size, asset loading, and rendering bottlenecks for faster Core Web Vitals and snappy interactions.',
    iconName: 'Gauge',
    deliverables: [
      'Code splitting and lazy-loaded route bundles',
      'Image optimization & caching strategy',
      'Render cycle profiling and layout shift fixes',
    ],
    turnaround: '3–7 Days',
  },
  {
    id: 'bug-fixing',
    title: 'Bug Fixing',
    description:
      'Rapid diagnosis and resolution of tricky frontend layout glitches, state race conditions, and backend API integration errors.',
    iconName: 'Wrench',
    deliverables: [
      'Root-cause debugging across React & Node.js',
      'Cross-browser and mobile responsiveness fixes',
      'Clean regression-safe patches and verification',
    ],
    turnaround: '1–3 Days',
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'gct-website',
    title: 'GCT Website',
    category: 'Institutional Web Portal',
    year: '2026',
    description: 'A modern web portal for Govt. College of Technology Bhakkar.',
    image: '/assets/aistudio/college-side-view_9b863c62.jpg',
    previewKind: 'image',
    techStack: ['React', 'Tailwind', 'Vite'],
    highlights: [
      'Department directories, admissions overview, and campus notices',
      'Mobile-first responsive layout engineered for fast campus access',
      'Clean Vite build pipeline with modular React section components',
    ],
    codeSummary:
      'Built with React, Tailwind CSS, and Vite using reusable card grids, accessible navigation landmarks, and lightweight asset loading.',
    repoUrl: 'https://github.com',
    liveUrl: 'https://gct-bhakkar-portal.example.com',
  },
  {
    id: 'easyproperty-web-portal',
    title: 'EasyProperty Web Portal',
    category: 'Real Estate Platform',
    year: '2026',
    description:
      'A real estate listing platform with property search and filters.',
    previewKind: 'easyproperty',
    techStack: ['React', 'Node.js', 'MongoDB'],
    highlights: [
      'Multi-criteria filtering by city, price range, area, and listing type',
      'MongoDB-backed property catalog with fast indexed search queries',
      'Structured property detail views with direct agent inquiry flows',
    ],
    codeSummary:
      'MERN architecture pairing a filterable React storefront with Express search endpoints and Mongoose property schemas.',
    repoUrl: 'https://github.com',
    liveUrl: 'https://easyproperty-portal.example.com',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Developer Showcase',
    year: '2026',
    description:
      'This very portfolio website built with React and Tailwind CSS.',
    previewKind: 'portfolio',
    techStack: ['React', 'Framer Motion', 'Tailwind'],
    highlights: [
      'Dual Dark/Light theme system powered by CSS variables and localStorage',
      'Custom infinite typewriter hook and compositor-only Framer Motion reveals',
      'Interactive project & service detail modals with zero layout overlap',
    ],
    codeSummary:
      'Crafted with React, Framer Motion, Lucide icons, and Tailwind CSS v4 semantic tokens for responsive desktop and mobile viewports.',
    repoUrl: 'https://github.com',
    liveUrl: '#home',
  },
  {
    id: 'easypaisa-cli-cpp',
    title: 'EasyPaisa Command Line (C++)',
    category: 'Console Banking Simulator',
    year: '2025',
    description:
      'A console-based C++ application simulating EasyPaisa transactions.',
    previewKind: 'easypaisa',
    techStack: ['C++', 'OOP'],
    highlights: [
      'Object-oriented account, wallet, and transaction ledger classes',
      'Simulates money transfers, bill payments, mobile top-ups, and PIN checks',
      'Input validation and persistent transaction history handling',
    ],
    codeSummary:
      'Structured C++ console application applying encapsulation, inheritance, and menu-driven state validation for financial workflows.',
    repoUrl: 'https://github.com',
    liveUrl: '#projects',
  },
];

export function triggerCVDownload(): void {
  const cvMarkup = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Muhammad Huzaifa — Full Stack & MERN Stack Developer CV</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; max-width: 820px; margin: 40px auto; padding: 0 24px; color: #111; line-height: 1.6; }
    h1 { margin-bottom: 4px; color: #111; }
    .accent { color: #FF3B2F; font-weight: 700; }
    .meta { color: #555; font-size: 14px; margin-bottom: 24px; border-bottom: 2px solid #FF3B2F; padding-bottom: 12px; }
    h2 { font-size: 16px; text-transform: uppercase; letter-spacing: 0.06em; color: #FF3B2F; margin-top: 28px; }
    ul { padding-left: 20px; }
  </style>
</head>
<body>
  <h1>Muhammad Huzaifa <span class="accent">| Huzaifa Dev</span></h1>
  <div class="meta">Full Stack Developer · MERN Stack Developer · Bhakkar, Pakistan · shuzaifaa786@gmail.com</div>
  <h2>Profile</h2>
  <p>Full Stack & MERN Stack Developer specializing in complete web portals, responsive React & Tailwind CSS interfaces, Node.js/Express APIs, MongoDB data architecture, and C++ object-oriented systems.</p>
  <h2>Core Stack</h2>
  <ul>
    <li>Frontend: React, Vite, TypeScript, Tailwind CSS, Framer Motion</li>
    <li>Backend: Node.js, Express.js, REST APIs, Authentication</li>
    <li>Database & Languages: MongoDB, JavaScript (ES6+), C++, OOP</li>
  </ul>
  <h2>Featured Projects</h2>
  <ul>
    <li><strong>GCT Website</strong> — Modern web portal for Govt. College of Technology Bhakkar (React, Tailwind, Vite).</li>
    <li><strong>EasyProperty Web Portal</strong> — Real estate listing platform with property search and filters (React, Node.js, MongoDB).</li>
    <li><strong>Personal Portfolio</strong> — Responsive dual-theme portfolio with Framer Motion animations (React, Framer Motion, Tailwind).</li>
    <li><strong>EasyPaisa Command Line (C++)</strong> — Console-based C++ application simulating EasyPaisa transactions (C++, OOP).</li>
  </ul>
</body>
</html>`;

  const blob = new Blob([cvMarkup], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Muhammad_Huzaifa_CV.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
