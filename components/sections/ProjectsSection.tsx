"use client";

import { motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <div className="flex flex-col gap-6 group/cards">
      {projects.map((project, index) => (
        <motion.a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={[
            // Layout
            "relative block rounded-2xl p-6",
            // Default state — transparent, calm, matching primary name text
            "bg-transparent border border-transparent text-primary",
            "transition-all duration-300 ease-out cursor-pointer",
            // Sibling dimming when any card in group is hovered
            "group-hover/cards:opacity-40 group-hover/cards:blur-[0.5px] group-hover/cards:saturate-50",
            // Self-hover override — glassmorphic focus
            "hover:!opacity-100 hover:!blur-0 hover:!saturate-100",
            "hover:bg-card hover:backdrop-blur-xl",
            "hover:border-card",
            "hover:text-primary hover:-translate-y-1",
            // Keyboard focus-visible — same as hover
            "focus-visible:!opacity-100 focus-visible:!blur-0 focus-visible:!saturate-100",
            "focus-visible:bg-card focus-visible:backdrop-blur-xl",
            "focus-visible:border-card",
            "focus-visible:text-primary focus-visible:-translate-y-1",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/30",
          ].join(" ")}
        >
          {/* Card header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold leading-tight flex items-center gap-2">
              {project.name}
              {project.link && (
                <ExternalLink className="w-4 h-4 text-secondary opacity-60 group-hover/cards:[.hover_&]:opacity-100 group-hover/cards:[.hover_&]:text-accent transition-all duration-200" />
              )}
            </h3>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-accent/25 text-accent bg-accent/5 shrink-0 ml-4">
              {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-secondary opacity-90 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Role */}
          <div className="mb-5">
            <span className="text-xs font-semibold text-secondary opacity-80 block mb-1">Role</span>
            <span className="text-sm text-secondary opacity-70">{project.role}</span>
          </div>

          {/* Tech stack */}
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 text-[11px] font-mono rounded-full bg-card text-secondary border border-card"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.a>
      ))}
    </div>
  );
}
