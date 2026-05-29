"use client";

import { usePortfolio } from "../app/context/PortfolioContext";
import { navigationItems } from "../data/portfolioData";
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";
import { LocalTime } from "./LocalTime";

export function LeftPanel() {
  const { activeSection, setActiveSection } = usePortfolio();

  return (
    <header className="flex flex-col justify-between py-12 lg:py-24 h-full">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary">
          Shyam Shrestha
        </h1>
        <h3 className="mt-3 text-lg font-medium text-accent">
          Full Stack Product Engineer
        </h3>
        <p className="mt-6 max-w-sm text-secondary leading-relaxed">
          Building intelligent, scalable, and beautifully crafted applications. Based in Bhaktapur, Nepal.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
          <ul className="flex flex-col gap-4">
            {navigationItems.map((item, index) => {
              const isActive = activeSection === index;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(index)}
                    className={`group flex items-center py-2 transition-all hover:text-primary ${isActive ? "text-primary" : "text-secondary"
                      }`}
                  >
                    <span
                      className={`relative text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${isActive ? "text-primary translate-x-8" : "text-secondary group-hover:text-primary group-hover:translate-x-8"
                        }`}
                    >
                      {item.title}
                      {/* Half underline */}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${isActive ? "w-1/2 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"
                          }`}
                      />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-auto flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <a href="https://github.com/shyam-stha" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/shyam-stha" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/shrestha_s26813" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="X (Twitter)">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/shyam.stha.dev/" target="_blank" rel="noreferrer" className="text-secondary hover:text-accent transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:shyam.shrestha.dev@gmail.com" className="text-secondary hover:text-accent transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <LocalTime />
      </div>
    </header>
  );
}
