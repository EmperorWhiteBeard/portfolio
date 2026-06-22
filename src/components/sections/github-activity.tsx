"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  BookOpen,
  Users,
  ExternalLink,
  Github,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/badge";
import { profile } from "@/data/profile";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export function GitHubActivity() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${profile.githubUsername}`),
          fetch(
            `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=6`
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        if (!cancelled) {
          setUser(userData);
          setRepos(Array.isArray(reposData) ? reposData : []);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const languages = Array.from(
    new Set(repos.map((r) => r.language).filter(Boolean))
  ) as string[];

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="09"
          id="github_activity"
          title="GitHub Activity"
          description="Live data pulled directly from the GitHub API."
        />

        {status === "error" && (
          <div className="mt-10 panel p-6 text-center">
            <p className="text-sm text-text-secondary">
              GitHub data couldn&apos;t be loaded right now. View the profile
              directly instead.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
            >
              github.com/{profile.githubUsername}{" "}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        {status !== "error" && (
          <>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard
                icon={BookOpen}
                label="Repositories"
                value={user?.public_repos}
                loading={status === "loading"}
              />
              <StatCard
                icon={Star}
                label="Stars (recent)"
                value={totalStars}
                loading={status === "loading"}
              />
              <StatCard
                icon={Users}
                label="Followers"
                value={user?.followers}
                loading={status === "loading"}
              />
              <StatCard
                icon={GitFork}
                label="Following"
                value={user?.following}
                loading={status === "loading"}
              />
            </div>

            {languages.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <Badge key={lang} variant="status">
                    {lang}
                  </Badge>
                ))}
              </div>
            )}

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {status === "loading"
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="panel p-5 animate-pulse h-32" />
                  ))
                : repos.map((repo, i) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                      className="panel panel-hover p-5 flex flex-col"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-mono text-sm text-text-primary truncate">
                          {repo.name}
                        </h3>
                        <Github className="h-3.5 w-3.5 text-text-tertiary flex-shrink-0" />
                      </div>
                      <p className="mt-2 text-xs text-text-secondary leading-relaxed flex-1 line-clamp-2">
                        {repo.description ?? "No description provided."}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-[11px] text-text-tertiary font-mono">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-accent" />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" /> {repo.forks_count}
                        </span>
                      </div>
                    </motion.a>
                  ))}
            </div>
          </>
        )}

        <div className="mt-8 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <Github className="h-4 w-4" /> View full GitHub profile
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  loading,
}: {
  icon: typeof Star;
  label: string;
  value?: number;
  loading: boolean;
}) {
  return (
    <div className="panel p-4 text-center">
      <Icon className="h-4 w-4 text-accent mx-auto" />
      <div className="font-mono-num text-xl font-bold text-text-primary mt-2">
        {loading ? (
          <span className="inline-block h-6 w-10 bg-border rounded animate-pulse" />
        ) : (
          value ?? "—"
        )}
      </div>
      <div className="text-[11px] text-text-tertiary mt-1">{label}</div>
    </div>
  );
}
