import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud",
    label: "Cloud — AWS",
    description: "Core AWS services used across deployment, delivery, and security.",
    skills: [
      { name: "EC2", level: "proficient" },
      { name: "S3", level: "strong" },
      { name: "IAM", level: "proficient" },
      { name: "CloudFront", level: "proficient" },
      { name: "CloudWatch", level: "proficient" },
      { name: "CodePipeline", level: "strong" },
      { name: "CodeBuild", level: "strong" },
      { name: "Lambda", level: "learning" },
      { name: "Secrets Manager", level: "proficient" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & CI/CD",
    description: "Version control and pipeline automation tooling.",
    skills: [
      { name: "Git", level: "strong" },
      { name: "GitHub", level: "strong" },
      { name: "GitHub Actions", level: "proficient" },
      { name: "Jenkins", level: "proficient" },
      { name: "CI/CD Design", level: "proficient" },
    ],
  },
  {
    id: "containers",
    label: "Containers",
    description: "Packaging and orchestrating workloads.",
    skills: [
      { name: "Docker", level: "strong" },
      { name: "Kubernetes", level: "learning" },
    ],
  },
  {
    id: "iac",
    label: "Infrastructure as Code",
    description: "Declarative, version-controlled infrastructure.",
    skills: [
      { name: "Terraform", level: "proficient" },
      { name: "Ansible", level: "learning" },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring & Observability",
    description: "Visibility into infrastructure health and performance.",
    skills: [
      { name: "CloudWatch", level: "proficient" },
      { name: "Prometheus", level: "learning" },
      { name: "Grafana", level: "learning" },
    ],
  },
  {
    id: "scripting",
    label: "Scripting & OS",
    description: "Automation glue and the operating environment underneath it.",
    skills: [
      { name: "Python", level: "proficient" },
      { name: "Bash", level: "strong" },
      { name: "Linux", level: "strong" },
    ],
  },
];

export const levelMeta: Record<
  string,
  { label: string; fill: number }
> = {
  learning: { label: "Learning", fill: 35 },
  proficient: { label: "Proficient", fill: 70 },
  strong: { label: "Strong", fill: 95 },
};
