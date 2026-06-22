"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Cloud,
  Workflow,
  Layers,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "BCA Graduate",
    text: "Computer Applications foundation across programming, networks, and systems.",
  },
  {
    icon: Cloud,
    title: "AWS-Focused",
    text: "Hands-on with EC2, S3, IAM, CloudFront, and CodePipeline through real builds.",
  },
  {
    icon: Workflow,
    title: "CI/CD Mindset",
    text: "Treats every deployment as a pipeline stage, not a manual step.",
  },
  {
    icon: Layers,
    title: "Infrastructure as Code",
    text: "Terraform-first approach to provisioning — reproducible over manual.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    text: "AWS Educate and Cisco-certified, with Docker and Kubernetes labs in progress.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          id="about_me"
          title="Building infrastructure people can trust"
          description="A short readout on where I come from and what I'm building toward."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-text-secondary leading-relaxed text-base"
          >
            <p>
              I&apos;m a BCA graduate who got pulled toward DevOps and Cloud
              Engineering by a simple realization: writing software is only
              half the job — shipping it reliably is the other half, and
              that&apos;s the half most people skip learning properly.
            </p>
            <p>
              Since then I&apos;ve focused on the AWS ecosystem, CI/CD
              pipeline design, containerization with Docker, and managing
              infrastructure as code with Terraform. I care less about
              clicking through a console and more about whether the same
              infrastructure can be torn down and rebuilt identically from a
              repository.
            </p>
            <p>
              I hold AWS Educate certifications in Cloud Practitioner
              Essentials, Generative AI, and Machine Learning Foundations,
              alongside Cisco Networking Fundamentals — and I&apos;m
              continuing into Kubernetes and Ansible as the next layer of
              that stack.
            </p>
            <p>
              What I&apos;m looking for next is a team where I can apply this
              hands-on foundation against production traffic, real
              incidents, and real constraints — as a DevOps Engineer, Cloud
              Engineer, or on the path toward SRE.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="panel panel-hover p-5 group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-semibold text-sm text-text-primary">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">
                    {h.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
