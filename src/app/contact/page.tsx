"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <div className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold md:text-5xl"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-muted"
          >
            Have a project in mind? We&apos;d love to hear about it. Send us a
            message and we&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-5">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            {status === "sent" ? (
              <div className="rounded-xl border border-accent/50 bg-accent/5 p-12 text-center">
                <span className="text-5xl">✅</span>
                <h2 className="mt-4 font-heading text-2xl font-bold">
                  Message Sent!
                </h2>
                <p className="mt-2 text-muted">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-accent hover:text-accent/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className={`w-full rounded-lg border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent ${
                      errors.name ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={`w-full rounded-lg border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent ${
                      errors.email ? "border-red-500" : "border-border"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`w-full resize-none rounded-lg border bg-card px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent ${
                      errors.message ? "border-red-500" : "border-border"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-background transition-all hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 md:col-span-2"
          >
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                Email
              </h3>
              <p className="mt-2 text-accent">hello@sodimedia.dev</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                Response Time
              </h3>
              <p className="mt-2">Within 24 hours</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted">
                What Happens Next?
              </h3>
              <ol className="mt-3 space-y-3 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="font-heading font-bold text-accent">1.</span>
                  We review your message and project details
                </li>
                <li className="flex gap-3">
                  <span className="font-heading font-bold text-accent">2.</span>
                  We schedule a free discovery call
                </li>
                <li className="flex gap-3">
                  <span className="font-heading font-bold text-accent">3.</span>
                  We send a proposal with timeline and cost
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
