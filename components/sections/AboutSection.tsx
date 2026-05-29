"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10"
    >
      <div className="text-secondary leading-relaxed space-y-4">
        <p>
          I am a passionate software engineer focused on crafting polished, intelligent, and scalable digital experiences. With a background in full-stack development, I enjoy bridging the gap between design and robust backend architectures.
        </p>
        <p>
          My recent work revolves around AI-assisted workflows and building autonomous agent systems that help users achieve more with less friction. I believe in clean code, accessible interfaces, and the power of subtle motion to bring products to life.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="mailto:hello@example.com"
          className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full group overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] border border-accent/20 hover:border-accent/50"
        >
          {/* Glowing backdrop layer */}
          <div className="absolute inset-0 bg-cta-bg transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
          

          
          <span className="relative z-10 flex items-center gap-2 text-cta-btn font-semibold tracking-wide">
            Get in Touch 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 transition-all duration-300" />
          </span>
        </a>

        <a
          href="/shyam-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full group overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Base card surface */}
          <div className="absolute inset-0 rounded-full bg-card border border-card group-hover:border-accent/40 transition-colors duration-500" />
          
          {/* Subtle accent hover wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative z-10 flex items-center gap-2 text-primary font-medium tracking-wide">
            Resume 
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </span>
        </a>
      </div>

      <div className="mt-8 p-6 rounded-2xl border border-card bg-card backdrop-blur-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center justify-between mb-4">
          <h4 className="text-xs font-semibold tracking-widest text-secondary uppercase flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Currently Building
          </h4>
          <span className="text-[10px] font-medium tracking-wide text-accent border border-accent/20 px-2 py-0.5 rounded-full bg-accent/5">v1.0 Beta</span>
        </div>

        <h3 className="relative text-xl font-bold text-primary mb-2">AppCafe</h3>
        <p className="relative text-sm text-secondary leading-relaxed mb-6">
          An AI-assisted website builder that turns rough prompts into structured plans and fully generated websites.
        </p>
        
        <div className="relative flex flex-wrap gap-2">
          {["Next.js", "AI Agents", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-background border border-card text-secondary opacity-80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
