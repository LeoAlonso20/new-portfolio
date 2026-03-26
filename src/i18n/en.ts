export const en = {
  meta: {
    title: "Leandro Alonso — Software Developer",
    description:
      "Systems Engineer and Software Developer specializing in modern web architectures. Building performant, accessible, and beautifully crafted digital experiences.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    skills: "Skills",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Leandro Alonso",
    role: "Systems Engineer & Software Developer",
    company: "Infoexperto",
    description:
      "I design and build modern web applications with a focus on performance, accessibility, and clean architecture. Currently crafting digital solutions at",
    cta: "View My Work",
    contact: "Get in Touch",
  },
  skills: {
    title: "Technical Expertise",
    subtitle: "Technologies and tools I use to bring ideas to life.",
  },
  about: {
    title: "About Me",
    p1: "I'm a Systems Engineer with a deep passion for front-end development and modern web technologies. My engineering background gives me a strong analytical foundation that I apply to every project I build.",
    p2: "Currently working as a Software Developer at Infoexperto, where I develop scalable web applications and collaborate with cross-functional teams to deliver solutions that make a real impact.",
    p3: "I believe in writing clean, maintainable code and creating interfaces that feel effortless to use. When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or refining my craft.",
  },
  projects: {
    title: "Featured Projects",
    subtitle:
      "A selection of work that represents my approach to software engineering.",
    viewProject: "View Project",
    viewCode: "Source Code",
    viewDemo: "Live Demo",
    techStack: "Tech Stack",
    backToProjects: "Back to Projects",
  },
  contact: {
    title: "Let's Connect",
    subtitle:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.",
    email: "Send an Email",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Astro, React & Tailwind CSS",
  },
} as const;

export type Dictionary = typeof en;
