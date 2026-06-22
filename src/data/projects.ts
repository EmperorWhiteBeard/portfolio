import { Project } from "@/types";
import { profile } from "./profile";

export const projects: Project[] = [
  {
    id: "throw",
    featured: true,
    name: "THROW",
    tagline: "Multi-App CI/CD & Cloud Infrastructure on AWS",
    description:
      "A production-style continuous delivery platform built for a 3-app Flutter marketplace. Every push triggers a fully automated path from source to a CDN-fronted, privately stored build — secrets, monitoring, and infrastructure are all managed as code rather than configured by hand.",
    architecture: [
      "GitHub (source)",
      "AWS CodePipeline (orchestration)",
      "AWS CodeBuild (build & test)",
      "Amazon S3 (private artifact storage)",
      "Amazon CloudFront (secured distribution)",
    ],
    stack: [
      "AWS CodePipeline",
      "AWS CodeBuild",
      "Amazon S3",
      "Amazon CloudFront",
      "AWS Secrets Manager",
      "Amazon CloudWatch",
      "Amazon SNS",
      "Terraform",
      "GitHub",
    ],
    challenges: [
      {
        problem: "Build pipeline failed intermittently across three separate Flutter app builds sharing one pipeline definition.",
        solution:
          "Isolated each app into its own CodeBuild project with scoped buildspecs, then added stage-level retry and failure notifications via SNS.",
      },
      {
        problem: "Credentials and API keys were hard-coded in build scripts during early iterations.",
        solution:
          "Migrated every secret to AWS Secrets Manager and injected values at build time, removing all plaintext credentials from the repository.",
      },
      {
        problem: "S3 build artifacts were publicly reachable by direct URL.",
        solution:
          "Locked the bucket down entirely and fronted it with CloudFront using origin access control, so content is only servable through the CDN.",
      },
      {
        problem: "No visibility into pipeline health or failure causes.",
        solution:
          "Instrumented CloudWatch alarms on build and deploy stages, routed through SNS for real-time failure alerts.",
      },
    ],
    learnings: [
      "Designing multi-app pipelines that share infrastructure without sharing failure domains.",
      "Treating secrets as infrastructure, not configuration.",
      "Writing Terraform modules that are reusable across environments rather than copy-pasted.",
      "The operational difference between 'it deploys' and 'it's safe to deploy unattended.'",
    ],
    metrics: [
      { label: "Apps under one pipeline", value: "3" },
      { label: "Infra managed as code", value: "100%" },
      { label: "Hard-coded secrets remaining", value: "0" },
      { label: "Deploy stages monitored", value: "All" },
    ],
    githubUrl: `${profile.github}throw`,
    docUrl: "/docs/throw-architecture.pdf",
    diagramAlt: "THROW CI/CD architecture: GitHub to CodePipeline to CodeBuild to S3 to CloudFront, with Secrets Manager and CloudWatch/SNS monitoring",
  },
  {
    id: "terraform-multi-env",
    name: "Terraform Multi-Environment Stack",
    tagline: "Reusable IaC modules for dev/stage/prod parity",
    description:
      "A modular Terraform codebase provisioning identical AWS infrastructure across three environments from a single source of truth, with remote state and environment-scoped variables.",
    architecture: ["Terraform modules", "S3 remote state", "DynamoDB state lock", "AWS VPC / EC2 / IAM"],
    stack: ["Terraform", "AWS", "S3", "DynamoDB", "IAM"],
    challenges: [
      {
        problem: "State drift between environments caused inconsistent infrastructure.",
        solution: "Centralized remote state in S3 with DynamoDB locking, eliminating concurrent-apply conflicts.",
      },
    ],
    learnings: ["Module composition over duplication.", "Why state locking matters the moment more than one person touches infra."],
    metrics: [{ label: "Environments", value: "3" }, { label: "Manual provisioning steps", value: "0" }],
    githubUrl: `${profile.github}terraform-multi-env`,
    diagramAlt: "Terraform module structure provisioning dev, stage, and prod environments from shared modules",
  },
  {
    id: "jenkins-docker-pipeline",
    name: "Containerized Jenkins Pipeline",
    tagline: "Self-hosted CI for a Dockerized microservice",
    description:
      "A Jenkins pipeline running in Docker that builds, tests, and pushes a containerized service to a private registry on every merge to main.",
    architecture: ["Jenkins (Docker)", "Docker Hub / private registry", "GitHub webhooks"],
    stack: ["Jenkins", "Docker", "GitHub Actions", "Bash"],
    challenges: [
      {
        problem: "Jenkins agent lost Docker socket access after host restarts.",
        solution: "Mounted the Docker socket explicitly and documented the agent bootstrap process as a script.",
      },
    ],
    learnings: ["Pipeline-as-code (Jenkinsfile) over UI-configured jobs.", "Webhook-triggered builds vs polling."],
    metrics: [{ label: "Build time reduction", value: "~40%" }],
    githubUrl: `${profile.github}jenkins-docker-pipeline`,
    diagramAlt: "Jenkins running in Docker, triggered by GitHub webhook, pushing images to a private registry",
  },
];
