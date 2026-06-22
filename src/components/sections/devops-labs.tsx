"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Github, FileText, Camera, GitGraph } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { labCategories } from "@/data/devops";

export function DevOpsLabs() {
  return (
    <section id="labs" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          id="devops_labs"
          title="DevOps Labs"
          description="Smaller, focused builds — each one isolating a single tool or pattern."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {labCategories.map((lab, i) => {
            const Icon =
              (Icons[lab.icon as keyof typeof Icons] as Icons.LucideIcon) ??
              GitGraph;
            return (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="panel panel-hover p-5 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="font-mono-num text-xs text-text-tertiary">
                    {String(lab.count).padStart(2, "0")} repos
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-sm text-text-primary">
                  {lab.label}
                </h3>
                <p className="mt-1.5 text-xs text-text-secondary leading-relaxed flex-1">
                  {lab.description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-text-tertiary">
                  {lab.githubUrl && (
                    <a
                      href={lab.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${lab.label} GitHub repo`}
                      className="hover:text-accent transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <FileText className="h-3.5 w-3.5" aria-hidden />
                  <Camera className="h-3.5 w-3.5" aria-hidden />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
