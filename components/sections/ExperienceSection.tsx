"use client";

import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { experience } from "../../data/portfolioData";

export function ExperienceSection() {
  return (
    <div className="relative flex flex-col gap-2 group/cards">
      {/* Subtle timeline rail */}
      <div className="absolute left-[24px] top-10 bottom-8 w-[2px] bg-timeline-rail" />

      {experience.map((exp, index) => (
        <motion.a
          key={exp.id}
          href={exp.link || "#"}
          target={exp.link ? "_blank" : undefined}
          rel={exp.link ? "noreferrer" : undefined}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={[
            // Layout
            "group relative block rounded-2xl p-6 pl-14 md:pl-16",
            // Default state
            "text-primary",
            "transition-all duration-300 ease-out",
            // Sibling dimming when any card in group is hovered
            "group-hover/cards:opacity-40 group-hover/cards:blur-[0.5px] group-hover/cards:saturate-50",
            // Self-hover override — glassmorphic focus
            "hover:!opacity-100 hover:!blur-0 hover:!saturate-100",
            "hover:text-primary hover:-translate-y-1",
            // Keyboard focus-visible — same as hover
            "focus-visible:!opacity-100 focus-visible:!blur-0 focus-visible:!saturate-100",
            "focus-visible:text-primary focus-visible:-translate-y-1",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/30",
          ].join(" ")}
        >
          {/* Card Background Layer (Starts after the rail to avoid covering it) */}
          <div className="absolute inset-y-0 right-0 left-[38px] md:left-[46px] rounded-2xl border border-transparent transition-all duration-300 group-hover:bg-card group-hover:backdrop-blur-xl group-hover:border-card group-focus-visible:bg-card group-focus-visible:backdrop-blur-xl group-focus-visible:border-card -z-10" />

          {/* Timeline node connecting card to rail */}
          <div className="absolute left-[21px] top-[32px] w-2 h-2 rounded-full ring-[6px] ring-background bg-secondary transition-all duration-500 group-hover:bg-accent group-hover:ring-accent/20 group-hover:shadow-[0_0_15px_2px_var(--glow-color)] group-hover:scale-[1.2] z-10" />

          {/* Card header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold leading-tight">
                {exp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2.5 mt-1.5">
                <h4 className="text-sm font-medium text-secondary">
                  {exp.company}
                </h4>
                <span className="px-2.5 py-0.5 text-[10px] capitalize font-semibold tracking-wide rounded-full border border-card bg-card text-secondary">
                  {exp.type}
                </span>
                {exp.link && (
                  <ExternalLink className="w-3.5 h-3.5 text-secondary opacity-60 group-hover/cards:text-accent transition-colors" />
                )}
              </div>
            </div>
            <div className="flex flex-col sm:items-end text-xs font-mono text-secondary opacity-80 sm:mt-0.5 shrink-0">
              <span className="font-medium text-secondary">{exp.location}</span>
              <span className="mt-0.5">{exp.date}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-secondary opacity-90 mb-4 leading-relaxed">
            {exp.description}
          </p>

          {/* Responsibilities */}
          <ul className="space-y-2 mb-6">
            {exp.responsibilities.map((req, idx) => (
              <li key={idx} className="text-sm text-secondary opacity-90 flex items-start gap-3">
                <ChevronRight className="w-4 h-4 mt-0.5 text-accent/60 shrink-0" strokeWidth={2.5} />
                <span className="leading-relaxed">{req}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] font-mono rounded-full bg-card text-secondary border border-card"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
