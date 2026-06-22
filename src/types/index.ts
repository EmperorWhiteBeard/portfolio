export type SkillLevel = "learning" | "proficient" | "strong";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  pdfUrl?: string;
  status: "earned" | "in-progress";
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  featured?: boolean;
  name: string;
  tagline: string;
  description: string;
  architecture: string[];
  stack: string[];
  challenges: { problem: string; solution: string }[];
  learnings: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  docUrl?: string;
  liveUrl?: string;
  diagramAlt: string;
}

export interface LabCategory {
  id: string;
  label: string;
  icon: string;
  count: number;
  description: string;
  githubUrl?: string;
  docUrl?: string;
}

export interface DocItem {
  id: string;
  title: string;
  category: string;
  description: string;
  pages: number;
  updated: string;
}

export interface DiagramItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  org: string;
  description: string;
  type: "education" | "certification" | "project" | "goal";
}
