"use client";

import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

const experiences = [
  {
    company: "Funcove LLC",
    role: "Full Stack Engineer",
    duration: "Mar 2025 - Present",
    location: "Florida, United States (Remote)",
    summary: "Spearheading agentic AI architecture, serverless pipelines, and prompt optimization, reducing runtime token costs while building an autonomous, end-to-end web generation ecosystem.",
    points: [
      "Engineered sophisticated AI agents and multi-agent workflows for automation, application generation, and dynamic user interfaces.",
      "Contributed to a flagship AI App Builder platform that constructs, manages, and deploys scalable web experiences using agentic state machines.",
      "Integrated secure full-stack backends, vector embeddings, LLMs, and Cloudflare Workers deployment pipelines for instant environment builds.",
      "Optimized model selection and decreased production LLM expenses by 30% through semantic prompt engineering, smart caching, and token monitoring."
    ],
    tech: ["React.js", "Next.js", "Python", "FastAPI", "LangChain", "LangGraph", "Cloudflare Workers", "OpenRouter", "GCP"]
  },
  {
    company: "Peace Nepal Dot Com",
    role: "Frontend Developer (MetLife Project)",
    duration: "Sep 2024 - Jan 2025",
    location: "Kupondole, Nepal",
    summary: "Led frontend modular architecture on a major international enterprise project (MetLife) focusing on high-coverage unit testing and Agile release pipelines.",
    points: [
      "Developed high-fidelity, reusable components and secure business logic for massive-scale insurance platform frontend.",
      "Achieved outstanding application reliability by authoring rigorous unit and integration suites in a monorepo architecture.",
      "Collaborated actively in an international cross-functional agile team utilizing Azure Boards for rapid sprint releases and robust testing loops."
    ],
    tech: ["React.js", "TypeScript", "Jest", "Tailwind CSS", "Azure Boards", "Monorepo"]
  },
  {
    company: "Braimy",
    role: "Full Stack Developer",
    duration: "Jun 2023 - Sep 2024",
    location: "Baluwatar, Nepal",
    summary: "Crafted core full-stack features for a high-growth AI-powered EdTech platform that scaled to support over 10,000 active students.",
    points: [
      "Designed and maintained scalable APIs and responsive user dashboards to deliver customized education workflows.",
      "Integrated custom LLM APIs for automated essay feedback, personalized learning metrics, and smart study guides.",
      "Implemented a high-performance hybrid search infrastructure, accelerating platform search times and indexing efficiency by 15%."
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "AI APIs", "Hybrid Search"]
  },
  {
    company: "Ktmbees",
    role: "Full Stack / Web Developer Trainee",
    duration: "Aug 2022 - May 2023",
    location: "Mid Baneshwor, Nepal",
    summary: "Built and shipped end-to-end client applications across multiple domains including financial calculators, legal AI search, and ecommerce engines.",
    points: [
      "Developed full-stack features for a diverse roster of business applications, including an AI MCQ generator and a legal AI assistant.",
      "Programmed modular REST APIs, designed relational database schemas, and integrated robust third-party secure payment gateways.",
      "Gained hands-on mastery in writing clean, readable, and highly maintainable codebase structures under veteran leadership."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "AI APIs", "Bootstrap"]
  }
];

const skills = [
  {
    title: "Artificial Intelligence & Agents",
    icon: Bot,
    items: ["LangChain", "LangGraph", "Vector Databases", "Prompt Engineering", "n8n Automation", "LLM Integration", "Semantic Routing", "Multi-Agent Systems"]
  },
  {
    title: "Frontend Architecture",
    icon: Code2,
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Nuxt.js", "Svelte", "Responsive Layouts"]
  },
  {
    title: "Backend & Edge Compute",
    icon: Server,
    items: ["Node.js", "Express.js", "FastAPI", "Python", "NestJS", "RESTful APIs", "WebSockets", "Serverless Edge"]
  },
  {
    title: "Databases & ORMs",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis Caching", "Prisma ORM", "TypeORM", "SQLAlchemy"]
  },
  {
    title: "DevOps & Cloud Scale",
    icon: Cloud,
    items: ["Cloudflare Workers", "GCP Compute", "AWS S3", "Docker Systems", "GitHub Actions", "CI/CD Pipelines"]
  },
  {
    title: "Engineering & Quality Standard",
    icon: Sparkles,
    items: ["Outcomes over AI Hype", "State-Machine Design", "Strict Type Safety", "Performance Profiling", "Semantic Prompt Optimization", "Clean Code Architecture"]
  }
];

