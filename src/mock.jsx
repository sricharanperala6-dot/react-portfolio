// Mock data for Sricharan Perala - Frontend Developer Portfolio
// This file contains all placeholder content. Backend integration will replace these later.

export const personal = {
  name: "Sricharan Perala",
  firstName: "Sricharan",
  lastName: "Perala",
  role: "Frontend Developer",
  tagline: "I craft pixel-perfect, performant interfaces — where design meets engineering.",
  location: "Hyderabad, India",
  email: "sricharan.perala@example.com",
  phone: "+91 98765 43210",
  availability: "Available for freelance & full-time roles",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    dribbble: "https://dribbble.com/"
  }
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "24", label: "Projects Shipped" },
  { value: "18", label: "Happy Clients" },
  { value: "99%", label: "Lighthouse Score" }
];

export const aboutParagraphs = [
  "Hi, I'm Sricharan — a frontend developer obsessed with the small details that make interfaces feel alive. I specialize in building scalable design systems, accessible component libraries, and smooth motion-rich web experiences using React, TypeScript, and modern CSS.",
  "Over the past three years I've worked with startups and product teams to ship features used by thousands of users. I care deeply about performance, accessibility, and the craft of writing clean, maintainable code. When I'm not coding, you'll find me exploring type design, contributing to open source, or brewing a fresh cup of filter coffee."
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Vue.js", "Redux Toolkit", "React Query", "Zustand"]
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Sass/SCSS", "Styled Components", "Framer Motion", "shadcn/ui"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Vite", "Webpack", "Figma", "Vercel", "Docker"]
  },
  {
    category: "Testing & Quality",
    items: ["Jest", "React Testing Library", "Cypress", "Playwright", "Storybook"]
  },
  {
    category: "Backend Familiarity",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Firebase", "MongoDB"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Nimbus Analytics Dashboard",
    description:
      "A real-time analytics platform with customizable widgets, dark mode, and drag-and-drop layouts. Built for a fintech startup to visualize transaction flows.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2024",
    featured: true
  },
  {
    id: 2,
    title: "Lumen Design System",
    description:
      "An open-source component library with 40+ accessible primitives, theming tokens, and Storybook documentation — used by internal teams across 5 products.",
    tech: ["React", "TypeScript", "Radix UI", "Storybook"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2024",
    featured: true
  },
  {
    id: 3,
    title: "Orbit — Social Journaling App",
    description:
      "A mobile-first PWA for shared daily journaling with friends. Features offline sync, rich text editor, and end-to-end encrypted entries.",
    tech: ["Next.js", "Tiptap", "IndexedDB", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2023",
    featured: true
  },
  {
    id: 4,
    title: "Cascade — Markdown Editor",
    description:
      "A minimalist markdown editor with live preview, vim bindings, and keyboard-first navigation. Loved by writers and engineers alike.",
    tech: ["React", "CodeMirror", "Zustand"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2023",
    featured: false
  },
  {
    id: 5,
    title: "Flux — Portfolio Template",
    description:
      "An open-source portfolio template for designers and developers. 3k+ GitHub stars and forks from creatives around the world.",
    tech: ["Astro", "Tailwind", "MDX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2022",
    featured: false
  },
  {
    id: 6,
    title: "Atlas — Travel Journal",
    description:
      "A location-aware travel journaling app with offline maps, photo galleries, and route tracking. Built for long-term backpackers.",
    tech: ["React Native", "Mapbox", "SQLite"],
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2022",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Aperture Labs",
    type: "Full-time",
    period: "Jan 2024 — Present",
    location: "Remote",
    bullets: [
      "Led the frontend rewrite of the flagship analytics product from Angular to React, reducing bundle size by 38% and time-to-interactive by 2.1s.",
      "Architected a shared design system consumed by 3 product teams, improving ship velocity by 25%.",
      "Mentored 4 junior engineers through code reviews, pairing, and weekly tech-talks."
    ],
    stack: ["React", "TypeScript", "Tailwind", "Vite"]
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Quillfire Studio",
    type: "Full-time",
    period: "Jun 2022 — Dec 2023",
    location: "Hyderabad, IN",
    bullets: [
      "Built marketing and product websites for 10+ SaaS clients with a focus on motion, accessibility, and Core Web Vitals.",
      "Implemented a headless-CMS-driven blog platform that grew organic traffic 3x within 6 months.",
      "Collaborated daily with designers to translate Figma handoffs into pixel-accurate, responsive interfaces."
    ],
    stack: ["Next.js", "Sanity CMS", "Framer Motion"]
  },
  {
    id: 3,
    role: "Frontend Engineer Intern",
    company: "Nordlys Technologies",
    type: "Internship",
    period: "Jan 2022 — May 2022",
    location: "Bengaluru, IN",
    bullets: [
      "Shipped 12 features across the customer dashboard, collaborating with backend and design teams in a Scrum setup.",
      "Wrote 120+ unit and integration tests, raising overall coverage from 61% to 84%.",
      "Authored the team's internal style guide and onboarding docs for new joiners."
    ],
    stack: ["React", "Redux", "Jest"]
  }
];


export const testimonials = [
  {
    id: 1,
    name: "Aditi Rao",
    role: "Product Manager, Aperture Labs",
    quote:
      "Sricharan has a rare combination of design sensibility and engineering rigor. He ships fast, yet every detail is considered."
  },
  {
    id: 2,
    name: "Marcus Lindgren",
    role: "Design Lead, Quillfire",
    quote:
      "The most design-aware engineer I've collaborated with. He notices the 2px misalignment before I do."
  }
];

export const whyHireMe = [
  {
    id: 1,
    icon: "LayoutTemplate",
    title: "Build pixel-perfect UIs",
    text:
      "I will turn your Figma designs into responsive, production-ready React interfaces — matching every spacing, color, and motion detail across all screen sizes."
  },
  {
    id: 2,
    icon: "Gauge",
    title: "Optimize performance",
    text:
      "I will ship pages that score 95+ on Lighthouse — fast load times, smooth animations, lazy-loaded assets, and rock-solid Core Web Vitals."
  },
  {
    id: 3,
    icon: "Accessibility",
    title: "Make it accessible to all",
    text:
      "I will deliver WCAG AA compliant interfaces with semantic HTML, keyboard navigation, and proper ARIA — so every user can use your product."
  },
  {
    id: 4,
    icon: "Boxes",
    title: "Build reusable systems",
    text:
      "I will create scalable component libraries and design tokens, so your team ships faster and stays consistent across products."
  },
  {
    id: 5,
    icon: "Bug",
    title: "Write tested, clean code",
    text:
      "I will deliver maintainable code with unit & E2E tests, clear documentation, and code reviews — making future changes painless."
  },
  {
    id: 6,
    icon: "Rocket",
    title: "Ship reliably & fast",
    text:
      "I will integrate with your APIs, set up CI/CD, and deploy your product end-to-end — from local commit to production with zero downtime."
  }
];