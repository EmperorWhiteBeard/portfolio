"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          id="certifications"
          title="Certifications"
          description="Verified learning, not just self-reported skills."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="panel panel-hover p-5 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-status">
                  <CheckCircle2 className="h-3 w-3" />
                  earned
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-sm text-text-primary leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs text-text-secondary">{cert.issuer}</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="font-mono text-[10px] text-text-tertiary">
                  {cert.date}
                </span>
                {cert.pdfUrl ? (
                  <a
                    href={cert.pdfUrl}
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[10px] text-text-tertiary font-mono">
                    PDF pending upload
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