const projects = [
  {
    title: "AI App Builder Platform",
    role: "Core Full Stack & AI Architect",
    description: "An advanced orchestration platform that automatically builds, compiles, and deploys fully functional web applications through agentic multi-stage workflows.",
    impact: "Deploys production-ready sites to Cloudflare Workers in less than 60 seconds with LLM caching.",
    features: [
      "Multi-agent code generation loops",
      "Deterministic state transitions",
      "Dynamic schema generation & storage",
      "Automated edge server deployments",
      "Semantic optimization layer"
    ],
    tech: ["Python", "FastAPI", "React", "Next.js", "LangChain", "OpenRouter", "Cloudflare Workers", "GCP"]
  },
  {
    title: "AI-Powered EdTech Engine",
    role: "Full Stack Engineer",
    description: "A comprehensive educational portal serving 10,000+ active learners with personalized roadmap discovery and conversational learning companions.",
    impact: "Increased student platform engagement by 35% and improved hybrid search speed by 15%.",
    features: [
      "Tailored AI learning paths",
      "Smart text vectorization",
      "Fast PostgreSQL search index",
      "Automated homework scoring systems",
      "Highly responsive student portal"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Prisma ORM", "Vector Search", "LLM APIs"]
  },
  {
    title: "Intelligent MCQ Synthesizer",
    role: "Lead Developer",
    description: "A fast, education-focused platform that parses textbooks and reference documents to synthesize high-quality multiple-choice questions automatically.",
    impact: "Reduced academic test preparation workflows from hours down to a few clicks.",
    features: [
      "High-accuracy PDF document parsing",
      "Strict schema validation layer",
      "Adjustable difficulty prompts",
      "Bulk export to CSV and Excel"
    ],
    tech: ["React", "Node.js", "Express", "AI APIs", "REST APIs", "Tailwind CSS"]
  },
  {
    title: "Semantic Legal Assistant",
    role: "Full Stack Developer",
    description: "A legal search companion designed to ingest regulatory documentation and allow users to query complex legal clauses with zero hallucination.",
    impact: "Enables lawyers to retrieve exact legal precedents with deep semantic reference matching.",
    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Strict context filtering boundary",
      "Metadata and citation mapping",
      "Minimalist, distraction-free UI"
    ],
    tech: ["React", "Node.js", "AI APIs", "Vector Database", "REST APIs", "Tailwind CSS"]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science & IT (B.Sc. CSIT)",
    school: "Swastik College",
    duration: "Oct 2024 - Present",
    location: "Bhaktapur, Nepal"
  },
  {
    degree: "Diploma in Information Technology",
    school: "Nepal Banepa Polytechnic Institute",
    duration: "Aug 2018 - Jun 2022",
    location: "Banepa, Nepal"
  }
];

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20
};

const scrollSectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const scrollSectionViewport = {
  once: true,
  margin: "-160px"
};

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-14 text-left">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-bronze animate-pulse" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-bronze">{eyebrow}</p>
      </div>
      <h2 className="font-sans mt-3 text-3xl font-extrabold tracking-tighter text-slate-100 sm:text-4xl md:text-5xl leading-tight">
        {title}
      </h2>
      {text ? <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-slate-300 font-medium">{text}</p> : null}
    </div>
  );
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeExp, setActiveExp] = useState(0);
  const [activeStudioTab, setActiveStudioTab] = useState("stack");
  const [nepalTime, setNepalTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeSection, setActiveSection] = useState("home");

  // Scrollspy to update active navigation links automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "education", "contact"];
      
      // If user is scrolled near the bottom, default to the contact section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 200; // Focal point line matching the sticky navbar offset

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run immediately on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live ticking Nepal clock
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      setNepalTime(timeString);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#030712] text-slate-200 min-h-screen">
      {/* Texture & Ambient lights */}
      <div className="noise" />
      <div className="pointer-events-none fixed inset-0 -z-10 aurora" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] grid-mask" />

      {/* Floating Navigation Island Header */}
      <header className="fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-5xl px-4 sm:px-6">
        <nav className="flex h-16 items-center justify-between rounded-full border border-bronze/15 bg-slate-950/80 px-6 backdrop-blur-md shadow-2xl transition-all hover:border-bronze/30">
          <a href="#home" className="group font-sans text-xl font-extrabold text-slate-100 tracking-tighter">
            Shyam<span className="text-bronze transition-colors group-hover:text-bronze-light">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors relative py-1 group ${
                    isActive ? "text-bronze" : "text-slate-450 hover:text-slate-100"
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-bronze transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              );
            })}
          </div>

          {/* Availability Indicator & Social Icons */}
          <div className="hidden items-center gap-4 lg:flex">
            <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Active Build
            </span>
            <a
              aria-label="GitHub Profile"
              href="https://github.com/shyam-stha"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-800 p-2 text-slate-400 transition hover:border-bronze hover:text-slate-100 hover:scale-105 duration-200"
            >
              <Github size={15} />
            </a>
            <a
              aria-label="LinkedIn Profile"
              href="https://linkedin.com/in/shyam-stha"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-800 p-2 text-slate-400 transition hover:border-bronze hover:text-slate-100 hover:scale-105 duration-200"
            >
              <Linkedin size={15} />
            </a>
          </div>

          {/* Mobile Menu Action */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-full border border-slate-800 p-2 text-slate-200 lg:hidden hover:border-bronze"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-[2rem] border border-bronze/15 bg-slate-950/98 px-6 py-6 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const id = item.toLowerCase();
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={item}
                      href={`#${id}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-bronze font-black" : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {item}
                    </a>
                  );
                })}
                <div className="h-px bg-slate-900 my-2" />
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-slate-400 font-bold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Work
                  </span>
                  <div className="flex gap-3">
                    <a href="https://github.com/shyam-stha" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                      <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/shyam-stha" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section - Animates immediately on page mount */}
      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        variants={scrollSectionVariants}
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20 scroll-mt-28"
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-bronze/20 bg-bronze/5 px-4.5 py-2.5 text-xs font-bold uppercase tracking-widest text-bronze-light px-4">
            Full Stack & AI Systems Engineer
          </div>

          <h1 className="text-balance text-4xl font-extrabold tracking-tighter text-slate-50 sm:text-5xl lg:text-6.5xl leading-[1.08]">
            Crafting <span className="font-serif italic text-bronze font-light">intelligent</span> systems & <span className="font-serif italic text-bronze font-light">resilient</span> edge platforms.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 font-medium sm:text-lg">
            I specialize in engineering autonomous AI agent workflows, deploying robust serverless pipelines, and building high-performance full-stack web architectures from Bhaktapur, Nepal.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-7 py-4 text-xs font-bold uppercase tracking-widest text-neutral-950 transition-all hover:bg-bronze-light hover:scale-[1.03] shadow-lg shadow-bronze/10"
            >
              View Selected Work <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-7 py-4 text-xs font-bold uppercase tracking-widest text-slate-200 transition-all hover:border-bronze hover:text-white"
            >
              Get In Touch <Mail size={14} />
            </a>
            <a
              href="/Shyam-Shrestha-Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 px-7 py-4 text-xs font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-neutral-500 hover:text-white"
            >
              Resume <Download size={14} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 border-t border-slate-900/60 pt-6">
            <a
              href="https://github.com/shyam-stha"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 transition hover:text-slate-100"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/shyam-stha"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 transition hover:text-slate-100"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Hero Interactive Studio Hub */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-10 rounded-full bg-bronze/5 blur-3xl pointer-events-none" />
          <div className="glass relative overflow-hidden rounded-[2.2rem] p-7 border border-bronze/10">

            {/* Window chrome header */}
            <div className="mb-6 flex items-center justify-between border-b border-slate-900 pb-4">
              <div className="flex gap-2.5">
                <span className="h-3 w-3 rounded-full bg-slate-800" />
                <span className="h-3 w-3 rounded-full bg-slate-800" />
                <span className="h-3 w-3 rounded-full bg-slate-800" />
              </div>

              {/* Dynamic Sliding Tabs */}
              <div className="relative flex gap-1 rounded-full bg-slate-950 p-1 border border-slate-900">
                {["stack", "focus", "nepal"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveStudioTab(tab)}
                    className="relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all z-10"
                  >
                    {activeStudioTab === tab && (
                      <motion.span
                        layoutId="studioActiveTab"
                        className="absolute inset-0 -z-10 rounded-full bg-bronze"
                        transition={springTransition}
                      />
                    )}
                    <span className={activeStudioTab === tab ? "text-slate-950 font-bold" : "text-slate-400"}>
                      {tab === "stack" ? "Expertise" : tab === "focus" ? "Performance" : "Bhaktapur"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[235px]">
              <AnimatePresence mode="wait">
                {activeStudioTab === "stack" && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-bronze">Expertise Matrix</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "React / Next.js", level: "Senior Architecture" },
                        { name: "Agentic AI (LangGraph)", level: "State-Machines" },
                        { name: "Python / FastAPI", level: "Production APIs" },
                        { name: "Cloudflare Workers", level: "Serverless Edge" },
                        { name: "PostgreSQL / Redis", level: "DB Optimization" },
                        { name: "Docker & GCP Scale", level: "Deploy Pipelines" }
                      ].map((item) => (
                        <div key={item.name} className="rounded-xl border border-slate-900 bg-slate-950/40 p-3.5 text-left">
                          <p className="text-sm font-bold text-slate-100">{item.name}</p>
                          <p className="text-[10px] font-bold text-slate-450 mt-1 uppercase tracking-widest">{item.level}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStudioTab === "focus" && (
                  <motion.div
                    key="focus"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-bronze">Key Performance stats</p>
                    <div className="space-y-3 font-mono text-xs text-slate-200">
                      <div className="rounded-xl bg-slate-950/40 p-5 border border-slate-900 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-400">LLM Operation Cost:</span>
                          <span className="font-bold text-emerald-400">-30% Reduced</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Braimy Platform Speed:</span>
                          <span className="font-bold text-emerald-400">+15% Efficient</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">App Generation time:</span>
                          <span className="font-bold text-emerald-400">&lt; 60 seconds</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Active served students:</span>
                          <span className="font-bold text-[#dfc596]">10,000+ Scaled</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStudioTab === "nepal" && (
                  <motion.div
                    key="nepal"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 text-left"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-bronze">Bhaktapur local context</p>

                    <div className="rounded-xl bg-slate-950/40 p-5 border border-slate-900 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Current Local Time</span>
                        <span className="block text-2xl font-mono font-bold text-slate-100 mt-1">{nepalTime || "10:44:38 AM"}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400">Status</span>
                        <span className="block text-xs font-semibold text-slate-200 mt-1">Ready to engineer</span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300">
                      Located in <span className="text-white font-semibold">Bhaktapur, Nepal</span>—a historic city known for its meticulous wood carvings, pottery, and timeless temples. I apply that same ancient standard of fine craftsmanship to clean modern software architectures and AI agent structures.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick mini widgets */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-900/60 pt-5">
              {[
                { label: "State-Machines", icon: Cpu, sub: "Resilient" },
                { label: "Zero-Latency", icon: Zap, sub: "Edge-first" },
                { label: "Cost-Optimized", icon: Layers, sub: "High ROI" }
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-900/60 bg-slate-950/30 p-3 text-center">
                  <item.icon className="mx-auto mb-1.5 text-bronze" size={16} />
                  <p className="text-xs font-bold text-slate-100">{item.label}</p>
                  <p className="text-[9px] font-bold text-slate-450 uppercase tracking-wider mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </motion.section>

      {/* About Section - Slides up on scroll */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-32 sm:px-10 scroll-mt-28"
      >
        <SectionHeader eyebrow="01 / Identity" title="Engineering with intention. Deploying with precision." />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6 text-base leading-relaxed text-slate-200 font-medium">
            <p className="font-serif text-2xl font-light text-slate-100 leading-relaxed">
              I am a Full Stack & AI Systems Engineer. I build predictive multi-agent automation workflows, optimize LLM token pipelines, and design high-speed serverless web platforms.
            </p>
            <p className="text-slate-300">
              My engineering strategy focuses entirely on practical business outcomes, not just implementation hype. By pairing state-machine structures (like LangGraph) with cloud edge environments, I ensure automated AI workflows are fully deterministic, lightning-fast, and secure.
            </p>
            <p className="text-slate-300">
              I have scaled EdTech platforms (serving 10,000+ active learners), deployed complex frontends on global financial portals (MetLife projects), and architected cost-efficient backend microservices using FastAPI and NestJS. I take deep pride in maintaining clean modular directories, rigorous test coverage, and optimized database indexing.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-900 bg-slate-950/20 p-8 space-y-6 shadow-xl">
            <h3 className="font-sans text-xl font-bold text-slate-100">Commitment to craft</h3>

            <div className="space-y-4 font-sans">
              {[
                { title: "Deterministic Agentic Execution", desc: "Using state machines to prevent AI agents from wandering or crashing in production." },
                { title: "Cost & Speed Optimization", desc: "Implementing prompt-caching, exact token monitoring, and edge-first routing to keep infrastructure lean." },
                { title: "Clean Modular Standard", desc: "Applying strict separation of concerns, absolute paths, and highly readable code patterns." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bronze/10 text-bronze text-xs font-bold border border-bronze/20 shadow-glow">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section - Slides up on scroll */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-32 sm:px-10 border-t border-slate-950 scroll-mt-28"
      >
        <SectionHeader eyebrow="02 / Timeline" title="Selected professional accomplishments." />

        <div className="grid gap-8 lg:grid-cols-[260px_1fr] items-start">

          {/* Vertical Custom Tabs */}
          <div className="relative flex flex-row overflow-x-auto gap-4 lg:flex-col lg:overflow-visible pb-4 lg:pb-0 z-10">
            {experiences.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveExp(idx)}
                className="relative w-full text-left shrink-0 lg:shrink px-5 py-4 rounded-2xl transition-all"
              >
                {activeExp === idx && (
                  <motion.span
                    layoutId="expActiveBg"
                    className="absolute inset-0 -z-10 rounded-2xl bg-[#0f172a] border border-bronze/25 shadow-glow"
                    transition={springTransition}
                  />
                )}
                <div className="flex flex-col">
                  <p className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeExp === idx ? "text-bronze" : "text-slate-400"}`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-widest">{exp.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeExp}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-[2rem] p-8 space-y-6 border border-bronze/10"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between border-b border-slate-900 pb-5">
                  <div>
                    <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">{experiences[activeExp].role}</h3>
                    <p className="mt-1.5 text-xs font-bold text-bronze uppercase tracking-widest">{experiences[activeExp].company}</p>
                  </div>
                  <div className="text-left font-sans text-xs text-slate-400 md:text-right space-y-1">
                    <p className="flex items-center md:justify-end gap-1.5 font-bold text-slate-200">
                      <Calendar size={13} className="text-slate-450" />
                      {experiences[activeExp].duration}
                    </p>
                    <p className="flex items-center md:justify-end gap-1.5 font-semibold">
                      <MapPin size={13} className="text-slate-450" />
                      {experiences[activeExp].location}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[#dfc596] bg-bronze/5 p-5 rounded-xl border border-bronze/10 font-medium">
                  {experiences[activeExp].summary}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Core Accomplishments</h4>
                  <ul className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                    {experiences[activeExp].points.map((point, idx) => (
                      <li key={idx} className="flex gap-3.5 items-start">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-bronze" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Technologies Mastered</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeExp].tech.map((t) => (
                      <span key={t} className="rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-xs font-bold text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

        </div>
      </motion.section>

      {/* Engineering Philosophy Section - Slides up on scroll */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-24 sm:px-10 border-t border-slate-950 bg-slate-950/15"
      >
        <SectionHeader eyebrow="03 / Perspective" title="My engineering philosophies." />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Outcomes over AI Hype",
              desc: "I avoid wrapping fragile APIs. Instead, I write strict prompt-caching models, token control frameworks, and resilient backends to reduce LLM expenses by 30% in high-traffic applications.",
              icon: Cpu
            },
            {
              title: "State-Machines for Predictability",
              desc: "Production agents must not hallucinate paths. I structure automated engineering sequences around custom state charts (using LangGraph), ensuring reliable and testable execution loops.",
              icon: Compass
            },
            {
              title: "Serverless Edge Performance",
              desc: "Latency is the silent killer of AI applications. I engineer modular platforms utilizing Cloudflare Workers and global routing to load instantly and scale globally with zero maintenance overhead.",
              icon: Zap
            }
          ].map((item, idx) => (
            <div key={idx} className="glass rounded-[2rem] p-8 border border-bronze/10 space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex rounded-2xl bg-bronze/10 p-3.5 text-bronze border border-bronze/20">
                <item.icon size={22} />
              </div>
              <h3 className="font-sans text-xl font-bold text-slate-100">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Bento Grid - Slides up on scroll */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-32 sm:px-10 border-t border-slate-950 scroll-mt-28"
      >
        <SectionHeader eyebrow="04 / Tooling" title="High-performance stack engineered for scale." />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.title}
              className="glass rounded-3xl p-7 border border-bronze/10 flex flex-col justify-between hover:border-bronze/35 hover:shadow-glow transition-all duration-300"
            >
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-2xl bg-bronze/10 p-3 text-bronze border border-bronze/20 shadow-glow">
                    <group.icon size={20} />
                  </div>
                  <h3 className="font-sans text-lg font-bold text-slate-100">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-bronze/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Selected Projects Gallery - Slides up on scroll */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-32 sm:px-10 border-t border-slate-950 scroll-mt-28"
      >
        <SectionHeader eyebrow="05 / Selected Works" title="Practical intelligence shipped in production." />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-interactive group overflow-hidden rounded-[2.2rem] p-8 border border-bronze/10 flex flex-col justify-between hover:border-bronze/30"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-900 pb-5 mb-5">
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-bronze transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-450 mt-1">{project.role}</p>
                  </div>
                  <span className="rounded-full border border-slate-850 bg-slate-950 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                    Active build
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-200 font-medium">{project.description}</p>

                <div className="my-5 rounded-xl bg-slate-950 p-4 border border-slate-900 space-y-1.5 shadow-inner">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-bronze">Measured Impact Outcome</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-100 flex items-center gap-2">
                    {project.impact}
                  </p>
                </div>

                <div className="space-y-2.5 my-6">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Key Achievements</h4>
                  <ul className="grid gap-2 text-xs sm:text-sm text-slate-300 font-medium sm:grid-cols-2">
                    {project.features.map((feat) => (
                      <li key={feat} className="flex gap-2.5 items-start">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-bronze" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-900 mt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-[10px] font-bold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Academic Foundation - Slides up on scroll */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-32 sm:px-10 border-t border-slate-950 scroll-mt-28"
      >
        <SectionHeader eyebrow="06 / Academic" title="Foundations in computer science." />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="glass rounded-[2rem] p-8 border border-bronze/10 flex gap-6 items-start hover:border-bronze/30 transition-colors"
            >
              <div className="rounded-2xl bg-bronze/10 p-4 text-bronze border border-bronze/20 shrink-0 shadow-glow">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.duration}</span>
                <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-100 leading-snug">{item.degree}</h3>
                <p className="text-xs font-bold text-bronze uppercase tracking-widest">{item.school}</p>
                <p className="text-xs font-semibold text-slate-455">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section - Slides up on scroll */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={scrollSectionViewport}
        variants={scrollSectionVariants}
        className="mx-auto max-w-7xl px-6 py-32 sm:px-10 border-t border-slate-950 scroll-mt-28"
      >
        <SectionHeader
          eyebrow="07 / Connection"
          title="Let's build something intelligent."
          text="I am available for contract development, AI architectural consulting, multi-agent automated systems, and full-stack product positions."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">

          {/* Contact Methods */}
          <div className="space-y-4">
            {[
              [Mail, "Direct Email Link", "shyam.shrestha.dev@gmail.com", "mailto:shyam.shrestha.dev@gmail.com"],
              [MapPin, "Engineering Base", "Bhaktapur, Nepal", "#"],
              [Github, "GitHub Account", "github.com/shyam-stha", "https://github.com/shyam-stha"],
              [Linkedin, "LinkedIn Profile", "linkedin.com/in/shyam-stha", "https://linkedin.com/in/shyam-stha"]
            ].map(([Icon, label, value, href]) => (
              <a
                key={label as string}
                href={href as string}
                target={(href as string).startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-5 rounded-2xl border border-slate-800 bg-slate-950/30 p-4 transition-all hover:border-bronze hover:bg-slate-900/60 hover:scale-[1.01]"
              >
                <span className="rounded-xl bg-bronze/10 p-3.5 text-bronze border border-bronze/20">
                  <Icon size={18} />
                </span>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">{label as string}</span>
                  <span className="block text-sm font-semibold text-slate-100 mt-0.5">{value as string}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Premium Contact Form */}
          <div className="glass rounded-[2rem] p-8 border border-bronze/10">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="inline-flex rounded-full bg-bronze/10 p-4 text-bronze border border-bronze/20 shadow-glow">
                  <Send size={32} />
                </div>
                <h3 className="font-sans text-2xl font-bold text-white">Message Dispatched</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto font-medium">
                  Thank you for reaching out. Your transmission was encrypted and logged successfully. I will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setFormError("");
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(formData),
                    });
                    if (!res.ok) {
                      const data = await res.json();
                      setFormError(data.error ?? "Something went wrong. Please try again.");
                    } else {
                      setFormSubmitted(true);
                    }
                  } catch {
                    setFormError("Network error. Please check your connection and try again.");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Your Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full border-b border-slate-800 bg-transparent py-2.5 text-sm text-white outline-none transition focus:border-bronze"
                      placeholder="Shyam Shrestha"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Electronic Mail</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full border-b border-slate-800 bg-transparent py-2.5 text-sm text-white outline-none transition focus:border-bronze"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full border-b border-slate-800 bg-transparent py-2.5 text-sm text-white outline-none transition resize-none focus:border-bronze"
                    placeholder="Tell me about your architectural scaling needs, AI systems, or contract opportunity."
                  />
                </div>

                {formError && (
                  <p className="text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-8 py-4 text-xs font-bold uppercase tracking-wider text-neutral-950 transition hover:bg-bronze-light disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-3.5 w-3.5 rounded-full border-2 border-neutral-950/30 border-t-neutral-950 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Dispatch Message <Send size={14} /></>
                  )}
                </button>

                <div className="flex items-center gap-2 border-t border-slate-900 pt-5 mt-5 text-[9px] font-bold uppercase tracking-widest text-slate-455">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Forwarded to Discord • Secured via SSL
                </div>
              </form>
            )}
          </div>

        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-950 px-6 py-10 text-center text-xs font-bold uppercase tracking-widest text-slate-500 sm:px-10">
        © 2026 Shyam Shrestha. Handcrafted in Bhaktapur, Nepal.
      </footer>
    </main>
  );
}
