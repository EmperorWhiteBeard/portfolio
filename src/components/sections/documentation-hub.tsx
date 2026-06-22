"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Download, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/badge";
import { docCategories, documents } from "@/data/devops";

export function DocumentationHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      const matchesCategory = category === "All" || doc.category === category;
      const matchesQuery =
        query.trim() === "" ||
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="docs" className="relative py-24 sm:py-32 bg-bg-elevated/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          id="documentation_hub"
          title="Documentation Hub"
          description="Browse technical write-ups for every project — architecture decisions included, not just the happy path."
        />

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documentation…"
              className="w-full rounded-lg border border-border bg-panel pl-10 pr-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent outline-none transition-colors"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {docCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex-shrink-0 rounded-md border px-3 py-1.5 text-xs font-mono transition-colors ${
                category === cat
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-text-secondary hover:border-border-strong"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
              className="panel panel-hover p-5 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <Badge>{doc.category}</Badge>
              </div>
              <h3 className="mt-4 font-semibold text-sm text-text-primary leading-snug">
                {doc.title}
              </h3>
              <p className="mt-1.5 text-xs text-text-secondary leading-relaxed flex-1">
                {doc.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-[11px] text-text-tertiary font-mono">
                <span>{doc.pages} pages</span>
                <span>Updated {doc.updated}</span>
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-border py-2 text-xs text-text-secondary hover:border-border-strong hover:text-accent transition-colors">
                  <Maximize2 className="h-3.5 w-3.5" /> Preview
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-border py-2 text-xs text-text-secondary hover:border-border-strong hover:text-accent transition-colors">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-text-secondary text-sm">
                No documentation matches &quot;{query}&quot; in {category}.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
