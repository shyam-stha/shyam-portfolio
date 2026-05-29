"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "night" | "day";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const dayTemperaturePhases = {
  morning: {
    vars: {
      "--bg-color": "#f4f0e6",
      "--glow-color": "rgba(255, 220, 160, 0.34)",
      "--cursor-glow": "rgba(255, 245, 230, 0.2)", // pale soft sunlight
    }
  },
  midday: {
    vars: {
      "--bg-color": "#f7fbff",
      "--glow-color": "rgba(180, 220, 255, 0.28)",
      "--cursor-glow": "rgba(230, 245, 255, 0.15)", // pale cool daylight
    }
  },
  afternoon: {
    vars: {
      "--bg-color": "#f6f4ee",
      "--glow-color": "rgba(255, 210, 145, 0.26)",
      "--cursor-glow": "rgba(255, 240, 220, 0.2)", // pale warm afternoon light
    }
  },
  evening: {
    vars: {
      "--bg-color": "#f5eadc",
      "--glow-color": "rgba(255, 180, 100, 0.34)",
      "--cursor-glow": "rgba(255, 230, 200, 0.2)", // pale golden evening light
    }
  }
};

const nightTemperaturePhases = {
  earlyNight: {
    vars: {
      "--bg-color": "#07111f",
      "--glow-color": "rgba(150, 190, 255, 0.16)",
      "--cursor-glow": "rgba(125, 211, 252, 0.18)",
    }
  },
  midnight: {
    vars: {
      "--bg-color": "#05070d",
      "--glow-color": "rgba(180, 210, 255, 0.14)",
      "--cursor-glow": "rgba(125, 211, 252, 0.22)",
    }
  },
  deepNight: {
    vars: {
      "--bg-color": "#03050b",
      "--glow-color": "rgba(145, 120, 255, 0.12)",
      "--cursor-glow": "rgba(165, 180, 252, 0.18)",
    }
  },
  preDawn: {
    vars: {
      "--bg-color": "#061326",
      "--glow-color": "rgba(160, 210, 255, 0.15)",
      "--cursor-glow": "rgba(190, 220, 255, 0.18)",
    }
  }
};

const getPhaseByHour = (hour: number, theme: Theme) => {
  if (theme === "day") {
    if (hour >= 6 && hour < 10) return dayTemperaturePhases.morning;
    if (hour >= 10 && hour < 14) return dayTemperaturePhases.midday;
    if (hour >= 14 && hour < 17) return dayTemperaturePhases.afternoon;
    return dayTemperaturePhases.evening;
  } else {
    if (hour >= 18 && hour < 22) return nightTemperaturePhases.earlyNight;
    if (hour >= 22 || hour < 1) return nightTemperaturePhases.midnight;
    if (hour >= 1 && hour < 4) return nightTemperaturePhases.deepNight;
    return nightTemperaturePhases.preDawn;
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("night");
  const [overlay, setOverlay] = useState<{ active: boolean; type: "sunrise" | "nightfall" }>({ active: false, type: "sunrise" });

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default based on time of day
      const hour = new Date().getHours();
      setTheme(hour >= 6 && hour < 18 ? "day" : "night");
    }
  }, []);

  // Update theme class, CSS variables for temperature phases, and save to localStorage
  useEffect(() => {
    document.documentElement.classList.remove("theme-day", "theme-night");
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("portfolio-theme", theme);

    const applyPhase = () => {
      const hour = new Date().getHours();
      const phase = getPhaseByHour(hour, theme);
      Object.entries(phase.vars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    };

    applyPhase();
    const interval = setInterval(applyPhase, 60000);
    return () => clearInterval(interval);
  }, [theme]);
  
  const toggleTheme = (event: React.MouseEvent) => {
    if (overlay.active) return; // Prevent overlapping transitions

    const isNight = theme === "night";
    const nextTheme = isNight ? "day" : "night";
    const overlayType = isNight ? "sunrise" : "nightfall";

    setOverlay({ active: true, type: overlayType });
    document.documentElement.classList.add("theme-switching");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const switchTime = prefersReducedMotion ? 400 : 600; // Halfway point
    const totalTime = prefersReducedMotion ? 800 : 1200; // Total duration

    setTimeout(() => {
      setTheme(nextTheme);
    }, switchTime);

    setTimeout(() => {
      setOverlay({ active: false, type: overlayType });
      document.documentElement.classList.remove("theme-switching");
    }, totalTime + 100);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {overlay.active && (
        <div className={`theme-transition-overlay animating ${overlay.type}`} />
      )}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
