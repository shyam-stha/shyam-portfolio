"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";

interface PortfolioContextType {
  activeSection: number;
  setActiveSection: (index: number) => void;
  goToPanel: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  isTransitioning: boolean;
  sectionCount: number;
}

const SECTION_COUNT = 5; // About, Projects, Experience, Skills, Contact
const TRANSITION_DURATION = 700; // ms — matches CSS transition

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSectionState] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToPanel = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SECTION_COUNT - 1, index));
    if (clamped === activeSection) return;
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveSectionState(clamped);

    // Clear any existing timer
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }, [activeSection, isTransitioning]);

  const goToNext = useCallback(() => {
    goToPanel(activeSection + 1);
  }, [activeSection, goToPanel]);

  const goToPrev = useCallback(() => {
    goToPanel(activeSection - 1);
  }, [activeSection, goToPanel]);

  // setActiveSection that goes through goToPanel for transition guard
  const setActiveSection = useCallback((index: number) => {
    goToPanel(index);
  }, [goToPanel]);

  return (
    <PortfolioContext.Provider
      value={{
        activeSection,
        setActiveSection,
        goToPanel,
        goToNext,
        goToPrev,
        isTransitioning,
        sectionCount: SECTION_COUNT,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
