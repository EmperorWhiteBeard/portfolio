"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, GitBranch } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/badge";
import { diagrams } from "@/data/devops";
import type { DiagramItem } from "@/types";

export function ArchitectureDiagrams() {
  const [active, setActive] = useState<DiagramItem | null>(null);

  return (
    <section id="diagrams" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          id="architecture_diagrams"
          title="Architecture Diagrams"
          description="Visual systems thinking — click any diagram to zoom in."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diagrams.map((diagram, i) => (
            <motion.button
              key={diagram.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              onClick={() => setActive(diagram)}
              className="panel panel-hover text-left p-0 overflow-hidden group"
            >
              <div className="relative aspect-[4/3] bg-bg flex items-center justify-center border-b border-border">
                <GitBranch className="h-10 w-10 text-text-tertiary group-hover:text-accent transition-colors" />
                <div className="absolute inset-0 grid-texture opacity-30" />
                <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-md bg-bg/80 border border-border text-text-secondary group-hover:text-accent group-hover:border-accent/40 transition-colors">
                  <ZoomIn className="h-3.5 w-3.5" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-text-primary">
                    {diagram.title}
                  </h3>
                </div>
                <Badge className="mt-2">{diagram.category}</Badge>
                <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                  {diagram.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="panel max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-border p-4">
                <h3 className="font-semibold text-sm text-text-primary">
                  {active.title}
                </h3>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close diagram preview"
                  className="text-text-secondary hover:text-accent"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="aspect-[16/10] bg-bg flex items-center justify-center">
                <GitBranch className="h-16 w-16 text-text-tertiary" />
              </div>
              <div className="p-4">
                <Badge>{active.category}</Badge>
                <p className="mt-2 text-sm text-text-secondary">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
