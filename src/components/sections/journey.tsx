"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Target } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/data/devops";
import type { TimelineItem } from "@/types";

const typeIcon: Record<TimelineItem["type"], typeof GraduationCap> = {
  education: GraduationCap,
  certification: Award,
  project: Code2,
  goal: Target,
};

const typeColor: Record<TimelineItem["type"], string> = {
  education: "text-text-secondary",
  certification: "text-accent",
  project: "text-status",
  goal: "text-accent",
};

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-bg-elevated/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          id="learning_journey"
          title="Experience &amp; Learning Journey"
          description="The path from degree to deployable infrastructure."
        />

        <div className="mt-12 relative">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = typeIcon[item.type];
              const isGoal = item.type === "goal";
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex gap-5 sm:gap-6"
                >
                  <div
                    className={`relative z-10 flex-shrink-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 ${
                      isGoal
                        ? "border-accent bg-accent-soft"
                        : "border-border bg-panel"
                    }`}
                  >
                    <Icon className={`h-4.5 w-4.5 sm:h-5 sm:w-5 ${typeColor[item.type]}`} />
                  </div>
                  <div className="panel panel-hover flex-1 p-5">
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <h3 className="font-semibold text-sm sm:text-base text-text-primary">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[11px] text-text-tertiary">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-accent font-mono mt-0.5">
                      {item.org}
                    </p>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
