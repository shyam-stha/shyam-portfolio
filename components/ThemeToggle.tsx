"use client";

import { useTheme } from "../app/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 lg:top-8 lg:right-12 z-50">
      <motion.button
        onClick={toggleTheme}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-card border border-card hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "night" ? 0 : 180,
            scale: theme === "night" ? 1 : 0,
            opacity: theme === "night" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon className="w-5 h-5 text-accent" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "day" ? 0 : -180,
            scale: theme === "day" ? 1 : 0,
            opacity: theme === "day" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.button>
    </div>
  );
}
