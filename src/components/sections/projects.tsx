"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  FileText,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-bg-elevated/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          id="projects"
          title="Projects"
          description="Production-style builds — including the failures fixed along the way."
        />

        {featured && (
          <div className="mt-12">
            <FeaturedProjectCard project={featured} />
          </div>
        )}

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="panel panel-hover p-6 flex flex-col"
            >
              <h3 className="font-semibold text-lg text-text-primary">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-accent mt-1">
                {project.tagline}
              </p>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 5).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    size="sm"
                    icon={<Github className="h-3.5 w-3.5" />}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </Button>
                )}
                {project.docUrl && (
                  <Button
                    href={project.docUrl}
                    variant="ghost"
                    size="sm"
                    icon={<FileText className="h-3.5 w-3.5" />}
                  >
                    Docs
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="panel glow-accent overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="accent">Featured Project</Badge>
          <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
            production-style
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-sm text-accent">
          {project.tagline}
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Architecture flow */}
        <div className="mt-6 panel bg-bg p-4 overflow-x-auto">
          <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider mb-3">
            Architecture Flow
          </div>
          <div className="flex items-center gap-2 min-w-max">
            {project.architecture.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-md border border-border-strong bg-panel font-mono text-xs text-text-primary whitespace-nowrap">
                  {step}
                </div>
                {i < project.architecture.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-text-tertiary flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="panel bg-bg p-3 text-center">
              <div className="font-mono-num text-xl font-bold text-accent">
                {metric.value}
              </div>
              <div className="text-[11px] text-text-tertiary mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Stack badges */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="primary"
              icon={<Github className="h-4 w-4" />}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </Button>
          )}
          {project.docUrl && (
            <Button
              href={project.docUrl}
              variant="secondary"
              icon={<FileText className="h-4 w-4" />}
            >
              Documentation
            </Button>
          )}
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="secondary"
              icon={<ExternalLink className="h-4 w-4" />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-accent transition-colors ml-auto"
            aria-expanded={expanded}
          >
            {expanded ? "Hide" : "Show"} technical details
            <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border"
          >
            <div className="p-6 sm:p-8 grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                  Challenges &amp; Solutions
                </h4>
                <div className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="panel bg-bg p-4">
                      <p className="text-xs text-danger font-medium">
                        Problem
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {c.problem}
                      </p>
                      <p className="text-xs text-status font-medium mt-3">
                        Solution
                      </p>
                      <p className="text-sm text-text-secondary mt-1">
                        {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                  Key Learnings
                </h4>
                <ul className="space-y-3">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-text-secondary">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
