"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MessageSquare,
  Ruler,
  FileText,
  Hammer,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin with a thorough discussion of your vision, needs, and budget. Every great project starts with understanding.",
    duration: "1-2 Days",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Our team creates detailed plans, selects premium materials, and prepares a comprehensive proposal for your approval.",
    duration: "3-7 Days",
  },
  {
    number: "03",
    icon: FileText,
    title: "Permitting",
    description:
      "We handle all permits and regulatory requirements, ensuring full compliance with local codes and regulations.",
    duration: "1-4 Weeks",
  },
  {
    number: "04",
    icon: Hammer,
    title: "Construction",
    description:
      "With precision and care, our skilled craftsmen bring your project to life. Regular updates keep you informed throughout.",
    duration: "Project Dependent",
  },
  {
    number: "05",
    icon: CheckCircle2,
    title: "Final Walkthrough",
    description:
      "A detailed inspection ensures every element meets our exacting standards and your complete satisfaction.",
    duration: "1 Day",
  },
];

export function Process() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-900/50 via-obsidian-950 to-obsidian-950" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow">Our Process</span>
          <h2 className="heading-section text-cream-50 mb-6">
            A Refined Approach to{" "}
            <span className="text-gold-gradient">Every Project</span>
          </h2>
          <p className="text-cream-400 text-lg leading-relaxed">
            From initial concept to final walkthrough, our methodical process
            ensures exceptional results and a seamless experience.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brass-500/50 via-brass-500/30 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative lg:flex lg:items-center lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`lg:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-8 card-hover"
                  >
                    {/* Number Badge */}
                    <span className="inline-block font-display text-5xl text-brass-500/30 mb-4">
                      {step.number}
                    </span>

                    <h3 className="font-display text-2xl text-cream-50 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-cream-400 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-brass-400">
                      <span className="w-4 h-px bg-brass-500/50" />
                      {step.duration}
                    </span>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-obsidian-950 border-2 border-brass-500/50 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-brass-400" />
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-cream-400 mb-6">
            Ready to experience our refined approach firsthand?
          </p>
          <a href="#contact" className="btn-luxury-primary">
            Begin Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}

