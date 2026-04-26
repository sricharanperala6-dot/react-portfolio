// Portfolio content for Sricharan Perala.

export const personal = {
  name: "Sricharan Perala",
  firstName: "Sricharan",
  lastName: "Perala",
  role: "React.js Frontend Developer",
  tagline:
    "I build scalable, responsive web and mobile products with React, React Native, Redux, REST APIs, GraphQL, modern UI systems, and third-party integrations.",
  location: "Hyderabad, India",
  email: "sricharanperala6@gmail.com",
  phone: "+91 88857 36090",
  availability: "Immediate joiner / negotiable notice period",
  resumeUrl: "/react-portfolio/Sricharan_Perala-Resume.pdf",
  socials: {
    github: "https://github.com/sricharanperala6-dot",
    linkedin: "https://www.linkedin.com/in/sricharan-perala-7b8181392/",
    instagram:"https://www.instagram.com/sricharan_perala/",
  },
};

export const stats = [
  { value: "3", label: "Years Experience" },
  { value: "70%", label: "Frontend Ownership" },
  { value: "40%", label: "UI Engagement Lift" },
  { value: "50%", label: "Manual Effort Reduced" },
];

export const aboutParagraphs = [
  "I am a React.js Frontend Developer with 3 years of experience building scalable, responsive, and high-performance web and mobile applications. My day-to-day work spans React.js, React Native, JavaScript, TypeScript, Redux, REST APIs, GraphQL, and modern UI development.",
  "At CloudFirst Computing, I have worked across enterprise and community platforms, building CMS-driven React pages, mobile experiences, dynamic forms, dashboards, real-time chat integrations, secure media uploads, and Stripe payment workflows. I enjoy turning business requirements into clean, reliable user experiences that work well across devices.",
];

export const skills = [
  {
    category: "Frontend Technologies",
    items: [
      "ReactJS",
      "React Native",
      "VueJS",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Styling & UI Frameworks",
    items: [
      "Styled-Components",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
      "Media Queries",
    ],
  },
    {
    category: "State Management",
    items: [
      "Redux",
      "Redux-Persist",
      "Context API",
    ],
  },
      {
    category: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "MySQL",
    ],
  },
  {
    category: "APIs & Integration",
    items: [
      "REST APIs",
      "GraphQL",
      "Axios",
      "CRUD Operations",
    ],
  },
  {
    category: "Development Tools",
    items: [
      "Git",
      "Bitbucket",
      "Jira",
      "VSCode",
      "Postman",
      "Swagger",
    ],
  },
  {
    category: "Third-Party Integrations",
    items: [
      "npm Packages",
      "CometChat",
      "StreamChat",
      "Stripe",
    ],
  },
  {
    category: "Testing & Optimization",
    items: [
      "React Testing",
      "Performance Optimization",
      "Cross-Browser Compatibility",
    ],
  },
];

export const projects = [
   {
    id: 1,
    title: "Vewize",
    description:
      "Dual-role mentorship platform where users can act as mentors and mentees, purchase courses with coins, and manage event or meeting sessions across responsive mobile, tablet, and desktop layouts.",
    tech: ["React.js", "Responsive Design", "Flexbox", "CSS Grid", "Reusable Components"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2024",
    featured: false,
  },
  {
    id: 2,
    title: "Ingaje",
    description:
      "Employee engagement and workforce management platform covering recruitment to retirement. Led nearly 70% of frontend module development, including HealthPlus, HirePlus, posts, articles, surveys, polls, courses, dashboards, and optimized infinite-scroll feeds.",
    tech: ["React.js", "Redux", "React Router", "Bootstrap", "Tailwind CSS", "ApexCharts", "AWS S3"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2025",
    featured: true,
  },
    {
    id: 3,
    title: "Drive and Park MCO",
    description:
      "Parking reservation platform with responsive slot selection, scheduling, booking management, Stripe payments, coupon flows, real-time availability, live parking dashboards, and QR-based check-in/check-out.",
    tech: ["React.js", "Redux", "React Router", "Bootstrap", "Tailwind CSS", "Stripe", "REST APIs"],
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2024",
    featured: true,
  },
  {
    id: 4,
    title: "Salty Dawg Sailing Association",
    description:
      "Member engagement platform with web and mobile apps, event management, rally registrations, dynamic workflows, personalized email notifications, role-based portals, payments, and real-time messaging.",
    tech: ["React.js", "React Native", "GraphQL", "WordPress", "Stripe", "CometChat", "Stream Chat"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2025",
    featured: true,
  },
  {
    id: 5,
    title: "Qennect Multi-Tenant Platform",
    description:
      "Enterprise community collaboration platform spanning web, mobile, public website, and admin portal. Built reusable modules for feeds, posts, events, memberships, groups, forms, message center, email templates, authentication, and role-based access.",
    tech: ["React.js", "React Native", "GraphQL", "WordPress", "Stripe", "CometChat", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80&auto=format&fit=crop",
    live: "#",
    github: "#",
    year: "2024",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "CloudFirst Computing Pvt. Ltd.",
    type: "Full-time",
    period: "May 2023 - Present",
    location: "Hyderabad, India",
    bullets: [
      "Developed and maintained responsive web and mobile applications using React.js and React Native with strong focus on performance and cross-device compatibility.",
      "Built CMS-driven React pages using WordPress GraphQL and implemented SSO-based auto sign-up integrations to streamline authentication workflows.",
      "Integrated Stripe payments, CometChat, Stream Chat, AWS S3 uploads, dynamic forms, validations, dashboards, modals, tables, and pagination modules.",
      "Implemented Redux and Redux Persist for scalable state management, improving data flow and application stability across enterprise modules.",
      "Collaborated with stakeholders in Agile environments to convert business requirements into user stories and deliver multiple concurrent projects on schedule.",
    ],
    stack: ["React.js", "React Native", "Redux","REST API","GraphQL","Third-party Integrations"],
  },
];

export const testimonials = [];

export const whyHireMe = [
  {
    id: 1,
    icon: "LayoutTemplate",
    title: "Build responsive product UIs",
    text:
      "I create clean, reusable React interfaces that adapt smoothly across mobile, tablet, and desktop screens.",
  },
  {
    id: 2,
    icon: "Gauge",
    title: "Improve performance",
    text:
      "I optimize API handling, infinite-scroll feeds, component structure, and rendering behavior so applications stay fast and stable.",
  },
  {
    id: 3,
    icon: "Accessibility",
    title: "Translate requirements clearly",
    text:
      "I work closely with stakeholders to turn business needs into user stories, UI workflows, and maintainable frontend features.",
  },
  {
    id: 4,
    icon: "Boxes",
    title: "Create reusable modules",
    text:
      "I build dynamic forms, dashboards, tables, modals, routing flows, and shared UI components that reduce repeat work.",
  },
  {
    id: 5,
    icon: "Bug",
    title: "Integrate real services",
    text:
      "I connect frontend products with REST APIs, GraphQL, WordPress CMS, Stripe, AWS S3, CometChat, and Stream Chat.",
  },
  {
    id: 6,
    icon: "Rocket",
    title: "Own delivery",
    text:
      "I can manage multiple frontend workstreams in Agile teams and keep quality high while moving features toward release.",
  },
];
