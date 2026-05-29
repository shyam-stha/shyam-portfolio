export const navigationItems = [
  { id: "about", title: "About", number: "01" },
  { id: "projects", title: "Projects", number: "02" },
  { id: "experience", title: "Experience", number: "03" },
  { id: "skills", title: "Skills", number: "04" },
  { id: "contact", title: "Contact", number: "05" },
];

export const projects = [
  {
    id: "appcafe",
    name: "AppCafe",
    description: "An AI-assisted website builder that turns raw requirements into structured plans and generated sites.",
    role: "Full-stack engineering, product flow, frontend architecture",
    stack: ["Next.js", "Convex", "AI agents", "Tailwind"],
    status: "In Progress",
    link: "https://github.com/shyam-stha/appcafe",
  },
  {
    id: "portfolio",
    name: "Portfolio System",
    description: "A personal engineering portfolio focused on clarity, motion, and technical storytelling.",
    role: "Design engineering, frontend architecture, interaction design",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    status: "Live",
    link: "https://github.com/shyam-stha/shyam-portfolio",
  },
  {
    id: "ai-codebase",
    name: "AI Codebase Assistant",
    description: "A concept for helping agents understand, index, and modify large codebases efficiently.",
    role: "System design, AI workflow planning, code intelligence",
    stack: ["Tree-sitter", "graph-based indexing", "RAG concepts"],
    status: "Prototype",
    link: "https://github.com/shyam-stha/ai-codebase-assistant",
  },
];

export const experience = [
  {
    id: "exp1",
    role: "Full Stack Product Engineer",
    company: "Tech Startup",
    type: "On-site",
    date: "Jan 2023 - Present",
    location: "San Francisco, CA",
    link: "https://example.com/techstartup",
    description: "Leading the core product development team to build AI-assisted tools for modern creators.",
    responsibilities: [
      "Architecting and developing AI-powered workflows.",
      "Building responsive and accessible UI components with Next.js.",
      "Designing highly available backend services.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "OpenAI"],
  },
  {
    id: "exp2",
    role: "Frontend Engineer",
    company: "Digital Agency",
    type: "Remote",
    date: "Jun 2021 - Dec 2022",
    location: "Remote",
    link: "https://example.com/digitalagency",
    description: "Developed and maintained interactive web applications for high-profile enterprise clients.",
    responsibilities: [
      "Led the frontend team in delivering performant web applications.",
      "Implemented complex animations and interaction designs.",
      "Optimized Core Web Vitals resulting in a 30% increase in performance score.",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
];

export const skills = [
  {
    id: "frontend",
    category: "Frontend Systems",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    usedFor: "Architecting interactive, accessible, and high-performance client-side systems.",
  },
  {
    id: "backend",
    category: "Backend Systems",
    items: ["Node.js", "Python", "Convex", "APIs", "Databases"],
    usedFor: "Designing scalable API architectures, reliable data layers, and secure server-side logic.",
  },
  {
    id: "ai",
    category: "AI / Systems",
    items: ["LLM workflows", "agents", "code indexing", "prompt pipelines"],
    usedFor: "Engineering intelligent workflows, orchestrating LLM agents, and designing code-indexing infrastructure.",
  },
  {
    id: "deployment",
    category: "Deployment",
    items: ["Cloudflare", "Vercel", "serverless", "CI/CD basics"],
    usedFor: "Deploying secure, resilient, and globally distributed cloud environments.",
  },
];
