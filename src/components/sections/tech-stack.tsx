"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories, levelMeta } from "@/data/skills";

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32 bg-bg-elevated/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          id="tech_stack"
          title="The stack, by category"
          description="Tools grouped the way they're actually used — not a tag cloud."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="panel p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                {category.label}
              </h3>
              <p className="mt-1 text-xs text-text-tertiary">
                {category.description}
              </p>

              <ul className="mt-4 space-y-3">
                {category.skills.map((skill) => {
                  const meta = levelMeta[skill.level];
                  return (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-text-primary">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-text-tertiary">
                          {meta.label}
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${meta.fill}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
