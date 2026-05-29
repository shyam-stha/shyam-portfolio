"use client";

import { useEffect, useState } from "react";

export function LocalTime() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const dateOpts: Intl.DateTimeFormatOptions = { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      };
      const timeOpts: Intl.DateTimeFormatOptions = { 
        hour: 'numeric', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      };
      
      const dateString = now.toLocaleDateString(undefined, dateOpts);
      const timeString = now.toLocaleTimeString(undefined, timeOpts);
      
      setTimeStr(`Local Time · ${dateString} · ${timeString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) return null; // Prevent hydration mismatch

  return (
    <div className="text-[11px] font-mono text-secondary opacity-60 tracking-wider uppercase mt-6 lg:mt-0">
      {timeStr}
    </div>
  );
}
