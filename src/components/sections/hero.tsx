"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Download,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/button";

const bootLines = [
  "resolving identity… mizhab-mujeeb-np",
  "checking certifications… aws, cisco, intel — ok",
  "loading stack… terraform, docker, ci/cd — ok",
  "status: available for hire",
];

export function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= bootLines.length) {
      setDone(true);
      return;
    }
    const current = bootLines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-texture pointer-events-none" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.15] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Left: identity */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-status/30 bg-status-soft px-3 py-1 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot absolute h-2 w-2 rounded-full" />
                <span className="relative h-2 w-2 rounded-full bg-status" />
              </span>
              <span className="font-mono text-xs text-status">
                status: available for hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 font-mono text-sm sm:text-base text-accent"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button
                href={profile.resumeUrl}
                variant="primary"
                icon={<Download className="h-4 w-4" />}
                target="_blank"
              >
                Download Resume
              </Button>
              <Button
                href="#projects"
                variant="secondary"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                View Projects
              </Button>
              <Button
                href={profile.github}
                variant="secondary"
                icon={<Github className="h-4 w-4" />}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                href={profile.linkedin}
                variant="secondary"
                icon={<Linkedin className="h-4 w-4" />}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </motion.div>
          </div>

          {/* Right: status console panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="panel glow-accent overflow-hidden"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-status/60" />
              </div>
              <span className="font-mono text-xs text-text-tertiary ml-2">
                status.sh
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[180px]">
              {bootLines.slice(0, lineIndex).map((line, i) => (
                <div key={i} className="text-text-secondary">
                  <span className="text-status">✓</span> {line}
                </div>
              ))}
              {!done && lineIndex < bootLines.length && (
                <div className="text-text-secondary">
                  <span className="text-accent">›</span>{" "}
                  {bootLines[lineIndex].slice(0, charIndex)}
                  <span className="caret" />
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
              <StatCell label="Uptime" value="2 yrs" />
              <StatCell label="Certs" value="5" />
              <StatCell label="Region" value="ap-south-1" />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary hover:text-accent transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-3 text-center">
      <div className="font-mono-num text-sm text-text-primary">{value}</div>
      <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mt-0.5">
        {label}
      </div>
    </div>
  );
}
