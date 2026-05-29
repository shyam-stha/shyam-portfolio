"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, Loader2, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setMessage("");
      // Reset success status after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col h-full"
    >
      <div className="flex-grow">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
          Want to build something sharp?
        </h2>
        <p className="text-secondary mb-8 leading-relaxed">
          I’m open to frontend, full-stack, product engineering, and AI-assisted web projects. Based in Bhaktapur, Nepal.
        </p>

        {/* Quick Anonymous Message Form */}
        <div className="mb-12 max-w-md relative z-20">
          <form onSubmit={handleSend} className="relative flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a quick anonymous message..."
              disabled={status === "sending" || status === "success"}
              className="w-full px-5 py-3.5 pr-14 rounded-full border border-card bg-card text-primary placeholder:text-secondary placeholder:opacity-50 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/15 transition-all text-sm backdrop-blur-md"
            />
            <button
              type="submit"
              disabled={status === "sending" || !message.trim() || status === "success"}
              className="absolute right-1.5 p-2 rounded-full group overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] disabled:scale-100 disabled:opacity-40 disabled:hover:scale-100 disabled:active:scale-100 flex items-center justify-center w-10 h-10 border border-accent/20 hover:border-accent/50"
              aria-label="Send anonymous message"
            >
              {/* Glowing backdrop layer */}
              <div className="absolute inset-0 bg-cta-bg transition-opacity duration-500 opacity-90 group-hover:opacity-100" />



              <div className="relative z-10 flex items-center justify-center">
                {status === "sending" ? (
                  <Loader2 className="w-4 h-4 animate-spin text-cta-btn" />
                ) : (
                  <Send className="w-4 h-4 text-cta-btn group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                )}
              </div>
            </button>
          </form>

          {/* Feedback Messages */}
          <div className="mt-3 pl-4 text-xs min-h-[16px]">
            {status === "success" && (
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-medium flex items-center gap-1.5"
              >
                🤫 Message sent anonymously! Thank you.
              </motion.span>
            )}
            {status === "error" && (
              <motion.span
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 font-medium"
              >
                ⚠️ {errorMessage}
              </motion.span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 relative z-10">
          <a
            href="mailto:shyam.shrestha.dev@gmail.com"
            className="relative group flex items-center justify-between px-8 py-5 rounded-full overflow-hidden transition-all duration-500 active:scale-[0.98]"
          >
            {/* Base card surface */}
            <div className="absolute inset-0 rounded-full bg-card border border-card group-hover:border-accent/40 transition-colors duration-500" />

            {/* Subtle accent hover wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative z-10 font-semibold text-primary tracking-wide">Email Me</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 text-secondary group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </a>

          <a
            href="https://linkedin.com/in/shyam-stha"
            target="_blank"
            rel="noreferrer"
            className="relative group flex items-center justify-between px-8 py-5 rounded-full overflow-hidden transition-all duration-500 active:scale-[0.98]"
          >
            {/* Base card surface */}
            <div className="absolute inset-0 rounded-full bg-card border border-card group-hover:border-accent/40 transition-colors duration-500" />

            {/* Subtle accent hover wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative z-10 font-semibold text-primary tracking-wide">LinkedIn</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 text-secondary group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </a>

          <a
            href="https://wa.me/9779869135166"
            target="_blank"
            rel="noreferrer"
            className="relative group flex items-center justify-between px-8 py-5 rounded-full overflow-hidden transition-all duration-500 active:scale-[0.98]"
          >
            {/* Base card surface */}
            <div className="absolute inset-0 rounded-full bg-card border border-card group-hover:border-accent/40 transition-colors duration-500" />

            {/* Subtle accent hover wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="relative z-10 font-semibold text-primary tracking-wide">WhatsApp</span>
            <MessageCircle className="relative z-10 w-5 h-5 text-secondary group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </div>

      <footer className="mt-auto pt-8 border-t border-card">
        <p className="text-xs text-secondary leading-relaxed">
          <span className="opacity-60">Hand-crafted by</span> <span className="text-highlight font-medium">Shyam Shrestha</span> <span className="opacity-60">in</span> <span className="text-highlight font-medium">Visual Studio Code</span>.<br />
          <span className="opacity-60">Built with</span> <span className="text-highlight font-medium">Next.js</span>, <span className="text-highlight font-medium">Tailwind CSS</span>, <span className="opacity-60">and</span> <span className="text-highlight font-medium">Framer Motion</span>.<br />
          <span className="opacity-60">Deployed on</span> <span className="text-highlight font-medium">Cloudflare</span>. <span className="opacity-60">Set typeface in</span> <span className="text-highlight font-medium">Inter</span>.
        </p>
      </footer>
    </motion.div>
  );
}
