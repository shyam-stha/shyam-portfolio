"use client";

import { useRef, useEffect, useCallback } from "react";
import { usePortfolio } from "../app/context/PortfolioContext";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";
import { navigationItems } from "../data/portfolioData";

const SCROLL_THRESHOLD = 4;

export function RightPanel() {
  const { activeSection, sectionCount, goToNext, goToPrev, isTransitioning } = usePortfolio();
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Accumulator for small trackpad deltas
  const deltaAccum = useRef(0);
  const accumTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const DELTA_TRIGGER = 80;

  const sections = [
    <AboutSection key="about" />,
    <ProjectsSection key="projects" />,
    <ExperienceSection key="experience" />,
    <SkillsSection key="skills" />,
    <ContactSection key="contact" />,
  ];

  const canScrollDown = useCallback((el: HTMLElement | null): boolean => {
    if (!el) return false;
    return el.scrollTop + el.clientHeight < el.scrollHeight - SCROLL_THRESHOLD;
  }, []);

  const canScrollUp = useCallback((el: HTMLElement | null): boolean => {
    if (!el) return false;
    return el.scrollTop > SCROLL_THRESHOLD;
  }, []);

  // Global wheel handler — works regardless of cursor position
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;

      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      const activePanel = panelRefs.current[activeSection];
      if (!activePanel) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown) {
        if (canScrollDown(activePanel)) {
          // Scroll the active panel programmatically so it works from anywhere
          activePanel.scrollTop += Math.abs(e.deltaY);
          e.preventDefault();
          return;
        } else {
          e.preventDefault();
          deltaAccum.current += Math.abs(e.deltaY);
          if (accumTimer.current) clearTimeout(accumTimer.current);
          accumTimer.current = setTimeout(() => { deltaAccum.current = 0; }, 200);
          if (deltaAccum.current >= DELTA_TRIGGER) {
            deltaAccum.current = 0;
            goToNext();
          }
        }
      } else if (scrollingUp) {
        if (canScrollUp(activePanel)) {
          activePanel.scrollTop -= Math.abs(e.deltaY);
          e.preventDefault();
          return;
        } else {
          e.preventDefault();
          deltaAccum.current += Math.abs(e.deltaY);
          if (accumTimer.current) clearTimeout(accumTimer.current);
          accumTimer.current = setTimeout(() => { deltaAccum.current = 0; }, 200);
          if (deltaAccum.current >= DELTA_TRIGGER) {
            deltaAccum.current = 0;
            goToPrev();
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (accumTimer.current) clearTimeout(accumTimer.current);
    };
  }, [activeSection, isTransitioning, goToNext, goToPrev, canScrollDown, canScrollUp]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (typeof window === "undefined" || window.innerWidth < 1024) return;
      if (isTransitioning) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isTransitioning, goToNext, goToPrev]);

  return (
    <div className="relative h-full flex flex-col pt-12 lg:pt-0">
      {/* Progress Indicator (Desktop only) */}
      <div className="hidden lg:flex fixed bottom-12 right-12 z-40 items-center gap-4 text-xs font-mono font-medium text-secondary/60 bg-primary/80 backdrop-blur px-4 py-2 rounded-full border border-card">
        <span className="uppercase tracking-widest text-primary">
          {navigationItems[activeSection].title}
        </span>
        <span>·</span>
        <span>
          0{activeSection + 1} / 0{sectionCount}
        </span>
      </div>

      <div className="flex-grow relative">
        {/* Mobile View (Stacked — normal vertical scroll) */}
        <div className="lg:hidden flex flex-col gap-24">
          <div id="about">{sections[0]}</div>
          <div id="projects">{sections[1]}</div>
          <div id="experience">{sections[2]}</div>
          <div id="skills">{sections[3]}</div>
          <div id="contact">{sections[4]}</div>
        </div>

        {/* Desktop View — CSS translateX horizontal track */}
        <div className="hidden lg:block absolute inset-0 overflow-x-clip overflow-y-visible">
          {/* Horizontal track: all panels side by side */}
          <div
            className="flex h-full"
            style={{
              width: `${sectionCount * 100}%`,
              transform: `translateX(-${activeSection * (100 / sectionCount)}%)`,
              transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="h-full flex-shrink-0"
                style={{ width: `${100 / sectionCount}%` }}
              >
                {/* Inner scroll container — overflow-y-auto for tall content, visible overflow for hover effects */}
                <div
                  ref={(el) => { panelRefs.current[index] = el; }}
                  className="h-full overflow-y-auto overflow-x-visible no-scrollbar"
                  style={{ overscrollBehavior: "contain" }}
                >
                  <div className="px-6 pt-8 pb-8 lg:pt-24 lg:pb-24 pr-10">
                    {section}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
