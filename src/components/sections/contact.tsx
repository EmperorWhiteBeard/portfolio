"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { profile } from "@/data/profile";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Form submission endpoint can be wired up later (e.g. Formspree, Resend, or an API route).
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-bg-elevated/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="10"
          id="contact"
          title="Let's build something reliable"
          description="Open to DevOps, Cloud Engineering, and SRE roles — reach out directly or send a message below."
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value={profile.location}
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value={`github.com/${profile.githubUsername}`}
              href={profile.github}
              external
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/mizhabnp"
              href={profile.linkedin}
              external
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="panel p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" required />
              <Field label="Email" id="email" type="email" required />
            </div>
            <div className="mt-4">
              <Field label="Subject" id="subject" required />
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-xs font-mono text-text-tertiary uppercase tracking-wider mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent outline-none transition-colors resize-none"
                placeholder="Tell me about the role or project…"
              />
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                variant="primary"
                disabled={status !== "idle"}
                icon={
                  status === "sent" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )
                }
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending…"}
                {status === "sent" && "Message Sent"}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="panel panel-hover p-4 flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent flex-shrink-0">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <div className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
          {label}
        </div>
        <div className="text-sm text-text-primary mt-0.5">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }
  return content;
}

function Field({
  label,
  id,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-mono text-text-tertiary uppercase tracking-wider mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent outline-none transition-colors"
      />
    </div>
  );
}
