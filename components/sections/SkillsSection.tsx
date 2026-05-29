"use client";

import { motion } from "framer-motion";
import { skills } from "../../data/portfolioData";

export function SkillsSection() {
  return (
    <div className="flex flex-col gap-6 group/cards">
      {skills.map((skillGroup, index) => (
        <motion.div
          key={skillGroup.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          tabIndex={0}
          role="article"
          className={[
            // Layout
            "relative rounded-2xl p-6",
            // Default state — transparent, calm, matching primary name text
            "bg-transparent border border-transparent text-primary",
            "transition-all duration-300 ease-out",
            // Sibling dimming when any card in group is hovered
            "group-hover/cards:opacity-40 group-hover/cards:blur-[0.5px] group-hover/cards:saturate-50",
            // Self-hover override — glassmorphic focus
            "hover:!opacity-100 hover:!blur-0 hover:!saturate-100",
            "hover:bg-card hover:backdrop-blur-xl",
            "hover:border-card",
            "hover:text-primary",
            // Keyboard focus-visible — same as hover
            "focus-visible:!opacity-100 focus-visible:!blur-0 focus-visible:!saturate-100",
            "focus-visible:bg-card focus-visible:backdrop-blur-xl",
            "focus-visible:border-card",
            "focus-visible:text-primary",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/30",
          ].join(" ")}
        >
          <h3 className="text-lg font-semibold mb-3">
            {skillGroup.category}
          </h3>
          <p className="text-sm text-secondary opacity-70 mb-4 italic">
            {skillGroup.usedFor}
          </p>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-medium rounded-full bg-card border border-card text-secondary hover:border-accent/40 hover:text-accent transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
